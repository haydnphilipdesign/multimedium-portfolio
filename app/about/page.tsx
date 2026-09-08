import Image from "next/image";
import Link from "next/link";
import { PageIntro, Process, ProjectCTA } from "@/components/marketing/Studio";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Meet Haydn — Designer & Developer",
  description:
    "Meet the independent designer and developer behind Multimedium. Custom websites for small and service businesses, based in the Poconos, Pennsylvania.",
  path: "/about",
});
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="The person behind Multimedium"
        title="Your designer. Your developer. Same person."
        body="I’m Haydn, an independent web designer and developer based in the Poconos, Pennsylvania. I help small businesses put their best foot forward online."
      />
      <section className="studio-shell content-grid about-content">
        <div>
          <h2 className="text-3xl mb-5">
            Good work starts with understanding your business.
          </h2>
          <p>
            I want to know what you do, why your customers choose you, and what
            your current website isn’t getting across. That understanding shapes
            the words, the design, and the way people get in touch.
          </p>
          <p>
            I handle both design and development. You work directly with the
            person making the decisions and building the site, with a clear
            scope, feedback along the way, and support available after launch.
          </p>
          <h2 className="text-3xl mt-10 mb-5">
            Small-business focus.
            <br />
            Real technical depth.
          </h2>
          <p>
            Transaction coordination and real estate are areas I know especially
            well. My portfolio also includes work for other service businesses,
            and I enjoy finding the right visual direction for each one.
          </p>
          <p>
            I build software products too, including Norma Suite. Working with
            forms, integrations, data, and business workflows means I can look
            beyond the surface when your site needs to do more.
          </p>
          <div className="hero-actions">
            <Link href="/contact?source=about" className="btn-primary">
              Work with me ↗
            </Link>
            <Link href="/tools" className="text-link">
              Explore my products ↗
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/images/haydn-portrait/haydn-portrait-desktop.webp"
            alt="Haydn, founder of Multimedium"
            width={640}
            height={800}
            priority
            sizes="(max-width:800px) 100vw, 40vw"
            className="about-portrait"
          />
          <p className="image-caption">Haydn · Poconos, Pennsylvania</p>
          <div className="detail-panel mt-8">
            <p className="eyebrow">Working together</p>
            <p>
              Clear communication. Thoughtful design decisions. A website built
              around what your business needs.
            </p>
          </div>
        </div>
      </section>
      <Process />
      <ProjectCTA />
    </>
  );
}
