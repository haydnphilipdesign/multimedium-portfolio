import type { Metadata } from "next";
import {
    IconCircleCheck,
    IconArrowRight,
    IconMail,
    IconPhone,
    IconWorld,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "My TC Academy Referral Flyer",
    robots: { index: false, follow: false },
};

export default function FlyerPage() {
    return (
        <>
            {/* Print-specific styles */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        @media print {
                            /* Hide site chrome */
                            nav, footer, .mobile-sticky-cta,
                            [data-mobile-cta], #main-content > :not(.flyer-root) {
                                display: none !important;
                            }
                            html, body {
                                background: white !important;
                                -webkit-print-color-adjust: exact !important;
                                print-color-adjust: exact !important;
                            }
                            body { padding: 0 !important; margin: 0 !important; }
                            #main-content { padding: 0 !important; }
                            .flyer-root {
                                padding: 0 !important;
                                margin: 0 !important;
                                max-width: none !important;
                            }
                        }
                        @page {
                            size: letter;
                            margin: 0;
                        }
                    `,
                }}
            />

            <div className="flyer-root mx-auto max-w-3xl px-4 py-8 print:p-0 print:max-w-none">
                {/* Screen-only instructions */}
                <div className="print:hidden mb-6 rounded-2xl border border-border/60 bg-primary/10 px-6 py-4">
                    <p className="text-sm font-medium text-foreground">
                        To save this as a PDF: press <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border/60 text-xs font-mono">Ctrl + P</kbd> (or <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border/60 text-xs font-mono">Cmd + P</kbd> on Mac), set destination to &quot;Save as PDF&quot;, and click Save.
                    </p>
                </div>

                {/* The actual flyer */}
                <div
                    className="relative overflow-hidden bg-white text-[#2a2d3a] print:w-[8.5in] print:h-[11in] print:mx-auto"
                    style={{
                        fontFamily: "var(--font-brand-sans), 'Space Grotesk', system-ui, sans-serif",
                        width: "8.5in",
                        minHeight: "11in",
                        padding: "0.55in 0.65in 0.5in",
                        boxSizing: "border-box",
                    }}
                >
                    {/* Top accent bar */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "5px",
                            background: "linear-gradient(90deg, #b88a2d, #d4a84b, #b88a2d)",
                        }}
                    />

                    {/* Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.3in" }}>
                        <div>
                            <div
                                style={{
                                    fontSize: "11px",
                                    fontWeight: 700,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase" as const,
                                    color: "#7a7f8e",
                                }}
                            >
                                Multimedium
                            </div>
                            <h1
                                style={{
                                    fontFamily: "var(--font-brand-display), 'Fraunces', Georgia, serif",
                                    fontSize: "28px",
                                    fontWeight: 700,
                                    lineHeight: 1.15,
                                    color: "#1a1d2a",
                                    margin: "6px 0 0",
                                    letterSpacing: "-0.015em",
                                }}
                            >
                                Web Design for<br />
                                Transaction Coordinators
                            </h1>
                        </div>
                        <div
                            style={{
                                textAlign: "right" as const,
                                fontSize: "12px",
                                color: "#5a5e6e",
                                lineHeight: 1.6,
                            }}
                        >
                            <div style={{ fontWeight: 600, color: "#1a1d2a" }}>Private Referral</div>
                            <div>My TC Academy Students</div>
                        </div>
                    </div>

                    {/* Intro */}
                    <div
                        style={{
                            background: "#f8f7f4",
                            borderRadius: "12px",
                            padding: "18px 22px",
                            marginBottom: "0.25in",
                            borderLeft: "3px solid #d4a84b",
                        }}
                    >
                        <p style={{ fontSize: "13.5px", lineHeight: 1.65, color: "#2a2d3a", margin: 0 }}>
                            Hi! I&apos;m Haydn, the designer behind Multimedium. Jennifer connected you with this page because
                            she trusts the work I do for transaction coordinators, real estate professionals, and service-based
                            businesses. I build websites that help TCs look credible, explain their services clearly, and turn
                            visitors into real leads.
                        </p>
                    </div>

                    {/* Two-column layout */}
                    <div style={{ display: "flex", gap: "0.3in", marginBottom: "0.22in" }}>
                        {/* Left column: Why your website matters */}
                        <div style={{ flex: "1 1 50%" }}>
                            <h2
                                style={{
                                    fontFamily: "var(--font-brand-display), 'Fraunces', Georgia, serif",
                                    fontSize: "16px",
                                    fontWeight: 700,
                                    color: "#1a1d2a",
                                    marginBottom: "12px",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                Why Your Website Matters
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                                {[
                                    {
                                        title: "Instant credibility",
                                        text: "Agents and clients look you up before they reach out. A polished site signals you run a real operation.",
                                    },
                                    {
                                        title: "Explain your services clearly",
                                        text: "A well-structured page tells prospects exactly what you do and why you're the right fit.",
                                    },
                                    {
                                        title: "Stand out in a growing field",
                                        text: "More people are becoming TCs. A generic template won't differentiate you from the rest.",
                                    },
                                    {
                                        title: "Build a stronger foundation",
                                        text: "Your website is the hub for referrals, testimonials, and intake. Get it right early.",
                                    },
                                ].map((item) => (
                                    <div key={item.title}>
                                        <p style={{ fontSize: "12.5px", fontWeight: 650, color: "#1a1d2a", margin: "0 0 2px", lineHeight: 1.3 }}>
                                            {item.title}
                                        </p>
                                        <p style={{ fontSize: "11.5px", color: "#5a5e6e", margin: 0, lineHeight: 1.55 }}>
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right column: What you get */}
                        <div style={{ flex: "1 1 50%" }}>
                            <h2
                                style={{
                                    fontFamily: "var(--font-brand-display), 'Fraunces', Georgia, serif",
                                    fontSize: "16px",
                                    fontWeight: 700,
                                    color: "#1a1d2a",
                                    marginBottom: "12px",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                What&apos;s Included
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                                {[
                                    "Positioning + messaging tailored to your TC business",
                                    "Custom design — not a template with your logo on it",
                                    "Lead capture that qualifies and filters for fit",
                                    "Mobile-first, fast, and accessible from day one",
                                    "Copy and content guidance (you won't stare at blank pages)",
                                    "Launch-ready build you can maintain and grow with",
                                ].map((item) => (
                                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                                        <IconCircleCheck
                                            style={{ width: "15px", height: "15px", color: "#b88a2d", flexShrink: 0, marginTop: "1px" }}
                                            stroke={1.8}
                                        />
                                        <p style={{ fontSize: "12px", color: "#2a2d3a", margin: 0, lineHeight: 1.5 }}>
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Referral perk banner */}
                    <div
                        style={{
                            background: "linear-gradient(135deg, #1a1d2a 0%, #2a2d3a 100%)",
                            borderRadius: "12px",
                            padding: "18px 22px",
                            marginBottom: "0.22in",
                            color: "white",
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>
                            <div style={{ flex: 1 }}>
                                <p
                                    style={{
                                        fontSize: "10px",
                                        fontWeight: 700,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase" as const,
                                        color: "#d4a84b",
                                        margin: "0 0 6px",
                                    }}
                                >
                                    My TC Academy Referral Perk
                                </p>
                                <p style={{ fontSize: "13px", fontWeight: 600, margin: "0 0 6px", lineHeight: 1.35 }}>
                                    A preferred perk for Jennifer&apos;s students — not a coupon.
                                </p>
                                <p style={{ fontSize: "11.5px", color: "#c0c3ce", margin: 0, lineHeight: 1.55 }}>
                                    As a My TC Academy student, you&apos;ll receive a preferred perk on your project.
                                    The details depend on scope and will be discussed during our initial conversation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* How to get started */}
                    <div style={{ marginBottom: "0.22in" }}>
                        <h2
                            style={{
                                fontFamily: "var(--font-brand-display), 'Fraunces', Georgia, serif",
                                fontSize: "16px",
                                fontWeight: 700,
                                color: "#1a1d2a",
                                marginBottom: "14px",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            How to Get Started
                        </h2>
                        <div style={{ display: "flex", gap: "16px" }}>
                            {[
                                {
                                    step: "1",
                                    title: "Visit the referral page",
                                    text: "Go to the link below and click \"Start a conversation.\"",
                                },
                                {
                                    step: "2",
                                    title: "Tell me about your business",
                                    text: "Mention My TC Academy in your message so I know Jennifer sent you.",
                                },
                                {
                                    step: "3",
                                    title: "Get a clear proposal",
                                    text: "I'll reply within 1 business day with scope, timeline, and your referral perk.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.step}
                                    style={{
                                        flex: 1,
                                        background: "#f8f7f4",
                                        borderRadius: "10px",
                                        padding: "14px 16px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "24px",
                                            height: "24px",
                                            borderRadius: "50%",
                                            background: "#1a1d2a",
                                            color: "#d4a84b",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "12px",
                                            fontWeight: 700,
                                            marginBottom: "8px",
                                        }}
                                    >
                                        {item.step}
                                    </div>
                                    <p style={{ fontSize: "12.5px", fontWeight: 650, color: "#1a1d2a", margin: "0 0 3px", lineHeight: 1.3 }}>
                                        {item.title}
                                    </p>
                                    <p style={{ fontSize: "11px", color: "#5a5e6e", margin: 0, lineHeight: 1.5 }}>
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA / URL block */}
                    <div
                        style={{
                            border: "2px solid #d4a84b",
                            borderRadius: "12px",
                            padding: "18px 22px",
                            textAlign: "center" as const,
                            marginBottom: "0.2in",
                        }}
                    >
                        <p style={{ fontSize: "12px", fontWeight: 600, color: "#5a5e6e", margin: "0 0 6px", letterSpacing: "0.03em" }}>
                            Your private referral page
                        </p>
                        <p
                            style={{
                                fontFamily: "var(--font-brand-mono), 'JetBrains Mono', monospace",
                                fontSize: "20px",
                                fontWeight: 700,
                                color: "#1a1d2a",
                                margin: "0 0 4px",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            multimedium.dev/mytcacademy
                        </p>
                        <p style={{ fontSize: "11px", color: "#7a7f8e", margin: 0 }}>
                            This link is for My TC Academy students only — please don&apos;t share publicly.
                        </p>
                    </div>

                    {/* Footer with contact */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderTop: "1px solid #e8e6e1",
                            paddingTop: "14px",
                        }}
                    >
                        <div style={{ display: "flex", gap: "20px", fontSize: "11px", color: "#5a5e6e" }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                                <IconMail style={{ width: "13px", height: "13px" }} stroke={1.6} />
                                haydn@multimedium.dev
                            </span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                                <IconPhone style={{ width: "13px", height: "13px" }} stroke={1.6} />
                                570-994-6186
                            </span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                                <IconWorld style={{ width: "13px", height: "13px" }} stroke={1.6} />
                                multimedium.dev
                            </span>
                        </div>
                        <div style={{ fontSize: "10px", color: "#9a9daa" }}>
                            Prepared for My TC Academy
                        </div>
                    </div>
                </div>

                {/* Screen-only link back */}
                <div className="print:hidden mt-6 text-center">
                    <a
                        href="/mytcacademy"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                        <IconArrowRight className="w-4 h-4 rotate-180" stroke={2} />
                        Back to referral page
                    </a>
                </div>
            </div>
        </>
    );
}
