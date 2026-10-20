import Link from "next/link";
import type { Metadata } from "next";
import { PageIntro } from "@/components/marketing/Studio";
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};
export default function NotFound() {
  return (
    <>
      <PageIntro
        eyebrow="404 / Page not found"
        title="This page isn’t here anymore."
        body="It may have moved during a recent update. These will get you back on track."
      />
      <div className="studio-shell pb-24">
        <div className="hero-actions">
          <Link href="/contact?source=404" className="btn-primary">
            Start a project →
          </Link>
          <Link href="/work" className="text-link">
            See client work →
          </Link>
          <Link href="/tc-packages" className="text-link">
            TC website packages →
          </Link>
          <Link href="/" className="text-link">
            Back to the homepage →
          </Link>
        </div>
      </div>
    </>
  );
}
