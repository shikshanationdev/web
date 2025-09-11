import type { NextApiRequest, NextApiResponse } from 'next';
import { getCareersAuthUrl, getCareersTokensFromCode } from '../../lib/careers-gmail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  if (!code) {
    // Step 1: Redirect to Google OAuth
    const authUrl = getCareersAuthUrl();
    return res.redirect(authUrl);
  }

  try {
    // Step 2: Exchange code for tokens
    const tokens = await getCareersTokensFromCode(code as string);
    
    return res.json({
      message: 'Success! Copy these tokens to your environment variables:',
      refresh_token: tokens.refresh_token,
      access_token: tokens.access_token,
      instructions: {
        step1: 'Add CAREERS_GOOGLE_REFRESH_TOKEN to your .env file',
        step2: 'Use the refresh_token value shown above',
        step3: 'Keep the access_token secure (it will be auto-refreshed)'
      }
    });
  } catch (error) {
    console.error('Error getting tokens:', error);
    return res.status(500).json({ error: 'Failed to get tokens', details: error });
  }
}
