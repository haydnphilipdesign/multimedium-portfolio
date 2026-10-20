import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  FaqList,
  PageIntro,
  SectionHeading,
} from "@/components/marketing/Studio";
import { createPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbStructuredData,
  getFaqStructuredData,
} from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "What Every Transaction Coordinator Website Needs",
  description:
    "A practical checklist for transaction coordinator websites: 9 must-haves, 10 common mistakes, and what separates a site that builds trust from one that gets ignored.",
  path: "/resources/what-every-tc-website-needs",
  keywords: [
    "transaction coordinator website",
    "what should a transaction coordinator website have",
    "transaction coordinator website checklist",
    "transaction coordinator web design",
    "tc website checklist",
  ],
});

const mustHaves = [
  {
    title: "A clear 'who you are' positioning",
    description:
      "Agents want to know you're a real person with real experience — not a faceless service. Your name, your photo, your story. Don't hide behind a brand wall.",
  },
  {
    title: "Services page with specifics",
    description:
      "Don't just say 'transaction coordination.' List the actual work: contract-to-close management, deadline tracking, compliance reviews, lender/title coordination. Agents need to see themselves in the services.",
  },
  {
    title: "An intake form or 'Submit a File' page",
    description:
      "If agents have to email you attachments and details, you're creating friction. A structured intake form (Cognito, Jotform, etc.) makes starting a transaction professional and fast.",
  },
  {
    title: "Mobile-first responsive design",
    description:
      "Most agents are looking at your site between showings, on their phone. If your site doesn't work on mobile, you've lost them before they read a word.",
  },
  {
    title: "SEO basics: meta tags, titles, OG images",
    description:
      "When agents search 'transaction coordinator [your city]', you want to show up. Proper meta tags, page titles, Open Graph images, and structured data make that possible.",
  },
  {
    title: "Fast load speed",
    description:
      "Page builders and heavy frameworks create bloated sites that load slowly. Clean code loads fast — which matters for both user experience and search rankings.",
  },
  {
    title: "Professional headshot and branding",
    description:
      "A real photo of you builds instant trust. Pair it with consistent colors and a logo that looks intentional, not thrown together in Canva.",
  },
  {
    title: "Clear contact info and a CTA on every page",
    description:
      "Every page should make it obvious how to get in touch. Don't make agents hunt for a phone number or email. A button on every page, every section, every scroll.",
  },
  {
    title: "Social proof: testimonials or client logos",
    description:
      "Even one testimonial from an agent or brokerage changes how a visitor reads your entire site. If you have them, use them. If you don't, prioritize getting one.",
  },
];

const commonMistakes = [
  "Using a generic Wix/Squarespace template with no TC-specific content",
  "No intake form — relying on email or phone to start transactions",
  "Missing or buried contact information",
  "No mobile optimization — site looks broken on phones",
  "Stock photos of random offices instead of a real headshot",
  "Vague service descriptions ('We coordinate transactions') instead of specifics",
  "No SEO setup — no meta tags, no page titles, no Google presence",
  "A Careers page that doesn't explain why someone would want to work with you",
  "No About section — agents want to know who they're hiring",
  "Slow load times from bloated page builders or oversized images",
];

const faqs = [
  {
    q: "Do I really need a website if I get all my business from referrals?",
    a: "Yes. Even referral-based leads will Google you before reaching out. A professional website validates what the referral already told them. Without one, you're relying entirely on trust you haven't earned yet.",
  },
  {
    q: "Can I just use a Wix or Squarespace template?",
    a: "You can, but most templates aren't built for TC businesses. You'll end up with generic sections that don't map to your workflow, no intake forms, and a site that looks like every other small business. Custom or TC-specific templates solve this.",
  },
  {
    q: "How much should a TC website cost?",
    a: "My packages are a one-page site at $750, a full website at $1,500, and a custom build from $3,000. The key is matching the package to the job: credibility, clearer services, less back-and-forth, or a fuller intake system.",
  },
  {
    q: "What's more important — how it looks or what it says?",
    a: "What it says. Design gets attention, but messaging converts. If your copy clearly explains what you do, who you do it for, and why agents should trust you, the site will work. Pretty design with vague copy won't.",
  },
];

const structuredData = [
  getBreadcrumbStructuredData([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    {
      name: "What Every TC Website Needs",
      path: "/resources/what-every-tc-website-needs",
    },
  ]),
  getFaqStructuredData(faqs),
];

export default function WhatEveryTCWebsiteNeedsPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <PageIntro
        eyebrow="Free resource · Guide"
        title="What every transaction coordinator website needs"
        body="What to include, what to skip, and what separates a TC site that builds trust from one that gets ignored."
      >
        <p className="mt-4 text-sm text-muted-foreground">
          Written by someone whose mom has been a TC since 2013.
        </p>
      </PageIntro>

      <section className="studio-shell studio-section rule-top">
        <SectionHeading title="The 9 things your TC website must have">
          <p className="section-aside">
            If your site is missing any of these, it’s leaving trust — and
            leads — on the table.
          </p>
        </SectionHeading>
        <ol className="numbered-list">
          {mustHaves.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="tint-band">
        <div className="studio-shell studio-section split-section">
          <div>
            <h2>10 mistakes most TC websites make</h2>
            <p className="mt-5">
              These are the patterns I see over and over when reviewing TC
              sites.
            </p>
          </div>
          <ul className="plain-list mistake-list">
            {commonMistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </div>
      </section>

      <FaqList faqs={faqs} title="Common questions" />

      <section className="studio-shell studio-section rule-top split-section">
        <h2>Want a website that checks every box?</h2>
        <div>
          <p>
            I build websites specifically for transaction coordinators. Intake
            forms, mobile-first design, search basics, copy, and clear
            positioning are part of every package. Three packages starting at
            $750.
          </p>
          <div className="hero-actions">
            <Link
              href="/transaction-coordinators?source=what-every-tc-website-needs#packages"
              className="btn-primary"
            >
              See TC website packages <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/contact?source=what-every-tc-website-needs"
              className="text-link"
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
