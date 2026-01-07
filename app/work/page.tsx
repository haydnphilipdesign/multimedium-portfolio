import { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/sections/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/content/projects";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

export const metadata: Metadata = {
    title: "Work",
    description:
        "A collection of recent builds—each one designed to earn trust, communicate value, and make contacting you feel like the obvious next step.",
};

export default function WorkPage() {
    return (
        <>
            {/* Hero Section */}
            <Section className="pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Selected <span className="text-gradient">Work</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            A few recent builds—each one designed to earn trust, communicate value, and make contacting you feel like the obvious next step.
                        </p>
                    </div>
                </AnimatedSection>
            </Section>

            {/* Projects Grid */}
            <Section>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} index={index} />
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Have a project in mind?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        I&apos;m always open to discussing new projects and creative ideas.
                        Let&apos;s create something great together.
                    </p>
                    <Link href="/contact" className="btn-primary">
                        Start a Project
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}
