import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import 'dotenv/config';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  // Disable detailed SMTP logging
  logger: false,
  debug: false
});

// Verify required environment variables
const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`❌ Missing required environment variable: ${envVar}`);
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, company, phone, message } = data;

    console.log(`📧 Processing demo request from ${name} (${email})`);

    // Send email to admin
    await transporter.sendMail({
      from: `"AkiliNova Demo" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_USER,
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

    console.log('✅ Admin notification sent');

    // Add delay before sending auto-reply (to prevent rate limiting)
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('📧 Sending auto-reply to:', email);
    
    try {
      // Send auto-reply to the user
      await transporter.sendMail({
        from: `"AkiliNova" <${process.env.SMTP_FROM?.toLowerCase()}>`,
        to: email.toLowerCase(),
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
        headers: {
          'X-Priority': '1',
          'X-MSMail-Priority': 'High',
          'Importance': 'high',
          'X-Auto-Response-Suppress': 'OOF, AutoReply',
          'Auto-Submitted': 'auto-replied'
        }
      });

      console.log('✅ Auto-reply sent successfully');
    } catch (autoReplyError: unknown) {
      console.error('❌ Auto-reply failed:', autoReplyError instanceof Error ? autoReplyError.message : 'Unknown error');
      // Continue execution even if auto-reply fails
    }

    return NextResponse.json(
      { message: 'Thank you for your demo request. We will contact you soon.' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('❌ Error processing demo request:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { message: 'There was an error processing your request. Please try again later.' },
      { status: 500 }
    );
  }
} 