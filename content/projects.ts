import type { PackageId } from "./packages";

// Case study content for client work (docs/brand/case-studies.md §3).
// Only approved copy goes here. Anything still marked [ASK CLIENT] or
// [CONFIRM] in case-studies.md stays out until it is answered.
export interface CaseStudyStory {
  /** One line on what changed. No outcomes unless sourced. */
  summary: string;
  /** e.g., "Brokerage", "TC company". */
  businessType: string;
  location?: string;
  whatIDid: string;
  package?: PackageId;
  /** Relationship disclosure (brief §5.6). Shown in "The starting point". */
  relationship?: string;
  /** "The starting point" paragraphs, client-approved wording only. */
  startingPoint?: string[];
  /** "Decisions worth noting": specific choices and why. */
  decisions?: { title: string; body: string }[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  // Honest classification used across the site to keep proof trustworthy:
  //  - "Client":  real, paid client work (safe to present as client proof)
  //  - "Product": internal product/tool built by Multimedium (label as product)
  //  - "Concept": self-initiated concept/demo/spec design for a FICTIONAL brand
  //               (never present as client work; always badge as a concept)
  //  - "Personal": personal/hobby project
  kind: "Client" | "Product" | "Concept" | "Personal";
  category:
    | "Web Design"
    | "SaaS"
    | "Automation"
    | "Portal"
    | "Wellness"
    | "Real Estate"
    | "Fitness";
  year: string;
  client: string;
  role: string;
  tools: string[];
  metaTitle?: string;
  metaDescription?: string;
  socialCaption?: string;
  tags?: string[];
  industries?: string[];
  thumbnail: string;
  heroImage: string;
  images: string[];
  problem?: string;
  solution?: string;
  story?: CaseStudyStory;
  caseStudy?: {
    headline?: string;
    subheadline?: string;
    overview?: string;
    goals?: string[];
    constraints?: string[];
    delivered?: string[];
    whyItWorks?: string[];
    approval?: string;
    tldr?: string;
  };
  cta?: {
    headline: string;
    body: string;
    ctaText: string;
    href: string;
  };
  // For client work, each step is an annotated screenshot on the case
  // study page ("What I built"): a heading plus 1–2 sentences on why.
  process: {
    title: string;
    description: string;
    image?: string;
  }[];
  // TODO(trust): Only add outcomes the client has confirmed and that can be
  // sourced (analytics export, form counts, client statement). Leave empty
  // otherwise — earlier unsourced figures were removed.
  outcomes: {
    metric: string;
    value: string;
    description: string;
  }[];
  // TODO(trust): No real testimonials exist yet. When real client quotes are
  // collected, add them here (quote/author/role). Do NOT invent testimonials —
  // the homepage and case-study testimonial blocks render only when this is set.
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  featured: boolean;
  color: string;
  externalUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "haven-compass-realty",
    title: "Haven Compass Realty",
    kind: "Client",
    industries: ["real-estate", "brokerage"],
    metaTitle: "Haven Compass Realty: Website for a New Connecticut Brokerage",
    metaDescription:
      "A launch website for a new Connecticut brokerage: seller packages priced in plain sight, real client reviews linked to the originals, and clear paths for buyers and sellers.",
    socialCaption:
      "Haven Compass Realty: a launch site for a new Connecticut brokerage, with seller packages priced in plain sight and real client reviews.",
    tagline: "A launch site for a new Connecticut brokerage.",
    description:
      "A launch website for a new Connecticut brokerage, built to earn trust from day one with transparent seller packages, real client reviews, and clear paths for buyers and sellers.",
    category: "Real Estate",
    year: "2026",
    client: "Haven Compass Realty",
    role: "Design, development, and site copy (written with Chelsea Daley)",
    tools: ["Custom build", "Seller package comparison", "Review pages"],
    thumbnail:
      "/images/projects/haven-compass-realty/haven-compass-realty-thumb.webp",
    heroImage:
      "/images/projects/haven-compass-realty/haven-compass-realty-hero.webp",
    images: [
      "/images/projects/haven-compass-realty/haven-compass-realty-1.webp",
      "/images/projects/haven-compass-realty/haven-compass-realty-2.webp",
      "/images/projects/haven-compass-realty/haven-compass-realty-3.webp",
      "/images/projects/haven-compass-realty/haven-compass-realty-4.webp",
    ],
    story: {
      summary:
        "A launch website for a new Connecticut brokerage, built to earn trust from day one with transparent seller packages, real client reviews, and clear paths for buyers and sellers.",
      businessType: "Brokerage",
      location: "Connecticut",
      whatIDid:
        "Design, development, and site copy, written with Chelsea Daley. The logo is the client’s own.",
      package: "custom",
      decisions: [
        {
          title: "Fees appear on the site.",
          body: "Transparency is the brand’s promise, so the seller packages show their listing fees, along with a note that commissions are negotiable and cover the seller’s side only.",
        },
        {
          title: "No placeholder listings.",
          body: "MLS listings aren’t live yet, so the listings page doesn’t pretend. It explains that Chelsea searches the full Connecticut market for each buyer, including coming-soon homes, and asks what they’re looking for.",
        },
      ],
    },
    caseStudy: {
      approval: "Client approved being featured, 2026-10-20.",
    },
    process: [
      {
        title: "Three seller packages, priced in plain sight",
        description:
          "Each package has its fee, a “best for” line, and what’s included, followed by a side-by-side comparison table. Sellers can compare without a sales call.",
        image:
          "/images/projects/haven-compass-realty/haven-compass-realty-1.webp",
      },
      {
        title: "Reviews that carry the agent’s track record honestly",
        description:
          "The brand is new, but Chelsea’s past clients aren’t. Six Google reviews are quoted word for word, labeled with their context and date, and linked to the originals.",
        image:
          "/images/projects/haven-compass-realty/haven-compass-realty-2.webp",
      },
      {
        title: "Step-by-step paths for buyers and sellers",
        description:
          "A four-step selling process and a five-step buying process, with guidance for first-time, move-up, and relocating buyers.",
        image:
          "/images/projects/haven-compass-realty/haven-compass-realty-3.webp",
      },
      {
        title: "A page for clients already under contract",
        description:
          "Earnest money instructions with a wire-fraud warning: a practical page most agent sites don’t have.",
        image:
          "/images/projects/haven-compass-realty/haven-compass-realty-4.webp",
      },
    ],
    outcomes: [],
    featured: true,
    color: "#145a5f",
    externalUrl: "https://www.havencompassrealty.com",
  },
  {
    slug: "structured-closings",
    title: "Structured Closings",
    kind: "Client",
    industries: ["tc"],
    metaTitle: "Structured Closings: Website for a Transaction Coordination Company",
    metaDescription:
      "A website for a growing transaction coordination company that explains every service, including investor and luxury deals, and gives agents one form to start a file.",
    socialCaption:
      "Structured Closings: every service in one place, and one guided form for agents to start a file.",
    tagline: "A TC company site with one guided form to start a file.",
    description:
      "A website for a growing transaction coordination company that explains every service, including investor and luxury deals, and turns “start a file” into one guided form.",
    category: "Real Estate",
    year: "2026",
    client: "Structured Closings",
    role: "Design and development",
    tools: ["Full website", "Cognito Forms intake", "Careers page"],
    thumbnail:
      "/images/projects/structured-closings/structured-closings-thumb.webp",
    heroImage:
      "/images/projects/structured-closings/structured-closings-hero.webp",
    images: [
      "/images/projects/structured-closings/structured-closings-1.webp",
      "/images/projects/structured-closings/structured-closings-2.webp",
      "/images/projects/structured-closings/structured-closings-3.webp",
    ],
    story: {
      summary:
        "A website for a growing transaction coordination company that explains every service, including investor and luxury deals, and turns “start a file” into one guided form.",
      businessType: "Transaction coordination company",
      whatIDid:
        "Design and development. Copy supplied by Structured Closings; the logo is the client’s own.",
      package: "full",
      decisions: [
        {
          title: "Pricing lives in the intake form.",
          body: "Each service’s price appears at the moment an agent commits to it, inside the Submit a File form, instead of on a separate pricing page.",
        },
        {
          title: "Testimonial consent is collected with the testimonial.",
          body: "The Share Feedback page asks whether the comment can be published and how the client’s name should appear, so reviews on the site are collected properly instead of chased afterward.",
        },
      ],
    },
    caseStudy: {
      approval: "Client approved being featured, 2026-10-20.",
    },
    process: [
      {
        title: "A Submit a File page that does the intake work",
        description:
          "Agents pick the service they need and see its price, add client details, communication preferences (including Spanish-language service) and lockbox information, and upload the contract, all in one Cognito Forms intake.",
        image:
          "/images/projects/structured-closings/structured-closings-1.webp",
      },
      {
        title: "Services organized the way agents shop for them",
        description:
          "Listing coordination, transaction coordination, and compliance support, each with what’s included.",
        image:
          "/images/projects/structured-closings/structured-closings-2.webp",
      },
      {
        title: "Room for investor and luxury work",
        description:
          "Creative deal types such as Subject-To, seller financing, and novations, plus luxury transaction coordination, each have their own section. A careers page supports hiring as the company grows.",
        image:
          "/images/projects/structured-closings/structured-closings-3.webp",
      },
    ],
    outcomes: [],
    featured: true,
    color: "#c39a3f",
    externalUrl: "https://www.structuredclosings.com",
  },
  {
    slug: "tag-landing-page",
    title: "Transaction Authority Group (TAG)",
    kind: "Client",
    industries: ["tc"],
    metaTitle: "Transaction Authority Group: One-Page Site for a TC Company",
    metaDescription:
      "A one-page site that tells established transaction coordinators what Transaction Authority Group is, who it’s for, and who it isn’t for, then books a discovery call.",
    socialCaption:
      "Transaction Authority Group: one page that says who it’s for, and who it isn’t for, then books the call.",
    tagline: "A one-page site that qualifies visitors and books calls.",
    description:
      "A single-page site that tells established transaction coordinators what TAG is, who it’s for, and who it isn’t for, and then asks for one thing: book a discovery call.",
    category: "Real Estate",
    year: "2026",
    client: "Transaction Authority Group (TAG)",
    role: "Strategy, copy, design, and development",
    tools: ["One-page site", "Booking calendar", "Fit & filter section"],
    thumbnail: "/images/projects/tag-landing-page/tag-landing-page-thumb.webp",
    heroImage: "/images/projects/tag-landing-page/tag-landing-page-hero.webp",
    images: [
      "/images/projects/tag-landing-page/tag-landing-page-1.webp",
      "/images/projects/tag-landing-page/tag-landing-page-2.webp",
      "/images/projects/tag-landing-page/tag-landing-page-3.webp",
    ],
    story: {
      summary:
        "A single-page site that tells established transaction coordinators what TAG is, who it’s for, and who it isn’t for, and then asks for one thing: book a discovery call.",
      businessType: "TC infrastructure company",
      whatIDid: "Strategy, copy, design, and development",
      package: "one-page",
    },
    caseStudy: {
      approval:
        "Client approved the design direction and granted permission to feature this project in my portfolio.",
    },
    process: [
      {
        title: "The problem, then the answer",
        description:
          "The page names the ceiling most TCs hit, then shows how TAG helps, so the right visitors recognize themselves before they book.",
        image: "/images/projects/tag-landing-page/tag-landing-page-3.webp",
      },
      {
        title: "Who it’s for, and who it isn’t",
        description:
          "A “For / Not for” section lets unqualified prospects filter themselves out, and a short list of what happens on the call makes booking feel low-risk.",
        image: "/images/projects/tag-landing-page/tag-landing-page-2.webp",
      },
      {
        title: "One action, all the way down",
        description:
          "The booking calendar sits on the page itself, and every button leads to it.",
        image: "/images/projects/tag-landing-page/tag-landing-page-1.webp",
      },
    ],
    outcomes: [],
    featured: true,
    color: "#0f766e",
    externalUrl: "https://www.transactionauthority.com",
  },
  {
    slug: "pa-real-estate-support",
    title: "PA Real Estate Support Services",
    kind: "Client",
    industries: ["tc", "real-estate"],
    metaTitle: "PA Real Estate Support Services: Website for a TC Business",
    metaDescription:
      "A redesign for a Pocono-area transaction coordination business, built around the question agents ask first: “How do I send you a file?”",
    socialCaption:
      "PA Real Estate Support Services: a TC website built around one question agents ask, “How do I send you a file?”",
    tagline: "My mom’s TC business, rebuilt around starting a file.",
    description:
      "A redesign for a Pocono-area transaction coordination business, built around one question agents ask: “How do I send you a file?”",
    category: "Real Estate",
    year: "2024",
    client: "PA Real Estate Support Services, LLC",
    role: "Design and development, including the agent intake form",
    tools: ["Full website", "Agent intake form", "Norma integration"],
    thumbnail:
      "/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-thumb.webp",
    heroImage:
      "/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-hero.webp",
    images: [
      "/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-1.webp",
      "/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-2.webp",
    ],
    story: {
      summary:
        "A redesign for a Pocono-area transaction coordination business, built around one question agents ask: “How do I send you a file?”",
      businessType: "Transaction coordination business",
      location: "Pocono Mountains, Pennsylvania",
      whatIDid:
        "Design and development, including the agent intake form, which creates transactions in Norma",
      package: "full",
      // Disclosure required by brief §5.6. Facts from the brief's facts register.
      relationship:
        "This is my mom’s business. Debbie O’Brien has worked in real estate for more than 30 years and has been a transaction coordinator since 2013, serving agents across the Pocono market.",
      decisions: [
        {
          title: "Intake goes straight into her workspace.",
          body: "Agents fill out a start-transaction form whenever a file goes under contract, and the details arrive in Norma, the TC software I build, as a new transaction, ready for Debbie to work. No retyping from emails.",
        },
      ],
    },
    process: [
      {
        title: "One action on every page",
        description:
          "A clear headline about who Debbie serves, and a “Start Transaction” button in the navigation on every page.",
        image:
          "/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-hero.webp",
      },
      {
        title: "Services in scannable groups",
        description:
          "Agents can see what’s covered, from contract management to deadlines and compliance, before they call.",
        image:
          "/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-1.webp",
      },
      {
        title: "Call, email, or form",
        description:
          "The Work With Me page puts every way to reach Debbie in one place, with business hours, so agents know what to expect.",
        image:
          "/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-2.webp",
      },
    ],
    outcomes: [],
    featured: true,
    color: "#3b82f6",
    externalUrl: "https://www.poconotc.com",
  },
  {
    slug: "blissful-existence",
    title: "Blissful Existence Healing Acres",
    kind: "Client",
    industries: ["wellness"],
    tagline:
      "A website for an equine-assisted gestalt therapy farm.",
    description:
      "A photo-led website for an equine-assisted gestalt therapy farm in East Stroudsburg, PA, with its sessions, group experiences, and workshops laid out clearly.",
    category: "Wellness",
    year: "2024",
    client: "Blissful Existence Healing Acres",
    role: "Design and development",
    tools: ["Photo-led design", "Events and services pages"],
    thumbnail:
      "/images/projects/blissful-existence/blissful-existence-thumb.webp",
    heroImage:
      "/images/projects/blissful-existence/blissful-existence-hero.webp",
    images: [
      "/images/projects/blissful-existence/blissful-existence-1.webp",
      "/images/projects/blissful-existence/blissful-existence-2.webp",
      "/images/projects/blissful-existence/blissful-existence-3.webp",
    ],
    story: {
      summary:
        "A photo-led website for an equine-assisted gestalt therapy farm, with its sessions, group experiences, and workshops laid out clearly.",
      businessType: "Equine-assisted therapy farm",
      location: "East Stroudsburg, Pennsylvania",
      whatIDid: "Design and development",
    },
    process: [
      {
        title: "Events and services",
        description:
          "Each offering has a clear heading and a next step, so visitors can see what’s available and how to join.",
        image: "/images/projects/blissful-existence/blissful-existence-1.webp",
      },
      {
        title: "A gallery of the land",
        description:
          "The farm, the horses, and the community, laid out so the page stays calm.",
        image: "/images/projects/blissful-existence/blissful-existence-2.webp",
      },
      {
        title: "Offerings in scannable sections",
        description:
          "Coaching, group experiences, and workshops each get their own section.",
        image: "/images/projects/blissful-existence/blissful-existence-3.webp",
      },
    ],
    outcomes: [],
    featured: true,
    color: "#10b981",
    externalUrl: "https://blissfulexistencehealingacres.com",
  },
  {
    slug: "three-penn-properties",
    title: "Three Penn Properties",
    kind: "Client",
    industries: ["real-estate"],
    tagline:
      "Separate paths for tenants and investors, with TenantCloud onboarding.",
    description:
      "A website for a Stroudsburg, PA rental property company, with separate paths for tenants and investors and an introduction to the TenantCloud tenant portal.",
    category: "Real Estate",
    year: "2023",
    client: "Three Penn Properties, LLC",
    role: "Design and development",
    tools: ["Tenant and investor paths", "TenantCloud portal link"],
    thumbnail: "/images/projects/threepenn/threepenn-thumb.webp",
    heroImage: "/images/projects/threepenn/threepenn-hero.webp",
    images: [
      "/images/projects/threepenn/threepenn-1.webp",
      "/images/projects/threepenn/threepenn-2.webp",
      "/images/projects/threepenn/threepenn-3.webp",
    ],
    story: {
      summary:
        "A website for a rental property company, with separate paths for tenants and investors and an introduction to the TenantCloud tenant portal.",
      businessType: "Rental property company",
      location: "Stroudsburg, Pennsylvania",
      whatIDid: "Design and development",
    },
    process: [
      {
        title: "Who they are, up front",
        description:
          "The company’s story and what it offers tenants, in its own words.",
        image: "/images/projects/threepenn/threepenn-1.webp",
      },
      {
        title: "The properties, in photos",
        description:
          "A gallery of renovated units shows the work instead of describing it.",
        image: "/images/projects/threepenn/threepenn-2.webp",
      },
      {
        title: "Tenants know where to go",
        description:
          "A TenantCloud section explains how to submit maintenance requests, pay invoices, and reach the office, with office hours alongside.",
        image: "/images/projects/threepenn/threepenn-3.webp",
      },
    ],
    outcomes: [],
    featured: true,
    color: "#f59e0b",
    externalUrl: "https://threepenn.com",
  },
];


// Client work order from the brief (§8): Haven Compass Realty first, then
// the TC companies, then older real estate work. Blissful Existence is shown
// last, under "Other work".
const clientWorkOrder = [
  "haven-compass-realty",
  "structured-closings",
  "pa-real-estate-support",
  "tag-landing-page",
  "three-penn-properties",
  "blissful-existence",
];

/** Real, paid client work in brief order. Safe to present as client proof. */
export function getClientProjects(): Project[] {
  const rank = (p: Project) => {
    const i = clientWorkOrder.indexOf(p.slug);
    return i === -1 ? clientWorkOrder.length : i;
  };
  return projects
    .filter((p) => p.kind === "Client")
    .sort((a, b) => rank(a) - rank(b));
}

/** Client work split for /work: real estate first, everything else after. */
export function getClientWork() {
  const clients = getClientProjects();
  return {
    realEstate: clients.filter((p) => p.category === "Real Estate"),
    other: clients.filter((p) => p.category !== "Real Estate"),
  };
}

/** Internal products/tools built by Multimedium. Label as products, never clients. */
/** Self-initiated concept/demo/spec designs for fictional brands. Never client proof. */
/**
 * Homepage "Recent work": real client work only, in priority order.
 * Do NOT add concept/demo slugs here; that is what broke trust before.
 */
const homeFeaturedProjectSlugs: string[] = [
  "haven-compass-realty",
  "structured-closings",
];

export function getHomeFeaturedProjects(): Project[] {
  const bySlug = new Map(projects.map((project) => [project.slug, project]));
  return homeFeaturedProjectSlugs
    .map((slug) => bySlug.get(slug))
    .filter((project): project is Project => Boolean(project))
    .filter((project) => project.kind === "Client");
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Case study routes: client work only. */
export function getAllProjectSlugs(): string[] {
  return getClientProjects().map((p) => p.slug);
}
