import type { Metadata } from "next";
import Link from "next/link";
import {
  FaqList,
  ProjectTile,
  SectionHeading,
} from "@/components/marketing/Studio";
import { getProjectBySlug } from "@/content/projects";
import { packages, packageContactHref } from "@/content/packages";

export const metadata: Metadata = {
  title: "My TC Academy Students: Private Referral",
  description:
    "A private referral page for My TC Academy students. Web design built specifically for transaction coordinators: professional messaging, fast performance, and pages that turn visitors into real leads.",
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
    title: "Instant credibility",
    description:
      "Agents and clients check you out before they reach out. A polished site signals that you run a real operation, not a side hustle.",
  },
  {
    title: "Explain your services clearly",
    description:
      "Most TC websites bury the offer. A clear, well-structured page tells prospects exactly what you do, who you serve, and why you're the right fit, before the first call.",
  },
  {
    title: "Stand out in a growing field",
    description:
      "More people are becoming TCs every year. A generic template or a basic Wix page won't differentiate you. Your website should reflect the same professionalism you bring to every transaction.",
  },
  {
    title: "Build a stronger foundation",
    description:
      "Your website is the hub for everything: referrals, testimonials, intake, and positioning. Getting it right early means you grow on solid ground instead of patching things together later.",
  },
];

const included = [
  {
    title: "Positioning + messaging",
    description:
      "We define who you serve, what you offer, and why someone should choose you, written in language that resonates with agents and clients, not generic filler.",
  },
  {
    title: "Custom design, not a template",
    description:
      "A professional, mobile-first design built around your brand, not a cookie-cutter theme with your logo pasted on top.",
  },
  {
    title: "Lead capture that qualifies",
    description:
      "Contact forms, intake flows, and CTAs designed to attract the right leads and filter out the ones that waste your time.",
  },
  {
    title: "Fast, polished, and accessible",
    description:
      "Speed and mobile performance built in from the start, because most of your visitors are checking you out from their phones.",
  },
  {
    title: "Copy + content guidance",
    description:
      "Messaging and page copy are part of the build. You won't be left staring at blank sections trying to figure out what to write.",
  },
  {
    title: "Launch-ready and easy to maintain",
    description:
      "A clean, modern build that doesn't require a developer on retainer to update. You'll own the site and be able to grow with it.",
  },
];

const faqs = [
  {
    q: "How is this different from a template or DIY site?",
    a: "Templates give you a layout. This gives you a strategy. We start with your positioning (who you serve, what you offer, and why you're the right choice) and build a site around that. The result looks, reads, and converts better because it was built for your specific business, not for a generic audience.",
  },
  {
    q: "I'm just starting out. Is it too early to invest in a website?",
    a: "It's actually the best time. You're building your reputation right now, and the agents, brokers, and clients you want to work with are going to look you up. A professional site gives you credibility from day one and a foundation you can grow with, instead of something you'll need to replace in six months.",
  },
  {
    q: "Do you write the copy, or do I need to provide it?",
    a: "Copy and messaging are included. We'll work together to define your offer, services, and positioning. Then I'll write the page content so it sounds like you, speaks to the right audience, and drives action. You won't be staring at blank pages.",
  },
  {
    q: "What platform do you build on?",
    a: "It depends on your needs and goals. I work with modern frameworks and platforms and will recommend the best option for your situation, whether that's a custom build, a headless CMS, or a managed platform. The goal is a site that's fast, clean, and easy for you to maintain.",
  },
  {
    q: "How much does a TC website cost?",
    a: "TC Starter (a one-page site) is $750. TC Growth (a full website with up to 5 pages and intake) is $1,500. TC Pro (a custom build) starts at $3,000. Every project includes the first month of hosting & care, and as a My TC Academy student you get 3 more months on top: four months before the $59/month begins.",
  },
  {
    q: "How long does a project typically take?",
    a: "TC Starter takes about 2 weeks. TC Growth takes about 3–4 weeks. TC Pro takes about 5–8 weeks. I'll give you a clear timeline after we talk through your goals.",
  },
  {
    q: "What's the My TC Academy referral perk?",
    a: "Every project includes the first month of hosting & care. Because Jennifer sent you, you get 3 more months on top, so four months total before the $59/month begins (a $177 value on the referral perk). It isn't a discount; it's a perk she set up so her students start without the hosting cost upfront.",
  },
  {
    q: "What if I already have a website and just want it improved?",
    a: "That works too. Whether it's a full rebuild or a focused refresh (better messaging, stronger design, faster performance), we can scope the project to match what you actually need. The referral perk still applies.",
  },
];

// TC-branded names appear only on this page, mapped one-to-one to the
// public packages (brief §7).
const tcNames = {
  "one-page": "TC Starter",
  full: "TC Growth",
  custom: "TC Pro",
} as const;

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
            A website that matches the business you&apos;re building.
          </h1>
          <p className="intro-copy">
            Jennifer connected you with this page because she trusts the work. I
            design websites specifically for transaction coordinators and real
            estate professionals, built to win trust, explain your services
            clearly, and turn visitors into real leads.
          </p>
          <div className="hero-actions">
            <Link href={contactHref} className="btn-primary">
              Start a conversation <span aria-hidden="true">→</span>
            </Link>
            <a href="#why" className="text-link">
              See why it matters ↓
            </a>
          </div>
          <p className="hero-price">
            Response within 1 business day. No pressure, no obligation.
          </p>
        </div>
        <div className="academy-panel">
          <h2>For My TC Academy students</h2>
          <p>
            You&apos;ve already made a serious investment in building your TC
            career. This is a private resource, not a public offer, for
            students who want a web presence that reflects the level of
            professionalism they&apos;re building toward.
          </p>
          <ul className="check-list">
            {[
              "Niche expertise in the TC industry",
              "Strategy, messaging, design, and code, with one point of contact",
              "Positioning that attracts better-fit leads",
              "Sites built to grow with your business",
              "3 months free hosting & care: a My TC Academy perk",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="why" className="studio-shell studio-section rule-top">
        <SectionHeading title="The first thing an agent does is look you up.">
          <p className="section-aside">
            You&apos;re investing in your skills and your business through My
            TC Academy. Your online presence should reflect that same level of
            seriousness.
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
              Every TC website project includes strategy, design, and
              development, built around your specific business and the clients
              you want to attract.
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
          <strong>My TC Academy referral perk:</strong> 3 extra months of free
          hosting & care on top of the first month every project includes. That&apos;s a
          $177 value, because Jennifer sent you.
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
          <h2>Jennifer sent you here for a reason.</h2>
          <p className="mt-5">
            This isn&apos;t a discount page. It&apos;s a private referral
            because Jennifer wants her students to have access to a designer
            who actually understands the TC space. The 3 months of free hosting
            is her way of making sure you&apos;re taken care of.
          </p>
        </div>
        <div>
          <h3 className="steps-list-title">How it works</h3>
          <ol className="steps-list">
            <li>Pick a package and reach out through this page</li>
            <li>
              We&apos;ll have a quick conversation about your business and goals
            </li>
            <li>
              I&apos;ll send a clear proposal with your 3 months free hosting
              included
            </li>
          </ol>
        </div>
      </section>

      <section className="tint-band">
        <div className="studio-shell studio-section">
          <SectionHeading title="Real projects in the TC + real estate space">
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
          <h2>Ready to get your website started?</h2>
          <div>
            <p>
              Pick a package, tell me about your TC business, and mention that
              you&apos;re a My TC Academy student. I&apos;ll respond within one
              business day with a clear proposal. 3 months of free hosting is
              included.
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
