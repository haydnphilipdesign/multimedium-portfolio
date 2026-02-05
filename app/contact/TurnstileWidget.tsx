"use client";

import Script from "next/script";

export function TurnstileWidget({ siteKey }: { siteKey: string }) {
    return (
        <div className="space-y-2">
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                strategy="afterInteractive"
            />
            <div className="cf-turnstile" data-sitekey={siteKey} data-theme="auto" />
            <p className="text-xs text-muted-foreground">
                Spam protection is enabled.
            </p>
        </div>
    );
}

