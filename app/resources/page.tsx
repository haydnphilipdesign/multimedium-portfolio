import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { IconChecklist, IconArrowRight } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Resources",
    description: "Practical resources for service businesses and transaction coordinators.",
    alternates: {
        canonical: "/resources",
    },
};

const resources = [
    {
        icon: IconChecklist,
        title: "TC Lead Intake Checklist",
        description: "A practical intake checklist to qualify leads and start every file clean.",
        href: "/resources/tc-intake-checklist",
    },
];

export default function ResourcesPage() {
    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <SectionHeading
                        title="Resources"
                        subtitle="Short, practical assets you can actually use."
                    />
                </AnimatedSection>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerDelay={0.08}>
                    {resources.map((item) => (
                        <StaggerItem key={item.href}>
                            <Link
                                href={item.href}
                                className="group block h-full rounded-2xl border border-border/50 bg-card p-7 transition-all duration-300 hover:border-glow/30 hover:shadow-lg hover:shadow-glow/5"
                            >
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/50 bg-muted/50 text-glow">
                                    <item.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <h2 className="mt-5 text-xl font-semibold text-foreground">
                                    {item.title}
                                </h2>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-glow transition-colors">
                                    View resource <IconArrowRight className="w-4 h-4" stroke={2} />
                                </div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>
        </>
    );
}

