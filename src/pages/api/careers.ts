import type { NextApiRequest, NextApiResponse } from 'next';
import { sendCareersEmail } from '../../lib/careers-gmail';
import formidable, { IncomingForm } from 'formidable';
import fs from 'fs';

// Disable body parser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Parse form data including files
    const form = new IncomingForm({
      uploadDir: '/tmp',
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5MB
    });

    const [fields, files] = await form.parse(req);
    
    // Extract form fields (formidable returns arrays, so we take first element)
    const firstName = Array.isArray(fields.firstName) ? fields.firstName[0] : fields.firstName;
    const lastName = Array.isArray(fields.lastName) ? fields.lastName[0] : fields.lastName;
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const phone = Array.isArray(fields.phone) ? fields.phone[0] : fields.phone;
    const position = Array.isArray(fields.position) ? fields.position[0] : fields.position;
    const message = Array.isArray(fields.message) ? fields.message[0] : fields.message;
    
    // Get uploaded file
    const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume;

    if (!firstName || !email || !position || !message) {
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

    // Prepare email attachments
    const attachments = [];
    if (resumeFile) {
      const fileBuffer = fs.readFileSync(resumeFile.filepath);
      attachments.push({
        filename: resumeFile.originalFilename || 'resume.pdf',
        content: fileBuffer,
        contentType: 'application/pdf',
      });
    }
    try {
      // Send email to careers email
      await sendCareersEmail({
        to: 'careers@shikshanation.com',
        subject: 'New Career Application Submission',
        html: `
          <h2>New Career Application Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Applying for Position:</strong> ${position}</p>
          <p><strong>Message:</strong><br/>${message}</p>
          ${resumeFile ? `<p><strong>Resume:</strong> ${resumeFile.originalFilename} (attached)</p>` : '<p><strong>Resume:</strong> Not provided</p>'}
        `,
        from: 'careers@shikshanation.com',
        attachments: attachments,
      });

      // Optionally send confirmation email to user
      await sendCareersEmail({
        to: email,
        subject: 'We\'ve Received Your Application - Shiksha Nation',
        html: `
          <p>Dear ${firstName},</p>
          <br/>
          <p>Thank you for your interest in a career at Shiksha Nation and for taking the time to submit your application. This email confirms that we have successfully received your information.</p>
          <br/>
          <p>At Shiksha Nation, we are a passionate team dedicated to revolutionizing the education landscape. We are always searching for talented and driven individuals who share our vision to join us on this mission.</p>
          <br/>
          <p>Our hiring team will now carefully review your profile and qualifications. If your experience aligns with the requirements of an open position, we will be in touch with you to discuss the next steps in the hiring process.</p>
          <br/>
          <p>In the meantime, we invite you to learn more about our work, our culture, and our team by visiting our <a href="https://shikshanation.com/about" style="color: #1976d2; text-decoration: none;">about us page</a>. You can also follow us on our social media channels to stay updated on our latest news.</p>
          <br/>
          <p>We appreciate your patience and wish you the very best in your job search.</p>
          <br/>
          <p>Sincerely,<br/>The Shiksha Nation Team</p>
        `,
        from: 'careers@shikshanation.com',
      });

      // Clean up uploaded file
      if (resumeFile) {
        fs.unlinkSync(resumeFile.filepath);
      }

      res.status(200).json({ message: 'Application submitted successfully!' });
    } catch (error) {
      console.error('Email sending error:', error);
      
      // Clean up uploaded file in case of error
      if (resumeFile) {
        try {
          fs.unlinkSync(resumeFile.filepath);
        } catch (cleanupError) {
          console.error('File cleanup error:', cleanupError);
        }
      }
      
      res.status(500).json({ message: 'Failed to submit application', error });
    }
  } catch (parseError) {
    console.error('Form parsing error:', parseError);
    res.status(400).json({ message: 'Failed to parse form data', error: parseError });
  }
}
