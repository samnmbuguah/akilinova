import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.privateemail.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'info@akilinova.com',
    pass: process.env.SMTP_PASSWORD,
  },
  logger: {
    debug: console.debug,
    info: console.info,
    warn: console.warn,
    error: console.error
  },
  debug: false // Only show important logs
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, company, phone, message } = data;

    console.log(`Processing demo request from ${name} (${email})`);

    // Send email to admin
    const adminEmail = await transporter.sendMail({
      from: process.env.SMTP_FROM || 'info@akilinova.com',
      to: 'info@akilinova.com',
      subject: `New Demo Request from ${name}`,
      text: `
Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}
${message ? `Additional Information: ${message}` : ''}
      `,
      html: `
<h2>New Demo Request</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
${message ? `<p><strong>Additional Information:</strong> ${message}</p>` : ''}
      `,
    });

    console.log('Admin notification sent:', adminEmail.messageId);

    // Send auto-reply to the user
    const userEmail = await transporter.sendMail({
      from: process.env.SMTP_FROM || 'info@akilinova.com',
      to: email,
      subject: 'Thank you for requesting an Akilinova demo',
      text: `
Dear ${name},

Thank you for your interest in Akilinova's solutions. We have received your demo request and our team will contact you shortly to schedule a personalized demonstration.

Best regards,
The Akilinova Team
      `,
      html: `
<h2>Thank you for requesting an Akilinova demo</h2>
<p>Dear ${name},</p>
<p>Thank you for your interest in Akilinova's solutions. We have received your demo request and our team will contact you shortly to schedule a personalized demonstration.</p>
<p>Best regards,<br>The Akilinova Team</p>
      `,
    });

    console.log('Auto-reply sent:', userEmail.messageId);

    return NextResponse.json(
      { message: 'Thank you for your demo request. We will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { message: 'There was an error processing your request. Please try again later.' },
      { status: 500 }
    );
  }
} 