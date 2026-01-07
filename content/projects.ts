export interface Project {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    category: "Web Design" | "SaaS" | "Automation" | "Portal" | "Wellness" | "Real Estate";
    year: string;
    client: string;
    role: string;
    tools: string[];
    thumbnail: string;
    heroImage: string;
    images: string[];
    problem: string;
    solution: string;
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
        slug: "utility-sheet",
        title: "UtilitySheet",
        tagline: "Lightweight SaaS that eliminates utility info back-and-forth in real estate transactions",
        description: "A guided form app that helps sellers provide accurate utility provider info, generating clean, shareable PDF sheets for buyers, agents, title, and transaction coordinators.",
        category: "SaaS",
        year: "2025",
        client: "Internal Product",
        role: "Product Strategy, UX/UI Design, Full-Stack Development",
        tools: ["Next.js", "TypeScript", "Tailwind CSS", "AI/LLM", "PDF Generation", "Vercel"],
        thumbnail: "/images/projects/utilitysheet-thumb.jpg",
        heroImage: "/images/projects/utilitysheet-hero.jpg",
        images: [
            "/images/projects/utilitysheet-1.jpg",
            "/images/projects/utilitysheet-2.jpg",
        ],
        problem: "Real estate transactions involve constant back-and-forth to get accurate utility provider info from sellers. Agents and TCs spend hours chasing vague answers like 'I think it's the gas company?' This delays closings and frustrates everyone involved.",
        solution: "UtilitySheet replaces the 'Who's your gas company again?' emails with a single guided link. Sellers complete a quick form, and the app automatically generates a clean, PDF-ready utility info sheet that can be sent to all parties.",
        process: [
            {
                title: "AI-Assisted Provider Picker",
                description: "As sellers fill out the form, the system suggests likely utility providers for their area—so they can choose from relevant options instead of guessing or typing vague answers. Faster completion, fewer errors, less manual chasing.",
            },
            {
                title: "Guided UX for Non-Technical Users",
                description: "Designed for sellers who aren't tech-savvy. Clear steps, helpful defaults, and forgiving inputs that reduce friction and abandonment.",
            },
            {
                title: "PDF Output & Branding",
                description: "Generates polished, professional utility sheets that can be shared, printed, or attached to transaction files—branded for the sending agent or TC.",
            },
        ],
        outcomes: [
            { metric: "Form Completion", value: "< 3 min", description: "Average time to complete the utility form" },
            { metric: "Follow-ups", value: "↓ 80%", description: "Reduction in back-and-forth emails for utility info" },
            { metric: "Data Accuracy", value: "↑", description: "AI suggestions reduce typos and guesswork" },
        ],
        featured: true,
        color: "#8b5cf6",
        externalUrl: "https://utilitysheet.com",
    },
    {
        slug: "pa-real-estate-support",
        title: "PA Real Estate Support Services",
        tagline: "Responsive web presence for a Pennsylvania-based real estate transaction coordination team",
        description: "Complete website redesign with clear services, pricing, and intake flows that sync directly with the team's workflow.",
        category: "Real Estate",
        year: "2024",
        client: "PA Real Estate Support Services, LLC",
        role: "Designer & Developer",
        tools: ["Next.js", "Tailwind CSS", "Vercel", "Resend"],
        thumbnail: "/images/projects/pares-thumb.jpg",
        heroImage: "/images/projects/pares-hero.jpg",
        images: [
            "/images/projects/pares-1.jpg",
            "/images/projects/pares-2.jpg",
        ],
        problem: "The team relied on spreadsheets and email to collect brokerage requests. Their DIY site left prospects unsure which services were covered and how to start.",
        solution: "Created a revised brand voice, service breakdown, and guided intake forms that sync to the team's workflow. A component library empowers future landing pages and campaigns.",
        process: [
            {
                title: "Positioning & Messaging",
                description: "Refined service packages and FAQs written specifically for busy brokerages who need clear, scannable information.",
            },
            {
                title: "Conversion-Focused Design",
                description: "Built multiple contact paths—consultation scheduling, intake form, and direct phone—to match different prospect preferences.",
            },
            {
                title: "SEO & Schema",
                description: "Implemented search-friendly copy and structured data to capture local real estate support queries.",
            },
        ],
        outcomes: [
            { metric: "Intake Completion", value: "+42%", description: "Increase in completed intake forms" },
            { metric: "Search Impressions", value: "+37%", description: "Growth in branded search clicks within 60 days" },
            { metric: "Scope Clarity", value: "↓", description: "Less time spent clarifying scope before projects begin" },
        ],
        featured: true,
        color: "#3b82f6",
        externalUrl: "https://parealestatesupport.com",
    },
    {
        slug: "blissful-existence",
        title: "Blissful Existence Healing Acres",
        tagline: "Nature-inspired design system for a healing retreat center",
        description: "Immersive website with event booking flows, story-driven copy, and automation-ready forms for a wellness retreat property.",
        category: "Wellness",
        year: "2024",
        client: "Blissful Existence Healing Acres",
        role: "Designer & Developer",
        tools: ["Next.js", "Framer Motion", "Resend", "Tailwind CSS"],
        thumbnail: "/images/projects/blissful-thumb.jpg",
        heroImage: "/images/projects/blissful-hero.jpg",
        images: [
            "/images/projects/blissful-1.jpg",
            "/images/projects/blissful-2.jpg",
        ],
        problem: "Retreats were filling via phone call sign-ups. The team needed a site that reflected the property experience and captured bookings without manual follow-up.",
        solution: "Delivered immersive visuals, dynamic event listings, and automated confirmations. An email nurture sequence and resource library keeps guests engaged.",
        process: [
            {
                title: "Visual Identity",
                description: "Soft gradients, curated photography, and motion micro-interactions that reflect the peaceful retreat environment.",
            },
            {
                title: "Booking System",
                description: "Event calendar with lead capture and automated confirmations that eliminated manual follow-up work.",
            },
            {
                title: "Story-Driven Copy",
                description: "Content that communicates the mission, practitioners, and facilities in an authentic, engaging way.",
            },
        ],
        outcomes: [
            { metric: "Online Bookings", value: "2×", description: "Doubled within 90 days of launch" },
            { metric: "Admin Time", value: "-6 hrs/week", description: "Saved through automated confirmations and reminders" },
            { metric: "Engagement", value: "↑", description: "Higher time-on-site and return visits" },
        ],
        featured: true,
        color: "#10b981",
        externalUrl: "https://blissfulexistencehealingacres.com",
    },
    {
        slug: "three-penn-properties",
        title: "Three Penn Properties",
        tagline: "Professional web presence for a property management and investment firm",
        description: "Modern hub showcasing portfolio metrics, property listings, and streamlined lead routing for investors and tenants.",
        category: "Real Estate",
        year: "2023",
        client: "Three Penn Properties, LLC",
        role: "Designer & Developer",
        tools: ["Next.js", "Sanity CMS", "Vercel", "Tailwind CSS"],
        thumbnail: "/images/projects/threepenn-thumb.jpg",
        heroImage: "/images/projects/threepenn-hero.jpg",
        images: [
            "/images/projects/threepenn-1.jpg",
            "/images/projects/threepenn-2.jpg",
        ],
        problem: "Investors and tenants received PDFs and ad-hoc updates. Leadership wanted a modern hub that showcased portfolio metrics and routed leads correctly.",
        solution: "Built modular property cards, lead routing workflows, and analytics dashboards so the team could monitor outreach and conversions.",
        process: [
            {
                title: "Property Cards System",
                description: "Modular property cards with key metrics and inquiry CTAs that update dynamically from the CMS.",
            },
            {
                title: "Lead Routing",
                description: "Smart routing for tenant, investor, and partnership inquiries to the right team members.",
            },
            {
                title: "Performance Optimization",
                description: "Built for speed with Lighthouse 95+ scores across all core metrics.",
            },
        ],
        outcomes: [
            { metric: "Investor Inquiries", value: "+55%", description: "Increase in qualified investor leads" },
            { metric: "Response Time", value: "<12 hrs", description: "Support ticket response time" },
            { metric: "Lighthouse", value: "95+", description: "Performance scores across all metrics" },
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
