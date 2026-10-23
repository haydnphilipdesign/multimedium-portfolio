import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  FaqList,
  FeatureList,
  PackageCards,
  PageIntro,
  ProjectCTA,
  SectionHeading,
} from "@/components/marketing/Studio";
import { TcGuides } from "@/components/marketing/TcGuides";
import {
  getPackage,
  hosting,
  includedInEveryPackage,
} from "@/content/packages";
import { hostingFaq, ownershipFaq, starterPackageFaq } from "@/content/faqs";
import { createPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbStructuredData,
  getCreativeWorkStructuredData,
} from "@/lib/structuredData";

const path = "/resources/transaction-coordinator-website-cost";
const onePage = getPackage("one-page");
const full = getPackage("full");
const custom = getPackage("custom");

const description = `What a transaction coordinator website costs to build yourself or hire out, the ongoing costs either way, and my published prices: ${onePage.price} for a one-page site, ${full.price} for a full website.`;

export const metadata: Metadata = createPageMetadata({
  title: "How Much Does a Transaction Coordinator Website Cost?",
  description,
  path,
  keywords: [
    "transaction coordinator website cost",
    "how much does a transaction coordinator website cost",
    "tc website price",
    "transaction coordinator website design cost",
  ],
});

const ongoing = [
  {
    term: "A domain name",
    detail: "Renewed yearly. Register it in your own name, whoever builds the site.",
  },
  {
    term: "Email on your domain",
    detail:
      "Usually a monthly fee per person, for example through Google Workspace. It reads better than a Gmail address when you email agents.",
  },
  {
    term: "A form tool, if you use one",
    detail:
      "Jotform and Cognito Forms both have free plans. Paid plans add submissions and storage.",
  },
  {
    term: "Hosting",
    detail: `Included in a website builder subscription if you build it yourself. If I host your site, it’s hosting & care at ${hosting.price} after your first month.`,
  },
];

const priceDrivers = [
  {
    title: "How many pages",
    body: "One page can cover what you handle, how to start a file, who you are, and how to reach you. Separate Services, Start a File, About, and Careers pages each take more writing and design.",
  },
  {
    title: "Who writes it",
    body: "Writing is where most TCs get stuck, and it’s a large share of the work. Ask every quote whether the copy is included. In all of my packages, I write it.",
  },
  {
    title: "Forms and integrations",
    body: "A simple form that emails you is quick. A multi-step intake with file uploads, prices inside the form, or a connection to your other software takes longer.",
  },
  {
    title: "Extra features",
    body: "Team bios, service tiers, partner pages, and recruiting pages for a growing TC company. That’s where a site moves from a few pages to a custom build.",
  },
];

const faqs = [
  starterPackageFaq,
  hostingFaq,
  ownershipFaq,
  {
    q: "Is it worth paying for a website if most of my work comes from referrals?",
    a: "Referred agents still look you up before they send a file. The site’s job is to confirm what the referral told them: what you handle, how to start, and who you are. If a DIY page does that, it’s doing its job.",
  },
];

export default function TcWebsiteCostPage() {
  const structuredData = [
    getBreadcrumbStructuredData([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "TC Website Cost", path },
    ]),
    getCreativeWorkStructuredData({
      type: "Article",
      name: "How Much Does a Transaction Coordinator Website Cost?",
      description,
      path,
      about: ["Transaction coordinators", "Website pricing"],
    }),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <PageIntro
        eyebrow="Free resource · Guide"
        title="What does a transaction coordinator website cost?"
        body="It depends on two things: how much of the work you do yourself, and how many pages and forms you need. Here’s what goes into the cost, what you’ll pay either way, and my prices, since I publish them."
      />

      <section className="studio-shell studio-section rule-top split-section">
        <h2>The short answer</h2>
        <div>
          <p>
            <strong>If you build it yourself,</strong> you’ll pay for a domain,
            email on that domain, a website builder subscription, and possibly a
            form tool. The biggest cost is your time, and most of that goes into
            writing.
          </p>
          <p>
            <strong>If you hire me,</strong> it’s {onePage.price} for a one-page
            site, {full.price} for a full website, or {custom.price} for a
            custom build, plus hosting & care at {hosting.price} after your
            first month. The writing is included.
          </p>
        </div>
      </section>

      <section className="studio-shell studio-section rule-top split-section">
        <h2>What you pay either way</h2>
        <dl className="plain-defs">
          {ongoing.map((o) => (
            <div key={o.term}>
              <dt>{o.term}</dt>
              <dd>{o.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="studio-shell studio-section rule-top">
        <SectionHeading title="What changes the price" />
        <FeatureList items={priceDrivers} />
      </section>

      <section className="tint-band">
        <div className="studio-shell studio-section split-section">
          <h2>Do it yourself, or hire someone?</h2>
          <div>
            <p>
              <strong>Build it yourself</strong> if you’re just starting, have
              more time than budget, and are comfortable writing about your
              services. One clear page on a site builder is far better than no
              site.
            </p>
            <p>
              <strong>Hire someone</strong> when your time is worth more on
              files, when you’ve started writing it and stalled, or when you
              need a real intake system.
            </p>
            <p>
              Whoever you hire, ask to see a TC or agent site they’ve built,
              check it on your phone, and get in writing who writes the copy and
              who owns the site when it’s done.
            </p>
            <Link
              href="/resources/what-every-tc-website-needs"
              className="text-link"
            >
              Check any site against the TC website checklist →
            </Link>
          </div>
        </div>
      </section>

      <section className="studio-shell studio-section">
        <SectionHeading title="My packages for TCs">
          <p className="section-aside">
            Before any work starts, you get a written proposal with your exact
            pages, timeline, and price.
          </p>
        </SectionHeading>
        <PackageCards audience="tc" source="tc-cost-guide" />
      </section>

      <section className="studio-shell studio-section rule-top split-section">
        <h2>Included in every package</h2>
        <ul className="check-list">
          {includedInEveryPackage.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <FaqList faqs={faqs} title="Common questions" />
      <TcGuides current={path} />
      <ProjectCTA />
    </>
  );
}
