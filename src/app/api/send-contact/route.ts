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
    const { name, email, company, message } = data;

    console.log(`Processing contact form submission from ${name} (${email})`);

    // Send email to admin
    const adminEmail = await transporter.sendMail({
      from: process.env.SMTP_FROM || 'info@akilinova.com',
      to: 'info@akilinova.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
<p><strong>Message:</strong></p>
<p>${message}</p>
      `,
    });

    console.log('Admin notification sent:', adminEmail.messageId);

    // Send auto-reply to the user
    const userEmail = await transporter.sendMail({
      from: process.env.SMTP_FROM || 'info@akilinova.com',
      to: email,
      subject: 'Thank you for contacting Akilinova',
      text: `
Dear ${name},

Thank you for contacting Akilinova. We have received your message and will get back to you shortly.

Best regards,
The Akilinova Team
      `,
      html: `
<h2>Thank you for contacting Akilinova</h2>
<p>Dear ${name},</p>
<p>Thank you for contacting Akilinova. We have received your message and will get back to you shortly.</p>
<p>Best regards,<br>The Akilinova Team</p>
      `,
    });

    console.log('Auto-reply sent:', userEmail.messageId);

    return NextResponse.json(
      { message: 'Thank you for your message. We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'There was an error processing your request. Please try again later.' },
      { status: 500 }
    );
  }
} 