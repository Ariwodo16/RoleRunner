// lib/email.ts
// Simple email service using Resend (recommended)

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailParams) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'RoleRunner <onboarding@resend.dev>', // Change this to your verified domain
        to,
        subject,
        html,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send email');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

// Helper function to format application data as HTML email
export function formatApplicationEmail(data: any) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #fb9a3a 0%, #ea570c 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #666; }
          .value { margin-top: 5px; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">🏃‍♂️ New Pilot Application</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">RoleRunner Application Received</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${data.phone || 'Not provided'}</div>
            </div>
            
            <div class="field">
              <div class="label">Target Roles:</div>
              <div class="value">${data.targetRoles}</div>
            </div>
            
            <div class="field">
              <div class="label">Work Location Preference:</div>
              <div class="value">${data.remote}</div>
            </div>
            
            <div class="field">
              <div class="label">Location(s):</div>
              <div class="value">${data.location || 'Not specified'}</div>
            </div>
            
            <div class="field">
              <div class="label">Minimum Salary:</div>
              <div class="value">${data.salary || 'Not specified'}</div>
            </div>
            
            <div class="field">
              <div class="label">Work Authorization:</div>
              <div class="value">${data.workAuth || 'Not specified'}</div>
            </div>
            
            <div class="field">
              <div class="label">LinkedIn:</div>
              <div class="value">${data.linkedin || 'Not provided'}</div>
            </div>
            
            <div class="field">
              <div class="label">Portfolio/GitHub:</div>
              <div class="value">${data.portfolio || 'Not provided'}</div>
            </div>
            
            <div class="field">
              <div class="label">Preferred Platforms:</div>
              <div class="value">${data.platforms?.join(', ') || 'None selected'}</div>
            </div>
            
            <div class="field">
              <div class="label">Additional Notes:</div>
              <div class="value">${data.notes || 'None'}</div>
            </div>
            
            <div class="footer">
              Received: ${new Date().toLocaleString('en-US', { 
                dateStyle: 'full', 
                timeStyle: 'short' 
              })}
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Helper for contact form emails
export function formatContactEmail(data: any) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #666; }
          .value { margin-top: 5px; }
          .message-box { background: white; padding: 20px; border-left: 4px solid #0ea5e9; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">💬 New Contact Message</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">From RoleRunner Website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">From:</div>
              <div class="value">${data.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${data.subject}</div>
            </div>
            
            <div class="message-box">
              <div class="label">Message:</div>
              <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <p style="margin-top: 30px; color: #666; font-size: 12px;">
              Received: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}
