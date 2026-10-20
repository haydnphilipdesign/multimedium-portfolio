import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResourceDownload } from "@/components/marketing/ResourceDownload";
import { createPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbStructuredData,
  getCreativeWorkStructuredData,
} from "@/lib/structuredData";
import { requestTcCoverSheet } from "./actions";

export const metadata: Metadata = createPageMetadata({
  title: "Transaction Coordinator Cover Sheet Template",
  description:
    "Free downloadable transaction coordinator cover sheet template with a clean, file-ready summary you can use across most TC workflows.",
  path: "/resources/tc-cover-sheet",
  keywords: [
    "transaction coordinator cover sheet",
    "transaction coordinator cover sheet template",
    "tc cover sheet template",
    "transaction coordinator quick reference pdf",
  ],
});

interface PageProps {
  searchParams?: Promise<{
    sent?: string;
    error?: string;
    source?: string;
  }>;
}

export default async function TcCoverSheetResourcePage({
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
        name: "Transaction Coordinator Cover Sheet Template",
        path: "/resources/tc-cover-sheet",
      },
    ]),
    getCreativeWorkStructuredData({
      name: "Transaction Coordinator Cover Sheet Template",
      description:
        "Free downloadable transaction coordinator cover sheet template with a clean, file-ready summary.",
      path: "/resources/tc-cover-sheet",
      image: "/resources/tc-cover-sheet.webp",
      about: ["Transaction coordinators", "Cover sheet templates"],
    }),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <ResourceDownload
        title={
          <>
            Transaction Coordinator Cover Sheet{" "}
            <span className="text-muted-foreground">/ Quick Ref</span>
          </>
        }
        intro="A clean cover-sheet style summary you can drop into the file at the start of a transaction. Designed to be useful across most TC workflows."
        pdf="/resources/tc-cover-sheet.pdf"
        image="/resources/tc-cover-sheet.webp"
        imageWidth={4250}
        imageHeight={5500}
        imageAlt="Preview of the TC cover sheet"
        gettingTitle="What it’s for"
        getting={[
          "Quick file-start summary (who/what/when + key contact info)",
          "A consistent “cover sheet” you can email, print, or attach",
          "A template you can brand + standardize for your business",
        ]}
        tailoredLabel="Need this tailored to your process?"
        tailoredSource="tc-cover-sheet"
        formAction={requestTcCoverSheet}
        source={source}
        sent={sent}
        sentMessage="Check your inbox, the cover sheet is on its way."
        error={error}
        errorMessage="Please enter a valid name and email."
        coverageTitle="What’s in this transaction coordinator cover sheet"
        coverageIntro="The template is designed to capture everything you need at the start of a file — in one clean, printable document."
        coverage={[
          {
            label: "Property details",
            detail:
              "Address, legal description, MLS/list number, and property type.",
          },
          {
            label: "Transaction parties",
            detail:
              "Buyer and seller names, agent names, brokerage info, and roles.",
          },
          {
            label: "Key dates",
            detail:
              "Contract date, inspection deadline, financing contingency, appraisal deadline, and closing date.",
          },
          {
            label: "Contact directory",
            detail:
              "Phone and email for buyer agent, seller agent, lender, title/escrow officer, and attorney (if applicable).",
          },
          {
            label: "File notes section",
            detail:
              "Open space for TC-specific notes, custom fields, or reminders that don’t fit standard fields.",
          },
        ]}
        coverageNote="The layout is clean and print-ready. You can use it as-is or adapt the fields for your state or brokerage."
        ctaTitle="Need a website that attracts better-fit leads?"
        ctaBody="A clean cover sheet starts the file right — a clear website starts the relationship right. TC websites run from a $750 one-page site to builds with a full Start a File page."
        ctaSource="tc-cover-sheet"
      />
    </>
  );
}
