import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import {
  ProjectTile,
  ProjectCTA,
  Process,
} from "@/components/marketing/Studio";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Custom Web Design for Small & Service Businesses",
  description:
    "Custom websites by independent designer and developer Haydn. Thoughtful design, clear communication, and technical depth. Full websites from $1,500.",
  path: "/",
});
export default function HomePage() {
  const selected = ["tag-landing-page", "blissful-existence"].map(
    (s) => projects.find((p) => p.slug === s)!,
  );
  return (
    <>
      <section className="studio-shell home-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="small-cross" aria-hidden="true">
              ✳
            </span>{" "}
            Independent web design & development
          </p>
          <h1>
            Good businesses
            <br />
            deserve{" "}
            <em>
              better
              <br className="desktop-break" /> websites.
            </em>
          </h1>
          <p className="hero-description">
            Custom websites that make your business look the part—and make it
            easier for the right customers to get in touch.
          </p>
          <div className="hero-actions">
            <Link href="/contact?source=home-hero" className="btn-primary">
              Start a project <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/work" className="text-link">
              Explore the work <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <p className="hero-price">
            Full websites from <strong>$1,500</strong> · One-page sites from{" "}
            <strong>$750</strong>
          </p>
        </div>
        <div className="hero-work">
          <div className="hero-work-top">
            <span>SELECTED CLIENT WORK / 01</span>
            <span aria-hidden="true">↗</span>
          </div>
          <Link href="/work/pa-real-estate-support" className="hero-screen">
            <Image
              src="/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-hero.webp"
              alt="PA Real Estate Support Services custom website"
              width={1440}
              height={1000}
              priority
              fetchPriority="high"
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </Link>
          <div className="hero-work-caption">
            <div>
              <strong>PA Real Estate Support Services</strong>
              <span>Strategy · Design · Development</span>
            </div>
            <Link
              href="/work/pa-real-estate-support"
              aria-label="View project: PA Real Estate Support Services"
            >
              View project ↗
            </Link>
          </div>
          <div className="hero-work-note">
            <span aria-hidden="true">✳</span> Real businesses. Thoughtfully
            built.
          </div>
        </div>
      </section>
      <div className="expertise-strip">
        <div className="studio-shell">
          <span>Built around your business</span>
          <span>Custom design & code</span>
          <span>Direct access to your designer</span>
          <span>Support after launch</span>
        </div>
      </div>
      <section className="studio-shell studio-section">
        <div className="section-top">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>
              Different businesses.
              <br />
              <em>The same care.</em>
            </h2>
          </div>
          <Link href="/work" className="text-link">
            View all client work ↗
          </Link>
        </div>
        <div className="project-grid">
          {selected.map((p) => (
            <ProjectTile key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <section className="services-band">
        <div className="studio-shell studio-section">
          <div className="section-top">
            <div>
              <p className="eyebrow">What I can help with</p>
              <h2>
                A website that fits
                <br />
                where you’re going.
              </h2>
            </div>
            <p className="section-aside">
              Starting fresh, outgrowing your old site, or finally making your
              business look as good online as it is in person.
            </p>
          </div>
          <div className="offer-grid">
            {[
              [
                "01",
                "Custom websites",
                "A complete website or redesign shaped around your services, your customers, and your next stage of business.",
                "From $1,500",
                "/services/website",
              ],
              [
                "02",
                "One-page websites",
                "A focused home for your business, a new offer, or a campaign—with a clear path from interest to inquiry.",
                "From $750",
                "/services/landing-pages",
              ],
              [
                "03",
                "Hosting & support",
                "A dependable home for your site, with maintenance and a familiar person to turn to when you need help.",
                "From $59/month",
                "/services/growth-retainers",
              ],
            ].map(([n, t, d, p, h]) => (
              <article key={n}>
                <span className="eyebrow">{n} /</span>
                <h3>{t}</h3>
                <p>{d}</p>
                <div>
                  <strong>{p}</strong>
                  <Link href={h} aria-label={"Explore " + t.toLowerCase()}>
                    Explore ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="scope-note">
            Need visual direction, lead capture, integrations, or a custom
            workflow? We can include those in your project scope.
          </p>
        </div>
      </section>
      <section className="studio-shell studio-section specialty-section">
        <div>
          <p className="eyebrow">A specialty, built on experience</p>
          <h2>
            Especially fluent
            <br />
            in <em>real estate.</em>
          </h2>
        </div>
        <div>
          <p className="large-copy">
            Transaction coordinators, real estate professionals, and the
            businesses around them: I know your world.
          </p>
          <p>
            From explaining your value to agents to making intake easier, I
            bring relevant client work and hands-on industry knowledge. You
            won’t have to explain the basics before we can make progress.
          </p>
          <Link href="/tc-packages" className="text-link">
            Explore TC website packages ↗
          </Link>
        </div>
      </section>
      <Process />
      <section className="founder-band">
        <div className="studio-shell founder-grid">
          <Image
            src="/images/haydn-portrait/haydn-portrait-square.webp"
            alt="Haydn, independent designer and developer behind Multimedium"
            width={420}
            height={420}
            sizes="(max-width: 700px) 70vw, 300px"
          />
          <div>
            <p className="eyebrow">Meet your designer & developer</p>
            <h2>
              Hi, I’m Haydn.
              <br />
              <em>I’ll be the one building it.</em>
            </h2>
            <p>
              I work directly with small business owners to turn a good business
              into a clear, credible online presence. Design, development, and
              communication all stay with me.
            </p>
            <p>
              I also build my own software products, including Norma Suite. That
              technical depth comes with your website—whether you need a simple
              inquiry form or something more connected.
            </p>
            <Link href="/about" className="text-link">
              A little more about me ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="studio-shell studio-section faq-section">
        <div>
          <p className="eyebrow">Before we talk</p>
          <h2>A few good questions.</h2>
        </div>
        <div>
          {[
            [
              "What does a custom website cost?",
              "Full websites start at $1,500, with larger or more involved projects at $3,000 and above. Focused one-page projects start at $750. I’ll quote your project based on its pages, content, and functionality before work begins.",
            ],
            [
              "Do you only work with real estate businesses?",
              "No. I work with small businesses and service providers across industries. Transaction coordination and real estate are specialties, supported by relevant client work.",
            ],
            [
              "Can you improve my existing website?",
              "Yes. We’ll look at what is working, what is holding the site back, and whether an update or a full redesign is the better fit.",
            ],
            [
              "What if I need help after launch?",
              "Hosting and maintenance start at $59/month. We’ll agree on the support included, with larger updates and new functionality quoted separately.",
            ],
          ].map(([q, a]) => (
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
      <ProjectCTA />
    </>
  );
}
