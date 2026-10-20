import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Project } from "@/content/projects";
import type { Faq } from "@/content/faqs";
import {
  packages,
  hosting,
  packageContactHref,
  type Audience,
} from "@/content/packages";

export function PageIntro({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  body: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="studio-shell page-intro">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      <p className="intro-copy">{body}</p>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="section-top">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function hostname(url?: string) {
  if (!url) return undefined;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return undefined;
  }
}

/** The one frame used for every client screenshot on the site. */
export function BrowserFrame({
  src,
  alt,
  url,
  priority = false,
  sizes = "(max-width: 800px) 100vw, 50vw",
  width = 1600,
  height = 1200,
}: {
  src: string;
  alt: string;
  url?: string;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
}) {
  const host = hostname(url);
  return (
    <div className="browser-frame">
      <div className="browser-bar" aria-hidden="true">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        {host && <span className="browser-url">{host}</span>}
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        fetchPriority={priority ? "high" : undefined}
      />
    </div>
  );
}

export function ProjectTile({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const href = "/work/" + project.slug;
  return (
    <article className="project-tile">
      {/* Duplicate of the title link, hidden from assistive tech and tab order. */}
      <Link
        href={href}
        className="project-image-link"
        tabIndex={-1}
        aria-hidden="true"
      >
        <BrowserFrame
          src={project.heroImage || project.thumbnail}
          alt={project.title + " website"}
          url={project.externalUrl}
          width={1920}
          height={1080}
          priority={priority}
        />
      </Link>
      <div className="project-tile-caption">
        <div>
          <p className="eyebrow">
            {project.story?.businessType ?? project.category}
            {project.story?.location ? " · " + project.story.location : ""}
          </p>
          <h3>
            <Link href={href}>{project.title}</Link>
          </h3>
        </div>
        <span className="project-year">{project.year}</span>
      </div>
      <p className="project-description">{project.tagline}</p>
    </article>
  );
}

export function FaqList({
  faqs,
  title = "Questions people ask first",
}: {
  faqs: Faq[];
  title?: string;
}) {
  return (
    <section className="studio-shell studio-section faq-section">
      <div>
        <p className="eyebrow">FAQ</p>
        <h2>{title}</h2>
      </div>
      <div>
        {faqs.map(({ q, a }) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/** Package cards for an audience page or the pricing summary. */
export function PackageCards({
  audience,
  source,
}: {
  audience: Audience;
  source: string;
}) {
  return (
    <>
      <div className="package-grid">
        {packages.map((p) => (
          <article
            key={p.id}
            className={"package-card" + (p.id === "full" ? " featured" : "")}
          >
            <h3>{p.name}</h3>
            <strong className="price-large">{p.price}</strong>
            <p className="package-best">{p.bestFor}</p>
            <dl className="package-facts">
              <div>
                <dt>Pages</dt>
                <dd>{p.audiencePages[audience]}</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>{p.timeline}</dd>
              </div>
            </dl>
            <Link
              className="btn-primary"
              href={packageContactHref(p, source)}
              aria-label={"Discuss the " + p.name + " package"}
            >
              Discuss this package <span aria-hidden="true">→</span>
            </Link>
            <p className="package-example">
              Example:{" "}
              {p.examples.map((e, i) => (
                <span key={e.slug}>
                  {i > 0 && " · "}
                  <Link href={"/work/" + e.slug}>{e.title}</Link>
                </span>
              ))}
            </p>
          </article>
        ))}
      </div>
      <p className="scope-note">
        Hosting & care is {hosting.price} after your first month.{" "}
        <Link href="/pricing" className="text-link">
          Full details on the pricing page →
        </Link>
      </p>
    </>
  );
}

export function ProjectCTA() {
  return (
    <section className="project-cta">
      <div className="studio-shell cta-layout">
        <h2>Tell me about your business.</h2>
        <div>
          <p>
            I’ll reply personally within one business day with a few questions
            or a recommended package. No pressure, and no newsletter.
          </p>
          <Link href="/contact?source=closing-cta" className="btn-on-dark">
            Start a project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="studio-shell studio-section">
      <SectionHeading title="How a project works" />
      <ol className="process-grid">
        {[
          [
            "1",
            "Talk it through.",
            "A 20-minute call about your business and what the site needs to do. You get a written proposal within two business days.",
          ],
          [
            "2",
            "Write, then design.",
            "You answer a short questionnaire; I write the copy, then design around it. You review each step.",
          ],
          [
            "3",
            "Build and launch.",
            "I build on a private preview link, test every form, connect your domain, and walk you through the finished site.",
          ],
        ].map(([n, t, d]) => (
          <li key={n}>
            <span className="step-number">{n}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
