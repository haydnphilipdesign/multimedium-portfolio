import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Item = { label: string; detail: string };

/** Shared layout for the free TC PDF pages under /resources. */
export function ResourceDownload({
  title,
  intro,
  pdf,
  image,
  imageWidth,
  imageHeight,
  imageAlt,
  gettingTitle,
  getting,
  tailoredLabel,
  tailoredSource,
  formAction,
  source,
  sent,
  sentMessage,
  error,
  errorMessage,
  coverageTitle,
  coverageIntro,
  coverage,
  coverageNote,
  ctaTitle,
  ctaBody,
  ctaSource,
}: {
  title: ReactNode;
  intro: string;
  pdf: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  gettingTitle: string;
  getting: string[];
  tailoredLabel: string;
  tailoredSource: string;
  formAction: (formData: FormData) => Promise<void>;
  source: string;
  sent: boolean;
  sentMessage: string;
  error: boolean;
  errorMessage: string;
  coverageTitle: string;
  coverageIntro: string;
  coverage: Item[];
  coverageNote: string;
  ctaTitle: string;
  ctaBody: string;
  ctaSource: string;
}) {
  return (
    <>
      <div className="studio-shell page-intro">
        <Link href="/resources" className="text-link">
          ← Free TC resources
        </Link>
        <p className="eyebrow mt-8">Free resource · PDF</p>
        <h1>{title}</h1>
        <p className="intro-copy">{intro}</p>
        <div className="hero-actions">
          <a href={pdf} className="btn-primary" download>
            Download PDF <span aria-hidden="true">↓</span>
          </a>
          <Link
            href={"/contact?source=" + tailoredSource}
            className="text-link"
          >
            {tailoredLabel} →
          </Link>
        </div>
      </div>

      <section className="studio-shell resource-grid">
        <figure className="resource-preview">
          <Image
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            sizes="(max-width: 800px) 100vw, 60vw"
            quality={68}
            priority
          />
          <figcaption>
            <h2>{gettingTitle}</h2>
            <ul className="check-list">
              {getting.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </figcaption>
        </figure>

        <div className="resource-form">
          <h2>Email me the PDF</h2>
          <p>
            I’ll send the download link. Prefer not to share your email? Use the
            download button above.
          </p>
          {sent && (
            <p className="form-success" role="status">
              {sentMessage}
            </p>
          )}
          {error && (
            <p className="form-error" role="alert">
              {errorMessage}
            </p>
          )}
          <form action={formAction} className="resource-fields">
            <input type="hidden" name="source" value={source} />
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                autoComplete="off"
                tabIndex={-1}
              />
            </div>
            <label>
              Name
              <input
                name="name"
                maxLength={80}
                className="form-control"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                maxLength={254}
                className="form-control"
                placeholder="you@email.com"
                autoComplete="email"
                required
              />
            </label>
            <label>
              Company <span>(optional)</span>
              <input
                name="company"
                maxLength={120}
                className="form-control"
                placeholder="Business name"
                autoComplete="organization"
              />
            </label>
            <button type="submit" className="btn-primary">
              Email me the download link
            </button>
            <p className="form-note">One email. No spam.</p>
          </form>
        </div>
      </section>

      <section className="studio-shell studio-section split-section">
        <div>
          <h2>{coverageTitle}</h2>
          <p className="mt-5">{coverageIntro}</p>
        </div>
        <div>
          <dl className="plain-defs">
            {coverage.map((c) => (
              <div key={c.label}>
                <dt>{c.label}</dt>
                <dd>{c.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6">{coverageNote}</p>
        </div>
      </section>

      <section className="studio-shell studio-section rule-top split-section">
        <h2>{ctaTitle}</h2>
        <div>
          <p>{ctaBody}</p>
          <Link
            href={"/transaction-coordinators?source=" + ctaSource + "#packages"}
            className="text-link"
          >
            See TC website packages →
          </Link>
        </div>
      </section>
    </>
  );
}
