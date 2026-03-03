// lib/sheets.ts
// Google Sheets integration using Google Sheets API

interface ApplicationData {
  name: string;
  email: string;
  phone?: string;
  targetRoles: string;
  remote: string;
  location?: string;
  salary?: string;
  workAuth?: string;
  linkedin?: string;
  portfolio?: string;
  platforms?: string[];
  notes?: string;
}

export async function addToGoogleSheet(data: ApplicationData, sheetType: 'applications' | 'contacts' = 'applications') {
  const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
  const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
  
  if (!GOOGLE_SHEETS_API_KEY || !SPREADSHEET_ID) {
    console.error('Google Sheets credentials not configured');
    return { success: false, error: 'Google Sheets not configured' };
  }

  try {
    // Determine which sheet to use
    const sheetName = sheetType === 'applications' ? 'Applications' : 'Contacts';
    
    // Format data as row
    const row = sheetType === 'applications' 
      ? [
          new Date().toISOString(),
          data.name,
          data.email,
          data.phone || '',
          data.targetRoles,
          data.remote,
          data.location || '',
          data.salary || '',
          data.workAuth || '',
          data.linkedin || '',
          data.portfolio || '',
          data.platforms?.join(', ') || '',
          data.notes || ''
        ]
      : [
          new Date().toISOString(),
          data.name,
          data.email,
          (data as any).subject || '',
          (data as any).message || ''
        ];

    // Append to Google Sheet
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${sheetName}!A:Z:append?valueInputOption=USER_ENTERED&key=${GOOGLE_SHEETS_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [row],
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error?.message || 'Failed to add to Google Sheets');
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Error adding to Google Sheets:', error);
    return { success: false, error };
  }
}

// Alternative: Using Google Sheets as a simple database with Apps Script Web App
export async function addToGoogleSheetViaWebApp(data: any, sheetType: 'applications' | 'contacts' = 'applications') {
  const WEB_APP_URL = process.env.GOOGLE_SHEETS_WEB_APP_URL;
  
  if (!WEB_APP_URL) {
    console.error('Google Sheets Web App URL not configured');
    return { success: false, error: 'Web App not configured' };
  }

  try {
    const response = await fetch(WEB_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sheetType,
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending to Google Sheets Web App:', error);
    return { success: false, error };
  }
}
