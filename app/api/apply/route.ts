import { NextResponse } from 'next/server';
import { sendEmail, formatApplicationEmail } from '@/lib/email';
import { addToGoogleSheet } from '@/lib/sheets';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    console.log('Application received:', {
      name: data.name,
      email: data.email,
      timestamp: new Date().toISOString(),
    });

    // 1. Send email notification to your Gmail
    const emailResult = await sendEmail({
      to: process.env.NOTIFICATION_EMAIL || 'rolerunner@gmail.com', // Change this to your Gmail
      subject: `🏃‍♂️ New Pilot Application - ${data.name}`,
      html: formatApplicationEmail(data),
    });

    if (!emailResult.success) {
      console.error('Failed to send email:', emailResult.error);
    }

    // 2. Add to Google Sheets
    const sheetsResult = await addToGoogleSheet(data, 'applications');
    
    if (!sheetsResult.success) {
      console.error('Failed to add to Google Sheets:', sheetsResult.error);
    }

    // 3. Optional: Send confirmation email to applicant
    if (data.email) {
      await sendEmail({
        to: data.email,
        subject: 'Thanks for applying to RoleRunner! 🎯',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #fb9a3a 0%, #ea570c 100%); color: white; padding: 30px; border-radius: 10px; text-align: center; }
                .content { padding: 30px 20px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">🏃‍♂️ Welcome to RoleRunner!</h1>
                </div>
                <div class="content">
                  <p>Hi ${data.name},</p>
                  <p>Thanks for applying to our pilot program! We've received your application and will review it within the next 24-48 hours.</p>
                  <p><strong>What's next?</strong></p>
                  <ul>
                    <li>We'll review your target roles and criteria</li>
                    <li>Reach out to schedule a quick fit check call</li>
                    <li>Get you started on your sprint within 48 hours!</li>
                  </ul>
                  <p>In the meantime, if you have any questions, just reply to this email.</p>
                  <p>Looking forward to helping you land your next role!</p>
                  <p style="margin-top: 30px;">
                    Best,<br>
                    <strong>The RoleRunner Team</strong>
                  </p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
    }

    return NextResponse.json(
      { success: true, message: 'Application received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { success: false, message: 'Error processing application' },
      { status: 500 }
    );
  }
}
