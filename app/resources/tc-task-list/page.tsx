import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/sections/Section";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getCreativeWorkStructuredData,
} from "@/lib/structuredData";
import { requestTcTaskList } from "./actions";
import { IconArrowRight, IconDownload, IconFileText } from "@tabler/icons-react";

export const metadata: Metadata = createPageMetadata({
    title: "TC Task List Sheet Example",
    description:
        "Free downloadable transaction coordinator task list sheet based on a Poconos workflow example that you can customize for your own process.",
    path: "/resources/tc-task-list",
    keywords: ["transaction coordinator task list", "tc checklist pdf", "transaction coordinator workflow template"],
});

interface PageProps {
    searchParams?: Promise<{
        sent?: string;
        error?: string;
        source?: string;
    }>;
}

export default async function TcTaskListResourcePage({ searchParams }: PageProps) {
    const params = (await searchParams) ?? {};
    const sent = params.sent === "1";
    const error = params.error === "1";
    const source = params.source ?? "";
    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "TC Task List Sheet Example", path: "/resources/tc-task-list" },
        ]),
        getCreativeWorkStructuredData({
            name: "TC Task List Sheet Example",
            description:
                "Free downloadable transaction coordinator task list sheet based on a Poconos workflow example.",
            path: "/resources/tc-task-list",
            image: "/resources/tc-task-list.jpg",
            about: ["Transaction coordinators", "Workflow templates"],
        }),
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative max-w-3xl space-y-6 overflow-hidden rounded-2xl border border-border/60 bg-card px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10">
                        <div className="relative space-y-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30">
                            <IconFileText className="w-4 h-4" stroke={1.5} />
                            Free resource
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            TC Task List Sheet{" "}
                            <span className="text-muted-foreground font-normal">(example)</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            This is a real task list built for the Poconos region (where my mom has been a TC since 2013).
                            Use it as a reference, then adapt it to your state/brokerage rules.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="/resources/tc-task-list.pdf"
                                className="btn-primary inline-flex items-center justify-center gap-2"
                                download
                            >
                                Download PDF <IconDownload className="w-4 h-4" stroke={2} />
                            </a>
                            <Link
                                href="/industries/transaction-coordinators#automation"
                                className="btn-secondary inline-flex items-center justify-center gap-2"
                            >
                                See automation options <IconArrowRight className="w-4 h-4" stroke={2} />
                            </Link>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            You can use this as-is, adapt the structure, or later turn it into an automated intake output.
                        </p>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <div className="grid gap-6 md:grid-cols-5">
                    <AnimatedSection className="md:col-span-3">
                        <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] overflow-hidden">
                            <div className="relative aspect-[16/10] bg-muted">
                                <Image
                                    src="/resources/tc-task-list.jpg"
                                    alt="TC Task List Sheet preview"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 56vw, 680px"
                                    quality={68}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                            </div>
                            <div className="p-7">
                                <h2 className="text-xl font-semibold text-foreground">What you’re getting</h2>
                                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                        A real TC task list sheet (example) you can adapt
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                        A structure you can copy into your own checklist/process doc
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                        A preview of what “intake → PDF output” can look like
                                    </li>
                                </ul>
                                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                    <a
                                        href="/resources/tc-task-list.pdf"
                                        className="btn-secondary inline-flex items-center justify-center gap-2"
                                        download
                                    >
                                        Download PDF <IconDownload className="w-4 h-4" stroke={2} />
                                    </a>
                                    <Link
                                        href="/contact?source=tc-task-list"
                                        className="btn-primary inline-flex items-center justify-center"
                                    >
                                        Need a tailored version?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="md:col-span-2" delay={0.06}>
                        <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-7">
                            <h2 className="text-xl font-semibold text-foreground">
                                Email me the PDF
                            </h2>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                I’ll send the download link. Prefer not to share your email? Use the download button above.
                            </p>

                            {sent ? (
                                <div className="mt-5 rounded-xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-foreground">
                                    Check your inbox, the task list is on its way.
                                </div>
                            ) : null}

                            {error ? (
                                <div className="mt-5 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-foreground">
                                    Please enter a valid name and email.
                                </div>
                            ) : null}

                            <form action={requestTcTaskList} className="mt-5 space-y-4">
                                <input type="hidden" name="source" value={source} />
                                <div className="hidden">
                                    <label htmlFor="website">Website</label>
                                    <input id="website" name="website" autoComplete="off" tabIndex={-1} />
                                </div>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        maxLength={80}
                                        className="form-control"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        maxLength={254}
                                        className="form-control"
                                        placeholder="you@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                                        Company <span className="text-muted-foreground font-normal">(optional)</span>
                                    </label>
                                    <input
                                        id="company"
                                        name="company"
                                        maxLength={120}
                                        className="form-control"
                                        placeholder="Business name"
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full">
                                    Email me the download link
                                </button>
                                <p className="text-xs text-muted-foreground">
                                    One email. No spam.
                                </p>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Need a website that matches your professionalism?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        I build websites specifically for transaction coordinators — with intake forms, clear service pages, and messaging that makes agents want to work with you. Three packages starting at $750.
                    </p>
                    <Link href="/tc-packages?source=tc-task-list" className="btn-primary">
                        See TC website packages
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}




