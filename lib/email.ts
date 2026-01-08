import { Resend } from "resend";

export interface ContactEmailPayload {
    name: string;
    email: string;
    company?: string;
    projectType?: string;
    message: string;
}

function requiredEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`${name} is not set`);
    }
    return value;
}

export async function sendContactEmail(payload: ContactEmailPayload) {
    const resendApiKey = requiredEnv("RESEND_API_KEY");
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "haydn@multimedium.dev";
    const fromEmail =
        process.env.CONTACT_FROM_EMAIL ?? "Multimedium <onboarding@resend.dev>";

    const resend = new Resend(resendApiKey);

    const subjectParts = ["New website inquiry", payload.name];
    if (payload.company) subjectParts.push(payload.company);
    const subject = subjectParts.join(" — ");

    const textLines: string[] = [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        payload.company ? `Company: ${payload.company}` : "",
        payload.projectType ? `Project type: ${payload.projectType}` : "",
        "",
        payload.message,
    ].filter(Boolean);

    await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: payload.email,
        subject,
        text: textLines.join("\n"),
    });
}

