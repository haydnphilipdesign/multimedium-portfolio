"use server";

import { redirect } from "next/navigation";
import { sendLeadMagnetEmail } from "@/lib/email";
import { siteUrl } from "@/lib/site";

function getText(formData: FormData, key: string): string {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function requestTcCoverSheet(formData: FormData) {
    const source = getText(formData, "source");
    const thanksQuery = source ? `?sent=1&source=${encodeURIComponent(source)}` : "?sent=1";
    const errorQuery = source ? `?error=1&source=${encodeURIComponent(source)}` : "?error=1";

    const honeypot = getText(formData, "website");
    if (honeypot) {
        redirect(`/resources/tc-cover-sheet${thanksQuery}`);
    }

    const name = getText(formData, "name");
    const email = getText(formData, "email");
    const company = getText(formData, "company");

    if (!name || !email) {
        redirect(`/resources/tc-cover-sheet${errorQuery}`);
    }

    if (!isValidEmail(email)) {
        redirect(`/resources/tc-cover-sheet${errorQuery}`);
    }

    try {
        await sendLeadMagnetEmail({
            leadMagnet: "TC Cover Sheet / Quick Reference",
            name,
            email,
            company: company || undefined,
            source: source || undefined,
            resourceUrl: `${siteUrl}/resources/tc-cover-sheet.pdf`,
            resourceText:
                "This cover sheet is designed to be broadly useful across most TC workflows.\n\nIf you want a version that auto-populates from intake data (email + optional PDF output), reply and tell me what tools you use today.",
        });
    } catch (error) {
        console.error("Lead magnet email failed", error);
        redirect(`/resources/tc-cover-sheet${errorQuery}`);
    }

    redirect(`/resources/tc-cover-sheet${thanksQuery}`);
}

