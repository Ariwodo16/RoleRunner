# 📊 Google Sheets Integration Setup Guide

This guide shows you how to automatically save form submissions to a Google Sheet.

## Two Methods Available

1. **Apps Script Web App** (Easiest - Recommended ⭐)
2. **Google Sheets API** (More control, more setup)

---

# Method 1: Apps Script Web App (Easiest) ⭐

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "RoleRunner Applications"

## Step 2: Set Up Sheets

Create two sheets (tabs):

### Sheet 1: "Applications"
Add these headers in Row 1:

| A | B | C | D | E | F | G | H | I | J | K | L | M |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Name | Email | Phone | Target Roles | Remote Pref | Location | Salary | Work Auth | LinkedIn | Portfolio | Platforms | Notes |

### Sheet 2: "Contacts"
Add these headers in Row 1:

| A | B | C | D | E |
|---|---|---|---|---|
| Timestamp | Name | Email | Subject | Message |

## Step 3: Create Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any code in the editor
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const sheetType = data.sheetType || 'applications';
    
    // Get the spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Determine which sheet to use
    const sheetName = sheetType === 'applications' ? 'Applications' : 'Contacts';
    let sheet = ss.getSheetByName(sheetName);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      
      // Add headers
      if (sheetType === 'applications') {
        sheet.appendRow([
          'Timestamp', 'Name', 'Email', 'Phone', 'Target Roles', 
          'Remote Pref', 'Location', 'Salary', 'Work Auth', 
          'LinkedIn', 'Portfolio', 'Platforms', 'Notes'
        ]);
      } else {
        sheet.appendRow(['Timestamp', 'Name', 'Email', 'Subject', 'Message']);
      }
    }
    
    // Prepare row data
    let row;
    if (sheetType === 'applications') {
      row = [
        data.timestamp || new Date().toISOString(),
        data.name || '',
        data.email || '',
        data.phone || '',
        data.targetRoles || '',
        data.remote || '',
        data.location || '',
        data.salary || '',
        data.workAuth || '',
        data.linkedin || '',
        data.portfolio || '',
        Array.isArray(data.platforms) ? data.platforms.join(', ') : '',
        data.notes || ''
      ];
    } else {
      row = [
        data.timestamp || new Date().toISOString(),
        data.name || '',
        data.email || '',
        data.subject || '',
        data.message || ''
      ];
    }
    
    // Append the row
    sheet.appendRow(row);
    
    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Data added successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 4: Deploy as Web App

1. Click the **Deploy** button (top right) → **New deployment**
2. Click the gear icon ⚙️ → Select **Web app**
3. Set these options:
   - **Description:** "RoleRunner Form Handler"
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**
5. **Copy the Web App URL** (looks like `https://script.google.com/macros/s/...`)
6. Click **Done**

## Step 5: Add to Your Environment Variables

In your `.env.local` file:

```bash
# Google Sheets Web App URL (from Step 4)
GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

## Step 6: Test It!

1. Restart your dev server: `npm run dev`
2. Submit a form
3. **Check your Google Sheet** - new row should appear!

---

# Method 2: Google Sheets API (Advanced)

## Step 1: Enable Google Sheets API

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Go to **APIs & Services** → **Library**
4. Search for "Google Sheets API"
5. Click **Enable**

## Step 2: Create API Credentials

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **API Key**
3. Copy your API key
4. (Optional) Restrict the key to Google Sheets API only

## Step 3: Make Your Sheet Public

1. Open your Google Sheet
2. Click **Share** (top right)
3. Change to "Anyone with the link can view"
4. Copy the Spreadsheet ID from the URL:
   - URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copy the `SPREADSHEET_ID` part

## Step 4: Add Environment Variables

```bash
# Google Sheets API
GOOGLE_SHEETS_API_KEY=your_api_key_here
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id_here
```

## Step 5: Update Code

In `/lib/sheets.ts`, the API method is already coded. Make sure your sheets have the correct headers as shown above.

---

# Which Method Should I Use?

| Feature | Apps Script (Method 1) | API (Method 2) |
|---------|----------------------|----------------|
| Setup Time | 5 minutes | 15 minutes |
| Difficulty | Easy ⭐ | Medium |
| Cost | Free | Free |
| Sheet Privacy | Can be private | Must be public |
| Recommended | ✅ Yes | For advanced users |

**Recommendation:** Use Apps Script (Method 1) - it's easier and more flexible!

---

# Troubleshooting

### Apps Script: "Authorization required"
- Redeploy the script
- Make sure "Who has access" is set to "Anyone"

### API: "Quota exceeded"
- Google Sheets API has limits (100 requests per 100 seconds)
- Consider Apps Script instead for higher limits

### Data not appearing in sheet
- Check console for errors
- Verify environment variables are set
- Check the sheet tab names match exactly ("Applications" and "Contacts")

### Want both email AND sheets?
You can use both! The code supports both simultaneously. Just set up both integrations.

---

# Viewing Your Data

Your Google Sheet will automatically update with:
- ✅ New application submissions
- ✅ Contact form messages  
- ✅ Timestamps for everything
- ✅ All form fields organized in columns

**Pro tip:** Create a Google Form for even easier data viewing, or use Google Data Studio to create dashboards!

---

**Questions?** The Sheets code is in `/lib/sheets.ts`
