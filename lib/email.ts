import { Resend } from "resend";

export interface ContactEmailPayload {
    name: string;
    email: string;
    phone?: string;
    contactPreference?: string;
    company?: string;
    projectType?: string;
    budgetRange?: string;
    timeline?: string;
    currentUrl?: string;
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
    if (payload.projectType) subjectParts.push(payload.projectType);
    const subject = subjectParts.join(" - ");

    const textLines: string[] = [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        payload.phone ? `Phone: ${payload.phone}` : "",
        payload.contactPreference
            ? `Contact preference: ${payload.contactPreference}`
            : "",
        payload.company ? `Company: ${payload.company}` : "",
        payload.projectType ? `Project type: ${payload.projectType}` : "",
        payload.budgetRange ? `Budget: ${payload.budgetRange}` : "",
        payload.timeline ? `Timeline: ${payload.timeline}` : "",
        payload.currentUrl ? `Current site: ${payload.currentUrl}` : "",
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
