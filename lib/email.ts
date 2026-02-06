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

interface EmailField {
    label: string;
    value?: string;
}

interface EmailTemplateOptions {
    preheader: string;
    title: string;
    subtitle?: string;
    paragraphs?: string[];
    fieldsTitle?: string;
    fields?: EmailField[];
    messageTitle?: string;
    message?: string;
    cta?: {
        label: string;
        href: string;
    };
    footerNote?: string;
}

function requiredEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`${name} is not set`);
    }
    return value;
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function formatForHtml(value: string): string {
    return escapeHtml(value).replace(/\n/g, "<br />");
}

function renderParagraphs(paragraphs: string[]): string {
    return paragraphs
        .filter(Boolean)
        .map(
            (paragraph) =>
                `<p style="margin:0 0 14px;font-size:16px;line-height:1.65;color:#111827;">${formatForHtml(paragraph)}</p>`,
        )
        .join("");
}

function renderFieldsCard(title: string, fields: EmailField[]): string {
    const rows = fields
        .filter((field) => field.value)
        .map(
            (field) => `
                <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;vertical-align:top;width:160px;font-size:13px;font-weight:700;line-height:1.5;color:#6b7280;text-transform:uppercase;letter-spacing:0.04em;">
                        ${escapeHtml(field.label)}
                    </td>
                    <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;vertical-align:top;font-size:15px;line-height:1.55;color:#111827;word-break:break-word;">
                        ${formatForHtml(field.value ?? "")}
                    </td>
                </tr>`,
        )
        .join("");

    if (!rows) return "";

    return `
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:18px 0 22px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:14px;padding:0 18px;">
            <tr>
                <td style="padding:16px 0 6px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;">
                    ${escapeHtml(title)}
                </td>
            </tr>
            ${rows}
        </table>`;
}

function renderMessageCard(title: string, message: string): string {
    return `
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:8px 0 24px;background:#fffdf7;border:1px solid #f3e8c8;border-radius:14px;">
            <tr>
                <td style="padding:16px 18px 8px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#9a6a15;">
                    ${escapeHtml(title)}
                </td>
            </tr>
            <tr>
                <td style="padding:0 18px 18px;font-size:15px;line-height:1.7;color:#111827;word-break:break-word;">
                    ${formatForHtml(message)}
                </td>
            </tr>
        </table>`;
}

function renderCtaButton(label: string, href: string): string {
    const safeHref = escapeHtml(href);
    return `
        <table role="presentation" cellspacing="0" cellpadding="0" style="margin:4px 0 8px;">
            <tr>
                <td align="center" bgcolor="#d97706" style="border-radius:999px;">
                    <a href="${safeHref}" style="display:inline-block;padding:13px 24px;font-size:15px;font-weight:700;line-height:1;color:#ffffff;text-decoration:none;">
                        ${escapeHtml(label)}
                    </a>
                </td>
            </tr>
        </table>
        <p style="margin:0 0 20px;font-size:13px;line-height:1.5;color:#6b7280;word-break:break-all;">
            If the button does not work, use this link: <a href="${safeHref}" style="color:#b45309;text-decoration:underline;">${safeHref}</a>
        </p>`;
}

function buildEmailHtml(options: EmailTemplateOptions): string {
    const {
        preheader,
        title,
        subtitle,
        paragraphs = [],
        fieldsTitle,
        fields = [],
        messageTitle,
        message,
        cta,
        footerNote,
    } = options;

    const fieldsCard = fieldsTitle ? renderFieldsCard(fieldsTitle, fields) : "";
    const messageCard =
        messageTitle && message ? renderMessageCard(messageTitle, message) : "";
    const ctaMarkup = cta ? renderCtaButton(cta.label, cta.href) : "";

    return `<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>${escapeHtml(title)}</title>
    </head>
    <body style="margin:0;padding:0;background:#efece6;font-family:'Avenir Next',Avenir,'Segoe UI',Helvetica,Arial,sans-serif;color:#111827;">
        <span style="display:none!important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;overflow:hidden;mso-hide:all;">
            ${escapeHtml(preheader)}
        </span>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#efece6;">
            <tr>
                <td align="center" style="padding:28px 14px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;">
                        <tr>
                            <td style="padding:0 0 14px;">
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#111827;border-radius:18px;">
                                    <tr>
                                        <td style="padding:22px 24px 16px;">
                                            <div style="font-size:11px;line-height:1;color:#d1d5db;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;">
                                                Multimedium
                                            </div>
                                            <h1 style="margin:12px 0 0;font-size:28px;line-height:1.22;color:#ffffff;font-weight:750;">
                                                ${escapeHtml(title)}
                                            </h1>
                                            ${subtitle ? `<p style="margin:10px 0 0;font-size:15px;line-height:1.55;color:#f3f4f6;">${formatForHtml(subtitle)}</p>` : ""}
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="background:#ffffff;border-radius:18px;border:1px solid #e5e7eb;padding:24px;">
                                ${renderParagraphs(paragraphs)}
                                ${fieldsCard}
                                ${messageCard}
                                ${ctaMarkup}
                                <p style="margin:0;font-size:13px;line-height:1.6;color:#6b7280;">
                                    ${escapeHtml(
                                        footerNote ??
                                            "Sent from multimedium.dev. Reply to this email if you need anything.",
                                    )}
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
</html>`;
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
    const contactSubtitleParts = [payload.name, payload.email];
    if (payload.company) contactSubtitleParts.push(payload.company);
    const contactHtml = buildEmailHtml({
        preheader: `New inquiry from ${payload.name}`,
        title: "New Website Inquiry",
        subtitle: contactSubtitleParts.join(" - "),
        paragraphs: [
            "A new contact request came in from your website.",
            "Reply directly to this email to continue the conversation.",
        ],
        fieldsTitle: "Lead Details",
        fields: [
            { label: "Name", value: payload.name },
            { label: "Email", value: payload.email },
            { label: "Phone", value: payload.phone },
            { label: "Contact Preference", value: payload.contactPreference },
            { label: "Source", value: payload.source },
            { label: "Company", value: payload.company },
            { label: "Project Type", value: payload.projectType },
            { label: "Budget", value: payload.budgetRange },
            { label: "Timeline", value: payload.timeline },
            { label: "Current Site", value: payload.currentUrl },
            { label: "IP", value: payload.meta?.ip },
            { label: "Referer", value: payload.meta?.referer },
            { label: "User Agent", value: payload.meta?.userAgent },
        ],
        messageTitle: "Message",
        message: payload.message,
        footerNote: "Reply to this thread to respond to the lead.",
    });

    await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: payload.email,
        subject,
        html: contactHtml,
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
    const leadHtml = buildEmailHtml({
        preheader: `${payload.leadMagnet} is ready to download`,
        title: `Your ${payload.leadMagnet}`,
        subtitle: "Download link inside",
        paragraphs: [
            `Hi ${payload.name}, here is your ${payload.leadMagnet}.`,
            payload.resourceText ?? "",
            "If you want this routed from an intake form into your workflow, just reply and tell me what tools you use.",
        ],
        cta: payload.resourceUrl
            ? {
                  label: "Open PDF Download",
                  href: payload.resourceUrl,
              }
            : undefined,
        footerNote: "Need a custom or auto-populated version? Reply and I can help you set it up.",
    });

    await resend.emails.send({
        from: fromEmail,
        to: [payload.email],
        replyTo: toEmail,
        subject: leadSubject,
        html: leadHtml,
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
    const notifyHtml = buildEmailHtml({
        preheader: `New ${payload.leadMagnet} request from ${payload.name}`,
        title: "Lead Magnet Request",
        subtitle: payload.leadMagnet,
        paragraphs: [
            "A visitor requested a resource from the site.",
            "Reply to this email to follow up directly.",
        ],
        fieldsTitle: "Request Details",
        fields: [
            { label: "Resource", value: payload.leadMagnet },
            { label: "Name", value: payload.name },
            { label: "Email", value: payload.email },
            { label: "Company", value: payload.company },
            { label: "Source", value: payload.source },
        ],
        footerNote: "This notification was generated by the lead magnet form.",
    });

    try {
        await resend.emails.send({
            from: fromEmail,
            to: [toEmail],
            replyTo: payload.email,
            subject: notifySubject,
            html: notifyHtml,
            text: notifyTextLines.join("\n"),
        });
    } catch (error) {
        console.error("Lead magnet notify failed", error);
    }
}
