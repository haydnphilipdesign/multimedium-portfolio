import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  BrowserFrame,
  FaqList,
  PageIntro,
  ProjectCTA,
  SectionHeading,
} from "@/components/marketing/Studio";
import { TcGuides } from "@/components/marketing/TcGuides";
import { getProjectBySlug } from "@/content/projects";
import { getPackage } from "@/content/packages";
import { createPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbStructuredData,
  getCreativeWorkStructuredData,
} from "@/lib/structuredData";

const path = "/resources/transaction-coordinator-website-examples";
const description =
  "Three real transaction coordinator websites with screenshots: how each one explains its services, gets agents to start a file, and answers questions before the call.";

export const metadata: Metadata = createPageMetadata({
  title: "Transaction Coordinator Website Examples",
  description,
  path,
  keywords: [
    "transaction coordinator website examples",
    "transaction coordinator website",
    "tc website examples",
    "transaction coordinator website design",
  ],
});

// Real client work only (brief §5). Takeaways are drawn from each project's
// case study in content/projects.ts; nothing here adds new claims.
const examples = [
  {
    slug: "structured-closings",
    intro:
      "A transaction coordination company that handles listing coordination, contract to close, compliance support, and investor and luxury deals. The site has to make that range clear and give agents one dependable way to send a file.",
    borrow: [
      "Show the price at the moment the agent commits. Each service’s price appears inside the Submit a File form, right where the agent picks it.",
      "Ask for everything you need to open the file in one form, including the contract upload, so nothing arrives by separate email.",
      "Collect permission to publish a testimonial at the same time you collect the testimonial.",
    ],
  },
  {
    slug: "pa-real-estate-support",
    intro:
      "A transaction coordination business serving agents in the Pocono market. The redesign is built around the question agents ask first: “How do I send you a file?”",
    borrow: [
      "Put your start-a-file button in the navigation, so it’s on every page.",
      "Group your services so an agent can see what’s covered in a few seconds.",
      "Send form entries straight to where you work. Here they arrive in Norma as a new transaction, so nothing is retyped from email.",
    ],
  },
  {
    slug: "tag-landing-page",
    intro:
      "A one-page site for a company that works with established transaction coordinators. It has one job: get the right people to book a discovery call.",
    borrow: [
      "Say who you’re not for. The right visitors recognize themselves, and the wrong ones leave before booking.",
      "Tell people what happens on the call, so booking feels low-risk.",
      "Keep one action on the page, and point every button at it.",
    ],
  },
];

const faqs = [
  {
    q: "Can I copy these layouts for my own site?",
    a: "Borrow the ideas freely. That’s what this page is for. The designs, wording, and branding belong to each business, so build your own version rather than copying them.",
  },
  {
    q: "Does a new TC need a multi-page site like these?",
    a: "Usually not. One page that covers what you handle, how to start a file, who you are, and how to reach you is enough to start. It can grow into a full website later.",
  },
  {
    q: "Why are all of these your own work?",
    a: "Because I can only explain the decisions behind sites I built, and I can only show screenshots I have permission to use. Treat this as a close look at three real sites, not a ranking of the best TC websites out there.",
  },
];

export default function TcWebsiteExamplesPage() {
  const structuredData = [
    getBreadcrumbStructuredData([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "TC Website Examples", path },
    ]),
    getCreativeWorkStructuredData({
      type: "Article",
      name: "Transaction Coordinator Website Examples",
      description,
      path,
      about: ["Transaction coordinators", "Website design"],
    }),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <PageIntro
        eyebrow="Free resource · Guide"
        title="Transaction coordinator website examples"
        body="Three real TC websites, what each one does, and why. All three are sites I built, so this isn’t a neutral roundup. It’s a close look at decisions you can borrow for your own site, whoever builds it."
      />

      {examples.map(({ slug, intro, borrow }, i) => {
        const p = getProjectBySlug(slug)!;
        const story = p.story!;
        const pkg = story.package ? getPackage(story.package) : undefined;
        return (
          <section
            key={slug}
            className={
              "studio-shell studio-section" + (i === 0 ? " rule-top" : "")
            }
          >
            <SectionHeading
              eyebrow={story.businessType + (pkg ? " · " + pkg.name : "")}
              title={p.title}
            />
            <div className="split-section">
              <div>
                <p>{intro}</p>
                {story.relationship && <p>{story.relationship}</p>}
                <p>
                  <strong>What I did:</strong> {story.whatIDid}
                </p>
                <div className="hero-actions">
                  <Link href={"/work/" + slug} className="text-link">
                    Read the case study →
                  </Link>
                  {p.externalUrl && (
                    <a
                      href={p.externalUrl}
                      className="text-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit the live site ↗
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </div>
              <div>
                <div className="eyebrow">Worth borrowing</div>
                <ul className="check-list">
                  {borrow.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="case-steps mt-12">
              {p.process.map((step) => (
                <figure key={step.title} className="case-step">
                  {step.image && (
                    <BrowserFrame
                      src={step.image}
                      alt={p.title + " website: " + step.title.toLowerCase()}
                      url={p.externalUrl}
                      {...(step.image === p.heroImage
                        ? { width: 1920, height: 1080 }
                        : {})}
                      sizes="(max-width: 800px) 100vw, 60vw"
                    />
                  )}
                  <figcaption>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        );
      })}

      <section className="tint-band">
        <div className="studio-shell studio-section">
          <SectionHeading title="What all three have in common" />
          <ol className="numbered-list">
            <li>
              <h3>One main action, everywhere</h3>
              <p>
                Submit a file, start a transaction, or book a call. Each site
                picks one and keeps it in view on every page or every section.
              </p>
            </li>
            <li>
              <h3>Written for one reader</h3>
              <p>
                Two are written for agents sending files. The third is written
                for established TCs. None of them tries to speak to everyone.
              </p>
            </li>
            <li>
              <h3>Questions answered before the call</h3>
              <p>
                Prices in the intake form, services grouped by what’s covered,
                and a plain list of who the offer is and isn’t for.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="studio-shell studio-section split-section">
        <h2>Which size of site do you need?</h2>
        <div>
          <p>
            A focused single page, like Transaction Authority Group, is enough
            for most new TCs. Structured Closings and PA Real Estate Support
            Services are full websites with separate Services, Start a File,
            and About pages, which suit an established TC with more to explain.
          </p>
          <Link
            href="/resources/transaction-coordinator-website-cost"
            className="text-link"
          >
            What a TC website costs →
          </Link>
        </div>
      </section>

      <FaqList faqs={faqs} title="Common questions" />
      <TcGuides current={path} />
      <ProjectCTA />
    </>
  );
}
