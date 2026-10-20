import Image from "next/image";
import Link from "next/link";
import { getHomeFeaturedProjects, getProjectBySlug } from "@/content/projects";
import { packages, hosting } from "@/content/packages";
import { homeFaqs } from "@/content/faqs";
import {
  BrowserFrame,
  FaqList,
  ProjectTile,
  ProjectCTA,
  Process,
  SectionHeading,
} from "@/components/marketing/Studio";
import { createPageMetadata } from "@/lib/seo";

const title =
  "Websites for Transaction Coordinators, Agents & Brokerages | Multimedium";

export const metadata = {
  ...createPageMetadata({
    title,
    description:
      "Custom websites for transaction coordinators, real estate agents, and brokerages, designed, written, and built by Haydn. One-page sites from $750. Full websites from $1,500.",
    path: "/",
  }),
  // The root layout's title template doesn't apply to the root page itself.
  title: { absolute: title },
};

const proofBar = [
  "haven-compass-realty",
  "structured-closings",
  "pa-real-estate-support",
  "tag-landing-page",
];

export default function HomePage() {
  const recent = getHomeFeaturedProjects();
  const haven = getProjectBySlug("haven-compass-realty")!;
  return (
    <>
      <section className="studio-shell home-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            Web design for transaction coordinators, agents & brokerages
          </p>
          <h1>
            Websites for the people who get deals to the{" "}
            <em>closing table.</em>
          </h1>
          <p className="hero-description">
            I’m Haydn. I design, write, and build websites for real estate
            professionals: sites that explain what you do in plain terms, look
            as organized as you are, and make it easy to hire you, start a file,
            or book a consultation.
          </p>
          <div className="hero-actions">
            <Link href="/contact?source=home-hero" className="btn-primary">
              Start a project <span aria-hidden="true">→</span>
            </Link>
            <Link href="/pricing" className="text-link">
              See pricing →
            </Link>
          </div>
          <p className="hero-price">
            One-page sites from {packages[0].price} · Full websites from{" "}
            {packages[1].price}
          </p>
        </div>
        <figure className="hero-work">
          <BrowserFrame
            src={haven.heroImage}
            alt="The Haven Compass Realty homepage: “A clear path home.” with buttons to request a consultation or explore selling"
            url={haven.externalUrl}
            width={1920}
            height={1080}
            sizes="(max-width: 800px) 100vw, 50vw"
            priority
          />
          <figcaption>
            Haven Compass Realty, a new Connecticut brokerage.{" "}
            <Link href="/work/haven-compass-realty" className="text-link">
              View the case study →
            </Link>
          </figcaption>
        </figure>
      </section>

      <div className="proof-bar">
        <div className="studio-shell">
          <p className="eyebrow">Recent work for</p>
          <ul>
            {proofBar.map((slug) => {
              const p = getProjectBySlug(slug)!;
              return (
                <li key={slug}>
                  <Link href={"/work/" + slug}>{p.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <section className="studio-shell studio-section">
        <SectionHeading title="Who I build for" />
        <div className="path-grid">
          <Link href="/transaction-coordinators">
            <h3>Transaction coordinators & TC companies</h3>
            <p>
              Agents decide whether to send you a file after a quick look at
              your site. I make what you handle, what it costs, and how to start
              a file obvious.
            </p>
            <span className="text-link">Websites for TCs →</span>
          </Link>
          <Link href="/agents-and-brokerages">
            <h3>Agents & brokerages</h3>
            <p>
              Your own brand, not a franchise template, with clear paths for
              buyers and sellers, honest service details, and your real reviews.
            </p>
            <span className="text-link">
              Websites for agents & brokerages →
            </span>
          </Link>
        </div>
      </section>

      <section className="tint-band">
        <div className="studio-shell studio-section">
          <SectionHeading title="Recent work">
            <Link href="/work" className="text-link">
              All client work →
            </Link>
          </SectionHeading>
          <div className="project-grid">
            {recent.map((p) => (
              <ProjectTile key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="studio-shell studio-section">
        <SectionHeading title="Why real estate professionals hire me" />
        <div className="reasons-grid">
          <div>
            <h3>I know the business.</h3>
            <p>
              My mom, Debbie O’Brien, has been a transaction coordinator since
              2013 and runs her own TC business in the Poconos. I also build
              software for TCs, including Norma and UtilitySheet. You won’t have
              to explain what a cover sheet or a file start is.
            </p>
          </div>
          <div>
            <h3>One person, start to finish.</h3>
            <p>
              The person on your first call writes your copy, designs your site,
              builds it, and answers your email after launch. Nothing gets lost
              in a handoff.
            </p>
          </div>
          <div>
            <h3>Clear prices, clear scope.</h3>
            <p>
              Packages start at {packages[0].price}, and you’ll see exactly
              what’s included in writing before you pay anything.
            </p>
          </div>
        </div>
      </section>

      <section className="studio-shell studio-section rule-top">
        <SectionHeading title="Three ways to work together">
          <Link href="/pricing" className="text-link">
            Compare packages →
          </Link>
        </SectionHeading>
        <div className="price-row">
          {packages.map((p) => (
            <div key={p.id}>
              <h3>{p.name}</h3>
              <strong>{p.price}</strong>
              <p>{p.summary}</p>
            </div>
          ))}
        </div>
        <p className="scope-note">
          Hosting & care is {hosting.price}, and your first month is included.
        </p>
      </section>

      <Process />

      <section className="founder-band">
        <div className="studio-shell founder-grid">
          <Image
            src="/images/haydn-portrait/haydn-portrait-square.webp"
            alt="Haydn, the designer and developer behind Multimedium"
            width={420}
            height={420}
            sizes="(max-width: 700px) 70vw, 300px"
          />
          <div>
            <h2>Hi, I’m Haydn.</h2>
            <p>
              I’m a designer and developer based in the Poconos, PA, working
              with real estate clients across the US and Puerto Rico. My mom’s
              TC business is one of my clients, and it’s where I learned what
              agents actually need from a coordinator’s website.
            </p>
            <Link href="/about" className="text-link">
              More about me →
            </Link>
          </div>
        </div>
      </section>

      <FaqList faqs={homeFaqs} />
      <ProjectCTA />
    </>
  );
}
