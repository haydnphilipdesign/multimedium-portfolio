import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight, IconExternalLink } from "@tabler/icons-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Section } from "@/components/sections/Section";
import { MonoLabel, SectionOpener } from "@/components/sections/Editorial";
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
            <Section className="pt-32 sm:pt-36 md:pt-44" padding="none">
                <AnimatedSection>
                    <MonoLabel className="mb-6">Built by Multimedium</MonoLabel>
                    <h1 className="max-w-4xl font-display text-5xl text-foreground sm:text-6xl md:text-7xl display-balance">
                        Tools built from inside the industry
                    </h1>
                    <p className="mt-7 max-w-3xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                        I don&apos;t just design TC websites. I build tools that solve the same workflow
                        problems my clients deal with every day. That depth shows up in the websites I make.
                    </p>
                </AnimatedSection>
            </Section>

            <Section>
                <AnimatedSection>
                    <SectionOpener
                        eyebrow="Domain depth"
                        eyebrowIndex="01"
                        title="Practical proof, not primary portfolio"
                        lead="UtilitySheet, Norma Intake, and Norma Closing Desk are framed here as workflow experience: file starts, intake clarity, transaction organization, and fewer back-and-forth questions."
                    />
                </AnimatedSection>

                <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-3">
                    {tools.map((tool, index) => (
                        <ProjectCard key={tool.slug} project={tool} index={index} />
                    ))}
                </div>
            </Section>

            {/* Why this matters — dark statement */}
            <section className="bg-ink text-ink-foreground">
                <AnimatedSection className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-24 lg:px-8">
                    <div>
                        <p className="mono-label !text-flood mb-5">Why this matters</p>
                        <h2 className="font-display text-3xl leading-tight text-ink-foreground md:text-[2.7rem] md:leading-[1.12]">
                            A TC website is not just pages. It is part of the workflow.
                        </h2>
                    </div>
                    <div className="rounded-2xl border border-ink-foreground/15 bg-ink-foreground/[0.04] p-7 sm:p-8">
                        <p className="text-lg leading-relaxed text-ink-foreground/80">
                            When I plan a website for a transaction coordinator, I&apos;m thinking about the same
                            practical questions these tools answer: how an agent understands your services, what they
                            need before starting a file, where they get stuck, and how the site can make the next step
                            feel simple.
                        </p>
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <Link href="/tc-packages" className="btn btn-on-ink btn-primary group">
                                See TC packages
                                <IconExternalLink className="h-4 w-4" stroke={2} />
                            </Link>
                            <Link href="/work" className="btn btn-on-ink btn-secondary group">
                                View client work
                                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </section>
        </>
    );
}
