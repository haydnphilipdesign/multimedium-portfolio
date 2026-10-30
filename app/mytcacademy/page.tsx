import type { Metadata } from "next";
import Link from "next/link";
import {
  FaqList,
  ProjectTile,
  SectionHeading,
} from "@/components/marketing/Studio";
import { getProjectBySlug } from "@/content/projects";
import { packages, packageContactHref, hosting } from "@/content/packages";

// TC-branded names appear only on this page, mapped one-to-one to the
// public packages (brief §7).
const tcNames = {
  "one-page": "TC Starter",
  full: "TC Growth",
  custom: "TC Pro",
} as const;

const [onePage] = packages;

export const metadata: Metadata = {
  title: "My TC Academy Students: Private Referral",
  description: `A private page for My TC Academy students: websites for transaction coordinators, written, designed, and built by Haydn. One-page sites from ${onePage.price}.`,
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/mytcacademy",
  },
};

const whyWebsite = [
  {
    title: "Agents look you up first",
    description:
      "Even when an agent hears about you by referral, they look you up before sending a file. A clear site confirms what they heard.",
  },
  {
    title: "What you handle, in agents’ words",
    description:
      "Listing coordination, contract to close, compliance: described the way agents think about them, so they can tell in a few seconds whether you fit.",
  },
  {
    title: "Starting a file in one step",
    description:
      "A form agents fill out when a file goes under contract, instead of a chain of emails and texts.",
  },
  {
    title: "Room to grow",
    description:
      "Start with one page. Add a services page, a Start a File page, or a careers page as your business grows, without starting over.",
  },
];

const included = [
  {
    title: "Copy written for you",
    description:
      "You answer a short questionnaire about your services and how you work. I write the pages, and you review them.",
  },
  {
    title: "Custom design",
    description:
      "Designed around your logo and colors, with no page-builder templates.",
  },
  {
    title: "A way to start a file",
    description:
      "Every package includes at least one form. On a full website, I can connect the form tool you already use, like Cognito Forms or Jotform.",
  },
  {
    title: "Works on every screen",
    description:
      "Mobile, tablet, and desktop layouts, fast loading, and the accessibility basics: readable contrast, keyboard navigation, and labeled forms.",
  },
  {
    title: "Set up for search",
    description:
      "Page titles, descriptions, and social share previews, so search results and shared links show your business properly.",
  },
  {
    title: "Yours to keep",
    description:
      "Once it’s paid in full, your content, domain, and site are yours. You get a walkthrough at launch and a 14-day window to fix anything that isn’t working.",
  },
];

const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
const andList = (items: string[]) =>
  items.slice(0, -1).join(", ") + ", and " + items[items.length - 1];

const faqs = [
  {
    q: "How is this different from a template or a DIY site?",
    a: "A template gives you a layout, and you still write every word. With me, you answer a questionnaire, I write the copy, and then I design and build the site around it. A DIY site can work if you have the time to write it well.",
  },
  {
    q: "I’m just starting out. Is it too early for a website?",
    a: "Not if agents are going to look you up, and they will. A one-page site covers what you handle, how to start a file, who you are, and how to reach you, and it can grow into a full website later without starting over.",
  },
  {
    q: "Do you write the copy, or do I?",
    a: "I do, in every package. You answer a questionnaire about your services and how you work, I write the pages, and you review them before anything is designed.",
  },
  {
    q: "What do you build the site with?",
    a: "I build each site by hand with modern web code, not a page builder, and host it as part of hosting & care. Small edits, like text changes or a photo swap, are included each month. If you ever move hosting, you get a complete copy of your site files.",
  },
  {
    q: "How much does a TC website cost?",
    a:
      andList(
        packages.map(
          (p) => `${tcNames[p.id]} (${lowerFirst(p.name)}) is ${p.price}`,
        ),
      ) +
      `. Hosting & care is ${hosting.price} after the first month, and My TC Academy students get three more months free.`,
  },
  {
    q: "How long does a project take?",
    a:
      andList(
        packages.map(
          (p, i) =>
            `${i ? lowerFirst(p.timeline) : p.timeline} for ${tcNames[p.id]}`,
        ),
      ) + ". The schedule starts when your questionnaire and photos are in.",
  },
  {
    q: "What’s the My TC Academy perk?",
    a: `Three extra months of hosting & care, free. Every client gets the first month included; students get four months before the ${hosting.price} starts. Package prices are the same for everyone.`,
  },
  {
    q: "Can you improve a website I already have?",
    a: "Yes. Tell me what you have and what isn’t working, and I’ll recommend the package that fits, or a smaller quoted fix if that’s all it needs. The student perk applies either way.",
  },
];

const contactHref = "/contact?source=mytcacademy";

export default function MyTCAcademyPage() {
  const featured = [
    "structured-closings",
    "tag-landing-page",
    "pa-real-estate-support",
    "haven-compass-realty",
  ].map((slug) => getProjectBySlug(slug)!);

  return (
    <>
      <section className="studio-shell page-intro academy-hero">
        <div>
          <p className="eyebrow">Private referral · My TC Academy</p>
          <h1>
            A website for the TC business you’re <em>building.</em>
          </h1>
          <p className="intro-copy">
            I’m Haydn. I design, write, and build websites for transaction
            coordinators. Jennifer Cortes shared this page with My TC Academy
            students, and I’ve built websites for two of her businesses,
            Structured Closings and Transaction Authority Group.
          </p>
          <div className="hero-actions">
            <Link href={contactHref} className="btn-primary">
              Start a conversation <span aria-hidden="true">→</span>
            </Link>
            <a href="#packages" className="text-link">
              See the packages ↓
            </a>
          </div>
          <p className="hero-price">
            I reply within one business day. No pressure.
          </p>
        </div>
        <div className="academy-panel">
          <h2>For My TC Academy students</h2>
          <p>
            This page isn’t listed on the site. It has the same packages and
            prices as everyone else, plus three extra months of free hosting &
            care for students.
          </p>
          <ul className="check-list">
            {[
              "Built by someone whose mom has been a TC since 2013",
              "One person from the first call through launch and after",
              "I write the copy; you review it",
              "A simple way for agents to start a file, in every package",
              "3 extra months of free hosting & care for students",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="studio-shell studio-section rule-top">
        <SectionHeading title="The first thing an agent does is look you up.">
          <p className="section-aside">
            Before an agent sends you a first file, they check two things: what
            you handle, and whether you look organized. Your website answers
            both.
          </p>
        </SectionHeading>
        <div className="feature-list">
          {whyWebsite.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tint-band">
        <div className="studio-shell studio-section">
          <SectionHeading title="What you get">
            <p className="section-aside">
              Every package includes the writing, the design, and the build,
              all done by me.
            </p>
          </SectionHeading>
          <div className="reasons-grid">
            {included.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="studio-shell studio-section">
        <SectionHeading title="Three packages, one for each stage." />
        <p className="academy-perk">
          <strong>My TC Academy perk:</strong> every client gets the first month
          of hosting & care included. Students get three more months free, so
          the {hosting.price} starts in month five.
        </p>
        <div className="package-grid">
          {packages.map((p) => (
            <article
              key={p.id}
              className={"package-card" + (p.id === "full" ? " featured" : "")}
            >
              <p className="eyebrow">{p.name}</p>
              <h3>{tcNames[p.id]}</h3>
              <strong className="price-large">{p.price}</strong>
              <p className="package-best">{p.bestFor}</p>
              <dl className="package-facts">
                <div>
                  <dt>Pages</dt>
                  <dd>{p.audiencePages.tc}</dd>
                </div>
                <div>
                  <dt>Timeline</dt>
                  <dd>{p.timeline}</dd>
                </div>
              </dl>
              <Link
                className="btn-primary"
                href={packageContactHref(
                  { ...p, name: tcNames[p.id] + " (" + p.name + ")" },
                  "mytcacademy",
                )}
                aria-label={"Discuss " + tcNames[p.id]}
              >
                Discuss {tcNames[p.id]} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
        <p className="scope-note">
          <Link
            href="/transaction-coordinators?source=mytcacademy#packages"
            className="text-link"
          >
            View full package details →
          </Link>
        </p>
      </section>

      <section className="studio-shell studio-section rule-top split-section">
        <div>
          <h2>Same prices, plus hosting for students.</h2>
          <p className="mt-5">
            Students pay the same package prices as everyone else. The
            difference is hosting & care: every client gets the first month
            included, and My TC Academy students get three more months free.
          </p>
        </div>
        <div>
          <h3 className="steps-list-title">How it works</h3>
          <ol className="steps-list">
            <li>
              Tell me about your business through this page. The form notes
              that you’re a My TC Academy student.
            </li>
            <li>
              If it looks like a fit, we have a short call about your business
              and what the site needs to do.
            </li>
            <li>
              You get a written proposal with your pages, timeline, and price,
              including the extra hosting months, within two business days of
              the call.
            </li>
          </ol>
        </div>
      </section>

      <section className="tint-band">
        <div className="studio-shell studio-section">
          <SectionHeading title="Websites I’ve built for TCs and real estate businesses">
            <Link href="/work?source=mytcacademy" className="text-link">
              All client work →
            </Link>
          </SectionHeading>
          <div className="project-grid">
            {featured.map((p) => (
              <ProjectTile key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <FaqList faqs={faqs} title="Common questions" />

      <section className="project-cta">
        <div className="studio-shell cta-layout">
          <h2>Tell me about your TC business.</h2>
          <div>
            <p>
              I’ll reply personally within one business day with a few
              questions or a recommended package. Your three extra months of
              hosting & care are written into the proposal.
            </p>
            <Link href={contactHref} className="btn-on-dark">
              Start a conversation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
