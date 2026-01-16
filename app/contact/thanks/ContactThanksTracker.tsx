"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

interface ContactThanksTrackerProps {
    source?: string;
}

export function ContactThanksTracker({ source }: ContactThanksTrackerProps) {
    useEffect(() => {
        track("contact_submit", source ? { source } : undefined);
    }, [source]);

    return null;
}
