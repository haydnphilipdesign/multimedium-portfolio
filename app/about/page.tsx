import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import {
    IconMapPin,
    IconStack2,
    IconShieldCheck,
    IconSparkles,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "About Haydn",
    description:
        "Meet Haydn - a designer-developer building conversion-focused websites, design systems, and portals for teams that need to look premium and ship fast.",
    alternates: {
        canonical: "/about",
    },
};

const values = [
    {
        icon: IconStack2,
        title: "Design × engineering",
        description:
            "A cohesive system beats a pretty page. Every build connects narrative, UI, and code so the site stays clean as you grow.",
    },
    {
        icon: IconShieldCheck,
        title: "Performance + accessibility",
        description:
            "Speed and accessibility aren't nice-to-haves. They're trust signals—and they keep your site usable for everyone.",
    },
    {
        icon: IconSparkles,
        title: "Momentum over perfectionism",
        description:
            "Ship the right version fast, then iterate what converts. The goal is outcomes, not endless design loops.",
    },
];

const toolbox = [
    "Next.js • TypeScript",
    "Tailwind CSS • Component systems",
    "Framer Motion • Micro-interactions",
    "Sanity • Contentful • MDX",
    "Vercel • Supabase",
    "Resend • Postmark • Twilio",
    "Zapier • Make.com • n8n",
    "GA4 • Search Console • Dashboards",
];

const workProcess = [
    "Short workshop to lock positioning + page plan",
    "High-fidelity design with real copy (not lorem ipsum)",
    "Component build + CMS / editing workflow",
    "Launch checklist, analytics, and next-step roadmap",
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <Section className="pt-32 md:pt-40" padding="none">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <AnimatedSection>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-glow border border-glow/20">
                                About
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-1 text-xs text-muted-foreground">
                                <IconMapPin className="h-3.5 w-3.5 text-glow" stroke={1.5} />
                                Poconos, PA • Remote friendly
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            I&apos;m Haydn.
                            <br />
                            <span className="text-gradient">I design and build sites that feel inevitable.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Multimedium is my solo practice—built around one simple idea: the best work happens when strategy, design, and development live in the same feedback loop. You get fewer meetings, faster decisions, and a site that stays consistent as you ship new pages.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/contact" className="btn-primary">
                                Start a project
                            </Link>
                            <Link href="/work" className="btn-secondary inline-flex items-center gap-2">
                                See case studies
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted border border-border/50">
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
                <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
                    {values.map((value) => (
                        <StaggerItem key={value.title}>
                            <div className="p-7 rounded-2xl bg-card border border-border/50 h-full">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/50 bg-muted/50 text-glow mb-5">
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
            <Section className="bg-muted/30">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <AnimatedSection>
                        <div className="space-y-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-glow border border-glow/20">
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
                            <h3 className="text-2xl font-semibold text-foreground">Toolbox</h3>
                            <p className="text-sm text-muted-foreground">
                                Flexible with your stack, opinionated about quality.
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {toolbox.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-border/50 bg-card px-3 py-1 text-xs text-muted-foreground"
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
            <Section>
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                        Let&apos;s Connect
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        I&apos;m always interested in hearing about new projects and
                        opportunities. Get in touch to start a conversation.
                    </p>
                    <Link href="/contact" className="btn-primary">
                        Start a Conversation
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}
