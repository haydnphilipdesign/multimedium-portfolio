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

export async function requestTcTaskList(formData: FormData) {
    const source = getText(formData, "source");
    const thanksQuery = source ? `?sent=1&source=${encodeURIComponent(source)}` : "?sent=1";
    const errorQuery = source ? `?error=1&source=${encodeURIComponent(source)}` : "?error=1";

    const honeypot = getText(formData, "website");
    if (honeypot) {
        redirect(`/resources/tc-task-list${thanksQuery}`);
    }

    const name = getText(formData, "name");
    const email = getText(formData, "email");
    const company = getText(formData, "company");

    if (!name || !email) {
        redirect(`/resources/tc-task-list${errorQuery}`);
    }

    if (!isValidEmail(email)) {
        redirect(`/resources/tc-task-list${errorQuery}`);
    }

    try {
        await sendLeadMagnetEmail({
            leadMagnet: "TC Task List Sheet (example)",
            name,
            email,
            company: company || undefined,
            source: source || undefined,
            resourceFilename: "tc-task-list.pdf",
            resourceFilePath: "public/resources/tc-task-list.pdf",
            resourceText:
                "Note: this task list is a real example built for the Poconos region. Use it as a reference, then customize to your state/brokerage rules.\n\nIf you want this auto-populated from an intake + routed into your workflow, reply and tell me what tools you use.",
        });
    } catch (error) {
        console.error("Lead magnet email failed", error);
        redirect(`/resources/tc-task-list${errorQuery}`);
    }

    redirect(`/resources/tc-task-list${thanksQuery}`);
}
