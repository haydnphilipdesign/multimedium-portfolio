import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllProjectSlugs, getProjectBySlug } from "@/content/projects";
import { ProjectCTA } from "@/components/marketing/Studio";
import { createPageMetadata } from "@/lib/seo";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const p = getProjectBySlug((await params).slug);
  if (!p) return { title: "Project not found" };
  return createPageMetadata({
    title: p.metaTitle || p.title,
    description: p.description,
    path: "/work/" + p.slug,
    robots: p.featured ? undefined : { index: false, follow: true },
  });
}
export default async function CaseStudy({ params }: Props) {
  const p = getProjectBySlug((await params).slug);
  if (!p) notFound();
  return (
    <>
      <div className="studio-shell page-intro">
        <Link
          href={
            p.kind === "Client"
              ? "/work"
              : p.kind === "Product"
                ? "/tools"
                : "/lab"
          }
          className="text-link"
        >
          ←{" "}
          {p.kind === "Client"
            ? "Client work"
            : p.kind === "Product"
              ? "Products"
              : "Design lab"}
        </Link>
        <p className="eyebrow mt-8">
          {p.kind === "Client"
            ? "Client website"
            : p.kind === "Product"
              ? "Independent product"
              : p.kind === "Concept"
                ? "Self-initiated concept · fictional business"
                : "Personal project"}{" "}
          / {p.year}
        </p>
        <h1>{p.title}</h1>
        <p className="intro-copy">{p.tagline}</p>
        <div className="hero-actions">
          {p.externalUrl && (
            <a
              href={p.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit {p.kind === "Concept" ? "demo" : "live site"} ↗
            </a>
          )}
          <Link
            href={"/contact?source=project-" + p.slug}
            className="text-link"
          >
            Discuss a project like this ↗
          </Link>
        </div>
      </div>
      <section className="studio-shell">
        <div className="case-hero">
          <Image
            src={p.heroImage}
            alt={p.title + " website overview"}
            width={1600}
            height={1100}
            sizes="(max-width:800px) 100vw, 1240px"
            priority
          />
        </div>
        <div className="case-overview studio-section">
          <div>
            <p className="eyebrow">The project</p>
            <h2>
              {p.kind === "Client"
                ? "A site built around the business."
                : "Design and development in practice."}
            </h2>
            <p className="mt-6 text-muted-foreground">{p.description}</p>
          </div>
          <dl>
            <div>
              <dt>My role</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{p.category}</dd>
            </div>
            <div>
              <dt>Built with</dt>
              <dd>{p.tools.join(" · ")}</dd>
            </div>
          </dl>
        </div>
        <div className="case-story">
          <section>
            <p className="eyebrow">01 / The challenge</p>
            <h2>What the site needed to solve.</h2>
            <p>{p.problem}</p>
          </section>
          <section>
            <p className="eyebrow">02 / The approach</p>
            <h2>How I approached it.</h2>
            <p>{p.solution}</p>
          </section>
        </div>
        {p.caseStudy?.delivered?.length ? (
          <section className="studio-section">
            <p className="eyebrow">What was delivered</p>
            <ul className="deliverables">
              {p.caseStudy.delivered.map((t) => (
                <li key={t}>
                  <span aria-hidden="true">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <div className="case-gallery">
          {p.images
            .filter((src) => src !== p.heroImage)
            .map((src, i) => (
              <figure key={src}>
                <Image
                  src={src}
                  alt={p.title + " — website detail " + (i + 1)}
                  width={1440}
                  height={1000}
                  sizes="(max-width:800px) 100vw, 60vw"
                />
                <figcaption>
                  Website detail / {String(i + 1).padStart(2, "0")}
                </figcaption>
              </figure>
            ))}
        </div>
        {p.testimonial && (
          <blockquote className="studio-section text-2xl">
            “{p.testimonial.quote}”
            <cite className="block text-sm mt-4">
              {p.testimonial.author}, {p.testimonial.role}
            </cite>
          </blockquote>
        )}
      </section>
      <ProjectCTA />
    </>
  );
}
