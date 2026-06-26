import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { MonoLabel, RuledRow, PullQuote, CheckRow } from "@/components/sections/Editorial";
import { CTARuled } from "@/components/marketing/CTA";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "About Haydn",
    description:
        "Meet Haydn, founder of Multimedium, a Poconos-based designer and developer building clearer, higher-converting websites for real estate-focused businesses.",
    path: "/about",
    keywords: [
        "about multimedium",
        "poconos web designer",
        "real estate web designer pennsylvania",
    ],
});

const values = [
    {
        title: "Strategy, design, and build together",
        description:
            "One person, one feedback loop. You get fewer handoffs, faster decisions, and a website that stays consistent as you grow.",
    },
    {
        title: "Performance + accessibility",
        description:
            "Fast pages and accessible design aren't extras — they show visitors your business is professional, and they keep your site usable for more people.",
    },
    {
        title: "Clear process, real progress",
        description:
            "We ship the right version, then improve what matters. The goal is outcomes — more clarity, more leads, less back-and-forth.",
    },
];

const toolbox = [
    "Messaging + page structure",
    "Design systems + reusable sections",
    "Forms, email routing, and booking calendars",
    "Content editing (CMS) so you can update the site",
    "Analytics + simple conversion tracking",
    "Fast, modern builds (Next.js) when it's a fit",
];

const workProcess = [
    "Short kickoff to lock goals + page plan",
    "Design with real copy (not lorem ipsum)",
    "Build with reusable sections + an editing workflow",
    "Launch checklist, analytics, and a next-step roadmap",
];

export default function AboutPage() {
    return (
        <>
            {/* Editorial hero */}
            <Section size="wide" className="pt-32 sm:pt-36 md:pt-44" padding="none">
                <div className="grid items-end gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
                    <AnimatedSection>
                        <MonoLabel className="mb-6">Poconos, PA · Remote-friendly</MonoLabel>
                        <h1 className="font-display text-5xl leading-[1.02] text-foreground sm:text-6xl md:text-7xl">
                            I&apos;m Haydn. I build websites that make it{" "}
                            <em className="italic text-primary">easy to trust you.</em>
                        </h1>
                        <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                            Multimedium is my solo practice. I help real estate teams, transaction
                            coordinators, and HOAs build sites that work harder — strategy, design,
                            and code in one loop.
                        </p>
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <Link href="/contact?source=about-hero" className="btn btn-primary">
                                Work with me
                            </Link>
                            <Link href="/work" className="btn btn-secondary">
                                Browse case studies
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 bg-surface-2 shadow-[var(--shadow-elevated)]">
                            <Image
                                src="/haydn.webp"
                                alt="Haydn, founder of Multimedium in the Poconos, Pennsylvania"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 45vw, 100vw"
                                priority
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent px-5 pb-5 pt-12">
                                <p className="mono-meta">Designer + Developer · Solo practice</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            {/* Story — pull quote moment */}
            <Section size="narrow" padding="large">
                <AnimatedSection>
                    <PullQuote cite="The whole point of Multimedium">
                        A good website should do the quiet work of making a stranger feel like
                        you&apos;re the obvious, safe choice — before you ever speak.
                    </PullQuote>
                </AnimatedSection>
            </Section>

            {/* Values — numbered ruled rows */}
            <section className="bg-surface-1 border-y border-rule">
                <Section>
                    <AnimatedSection>
                        <MonoLabel index="01" className="mb-5">How I think about the work</MonoLabel>
                        <h2 className="max-w-2xl font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
                            Fewer handoffs. Clearer outcomes.
                        </h2>
                    </AnimatedSection>

                    <StaggerContainer className="mt-12 ledger border-t border-rule" staggerDelay={0.07}>
                        {values.map((value, idx) => (
                            <StaggerItem key={value.title}>
                                <RuledRow index={String(idx + 1).padStart(2, "0")} title={value.title}>
                                    {value.description}
                                </RuledRow>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Section>
            </section>

            {/* How I work — asymmetric */}
            <Section>
                <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
                    <AnimatedSection>
                        <MonoLabel index="02" className="mb-5">How projects run</MonoLabel>
                        <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                            Clear deliverables, no agency fog
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-foreground/78">
                            You&apos;ll always know what&apos;s happening, what you need to review, and
                            what comes next. I keep projects moving with weekly checkpoints and simple
                            decision docs.
                        </p>
                        <ul className="mt-8 ledger border-t border-rule">
                            {workProcess.map((item) => (
                                <CheckRow key={item}>{item}</CheckRow>
                            ))}
                        </ul>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <div className="rounded-2xl border border-border/70 bg-surface-1 p-7 shadow-[var(--shadow-soft)]">
                            <MonoLabel className="mb-3 text-muted-foreground">What I can help with</MonoLabel>
                            <p className="text-base leading-relaxed text-foreground/75">
                                Clear on outcomes, flexible on implementation.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {toolbox.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-rule bg-background/60 px-3 py-1.5 font-mono text-[0.72rem] text-foreground/75"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            {/* CTA — quiet ruled closer */}
            <CTARuled
                eyebrow="Let's talk"
                title="Want a site that brings in better leads?"
                body="Tell me what you do, who you want to attract, and what's not working on the current site. I'll reply within one business day with next steps."
                primary={{ label: "Let's talk", href: "/contact?source=about-cta" }}
                secondary={{ label: "Browse work", href: "/work" }}
            />
        </>
    );
}
