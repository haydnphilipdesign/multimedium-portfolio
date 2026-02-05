import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { IconArrowRight, IconFileText } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Free Resources",
    description:
        "Free templates and resources for transaction coordinators—downloadable PDFs and workflow examples.",
    alternates: {
        canonical: "/resources",
    },
};

type Resource = {
    title: string;
    description: string;
    href: string;
    image?: string;
    badge: string;
    ctaText: string;
    external?: boolean;
    icon?: ComponentType<{ className?: string; stroke?: number }>;
};

const resources: Resource[] = [
    {
        title: "TC Task List Sheet (example)",
        description:
            "A real transaction task list built for the Poconos region—use it as a reference or starting point for your own workflow.",
        href: "/resources/tc-task-list",
        image: "/resources/tc-task-list.jpg",
        badge: "PDF template",
        ctaText: "Get the PDF",
    },
    {
        title: "TC Cover Sheet / Quick Reference",
        description:
            "A clean cover-sheet style summary you can drop into a file—designed to be useful for most TC workflows.",
        href: "/resources/tc-cover-sheet",
        image: "/resources/tc-cover-sheet.jpg",
        badge: "PDF template",
        ctaText: "Get the PDF",
    },
    {
        title: "TC Lead Intake Checklist",
        description:
            "A clean, printable lead intake checklist PDF—so you qualify faster and start every file clean.",
        href: "/resources/tc-intake-checklist",
        image: "/resources/tc-intake-checklist.jpg",
        badge: "PDF template",
        ctaText: "Get the PDF",
    },
];

const tools: Resource[] = [
    {
        title: "UtilitySheet",
        description:
            "A guided seller form that generates a clean, shareable utility info sheet. Free plan includes 3 submissions/month; Pro is $9/month.",
        href: "https://utilitysheet.com",
        image: "/images/projects/utilitysheet/utilitysheet-thumb.png",
        badge: "Tool (free + pro)",
        ctaText: "Try UtilitySheet",
        external: true,
    },
    {
        title: "NormaTC",
        description:
            "Early-access TC “Closing Desk” software built around Outlook/Microsoft 365 workflows, dependencies, and deadline signal—join the waitlist.",
        href: "/contact?source=norma-waitlist",
        image: "/images/projects/norma/norma-thumb.png",
        badge: "Tool (early access)",
        ctaText: "Join the waitlist",
    },
];

export default function ResourcesPage() {
    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card px-6 py-8 sm:px-8 sm:py-10">
                        <div className="absolute inset-0 bg-hero-gradient opacity-25" />
                        <div className="grain absolute inset-0 pointer-events-none" />

                        <div className="relative max-w-3xl space-y-4">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-glow border border-glow/20">
                                <IconFileText className="w-4 h-4" stroke={1.5} />
                                Resources
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                                Free TC templates
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Downloadable PDFs you can use immediately—plus examples of the kind of templates I can auto-populate from an intake.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <AnimatedSection>
                    <SectionHeading
                        title="Downloads"
                        subtitle="Grab a template, then steal the structure for your own workflow."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
                    {resources.map((res) => (
                        <StaggerItem key={res.href}>
                            <div className="h-full overflow-hidden rounded-2xl border border-border/50 bg-card">
                                <div className="relative aspect-[16/10] bg-muted">
                                    {res.image ? (
                                        <Image
                                            src={res.image}
                                            alt={res.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-hero-gradient opacity-60" />
                                            <div className="grain absolute inset-0 pointer-events-none" />
                                            <div className="relative h-full w-full grid place-items-center">
                                                {res.icon ? (
                                                    <res.icon className="h-12 w-12 text-glow" stroke={1.5} />
                                                ) : null}
                                            </div>
                                        </>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-70" />
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/70 backdrop-blur-sm text-foreground border border-border/50">
                                            {res.badge}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-7">
                                    <h2 className="text-xl font-semibold text-foreground">{res.title}</h2>
                                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                        {res.description}
                                    </p>
                                    <div className="mt-5">
                                        <Link href={res.href} className="btn-secondary inline-flex items-center gap-2">
                                            {res.ctaText} <IconArrowRight className="w-4 h-4" stroke={2} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <div className="mt-10 rounded-2xl border border-border/50 bg-card p-7">
                    <p className="text-sm text-muted-foreground">
                        Want these auto-populated from your intake (Jotform/Forms) with clean cover-sheet output? See the optional automation add-on on the TC page.
                    </p>
                    <div className="mt-4">
                        <Link
                            href="/industries/transaction-coordinators#automation"
                            className="btn-secondary inline-flex items-center gap-2"
                        >
                            See automation options <IconArrowRight className="w-4 h-4" stroke={2} />
                        </Link>
                    </div>
                </div>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <AnimatedSection>
                    <SectionHeading
                        title="Tools you can use"
                        subtitle="A couple TC workflow tools I’ve built—use them as-is, or as inspiration for something tailored to your process."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerDelay={0.08}>
                    {tools.map((res) => (
                        <StaggerItem key={res.href}>
                            <div className="h-full overflow-hidden rounded-2xl border border-border/50 bg-card">
                                <div className="relative aspect-[16/10] bg-muted">
                                    {res.image ? (
                                        <Image
                                            src={res.image}
                                            alt={res.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-hero-gradient opacity-60" />
                                            <div className="grain absolute inset-0 pointer-events-none" />
                                            <div className="relative h-full w-full grid place-items-center">
                                                {res.icon ? (
                                                    <res.icon className="h-12 w-12 text-glow" stroke={1.5} />
                                                ) : null}
                                            </div>
                                        </>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-70" />
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/70 backdrop-blur-sm text-foreground border border-border/50">
                                            {res.badge}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-7">
                                    <h2 className="text-xl font-semibold text-foreground">{res.title}</h2>
                                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                        {res.description}
                                    </p>
                                    <div className="mt-5">
                                        <Link
                                            href={res.href}
                                            className="btn-secondary inline-flex items-center gap-2"
                                            target={res.external ? "_blank" : undefined}
                                            rel={res.external ? "noopener noreferrer" : undefined}
                                        >
                                            {res.ctaText} <IconArrowRight className="w-4 h-4" stroke={2} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>
        </>
    );
}
