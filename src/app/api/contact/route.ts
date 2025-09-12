import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { name, fromEmail, subject, message } = await req.json();

    if (!fromEmail || !subject || !message) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    const nodemailer = await import("nodemailer");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Boolean(process.env.SMTP_SECURE === "true"),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = "johnrodriguesdeveloper@gmail.com";

    const textLines = [
      name ? `Nome: ${name}` : undefined,
      fromEmail ? `Email: ${fromEmail}` : undefined,
      "",
      message,
    ].filter(Boolean);

    await transporter.sendMail({
      from: `Portfolio Contato <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      replyTo: fromEmail,
      to,
      subject,
      text: textLines.join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Erro desconhecido";
    console.error("Erro ao enviar email:", error);
    const body =
      process.env.NODE_ENV === "development"
        ? { error: errMsg }
        : { error: "Erro ao enviar" };
    return NextResponse.json(body, { status: 500 });
  }
}
