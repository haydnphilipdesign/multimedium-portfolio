import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResourceDownload } from "@/components/marketing/ResourceDownload";
import { createPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbStructuredData,
  getCreativeWorkStructuredData,
} from "@/lib/structuredData";
import { requestChecklist } from "./actions";

export const metadata: Metadata = createPageMetadata({
  title: "Transaction Coordinator Lead Intake Checklist",
  description:
    "Free downloadable transaction coordinator lead intake checklist PDF to help qualify faster, reduce back-and-forth, and start each file clean.",
  path: "/resources/tc-intake-checklist",
  keywords: [
    "transaction coordinator intake checklist",
    "transaction coordinator lead intake checklist",
    "tc intake checklist pdf",
    "transaction coordinator lead form template",
  ],
});

interface PageProps {
  searchParams?: Promise<{
    sent?: string;
    error?: string;
    source?: string;
  }>;
}

export default async function TcIntakeChecklistPage({
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
        name: "Transaction Coordinator Lead Intake Checklist",
        path: "/resources/tc-intake-checklist",
      },
    ]),
    getCreativeWorkStructuredData({
      name: "Transaction Coordinator Lead Intake Checklist",
      description:
        "Free downloadable transaction coordinator lead intake checklist PDF for cleaner qualification and file starts.",
      path: "/resources/tc-intake-checklist",
      image: "/resources/tc-intake-checklist.webp",
      about: ["Transaction coordinators", "Intake checklists"],
    }),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <ResourceDownload
        title="Transaction Coordinator Lead Intake Checklist"
        intro="A clean, printable checklist you can use to qualify faster, reduce back-and-forth, and start every file organized."
        pdf="/resources/tc-intake-checklist.pdf"
        image="/resources/tc-intake-checklist.webp"
        imageWidth={1240}
        imageHeight={1754}
        imageAlt="Preview of the TC lead intake checklist"
        gettingTitle="What you’re getting"
        getting={[
          "Printable lead intake checklist (PDF)",
          "Qualification questions that prevent half-filled submissions",
          "A clean structure you can adapt to your state/brokerage",
        ]}
        tailoredLabel="Need this tailored to your process?"
        tailoredSource="tc-intake-checklist"
        formAction={requestChecklist}
        source={source}
        sent={sent}
        sentMessage="Check your inbox, the download link is on its way."
        error={error}
        errorMessage="Please enter your name and a valid email."
        coverageTitle="What’s in this transaction coordinator intake checklist"
        coverageIntro="The checklist is organized to capture everything needed to qualify a new lead and start a file cleanly, before the back-and-forth begins."
        coverage={[
          {
            label: "Transaction type and side",
            detail:
              "Buyer, seller, or dual representation, and whether it’s a purchase, refinance, or listing coordination.",
          },
          {
            label: "Agent and brokerage info",
            detail:
              "Referring agent name, brokerage, license number, and preferred communication method.",
          },
          {
            label: "Property and contract details",
            detail:
              "Property address, list price, contract price, and earnest money amount.",
          },
          {
            label: "Key contingency dates",
            detail:
              "Inspection period, financing contingency, appraisal deadline, and projected closing date.",
          },
          {
            label: "Lender and title info",
            detail:
              "Lender name and contact, loan type, title/escrow company, and attorney (if applicable).",
          },
          {
            label: "Urgency and special notes",
            detail:
              "Rush flag, known complications, and any brokerage-specific requirements the TC needs to be aware of.",
          },
        ]}
        coverageNote="Use it as a printable checklist you fill in manually, or as a blueprint for structuring a digital intake form."
        ctaTitle="Want a website with a real intake system built in?"
        ctaBody="This checklist works on paper, but it works better as a structured intake form on your own site. The Full website and Custom build packages include a Start a File page; packages start at $750."
        ctaSource="tc-intake-checklist"
      />
    </>
  );
}
