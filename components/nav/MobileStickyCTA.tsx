"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import { IconArrowRight } from "@tabler/icons-react";

const hiddenPathPrefixes = ["/contact", "/contact/thanks"];

export function MobileStickyCTA() {
    const pathname = usePathname();
    const schedulingUrl = process.env.NEXT_PUBLIC_SCHEDULING_URL;

    const hidden = hiddenPathPrefixes.some((prefix) => pathname.startsWith(prefix));

    useEffect(() => {
        const root = document.documentElement;
        const offset = hidden
            ? "0px"
            : "calc(var(--mobile-cta-height) + env(safe-area-inset-bottom, 0px) + 0.75rem)";

        root.style.setProperty("--mobile-cta-offset", offset);

        return () => {
            root.style.setProperty("--mobile-cta-offset", "0px");
        };
    }, [hidden]);

    const primaryHref = useMemo(() => {
        if (pathname === "/contact") return "/work?source=mobile-sticky-contact";
        return "/contact?source=mobile-sticky";
    }, [pathname]);

    if (hidden) return null;

    return (
        <div className="fixed inset-x-0 bottom-0 z-[75] border-t border-border/70 bg-background/92 px-3 pt-3 pb-[calc(env(safe-area-inset-bottom,0px)+0.75rem)] shadow-[0_-10px_28px_oklch(0.22_0.02_252/0.16)] backdrop-blur-xl md:hidden">
            <div className="mx-auto flex max-w-7xl items-center gap-2">
                <Link
                    href="/work?source=mobile-sticky"
                    className="btn-secondary touch-target flex-1 justify-center px-4 text-sm"
                >
                    Browse work
                </Link>
                {schedulingUrl ? (
                    <a
                        href={schedulingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary touch-target flex-1 justify-center px-4 text-sm"
                    >
                        Book a call
                    </a>
                ) : (
                    <Link
                        href={primaryHref}
                        className="btn-primary touch-target flex-1 justify-center gap-1.5 px-4 text-sm"
                    >
                        Talk project
                        <IconArrowRight className="h-4 w-4" stroke={1.8} />
                    </Link>
                )}
            </div>
        </div>
    );
}
