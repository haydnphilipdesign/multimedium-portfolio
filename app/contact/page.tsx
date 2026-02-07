import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { submitContact } from "./actions";
import { createContactFormToken } from "@/lib/contactAntiSpam";
import { TurnstileWidget } from "./TurnstileWidget";
import {
    IconMail,
    IconClock,
    IconSend,
    IconPhone,
    IconCalendarEvent,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Contact Multimedium to talk about a website build, landing page, or ongoing improvements for your business.",
    alternates: {
        canonical: "/contact",
    },
};

export const dynamic = "force-dynamic";

const expectations = [
    { label: "Response time", value: "Within 1 business day" },
    { label: "Typical build window", value: "4–6 weeks" },
    { label: "Best call hours", value: "Mon–Thu • 9am–5pm ET" },
];

interface ContactPageProps {
    searchParams?: Promise<{
        sent?: string;
        error?: string;
        source?: string;
        projectType?: string;
        budgetRange?: string;
        timeline?: string;
        currentUrl?: string;
    }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
    const params = (await searchParams) ?? {};
    const sent = params.sent === "1";
    const error = params.error;
    const source = params.source ?? "";
    const projectType = params.projectType ?? "";
    const budgetRange = params.budgetRange ?? "";
    const timeline = params.timeline ?? "";
    const currentUrl = params.currentUrl ?? "";
    const schedulingUrl = process.env.NEXT_PUBLIC_SCHEDULING_URL;
    const formToken = createContactFormToken() ?? "";
    const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    const turnstileEnabled = Boolean(
        turnstileSiteKey && process.env.TURNSTILE_SECRET_KEY,
    );
    const errorMessage = error
        ? {
            missing: "Please fill out your name, email, and message.",
            email: "Please enter a valid email address.",
            phone_required:
                "Please add a phone number if you prefer a call or text.",
            phone_invalid: "Please enter a valid phone number.",
            message: "Please keep your message under 5,000 characters.",
            links: "Please remove links from your message (use the Current site field instead).",
            captcha: "Please complete the spam check and try again.",
            rate: "Too many submissions from your network. Please wait a bit and try again.",
            send: "Something went wrong sending your message.",
        }[error] ?? "Something went wrong sending your message."
        : null;
    const isValidationError =
        error === "missing" ||
        error === "email" ||
        error === "phone_required" ||
        error === "phone_invalid" ||
        error === "message" ||
        error === "links" ||
        error === "captcha" ||
        error === "rate";

    return (
        <>
            {/* Hero Section */}
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] px-6 py-8 sm:px-8 sm:py-10">
                        <div className="absolute inset-0 bg-hero-gradient opacity-30" />
                        <div className="grain absolute inset-0 pointer-events-none" />
                        <div className="relative space-y-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-accent-strong border border-glow/30">
                                Contact
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                                Talk about your project
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl">
                                Share the basics - what you do, who it&apos;s for, and what you want the site to accomplish. I&apos;ll reply within one business day with next steps and a clear scope path.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                I work with service businesses, established SMBs, and real estate teams—if you're not sure about fit, just ask.
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
                        <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border/65">
                            <h2 className="text-xl font-semibold text-foreground mb-6">
                                Send a message
                            </h2>

                            {sent && (
                                <div className="mb-6 rounded-xl border border-glow/20 bg-glow/10 px-4 py-3 text-sm text-foreground">
                                    Thanks, your message is sent. I&apos;ll reply within 1 business day.
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
                                <input type="hidden" name="source" value={source} />
                                <input type="hidden" name="formToken" value={formToken} />
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
                                            className="form-control"
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
                                            className="form-control"
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
                                            className="form-control"
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
                                            className="form-control"
                                            placeholder="Your company"
                                        />
                                    </div>
                                </div>

                                <fieldset className="space-y-3">
                                    <legend className="block text-sm font-medium text-foreground">
                                        How should I reply?
                                    </legend>
                                    <div className="grid sm:grid-cols-3 gap-3">
                                        <label className="form-choice">
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
                                        <label className="form-choice">
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
                                        <label className="form-choice">
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
                                        What do you need help with?
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        defaultValue={projectType}
                                        className="form-control form-select"
                                    >
                                        <option value="">Select one</option>
                                        <option value="website">Website build / redesign</option>
                                        <option value="landing">Landing page (lead gen)</option>
                                        <option value="retainer">Ongoing improvements</option>
                                        <option value="other">Not sure yet / something else</option>
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
                                            defaultValue={budgetRange}
                                            className="form-control form-select"
                                        >
                                            <option value="">
                                                Select a budget range
                                            </option>
                                            <option value="under5k">
                                                Under $5k (focused page scope)
                                            </option>
                                            <option value="5to10k">
                                                $5k–$10k
                                            </option>
                                            <option value="10to25k">
                                                $10k–$25k
                                            </option>
                                            <option value="25kplus">
                                                $25k+
                                            </option>
                                            <option value="unsure">
                                                Not sure yet / want guidance
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
                                            defaultValue={timeline}
                                            className="form-control form-select"
                                        >
                                            <option value="">
                                                Select a timeline
                                            </option>
                                            <option value="asap">ASAP</option>
                                            <option value="1to2mo">
                                                1–2 months
                                            </option>
                                            <option value="3to6mo">
                                                3–6 months
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
                                        Current website{" "}
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
                                        defaultValue={currentUrl}
                                        className="form-control"
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
                                        className="form-control form-textarea"
                                        placeholder="What do you want the site to do? Who’s it for? Any deadlines, must-haves, or examples you like?"
                                    />
                                    <p className="mt-2 text-xs text-muted-foreground">
                                        Tip: Please avoid links in the message - use the Current website field instead.
                                    </p>
                                </div>

                                {turnstileEnabled && turnstileSiteKey && (
                                    <TurnstileWidget siteKey={turnstileSiteKey} />
                                )}

                                <button
                                    type="submit"
                                    className="btn-primary w-full flex items-center justify-center gap-2"
                                >
                                    <IconSend className="w-4 h-4" stroke={2} />
                                    Send message
                                </button>
                            </form>
                        </div>
                    </AnimatedSection>

                    {/* Contact Info */}
                    <AnimatedSection delay={0.2} className="md:col-span-2">
                        <div className="space-y-8">
                            {/* Direct Contact */}
                            <div className="p-6 rounded-2xl bg-card border border-border/65">
                                <h3 className="text-lg font-semibold text-foreground mb-4">
                                    Direct contact
                                </h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Prefer a quick call or email? Here are the fastest ways to reach me.
                                </p>
                                <div className="space-y-3">
                                    <a
                                        href="tel:+15709946186"
                                        className="form-choice"
                                    >
                                        <IconPhone className="w-4 h-4 text-glow" stroke={1.5} />
                                        <span>Call or text 570-994-6186</span>
                                    </a>
                                    <a
                                        href="mailto:haydn@multimedium.dev"
                                        className="form-choice"
                                    >
                                        <IconMail className="w-4 h-4 text-glow" stroke={1.5} />
                                        <span>haydn@multimedium.dev</span>
                                    </a>
                                    {schedulingUrl && (
                                        <a
                                            href={schedulingUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="form-choice"
                                        >
                                            <IconCalendarEvent className="w-4 h-4 text-glow" stroke={1.5} />
                                            <span>Book a call</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* What to Expect */}
                            <div className="p-6 rounded-2xl bg-card border border-border/65">
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
                                    <span className="status-dot" />
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
                        Browse case studies
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}






