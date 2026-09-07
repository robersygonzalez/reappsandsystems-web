import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_RECIPIENT = "robersygonzalez@gmail.com";
const CONTACT_SENDER = "ReApps Contact <onboarding@resend.dev>";

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  honeypot?: unknown;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, subject, message, honeypot } = req.body as ContactPayload;

  if (typeof honeypot === "string" && honeypot.length > 0) {
    res.status(200).json({ success: true });
    return;
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !subject.trim() ||
    !message.trim() ||
    !EMAIL_REGEX.test(email)
  ) {
    res.status(400).json({ error: "Invalid form data" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Server misconfiguration" });
    return;
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: CONTACT_SENDER,
      to: CONTACT_RECIPIENT,
      replyTo: email,
      subject: `[Contacto] ${subject}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      res.status(502).json({ error: "Email provider error" });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    res.status(500).json({ error: "Unexpected server error" });
  }
}
