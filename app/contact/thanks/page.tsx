import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { ContactThanksTracker } from "./ContactThanksTracker";

export const metadata: Metadata = {
    title: "Message sent",
    description: "Thanks—your message was sent. Expect a reply within one business day.",
    alternates: {
        canonical: "/contact/thanks",
    },
    robots: {
        index: false,
        follow: true,
    },
};

interface ContactThanksPageProps {
    searchParams?: Promise<{
        source?: string;
    }>;
}

export default async function ContactThanksPage({ searchParams }: ContactThanksPageProps) {
    const params = (await searchParams) ?? {};
    const source = params.source;

    return (
        <>
            <ContactThanksTracker source={source} />
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card px-6 py-10 sm:px-8 sm:py-12 text-center">
                        <div className="absolute inset-0 bg-hero-gradient opacity-30" />
                        <div className="grain absolute inset-0 pointer-events-none" />
                        <div className="relative space-y-4 max-w-2xl mx-auto">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-glow border border-glow/20">
                                Message sent
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                                Thanks—got it.
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                I&apos;ll reply within one business day. If you included a current website link, I&apos;ll take a look before responding. If it&apos;s urgent, feel free to call or text.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                                <Link href="/work" className="btn-secondary">
                                    Browse case studies
                                </Link>
                                <Link href="/" className="btn-primary">
                                    Back to home
                                </Link>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>
        </>
    );
}
