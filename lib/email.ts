import { Resend } from "resend";

export interface ContactEmailPayload {
    name: string;
    email: string;
    phone?: string;
    contactPreference?: string;
    source?: string;
    company?: string;
    projectType?: string;
    budgetRange?: string;
    timeline?: string;
    currentUrl?: string;
    message: string;
    meta?: {
        ip?: string;
        userAgent?: string;
        referer?: string;
    };
}

export interface LeadMagnetPayload {
    leadMagnet: string;
    name: string;
    email: string;
    company?: string;
    source?: string;
    resourceUrl?: string;
    resourceText?: string;
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
        payload.source ? `Source: ${payload.source}` : "",
        payload.company ? `Company: ${payload.company}` : "",
        payload.projectType ? `Project type: ${payload.projectType}` : "",
        payload.budgetRange ? `Budget: ${payload.budgetRange}` : "",
        payload.timeline ? `Timeline: ${payload.timeline}` : "",
        payload.currentUrl ? `Current site: ${payload.currentUrl}` : "",
        payload.meta?.ip ? `IP: ${payload.meta.ip}` : "",
        payload.meta?.referer ? `Referer: ${payload.meta.referer}` : "",
        payload.meta?.userAgent ? `User agent: ${payload.meta.userAgent}` : "",
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

export async function sendLeadMagnetEmail(payload: LeadMagnetPayload) {
    const resendApiKey = requiredEnv("RESEND_API_KEY");
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "haydn@multimedium.dev";
    const fromEmail =
        process.env.CONTACT_FROM_EMAIL ?? "Multimedium <onboarding@resend.dev>";

    const resend = new Resend(resendApiKey);

    const leadSubject = `${payload.leadMagnet} - download`;
    const leadTextLines: string[] = [
        `Hi ${payload.name},`,
        "",
        `Here is your ${payload.leadMagnet}.`,
        payload.resourceUrl ? `Printable version: ${payload.resourceUrl}` : "",
        "",
        payload.resourceText ?? "",
        "",
        "If you want help turning this into a lead capture system, just reply to this email.",
        "- Haydn",
    ].filter(Boolean);

    await resend.emails.send({
        from: fromEmail,
        to: [payload.email],
        replyTo: toEmail,
        subject: leadSubject,
        text: leadTextLines.join("\n"),
    });

    const notifySubjectParts = ["Lead magnet request", payload.leadMagnet, payload.name];
    if (payload.company) notifySubjectParts.push(payload.company);
    const notifySubject = notifySubjectParts.join(" - ");

    const notifyTextLines: string[] = [
        `Lead magnet: ${payload.leadMagnet}`,
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        payload.company ? `Company: ${payload.company}` : "",
        payload.source ? `Source: ${payload.source}` : "",
    ].filter(Boolean);

    try {
        await resend.emails.send({
            from: fromEmail,
            to: [toEmail],
            replyTo: payload.email,
            subject: notifySubject,
            text: notifyTextLines.join("\n"),
        });
    } catch (error) {
        console.error("Lead magnet notify failed", error);
    }
}
