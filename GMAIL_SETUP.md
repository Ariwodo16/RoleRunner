# 📧 Gmail Integration Setup Guide

This guide shows you how to receive form submissions directly to your Gmail using **Resend** (easiest method).

## Why Resend?

- ✅ **Easy setup** - just sign up and get an API key
- ✅ **Free tier** - 3,000 emails/month for free
- ✅ **Reliable delivery** - professional email service
- ✅ **No Gmail password needed** - more secure

## Step 1: Sign Up for Resend

1. Go to [resend.com](https://resend.com)
2. Click "Start Building" or "Sign Up"
3. Create a free account

## Step 2: Get Your API Key

1. After signing in, go to **API Keys** in the dashboard
2. Click **Create API Key**
3. Give it a name (e.g., "RoleRunner Production")
4. Copy the API key (starts with `re_...`)
5. **Save it somewhere safe** - you won't see it again!

## Step 3: Add Environment Variables

Create a `.env.local` file in your RoleRunner project root:

```bash
# .env.local

# Resend API Key (from Step 2)
RESEND_API_KEY=re_your_api_key_here

# Your Gmail address (where you want to receive notifications)
NOTIFICATION_EMAIL=your.email@gmail.com
```

**Important:** Never commit `.env.local` to git! It's already in `.gitignore`.

## Step 4: Install Resend (Optional - we're using fetch API)

The code already uses fetch, but if you want to use Resend's official library:

```bash
npm install resend
```

## Step 5: Test It!

1. Start your dev server: `npm run dev`
2. Go to http://localhost:3000
3. Fill out the application form
4. Submit it
5. **Check your Gmail!** You should receive:
   - A notification email with all form details
   - The applicant gets a confirmation email too

## Email Flow

When someone submits a form:

1. **You receive** → Beautiful HTML email with all details
2. **They receive** → Confirmation email thanking them
3. **Console logs** → Backup in terminal

## Customizing Emails

Edit the email templates in `/lib/email.ts`:

```typescript
// Change the "from" address (requires domain verification)
from: 'RoleRunner <hello@yourdomain.com>',

// Modify the HTML templates
export function formatApplicationEmail(data: any) {
  return `
    // Your custom HTML here
  `;
}
```

## Using Your Own Domain (Optional)

For professional emails like `hello@rolerunner.com`:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `rolerunner.com`)
4. Add the DNS records they provide to your domain registrar
5. Wait for verification (usually 5-10 minutes)
6. Update the `from` field in `/lib/email.ts`:

```typescript
from: 'RoleRunner <hello@rolerunner.com>',
```

## Troubleshooting

### "Email service not configured" error
- Check that `RESEND_API_KEY` is in `.env.local`
- Restart your dev server after adding env variables

### Emails not arriving
- Check spam folder
- Verify API key is correct
- Check Resend dashboard for delivery logs

### Want to use Gmail SMTP instead?
See `GMAIL_SMTP_SETUP.md` (alternative, more complex method)

## Alternative: Using SendGrid

If you prefer SendGrid:

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Update `/lib/email.ts` to use SendGrid API
4. Add `SENDGRID_API_KEY` to `.env.local`

## Next Steps

✅ Gmail integration done!

Now set up Google Sheets integration: See `GOOGLE_SHEETS_SETUP.md`

---

**Questions?** The email code is in `/lib/email.ts` and `/app/api/apply/route.ts`
