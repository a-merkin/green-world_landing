import { NextResponse } from "next/server";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "info@greenworld.az";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE = /(?:https?:\/\/|www\.)\S+/gi;
const EMAIL_IN_TEXT_RE = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
const SPAM_PATTERNS = [
  /\b(?:casino|crypto|forex|loan|viagra|seo|backlinks?)\b/i,
  /\b(?:earn money|guaranteed income|quick profit|work from home)\b/i,
  /\b(?:заработок|крипто|казино|виагра|кредит)\b/i,
  /<[^>]+>/i,
];

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function analyzeSpam(payload: {
  companyName: string;
  email: string;
  message: string;
  website: string;
}) {
  const reasons: string[] = [];
  let score = 0;

  if (payload.website) {
    reasons.push("honeypot field filled");
    return { blocked: true, score: 10, reasons };
  }

  const content = `${payload.companyName}\n${payload.message}`;
  const urls = content.match(URL_RE) ?? [];
  const embeddedEmails = content.match(EMAIL_IN_TEXT_RE) ?? [];

  if (urls.length >= 2) {
    score += 4;
    reasons.push("multiple links");
  } else if (urls.length === 1) {
    score += 2;
    reasons.push("contains link");
  }

  if (embeddedEmails.length > 1) {
    score += 2;
    reasons.push("multiple email addresses");
  }

  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(content)) {
      score += 3;
      reasons.push(`matched ${pattern}`);
    }
  }

  if (payload.message.length > 1200) {
    score += 1;
    reasons.push("very long message");
  }

  if (/(.)\1{5,}/.test(content)) {
    score += 2;
    reasons.push("repeated characters");
  }

  return { blocked: score >= 5, score, reasons };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const companyName = normalize(body.companyName);
    const email = normalize(body.email);
    const message = normalize(body.message);
    const formType = normalize(body.formType);
    const location = normalize(body.location);
    const website = normalize(body.website);

    if (!companyName || !email || !message || !formType) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 },
      );
    }

    if (!["customers", "suppliers"].includes(formType)) {
      return NextResponse.json(
        { error: "Invalid form type" },
        { status: 400 },
      );
    }

    const formLabel = formType === "customers" ? "FOR CUSTOMERS" : "FOR SUPPLIERS";
    const spamCheck = analyzeSpam({ companyName, email, message, website });
    const subjectPrefix = spamCheck.blocked ? "[SPAM BLOCKED]" : "[CONTACT]";

    // Construct email content
    const emailSubject = `${subjectPrefix} [${formLabel}] New inquiry from ${companyName}`;
    const emailBody = [
      `To: ${CONTACT_EMAIL}`,
      `Form type: ${formLabel}`,
      `Company: ${companyName}`,
      `Email: ${email}`,
      ...(location ? [`Location: ${location}`] : []),
      `Spam score: ${spamCheck.score}`,
      ...(spamCheck.reasons.length ? [`Spam reasons: ${spamCheck.reasons.join(", ")}`] : []),
      `Message: ${message}`,
    ].join("\n");

    // Log the submission (replace with actual email sending service)
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log(`Subject: ${emailSubject}`);
    console.log(emailBody);
    console.log("===================================");

    if (spamCheck.blocked) {
      return NextResponse.json({ success: true, category: "spam" });
    }

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

    return NextResponse.json({ success: true, category: "accepted" });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
