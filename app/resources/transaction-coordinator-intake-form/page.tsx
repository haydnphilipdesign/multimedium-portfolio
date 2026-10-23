import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  FaqList,
  FeatureList,
  PageIntro,
  ProjectCTA,
  SectionHeading,
} from "@/components/marketing/Studio";
import { TcGuides } from "@/components/marketing/TcGuides";
import { createPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbStructuredData,
  getCreativeWorkStructuredData,
} from "@/lib/structuredData";

const path = "/resources/transaction-coordinator-intake-form";
const description =
  "What a transaction coordinator intake form should ask agents: the fields you need to open a file, what to leave out, which form tools work, and where the form goes on your site.";

export const metadata: Metadata = createPageMetadata({
  title: "Transaction Coordinator Intake Form: What to Ask Agents",
  description,
  path,
  keywords: [
    "transaction coordinator intake form",
    "transaction coordinator intake form template",
    "tc intake form",
    "start a file form transaction coordinator",
    "transaction coordinator new file form",
  ],
});

const fieldGroups = [
  {
    title: "The service and how you get paid",
    fields:
      "Which service (listing coordination, contract to close, compliance only) · buyer side, seller side, or both · who pays your fee and when · agreement to your deposit or cancellation policy, if you have one.",
    why: "It sets your fee and your checklist before you open anything.",
  },
  {
    title: "The property and the deal",
    fields:
      "Property address · purchase price · financing type (cash, conventional, FHA, VA, other) · earnest money amount and who holds it.",
    why: "Enough to set up the file and see what kind of transaction it is at a glance.",
  },
  {
    title: "Key dates",
    fields:
      "Contract acceptance date · inspection deadline · financing and appraisal deadlines · closing date.",
    why: "They’re in the contract too, but having the agent enter them gives you a second source to check your timeline against.",
  },
  {
    title: "The people",
    fields:
      "Agent name, phone, email, and brokerage · buyer or seller names and contact details · the other agent · lender · title, escrow, or closing attorney.",
    why: "On most files, the first thing you do is introduce yourself to everyone.",
  },
  {
    title: "Documents",
    fields:
      "The fully executed contract with all addenda · the listing agreement for listing files · anything your state or brokerage requires at file start.",
    why: "An upload field beats chasing attachments across three email threads.",
  },
  {
    title: "Communication and access",
    fields:
      "How the agent wants updates (text, call, email) · anyone to copy, like an assistant or team lead · the client’s preferred language · lockbox or showing details for listings · anything unusual about the file.",
    why: "It saves the “how do you want to handle this?” conversation on every file.",
  },
];

const leaveOut = [
  "Bank account numbers, wiring instructions, or Social Security numbers. You don’t need them to open a file, and a web form is the wrong place for them.",
  "Questions you never act on. If an answer doesn’t change what you do, cut the question.",
  "Free-text boxes where a choice would do. Side, service, and financing type work better as buttons or a dropdown, so every entry comes back in the same format.",
  "Required fields the agent may not know yet, like the lender on a cash deal or the closing attorney. Make them optional, or add a “Not known yet” choice.",
];

const tools = [
  {
    title: "Google Forms",
    body: "Free and quick to set up. The catch: file upload questions require the person filling it in to sign in with a Google account, and some agents won’t.",
  },
  {
    title: "Jotform or Cognito Forms",
    body: "Both handle file uploads, conditional questions (listing questions only appear on listing files), and email notifications, and both have free plans with submission limits. Structured Closings uses Cognito Forms for its Submit a File page.",
  },
  {
    title: "A form built into your website",
    body: "A simple form on your own site that emails each submission to you. It works well for a basic file start and keeps agents on your site.",
  },
  {
    title: "Norma Intake",
    body: "I build this one, so weigh that. Agents use one link to send contract details and documents, and you get a coordinator-ready cover sheet. There’s a free tier of five intakes a month.",
  },
];

const faqs = [
  {
    q: "Should the intake form be on my website or a separate link?",
    a: "Either works, and many TCs use both. A Start a File page on your site looks more established and keeps agents on your site. A direct link from your form tool is easy to text to an agent. It can be the same form in both places.",
  },
  {
    q: "How long should a TC intake form be?",
    a: "As short as it can be while still letting you open the file without follow-up questions. Conditional questions help: listing-side questions only appear when the agent picks a listing file.",
  },
  {
    q: "Should agents fill it out, or should I?",
    a: "Agents, ideally. They have the details in front of them when the file goes under contract. If an agent won’t, fill it in yourself from the contract so every file starts in the same format.",
  },
];

export default function TcIntakeFormPage() {
  const structuredData = [
    getBreadcrumbStructuredData([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "TC Intake Form", path },
    ]),
    getCreativeWorkStructuredData({
      type: "Article",
      name: "What a Transaction Coordinator Intake Form Should Ask",
      description,
      path,
      about: ["Transaction coordinators", "Intake forms"],
    }),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <PageIntro
        eyebrow="Free resource · Guide"
        title="What a transaction coordinator intake form should ask"
        body="An intake form is how an agent hands you a file. A good one gets you everything you need to open it in one go, without a week of follow-up emails. Here’s what to ask, what to leave out, and where the form should live on your site."
      >
        <p className="mt-4 text-sm text-muted-foreground">
          I built my mom’s start-a-file form (she’s been a TC since 2013), and
          I build intake software for TCs.
        </p>
      </PageIntro>

      <section className="studio-shell studio-section rule-top split-section">
        <h2>The short version</h2>
        <div>
          <p>
            Ask for the executed contract as an upload, plus the details you
            need to route the file that the contract doesn’t make obvious:
            which service the agent wants, which side you’re on, who everyone
            is, and how the agent wants to hear from you.
          </p>
          <p>
            Keep it short, use choices instead of text boxes where you can, and
            never ask for bank or wiring details.
          </p>
        </div>
      </section>

      <section className="studio-shell studio-section rule-top">
        <SectionHeading title="The six groups of questions">
          <p className="section-aside">
            Adjust the details for your state and the services you offer.
          </p>
        </SectionHeading>
        <ol className="numbered-list">
          {fieldGroups.map((g) => (
            <li key={g.title}>
              <h3>{g.title}</h3>
              <p>{g.fields}</p>
              <p className="mt-3">
                <strong>Why:</strong> {g.why}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="tint-band">
        <div className="studio-shell studio-section split-section">
          <div>
            <h2>What to leave out</h2>
            <p className="mt-5">
              Every extra question is a reason for an agent to stop halfway.
            </p>
          </div>
          <ul className="plain-list mistake-list">
            {leaveOut.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="studio-shell studio-section">
        <SectionHeading title="Which tool to use" />
        <FeatureList items={tools} />
        <p className="scope-note">
          <a
            href="https://intake.normatc.com"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Norma Intake ↗
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </section>

      <section className="studio-shell studio-section rule-top split-section">
        <h2>Where the form goes on your site</h2>
        <div>
          <p>
            Give it its own page, called something like Start a File or Submit
            a File, and put a button for it in your navigation so agents can
            reach it from anywhere. That’s how my mom’s site works: Start
            Transaction is in the menu on every page, and her agents fill it out
            whenever a file goes under contract.
          </p>
          <p>
            If you publish prices, consider showing them inside the form, at the
            moment the agent picks a service. Structured Closings does this.
          </p>
          <Link
            href="/resources/transaction-coordinator-website-examples"
            className="text-link"
          >
            See both sites in the TC website examples →
          </Link>
        </div>
      </section>

      <section className="studio-shell studio-section rule-top split-section">
        <h2>Want it on paper?</h2>
        <div>
          <p>
            The free TC intake checklist covers these questions as a printable
            PDF. Use it as-is, or as the blueprint for your form.
          </p>
          <Link href="/resources/tc-intake-checklist" className="text-link">
            Get the intake checklist →
          </Link>
        </div>
      </section>

      <FaqList faqs={faqs} title="Common questions" />
      <TcGuides current={path} />
      <ProjectCTA />
    </>
  );
}
