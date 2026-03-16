import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, email, message, formType } = body;

    if (!companyName || !email || !message || !formType) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const formLabel = formType === "customers" ? "FOR CUSTOMERS" : "FOR SUPPLIERS";

    // Construct email content
    const emailSubject = `[${formLabel}] New inquiry from ${companyName}`;
    const emailBody = [
      `Form type: ${formLabel}`,
      `Company: ${companyName}`,
      `Email: ${email}`,
      `Message: ${message}`,
    ].join("\n");

    // Log the submission (replace with actual email sending service)
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log(`Subject: ${emailSubject}`);
    console.log(emailBody);
    console.log("===================================");

    // TODO: Integrate with an email service (e.g. Nodemailer, Resend, SendGrid)
    // Example with Nodemailer:
    //
    // import nodemailer from "nodemailer";
    //
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT),
    //   secure: true,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });
    //
    // await transporter.sendMail({
    //   from: process.env.SMTP_FROM,
    //   to: process.env.CONTACT_EMAIL,
    //   replyTo: email,
    //   subject: emailSubject,
    //   text: emailBody,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
