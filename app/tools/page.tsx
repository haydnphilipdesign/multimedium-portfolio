import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight, IconExternalLink, IconTool } from "@tabler/icons-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Section } from "@/components/sections/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getProjectBySlug, type Project } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getCollectionPageStructuredData,
} from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
    title: "Tools Built From Inside the Real Estate Industry",
    description:
        "UtilitySheet, Norma Intake, and Norma Closing Desk are tools built by Multimedium to solve real transaction coordinator workflow problems.",
    path: "/tools",
    keywords: [
        "transaction coordinator tools",
        "real estate intake tools",
        "TC workflow tools",
        "UtilitySheet",
        "Norma Intake",
    ],
});

const toolSlugs = ["utility-sheet", "norma-intake", "norma"];

export default function ToolsPage() {
    const tools = toolSlugs
        .map((slug) => getProjectBySlug(slug))
        .filter((project): project is Project => Boolean(project));

    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Tools", path: "/tools" },
        ]),
        getCollectionPageStructuredData({
            name: "Tools Built From Inside the Industry",
            description:
                "Internal tools by Multimedium that show practical understanding of transaction coordinator and real estate workflow problems.",
            path: "/tools",
        }),
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="max-w-4xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                            <IconTool className="h-4 w-4 text-primary" stroke={1.6} />
                            Built by Multimedium
                        </span>
                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                            Tools built from inside the industry
                        </h1>
                        <p className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
                            I do not just design TC websites. I build tools that solve the same workflow problems my clients deal with every day. That depth shows up in the websites I make.
                        </p>
                    </div>
                </AnimatedSection>
            </Section>

            <Section>
                <AnimatedSection>
                    <div className="mb-10 max-w-3xl">
                        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                            Practical proof, not primary portfolio
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            UtilitySheet, Norma Intake, and Norma Closing Desk are framed here as workflow experience: file starts, intake clarity, transaction organization, and fewer back-and-forth questions.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid gap-6 md:grid-cols-3">
                    {tools.map((tool, index) => (
                        <ProjectCard key={tool.slug} project={tool} index={index} />
                    ))}
                </div>
            </Section>

            <Section className="bg-white" size="full" padding="large">
                <AnimatedSection className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                            Why this matters
                        </p>
                        <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                            A TC website is not just pages. It is part of the workflow.
                        </h2>
                    </div>
                    <div className="rounded-xl border border-border/70 bg-card p-6 sm:p-8">
                        <p className="text-muted-foreground">
                            When I plan a website for a transaction coordinator, I am thinking about the same practical questions these tools answer: how an agent understands your services, what they need before starting a file, where they get stuck, and how the site can make the next step feel simple.
                        </p>
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <Link href="/work" className="btn-secondary">
                                View client work
                                <IconArrowRight className="h-4 w-4" stroke={2} />
                            </Link>
                            <Link href="/tc-packages" className="btn-primary">
                                See TC packages
                                <IconExternalLink className="h-4 w-4" stroke={2} />
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>
        </>
    );
}
