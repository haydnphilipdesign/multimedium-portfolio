// Single source for package names, prices, and terms on the site.
// Every value here comes from docs/brand/packages-and-sop.md (approved
// 2026-10-20). Change that doc first, then mirror it here. Never restate
// prices or terms anywhere else in the codebase.

export type PackageId = "one-page" | "full" | "custom";
export type Audience = "tc" | "agents";

export type Package = {
  id: PackageId;
  name: string;
  price: string;
  /** Starting price in USD, for structured data. */
  startingPrice: number;
  /** Short line for summaries (home pricing row). */
  summary: string;
  bestFor: string;
  pages: string;
  copywriting: string;
  forms: string;
  revisions: string;
  timeline: string;
  /** What the pages look like for each audience (packages doc §A1). */
  audiencePages: Record<Audience, string>;
  /** Real client work at this level, linked from pricing and audience pages. */
  examples: { slug: string; title: string }[];
  /** Contact form pre-fill keys (see app/contact/validation.ts). */
  projectType: PackageId;
  budgetRange: "under1k" | "1to3k" | "3to5k";
};

export const packages: Package[] = [
  {
    id: "one-page",
    name: "One-page site",
    price: "$750",
    startingPrice: 750,
    summary: "One focused page, written for you. About 2 weeks.",
    bestFor: "New solo TCs or agents who need a credible home quickly",
    pages: "1 scrolling page",
    copywriting:
      "You fill in a short questionnaire; I write the page from it",
    forms: "1 form (contact or simple file start), delivered to your email",
    revisions: "2 combined rounds",
    timeline: "About 2 weeks",
    audiencePages: {
      tc: "Hero · what you handle · how to start a file · about · contact",
      agents: "Hero · how you help buyers and sellers · about · reviews · contact",
    },
    examples: [
      { slug: "tag-landing-page", title: "Transaction Authority Group" },
    ],
    projectType: "one-page",
    budgetRange: "under1k",
  },
  {
    id: "full",
    name: "Full website",
    price: "$1,500",
    startingPrice: 1500,
    summary: "Up to 5 pages, intake forms, copy written for you. About 3–4 weeks.",
    bestFor:
      "Established TCs, agents, and small offices ready for a complete site",
    pages: "Up to 5 pages",
    copywriting:
      "I write every page from your questionnaire and a 30-minute call",
    forms:
      "Up to 2 forms. A built-in form, or I connect your form tool (e.g., Cognito Forms, Jotform)",
    revisions: "2 copy rounds + 2 design rounds",
    timeline: "About 3–4 weeks",
    audiencePages: {
      tc: "Home · Services · Start a File · About · Careers or Contact",
      agents: "Home · Buy · Sell · About · Contact, with reviews built in",
    },
    examples: [
      { slug: "structured-closings", title: "Structured Closings" },
      {
        slug: "pa-real-estate-support",
        title: "PA Real Estate Support Services",
      },
    ],
    projectType: "full",
    budgetRange: "1to3k",
  },
  {
    id: "custom",
    name: "Custom build",
    price: "from $3,000",
    startingPrice: 3000,
    summary:
      "Brokerages, TC companies, and bigger projects. About 5–8 weeks.",
    bestFor:
      "TC companies, brokerages, teams, or anything beyond 5 pages",
    pages: "6+ pages, or anything with special features",
    copywriting: "I write every page from a 60-minute discovery session",
    forms: "Multi-step intake, multiple forms, scoped integrations",
    revisions: "3 copy rounds + 3 design rounds",
    timeline: "About 5–8 weeks",
    audiencePages: {
      tc: "Everything in Full, plus service tiers, team bios, partner pages, and multi-step intake",
      agents:
        "Brokerage brand, seller-package comparisons, agent profiles, recruiting, and client resources. MLS listings when your MLS allows.",
    },
    examples: [{ slug: "haven-compass-realty", title: "Haven Compass Realty" }],
    projectType: "custom",
    budgetRange: "3to5k",
  },
];

export const hosting = {
  price: "$59/month",
  firstMonth: "Your first month is included.",
  included: [
    "Hosting and SSL (the padlock)",
    "Uptime monitoring. I’m alerted if the site goes down.",
    "Security and software updates",
    "Checks that your forms are still delivering",
    "Up to 30 minutes of small edits per month (text changes, photo swaps, a new review). Unused time doesn’t roll over.",
    "A reply within one business day",
  ],
  notIncluded:
    "New pages or features, redesigns, new copywriting, and third-party subscriptions. These are quoted first.",
};

export const includedInEveryPackage = [
  "Custom design (no page-builder templates) using your logo and colors",
  "Mobile, tablet, and desktop layouts",
  "Page titles, descriptions, and social share previews set up for search",
  "Accessibility basics: readable contrast, keyboard navigation, labeled forms",
  "Fast loading",
  "Connecting your domain at launch",
  "A walkthrough at handoff and a 14-day post-launch fix window. Anything I built that isn’t working is fixed free.",
];

// TODO(pricing): the hourly rate for out-of-scope work is still unset in
// packages-and-sop.md §A3. Add it here (and to the pricing page) once set.
export const notIncluded = [
  "Paid directly by you: domain registration, email (e.g., Google Workspace), form tool subscriptions, MLS/IDX vendor fees, and stock photography or photographers",
  "Logo design: from $300",
  "An extra standard page beyond your package: $250 each",
  "Ongoing SEO campaigns, ads, and social media management",
  "MLS/IDX listings: not a standard offer yet; scoped per MLS",
];

export function getPackage(id: PackageId): Package {
  return packages.find((p) => p.id === id)!;
}

/** Contact link with the package pre-selected and the CTA's source recorded. */
export function packageContactHref(pkg: Package, source: string) {
  return (
    "/contact?source=" +
    encodeURIComponent(source) +
    "&package=" +
    encodeURIComponent(pkg.name) +
    "&projectType=" +
    pkg.projectType +
    "&budgetRange=" +
    pkg.budgetRange
  );
}
