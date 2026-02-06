import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
            "Optional add-ons if you want them: onboarding flows, intake checklists, and follow-up automation—without overbuilding.",
    },
];

const expectations = [
    { label: "Primary conversion", value: "Booked discovery calls" },
    { label: "Lead quality", value: "Fit-filtered inquiries" },
    { label: "Systems-ready", value: "Intake + follow-up automation" },
];

const automationBullets = [
    "Conditional intake (buyer/listing/dual, 1–2 buyers/sellers)",
    "Required-field enforcement (prevents half-filled submissions)",
    "Auto-formatted intake summary (email + optional PDF cover sheet)",
    "“Missing info” callouts so you catch it immediately",
    "Optional naming conventions + routing",
];

const automationPackages = [
    {
        name: "Automation Starter",
        price: "$350–$650",
        bullets: [
            "Conditional intake + required fields",
            "Clean formatted email summary",
            "Basic branding (logo/header)",
        ],
        bestFor: "Part-time or low-volume TCs",
    },
    {
        name: "Automation Pro",
        price: "$750–$1,500",
        bullets: [
            "Everything in Starter",
            "Branded PDF cover sheet output",
            "Missing-info summary / callouts",
        ],
        bestFor: "Steady volume, wants consistent file starts",
    },
    {
        name: "Ops Workflow",
        price: "$1,500–$3,500",
        bullets: [
            "Everything in Pro",
            "Integrations (Drive/Zapier/Make) + routing",
            "Folder/task workflow + utility intake PDF if needed",
        ],
        bestFor: "Busy solo TC or small team",
    },
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
        q: "Do I need Jotform?",
        a: "No. I can build this with the tools you already use (Google Forms, Jotform, etc.), or recommend the simplest option for your workflow.",
    },
    {
        q: "Are you selling software?",
        a: "No—this is a done-for-you setup service (plus optional support). You own the account/tools; I configure the workflow and templates.",
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
    const norma = getProjectBySlug("norma");
    const featured = [paRes, tagProject, utilitySheet, norma].filter(
        (project): project is Project => Boolean(project)
    );

    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] px-6 py-8 sm:px-8 sm:py-10">
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
                                    <Link
                                        href="/resources?source=tc-hero"
                                        className="btn-secondary inline-flex items-center gap-2"
                                    >
                                        Free templates <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                 </div>
                             </div>

                            <div className="lg:col-span-2">
                                <div className="rounded-2xl border border-border/65 bg-background/55 backdrop-blur-sm p-6">
                                    <p className="text-sm font-semibold text-foreground">Built for qualified bookings</p>
                                    <div className="mt-4 grid gap-3">
                                        {expectations.map((item) => (
                                            <div
                                                key={item.label}
                                                className="flex items-start justify-between gap-4 rounded-xl border border-border/65 bg-card/55 px-4 py-3"
                                            >
                                                <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                                                <p className="text-sm font-semibold text-foreground text-right">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Authority graphic */}
                                    <div className="mt-4 flex justify-center">
                                        <Image
                                            src="/images/graphics/tc-authority.jpg"
                                            alt="Authority and lead qualification"
                                            width={96}
                                            height={96}
                                            className="w-24 h-24 opacity-80"
                                        />
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
                            <div className="h-full rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/65 bg-muted/50 text-glow">
                                    <item.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <p className="mt-4 text-lg font-semibold text-foreground">{item.title}</p>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="rounded-[2rem] bg-muted/35">
                <AnimatedSection>
                    <SectionHeading
                        title="What I build for TCs"
                        subtitle="A clear offer, a page that converts, and a system that stays consistent as you grow."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
                    {included.map((item) => (
                        <StaggerItem key={item.title}>
                            <div className="h-full rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-7">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/65 bg-muted/50 text-glow">
                                    <item.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <AnimatedSection delay={0.08} direction="none">
                    <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-border/65 bg-card/82 p-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-muted-foreground">
                            Want intake + cover-sheet automation too? It’s an optional add-on.
                        </p>
                        <Link href="#automation" className="btn-secondary inline-flex items-center justify-center gap-2">
                            See automation options <IconArrowRight className="w-4 h-4" stroke={2} />
                        </Link>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <div className="grid gap-6 md:grid-cols-2">
                    <AnimatedSection>
                        <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-7">
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
                        <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-7">
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
                                    A few relevant builds that show the direction: authority, clarity, and conversion. Includes product work too (
                                    <Link href="/work/norma" className="text-foreground hover:text-glow transition-colors underline underline-offset-4">
                                        Norma
                                    </Link>
                                    —early access).
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

            <Section id="automation" className="rounded-[2rem] bg-muted/35">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted/50 text-muted-foreground border border-border/65">
                            Optional add-on
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                            Stop chasing missing info.
                        </h2>
                        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                            TCs waste time tracking down missing details. This add-on forces required fields, routes submissions,
                            and outputs a clean cover-sheet style summary (email + optional PDF) so every file starts organized.
                            It’s done-for-you setup in your tools—and you own the accounts.
                        </p>
                        <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                            {automationBullets.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimatedSection>

                <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3" staggerDelay={0.08}>
                    {automationPackages.map((tier) => (
                        <StaggerItem key={tier.name}>
                            <div className="h-full rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-7">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                                        <p className="mt-1 text-sm font-medium text-glow">{tier.price}</p>
                                    </div>
                                </div>
                                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                                    {tier.bullets.map((bullet) => (
                                        <li key={bullet} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-5 text-xs text-muted-foreground">
                                    <span className="font-semibold text-foreground">Best for:</span> {tier.bestFor}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <p className="mt-6 text-sm text-muted-foreground">
                    Team builds available for higher volume / broker ops.
                </p>

                <div className="mt-6 rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6">
                    <p className="text-sm font-semibold text-foreground">Not a fit</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Not a fit if you want a generic template or you’re not ready to respond to leads quickly.
                    </p>
                </div>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <AnimatedSection>
                    <SectionHeading
                        title="Free TC templates"
                        subtitle="Examples of templates and checklists I can auto-populate or structure around your intake (Jotform/Forms). Use them as-is, or steal the structure."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
                    <StaggerItem>
                        <div className="h-full overflow-hidden rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)]">
                            <div className="relative aspect-[16/10] bg-muted">
                                <Image
                                    src="/resources/tc-task-list.jpg"
                                    alt="TC Task List Sheet preview"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-70" />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground border border-border/65">
                                        Example (region-specific)
                                    </span>
                                </div>
                            </div>
                            <div className="p-7">
                                <h3 className="text-xl font-semibold text-foreground">TC Task List Sheet</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    A real task list built for the Poconos region—use it as a reference, then customize for your rules.
                                </p>
                                <div className="mt-5">
                                    <Link href="/resources/tc-task-list?source=tc-industry" className="btn-secondary inline-flex items-center gap-2">
                                        Get the PDF <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="h-full overflow-hidden rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)]">
                            <div className="relative aspect-[16/10] bg-muted">
                                <Image
                                    src="/resources/tc-cover-sheet.jpg"
                                    alt="TC Cover Sheet preview"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-70" />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground border border-border/65">
                                        Cover sheet
                                    </span>
                                </div>
                            </div>
                            <div className="p-7">
                                <h3 className="text-xl font-semibold text-foreground">TC Cover Sheet / Quick Ref</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    A clean file-start summary you can print, email, or attach—designed to fit most TC workflows.
                                </p>
                                <div className="mt-5">
                                    <Link href="/resources/tc-cover-sheet?source=tc-industry" className="btn-secondary inline-flex items-center gap-2">
                                        Get the PDF <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="h-full overflow-hidden rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)]">
                            <div className="relative aspect-[16/10] bg-muted">
                                <Image
                                    src="/resources/tc-intake-checklist.jpg"
                                    alt="TC Lead Intake Checklist preview"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-70" />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground border border-border/65">
                                        PDF template
                                    </span>
                                </div>
                            </div>
                            <div className="p-7">
                                <h3 className="text-xl font-semibold text-foreground">TC Lead Intake Checklist</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    A clean, printable lead intake checklist PDF—so you qualify faster and start every file clean.
                                </p>
                                <div className="mt-5">
                                    <Link href="/resources/tc-intake-checklist?source=tc-industry" className="btn-secondary inline-flex items-center gap-2">
                                        Get the PDF <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </Section>

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
                            <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-7">
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





