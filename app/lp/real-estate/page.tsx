import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { projects } from "@/content/projects";
import {
    IconArrowRight,
    IconBolt,
    IconBuildingSkyscraper,
    IconChartLine,
    IconCircleCheck,
    IconClock,
    IconMail,
    IconMapPin,
    IconShieldCheck,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Real Estate Website Design",
    description:
        "Conversion-first website design for real estate professionals - fast, trustworthy, and built to turn visitors into qualified inquiries.",
    alternates: {
        canonical: "/lp/real-estate",
    },
};

const proof = [
    {
        icon: IconClock,
        value: "4–6 weeks",
        label: "typical timeline",
        detail: "Plan → design → build → launch",
    },
    {
        icon: IconShieldCheck,
        value: "Fast",
        label: "on mobile",
        detail: "Speed + accessibility built in",
    },
    {
        icon: IconChartLine,
        value: "Clear",
        label: "lead capture",
        detail: "CTAs that don’t feel spammy",
    },
];

const outcomes = [
    {
        title: "Win trust fast",
        description:
            "Messaging + layout built for clarity—so clients feel confident reaching out within seconds.",
    },
    {
        title: "Get more inquiries (not more clicks)",
        description:
            "Lead capture that qualifies and guides—so you spend less time on low-fit conversations.",
    },
    {
        title: "Look established on every device",
        description:
            "Mobile-first, crisp typography, and a system that stays consistent as you grow.",
    },
];

const fit = [
    "You want a high-trust site, not a template.",
    "Your current site looks fine, but doesn’t convert.",
    "You want a clear service area + “work with me” path.",
    "You want one person to handle strategy, design, and build.",
];

const faq = [
    {
        q: "Do you build IDX sites?",
        a: "If you already have an IDX provider, I can help integrate it cleanly. If you don’t, we can structure the site around conversion-first pages (areas served, buyer/seller funnels, listings links) that still performs without heavy IDX complexity.",
    },
    {
        q: "Can you match my brokerage/team branding?",
        a: "Yes - while still making the site feel distinct and established. We&apos;ll keep the visual system consistent so future updates don&apos;t drift.",
    },
    {
        q: "Do you help with copy and messaging?",
        a: "Yes. The build includes page structure + messaging guidance so the site stays focused on the actions you want people to take.",
    },
    {
        q: "Can you migrate from Squarespace/Wix/WordPress?",
        a: "Yes. We’ll reuse what’s worth keeping, improve what isn’t, and ship a site that’s faster and easier to extend.",
    },
    {
        q: "What happens after launch?",
        a: "You’ll have a clean system you can grow into. If you want ongoing improvements (SEO, landing pages, conversion tuning), I offer retainers with clear monthly priorities.",
    },
];

export default function RealEstateLandingPage() {
    const schedulingUrl = process.env.NEXT_PUBLIC_SCHEDULING_URL;
    const contactHref = "/contact?source=lp-real-estate&projectType=website";

    const realEstateProjects = projects
        .filter((p) => p.industries?.includes("real-estate"))
        .slice(0, 3);

    return (
        <>
            {/* Hero */}
            <div className="relative overflow-hidden border-b border-border/40">
                <div className="absolute inset-0 bg-hero-gradient opacity-70" />
                <div className="grain absolute inset-0 pointer-events-none" />

                <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                    <AnimatedSection>
                        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-start">
                            <div className="max-w-2xl">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground border border-border/65 mb-6">
                                    <IconBuildingSkyscraper className="w-4 h-4 text-glow" stroke={1.5} />
                                    Real estate websites that convert
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                                    A high-trust real estate website that{" "}
                                    <span className="text-gradient">wins trust fast</span>—and makes contacting you the obvious next step.
                                </h1>
                                <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                                    Built for agents, teams, and property pros who want fewer tire-kickers, cleaner positioning, and a site that feels credible on mobile.
                                </p>

                                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                    {schedulingUrl ? (
                                        <a
                                            href={schedulingUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary inline-flex items-center justify-center gap-2"
                                        >
                                            <IconBolt className="w-4 h-4" stroke={2} />
                                            Book a quick call
                                        </a>
                                    ) : (
                                        <Link href={contactHref} className="btn-primary inline-flex items-center justify-center gap-2">
                                            <IconMail className="w-4 h-4" stroke={2} />
                                            Get a quote
                                        </Link>
                                    )}

                                    <Link
                                        href={contactHref}
                                        className="btn-secondary inline-flex items-center justify-center gap-2"
                                    >
                                        Send a message
                                        <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>

                                <p className="mt-4 text-sm text-muted-foreground">
                                    Response within 1 business day. No pressure—if I’m not the right fit, I’ll point you to someone who is.
                                </p>
                            </div>

                            <div className="relative overflow-hidden rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-7">
                                <div className="absolute inset-0 bg-gradient-to-br from-glow/10 via-transparent to-transparent" />
                                <div className="relative space-y-6">
                                    <p className="text-sm font-semibold text-foreground">
                                        What you get
                                    </p>
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        {[
                                            "Authority-first homepage + clear CTAs",
                                            "Buyer / seller pathways (or your specialties)",
                                            "Service area structure (without bloat)",
                                            "Contact flow that’s easy to say yes to",
                                            "Fast performance + clean analytics",
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <IconCircleCheck className="mt-0.5 h-4 w-4 text-glow" stroke={1.6} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="rounded-xl border border-border/65 bg-muted/25 p-4">
                                        <div className="flex items-start gap-3">
                                            <IconMapPin className="mt-0.5 h-4 w-4 text-glow" stroke={1.6} />
                                            <div>
                                                <p className="text-sm font-medium text-foreground">
                                                    Built for local trust
                                                </p>
                                                <p className="mt-1 text-sm text-muted-foreground">
                                                    Your site should feel like the most credible option in your market—before anyone opens Zillow.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </Section>

                <Section className="pt-10 pb-14 md:pb-20" padding="none">
                    <StaggerContainer className="grid gap-4 sm:grid-cols-3" staggerDelay={0.06}>
                        {proof.map((item) => (
                            <StaggerItem key={item.label}>
                                <div className="rounded-2xl border border-border/65 bg-card/82 backdrop-blur-sm px-6 py-5">
                                    <div className="flex items-start gap-3">
                                        <item.icon className="h-5 w-5 text-glow" stroke={1.6} />
                                        <div>
                                            <p className="text-lg font-semibold text-foreground">
                                                {item.value}{" "}
                                                <span className="text-muted-foreground font-medium">
                                                    {item.label}
                                                </span>
                                            </p>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                {item.detail}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Section>
            </div>

            {/* Outcomes */}
            <Section className="relative">
                <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-glow/10 blur-3xl" />
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-accent-strong border border-glow/30">
                            What changes
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                            A site that feels credible—and converts without feeling salesy.
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Most agent sites look the same. The difference is clarity: who it’s for, why you, and what to do next.
                        </p>
                    </div>
                </AnimatedSection>

                <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-3" staggerDelay={0.08}>
                    {outcomes.map((item) => (
                        <StaggerItem key={item.title}>
                            <div className="h-full rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] px-6 py-6">
                                <p className="text-lg font-semibold text-foreground">
                                    {item.title}
                                </p>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Fit */}
            <div className="relative border-y border-border/40 rounded-[2rem] bg-muted/35">
                <div className="grain absolute inset-0 pointer-events-none" />
                <Section>
                    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14 items-start">
                        <AnimatedSection>
                            <div className="max-w-xl">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Great fit if…
                                </h2>
                                <p className="mt-3 text-muted-foreground">
                                    You don’t need “more pages.” You need a clear story, a credible feel, and a path that turns visits into conversations.
                                </p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.1}>
                            <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-7">
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    {fit.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-glow" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                    <Link href={contactHref} className="btn-primary inline-flex items-center justify-center gap-2">
                                        Get pricing + timeline
                                        <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                    <Link href="/work?industry=real-estate&source=lp-real-estate" className="btn-secondary inline-flex items-center justify-center gap-2">
                                        See real estate work
                                        <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </Section>
            </div>

            {/* Work */}
            {realEstateProjects.length > 0 && (
                <Section className="relative overflow-hidden">
                    <div className="pointer-events-none absolute -top-28 left-0 h-72 w-72 rounded-full bg-glow/10 blur-3xl" />
                    <AnimatedSection>
                        <div className="max-w-3xl">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-accent-strong border border-glow/30">
                                Recent work
                            </span>
                            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
                                Real projects in real estate + ops
                            </h2>
                            <p className="mt-3 text-muted-foreground">
                                A few builds that show the level of polish and the kind of clarity you’ll get.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {realEstateProjects.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                    <AnimatedSection className="mt-10">
                        <Link
                            href="/work?industry=real-estate&source=lp-real-estate"
                            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-strong transition-colors group"
                        >
                            Browse all real estate projects
                            <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                        </Link>
                    </AnimatedSection>
                </Section>
            )}

            {/* Process */}
            <Section>
                <HowItWorks contactSource="lp-real-estate-how-it-works" />
            </Section>

            {/* FAQ */}
            <Section className="border-t border-border/40">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                            FAQ
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            A few common questions from agents and real estate teams.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="mt-10 grid gap-4 md:max-w-4xl">
                    {faq.map((item) => (
                        <details
                            key={item.q}
                            className="group rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] px-6 py-5 open:bg-card/80 transition-colors"
                        >
                            <summary className="cursor-pointer list-none">
                                <div className="flex items-start justify-between gap-6">
                                    <p className="text-base font-semibold text-foreground">
                                        {item.q}
                                    </p>
                                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border/60 text-muted-foreground group-open:text-foreground">
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

            {/* Final CTA */}
            <Section className="border-t border-border/40">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] px-6 py-10 sm:px-10">
                        <div className="absolute inset-0 bg-hero-gradient opacity-30" />
                        <div className="grain absolute inset-0 pointer-events-none" />
                        <div className="relative flex flex-col items-center text-center">
                            <p className="text-sm font-medium text-accent-strong">
                                Ready to make your site your best salesperson?
                            </p>
                            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
                                Get a clear plan + next steps in one reply.
                            </h2>
                            <p className="mt-3 max-w-2xl text-muted-foreground">
                                Tell me your market, what you sell, and what you want the site to accomplish. I&apos;ll respond within one business day.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Link href={contactHref} className="btn-primary inline-flex items-center justify-center gap-2">
                                    Send a message
                                    <IconArrowRight className="w-4 h-4" stroke={2} />
                                </Link>
                                <Link href="/work?industry=real-estate&source=lp-real-estate" className="btn-secondary inline-flex items-center justify-center gap-2">
                                    See real estate work
                                    <IconArrowRight className="w-4 h-4" stroke={2} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>
        </>
    );
}





