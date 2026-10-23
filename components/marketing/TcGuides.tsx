import Link from "next/link";
import { SectionHeading } from "@/components/marketing/Studio";

/** The written TC website guides under /resources, cross-linked at the end of each. */
export const tcGuides = [
  {
    href: "/resources/what-every-tc-website-needs",
    title: "What every TC website needs",
    body: "Nine must-haves and ten common mistakes, from positioning to the intake form.",
  },
  {
    href: "/resources/transaction-coordinator-website-examples",
    title: "TC website examples",
    body: "Three real TC sites, with screenshots and what each one does well.",
  },
  {
    href: "/resources/transaction-coordinator-intake-form",
    title: "What a TC intake form should ask",
    body: "The fields agents expect, what to leave out, and which tools work.",
  },
  {
    href: "/resources/transaction-coordinator-website-cost",
    title: "What a TC website costs",
    body: "Doing it yourself versus hiring someone, and the ongoing costs either way.",
  },
];

export function TcGuides({ current }: { current: string }) {
  return (
    <section className="studio-shell studio-section rule-top">
      <SectionHeading title="More for TC websites" />
      <div className="path-grid">
        {tcGuides
          .filter((g) => g.href !== current)
          .map((g) => (
            <Link key={g.href} href={g.href}>
              <h3>{g.title}</h3>
              <p>{g.body}</p>
              <span className="text-link">Read the guide →</span>
            </Link>
          ))}
      </div>
    </section>
  );
}
