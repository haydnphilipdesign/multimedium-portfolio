import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/sections/Section";
import {
    AnimatedSection,
    StaggerContainer,
    StaggerItem,
} from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getProjectBySlug, type Project } from "@/content/projects";
import {
    IconArrowRight,
    IconShieldCheck,
    IconSparkles,
    IconTarget,
    IconBuildingSkyscraper,
    IconChecklist,
    IconBolt,
    IconFileText,
    IconCircleCheck,
    IconUsers,
    IconPalette,
    IconDeviceMobile,
    IconMessageDots,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "My TC Academy Students — Private Referral | Multimedium",
    description:
        "A private referral page for My TC Academy students. Web design built specifically for transaction coordinators — professional messaging, fast performance, and pages that turn visitors into real leads.",
    robots: {
        index: false,
        follow: false,
    },
    alternates: {
        canonical: "/mytcacademy",
    },
};

const whyWebsite = [
    {
        icon: IconShieldCheck,
        title: "Instant credibility",
        description:
            "Agents and clients check you out before they reach out. A polished site signals that you run a real operation — not a side hustle.",
    },
    {
        icon: IconMessageDots,
        title: "Explain your services clearly",
        description:
            "Most TC websites bury the offer. A clear, well-structured page tells prospects exactly what you do, who you serve, and why you're the right fit — before the first call.",
    },
    {
        icon: IconSparkles,
        title: "Stand out in a growing field",
        description:
            "More people are becoming TCs every year. A generic template or a basic Wix page won't differentiate you. Your website should reflect the same professionalism you bring to every transaction.",
    },
    {
        icon: IconBuildingSkyscraper,
        title: "Build a stronger foundation",
        description:
            "Your website is the hub for everything — referrals, testimonials, intake, and positioning. Getting it right early means you grow on solid ground instead of patching things together later.",
    },
];

const included = [
    {
        icon: IconTarget,
        title: "Positioning + messaging",
        description:
            "We define who you serve, what you offer, and why someone should choose you — written in language that resonates with agents and clients, not generic filler.",
    },
    {
        icon: IconPalette,
        title: "Custom design, not a template",
        description:
            "A professional, mobile-first design built around your brand — not a cookie-cutter theme with your logo pasted on top.",
    },
    {
        icon: IconChecklist,
        title: "Lead capture that qualifies",
        description:
            "Contact forms, intake flows, and CTAs designed to attract the right leads and filter out the ones that waste your time.",
    },
    {
        icon: IconDeviceMobile,
        title: "Fast, polished, and accessible",
        description:
            "Speed and mobile performance built in from the start — because most of your visitors are checking you out from their phones.",
    },
    {
        icon: IconFileText,
        title: "Copy + content guidance",
        description:
            "Messaging and page copy are part of the build. You won't be left staring at blank sections trying to figure out what to write.",
    },
    {
        icon: IconBolt,
        title: "Launch-ready and easy to maintain",
        description:
            "A clean, modern build that doesn't require a developer on retainer to update. You'll own the site and be able to grow with it.",
    },
];

const faqs = [
    {
        q: "How is this different from a template or DIY site?",
        a: "Templates give you a layout. This gives you a strategy. We start with your positioning — who you serve, what you offer, and why you're the right choice — and build a site around that. The result looks, reads, and converts better because it was built for your specific business, not for a generic audience.",
    },
    {
        q: "I'm just starting out. Is it too early to invest in a website?",
        a: "It's actually the best time. You're building your reputation right now — and the agents, brokers, and clients you want to work with are going to look you up. A professional site gives you credibility from day one and a foundation you can grow with, instead of something you'll need to replace in six months.",
    },
    {
        q: "Do you write the copy, or do I need to provide it?",
        a: "Copy and messaging are included. We'll work together to define your offer, services, and positioning — then I'll write the page content so it sounds like you, speaks to the right audience, and drives action. You won't be staring at blank pages.",
    },
    {
        q: "What platform do you build on?",
        a: "It depends on your needs and goals. I work with modern frameworks and platforms and will recommend the best option for your situation — whether that's a custom build, a headless CMS, or a managed platform. The goal is a site that's fast, clean, and easy for you to maintain.",
    },
    {
        q: "How long does a project typically take?",
        a: "Most TC website projects take 4–6 weeks from kickoff to launch. Timeline depends on scope, but I'll give you a clear estimate after we talk through your goals.",
    },
    {
        q: "What if I already have a website and just want it improved?",
        a: "That works too. Whether it's a full rebuild or a focused refresh — better messaging, stronger design, faster performance — we can scope the project to match what you actually need.",
    },
];

const contactHref = "/contact?source=mytcacademy&projectType=website";

export default function MyTCAcademyPage() {
    const tagProject = getProjectBySlug("tag-landing-page");
    const paRes = getProjectBySlug("pa-real-estate-support");
    const utilitySheet = getProjectBySlug("utility-sheet");
    const norma = getProjectBySlug("norma");
    const featured = [paRes, tagProject, utilitySheet, norma].filter(
        (project): project is Project => Boolean(project)
    );

    return (
        <>
            {/* Hero */}
            <div className="relative overflow-hidden border-b border-border/40">

                <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                    <AnimatedSection>
                        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-start">
                            <div className="max-w-2xl">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground border border-border/60 mb-6">
                                    <IconUsers className="w-4 h-4 text-primary" stroke={1.5} />
                                    Private referral — My TC Academy
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                                    Your TC business deserves a website that{" "}
                                    <span className="text-gradient">
                                        matches your ambition.
                                    </span>
                                </h1>
                                <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                                    Jennifer connected you with this page because she trusts the work.
                                    I design websites specifically for transaction coordinators, real
                                    estate professionals, and service-based businesses — built to win
                                    trust, explain your services clearly, and turn visitors into real
                                    leads.
                                </p>

                                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                    <Link
                                        href={contactHref}
                                        className="btn-primary inline-flex items-center justify-center gap-2"
                                    >
                                        Start a conversation
                                        <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                    <Link
                                        href="#why"
                                        className="btn-secondary inline-flex items-center justify-center gap-2"
                                    >
                                        See why it matters
                                    </Link>
                                </div>

                                <p className="mt-4 text-sm text-muted-foreground">
                                    Response within 1 business day. No pressure, no obligation.
                                </p>
                            </div>

                            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-7">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                                <div className="relative space-y-6">
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">
                                            For My TC Academy students
                                        </p>
                                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                            You&apos;ve already made a serious investment in building your TC
                                            career. This is a private resource — not a public offer — for
                                            students who want a web presence that reflects the level of
                                            professionalism they&apos;re building toward.
                                        </p>
                                    </div>

                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        {[
                                            "Niche expertise in the TC industry",
                                            "Strategy, messaging, design, and code — one point of contact",
                                            "Positioning that attracts better-fit leads",
                                            "Sites built to grow with your business",
                                            "Preferred perk for MTC Academy referrals",
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <IconCircleCheck
                                                    className="mt-0.5 h-4 w-4 text-primary shrink-0"
                                                    stroke={1.6}
                                                />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="rounded-xl border border-border/60 bg-muted/25 p-4">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                            Why Jennifer recommends this
                                        </p>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            Because your website is often the first impression an agent
                                            or client gets — and it should look as professional as the
                                            service you provide.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </Section>

                <Section className="pt-10 pb-14 md:pb-20" padding="none">
                    <StaggerContainer className="grid gap-4 sm:grid-cols-3" staggerDelay={0.06}>
                        {[
                            {
                                value: "TC-focused",
                                label: "niche expertise",
                                detail:
                                    "Not a generalist — I understand TC workflows, positioning, and the real estate ops world.",
                            },
                            {
                                value: "4–6 weeks",
                                label: "typical timeline",
                                detail:
                                    "Plan, design, build, launch — with clear milestones so you always know where things stand.",
                            },
                            {
                                value: "Full-service",
                                label: "one partner",
                                detail:
                                    "Strategy, copy, design, and development handled by one person who knows your industry.",
                            },
                        ].map((item) => (
                            <StaggerItem key={item.label}>
                                <div className="rounded-2xl border border-border/60 bg-card/82 backdrop-blur-sm px-6 py-5">
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
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Section>
            </div>

            {/* Why your website matters */}
            <Section id="why" className="relative">
                <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30">
                            Why it matters
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                            A strong website isn&apos;t a luxury — it&apos;s{" "}
                            <span className="text-gradient">your foundation.</span>
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            You&apos;re investing in your skills and your business through My TC Academy.
                            Your online presence should reflect that same level of seriousness.
                            Here&apos;s what a well-built website does for a transaction coordinator.
                        </p>
                    </div>
                </AnimatedSection>

                <StaggerContainer
                    className="mt-10 grid gap-6 md:grid-cols-2"
                    staggerDelay={0.08}
                >
                    {whyWebsite.map((item) => (
                        <StaggerItem key={item.title}>
                            <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-7">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                    <item.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-foreground">
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

            {/* What's included */}
            <div className="relative rounded-2xl bg-muted/35">
                <Section>
                    <AnimatedSection>
                        <SectionHeading
                            title="What you get"
                            subtitle="Every TC website project includes strategy, design, and development — built around your specific business and the clients you want to attract."
                        />
                    </AnimatedSection>

                    <StaggerContainer
                        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                        staggerDelay={0.08}
                    >
                        {included.map((item) => (
                            <StaggerItem key={item.title}>
                                <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-7">
                                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                        <item.icon className="w-5 h-5" stroke={1.5} />
                                    </div>
                                    <h3 className="mt-5 text-lg font-semibold text-foreground">
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
            </div>

            {/* Referral perk */}
            <Section>
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] px-6 py-10 sm:px-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
                        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                            <div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30">
                                    My TC Academy referral perk
                                </span>
                                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
                                    A preferred perk — not a coupon.
                                </h2>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    This isn&apos;t a discount page. It&apos;s a private referral from Jennifer
                                    because she wants her students to have access to a designer who
                                    actually understands the TC space.
                                </p>
                                <p className="mt-3 text-muted-foreground leading-relaxed">
                                    As a My TC Academy student, you&apos;ll receive a small preferred
                                    perk on your project — the details depend on scope and will be
                                    discussed during our initial conversation. Think of it as Jennifer
                                    making sure you&apos;re taken care of, not as a sale.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-border/60 bg-background/55 backdrop-blur-sm p-6">
                                <p className="text-sm font-semibold text-foreground">
                                    How it works
                                </p>
                                <div className="mt-4 space-y-4">
                                    {[
                                        {
                                            step: "1",
                                            text: "Reach out through this page and mention My TC Academy",
                                        },
                                        {
                                            step: "2",
                                            text: "We'll have a quick conversation about your business and goals",
                                        },
                                        {
                                            step: "3",
                                            text: "I'll send a clear proposal with scope, timeline, and your referral perk included",
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.step}
                                            className="flex items-start gap-4"
                                        >
                                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-border/60 bg-muted/50 text-xs font-semibold text-foreground shrink-0">
                                                {item.step}
                                            </span>
                                            <p className="text-sm text-muted-foreground">
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            {/* Work */}
            {featured.length > 0 && (
                <Section className="relative overflow-hidden">
                    <div className="pointer-events-none absolute -top-28 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                    <AnimatedSection>
                        <div className="max-w-3xl">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30">
                                Relevant work
                            </span>
                            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
                                Real projects in the TC + real estate space
                            </h2>
                            <p className="mt-3 text-muted-foreground">
                                A few builds that show the level of polish and industry understanding
                                you can expect. These aren&apos;t mockups — they&apos;re real projects
                                for real businesses.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2">
                        {featured.map((project, index) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                    <AnimatedSection className="mt-10">
                        <Link
                            href="/work?industry=tc&source=mytcacademy"
                            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                        >
                            Browse all TC case studies
                            <IconArrowRight
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                stroke={2}
                            />
                        </Link>
                    </AnimatedSection>
                </Section>
            )}

            {/* FAQ */}
            <Section className="border-t border-border/40">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                            Common questions
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            A few things MTC Academy students usually want to know before getting
                            started.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="mt-10 grid gap-4 md:max-w-4xl">
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

            {/* Final CTA */}
            <Section className="border-t border-border/40">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] px-6 py-10 sm:px-10">
                        <div className="relative flex flex-col items-center text-center">
                            <p className="text-sm font-medium text-primary">
                                My TC Academy referral
                            </p>
                            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
                                Ready to build a website that works as hard as you do?
                            </h2>
                            <p className="mt-3 max-w-2xl text-muted-foreground">
                                Tell me about your TC business, where you are in your journey, and
                                what you want your website to accomplish. Mention that you&apos;re a My
                                TC Academy student, and I&apos;ll respond within one business day with
                                a clear plan and next steps.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Link
                                    href={contactHref}
                                    className="btn-primary inline-flex items-center justify-center gap-2"
                                >
                                    Start a conversation
                                    <IconArrowRight className="w-4 h-4" stroke={2} />
                                </Link>
                                <Link
                                    href="/work?industry=tc&source=mytcacademy"
                                    className="btn-secondary inline-flex items-center justify-center gap-2"
                                >
                                    See TC work
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
