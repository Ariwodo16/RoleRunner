import { NextResponse } from 'next/server';
import { sendEmail, formatContactEmail } from '@/lib/email';
import { addToGoogleSheet } from '@/lib/sheets';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    console.log('Contact form received:', {
      name: data.name,
      email: data.email,
      subject: data.subject,
      timestamp: new Date().toISOString(),
    });

    // 1. Send email notification
    const emailResult = await sendEmail({
      to: process.env.NOTIFICATION_EMAIL || 'rolerunner@gmail.com',
      subject: `💬 Contact Form: ${data.subject}`,
      html: formatContactEmail(data),
    });

    if (!emailResult.success) {
      console.error('Failed to send email:', emailResult.error);
    }

    // 2. Add to Google Sheets
    const sheetsResult = await addToGoogleSheet(data, 'contacts');
    
    if (!sheetsResult.success) {
      console.error('Failed to add to Google Sheets:', sheetsResult.error);
    }

    // 3. Send confirmation to sender
    await sendEmail({
      to: data.email,
      subject: 'We received your message! 👋',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); color: white; padding: 30px; border-radius: 10px; text-align: center; }
              .content { padding: 30px 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">Thanks for reaching out!</h1>
              </div>
              <div class="content">
                <p>Hi ${data.name},</p>
                <p>We've received your message and will get back to you within 24 hours.</p>
                <p><strong>Your message:</strong></p>
                <p style="background: #f5f5f5; padding: 15px; border-left: 4px solid #0ea5e9; margin: 20px 0;">
                  ${data.message.replace(/\n/g, '<br>')}
                </p>
                <p>Talk soon!</p>
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
    
    return NextResponse.json(
      { success: true, message: 'Message received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Error sending message' },
      { status: 500 }
    );
  }
}
