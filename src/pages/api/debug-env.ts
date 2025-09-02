import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const envVars = {
    GOOGLE_SHEETS_CREDENTIALS_FILE: process.env.GOOGLE_SHEETS_CREDENTIALS_FILE || 'Not set',
    GOOGLE_SHEETS_ID: process.env.GOOGLE_SHEETS_ID || 'Not set',
    NODE_ENV: process.env.NODE_ENV || 'Not set',
    // Only show first/last few characters of sensitive data
    hasCredentialsFile: process.env.GOOGLE_SHEETS_CREDENTIALS_FILE ? 'Yes' : 'No',
  };

  res.status(200).json({
    message: 'Environment variables debug',
    envVars,
    workingDirectory: process.cwd(),
  });
}
