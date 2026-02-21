import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type QuotePayload = {
  clientName: string;
  clientEmail: string;
  clientCompany?: string;
  estimatedPrice: number;
  category: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuotePayload;
    const clientName = body.clientName?.trim();
    const clientEmail = body.clientEmail?.trim();

    if (!clientName || !clientEmail || !body.estimatedPrice || !body.category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM;

    if (!host || !port || !user || !pass || !from) {
      console.error('SMTP configuration missing');
      return NextResponse.json(
        { error: 'Email configuration is not available on the server' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: {
        user,
        pass,
      },
    });

    const categoryLabel = body.category.toUpperCase();
    const formattedTotal = `R${Number(body.estimatedPrice).toLocaleString()}.00`;

    const commonLines = [
      `Name: ${clientName}`,
      body.clientCompany ? `Company: ${body.clientCompany}` : null,
      `Email: ${clientEmail}`,
      '',
      `Service Category: ${categoryLabel}`,
      `Estimated Total: ${formattedTotal}`,
      '',
    ].filter(Boolean) as string[];

    const internalBody = [
      'New quote request from the website calculator:',
      '',
      ...commonLines,
      'This lead came from the /quote calculator on 012agency.co.za.',
    ].join('\n');

    const clientBody = [
      `Hi ${clientName},`,
      '',
      'Thank you for using the 012 Agency quote calculator. Here is a summary of your estimate:',
      '',
      ...commonLines,
      'This is an indicative estimate based on the options you selected.',
      'Final pricing may change after a detailed project briefing and formal proposal.',
      '',
      'We will review your request and get in touch to discuss next steps.',
      '',
      'Kind regards,',
      '012 Agency',
      'info@012agency.co.za',
    ].join('\n');

    const internalMail = transporter.sendMail({
      from,
      to: from,
      replyTo: clientEmail,
      subject: `New Quote Request – ${clientName}`,
      text: internalBody,
    });

    const clientMail = transporter.sendMail({
      from,
      to: clientEmail,
      subject: 'Your quote request at 012 Agency',
      text: clientBody,
    });

    await Promise.all([internalMail, clientMail]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending quote emails', error);
    return NextResponse.json({ error: 'Failed to send quote email' }, { status: 500 });
  }
}

