import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Resend as ResendUtil } from "@/utils";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email using Resend
    await resend.emails.send({
      from: `${ResendUtil.Sender.Name} <${ResendUtil.Sender.Email}>`,
      to: ResendUtil.Receiver.Email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        You have a new contact form submission.

        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
