# 🔌 Complete Integration Guide

Get your RoleRunner website connected to Gmail and Google Sheets in under 10 minutes!

## Quick Setup Checklist

- [ ] Set up email notifications (Gmail)
- [ ] Set up Google Sheets logging
- [ ] Test both integrations
- [ ] Deploy to production

---

## 🚀 Fast Track (10 Minutes)

### 1. Gmail Setup (3 minutes)

**Using Resend (Easiest):**

1. Sign up at [resend.com](https://resend.com) - it's free!
2. Get your API key from the dashboard
3. Create `.env.local` in your project root:

```bash
RESEND_API_KEY=re_your_actual_key_here
NOTIFICATION_EMAIL=youremail@gmail.com
```

4. Done! Test by submitting a form.

📖 **Detailed guide:** `GMAIL_SETUP.md`

### 2. Google Sheets Setup (5 minutes)

**Using Apps Script (Easiest):**

1. Create a Google Sheet named "RoleRunner Applications"
2. Add two tabs: "Applications" and "Contacts"
3. Add headers (see `GOOGLE_SHEETS_SETUP.md` for exact columns)
4. Go to Extensions → Apps Script
5. Paste the script from `GOOGLE_SHEETS_SETUP.md`
6. Deploy as Web App → Copy the URL
7. Add to `.env.local`:

```bash
GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/.../exec
```

8. Done! Test by submitting a form.

📖 **Detailed guide:** `GOOGLE_SHEETS_SETUP.md`

### 3. Test Everything (2 minutes)

```bash
# Restart your server
npm run dev

# Go to http://localhost:3000
# Submit the application form
# Check:
# ✅ Your Gmail inbox (you should get a notification)
# ✅ Your Google Sheet (new row should appear)
# ✅ Applicant's email (they get a confirmation)
```

---

## What Happens When Someone Submits a Form?

### Application Form (`/#apply`)

1. **Your Gmail** receives:
   - Subject: "🏃‍♂️ New Pilot Application - [Name]"
   - Beautiful HTML email with all details
   - Timestamp

2. **Your Google Sheet** gets:
   - New row in "Applications" tab
   - All form fields in separate columns
   - Easy to sort, filter, export

3. **Applicant** receives:
   - Confirmation email
   - Next steps info
   - Professional branded email

### Contact Form (`/contact`)

1. **Your Gmail** receives:
   - Subject: "💬 Contact Form: [Subject]"
   - Full message content
   - Contact details

2. **Your Google Sheet** gets:
   - New row in "Contacts" tab
   - Easy to track conversations

3. **Sender** receives:
   - Confirmation that you got their message
   - Expected response time

---

## Your Complete `.env.local` File

```bash
# Copy this and fill in your actual values

# === EMAIL (Resend) ===
RESEND_API_KEY=re_xxxxxxxxxxxxx
NOTIFICATION_EMAIL=your.email@gmail.com

# === GOOGLE SHEETS (Apps Script) ===
GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/xxxxx/exec

# That's it! Both integrations ready to go.
```

---

## Deployment (Vercel)

When you deploy to Vercel:

1. Push your code to GitHub (don't commit `.env.local`!)
2. Import to Vercel
3. In Vercel dashboard → Settings → Environment Variables
4. Add the same variables from your `.env.local`
5. Redeploy

Now your production site will send emails and log to sheets!

---

## Cost Breakdown

| Service | Free Tier | Cost After |
|---------|-----------|------------|
| Resend | 3,000 emails/month | $20/mo for 50k |
| Google Sheets | Unlimited* | Free |
| Apps Script | 20,000 calls/day | Free |

**Total monthly cost:** $0 for most use cases! 🎉

*Reasonable use - 5M cells limit

---

## Advanced: Add Slack Notifications

Want instant Slack pings when forms are submitted?

1. Create a Slack webhook: [slack.com/apps/A0F7XDUAZ-incoming-webhooks](https://api.slack.com/messaging/webhooks)
2. Add to `.env.local`:
```bash
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```
3. Add this code to your API routes:

```typescript
// In app/api/apply/route.ts
if (process.env.SLACK_WEBHOOK_URL) {
  await fetch(process.env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: `🎯 New application from ${data.name} (${data.email})`,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*New Pilot Application*\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Roles:* ${data.targetRoles}`
          }
        }
      ]
    })
  });
}
```

---

## Troubleshooting

### Emails not sending?
- Check `RESEND_API_KEY` is correct
- Restart dev server after adding env vars
- Check Resend dashboard for error logs

### Google Sheets not updating?
- Verify Apps Script is deployed
- Check "Who has access" is set to "Anyone"
- Confirm sheet tab names match exactly

### Want to test without submitting forms?
Use curl:
```bash
curl -X POST http://localhost:3000/api/apply \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","targetRoles":"Test Role"}'
```

---

## Next Steps

✅ Integrations working? Great!

Consider adding:
- [ ] Auto-responder emails with more details
- [ ] Zapier integration for CRM
- [ ] Airtable instead of Google Sheets
- [ ] Analytics tracking (Google Analytics, Plausible)
- [ ] A/B testing for conversion optimization

---

## File Structure Reference

```
rolerunner/
├── .env.local              ← Your secrets (DON'T commit!)
├── .env.example            ← Template for others
├── lib/
│   ├── email.ts            ← Email functions
│   └── sheets.ts           ← Google Sheets functions
├── app/api/
│   ├── apply/route.ts      ← Application form handler
│   └── contact/route.ts    ← Contact form handler
├── GMAIL_SETUP.md          ← Email setup guide
├── GOOGLE_SHEETS_SETUP.md  ← Sheets setup guide
└── INTEGRATION_GUIDE.md    ← This file!
```

---

## Support

Having issues? Check:
1. Console logs in terminal
2. Browser console (F12)
3. Resend dashboard logs
4. Google Sheets Apps Script logs

**Still stuck?** The integration code is well-commented. Check:
- `/lib/email.ts` - Email logic
- `/lib/sheets.ts` - Sheets logic  
- `/app/api/apply/route.ts` - How they're used

---

**Happy automating!** 🚀
