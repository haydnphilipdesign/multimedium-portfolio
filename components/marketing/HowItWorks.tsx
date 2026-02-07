"use client";

import Link from "next/link";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { SectionHeading } from "@/components/sections/Section";
import { IconArrowRight } from "@tabler/icons-react";

const steps = [
    {
        title: "Quick kickoff",
        description: "A short kickoff to define your audience, conversion goal, scope, and timeline.",
    },
    {
        title: "Page plan + messaging",
        description: "We map the page flow, core message, and CTA structure so every section has a clear job.",
    },
    {
        title: "Design + build",
        description: "I design and build in one loop so reviews stay simple and momentum stays steady.",
    },
    {
        title: "Launch + next steps",
        description: "We launch, verify essentials, and set next-step priorities for continued improvement.",
    },
];

export function HowItWorks({ contactSource = "how-it-works" }: { contactSource?: string }) {
    return (
        <div>
            <AnimatedSection>
                <SectionHeading
                    title="How it works"
                    subtitle="A straightforward process with clear checkpoints—so you always know what’s happening and what comes next."
                    align="center"
                />
            </AnimatedSection>

            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
                {steps.map((step, index) => (
                    <StaggerItem key={step.title}>
                        <div className="h-full rounded-2xl border border-border/65 bg-card/88 px-6 py-6 shadow-[var(--shadow-soft)]">
                            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                                Step {index + 1}
                            </p>
                            <p className="text-lg font-semibold text-foreground">{step.title}</p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>

            <AnimatedSection className="mt-10 text-center">
                <Link
                    href={`/contact?source=${encodeURIComponent(contactSource)}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-glow transition-colors group"
                >
                    Talk about your project
                    <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                </Link>
            </AnimatedSection>
        </div>
    );
}
