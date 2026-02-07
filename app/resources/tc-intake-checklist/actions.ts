"use server";

import { redirect } from "next/navigation";
import { sendLeadMagnetEmail } from "@/lib/email";

function getText(formData: FormData, key: string): string {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function requestChecklist(formData: FormData) {
    const source = getText(formData, "source");
    const thanksQuery = source ? `?sent=1&source=${encodeURIComponent(source)}` : "?sent=1";
    const errorQuery = source ? `?error=1&source=${encodeURIComponent(source)}` : "?error=1";

    const honeypot = getText(formData, "website");
    if (honeypot) {
        redirect(`/resources/tc-intake-checklist${thanksQuery}`);
    }

    const name = getText(formData, "name");
    const email = getText(formData, "email");
    const company = getText(formData, "company");

    if (!name || !email) {
        redirect(`/resources/tc-intake-checklist${errorQuery}`);
    }

    if (!isValidEmail(email)) {
        redirect(`/resources/tc-intake-checklist${errorQuery}`);
    }

    try {
        await sendLeadMagnetEmail({
            leadMagnet: "TC Intake Checklist",
            name,
            email,
            company: company || undefined,
            source: source || undefined,
            resourceFilename: "tc-intake-checklist.pdf",
            resourceFilePath: "public/resources/tc-intake-checklist.pdf",
            resourceText:
                "Here’s the TC lead intake checklist PDF.\n\nIf you want this auto-populated from an intake form (and routed into your workflow), reply and tell me what tools you use today.",
        });
    } catch (error) {
        console.error("Lead magnet email failed", error);
        redirect(`/resources/tc-intake-checklist${errorQuery}`);
    }

    redirect(`/resources/tc-intake-checklist${thanksQuery}`);
}
