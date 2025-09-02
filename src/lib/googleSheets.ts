import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import * as fs from 'fs';
import * as path from 'path';

// Google Sheets API configuration
const sheets = google.sheets('v4');

// Get Google Sheets credentials from environment variable
function getGoogleSheetsAuth(): JWT {
  try {
    const credentialsFilePath = process.env.GOOGLE_SHEETS_CREDENTIALS_FILE;
    if (!credentialsFilePath) {
      throw new Error('GOOGLE_SHEETS_CREDENTIALS_FILE environment variable is not set');
    }

    // Resolve the path relative to the project root
    const fullPath = path.resolve(process.cwd(), credentialsFilePath);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Credentials file not found at: ${fullPath}`);
    }

    // Read and parse the credentials file
    const credentialsContent = fs.readFileSync(fullPath, 'utf8');
    const credentials = JSON.parse(credentialsContent);
    
    // Create JWT auth client using service account
    const auth = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    return auth;
  } catch (error) {
    console.error('Error creating Google Sheets auth:', error);
    throw new Error(`Failed to create Google Sheets authentication: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Interface for join form data
export interface JoinFormData {
  mobileNumber: string;
  timestamp: string;
  source: string;
}

// Function to append data to Google Sheets
export async function appendToJoinSheet(data: JoinFormData) {
  try {
    const auth = getGoogleSheetsAuth();

    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    if (!spreadsheetId) {
      throw new Error('Google Sheets ID not found in environment variables');
    }

    // Prepare the row data
    const values = [
      [
        data.timestamp,
        `+91 ${data.mobileNumber}`,
        data.source,
        'Join for Free - Hero Section'
      ]
    ];

    // Check if the sheet exists and has headers, if not create them
    await ensureSheetExists(auth, spreadsheetId);

    // Append the data to the sheet
    const response = await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: 'Join Enquiries!A:D', // Sheet name and range
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
    throw error;
  }
}

// Function to ensure the sheet exists with proper headers
async function ensureSheetExists(auth: JWT, spreadsheetId: string) {
  try {
    // First, try to get the sheet metadata to see if our sheet exists
    const metadata = await sheets.spreadsheets.get({
      auth,
      spreadsheetId,
    });

    const sheetExists = metadata.data.sheets?.some(
      sheet => sheet.properties?.title === 'Join Enquiries'
    );

    if (!sheetExists) {
      // Create the sheet if it doesn't exist
      await sheets.spreadsheets.batchUpdate({
        auth,
        spreadsheetId,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: 'Join Enquiries',
                  gridProperties: {
                    rowCount: 1000,
                    columnCount: 10,
                  },
                },
              },
            },
          ],
        },
      });

      // Add headers to the new sheet
      await sheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: 'Join Enquiries!A1:D1',
        valueInputOption: 'RAW',
        requestBody: {
          values: [
            ['Timestamp', 'Mobile Number', 'Source', 'Type']
          ],
        },
      });
    } else {
      // Check if headers exist
      const headerResponse = await sheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'Join Enquiries!A1:D1',
      });

      if (!headerResponse.data.values || headerResponse.data.values.length === 0) {
        // Add headers if they don't exist
        await sheets.spreadsheets.values.update({
          auth,
          spreadsheetId,
          range: 'Join Enquiries!A1:D1',
          valueInputOption: 'RAW',
          requestBody: {
            values: [
              ['Timestamp', 'Mobile Number', 'Source', 'Type']
            ],
          },
        });
      }
    }
  } catch (error) {
    console.error('Error ensuring sheet exists:', error);
    throw error;
  }
}

// Function to get all join enquiries (for debugging/admin purposes)
export async function getJoinEnquiries() {
  try {
    const auth = getGoogleSheetsAuth();

    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    if (!spreadsheetId) {
      throw new Error('Google Sheets ID not found in environment variables');
    }

    const response = await sheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: 'Join Enquiries!A:D',
    });

    return response.data.values || [];
  } catch (error) {
    console.error('Error getting join enquiries:', error);
    throw error;
  }
}
