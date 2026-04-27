import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section, SectionHeading } from "@/components/sections/Section";
import {
    AnimatedSection,
    StaggerContainer,
    StaggerItem,
} from "@/components/motion/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getFaqStructuredData,
} from "@/lib/structuredData";
import {
    IconArrowRight,
    IconCircleCheck,
    IconCircleX,
    IconDeviceMobile,
    IconFileText,
    IconForms,
    IconHeadset,
    IconPhoto,
    IconSearch,
    IconShieldCheck,
    IconSpeedboat,
    IconUserCircle,
} from "@tabler/icons-react";

export const metadata: Metadata = createPageMetadata({
    title: "What Every Transaction Coordinator Website Needs",
    description:
        "The definitive checklist for transaction coordinator websites. What to include, what to avoid, and what separates a site that builds trust from one that gets ignored.",
    path: "/resources/what-every-tc-website-needs",
    keywords: [
        "transaction coordinator website",
        "what should a transaction coordinator website have",
        "transaction coordinator website checklist",
        "transaction coordinator web design",
        "tc website checklist",
    ],
});

const mustHaves = [
    {
        icon: IconUserCircle,
        title: "A clear 'who you are' positioning",
        description:
            "Agents want to know you're a real person with real experience — not a faceless service. Your name, your photo, your story. Don't hide behind a brand wall.",
    },
    {
        icon: IconFileText,
        title: "Services page with specifics",
        description:
            "Don't just say 'transaction coordination.' List the actual work: contract-to-close management, deadline tracking, compliance reviews, lender/title coordination. Agents need to see themselves in the services.",
    },
    {
        icon: IconForms,
        title: "An intake form or 'Submit a File' page",
        description:
            "If agents have to email you attachments and details, you're creating friction. A structured intake form (Cognito, Jotform, etc.) makes starting a transaction professional and fast.",
    },
    {
        icon: IconDeviceMobile,
        title: "Mobile-first responsive design",
        description:
            "Most agents are looking at your site between showings, on their phone. If your site doesn't work on mobile, you've lost them before they read a word.",
    },
    {
        icon: IconSearch,
        title: "SEO basics: meta tags, titles, OG images",
        description:
            "When agents search 'transaction coordinator [your city]', you want to show up. Proper meta tags, page titles, Open Graph images, and structured data make that possible.",
    },
    {
        icon: IconSpeedboat,
        title: "Fast load speed",
        description:
            "Page builders and heavy frameworks create bloated sites that load slowly. Clean code loads fast — which matters for both user experience and search rankings.",
    },
    {
        icon: IconPhoto,
        title: "Professional headshot and branding",
        description:
            "A real photo of you builds instant trust. Pair it with consistent colors and a logo that looks intentional, not thrown together in Canva.",
    },
    {
        icon: IconHeadset,
        title: "Clear contact info and a CTA on every page",
        description:
            "Every page should make it obvious how to get in touch. Don't make agents hunt for a phone number or email. A button on every page, every section, every scroll.",
    },
    {
        icon: IconShieldCheck,
        title: "Social proof: testimonials or client logos",
        description:
            "Even one testimonial from an agent or brokerage changes how a visitor reads your entire site. If you have them, use them. If you don't, prioritize getting one.",
    },
];

const commonMistakes = [
    "Using a generic Wix/Squarespace template with no TC-specific content",
    "No intake form — relying on email or phone to start transactions",
    "Missing or buried contact information",
    "No mobile optimization — site looks broken on phones",
    "Stock photos of random offices instead of a real headshot",
    "Vague service descriptions ('We coordinate transactions') instead of specifics",
    "No SEO setup — no meta tags, no page titles, no Google presence",
    "A Careers page that doesn't explain why someone would want to work with you",
    "No About section — agents want to know who they're hiring",
    "Slow load times from bloated page builders or oversized images",
];

const faqs = [
    {
        q: "Do I really need a website if I get all my business from referrals?",
        a: "Yes. Even referral-based leads will Google you before reaching out. A professional website validates what the referral already told them. Without one, you're relying entirely on trust you haven't earned yet.",
    },
    {
        q: "Can I just use a Wix or Squarespace template?",
        a: "You can, but most templates aren't built for TC businesses. You'll end up with generic sections that don't map to your workflow, no intake forms, and a site that looks like every other small business. Custom or TC-specific templates solve this.",
    },
    {
        q: "How much should a TC website cost?",
        a: "MULTIMEDIUM's TC website packages start at $595 for a tightly scoped credibility site, with TC Starter at $795, TC Growth at $1,495, and TC Pro starting at $2,495+. The key is matching the package to the business job: credibility, clearer services, less back-and-forth, or a fuller intake and conversion system.",
    },
    {
        q: "What's more important — how it looks or what it says?",
        a: "What it says. Design gets attention, but messaging converts. If your copy clearly explains what you do, who you do it for, and why agents should trust you, the site will work. Pretty design with vague copy won't.",
    },
];

const structuredData = [
    getBreadcrumbStructuredData([
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        {
            name: "What Every TC Website Needs",
            path: "/resources/what-every-tc-website-needs",
        },
    ]),
    getFaqStructuredData(faqs),
];

export default function WhatEveryTCWebsiteNeedsPage() {
    return (
        <>
            <JsonLd data={structuredData} />

            {/* Hero */}
            <Section className="pt-28 sm:pt-32 md:pt-40 pb-14 md:pb-20" padding="none">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30 mb-6">
                            <IconFileText className="w-4 h-4" stroke={1.5} />
                            Free resource
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            What every transaction coordinator website needs
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                            The definitive checklist for transaction coordinator websites.
                            What to include, what to skip, and what separates a site that
                            builds trust from one that gets ignored.
                        </p>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Written by someone whose mom has been a TC since 2013.
                        </p>
                    </div>
                </AnimatedSection>
            </Section>

            {/* Must-haves */}
            <Section className="border-t border-border/40">
                <AnimatedSection>
                    <SectionHeading
                        title="The 9 things your TC website must have"
                        subtitle="If your site is missing any of these, it's leaving trust — and leads — on the table."
                    />
                </AnimatedSection>

                <StaggerContainer
                    className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                    staggerDelay={0.06}
                >
                    {mustHaves.map((item) => (
                        <StaggerItem key={item.title}>
                            <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6">
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                    <item.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <h3 className="mt-4 text-base font-semibold text-foreground">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Common mistakes */}
            <div className="relative rounded-2xl bg-muted/35">
                <Section>
                    <AnimatedSection>
                        <SectionHeading
                            title="10 mistakes most TC websites make"
                            subtitle="These are the patterns I see over and over when reviewing TC sites."
                        />
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="grid gap-3 max-w-3xl">
                            {commonMistakes.map((mistake) => (
                                <div
                                    key={mistake}
                                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-card px-5 py-3.5"
                                >
                                    <IconCircleX
                                        className="mt-0.5 h-5 w-5 text-destructive/70 shrink-0"
                                        stroke={1.5}
                                    />
                                    <span className="text-sm text-muted-foreground">
                                        {mistake}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </Section>
            </div>

            {/* FAQ */}
            <Section>
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                            Common questions
                        </h2>
                    </div>
                </AnimatedSection>

                <div className="mt-8 grid gap-4 md:max-w-3xl">
                    {faqs.map((item) => (
                        <details
                            key={item.q}
                            className="group rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] px-6 py-5 open:bg-card/80 transition-colors"
                        >
                            <summary className="cursor-pointer list-none">
                                <div className="flex items-start justify-between gap-6">
                                    <p className="text-base font-semibold text-foreground">
                                        {item.q}
                                    </p>
                                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border/60 text-muted-foreground group-open:text-foreground shrink-0">
                                        +
                                    </span>
                                </div>
                            </summary>
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                {item.a}
                            </p>
                        </details>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="border-t border-border/40">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] px-6 py-10 sm:px-10">
                        <div className="relative flex flex-col items-center text-center">
                            <IconCircleCheck
                                className="w-8 h-8 text-primary mb-4"
                                stroke={1.5}
                            />
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Want a website that checks every box?
                            </h2>
                            <p className="mt-3 max-w-2xl text-muted-foreground">
                                I build websites specifically for transaction coordinators.
                                Every item on this checklist is baked into the packages — intake
                                forms, mobile-first design, SEO, copy, and professional
                                positioning. Four packages starting at $595.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/tc-packages?source=what-every-tc-website-needs"
                                    className="btn-primary inline-flex items-center justify-center gap-2"
                                >
                                    See TC website packages
                                    <IconArrowRight className="w-4 h-4" stroke={2} />
                                </Link>
                                <Link
                                    href="/contact?source=what-every-tc-website-needs"
                                    className="btn-secondary inline-flex items-center justify-center gap-2"
                                >
                                    Start a conversation
                                </Link>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>
        </>
    );
}
