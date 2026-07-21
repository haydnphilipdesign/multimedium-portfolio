"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

declare global {
    interface Window {
        turnstile?: {
            render: (
                container: HTMLElement,
                options: { sitekey: string; theme: "auto" },
            ) => string;
            remove: (widgetId: string) => void;
        };
    }
}

interface TurnstileWidgetProps {
    siteKey: string;
    resetKey?: string | number;
}

export function TurnstileWidget({ siteKey, resetKey }: TurnstileWidgetProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);

    const removeWidget = useCallback(() => {
        const widgetId = widgetIdRef.current;
        if (widgetId !== null) {
            window.turnstile?.remove(widgetId);
            widgetIdRef.current = null;
        }
        containerRef.current?.replaceChildren();
    }, []);

    const renderWidget = useCallback(() => {
        const container = containerRef.current;
        const turnstile = window.turnstile;
        if (!container || !turnstile || widgetIdRef.current !== null) return;

        widgetIdRef.current = turnstile.render(container, {
            sitekey: siteKey,
            theme: "auto",
        });
    }, [siteKey]);

    useEffect(() => {
        removeWidget();
        renderWidget();

        return removeWidget;
    }, [removeWidget, renderWidget, resetKey]);

    return (
        <div className="space-y-2">
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                strategy="afterInteractive"
                onLoad={renderWidget}
                onReady={renderWidget}
            />
            <div ref={containerRef} />
            <p className="text-xs text-muted-foreground">
                Spam protection is enabled.
            </p>
        </div>
    );
}
