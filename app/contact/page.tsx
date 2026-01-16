import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { submitContact } from "./actions";
import {
    IconMail,
    IconClock,
    IconSend,
    IconPhone,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Start a web design, development, or growth project with Multimedium. Share your goals and get a tailored plan and timeline.",
    alternates: {
        canonical: "/contact",
    },
};

const expectations = [
    { label: "Response time", value: "Within 1 business day" },
    { label: "Typical build window", value: "4-6 weeks" },
    { label: "Best call hours", value: "Mon–Thu • 9am–5pm ET" },
];

interface ContactPageProps {
    searchParams?: Promise<{
        sent?: string;
        error?: string;
    }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
    const params = (await searchParams) ?? {};
    const sent = params.sent === "1";
    const error = params.error;
    const errorMessage = error
        ? {
              missing: "Please fill out your name, email, and message.",
              email: "Please enter a valid email address.",
              phone_required:
                  "Please add a phone number if you prefer a call or text.",
              phone_invalid: "Please enter a valid phone number.",
              message: "Please keep your message under 5,000 characters.",
              send: "Something went wrong sending your message.",
          }[error] ?? "Something went wrong sending your message."
        : null;
    const isValidationError =
        error === "missing" ||
        error === "email" ||
        error === "phone_required" ||
        error === "phone_invalid" ||
        error === "message";

    return (
        <>
            {/* Hero Section */}
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card px-6 py-8 sm:px-8 sm:py-10">
                        <div className="absolute inset-0 bg-hero-gradient opacity-30" />
                        <div className="grain absolute inset-0 pointer-events-none" />
                        <div className="relative space-y-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-glow border border-glow/20">
                                Contact
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                                Let&apos;s build your next site
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl">
                                Tell me what you&apos;re building, what you want the site to do, and what constraints we should respect. I&apos;ll reply with a plan and timeline within one business day.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            {/* Contact Section */}
            <Section>
                <div className="grid md:grid-cols-5 gap-10 md:gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <AnimatedSection className="md:col-span-3">
                        <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50">
                            <h2 className="text-xl font-semibold text-foreground mb-6">
                                Send a Message
                            </h2>

                            {sent && (
                                <div className="mb-6 rounded-xl border border-glow/20 bg-glow/10 px-4 py-3 text-sm text-foreground">
                                    Thanks — your message is sent. I’ll reply within 1 business day.
                                </div>
                            )}

                            {errorMessage && (
                                <div className="mb-6 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-foreground">
                                    {errorMessage}
                                    {!isValidationError && (
                                        <>
                                            {" "}
                                            Please email{" "}
                                            <a className="underline underline-offset-4" href="mailto:haydn@multimedium.dev">
                                                haydn@multimedium.dev
                                            </a>
                                            .
                                        </>
                                    )}
                                </div>
                            )}

                            <form action={submitContact} className="space-y-6">
                                <input
                                    type="text"
                                    name="website"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                    className="hidden"
                                />
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-foreground mb-2"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            autoComplete="name"
                                            maxLength={120}
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-glow focus:border-transparent transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-foreground mb-2"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            autoComplete="email"
                                            maxLength={254}
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-glow focus:border-transparent transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-foreground mb-2"
                                        >
                                            Phone{" "}
                                            <span className="text-muted-foreground font-normal">
                                                (optional)
                                            </span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            autoComplete="tel"
                                            inputMode="tel"
                                            maxLength={40}
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-glow focus:border-transparent transition-all"
                                            placeholder="+1 (555) 555-5555"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="company"
                                            className="block text-sm font-medium text-foreground mb-2"
                                        >
                                            Company{" "}
                                            <span className="text-muted-foreground font-normal">
                                                (optional)
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            maxLength={120}
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-glow focus:border-transparent transition-all"
                                            placeholder="Your company"
                                        />
                                    </div>
                                </div>

                                <fieldset className="space-y-3">
                                    <legend className="block text-sm font-medium text-foreground">
                                        Preferred contact method
                                    </legend>
                                    <div className="grid sm:grid-cols-3 gap-3">
                                        <label className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-muted/30 text-muted-foreground hover:text-foreground hover:border-glow/30 transition-all">
                                            <input
                                                type="radio"
                                                name="contactPreference"
                                                value="email"
                                                defaultChecked
                                                className="h-4 w-4 accent-glow"
                                            />
                                            <span className="text-sm font-medium">
                                                Email
                                            </span>
                                        </label>
                                        <label className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-muted/30 text-muted-foreground hover:text-foreground hover:border-glow/30 transition-all">
                                            <input
                                                type="radio"
                                                name="contactPreference"
                                                value="call"
                                                className="h-4 w-4 accent-glow"
                                            />
                                            <span className="text-sm font-medium">
                                                Call
                                            </span>
                                        </label>
                                        <label className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-muted/30 text-muted-foreground hover:text-foreground hover:border-glow/30 transition-all">
                                            <input
                                                type="radio"
                                                name="contactPreference"
                                                value="sms"
                                                className="h-4 w-4 accent-glow"
                                            />
                                            <span className="text-sm font-medium">
                                                Text (SMS)
                                            </span>
                                        </label>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        If you choose call or text, please include a phone number.
                                    </p>
                                </fieldset>

                                <div>
                                    <label
                                        htmlFor="projectType"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        What are you looking for?
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-glow focus:border-transparent transition-all"
                                    >
                                        <option value="">Select a project type</option>
                                        <option value="website">Website Build / Redesign</option>
                                        <option value="landing">Landing Pages + Funnels</option>
                                        <option value="portal">Portal / Dashboard</option>
                                        <option value="retainer">Growth Retainer</option>
                                        <option value="audit">Accessibility / Performance Audit</option>
                                        <option value="other">Something else</option>
                                    </select>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="budgetRange"
                                            className="block text-sm font-medium text-foreground mb-2"
                                        >
                                            Budget{" "}
                                            <span className="text-muted-foreground font-normal">
                                                (optional)
                                            </span>
                                        </label>
                                        <select
                                            id="budgetRange"
                                            name="budgetRange"
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-glow focus:border-transparent transition-all"
                                        >
                                            <option value="">
                                                Select a budget range
                                            </option>
                                            <option value="under5k">
                                                Under $5k
                                            </option>
                                            <option value="5to10k">
                                                $5k-$10k
                                            </option>
                                            <option value="10to25k">
                                                $10k-$25k
                                            </option>
                                            <option value="25kplus">
                                                $25k+
                                            </option>
                                            <option value="unsure">
                                                Not sure yet
                                            </option>
                                        </select>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="timeline"
                                            className="block text-sm font-medium text-foreground mb-2"
                                        >
                                            Timeline{" "}
                                            <span className="text-muted-foreground font-normal">
                                                (optional)
                                            </span>
                                        </label>
                                        <select
                                            id="timeline"
                                            name="timeline"
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-glow focus:border-transparent transition-all"
                                        >
                                            <option value="">
                                                Select a timeline
                                            </option>
                                            <option value="asap">ASAP</option>
                                            <option value="1to2mo">
                                                1-2 months
                                            </option>
                                            <option value="3to6mo">
                                                3-6 months
                                            </option>
                                            <option value="flexible">
                                                Flexible
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="currentUrl"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Current site{" "}
                                        <span className="text-muted-foreground font-normal">
                                            (optional)
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="currentUrl"
                                        name="currentUrl"
                                        autoComplete="url"
                                        inputMode="url"
                                        maxLength={500}
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-glow focus:border-transparent transition-all"
                                        placeholder="https://example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Tell me about your project
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        maxLength={5000}
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-glow focus:border-transparent transition-all resize-none"
                                        placeholder="What do you want the site to do? Who's the audience? Any constraints (budget, timeline, tech stack) I should know about?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary w-full flex items-center justify-center gap-2"
                                >
                                    <IconSend className="w-4 h-4" stroke={2} />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </AnimatedSection>

                    {/* Contact Info */}
                    <AnimatedSection delay={0.2} className="md:col-span-2">
                        <div className="space-y-8">
                            {/* Direct Contact */}
                            <div className="p-6 rounded-2xl bg-card border border-border/50">
                                <h3 className="text-lg font-semibold text-foreground mb-4">
                                    Direct contact
                                </h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Prefer a quick call or email? Here are the fastest ways to reach me.
                                </p>
                                <div className="space-y-3">
                                    <a
                                        href="tel:+15709946186"
                                        className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-muted/30 text-muted-foreground hover:text-foreground hover:border-glow/30 transition-all"
                                    >
                                        <IconPhone className="w-4 h-4 text-glow" stroke={1.5} />
                                        <span>Call or text 570-994-6186</span>
                                    </a>
                                    <a
                                        href="mailto:haydn@multimedium.dev"
                                        className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-muted/30 text-muted-foreground hover:text-foreground hover:border-glow/30 transition-all"
                                    >
                                        <IconMail className="w-4 h-4 text-glow" stroke={1.5} />
                                        <span>haydn@multimedium.dev</span>
                                    </a>
                                </div>
                            </div>

                            {/* What to Expect */}
                            <div className="p-6 rounded-2xl bg-card border border-border/50">
                                <h3 className="text-lg font-semibold text-foreground mb-4">
                                    What to expect
                                </h3>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    {expectations.map((item) => (
                                        <li key={item.label} className="flex items-start gap-3">
                                            <IconClock className="mt-0.5 h-4 w-4 text-glow" stroke={1.5} />
                                            <span>
                                                <span className="font-semibold text-foreground">{item.label}:</span>{" "}
                                                {item.value}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Availability */}
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-glow/10 to-transparent border border-glow/20">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    <p className="text-sm font-medium text-foreground">
                                        Available for new builds + redesigns
                                    </p>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    I typically respond within 1 business day. For urgent inquiries,
                                    please call or text.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            {/* Work Link */}
            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center">
                    <Link href="/work" className="btn-secondary">
                        See examples of recent work
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}
