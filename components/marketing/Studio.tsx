import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
export function PageIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="studio-shell page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="intro-copy">{body}</p>
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
  return (
    <article className="project-tile">
      <Link
        href={"/work/" + project.slug}
        className={
          "project-image-link" +
          (project.kind === "Product" ? " product-image-link" : "")
        }
        aria-label={"View " + project.title + " project"}
      >
        <Image
          src={project.heroImage || project.thumbnail}
          alt={project.title + " website design"}
          width={1440}
          height={1000}
          sizes="(max-width: 700px) 100vw, 50vw"
          priority={priority}
        />
        <span className="project-open" aria-hidden="true">
          ↗
        </span>
      </Link>
      <div className="project-tile-caption">
        <div>
          <p className="eyebrow">
            {project.kind !== "Client" ? project.kind + " / " : ""}
            {project.category}
          </p>
          <h3>
            <Link href={"/work/" + project.slug}>{project.title}</Link>
          </h3>
        </div>
        <span className="project-year">{project.year}</span>
      </div>
      <p className="project-description">{project.tagline}</p>
    </article>
  );
}
export function ProjectCTA() {
  return (
    <section className="project-cta">
      <div className="studio-shell">
        <p className="eyebrow">Your next chapter</p>
        <div className="cta-layout">
          <h2>
            Let’s make your website
            <br />
            <em>work as hard as you do.</em>
          </h2>
          <div>
            <p>
              Tell me about your business and what you need. I’ll reply
              personally with a clear next step.
            </p>
            <Link href="/contact?source=closing-cta" className="btn-primary">
              Tell me about your project <span aria-hidden="true">↗</span>
            </Link>
            <span className="cta-note">
              Full websites from $1,500 · One-page sites from $750
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Process() {
  return (
    <section className="studio-shell studio-section">
      <div className="section-top">
        <p className="eyebrow">A clear path to launch</p>
        <h2>One person. Every step.</h2>
      </div>
      <div className="process-grid">
        {[
          [
            "01",
            "Find the right direction",
            "We talk through your business, your customers, and what the website needs to do. You get a clear scope and quote before we begin.",
          ],
          [
            "02",
            "Design with intention",
            "I shape the content and visual direction around your offer. You see the design and give feedback before the full build.",
          ],
          [
            "03",
            "Build, check, launch",
            "I develop the site, connect your forms, and check it on desktop and mobile. After launch, ongoing support is available.",
          ],
        ].map(([n, t, d]) => (
          <div key={n}>
            <span className="step-number">{n}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
