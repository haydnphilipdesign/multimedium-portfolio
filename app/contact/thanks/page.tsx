import { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/marketing/Studio";

export const metadata: Metadata = {
  title: "Message sent",
  description:
    "Thanks - your message was sent. Expect a reply within one business day.",
  alternates: {
    canonical: "/contact/thanks",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ContactThanksPage() {
  return (
    <PageIntro
      eyebrow="Message sent"
      title="Thanks, got it."
      body="I’ll reply within one business day. If you included a current website link, I’ll review it before responding with next steps."
    >
      <div className="hero-actions pb-24">
        <Link href="/work" className="btn-primary">
          See client work <span aria-hidden="true">→</span>
        </Link>
        <Link href="/" className="text-link">
          Back to home →
        </Link>
      </div>
    </PageIntro>
  );
}
