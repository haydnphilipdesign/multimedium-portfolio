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
    industries?: string[];
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
        slug: "nomad-gear",
        title: "Nomad Gear",
        kind: "Client",
        metaTitle: "Nomad Gear - Camping Rental Website Design",
        metaDescription:
            "Story-driven, motion-forward website design for a premium outdoor gear rental company—built to feel adventurous while keeping the booking path clear.",
        socialCaption:
            "Nomad Gear: an adventure-forward rental site with layered depth, grounded typography, and a clear booking path.",
        tags: ["Web Design", "Motion Design", "React", "GSAP", "WebGL"],
        tagline: "Adventure-forward rental site with a clear booking path",
        description:
            "A motion-forward marketing site with layered depth and a category-first browse flow—built to make booking feel obvious.",
        category: "Web Design",
        year: "2026",
        client: "Nomad Gear",
        role: "Motion Design, UI/UX Design, Front-End Development",
        tools: ["React + TypeScript", "GSAP ScrollTrigger", "Tailwind CSS", "Vite"],
        thumbnail: "/images/projects/nomad-gear/nomad-gear-thumb.jpg",
        heroImage: "/images/projects/nomad-gear/nomad-gear-hero.jpg",
        images: [
            "/images/projects/nomad-gear/nomad-gear-1.jpg",
            "/images/projects/nomad-gear/nomad-gear-2.jpg",
            "/images/projects/nomad-gear/nomad-gear-3.jpg",
        ],
        problem: "Nomad Gear needed a site that felt like stepping outside—not just another rental catalog. The goal was to make browsing feel like adventure while keeping the path to booking obvious.",
        solution: "Designed and built a story-led site with tactile motion, category-first browsing, and a persistent booking path. Depth and animation support the vibe, while hierarchy and CTAs keep the next step clear.",
        caseStudy: {
            headline: "Nomad Gear — Adventure Awaits",
            subheadline:
                "A story-led, motion-forward website that feels outdoorsy while keeping booking simple.",
            tldr: "Designed and built a motion-forward gear rental site with layered depth, category browsing, product highlights, and a clear booking CTA—optimized for performance and reduced-motion.",
            goals: [
                "Create an experience that feels like stepping into nature",
                "Showcase gear rentals in an engaging, non-catalog way",
                "Use motion and depth to build emotional connection",
                "Maintain fast performance despite rich animations",
            ],
            constraints: [
                "Single-page scroll experience with multiple layered sections",
                "Mobile-first responsive design with reduced-motion fallbacks",
                "WebGL effects must not block main thread or hurt performance",
                "Consistent earthy color palette (greens, creams, browns)",
            ],
            delivered: [
                "Full-screen hero with layered depth and a strong primary CTA",
                "Category-first browse section with tactile card interactions",
                "Product highlight strip designed for quick scanning",
                "Story-driven brand section that reinforces positioning",
                "Testimonials + trust signals woven into the scroll",
                "Final CTA section designed for booking",
                "Scroll-aware navigation with reduced-motion support",
            ],
            whyItWorks: [
                "Motion supports the story without hiding the offer",
                "Category-first browsing keeps exploration structured",
                "Performance budgets + reduced-motion keep it usable",
                "CTA hierarchy makes booking the obvious next step",
            ],
            approval:
                "Client approved the design direction and granted permission to feature this project in my portfolio.",
        },
        cta: {
            headline: "Need a website that stands out?",
            body: "I build immersive, motion-rich websites that create emotional connections with visitors—turning scrolls into stories.",
            ctaText: "Talk about your project",
            href: "/contact?source=case-study-nomad-gear",
        },
        process: [
            {
                title: "Immersive Hero Experience",
                description: "Layered depth and restrained motion set the tone fast—without delaying the CTA or readability.",
                image: "/images/projects/nomad-gear/nomad-gear-hero.jpg",
            },
            {
                title: "Organic Motion System",
                description: "Tactile card interactions and scroll pacing add energy while keeping hierarchy, text, and CTAs clear.",
                image: "/images/projects/nomad-gear/nomad-gear-1.jpg",
            },
            {
                title: "Cinematic Storytelling",
                description: "Section rhythm changes (products, brand story, testimonials) keep the scroll engaging and easy to skim.",
                image: "/images/projects/nomad-gear/nomad-gear-2.jpg",
            },
        ],
        outcomes: [
            { metric: "Brand Feel", value: "Adventure-forward", description: "Earthy palette + layered depth that feels outdoorsy" },
            { metric: "Browse Flow", value: "Category-first", description: "Exploration stays structured and easy to scan" },
            { metric: "Conversion Path", value: "Clear", description: "CTAs stay obvious throughout the scroll" },
        ],
        featured: true,
        color: "#3a5a40",
        externalUrl: "https://nomad-gear.vercel.app",
    },
    {
        slug: "velvet-rose",
        title: "Velvet Rose",
        kind: "Client",
        metaTitle: "Velvet Rose - Luxury Florist Website Design",
        metaDescription:
            "Romantic, premium florist website design with graceful motion, clear category browsing, and a conversion-forward storefront layout.",
        socialCaption:
            "Velvet Rose: a romantic florist site with gentle motion, editorial typography, and a clean path from browse to cart.",
        tags: ["Web Design", "Motion Design", "React", "GSAP", "E-Commerce"],
        tagline: "Romantic florist site with graceful motion and a clear shopping flow",
        description:
            "A premium storefront with gentle motion, category browsing, and product cards designed to make ordering feel easy.",
        category: "Web Design",
        year: "2026",
        client: "Velvet Rose",
        role: "Motion Design, UI/UX Design, Front-End Development",
        tools: ["React + TypeScript", "GSAP ScrollTrigger", "Tailwind CSS", "Vite"],
        thumbnail: "/images/projects/velvet-rose/velvet-rose-thumb.jpg",
        heroImage: "/images/projects/velvet-rose/velvet-rose-hero.jpg",
        images: [
            "/images/projects/velvet-rose/velvet-rose-1.jpg",
            "/images/projects/velvet-rose/velvet-rose-2.jpg",
            "/images/projects/velvet-rose/velvet-rose-3.jpg",
        ],
        problem: "Velvet Rose needed a website that conveyed the romance and artistry of their arrangements. Generic flower shop templates felt cold and transactional—they wanted visitors to feel the craft before making a purchase.",
        solution: "Designed an editorial, botanical storefront with gentle motion inspired by petals and stems. Category browsing and product hierarchy keep shopping straightforward, while typography and pacing maintain a premium feel.",
        caseStudy: {
            headline: "Velvet Rose — Botanical Elegance",
            subheadline:
                "A romantic florist website that feels premium—and makes ordering easy.",
            tldr: "Designed a premium florist storefront with gentle, organic motion, a category browse section, and a clean product grid—built to feel romantic without getting in the way of conversion.",
            goals: [
                "Capture the romance and elegance of artisan floristry",
                "Create an immersive browsing experience for flower categories",
                "Use organic motion that mimics natural growth and bloom",
                "Drive conversions while maintaining an emotional, premium feel",
            ],
            constraints: [
                "Single-page scroll with horizontal category browsing section",
                "Soft, romantic color palette (corals, pinks, creams)",
                "Performance-optimized for mobile flower orders",
                "Accessible reduced-motion fallbacks for all animations",
            ],
            delivered: [
                "Editorial hero with refined type and image-forward composition",
                "Category browsing section that stays playful but structured",
                "Story/brand section that reinforces positioning",
                "Product grid with clear pricing, CTAs, and hover states",
                "Testimonials and trust signals integrated into the scroll",
                "Final CTA section that keeps ordering the focus",
                "Reduced-motion support and mobile-first spacing",
            ],
            whyItWorks: [
                "Motion adds softness and craft without slowing shopping",
                "Category browsing improves discovery without clutter",
                "Product cards keep pricing and CTAs unmissable",
                "Typography + spacing reinforce premium positioning",
            ],
            approval:
                "Client approved the design direction and granted permission to feature this project in my portfolio.",
        },
        cta: {
            headline: "Want a website that feels alive?",
            body: "I design romantic, motion-rich experiences that connect with visitors emotionally—perfect for premium brands and artisan businesses.",
            ctaText: "Talk about your project",
            href: "/contact?source=case-study-velvet-rose",
        },
        process: [
            {
                title: "Romantic Hero Gateway",
                description: "An editorial hero with gentle motion and a clear hierarchy—designed to feel romantic without feeling busy.",
                image: "/images/projects/velvet-rose/velvet-rose-hero.jpg",
            },
            {
                title: "Kinetic Garden Categories",
                description: "A category-led browse section that encourages exploration while keeping the shopping flow structured.",
                image: "/images/projects/velvet-rose/velvet-rose-1.jpg",
            },
            {
                title: "Floating Product Market",
                description: "A clean product grid with strong CTAs, clear pricing, and hover states that add delight without hiding key actions.",
                image: "/images/projects/velvet-rose/velvet-rose-2.jpg",
            },
        ],
        outcomes: [
            { metric: "Motion Style", value: "Botanical", description: "Gentle, organic motion that supports the brand tone" },
            { metric: "Browse UX", value: "Category-led", description: "Structured exploration without a catalog feel" },
            { metric: "Conversion Clarity", value: "Checkout-forward", description: "Product cards keep CTAs and pricing clear" },
        ],
        featured: true,
        color: "#f76b6c",
        externalUrl: "https://velvet-rose-floral.vercel.app",
    },
    {
        slug: "gentlemans-blade",
        title: "Gentleman's Blade Barbershop",
        kind: "Client",
        metaTitle: "Gentleman's Blade - Vintage Barbershop Website Design",
        metaDescription:
            "Heritage-inspired barbershop website design with editorial layout, clear services, and a booking-first path that feels premium.",
        socialCaption:
            "Gentleman's Blade: a heritage-forward barbershop site with editorial layout, clear service hierarchy, and a confident booking CTA.",
        tags: ["Web Design", "Motion Design", "React", "Three.js", "WebGL"],
        tagline: "Heritage-forward barbershop site with a booking-first flow",
        description:
            "A cinematic, editorial site blending vintage tone with modern hierarchy—services, barber profiles, and a clear path to booking.",
        category: "Web Design",
        year: "2026",
        client: "Gentleman's Blade Barbershop",
        role: "Motion Design, UI/UX Design, Front-End Development",
        tools: ["React + TypeScript", "Three.js/WebGL", "GSAP ScrollTrigger", "Tailwind CSS"],
        thumbnail: "/images/projects/gentlemans-blade/gentlemans-blade-thumb.jpg",
        heroImage: "/images/projects/gentlemans-blade/gentlemans-blade-hero.jpg",
        images: [
            "/images/projects/gentlemans-blade/gentlemans-blade-1.jpg",
            "/images/projects/gentlemans-blade/gentlemans-blade-2.jpg",
            "/images/projects/gentlemans-blade/gentlemans-blade-3.jpg",
        ],
        problem: "Gentleman's Blade wanted a website that honored classic barbershop heritage while feeling modern and confident. Standard service-listing sites felt generic—they needed something with real character that still books easily.",
        solution: "Built a 'Cinematic Americana' site with editorial hierarchy, tactile motion, and a booking-first flow. Services stay scannable, barber profiles feel premium, and CTAs stay clear throughout.",
        caseStudy: {
            headline: "Gentleman's Blade — Precision Heritage",
            subheadline:
                "A cinematic barbershop website that blends 1950s Americana with modern editorial sophistication.",
            tldr: "Built a heritage-inspired barbershop website with an editorial layout, tactile interactions, and a booking-first flow. Service sections stay scannable, barber profiles feel premium, and CTAs stay clear.",
            goals: [
                "Honor classic barbershop heritage with modern confidence",
                "Create a cinematic, editorial experience that stands out",
                "Showcase services and barbers in memorable, interactive ways",
                "Drive bookings while reinforcing the premium craft brand",
            ],
            constraints: [
                "Red, Navy, Beige color palette with vintage typography",
                "3D effects must perform well on all devices",
                "Horizontal scroll pinned sections for services and barbers",
                "Film grain overlay for consistent vintage aesthetic",
            ],
            delivered: [
                "Hero that sets tone fast with a strong booking CTA",
                "Services layout designed for quick scanning and confident selection",
                "Barber gallery that highlights personality and craft",
                "Testimonials + social proof styled to match the brand tone",
                "Contact/booking section designed for mobile",
                "Subtle motion + texture for a cinematic feel",
                "Reduced-motion support and accessible focus states",
            ],
            whyItWorks: [
                "Cinematic motion creates a premium, confident brand feeling",
                "Heritage elements (vinyl, neon, blueprints) reinforce tradition",
                "3D effects add depth and modernity without losing the classic vibe",
                "Clear booking CTAs are integrated naturally throughout",
            ],
            approval:
                "Client approved the design direction and granted permission to feature this project in my portfolio.",
        },
        cta: {
            headline: "Need a website with character?",
            body: "I build cinematic, heritage-inspired websites that tell your brand's story through motion and depth—perfect for businesses with craft and tradition.",
            ctaText: "Talk about your project",
            href: "/contact?source=case-study-gentlemans-blade",
        },
        process: [
            {
                title: "Split-Blade Hero",
                description: "Bold, asymmetrical hero with depth and restrained motion—built to feel cinematic while keeping booking front-and-center.",
                image: "/images/projects/gentlemans-blade/gentlemans-blade-hero.jpg",
            },
            {
                title: "Accordion Deck Services",
                description: "Services presented as a physical stack of cards that fan out horizontally on scroll. Each card lifts and dims others on hover, with shutter-wipe description reveals.",
                image: "/images/projects/gentlemans-blade/gentlemans-blade-2.jpg",
            },
            {
                title: "Rogue's Gallery Barbers",
                description: "A barber gallery that feels like a 'meet the artists' moment—personality-forward, premium, and easy to scan.",
                image: "/images/projects/gentlemans-blade/gentlemans-blade-3.jpg",
            },
        ],
        outcomes: [
            { metric: "Brand Tone", value: "Cinematic Americana", description: "Heritage feel with modern editorial hierarchy" },
            { metric: "Service UX", value: "Scannable", description: "Clear offerings without generic lists" },
            { metric: "Booking Path", value: "Prominent", description: "CTAs integrated throughout the scroll" },
        ],
        featured: true,
        color: "#E63946",
        externalUrl: "https://gentlemans-blade.vercel.app",
    },
    {
        slug: "pop-playground",
        title: "Pop Playground",
        kind: "Client",
        metaTitle: "Pop Playground - Memphis Design Kids' Creative Website",
        metaDescription:
            "Playful Memphis-inspired website for a children’s creative studio—bold color, lively motion, and parent-friendly clarity.",
        socialCaption:
            "Pop Playground: a Memphis-inspired studio site with bold color, playful motion, and a clear path to classes and booking.",
        tags: ["Web Design", "Motion Design", "React", "GSAP", "WebGL"],
        tagline: "Memphis-inspired studio site with playful motion and parent-friendly clarity",
        description:
            "A bright, playful site with lively motion and a clear path to classes, camps, and bookings.",
        category: "Web Design",
        year: "2026",
        client: "Pop Playground",
        role: "Motion Design, UI/UX Design, Front-End Development",
        tools: ["React + TypeScript", "GSAP ScrollTrigger", "WebGL Shaders", "Tailwind CSS"],
        thumbnail: "/images/projects/pop-playground/pop-playground-thumb.jpg",
        heroImage: "/images/projects/pop-playground/pop-playground-hero.jpg",
        images: [
            "/images/projects/pop-playground/pop-playground-1.jpg",
            "/images/projects/pop-playground/pop-playground-2.jpg",
            "/images/projects/pop-playground/pop-playground-3.jpg",
        ],
        problem: "Pop Playground needed a website that captured the energy of kids’ creativity without feeling chaotic for parents. Standard templates felt too grown-up—they wanted something playful that still makes classes and booking easy to find.",
        solution: "Created a Memphis-inspired site with playful motion, bold pattern work, and a gallery that feels like scattered art on a table. The layout stays simple enough for parents to quickly understand programs, pricing, and the next step.",
        caseStudy: {
            headline: "Pop Playground — Creative Chaos",
            subheadline:
                "A playful Memphis-inspired website that feels fun—and stays clear for parents.",
            tldr: "Designed a Memphis-inspired website for a children’s creative studio: bold color, playful motion, and a gallery-forward layout—built to delight kids while keeping schedule, pricing, and booking easy to find.",
            goals: [
                "Capture the explosive energy of children's creativity",
                "Create interactions that feel lively and responsive",
                "Use Memphis design patterns with modern motion sophistication",
                "Appeal to both kids and parents with premium playfulness",
            ],
            constraints: [
                "Bold Memphis color palette (pinks, purples, greens, yellows)",
                "Playful motion without sacrificing performance",
                "Single-page experience with pinned scroll sections",
                "Cursor-reactive elements without React state updates",
            ],
            delivered: [
                "Hero with bold color system and playful motion cues",
                "Pattern + shape system that supports the brand without clutter",
                "About/story section with strong hierarchy for parents",
                "Gallery layout that feels like scattered polaroids",
                "Program highlights designed for quick scanning",
                "Mobile-first spacing + reduced-motion support",
            ],
            whyItWorks: [
                "Playful motion makes the site feel alive without feeling chaotic",
                "Memphis patterns add visual excitement without overwhelming",
                "Scattered, organic layouts mirror the creative chaos of art-making",
                "Premium polish makes parents trust while kids feel excited",
            ],
            approval:
                "Client approved the design direction and granted permission to feature this project in my portfolio.",
        },
        cta: {
            headline: "Need a website that's full of energy?",
            body: "I build playful, high-craft websites that capture attention without sacrificing clarity—great for brands that need energy and trust.",
            ctaText: "Talk about your project",
            href: "/contact?source=case-study-pop-playground",
        },
        process: [
            {
                title: "Explosive Hero Gateway",
                description: "A hero that sets the tone fast with bold color, pattern, and motion—while keeping the CTA clear and easy to spot.",
                image: "/images/projects/pop-playground/pop-playground-hero.jpg",
            },
            {
                title: "Orbital About Composition",
                description: "An image-forward layout that keeps parents oriented (what it is, who it’s for, how to join) while staying playful.",
                image: "/images/projects/pop-playground/pop-playground-1.jpg",
            },
            {
                title: "Scattered Polaroid Gallery",
                description: "A gallery pattern that feels like scattered photos on a table—fun to explore, but still scannable and readable.",
                image: "/images/projects/pop-playground/pop-playground-2.jpg",
            },
        ],
        outcomes: [
            { metric: "Motion Style", value: "Kinetic Memphis", description: "Playful motion and pattern work throughout" },
            { metric: "Color System", value: "Bold + controlled", description: "High-energy palette with clear hierarchy" },
            { metric: "Parent UX", value: "Clear", description: "Programs and booking stay easy to find" },
        ],
        featured: true,
        color: "#F795E9",
        externalUrl: "https://pop-playground-memphis.vercel.app",
    },
    {
        slug: "tag-landing-page",
        title: "Transaction Authority Group (TAG)",
        kind: "Client",
        industries: ["tc"],
        metaTitle: "Transaction Authority Group Landing Page",
        metaDescription:
            "Lead-gen landing page for TAG built to establish authority, filter for fit, and drive qualified discovery call bookings. Mobile-first and lightweight.",
        socialCaption:
            "New build: a focused booking funnel for Transaction Authority Group—authority-first, qualification-driven, and designed to convert into discovery calls.",
        tags: ["Landing Page", "Lead Generation", "Booking Flow", "Mobile-First"],
        tagline: "Authority-first landing page that qualifies established transaction coordinators and drives discovery call bookings.",
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
        problem: "TAG needed a focused landing page that converts the right visitors—established transaction coordinators and TC companies—into booked discovery calls. The goal wasn’t content depth; it was a clean, credible page that clarifies the offer, filters for fit, and pushes one action: book the call.",
        solution: "Built a single-page booking funnel designed to establish authority quickly, create self-identification through a problem → solution narrative, and drive one primary action: book the call. The layout avoids stock imagery, stays lightweight, and keeps CTAs persistent so the page stays conversion-focused.",
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
                "Client approved the design direction and granted permission to feature this project in my portfolio.",
        },
        cta: {
            headline: "Need a landing page that converts?",
            body: "I build focused, mobile-first pages designed to drive calls and leads—without bloated pages or slow load times.",
            ctaText: "Talk about your project",
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
        industries: ["tc", "real-estate"],
        metaTitle: "UtilitySheet - Real Estate Utility Info App",
        metaDescription:
            "UtilitySheet is a lightweight SaaS app that replaces utility-info back-and-forth with a guided form and clean, shareable PDF output for real estate transactions.",
        tagline: "Lightweight SaaS that eliminates utility info back-and-forth in real estate transactions",
        description: "A guided form app that helps sellers provide accurate utility provider info, generating clean, shareable PDF sheets for buyers, agents, title, and transaction coordinators. Available at UtilitySheet.com (free plan includes 3 submissions/month; Pro is $9/month).",
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
        caseStudy: {
            headline: "UtilitySheet — From Problem to Product",
            subheadline:
                "A SaaS product I built from scratch to solve a real workflow problem—end-to-end product thinking, design, and execution.",
            tldr: "As founder of UtilitySheet, I turned a common real estate workflow problem into a working SaaS product you can use today. It shows how I approach builds: start with the workflow, design for clarity, and ship a system people can actually use.",
            goals: [
                "Eliminate the back-and-forth emails about utility providers",
                "Create a guided experience that even tech-averse sellers can complete",
                "Generate professional, branded PDF output",
                "Build a sustainable SaaS business model",
            ],
            constraints: [
                "Must work for users of all technical abilities",
                "Sub-3-minute completion time",
                "Mobile-first responsive design",
                "White-label branding for agents and TCs",
            ],
            delivered: [
                "AI-assisted provider picker for location-based suggestions",
                "Step-by-step guided form with smart validation",
                "Request dashboard for agents and coordinators",
                "Branded PDF generation with custom logos",
                "Email notification system for form completion",
                "Subscription billing and user management",
            ],
            whyItWorks: [
                "Solves a genuine pain point I discovered working with TCs",
                "Turns a fuzzy question into a quick, guided workflow",
                "Professional output builds trust with all transaction parties",
                "Demonstrates full-stack product building capability",
            ],
        },
        cta: {
            headline: "Want to try UtilitySheet?",
            body: "UtilitySheet is live at UtilitySheet.com. The free plan includes 3 submissions/month; Pro is $9/month.",
            ctaText: "Sign up / log in",
            href: "https://utilitysheet.com",
        },
        process: [
            {
                title: "AI-Assisted Provider Picker",
                description: "As sellers fill out the form, the system suggests likely utility providers for their area—so they can choose from relevant options instead of guessing. Faster completion, fewer errors, less manual chasing.",
                image: "/images/projects/utilitysheet/utilitysheet-2.png",
            },
            {
                title: "Request Dashboard",
                description: "A simple dashboard for agents and coordinators to track every request at a glance, see status, and follow up without digging through email threads.",
                image: "/images/projects/utilitysheet/utilitysheet-1.png",
            },
            {
                title: "PDF Output & Branding",
                description: "Generates polished, professional utility sheets that can be shared, printed, or attached to transaction files—branded for the sending agent or TC.",
                image: "/images/projects/utilitysheet/utilitysheet-3.png",
            },
        ],
        outcomes: [
            { metric: "Seller Experience", value: "Guided", description: "Clear steps and validation reduce guesswork" },
            { metric: "Follow-ups", value: "Reduced", description: "Fewer “who’s the provider?” emails and texts" },
            { metric: "Output", value: "Shareable", description: "Clean PDF sheet that’s easy to forward and file" },
        ],
        featured: true,
        color: "#8b5cf6",
        externalUrl: "https://utilitysheet.com",
    },
    {
        slug: "norma",
        title: "Norma",
        kind: "Product",
        industries: ["tc", "real-estate"],
        metaTitle: "Norma - Closing Desk Software for Transaction Coordinators",
        metaDescription:
            "Early-access Closing Desk platform for transaction coordinators with Microsoft 365 integration, workflow rules, and AI-assisted triage to reduce inbox chaos.",
        socialCaption:
            "Building Norma: a Closing Desk platform for transaction coordinators—Outlook-native workflows, dependency tracking, and AI-assisted triage (early access).",
        tags: ["SaaS", "Real Estate Ops", "Microsoft Graph", "Workflow Automation", "AI"],
        tagline: "Early-access Closing Desk platform that keeps every transaction organized, compliant, and moving.",
        description:
            "A Closing Desk platform for transaction coordinators that integrates with Microsoft 365 to centralize deadlines, dependencies, and file setup—built for the way TCs actually work.",
        category: "SaaS",
        year: "2026",
        client: "Internal Product (Early Access)",
        role: "Full-Stack Development, Product Architecture",
        tools: ["Next.js (App Router)", "PostgreSQL + Prisma", "Microsoft Graph API", "LLM workflows (Gemini)"],
        thumbnail: "/images/projects/norma/norma-thumb.png",
        heroImage: "/images/projects/norma/norma-hero.png",
        externalUrl: "https://normatc.com",
        images: [
            "/images/projects/norma/norma-1.png",
            "/images/projects/norma/norma-2.png",
            "/images/projects/norma/norma-3.png",
        ],
        problem: "Transaction Coordinators live in a flood of emails, deadlines, compliance rules, and “who-owes-me-what” follow-ups across dozens of active files. Traditional CRMs and generic task tools don’t map cleanly to TC workflows—so important signals get buried, dependencies slip, and setup stays manual.",
        solution: "Built Norma as a dedicated “Closing Desk” that augments the tools TCs already use. It centralizes today’s deadlines and follow-ups, syncs context into Outlook/Calendar/To Do, and uses rules + AI to catch missing info early—so each file starts organized and stays on track.",
        caseStudy: {
            headline: "Norma — The Closing Desk for Transaction Coordinators",
            subheadline:
                "A TC-first operations platform designed to reduce inbox chaos, enforce consistency, and prevent missed follow-ups.",
            tldr: "Norma is an early-access Closing Desk platform for transaction coordinators. It integrates with Microsoft 365, tracks “Waiting On” dependencies, and automates workflow signals (rules + AI) so files start clean and deadlines don’t get buried.",
            goals: [
                "Centralize deadlines + follow-ups into a single daily view",
                "Make “Waiting On” dependencies obvious and actionable",
                "Integrate with Outlook/Calendar/To Do (instead of replacing them)",
                "Reduce setup + missing-info back-and-forth at file start",
            ],
            constraints: [
                "TC workflows vary by state/brokerage—needs flexible rule packs",
                "Must keep the user in familiar tools (Microsoft 365)",
                "Fast daily use: minimal clicks, high signal-to-noise",
                "Secure OAuth + careful handling of sensitive deal data",
            ],
            delivered: [
                "Daily “Closing Desk” dashboard that surfaces what matters today",
                "Deep Microsoft Graph integration (email, calendar, To Do sync)",
                "“Waiting On” engine for tracking external dependencies",
                "Rule-based compliance workflows (deadline + stage logic)",
                "AI-assisted inbox triage + document/missing-info signals",
                "Webhook-based canonical intake pipeline (forms → transaction seed)",
            ],
            whyItWorks: [
                "Meets TCs where they already work: Outlook + Microsoft 365",
                "Dependency-first design solves the real coordination bottleneck",
                "Rules enforce consistency without forcing rigid templates",
                "AI is used for triage + signal, not gimmicky chat",
            ],
        },
        cta: {
            headline: "Want early access to Norma?",
            body: "Norma is in early access for transaction coordinators. If your day lives in Outlook and you want a real Closing Desk, join the waitlist at NormaTC.com.",
            ctaText: "Join the waitlist",
            href: "https://normatc.com",
        },
        process: [
            {
                title: "Closing Desk Daily View",
                description: "A single dashboard built for the questions TCs ask every morning: what’s due, who am I waiting on, and what’s at risk.",
                image: "/images/projects/norma/norma-1.png",
            },
            {
                title: "Dependency Tracking (“Waiting On”)",
                description: "A dedicated dependency system that makes follow-ups explicit—so nothing gets buried in threads or side notes.",
                image: "/images/projects/norma/norma-2.png",
            },
            {
                title: "AI-Assisted Signals",
                description: "AI triage to classify inbound updates and flag missing info early—used for signal and speed, not novelty.",
                image: "/images/projects/norma/norma-3.png",
            },
        ],
        outcomes: [
            { metric: "Primary Workflow", value: "TC-first", description: "Built around deadlines, dependencies, and file setup" },
            { metric: "Integrations", value: "Microsoft 365", description: "Graph API email, calendar, and task sync" },
            { metric: "Automation Style", value: "Rules + AI", description: "Compliance logic plus triage/missing-info signals" },
        ],
        featured: false,
        color: "#4f46e5",
    },
    {
        slug: "peppers-portal",
        title: "Pepper's Portal",
        kind: "Personal",
        metaTitle: "Pepper's Portal - Family Dog Care Tracker PWA",
        metaDescription:
            "Family-focused dog care tracker PWA with one-tap walk logging, shared routines, and a playful leaderboard to keep daily coordination simple.",
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
        caseStudy: {
            headline: "Pepper's Portal - Family Coordination Made Simple",
            subheadline:
                "A lightweight personal portal that removes routine confusion with one-tap logging and shared visibility.",
            tldr: "Designed and built a family-facing PWA for walk tracking, routine logging, and shared visibility. The product solved everyday coordination gaps with a fast, mobile-first interface.",
            goals: [
                "Remove routine confusion across multiple household members",
                "Make logging so fast that usage stays consistent",
                "Create shared visibility without account friction",
            ],
            whyItWorks: [
                "One-tap actions reduce friction at the moment of use",
                "Shared history gives everyone the same source of truth",
                "Gamification increased consistency without adding complexity",
            ],
        },
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
        caseStudy: {
            headline: "7-Day Workout Tracker - Built for a Single User Workflow",
            subheadline:
                "A local-first personal tool designed around one training system instead of generic app templates.",
            tldr: "Built a no-backend workout tracker tailored to a specific 7-day split. The app prioritizes fast logging, private local data storage, and zero account setup.",
            goals: [
                "Match a specific training split exactly",
                "Avoid backend and account overhead",
                "Keep progress tracking simple and consistent",
            ],
            whyItWorks: [
                "Exact-fit structure beats generic fitness templates",
                "Local storage removes setup barriers and privacy concerns",
                "Simple interfaces increase daily usage reliability",
            ],
        },
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
        industries: ["tc", "real-estate"],
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
        caseStudy: {
            headline: "PA Real Estate Support Services - Clarity + Intake Conversion",
            subheadline:
                "A TC-focused redesign that clarified services, improved trust, and increased completed intake requests.",
            tldr: "Redesigned the site around clearer service positioning, stronger trust signals, and guided intake paths. The result improved intake completion and reduced pre-sale clarification overhead.",
            goals: [
                "Clarify service scope before the first conversation",
                "Increase completed intake submissions",
                "Reduce manual back-and-forth before engagement",
            ],
            whyItWorks: [
                "Service hierarchy made offerings easier to understand quickly",
                "Trust and proof blocks reduced hesitation before action",
                "Guided intake flow improved lead quality and readiness",
            ],
        },
        process: [
            {
                title: "Conversion-First Hero Messaging",
                description: "Clarified the offer with a strong headline, clear supporting copy, and immediate CTAs—so prospects know exactly what to do next.",
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
        slug: "client-portal",
        title: "Client Portal",
        kind: "Product",
        industries: ["tc", "real-estate"],
        metaTitle: "Client Portal - Secure Dashboard for Requests, Status, and Files",
        metaDescription:
            "A secure, mobile-friendly client portal that centralizes project status, requests, and file sharing in one streamlined interface.",
        socialCaption:
            "Client Portal case study: secure login, request tracking, and shared visibility in one clean, mobile-friendly workflow.",
        tags: ["Portal", "UX Design", "Client Experience", "Dashboard", "Product Build"],
        tagline: "Secure client dashboard for status visibility, requests, and streamlined communication",
        description:
            "A portal experience that gives clients one place to log in, check progress, submit requests, and stay aligned without email sprawl.",
        category: "Portal",
        year: "2026",
        client: "Internal product build",
        role: "Product Design, UI/UX, Full-Stack Development",
        tools: ["Secure authentication", "Role-based views", "Request dashboard", "Responsive UI patterns"],
        thumbnail: "/images/portal/portal-dashboard-desktop.png",
        heroImage: "/images/portal/portal-login-desktop.png",
        images: [
            "/images/portal/portal-dashboard-desktop.png",
            "/images/portal/portal-dashboard-mobile.png",
            "/images/portal/portal-login-desktop.png",
            "/images/portal/portal-login-mobile.png",
        ],
        problem: "Client communication and handoffs were scattered across email, DMs, and shared docs. That made status hard to track and created avoidable follow-up loops.",
        solution: "Built a dedicated portal with secure login, dashboard visibility, and request tracking so clients always know current status, next steps, and where to submit updates.",
        caseStudy: {
            headline: "Client Portal - One Source of Truth",
            subheadline:
                "A structured portal experience that keeps project communication, status, and requests in one place.",
            tldr: "Designed and built a client portal that consolidates status, communication, and request intake into a single workflow. Clients get clear visibility without needing to chase updates.",
            goals: [
                "Replace fragmented communication with a centralized client experience",
                "Give clients real-time status visibility with less manual follow-up",
                "Standardize request intake to reduce context switching",
            ],
            constraints: [
                "Mobile-first UX for busy users checking updates from phones",
                "Simple authentication flow without adding friction",
                "Clear information hierarchy for quick scanning",
            ],
            delivered: [
                "Secure login experience with clear session states",
                "Dashboard that surfaces active requests and current status",
                "Responsive layouts optimized for desktop and mobile usage",
                "Structured request workflow for cleaner handoffs",
            ],
            whyItWorks: [
                "Centralized visibility reduces email ping-pong and uncertainty",
                "Clients can self-serve status checks at any time",
                "Standardized request capture improves delivery consistency",
            ],
        },
        cta: {
            headline: "Need a client-facing portal in your workflow?",
            body: "I design and build portal experiences that help clients get answers faster while keeping operations organized behind the scenes.",
            ctaText: "Talk about your project",
            href: "/contact?source=case-study-client-portal",
        },
        process: [
            {
                title: "Secure Login Experience",
                description: "Designed a clean login flow that feels professional, keeps friction low, and guides users clearly into the portal.",
                image: "/images/portal/portal-login-desktop.png",
            },
            {
                title: "Operational Dashboard Design",
                description: "Built a dashboard layout focused on fast scanning so users can see priorities, request status, and next actions at a glance.",
                image: "/images/portal/portal-dashboard-desktop.png",
            },
            {
                title: "Mobile Portal Optimization",
                description: "Adapted the portal experience for mobile so clients can check updates, review status, and submit requests from anywhere.",
                image: "/images/portal/portal-dashboard-mobile.png",
            },
        ],
        outcomes: [
            { metric: "Portal Access", value: "24/7", description: "Clients can check status and updates whenever needed" },
            { metric: "Status Visibility", value: "Centralized", description: "One dashboard for updates, requests, and next steps" },
            { metric: "Workflow Quality", value: "More consistent", description: "Structured intake reduces follow-up friction" },
        ],
        featured: true,
        color: "#0f766e",
        externalUrl: "https://portal.multimedium.dev",
    },
    {
        slug: "blissful-existence",
        title: "Blissful Existence Healing Acres",
        kind: "Client",
        industries: ["wellness"],
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
        caseStudy: {
            headline: "Blissful Existence - Story-Led Retreat Conversion",
            subheadline:
                "A wellness web experience that balanced atmosphere with clear booking pathways and automation.",
            tldr: "Built an immersive retreat website with booking-focused flows, clearer offering structure, and automated follow-up. The new flow increased online bookings and reduced manual admin workload.",
            goals: [
                "Reflect the retreat atmosphere while maintaining conversion clarity",
                "Increase direct online bookings",
                "Reduce manual follow-up and confirmation overhead",
            ],
            whyItWorks: [
                "Photo-first storytelling supported emotional connection",
                "Scannable offerings reduced decision friction",
                "Automated confirmations improved operational consistency",
            ],
        },
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
        industries: ["real-estate"],
        tagline: "Professional web presence for a property management and investment firm",
        description: "Modern hub that highlights the portfolio, builds trust with proof, and routes tenants to the right next step—including the TenantCloud portal.",
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
        caseStudy: {
            headline: "Three Penn Properties - Multi-Audience Clarity",
            subheadline:
                "A modern property hub that serves investors and tenants with clearer pathways and faster support routing.",
            tldr: "Rebuilt the site as a clear central hub for investors and tenants, improving credibility, routing support requests faster, and increasing qualified investor inquiries.",
            goals: [
                "Create a clearer multi-audience navigation structure",
                "Improve investor confidence with stronger proof presentation",
                "Route tenant support and onboarding more efficiently",
            ],
            whyItWorks: [
                "Audience-specific pathways reduced navigation confusion",
                "Portfolio proof improved investor trust signals",
                "TenantCloud integration lowered support friction",
            ],
        },
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
    {
        slug: "northpoint-realty",
        title: "NorthPoint Realty Group",
        kind: "Client",
        industries: ["real-estate"],
        metaTitle: "NorthPoint Realty Group - Lead-Gen Real Estate Website",
        metaDescription:
            "Conversion-focused website design for a real estate team. Features dual buyer/seller funnels, market stats, scrolling testimonials, and prominent intake forms.",
        socialCaption:
            "New build: a high-converting real estate team website for NorthPoint Realty Group—dual buyer/seller funnels, market stats, and lead capture designed to drive qualified inquiries.",
        tags: ["Web Design", "Lead Generation", "Real Estate", "Conversion Design", "Mobile-First"],
        tagline: "Conversion-focused website for a real estate team driving buyer and seller leads",
        description:
            "High-converting website optimized for lead generation with dual buyer/seller pathways, scrolling testimonials, market stats, and prominent intake forms throughout.",
        category: "Real Estate",
        year: "2026",
        client: "NorthPoint Realty Group",
        role: "Web Design, UI/UX, Front-End Development",
        tools: ["HTML/CSS/JS", "Mobile-first design", "Lead capture forms", "Vercel hosting"],
        thumbnail: "/images/projects/northpoint-realty/northpoint-thumb.png",
        heroImage: "/images/projects/northpoint-realty/northpoint-hero.png",
        images: [
            "/images/projects/northpoint-realty/northpoint-1.png",
            "/images/projects/northpoint-realty/northpoint-2.png",
            "/images/projects/northpoint-realty/northpoint-hero.png",
        ],
        problem: "NorthPoint Realty Group needed a website that could generate leads for both buyers and sellers while establishing trust quickly. Their previous site lacked clear conversion paths and didn't showcase their team's experience or market expertise.",
        solution: "Designed a conversion-first website with separate buyer and seller pathways, each with dedicated intake forms. Added scrolling testimonials, real-time market stats, and trust badges to build credibility. The design uses a professional deep blue and red color scheme that conveys authority and confidence.",
        caseStudy: {
            headline: "NorthPoint Realty — Your Next Move Starts Here",
            subheadline:
                "A conversion-focused real estate website designed to capture buyer and seller leads with authority and trust.",
            tldr: "Built a lead-generation website for NorthPoint Realty Group with separate buyer/seller funnels, prominent intake forms, scrolling testimonials, and market stats. The design prioritizes conversions while building trust through social proof and a professional aesthetic.",
            goals: [
                "Create separate, optimized pathways for buyers and sellers",
                "Establish immediate trust and authority",
                "Drive qualified lead submissions through prominent intake forms",
                "Showcase market expertise with real-time stats",
            ],
            constraints: [
                "Mobile-first design for on-the-go real estate clients",
                "Professional color palette (deep blue, white, red accents)",
                "Fast load times for SEO and user experience",
                "Clear CTAs visible without scrolling",
            ],
            delivered: [
                "Dual-pathway hero with 'I'm Buying' and 'I'm Selling' CTAs",
                "Trust badges showing 500+ homes sold, 15+ years, 98% satisfaction",
                "Dedicated buyer section with personalized search form",
                "Seller section with free home valuation form",
                "Market stats section with median price, days on market, sale-to-list ratio",
                "Infinite-scroll testimonials strip with client stories",
                "Team section showcasing agent expertise",
                "Contact section with multiple pathways (call, email, form)",
            ],
            whyItWorks: [
                "Dual pathways reduce friction—visitors immediately see their relevant path",
                "Trust badges and testimonials overcome initial skepticism",
                "Market stats position the team as local experts",
                "Prominent forms on every section maximize conversion opportunities",
            ],
            approval:
                "Client approved the design direction and granted permission to feature this project in my portfolio.",
        },
        cta: {
            headline: "Need a real estate website that converts?",
            body: "I build lead-focused real estate websites that turn visitors into clients—with clear pathways, trust signals, and forms that actually get filled out.",
            ctaText: "Talk about your project",
            href: "/contact?source=case-study-northpoint-realty",
        },
        process: [
            {
                title: "Dual-Pathway Hero",
                description: "Split CTA design immediately segments visitors into buyer or seller pathways, reducing decision friction and increasing relevance of the experience.",
                image: "/images/projects/northpoint-realty/northpoint-hero.png",
            },
            {
                title: "Trust-Building Sections",
                description: "Market stats, scrolling testimonials, and team profiles work together to establish authority and overcome initial skepticism.",
                image: "/images/projects/northpoint-realty/northpoint-2.png",
            },
            {
                title: "Conversion-First Forms",
                description: "Prominent intake forms in buyer and seller sections capture leads with minimal friction—budget, timeline, and contact info all in one place.",
                image: "/images/projects/northpoint-realty/northpoint-1.png",
            },
        ],
        outcomes: [
            { metric: "Lead Pathways", value: "2", description: "Separate buyer and seller funnels" },
            { metric: "Trust Signals", value: "Layered", description: "Stats, testimonials, and team profiles" },
            { metric: "Intake Forms", value: "3", description: "Strategically placed throughout the site" },
        ],
        featured: true,
        color: "#0A2540",
        externalUrl: "https://northpoint-realty-group.vercel.app/",
    },
    {
        slug: "momentum-coaching",
        title: "Momentum Real Estate Coaching",
        kind: "Client",
        industries: ["real-estate", "coaching"],
        metaTitle: "Momentum Real Estate Coaching - Premium Coaching Website",
        metaDescription:
            "Premium website for a real estate coaching program with bold typography, tiered pricing cards, and results-focused testimonials.",
        socialCaption:
            "New build: a premium coaching website for Momentum Real Estate Coaching—bold typography, tiered pricing, and results-focused design that commands authority.",
        tags: ["Web Design", "Premium Design", "Coaching", "Real Estate", "Conversion Design"],
        tagline: "Premium coaching website for real estate professionals building empires",
        description:
            "Bold, high-contrast website featuring dramatic typography, premium pricing tiers, results-driven testimonials, and a confident black/white/gold aesthetic.",
        category: "Real Estate",
        year: "2026",
        client: "Momentum Real Estate Coaching",
        role: "Web Design, UI/UX, Front-End Development",
        tools: ["HTML/CSS/JS", "Premium typography", "Pricing cards", "Vercel hosting"],
        thumbnail: "/images/projects/momentum-coaching/momentum-thumb.png",
        heroImage: "/images/projects/momentum-coaching/momentum-hero.png",
        images: [
            "/images/projects/momentum-coaching/momentum-1.png",
            "/images/projects/momentum-coaching/momentum-2.png",
            "/images/projects/momentum-coaching/momentum-hero.png",
        ],
        problem: "Momentum Real Estate Coaching needed a website that matched the premium positioning of their coaching programs. They wanted to attract serious real estate professionals—not tire kickers—with a bold, confident design that justified their high-ticket pricing.",
        solution: "Created a high-contrast, text-driven website with dramatic typography, a black/white/gold color scheme, and premium pricing cards. The design leads with bold claims backed by specific results, uses social proof from major brokerages, and presents three clear program tiers with transparent pricing.",
        caseStudy: {
            headline: "Momentum — Stop Chasing Deals. Build an Empire.",
            subheadline:
                "A premium coaching website that commands authority and justifies high-ticket pricing through bold design and results-driven messaging.",
            tldr: "Built a high-end coaching website with dramatic black/gold aesthetic, tiered pricing ($1,497–$7,500/month), and results-focused testimonials. The design positions Momentum as the elite choice for serious real estate professionals ready to scale.",
            goals: [
                "Establish premium positioning that justifies high-ticket pricing",
                "Attract serious real estate professionals, not beginners",
                "Showcase specific, measurable client results",
                "Drive strategy call bookings for qualified leads",
            ],
            constraints: [
                "High-contrast black/white/gold color palette",
                "Text-driven design with large, bold typography",
                "Premium feel without being flashy or gimmicky",
                "Mobile-first with smooth hover interactions",
            ],
            delivered: [
                "Dramatic hero with 'Stop Chasing Deals. Build an Empire.' headline",
                "Stats bar showing $847M+ volume, 2,400+ agents, 94% goal achievement",
                "Social proof banner with major brokerage names",
                "Problem/solution section addressing pain points",
                "Three-tier pricing cards (Accelerate, Elite, Empire)",
                "Results testimonials with specific metrics ($1.2M to $4.8M GCI)",
                "Bold CTA section driving strategy call bookings",
            ],
            whyItWorks: [
                "Black/gold aesthetic signals premium positioning and authority",
                "Specific numbers in testimonials prove real results",
                "Transparent pricing filters for serious buyers",
                "Bold claims backed by social proof build immediate trust",
            ],
            approval:
                "Client approved the design direction and granted permission to feature this project in my portfolio.",
        },
        cta: {
            headline: "Need a website that commands premium prices?",
            body: "I build bold, high-end websites for coaches and consultants who want their web presence to match their expertise—and their pricing.",
            ctaText: "Talk about your project",
            href: "/contact?source=case-study-momentum-coaching",
        },
        process: [
            {
                title: "Authority-First Hero",
                description: "Dramatic typography and bold claims establish premium positioning immediately. Stats and brokerage logos build credibility without lengthy explanations.",
                image: "/images/projects/momentum-coaching/momentum-hero.png",
            },
            {
                title: "Tiered Pricing Strategy",
                description: "Three clear program levels with transparent pricing help visitors self-select. The featured 'Elite' tier uses visual hierarchy to drive most conversions.",
                image: "/images/projects/momentum-coaching/momentum-1.png",
            },
            {
                title: "Results-Driven Testimonials",
                description: "Each testimonial leads with specific numbers—$1.2M to $4.8M, 47 to 112 transactions—proving tangible outcomes rather than vague praise.",
                image: "/images/projects/momentum-coaching/momentum-2.png",
            },
        ],
        outcomes: [
            { metric: "Pricing Tiers", value: "3", description: "Accelerate, Elite, Empire programs" },
            { metric: "Trust Signals", value: "5+", description: "Major brokerage logos displayed" },
            { metric: "Results Shown", value: "Specific", description: "Exact revenue and transaction growth" },
        ],
        featured: true,
        color: "#C9A227",
        externalUrl: "https://momentum-real-estate-coaching.vercel.app/",
    },
    {
        slug: "clarity-growth",
        title: "Clarity Growth Co",
        kind: "Client",
        industries: ["wellness", "coaching"],
        metaTitle: "Clarity Growth Co - Scroll-Driven Business Coaching Website",
        metaDescription:
            "Editorial coaching website with scroll-driven sections, GSAP motion, and a calm visual system designed for clarity and sustainable growth.",
        socialCaption:
            "New build: a scroll-driven editorial website for Clarity Growth Co—pinned sections, GSAP animations, and a calm, tactile design that feels like a curated workbook.",
        tags: ["Web Design", "Motion Design", "React", "GSAP", "Scroll Animations"],
        tagline: "Scroll-driven editorial website for busy founders seeking work-life balance",
        description:
            "Airy, editorial website with scroll-driven pinned sections, tactile paper textures, hand-drawn accents, and organic animations that feel like a curated workbook.",
        category: "Wellness",
        year: "2026",
        client: "Clarity Growth Co",
        role: "Motion Design, UI/UX, Front-End Development",
        tools: ["React + Vite", "GSAP ScrollTrigger", "Custom animations", "Vercel hosting"],
        thumbnail: "/images/projects/clarity-growth/clarity-thumb.png",
        heroImage: "/images/projects/clarity-growth/clarity-hero.png",
        images: [
            "/images/projects/clarity-growth/clarity-1.png",
            "/images/projects/clarity-growth/clarity-2.png",
            "/images/projects/clarity-growth/clarity-hero.png",
        ],
        problem: "Clarity Growth Co needed a website that embodied their brand promise: helping busy founders build businesses that fit their lives. Generic coaching sites felt too corporate or too 'hustle culture'—they wanted something calm, editorial, and intentionally designed.",
        solution: "Designed an airy, scroll-driven website that feels like a curated workbook. Each section pins in place with smooth GSAP animations, using tactile paper textures, hand-drawn circle markers, and friendly flat illustrations. The experience is calm and intentional, matching the brand's promise of sustainable growth.",
        caseStudy: {
            headline: "Clarity Growth Co — Build a business that still fits your life.",
            subheadline:
                "A scroll-driven editorial website that embodies calm, intentional growth for busy founders.",
            tldr: "Built a scroll-driven website with GSAP pinned sections, tactile paper textures, and friendly flat illustrations. The design feels like a curated workbook—airy, editorial, and calm—matching Clarity's promise of sustainable business growth without burnout.",
            goals: [
                "Embody the brand promise of calm, sustainable growth",
                "Create a unique scroll-driven interactive experience",
                "Feel editorial and tactile, like a designed workbook",
                "Drive quiz completions and discovery call bookings",
            ],
            constraints: [
                "Warm paper textures with limited color palette (cream, navy, sky blue)",
                "GSAP ScrollTrigger for pinned section animations",
                "Performance-optimized despite rich animations",
                "Mobile-responsive with reduced motion fallbacks",
            ],
            delivered: [
                "7 pinned scroll sections with 3-phase animation (entrance/settle/exit)",
                "Hero with auto-play entrance animation and illustrated workspace",
                "Problem/solution section establishing the brand narrative",
                "Social proof section with specific outcome metrics",
                "Signature offers card with 'sticky note' design treatment",
                "3-step process section (Map it, Cut it, Protect it)",
                "Lead gen section for free guide download",
                "Quiz intake form for qualified lead capture",
            ],
            whyItWorks: [
                "Scroll-driven animations create engagement without feeling busy",
                "Paper textures and hand-drawn elements feel warm and approachable",
                "Pinned sections give each message dedicated attention",
                "The calm aesthetic matches the brand promise of less hustle, more margin",
            ],
            approval:
                "Client approved the design direction and granted permission to feature this project in my portfolio.",
        },
        cta: {
            headline: "Need a website that feels different?",
            body: "I build scroll-driven, motion-rich websites that create unique experiences—perfect for brands that want to stand out from cookie-cutter templates.",
            ctaText: "Talk about your project",
            href: "/contact?source=case-study-clarity-growth",
        },
        process: [
            {
                title: "Editorial Hero Experience",
                description: "Auto-play entrance animations and a friendly workspace illustration immediately establish the calm, intentional brand tone.",
                image: "/images/projects/clarity-growth/clarity-hero.png",
            },
            {
                title: "Signature Offer Card",
                description: "The 'Clarity Sprint' product is presented as a tactile sticky note with rounded corners, soft shadows, and a navy accent circle—feeling like something you'd want to pick up.",
                image: "/images/projects/clarity-growth/clarity-1.png",
            },
            {
                title: "Process Visualization",
                description: "The 3-step system (Map it, Cut it, Protect it) uses large typography and a friendly illustration to make the method feel simple and repeatable.",
                image: "/images/projects/clarity-growth/clarity-2.png",
            },
        ],
        outcomes: [
            { metric: "Animation Style", value: "Scroll-Driven", description: "GSAP pinned sections with 3-phase motion" },
            { metric: "Sections", value: "7", description: "Each with unique entrance/settle/exit choreography" },
            { metric: "Design Feel", value: "Editorial", description: "Tactile paper textures and hand-drawn accents" },
        ],
        featured: true,
        color: "#1B2B40",
        externalUrl: "https://clarity-growth-co.vercel.app/",
    },
];

export function getFeaturedProjects(): Project[] {
    return projects.filter((p) => p.featured);
}

const homeFeaturedProjectSlugs: string[] = [
    "tag-landing-page",
    "pa-real-estate-support",
    "client-portal",
    "utility-sheet",
    "northpoint-realty",
    "gentlemans-blade",
    "momentum-coaching",
];

export function getHomeFeaturedProjects(): Project[] {
    const bySlug = new Map(projects.map((project) => [project.slug, project]));
    return homeFeaturedProjectSlugs
        .map((slug) => bySlug.get(slug))
        .filter((project): project is Project => Boolean(project));
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.map((p) => p.slug);
}
