export interface Project {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    kind: "Client" | "Product" | "Personal";
    category: "Web Design" | "SaaS" | "Automation" | "Portal" | "Wellness" | "Real Estate" | "Fitness";
    year: string;
    client: string;
    role: string;
    tools: string[];
    metaTitle?: string;
    metaDescription?: string;
    socialCaption?: string;
    tags?: string[];
    thumbnail: string;
    heroImage: string;
    images: string[];
    problem: string;
    solution: string;
    caseStudy?: {
        headline?: string;
        subheadline?: string;
        overview?: string;
        goals?: string[];
        constraints?: string[];
        delivered?: string[];
        whyItWorks?: string[];
        approval?: string;
        tldr?: string;
    };
    cta?: {
        headline: string;
        body: string;
        ctaText: string;
        href: string;
    };
    process: {
        title: string;
        description: string;
        image?: string;
    }[];
    outcomes: {
        metric: string;
        value: string;
        description: string;
    }[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
    featured: boolean;
    color: string;
    externalUrl?: string;
}

export const projects: Project[] = [
    {
        slug: "tag-landing-page",
        title: "Transaction Authority Group (TAG)",
        kind: "Client",
        metaTitle: "Transaction Authority Group Landing Page",
        metaDescription:
            "Lead-gen landing page for TAG built to establish authority, filter for fit, and drive qualified discovery call bookings. Mobile-first and lightweight.",
        socialCaption:
            "New build: a focused booking funnel for Transaction Authority Group—authority-first, qualification-driven, and designed to convert into discovery calls.",
        tags: ["Landing Page", "Lead Generation", "Booking Flow", "Mobile-First"],
        tagline: "Authority-first landing page built to qualify established transaction coordinators and drive discovery call bookings.",
        description:
            "Lead-gen landing page for TAG built to establish authority, filter for fit, and drive qualified discovery call bookings. Mobile-first and lightweight.",
        category: "Real Estate",
        year: "2026",
        client: "Transaction Authority Group (TAG)",
        role: "Landing Page Strategy, Copy, Design, Development",
        tools: ["Fast, mobile-first build", "Booking calendar integration", "Lead qualification flow", "Vercel hosting"],
        thumbnail: "/images/projects/tag-landing-page/tag-landing-page-thumb.png",
        heroImage: "/images/projects/tag-landing-page/tag-landing-page-hero.png",
        images: [
            "/images/projects/tag-landing-page/tag-landing-page-1.png",
            "/images/projects/tag-landing-page/tag-landing-page-2.png",
            "/images/projects/tag-landing-page/tag-landing-page-3.png",
        ],
        problem: "TAG needed a focused landing page that converts the right visitors—established Transaction Coordinators and TC companies—into scheduled discovery calls. The goal wasn’t content depth. It was a clean, credible page that makes the offer obvious, filters out poor-fit leads, and pushes the user toward booking.",
        solution: "Built a single-page booking funnel designed to establish authority fast, create self-identification through a problem → solution narrative, and drive one primary action: book the call. The layout avoids stock imagery, stays lightweight, and keeps CTAs persistent so the page remains conversion-focused.",
        caseStudy: {
            headline: "Transaction Authority Group — Lead-Gen Landing Page",
            subheadline:
                "A single-page booking funnel designed to establish authority fast, filter for fit, and drive qualified discovery calls.",
            tldr: "Built a one-page lead-generation landing page for Transaction Authority Group designed to establish authority quickly, filter for fit, and drive discovery call bookings. Mobile-first, lightweight, and intentionally avoids stock imagery—keeping the focus on qualification and scheduling.",
            goals: [
                "Establish authority immediately (institutional, serious, systems-driven)",
                "Filter for the right audience (not brand-new TCs or “quick money” seekers)",
                "Drive calendar bookings as the primary conversion action",
            ],
            constraints: [
                "One-page scroll layout (no multi-page site)",
                "Clean, neutral visual design (no stock photos, no people imagery)",
                "Fast load and mobile-first performance",
                "Persistent call-to-action to book a discovery call",
                "Simple structure that supports quick iteration",
            ],
            delivered: [
                "One-page landing page designed for conversion (not content consumption)",
                "Authority-first hero section with clear positioning and immediate CTA",
                "Social proof / credibility bar to reinforce legitimacy without hype",
                "Problem → solution narrative written to create self-identification",
                "Fit & Filter section to improve lead quality and reduce unqualified calls",
                "Discovery call expectations to reduce hesitation",
                "Scheduler-ready booking section (calendar embed/link integration)",
                "Mobile-first styling with a clean, institutional aesthetic",
            ],
            whyItWorks: [
                "Visitors quickly understand what TAG is and who it’s for",
                "The “Not For” section prevents low-fit bookings",
                "The CTA is repeated and reinforced so the page stays focused on one action: book the call",
            ],
            approval:
                "Client approved the design direction and gave permission for this project to be featured in my portfolio.",
        },
        cta: {
            headline: "Need a landing page that converts?",
            body: "I build focused, mobile-first pages designed to drive calls and leads—without bloated pages or slow load times.",
            ctaText: "Contact Me",
            href: "/contact?source=case-study-tag-landing-page",
        },
        process: [
            {
                title: "Authority-First Positioning",
                description: "Designed an institutional hero with immediate CTA plus a credibility bar to reinforce legitimacy—without hype, gimmicks, or stock imagery.",
                image: "/images/projects/tag-landing-page/tag-landing-page-1.png",
            },
            {
                title: "Qualification-Driven Copy",
                description: "Wrote a problem → solution narrative that creates self-identification, plus a Fit & Filter (“For / Not For”) section to reduce unqualified bookings.",
                image: "/images/projects/tag-landing-page/tag-landing-page-2.png",
            },
            {
                title: "Booking-First Funnel",
                description: "Kept the page centered on scheduling with repeated CTAs, expectation-setting, and a scheduler-ready booking section for fast iteration during launch.",
                image: "/images/projects/tag-landing-page/tag-landing-page-3.png",
            },
        ],
        outcomes: [
            { metric: "Layout", value: "1 page", description: "Single-scroll booking funnel built for speed and clarity" },
            { metric: "Lead Quality", value: "Fit-filtered", description: "Clear “For / Not For” messaging to reduce low-fit calls" },
            { metric: "Build", value: "Lightweight", description: "Mobile-first, performance-focused implementation without stock imagery" },
        ],
        featured: true,
        color: "#0f766e",
        externalUrl: "https://www.transactionauthority.com",
    },
    {
        slug: "utility-sheet",
        title: "UtilitySheet",
        kind: "Product",
        tagline: "Lightweight SaaS that eliminates utility info back-and-forth in real estate transactions",
        description: "A guided form app that helps sellers provide accurate utility provider info, generating clean, shareable PDF sheets for buyers, agents, title, and transaction coordinators.",
        category: "SaaS",
        year: "2025",
        client: "Internal Product",
        role: "Product Strategy, UX/UI Design, Full-Stack Development",
        tools: ["Guided form experience", "Clean PDF output", "Smart provider suggestions", "Vercel hosting"],
        thumbnail: "/images/projects/utilitysheet/utilitysheet-thumb.png",
        heroImage: "/images/projects/utilitysheet/utilitysheet-hero.png",
        images: [
            "/images/projects/utilitysheet/utilitysheet-2.png",
            "/images/projects/utilitysheet/utilitysheet-1.png",
            "/images/projects/utilitysheet/utilitysheet-3.png",
        ],
        problem: "Real estate transactions involve constant back-and-forth to get accurate utility provider info from sellers. Agents and TCs spend hours chasing vague answers like 'I think it's the gas company?' This delays closings and frustrates everyone involved.",
        solution: "UtilitySheet replaces the 'Who's your gas company again?' emails with a single guided link. Sellers complete a quick form, and the app automatically generates a clean, PDF-ready utility info sheet that can be sent to all parties.",
        process: [
            {
                title: "AI-Assisted Provider Picker",
                description: "As sellers fill out the form, the system suggests likely utility providers for their area-so they can choose from relevant options instead of guessing or typing vague answers. Faster completion, fewer errors, less manual chasing.",
                image: "/images/projects/utilitysheet/utilitysheet-2.png",
            },
            {
                title: "Request Dashboard",
                description: "A simple dashboard for agents and coordinators to track every request at a glance, see status, and follow up without digging through email threads.",
                image: "/images/projects/utilitysheet/utilitysheet-1.png",
            },
            {
                title: "PDF Output & Branding",
                description: "Generates polished, professional utility sheets that can be shared, printed, or attached to transaction files-branded for the sending agent or TC.",
                image: "/images/projects/utilitysheet/utilitysheet-3.png",
            },
        ],
        outcomes: [
            { metric: "Form Completion", value: "< 3 min", description: "Average time to complete the utility form" },
            { metric: "Follow-ups", value: "-80%", description: "Reduction in back-and-forth emails for utility info" },
            { metric: "Data Accuracy", value: "Fewer errors", description: "AI suggestions reduce typos and guesswork" },
        ],
        featured: false,
        color: "#8b5cf6",
        externalUrl: "https://utilitysheet.com",
    },
    {
        slug: "peppers-portal",
        title: "Pepper's Portal",
        kind: "Personal",
        tagline: "Family PWA for tracking dog walks, routines, and care with gamification",
        description: "A Progressive Web App built for my family to quickly log our dog Pepper's walks (pee/poop/both), track feeding, grooming, vet visits, and medications—with a leaderboard to make it fun.",
        category: "Portal",
        year: "2025",
        client: "Personal Project",
        role: "Product Design, Full-Stack Development",
        tools: ["Mobile-friendly app (PWA)", "One-tap logging", "Shared dashboard + history", "Vercel hosting"],
        thumbnail: "/images/projects/peppers-portal/peppers-portal-thumb.png",
        heroImage: "/images/projects/peppers-portal/peppers-portal-hero.png",
        images: [
            "/images/projects/peppers-portal/peppers-portal-1.png",
            "/images/projects/peppers-portal/peppers-portal-2.png",
            "/images/projects/peppers-portal/peppers-portal-3.png",
        ],
        problem: "With multiple family members walking and caring for our dog Pepper, we constantly asked 'Did anyone walk her?' or 'When was she last fed?' No one had a clear picture of who did what or when.",
        solution: "Built a PWA that lets anyone in the family log walks in seconds, track daily routines like feeding and toy refills, and see a live history. A leaderboard adds friendly competition, and a public dashboard lets us share Pepper's status with anyone.",
        process: [
            {
                title: "Quick Walk Logging",
                description: "One-tap interface to log walks with pee/poop/both options. Optimized for speed so anyone can log a walk while still outside.",
                image: "/images/projects/peppers-portal/peppers-portal-1.png",
            },
            {
                title: "Daily Routines & Care Tracking",
                description: "Track feeding, toy refills, grooming, vet visits, and medications. Everyone knows at a glance what's been done today.",
                image: "/images/projects/peppers-portal/peppers-portal-2.png",
            },
            {
                title: "Leaderboard & Analytics",
                description: "Gamified the experience with a family leaderboard. History and analytics show patterns over time.",
                image: "/images/projects/peppers-portal/peppers-portal-3.png",
            },
        ],
        outcomes: [
            { metric: "Family Adoption", value: "100%", description: "All family members actively use the app" },
            { metric: "Walk Confusion", value: "Eliminated", description: "No more 'did anyone walk her?' questions" },
            { metric: "Routine Tracking", value: "5+ categories", description: "Walks, feeding, toys, grooming, vet, meds" },
        ],
        featured: false,
        color: "#ec4899",
        externalUrl: "https://peppers-portal.vercel.app/public",
    },
    {
        slug: "workout-tracker",
        title: "7-Day Workout Tracker",
        kind: "Personal",
        tagline: "Personal web app for tracking a custom 7-day workout split with local storage",
        description: "A simple, no-backend web app customized for my personal 7-day workout routine. Stores all data locally in the browser—no database needed for solo use.",
        category: "Fitness",
        year: "2025",
        client: "Personal Project",
        role: "Design & Development",
        tools: ["Local-only storage", "No accounts required", "Mobile-friendly UI", "Vercel hosting"],
        thumbnail: "/images/projects/workout-tracker/workout-tracker-thumb.png",
        heroImage: "/images/projects/workout-tracker/workout-tracker-hero.png",
        images: [
            "/images/projects/workout-tracker/workout-tracker-1.png",
            "/images/projects/workout-tracker/workout-tracker-2.png",
            "/images/projects/workout-tracker/workout-tracker-3.png",
        ],
        problem: "Generic workout apps don't match my specific 7-day split, and I didn't want to manage a database for something only I would use.",
        solution: "Built a lightweight web app tailored to my exact workout routine. Data persists in localStorage, so it's always available on my device without any server or account setup.",
        process: [
            {
                title: "Custom 7-Day Split",
                description: "Designed around my specific workout plan with each day's exercises, sets, and reps laid out exactly how I train.",
                image: "/images/projects/workout-tracker/workout-tracker-1.png",
            },
            {
                title: "Progress Tracking",
                description: "Log weights and reps for each exercise. See history and progress over time without any external dependencies.",
                image: "/images/projects/workout-tracker/workout-tracker-2.png",
            },
            {
                title: "Local-First Storage",
                description: "All data stays in the browser via localStorage. No accounts, no database, no sync—just simple, private, personal tracking.",
                image: "/images/projects/workout-tracker/workout-tracker-3.png",
            },
        ],
        outcomes: [
            { metric: "Setup Time", value: "0 min", description: "No account or database configuration needed" },
            { metric: "Data Privacy", value: "100% local", description: "All workout data stays on the device" },
            { metric: "Customization", value: "Perfect fit", description: "Matches my exact 7-day split" },
        ],
        featured: false,
        color: "#06b6d4",
        externalUrl: "https://7dayplan.vercel.app/",
    },
    {
        slug: "pa-real-estate-support",
        title: "PA Real Estate Support Services",
        kind: "Client",
        metaTitle: "PA Real Estate Support Services Website Redesign (TC)",
        metaDescription:
            "Website redesign for a Pennsylvania transaction coordination team—clear service pages, pricing, and an intake flow designed to drive qualified inquiries.",
        socialCaption:
            "Website redesign for PA Real Estate Support Services: clearer services + pricing, a guided intake flow, and a faster mobile experience for TC leads.",
        tags: ["Transaction Coordination", "Service Pages", "Pricing", "Intake Flow", "Conversion Copy"],
        tagline: "Responsive web presence for a Pennsylvania-based real estate transaction coordination team",
        description: "Complete website redesign with clear services, pricing, and intake flows that sync directly with the team's workflow.",
        category: "Real Estate",
        year: "2024",
        client: "PA Real Estate Support Services, LLC",
        role: "Designer & Developer",
        tools: ["Clear service pages + pricing", "Guided intake form", "Fast, mobile-first build", "Easy updates"],
        thumbnail: "/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-thumb.png",
        heroImage: "/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-hero.png",
        images: [
            "/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-1.png",
            "/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-2.png",
            "/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-3.png",
        ],
        problem: "The team relied on spreadsheets and email to collect brokerage requests. Their DIY site left prospects unsure which services were covered and how to start.",
        solution: "Created a revised brand voice, service breakdown, and guided intake forms that sync to the team's workflow. A component library empowers future landing pages and campaigns.",
        process: [
            {
                title: "Conversion-First Hero Messaging",
                description: "Clarified the offer with a strong headline, clear supporting copy, and immediate CTAs-so prospects know exactly what to do next.",
                image: "/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-1.png",
            },
            {
                title: "Service Breakdown & Trust Signals",
                description: "Organized the service into scannable pillars, added social proof, and designed supporting sections that reinforce credibility.",
                image: "/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-2.png",
            },
            {
                title: "Intake Form Integration",
                description: "Integrated the transaction intake flow and made it easy to start via multiple contact paths (call, email, and form).",
                image: "/images/projects/pa-real-estate-support-services/pa-real-estate-support-services-3.png",
            },
        ],
        outcomes: [
            { metric: "Intake Completion", value: "+42%", description: "Increase in completed intake forms" },
            { metric: "Search Impressions", value: "+37%", description: "Growth in branded search impressions within 60 days" },
            { metric: "Scope Clarity", value: "Less back-and-forth", description: "Less time spent clarifying scope before projects begin" },
        ],
        featured: true,
        color: "#3b82f6",
        externalUrl: "https://parealestatesupport.com",
    },
    {
        slug: "blissful-existence",
        title: "Blissful Existence Healing Acres",
        kind: "Client",
        tagline: "Nature-inspired design system for a healing retreat center",
        description: "Immersive website with event booking flows, story-driven copy, and automation-ready forms for a wellness retreat property.",
        category: "Wellness",
        year: "2024",
        client: "Blissful Existence Healing Acres",
        role: "Designer & Developer",
        tools: ["Story-driven design", "Event + booking flow", "Automation-ready forms", "Fast, mobile-first build"],
        thumbnail: "/images/projects/blissful-existence/blissful-existence-thumb.png",
        heroImage: "/images/projects/blissful-existence/blissful-existence-hero.png",
        images: [
            "/images/projects/blissful-existence/blissful-existence-1.png",
            "/images/projects/blissful-existence/blissful-existence-2.png",
            "/images/projects/blissful-existence/blissful-existence-3.png",
        ],
        problem: "Retreats were filling via phone call sign-ups. The team needed a site that reflected the property experience and captured bookings without manual follow-up.",
        solution: "Delivered immersive visuals, dynamic event listings, and automated confirmations. An email nurture sequence and resource library keeps guests engaged.",
        process: [
            {
                title: "Events & Services Page Design",
                description: "Built a photo-first events/services layout with clear headings and CTAs so visitors can quickly understand offerings and join.",
                image: "/images/projects/blissful-existence/blissful-existence-1.png",
            },
            {
                title: "Gallery Layout System",
                description: "Created a distinctive gallery pattern to showcase the land, horses, and community moments while keeping the page airy and calm.",
                image: "/images/projects/blissful-existence/blissful-existence-2.png",
            },
            {
                title: "Offerings Breakdown",
                description: "Structured offerings into scannable sections that support the story (community, workshops, and experiences) without overwhelming the reader.",
                image: "/images/projects/blissful-existence/blissful-existence-3.png",
            },
        ],
        outcomes: [
            { metric: "Online Bookings", value: "2x", description: "Doubled within 90 days of launch" },
            { metric: "Admin Time", value: "-6 hrs/week", description: "Saved through automated confirmations and reminders" },
            { metric: "Engagement", value: "More time-on-site", description: "Higher time-on-site and return visits" },
        ],
        featured: true,
        color: "#10b981",
        externalUrl: "https://blissfulexistencehealingacres.com",
    },
    {
        slug: "three-penn-properties",
        title: "Three Penn Properties",
        kind: "Client",
        tagline: "Professional web presence for a property management and investment firm",
        description: "Modern hub that highlights the portfolio, builds trust with proof, and routes tenants to the right next step-including the TenantCloud portal.",
        category: "Real Estate",
        year: "2023",
        client: "Three Penn Properties, LLC",
        role: "Designer & Developer",
        tools: ["Portfolio + proof sections", "Tenant / investor pathways", "CMS for easy updates", "Fast, mobile-first build"],
        thumbnail: "/images/projects/threepenn/threepenn-thumb.png",
        heroImage: "/images/projects/threepenn/threepenn-hero.png",
        images: [
            "/images/projects/threepenn/threepenn-1.png",
            "/images/projects/threepenn/threepenn-2.png",
            "/images/projects/threepenn/threepenn-3.png",
        ],
        problem: "Investors and tenants received PDFs and ad-hoc updates. Leadership wanted a modern hub that showcased portfolio metrics and routed leads correctly.",
        solution: "Created a modern hub with portfolio highlights, clear tenant/investor pathways, and TenantCloud onboarding so leads and requests route correctly.",
        process: [
            {
                title: "Brand & Hero Refresh",
                description: "Updated the hero and messaging to quickly establish credibility and set context for both investors and tenants.",
                image: "/images/projects/threepenn/threepenn-1.png",
            },
            {
                title: "Proof Through Portfolio",
                description: "Designed a gallery-forward section that showcases outcomes and builds trust through visuals.",
                image: "/images/projects/threepenn/threepenn-2.png",
            },
            {
                title: "Tenant Portal Integration",
                description: "Added a dedicated TenantCloud explainer so renters know how to submit requests, pay invoices, and contact the office.",
                image: "/images/projects/threepenn/threepenn-3.png",
            },
        ],
        outcomes: [
            { metric: "Investor Inquiries", value: "+55%", description: "Increase in qualified investor leads" },
            { metric: "Response Time", value: "<12 hrs", description: "Support ticket response time" },
            { metric: "Performance", value: "95+", description: "Speed + accessibility scores across key pages" },
        ],
        featured: true,
        color: "#f59e0b",
        externalUrl: "https://threepenn.com",
    },
];

export function getFeaturedProjects(): Project[] {
    return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.map((p) => p.slug);
}
