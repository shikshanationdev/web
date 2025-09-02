import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../lib/gmail';
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
    try {
      await appendToJoinSheet({
        mobileNumber,
        timestamp,
        source: 'Website Home page'
      });
    } catch (sheetError) {
      console.error('Error storing to Google Sheets:', sheetError);
      // Continue with email sending even if sheets fails
    }

    // Send email to support team
    await sendEmail({
      to: 'support@shikshanation.com',
      subject: 'New Enquiry - JOIN FOR FREE',
      html: `
        <h2>New User Enquiry</h2>
        <p>A new user has registered for enquiry.</p>
        <br/>
        <p><strong>Mobile Number:</strong> +91 ${mobileNumber}</p>
        <p><strong>Registration Time:</strong> ${timestamp}</p>
        <p><strong>Source:</strong> Website Home page</p>
        <br/>
        <p>Please follow up with the user for course recommendations and support.</p>
        <br/>
        <p>Best regards,<br/>Shikshanation Platform</p>
      `,
      from: process.env.GMAIL_USER,
    });

    res.status(200).json({ message: 'Registration successful! We will contact you soon.' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.', error });
  }
}
