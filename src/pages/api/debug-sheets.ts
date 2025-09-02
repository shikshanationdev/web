import type { NextApiRequest, NextApiResponse } from 'next';
import { getJoinEnquiries, appendToJoinSheet } from '../../lib/googleSheets';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // First try to create a test entry to ensure sheet exists
    await appendToJoinSheet({
      mobileNumber: '9999999999',
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      source: 'Debug Test'
    });
    
    // Then get the enquiries
    const enquiries = await getJoinEnquiries();
    res.status(200).json({ 
      message: 'Google Sheets connection successful!',
      totalRecords: enquiries.length,
      data: enquiries.slice(0, 10) // Return only first 10 records for testing
    });
  } catch (error) {
    console.error('Google Sheets test error:', error);
    res.status(500).json({ 
      message: 'Google Sheets connection failed', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
}
