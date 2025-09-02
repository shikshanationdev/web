import type { NextApiRequest, NextApiResponse } from 'next';
import { appendToJoinSheet } from '../../lib/googleSheets';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { mobileNumber } = req.body;

  if (!mobileNumber) {
    return res.status(400).json({ message: 'Mobile number is required' });
  }

  // Validate mobile number (should be 10 digits)
  if (!/^\d{10}$/.test(mobileNumber)) {
    return res.status(400).json({ message: 'Please enter a valid 10-digit mobile number' });
  }

  try {
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    
    // Store data in Google Sheets
    await appendToJoinSheet({
      mobileNumber,
      timestamp,
      source: 'Website Home page'
    });

    res.status(200).json({ message: 'Registration successful! We will contact you soon.' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.', error });
  }
}
