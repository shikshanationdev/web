import { google } from 'googleapis';

// Gmail API configuration
const gmail = google.gmail('v1');

// OAuth2 configuration
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Set refresh token (you'll get this after initial OAuth flow)
oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail({ to, subject, html, from }: EmailData) {
  try {
    // Ensure we have fresh access token
    await oauth2Client.getAccessToken();
    
    // Create email content
    const emailLines = [
      `To: ${to}`,
      `From: ${from || process.env.GMAIL_USER}`,
      `Subject: ${subject}`,
      'Content-Type: text/html; charset=utf-8',
      '',
      html,
    ];

    const email = emailLines.join('\n');
    const encodedEmail = Buffer.from(email).toString('base64').replace(/\+/g, '-').replace(/\//g, '_');

    // Send email using Gmail API
    const response = await gmail.users.messages.send({
      auth: oauth2Client,
      userId: 'me',
      requestBody: {
        raw: encodedEmail,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Function to get authorization URL (for initial setup)
export function getAuthUrl() {
  const scopes = ['https://www.googleapis.com/auth/gmail.send'];
  
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });
}

// Function to get tokens from authorization code (for initial setup)
export async function getTokensFromCode(code: string) {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    return tokens;
  } catch (error) {
    console.error('Error in getTokensFromCode:', error);
    throw error;
  }
}
