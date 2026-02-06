import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import {
    IconMapPin,
    IconStack2,
    IconShieldCheck,
    IconChecklist,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "About",
    description:
        "Meet Haydn—designer and developer helping businesses build websites that earn trust, load fast, and turn visitors into inquiries.",
    alternates: {
        canonical: "/about",
    },
};

const values = [
    {
        icon: IconStack2,
        title: "Strategy, design, and build together",
        description:
            "One person, one feedback loop. You get fewer handoffs, faster decisions, and a website that stays consistent as you grow.",
    },
    {
        icon: IconShieldCheck,
        title: "Performance + accessibility",
        description:
            "Fast pages and accessible design aren’t extras—they’re trust signals. They also keep your site usable for more people.",
    },
    {
        icon: IconChecklist,
        title: "Clear process, real progress",
        description:
            "We ship the right version, then improve what matters. The goal is outcomes—more clarity, more leads, less back-and-forth.",
    },
];

const toolbox = [
    "Messaging + page structure",
    "Design systems + reusable sections",
    "Forms, email routing, and booking calendars",
    "Content editing (CMS) so you can update the site",
    "Analytics + simple conversion tracking",
    "Fast, modern builds (Next.js) when it’s a fit",
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
            {/* Hero Section */}
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <div className="grid items-center gap-12 rounded-[2rem] border border-border/65 bg-card/90 px-6 py-8 shadow-[var(--shadow-elevated)] md:grid-cols-2 md:gap-16 md:px-8 md:py-10">
                    <AnimatedSection>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-foreground border border-glow/20">
                                About
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-border/65 bg-background/80 px-4 py-1 text-xs text-muted-foreground">
                                <IconMapPin className="h-3.5 w-3.5 text-glow" stroke={1.5} />
                                Poconos, PA • Remote-friendly
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            I&apos;m Haydn.
                            <br />
                            <span className="text-gradient">I build websites that make it easy to trust you.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Multimedium is my solo practice. I help businesses turn their website into a clear, credible, and fast experience—so the right people understand what you do and reach out.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/contact?source=about-hero" className="btn-primary">
                                Talk about your project
                            </Link>
                            <Link href="/work" className="btn-secondary inline-flex items-center gap-2">
                                Browse case studies
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/65 bg-muted shadow-[var(--shadow-soft)]">
                            <Image
                                src="/haydn.png"
                                alt="Haydn"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 50vw, 100vw"
                                priority
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            {/* Values Section */}
            <Section>
                <StaggerContainer className="grid gap-6 sm:grid-cols-2 md:grid-cols-3" staggerDelay={0.1}>
                    {values.map((value) => (
                        <StaggerItem key={value.title}>
                            <div className="p-7 rounded-2xl bg-card border border-border/65 h-full">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/65 bg-muted/50 text-glow mb-5">
                                    <value.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <h2 className="text-xl font-semibold text-foreground mb-3">
                                    {value.title}
                                </h2>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* How I Work Section */}
            <Section className="rounded-[2rem] bg-muted/35">
                <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
                    <AnimatedSection>
                        <div className="space-y-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-foreground border border-glow/20">
                                How I work
                            </span>
                            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                                Clear deliverables, no agency fog
                            </h2>
                            <p className="text-muted-foreground">
                                You&apos;ll always know what&apos;s happening, what you need to review, and what comes next. I keep projects moving with weekly checkpoints and simple decision docs—so momentum doesn&apos;t die in Slack threads.
                            </p>
                            <ul className="grid gap-2 text-sm text-muted-foreground">
                                {workProcess.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-1.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">What I can help with</h3>
                            <p className="text-sm text-muted-foreground">
                                Clear on outcomes, flexible on implementation.
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {toolbox.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-border/65 bg-card px-3 py-1 text-xs text-muted-foreground"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="rounded-[2rem] border border-border/60 bg-card/80" padding="large">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                        Want a site that brings in better leads?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Tell me what you do, who you want to attract, and what’s not working on the current site. I’ll reply within one business day with next steps.
                    </p>
                    <Link href="/contact?source=about-cta" className="btn-primary">
                        Talk about your project
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}





