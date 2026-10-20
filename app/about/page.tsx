import Image from "next/image";
import Link from "next/link";
import {
  PageIntro,
  ProjectCTA,
  SectionHeading,
} from "@/components/marketing/Studio";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Haydn",
  description:
    "Haydn is the designer and developer behind Multimedium, building websites and software for transaction coordinators, agents, and brokerages.",
  path: "/about",
});

// Product status from brief §4. Keep shipped products separate from plans.
const software = [
  {
    name: "Norma",
    status: "Private beta",
    body: "A daily closing desk that brings transactions, tasks, deadlines, documents, and email follow-ups into one workspace. (Formerly NormaTC.)",
    url: "https://normatc.com",
  },
  {
    name: "Norma Intake",
    status: "Live, free tier",
    body: "One link agents use to send contract details and documents, producing a coordinator-ready cover sheet.",
    url: "https://intake.normatc.com",
  },
  {
    name: "UtilitySheet",
    status: "Live",
    body: "Collects seller utility details and creates a clean, branded utility sheet for the buyer.",
    url: "https://utilitysheet.com",
  },
  {
    name: "Norma Reports",
    status: "In development",
    body: "Agent-facing progress reports on each transaction.",
  },
];

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title={
          <>
            I’m Haydn. I build websites for <em>real estate professionals.</em>
          </>
        }
        body="I’m a designer and developer based in the Poconos, Pennsylvania, and I work with clients across the US and Puerto Rico."
      />
      <section className="studio-shell content-grid about-content">
        <div>
          <h2 className="text-3xl mb-5">How I got here</h2>
          <p>
            My mom, Debbie O’Brien, has worked in real estate for more than 30
            years and has been a transaction coordinator since 2013. She runs PA
            Real Estate Support Services, serving agents in the Pocono market. I
            built her website, including the intake form her agents use to start
            every file, which feeds straight into Norma, the TC software I
            build.
          </p>
          <p>
            I’ve also built websites for TC companies, an independent brokerage,
            and other real estate businesses, and I build software for
            transaction coordinators (more on that below).
          </p>
          <div className="hero-actions">
            <Link href="/contact?source=about" className="btn-primary">
              Start a project <span aria-hidden="true">→</span>
            </Link>
            <Link href="/work" className="text-link">
              See client work →
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
        </div>
      </section>

      <section className="studio-shell studio-section rule-top">
        <SectionHeading title="How I work" />
        <div className="reasons-grid">
          <div>
            <h3>Plain words first.</h3>
            <p>
              I write your copy before I design anything, so the site says the
              right thing before it looks good.
            </p>
          </div>
          <div>
            <h3>One person, start to finish.</h3>
            <p>
              Planning, writing, design, development, launch, and support all
              stay with me.
            </p>
          </div>
          <div>
            <h3>Honest proof only.</h3>
            <p>
              Your real reviews, your real work, your real numbers, or none at
              all.
            </p>
          </div>
        </div>
      </section>

      <section id="software" className="tint-band">
        <div className="studio-shell studio-section">
          <SectionHeading title="Software I build for transaction coordinators">
            <p className="section-aside">
              Norma Suite is a family of tools for the work between contract and
              close. Some of it is live today; some of it is where the suite is
              headed.
            </p>
          </SectionHeading>
          <div className="feature-list">
            {software.map((s) => (
              <div key={s.name}>
                <span className="eyebrow block">{s.status}</span>
                <h3>{s.name}</h3>
                <p>{s.body}</p>
                {s.url && (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    {new URL(s.url).hostname} ↗
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-muted-foreground">
            Building these is part of why I understand intake, cover sheets, and
            agent communication. That knowledge goes into every TC website I
            build.
          </p>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
