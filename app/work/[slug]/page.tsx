import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllProjectSlugs,
  getClientProjects,
  getProjectBySlug,
} from "@/content/projects";
import { getPackage, packageContactHref } from "@/content/packages";
import {
  BrowserFrame,
  ProjectCTA,
  SectionHeading,
} from "@/components/marketing/Studio";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const p = getProjectBySlug((await params).slug);
  if (!p) return { title: "Project not found" };
  return createPageMetadata({
    title: p.metaTitle || p.title,
    description: p.metaDescription || p.description,
    path: "/work/" + p.slug,
    robots: p.featured ? undefined : { index: false, follow: true },
  });
}

function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

export default async function CaseStudy({ params }: Props) {
  const p = getProjectBySlug((await params).slug);
  if (!p) notFound();
  // Case studies are client work only (brief §5).
  if (p.kind !== "Client" || !p.story) notFound();

  const story = p.story;
  const pkg = story.package ? getPackage(story.package) : undefined;
  const clients = getClientProjects();
  const next = clients[(clients.indexOf(p) + 1) % clients.length];
  // When the hero is also the first annotated screenshot, show it once.
  const heroInSteps = p.process.some((s) => s.image === p.heroImage);
  const startingPoint = [
    ...(story.relationship ? [story.relationship] : []),
    ...(story.startingPoint ?? []),
  ];

  return (
    <>
      <header className="studio-shell page-intro case-header">
        <Link href="/work" className="text-link">
          ← Client work
        </Link>
        <p className="eyebrow mt-8">
          {[story.businessType, pkg?.name, p.year].filter(Boolean).join(" · ")}
        </p>
        <h1>{p.title}</h1>
        <p className="intro-copy">{story.summary}</p>
        {p.externalUrl && (
          <div className="hero-actions">
            <a
              href={p.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit live site <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        )}
      </header>

      <section className="studio-shell">
        {!heroInSteps && (
          <BrowserFrame
            src={p.heroImage}
            alt={"The " + p.title + " homepage"}
            url={p.externalUrl}
            width={1920}
            height={1080}
            sizes="(max-width: 1300px) 100vw, 1240px"
            priority
          />
        )}
        <dl className="case-snapshot">
          <div>
            <dt>Client</dt>
            <dd>{p.client}</dd>
          </div>
          {story.location && (
            <div>
              <dt>Location</dt>
              <dd>{story.location}</dd>
            </div>
          )}
          <div>
            <dt>Type of business</dt>
            <dd>{story.businessType}</dd>
          </div>
          <div>
            <dt>What I did</dt>
            <dd>{story.whatIDid}</dd>
          </div>
          {pkg && (
            <div>
              <dt>Package</dt>
              <dd>
                <Link href="/pricing" className="text-link">
                  {pkg.name}
                </Link>
              </dd>
            </div>
          )}
          {p.externalUrl && (
            <div>
              <dt>Live site</dt>
              <dd>
                <a
                  href={p.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  {hostname(p.externalUrl)} ↗
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </dd>
            </div>
          )}
        </dl>
      </section>

      {startingPoint.length > 0 && (
        <section className="studio-shell studio-section split-section">
          <h2>The starting point</h2>
          <div>
            {startingPoint.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </section>
      )}

      <section className="studio-shell studio-section rule-top">
        <SectionHeading title="What I built" />
        <div className="case-steps">
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

      {story.decisions?.length ? (
        <section className="tint-band">
          <div className="studio-shell studio-section">
            <SectionHeading title="Decisions worth noting" />
            <div className="reasons-grid">
              {story.decisions.map((d) => (
                <div key={d.title}>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Renders only with an approved quote (brief §5.3). */}
      {p.testimonial && (
        <section className="studio-shell studio-section">
          <blockquote className="client-quote">
            <p>“{p.testimonial.quote}”</p>
            <cite>
              {p.testimonial.author}, {p.testimonial.role}
            </cite>
          </blockquote>
        </section>
      )}

      {/* Renders only with confirmed, sourced results (brief §5.5). */}
      {p.outcomes.length > 0 && (
        <section className="studio-shell studio-section">
          <SectionHeading title="Results" />
          <dl className="case-snapshot">
            {p.outcomes.map((o) => (
              <div key={o.metric}>
                <dt>{o.metric}</dt>
                <dd>
                  <strong>{o.value}</strong> {o.description}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {pkg && (
        <section className="studio-shell studio-section rule-top split-section">
          <div>
            <p className="eyebrow">A project like this</p>
            <h2>
              {pkg.name}, {pkg.price}
            </h2>
          </div>
          <div>
            <p>{pkg.summary}</p>
            <div className="hero-actions">
              <Link
                href={packageContactHref(pkg, "case-study-" + p.slug)}
                className="btn-primary"
              >
                Start a project like this <span aria-hidden="true">→</span>
              </Link>
              <Link href="/pricing" className="text-link">
                Compare packages →
              </Link>
            </div>
          </div>
        </section>
      )}

      {next && next.slug !== p.slug && (
        <nav className="studio-shell next-case" aria-label="Next case study">
          <span className="eyebrow">Next case study</span>
          <Link href={"/work/" + next.slug}>{next.title} →</Link>
        </nav>
      )}
      <ProjectCTA />
    </>
  );
}
