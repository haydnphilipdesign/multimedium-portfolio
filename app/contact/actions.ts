"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { sendContactEmail } from "@/lib/email";
import { checkRateLimit } from "@/lib/rateLimit";
import {
    consumeNonceOnce,
    containsUrlLikeText,
    getClientIpFromHeaders,
    verifyContactFormToken,
    verifyTurnstileToken,
} from "@/lib/contactAntiSpam";

const allowedProjectTypes: Record<string, string> = {
    website: "Website Build / Redesign",
    landing: "Landing page (lead gen)",
    retainer: "Ongoing improvements (retainer)",
    other: "Not sure yet / something else",
};

const allowedContactPreferences: Record<string, string> = {
    email: "Email",
    call: "Phone call",
    sms: "SMS / text",
};

const allowedBudgetRanges: Record<string, string> = {
    under5k: "Under $5k",
    "5to10k": "$5k–$10k",
    "10to25k": "$10k–$25k",
    "25kplus": "$25k+",
    unsure: "Not sure yet",
};

const allowedTimelines: Record<string, string> = {
    asap: "ASAP",
    "1to2mo": "1–2 months",
    "3to6mo": "3–6 months",
    flexible: "Flexible",
};

function getText(formData: FormData, key: string): string {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
    const digitsOnly = phone.replace(/\D/g, "");
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

export async function submitContact(formData: FormData) {
    const source = getText(formData, "source");
    const sourceQuery = source ? `&source=${encodeURIComponent(source)}` : "";
    const thanksUrl = source
        ? `/contact/thanks?source=${encodeURIComponent(source)}`
        : "/contact/thanks";

    const requestHeaders = await headers();
    const ip = getClientIpFromHeaders(requestHeaders) ?? undefined;
    const userAgent = requestHeaders.get("user-agent") ?? undefined;
    const referer = requestHeaders.get("referer") ?? undefined;

    const honeypot = getText(formData, "website");
    if (honeypot) {
        redirect(thanksUrl);
    }

    const formToken = getText(formData, "formToken");
    const tokenResult = verifyContactFormToken(formToken);
    if (!tokenResult.ok) {
        redirect(thanksUrl);
    }

    if (!tokenResult.skipped) {
        const minSubmitMs = 2500;
        const maxSubmitMs = 2 * 60 * 60 * 1000;
        if (tokenResult.ageMs < minSubmitMs || tokenResult.ageMs > maxSubmitMs) {
            redirect(thanksUrl);
        }

        if (!consumeNonceOnce(tokenResult.payload.nonce, maxSubmitMs)) {
            redirect(thanksUrl);
        }
    }

    if (ip) {
        const limit = checkRateLimit(`contact:ip:${ip}`, {
            limit: 8,
            windowMs: 60 * 60 * 1000,
        });
        if (!limit.allowed) {
            redirect(`/contact?error=rate${sourceQuery}`);
        }
    }

    const turnstileResponse = getText(formData, "cf-turnstile-response");
    const turnstileOk = await verifyTurnstileToken({ token: turnstileResponse, remoteIp: ip });
    if (!turnstileOk) {
        redirect(`/contact?error=captcha${sourceQuery}`);
    }

    const name = getText(formData, "name");
    const email = getText(formData, "email");
    const phone = getText(formData, "phone");
    const contactPreferenceRaw = getText(formData, "contactPreference");
    const company = getText(formData, "company");
    const projectTypeRaw = getText(formData, "projectType");
    const budgetRangeRaw = getText(formData, "budgetRange");
    const timelineRaw = getText(formData, "timeline");
    const currentUrl = getText(formData, "currentUrl");
    const message = getText(formData, "message");

    if (!name || !email || !message) {
        redirect(`/contact?error=missing${sourceQuery}`);
    }

    if (!isValidEmail(email)) {
        redirect(`/contact?error=email${sourceQuery}`);
    }

    const emailLimit = checkRateLimit(`contact:email:${email.toLowerCase()}`, {
        limit: 3,
        windowMs: 60 * 60 * 1000,
    });
    if (!emailLimit.allowed) {
        redirect(`/contact?error=rate${sourceQuery}`);
    }

    const contactPreferenceKey =
        contactPreferenceRaw && contactPreferenceRaw in allowedContactPreferences
            ? contactPreferenceRaw
            : "email";

    if ((contactPreferenceKey === "call" || contactPreferenceKey === "sms") && !phone) {
        redirect(`/contact?error=phone_required${sourceQuery}`);
    }

    if (phone && !isValidPhone(phone)) {
        redirect(`/contact?error=phone_invalid${sourceQuery}`);
    }

    if (message.length > 5000) {
        redirect(`/contact?error=message${sourceQuery}`);
    }

    if (containsUrlLikeText(message)) {
        redirect(`/contact?error=links${sourceQuery}`);
    }

    const projectType = projectTypeRaw
        ? allowedProjectTypes[projectTypeRaw] ?? allowedProjectTypes.other
        : undefined;
    const contactPreference = allowedContactPreferences[contactPreferenceKey];
    const budgetRange =
        budgetRangeRaw && budgetRangeRaw in allowedBudgetRanges
            ? allowedBudgetRanges[budgetRangeRaw]
            : undefined;
    const timeline =
        timelineRaw && timelineRaw in allowedTimelines
            ? allowedTimelines[timelineRaw]
            : undefined;

    try {
        await sendContactEmail({
            name,
            email,
            phone: phone || undefined,
            contactPreference,
            source: source || undefined,
            company: company || undefined,
            projectType,
            budgetRange,
            timeline,
            currentUrl: currentUrl || undefined,
            message,
            meta: {
                ip,
                userAgent,
                referer,
            },
        });
    } catch (error) {
        console.error("Contact email failed", error);
        redirect(`/contact?error=send${sourceQuery}`);
    }

    redirect(thanksUrl);
}
