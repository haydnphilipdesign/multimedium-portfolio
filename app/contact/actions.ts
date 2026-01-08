"use server";

import { redirect } from "next/navigation";
import { sendContactEmail } from "@/lib/email";

const allowedProjectTypes: Record<string, string> = {
    website: "Website Build / Redesign",
    landing: "Landing Pages + Funnels",
    portal: "Portal / Dashboard",
    retainer: "Growth Retainer",
    audit: "Accessibility / Performance Audit",
    other: "Something else",
};

function getText(formData: FormData, key: string): string {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContact(formData: FormData) {
    const honeypot = getText(formData, "website");
    if (honeypot) {
        redirect("/contact?sent=1");
    }

    const name = getText(formData, "name");
    const email = getText(formData, "email");
    const company = getText(formData, "company");
    const projectTypeRaw = getText(formData, "projectType");
    const message = getText(formData, "message");

    if (!name || !email || !message) {
        redirect("/contact?error=missing");
    }

    if (!isValidEmail(email)) {
        redirect("/contact?error=email");
    }

    if (message.length > 5000) {
        redirect("/contact?error=message");
    }

    const projectType = allowedProjectTypes[projectTypeRaw] ?? allowedProjectTypes.other;

    try {
        await sendContactEmail({
            name,
            email,
            company: company || undefined,
            projectType,
            message,
        });
    } catch (error) {
        console.error("Contact email failed", error);
        redirect("/contact?error=send");
    }

    redirect("/contact?sent=1");
}

