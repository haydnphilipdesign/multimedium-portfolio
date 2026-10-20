import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageIntro } from "@/components/marketing/Studio";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getCollectionPageStructuredData,
} from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
    title: "Free Transaction Coordinator Resources",
    description:
        "Free transaction coordinator templates, PDFs, and workflow resources including intake checklists, cover sheets, and task-list examples.",
    path: "/resources",
    keywords: [
        "transaction coordinator resources",
        "transaction coordinator templates",
        "tc intake checklist pdf",
        "tc cover sheet template",
    ],
});

type Resource = {
    title: string;
    description: string;
    href: string;
    image?: string;
    badge: string;
    ctaText: string;
};

const resources: Resource[] = [
    {
        title: "TC Task List Sheet (example)",
        description:
            "A real transaction task list built for the Poconos region—use it as a reference or starting point for your own workflow.",
        href: "/resources/tc-task-list",
        image: "/resources/tc-task-list.webp",
        badge: "PDF template",
        ctaText: "Get the PDF",
    },
    {
        title: "TC Cover Sheet / Quick Reference",
        description:
            "A clean cover-sheet style summary you can drop into a file—designed to be useful for most TC workflows.",
        href: "/resources/tc-cover-sheet",
        image: "/resources/tc-cover-sheet.webp",
        badge: "PDF template",
        ctaText: "Get the PDF",
    },
    {
        title: "TC Lead Intake Checklist",
        description:
            "A clean, printable lead intake checklist PDF—so you qualify faster and start every file clean.",
        href: "/resources/tc-intake-checklist",
        image: "/resources/tc-intake-checklist.webp",
        badge: "PDF template",
        ctaText: "Get the PDF",
    },
    {
        title: "What Every TC Website Needs",
        description:
            "9 must-haves and 10 common mistakes for TC websites, with the reasoning behind each one.",
        href: "/resources/what-every-tc-website-needs",
        badge: "Guide",
        ctaText: "Read the guide",
    },
];

export default function ResourcesPage() {
    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
        ]),
        getCollectionPageStructuredData({
            name: "Transaction Coordinator Resources",
            description:
                "Free transaction coordinator templates, PDFs, checklists, and workflow resources from Multimedium.",
            path: "/resources",
        }),
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            <PageIntro
                eyebrow="Free TC resources"
                title="Free transaction coordinator templates & PDFs"
                body="Downloadable transaction coordinator templates you can use immediately, plus structure examples you can adapt for your own workflow."
            />

            <section className="studio-shell pb-20">
                <div className="resource-cards">
                    {resources.map((res) => (
                        <article key={res.href}>
                            <Link href={res.href} className="resource-thumb" tabIndex={-1} aria-hidden="true">
                                {res.image ? (
                                    <Image
                                        src={res.image}
                                        alt=""
                                        width={800}
                                        height={500}
                                        sizes="(max-width: 800px) 100vw, 50vw"
                                        quality={68}
                                    />
                                ) : (
                                    <span className="resource-thumb-text">9 must-haves · 10 mistakes</span>
                                )}
                            </Link>
                            <p className="eyebrow">{res.badge}</p>
                            <h2>
                                <Link href={res.href}>{res.title}</Link>
                            </h2>
                            <p>{res.description}</p>
                            <Link href={res.href} className="text-link" aria-label={res.ctaText + ": " + res.title}>
                                {res.ctaText} →
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <section className="studio-shell studio-section rule-top split-section">
                <h2>Need a website where agents can start a file in one step?</h2>
                <div>
                    <p>
                        I build websites for transaction coordinators: clear services, a Start a File page, and
                        copy written for you.
                    </p>
                    <Link href="/transaction-coordinators?source=resources" className="text-link">
                        Websites for TCs →
                    </Link>
                </div>
            </section>
        </>
    );
}
