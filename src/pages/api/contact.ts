import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../lib/gmail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, address, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Validate firstName and lastName contain only alphabets
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(firstName)) {
    return res.status(400).json({ message: 'First name can only contain alphabets' });
  }

  if (lastName && !nameRegex.test(lastName)) {
    return res.status(400).json({ message: 'Last name can only contain alphabets' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address' });
  }

  // Validate phone number (must be exactly 10 digits if provided)
  if (phone && (!/^\d{10}$/.test(phone))) {
    return res.status(400).json({ message: 'Phone number must be exactly 10 digits' });
  }

  try {
    // Send email to your support email
    await sendEmail({
      to: 'support@shikshanation.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
      from: process.env.GMAIL_USER,
    });

    // Optionally send confirmation email to user
    await sendEmail({
      to: email,
      subject: 'Thank you for contacting Shikshanation',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your message and will get back to you soon.</p>
        <br/>
        <p>Best regards,<br/>Shikshanation Team</p>
      `,
      from: process.env.GMAIL_USER,
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ message: 'Failed to send message', error });
  }
}
