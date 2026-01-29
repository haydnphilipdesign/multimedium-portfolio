import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getProjectBySlug, type Project } from "@/content/projects";
import {
    IconChecklist,
    IconBolt,
    IconCalendarEvent,
    IconClock,
    IconFileText,
    IconShieldCheck,
    IconArrowRight,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Websites for Transaction Coordinators",
    description:
        "Conversion-first web design for real estate transaction coordinators: authority-first messaging, fast pages, and lead capture that filters for fit and drives bookings.",
    alternates: {
        canonical: "/industries/transaction-coordinators",
    },
};

const outcomes = [
    {
        icon: IconCalendarEvent,
        title: "More qualified calls",
        description:
            "A page that makes your offer obvious and pushes one primary action: book a call.",
    },
    {
        icon: IconShieldCheck,
        title: "Authority that feels real",
        description:
            "Trust signals, clear process, and firm positioning so you stop attracting poor-fit leads.",
    },
    {
        icon: IconBolt,
        title: "Fast on mobile",
        description:
            "Speed + accessibility built in—because “professional” starts with performance.",
    },
];

const included = [
    {
        icon: IconFileText,
        title: "Messaging + page plan",
        description:
            "We define the offer, who it’s for (and who it’s not), and the pages needed to convert.",
    },
    {
        icon: IconChecklist,
        title: "Lead capture that filters",
        description:
            "Forms, questions, and routing that turn “inquiries” into qualified conversations.",
    },
    {
        icon: IconClock,
        title: "Simple systems (optional)",
        description:
            "If you want it: onboarding flows, intake checklists, and follow-up automation—without overbuilding.",
    },
];

const expectations = [
    { label: "Primary conversion", value: "Booked discovery calls" },
    { label: "Lead quality", value: "Fit-filtered inquiries" },
    { label: "Systems-ready", value: "Intake + follow-up automation" },
];

const fitFor = [
    "Established transaction coordinators and TC teams",
    "TCs who want fewer low-fit leads and more qualified calls",
    "Operators who want a premium presence that feels serious and systems-driven",
];

const notFor = [
    "Brand-new TCs looking for quick volume without positioning",
    "Anyone who wants a generic template with no qualification layer",
    "Businesses that are not ready to respond to leads quickly",
];

const faqs = [
    {
        q: "Do you write the copy?",
        a: "Yes. Positioning and copy are part of the build. We make the offer obvious, add proof, and write the sections that prevent low-fit leads from booking.",
    },
    {
        q: "Can you add a lead qualification flow?",
        a: "Yes. We can build forms that route, tag, and filter leads so you spend time on the right calls. If you already use a CRM, we can integrate with it.",
    },
    {
        q: "What if I am a solo TC?",
        a: "That can still be a fit. The key is positioning: clear scope, clear process, and proof that you run a real operation.",
    },
    {
        q: "How long does it take?",
        a: "Once we have your offer, proof assets, and preferred lead flow, builds can move quickly. I will give you a concrete timeline after a short intake.",
    },
];

export default function TransactionCoordinatorsPage() {
    const tagProject = getProjectBySlug("tag-landing-page");
    const paRes = getProjectBySlug("pa-real-estate-support");
    const utilitySheet = getProjectBySlug("utility-sheet");
    const featured = [paRes, tagProject, utilitySheet].filter(
        (project): project is Project => Boolean(project)
    );

    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card px-6 py-8 sm:px-8 sm:py-10">
                        <div className="absolute inset-0 bg-hero-gradient opacity-25" />
                        <div className="grain absolute inset-0 pointer-events-none" />

                        <div className="relative grid gap-8 lg:grid-cols-5 lg:items-end">
                            <div className="lg:col-span-3 space-y-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-glow border border-glow/20">
                                    Real Estate Ops
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                                    Websites for transaction coordinators
                                    <br />
                                    <span className="text-gradient">that make booking feel obvious.</span>
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-2xl">
                                    Authority-first messaging, premium design, and a conversion path that filters out poor-fit leads - so you spend less time &quot;selling&quot; and more time coordinating.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link
                                        href="/contact?source=tc-hero"
                                        className="btn-primary"
                                    >
                                        Talk about your project
                                    </Link>
                                    <Link
                                        href="/work?industry=tc"
                                        className="btn-secondary inline-flex items-center gap-2"
                                    >
                                        See TC work <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm p-6">
                                    <p className="text-sm font-semibold text-foreground">Built for qualified bookings</p>
                                    <div className="mt-4 grid gap-3">
                                        {expectations.map((item) => (
                                            <div
                                                key={item.label}
                                                className="flex items-start justify-between gap-4 rounded-xl border border-border/50 bg-card/40 px-4 py-3"
                                            >
                                                <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                                                <p className="text-sm font-semibold text-foreground text-right">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <StaggerContainer className="grid gap-4 md:grid-cols-3" staggerDelay={0.08}>
                    {outcomes.map((item) => (
                        <StaggerItem key={item.title}>
                            <div className="h-full rounded-2xl border border-border/50 bg-card p-6">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/50 bg-muted/50 text-glow">
                                    <item.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <p className="mt-4 text-lg font-semibold text-foreground">{item.title}</p>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="bg-muted/30">
                <AnimatedSection>
                    <SectionHeading
                        title="What I build for TCs"
                        subtitle="A clear offer, a page that converts, and a system that stays consistent as you grow."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
                    {included.map((item) => (
                        <StaggerItem key={item.title}>
                            <div className="h-full rounded-2xl border border-border/50 bg-card p-7">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/50 bg-muted/50 text-glow">
                                    <item.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <div className="grid gap-6 md:grid-cols-2">
                    <AnimatedSection>
                        <div className="rounded-2xl border border-border/50 bg-card p-7">
                            <h3 className="text-xl font-semibold text-foreground">Great fit for</h3>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                {fitFor.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.06}>
                        <div className="rounded-2xl border border-border/50 bg-card p-7">
                            <h3 className="text-xl font-semibold text-foreground">Not a fit</h3>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                {notFor.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            {featured.length > 0 ? (
                <Section>
                    <AnimatedSection>
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                                    Real estate work
                                </h2>
                                <p className="mt-2 text-muted-foreground">
                                    A couple relevant builds that show the direction: authority, clarity, and conversion.
                                </p>
                            </div>
                            <Link
                                href="/work?industry=tc"
                                className="inline-flex items-center gap-2 text-foreground hover:text-glow transition-colors group"
                            >
                                <span className="font-medium">Browse all TC case studies</span>
                                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                            </Link>
                        </div>
                    </AnimatedSection>

                    <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${featured.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                        {featured.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            ) : null}

            <Section className="pt-10 md:pt-14" padding="none">
                <AnimatedSection>
                    <SectionHeading
                        title="FAQ"
                        subtitle="A few common questions TCs ask before a build."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-4 md:grid-cols-2" staggerDelay={0.08}>
                    {faqs.map((item) => (
                        <StaggerItem key={item.q}>
                            <div className="rounded-2xl border border-border/50 bg-card p-7">
                                <h3 className="text-lg font-semibold text-foreground">{item.q}</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Want a TC site that attracts better-fit leads?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Send a link to your current site (if you have one) and tell me what you want the page to do. I’ll reply within one business day with next steps.
                    </p>
                    <Link href="/contact?source=tc-cta" className="btn-primary">
                        Talk about your project
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}
