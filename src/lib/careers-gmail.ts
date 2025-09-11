import { google } from 'googleapis';

// Gmail API configuration for careers
const gmail = google.gmail('v1');

// OAuth2 configuration for careers email
const oauth2Client = new google.auth.OAuth2(
  process.env.CAREERS_GOOGLE_CLIENT_ID,
  process.env.CAREERS_GOOGLE_CLIENT_SECRET,
  process.env.CAREERS_GOOGLE_REDIRECT_URI
);

// Set refresh token for careers email
oauth2Client.setCredentials({
  refresh_token: process.env.CAREERS_GOOGLE_REFRESH_TOKEN,
});

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  from?: string;
  attachments?: Array<{
    filename: string;
    content: Buffer;
    contentType: string;
  }>;
}

export async function sendCareersEmail({ to, subject, html, from, attachments }: EmailData) {
  try {
    // Ensure we have fresh access token
    await oauth2Client.getAccessToken();
    
    let emailContent = '';
    
    if (attachments && attachments.length > 0) {
      // Create multipart email with attachments
      const boundary = `boundary_${Date.now()}`;
      
      emailContent = [
        `To: ${to}`,
        `From: ${from || process.env.CAREERS_GMAIL_USER}`,
        `Subject: ${subject}`,
        `MIME-Version: 1.0`,
        `Content-Type: multipart/mixed; boundary="${boundary}"`,
        '',
        `--${boundary}`,
        'Content-Type: text/html; charset=utf-8',
        '',
        html,
        ''
      ].join('\n');
      
      // Add attachments
      attachments.forEach(attachment => {
        emailContent += [
          `--${boundary}`,
          `Content-Type: ${attachment.contentType}`,
          `Content-Disposition: attachment; filename="${attachment.filename}"`,
          `Content-Transfer-Encoding: base64`,
          '',
          attachment.content.toString('base64'),
          ''
        ].join('\n');
      });
      
      emailContent += `--${boundary}--`;
    } else {
      // Simple email without attachments
      emailContent = [
        `To: ${to}`,
        `From: ${from || process.env.CAREERS_GMAIL_USER}`,
        `Subject: ${subject}`,
        'Content-Type: text/html; charset=utf-8',
        '',
        html,
      ].join('\n');
    }

    const encodedEmail = Buffer.from(emailContent).toString('base64').replace(/\+/g, '-').replace(/\//g, '_');

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
    console.error('Error sending careers email:', error);
    throw error;
  }
}

// Function to get authorization URL for careers email (for initial setup)
export function getCareersAuthUrl() {
  const scopes = ['https://www.googleapis.com/auth/gmail.send'];
  
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });
}

// Function to get tokens from authorization code for careers email (for initial setup)
export async function getCareersTokensFromCode(code: string) {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    return tokens;
  } catch (error) {
    console.error('Error in getCareersTokensFromCode:', error);
    throw error;
  }
}
