import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResourceDownload } from "@/components/marketing/ResourceDownload";
import { createPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbStructuredData,
  getCreativeWorkStructuredData,
} from "@/lib/structuredData";
import { requestTcTaskList } from "./actions";

export const metadata: Metadata = createPageMetadata({
  title: "Transaction Coordinator Task List Template",
  description:
    "Free downloadable transaction coordinator task list sheet based on a Poconos workflow example that you can customize for your own process.",
  path: "/resources/tc-task-list",
  keywords: [
    "transaction coordinator task list",
    "transaction coordinator task list template",
    "tc checklist pdf",
    "transaction coordinator workflow template",
  ],
});

interface PageProps {
  searchParams?: Promise<{
    sent?: string;
    error?: string;
    source?: string;
  }>;
}

export default async function TcTaskListResourcePage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};
  const sent = params.sent === "1";
  const error = params.error === "1";
  const source = params.source ?? "";
  const structuredData = [
    getBreadcrumbStructuredData([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      {
        name: "Transaction Coordinator Task List Template",
        path: "/resources/tc-task-list",
      },
    ]),
    getCreativeWorkStructuredData({
      name: "Transaction Coordinator Task List Template",
      description:
        "Free downloadable transaction coordinator task list sheet based on a Poconos workflow example.",
      path: "/resources/tc-task-list",
      image: "/resources/tc-task-list.webp",
      about: ["Transaction coordinators", "Workflow templates"],
    }),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <ResourceDownload
        title={
          <>
            Transaction Coordinator Task List{" "}
            <span className="text-muted-foreground">(example)</span>
          </>
        }
        intro="This is a real task list built for the Poconos region (where my mom has been a TC since 2013). Use it as a reference, then adapt it to your state/brokerage rules."
        pdf="/resources/tc-task-list.pdf"
        image="/resources/tc-task-list.webp"
        imageWidth={4250}
        imageHeight={5500}
        imageAlt="Preview of the TC task list sheet"
        gettingTitle="What you’re getting"
        getting={[
          "A real TC task list sheet (example) you can adapt",
          "A structure you can copy into your own checklist/process doc",
          "A clear example of a phase-by-phase file workflow",
        ]}
        tailoredLabel="Need a tailored version?"
        tailoredSource="tc-task-list"
        formAction={requestTcTaskList}
        source={source}
        sent={sent}
        sentMessage="Check your inbox, the task list is on its way."
        error={error}
        errorMessage="Please enter a valid name and email."
        coverageTitle="What this transaction coordinator task list covers"
        coverageIntro="Based on a real Poconos workflow — organized by phase so every deadline and handoff has a clear place in the process."
        coverage={[
          {
            label: "Contract execution phase",
            detail:
              "Tasks to complete immediately after contract is signed — document collection, deadline entry, and party notifications.",
          },
          {
            label: "Inspection and contingency period",
            detail:
              "Scheduling inspections, tracking repair requests, addendum management, and contingency deadline follow-ups.",
          },
          {
            label: "Financing and appraisal coordination",
            detail:
              "Lender communication, appraisal scheduling, clear-to-close follow-up, and financing contingency removal.",
          },
          {
            label: "Title and escrow coordination",
            detail:
              "Title search tracking, preliminary HUD/closing disclosure review, wire instructions confirmation, and closing date coordination.",
          },
          {
            label: "Closing preparation",
            detail:
              "Final walkthrough coordination, document delivery, closing confirmation with all parties, and last-minute change tracking.",
          },
          {
            label: "Post-closing",
            detail:
              "Commission disbursement follow-up, compliance checklist submission, file archiving, and agent feedback.",
          },
        ]}
        coverageNote="This is a Poconos-specific example — rules, timelines, and requirements vary by state and brokerage. Use it as a reference to build your own, or as a starting point to standardize your workflow across files."
        ctaTitle="Need a website that matches your professionalism?"
        ctaBody="I build websites specifically for transaction coordinators, starting at $750 for a one-page site. Every package includes copywriting, so your services read as clearly as your checklists."
        ctaSource="tc-task-list"
      />
    </>
  );
}
