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
        slug: "nomad-gear",
        title: "Nomad Gear",
        kind: "Client",
        metaTitle: "Nomad Gear - Camping Rental Website Design",
        metaDescription:
            "Immersive, motion-driven website design for a premium outdoor gear rental company. Built with React, GSAP animations, and cinematic visual storytelling.",
        socialCaption:
            "New build: an ultra-dynamic camping gear rental website for Nomad Gear—cinematic parallax, WebGL effects, and adventure-first design.",
        tags: ["Web Design", "Motion Design", "React", "GSAP", "WebGL"],
        tagline: "Motion-rich website design for a premium camping gear rental experience",
        description:
            "Immersive, animation-driven website with cinematic parallax effects, WebGL transitions, and organic visual storytelling for outdoor adventure seekers.",
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
        problem: "Nomad Gear needed a website that captured the feeling of outdoor adventure—not just a catalog of products, but an immersive experience that makes visitors want to get outside. Traditional static websites wouldn't convey the energy and excitement of camping culture.",
        solution: "Designed and built a motion-rich website with cinematic parallax, organic animations, and WebGL effects. Every section tells a visual story: floating category cards, horizontal-scroll product showcases, and a testimonial orbit system. The result is a site that feels alive and adventurous.",
        caseStudy: {
            headline: "Nomad Gear — Adventure Awaits",
            subheadline:
                "A cinematic, motion-driven website that brings the thrill of outdoor adventure to the screen.",
            tldr: "Built an immersive camping gear rental website with GSAP-powered animations, WebGL effects, and organic parallax motion. The site features floating category cards, horizontal scroll product sections, and a testimonials orbit system—all designed to evoke the energy of outdoor exploration.",
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
                "Full-screen hero with water ripple WebGL shader effects",
                "Floating archipelago category cards with 3D tilt interactions",
                "Cinematic split-screen about section with morphing blob masks",
                "Horizontal-scroll film strip product showcase",
                "Infinite parallax destination mosaic with color bloom on hover",
                "Orbital testimonial carousel with pause-on-hover",
                "Vortex CTA section with shader-driven focus effects",
                "Glassmorphism navigation with scroll-aware state changes",
            ],
            whyItWorks: [
                "Motion creates emotional engagement—visitors feel the adventure",
                "Organic layouts break the grid and feel natural, like the outdoors",
                "Performance optimizations ensure smooth 60fps animations",
                "Clear CTAs guide users to book without breaking the immersion",
            ],
            approval:
                "Client approved the design direction and gave permission for this project to be featured in my portfolio.",
        },
        cta: {
            headline: "Need a website that stands out?",
            body: "I build immersive, motion-rich websites that create emotional connections with visitors—turning scrolls into stories.",
            ctaText: "Contact Me",
            href: "/contact?source=case-study-nomad-gear",
        },
        process: [
            {
                title: "Immersive Hero Experience",
                description: "Full-screen hero with parallax depth, WebGL water ripple effects, and split-text entrance animations that immediately draw visitors into the adventure.",
                image: "/images/projects/nomad-gear/nomad-gear-hero.jpg",
            },
            {
                title: "Organic Motion System",
                description: "Floating category cards, 3D tilt interactions, and staggered parallax scrolling create depth and movement that feels alive—like wind through the trees.",
                image: "/images/projects/nomad-gear/nomad-gear-1.jpg",
            },
            {
                title: "Cinematic Storytelling",
                description: "Each section uses unique motion patterns: horizontal film strips for products, orbital carousels for testimonials, and morphing masks for the brand story.",
                image: "/images/projects/nomad-gear/nomad-gear-2.jpg",
            },
        ],
        outcomes: [
            { metric: "Animation Intensity", value: "Ultra-Dynamic", description: "Rich GSAP and WebGL effects throughout" },
            { metric: "Performance", value: "60fps", description: "Optimized for smooth scroll on all devices" },
            { metric: "Motion Patterns", value: "8+ unique", description: "Different animation systems per section" },
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
            "Romantic, motion-rich website design for a premium flower shop. Features organic animations, horizontal scroll galleries, and botanical elegance throughout.",
        socialCaption:
            "New build: a botanical elegance website for Velvet Rose—organic motion, split-text animations, and romantic floral storytelling.",
        tags: ["Web Design", "Motion Design", "React", "GSAP", "E-Commerce"],
        tagline: "Elegant, motion-rich website design for a premium florist experience",
        description:
            "Romantic website with fluid botanical animations, horizontal scroll category browsing, and immersive parallax effects that capture the beauty of fresh flowers.",
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
        problem: "Velvet Rose needed a website that conveyed the timeless romance and artistry of their floral arrangements. Generic flower shop templates felt cold and transactional—they wanted visitors to feel the beauty and emotion of their craft before making a purchase.",
        solution: "Designed a 'Botanical Elegance' website with organic, fluid animations that mimic natural growth and bloom. Horizontal scroll category browsing, magnetic image interactions, and subtle petal-drift particle effects create an immersive experience that feels as alive as fresh flowers.",
        caseStudy: {
            headline: "Velvet Rose — Botanical Elegance",
            subheadline:
                "A romantic, motion-rich website that captures the timeless beauty of artisan floristry.",
            tldr: "Built an elegant florist website with organic GSAP animations, horizontal scroll galleries, and WebGL liquid displacement effects. The design features mask reveal animations, magnetic image interactions, and a floating petal particle system—all evoking the romance and artistry of fresh flowers.",
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
                "Asymmetrical hero with mask reveal and split-char text animations",
                "Horizontal scroll 'Kinetic Garden' category browser with SVG vine connections",
                "Organic broken-grid about section with morphing background watermarks",
                "Floating masonry product grid with 3D flip-up card entrances",
                "Marquee testimonial carousel with scroll-velocity speed changes",
                "Full-screen parallax CTA with difference blend mode typography",
                "Curtain-reveal footer with staggered link animations",
            ],
            whyItWorks: [
                "Organic motion creates emotional connection—visitors feel the romance",
                "Horizontal scroll for categories feels like browsing a garden",
                "Soft animations and hover effects encourage exploration without rush",
                "Clear product cards and CTAs drive conversions naturally",
            ],
            approval:
                "Client approved the design direction and gave permission for this project to be featured in my portfolio.",
        },
        cta: {
            headline: "Want a website that feels alive?",
            body: "I design romantic, motion-rich experiences that connect with visitors emotionally—perfect for premium brands and artisan businesses.",
            ctaText: "Contact Me",
            href: "/contact?source=case-study-velvet-rose",
        },
        process: [
            {
                title: "Romantic Hero Gateway",
                description: "Asymmetrical composition with the hero image acting as a portal. Circle mask reveal, split-char rising text, and magnetic image tilt create an immediate emotional connection.",
                image: "/images/projects/velvet-rose/velvet-rose-hero.jpg",
            },
            {
                title: "Kinetic Garden Categories",
                description: "Horizontal scroll section that pins while categories slide past. 3D card tilts, image zoom on hover, and SVG border animations make browsing feel like walking through a garden.",
                image: "/images/projects/velvet-rose/velvet-rose-1.jpg",
            },
            {
                title: "Floating Product Market",
                description: "Masonry grid with staggered Y-positions and 3D flip-up entrances. Hover reveals zoom, expand 'Add to Cart' buttons, and floating price tags for an engaging shopping experience.",
                image: "/images/projects/velvet-rose/velvet-rose-2.jpg",
            },
        ],
        outcomes: [
            { metric: "Motion Style", value: "Botanical", description: "Organic, fluid movements mimicking natural bloom" },
            { metric: "Scroll Experience", value: "Horizontal Pin", description: "Innovative category browsing section" },
            { metric: "Animation Systems", value: "6+ unique", description: "Different motion patterns per section" },
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
            "Cinematic Americana website design for a classic barbershop. Features 3D card effects, WebGL distortions, vinyl record testimonials, and heritage-inspired motion.",
        socialCaption:
            "New build: a Cinematic Americana barbershop website for Gentleman's Blade—3D image clusters, vinyl record testimonials, and razor-sharp motion design.",
        tags: ["Web Design", "Motion Design", "React", "Three.js", "WebGL"],
        tagline: "Heritage-inspired website design for a classic American barbershop",
        description:
            "Cinematic website blending 1950s barbershop heritage with modern editorial sophistication. 3D card clusters, horizontal barber galleries, and vinyl record testimonials.",
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
        problem: "Gentleman's Blade wanted a website that honored classic barbershop heritage while feeling modern and confident. Standard service-listing sites felt generic—they needed something cinematic that would make visitors feel the craft and tradition of American barbering.",
        solution: "Created a 'Cinematic Americana' website with 3D image card clusters, liquid WebGL hover distortions, and horizontal scroll barber galleries. The services section fans out like a deck of cards, and testimonials are presented as spinning vinyl records—all reinforcing the heritage-meets-modern brand.",
        caseStudy: {
            headline: "Gentleman's Blade — Precision Heritage",
            subheadline:
                "A cinematic barbershop website that blends 1950s Americana with modern editorial sophistication.",
            tldr: "Built a heritage-inspired barbershop website with 3D card clusters, WebGL liquid metal hover effects, and vinyl record testimonials. Features include accordion-stacked service cards that fan out on scroll, horizontal barber 'Rogue's Gallery', and a neon-flicker contact form.",
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
                "Split-blade hero with 3D image cluster and magnetic cursor interactions",
                "Blueprint-style about section with diagonal axis and animated cross-hatch",
                "Accordion deck services that fan out with 3D card dealing animations",
                "Horizontal Rogue's Gallery barber showcase with portrait frame rotations",
                "Vinyl spin testimonials with curved SVG text and orbit animations",
                "Neon-flicker contact form with electric input focus effects",
                "Curtain call footer revealed from behind the previous section",
            ],
            whyItWorks: [
                "Cinematic motion creates a premium, confident brand feeling",
                "Heritage elements (vinyl, neon, blueprints) reinforce tradition",
                "3D effects add depth and modernity without losing the classic vibe",
                "Clear booking CTAs are integrated naturally throughout",
            ],
            approval:
                "Client approved the design direction and gave permission for this project to be featured in my portfolio.",
        },
        cta: {
            headline: "Need a website with character?",
            body: "I build cinematic, heritage-inspired websites that tell your brand's story through motion and depth—perfect for businesses with craft and tradition.",
            ctaText: "Contact Me",
            href: "/contact?source=case-study-gentlemans-blade",
        },
        process: [
            {
                title: "Split-Blade Hero",
                description: "Revolutionary asymmetrical layout with 3D image cluster that tilts on cursor movement. Split-char text rise and liquid WebGL displacement on hover create cinematic tension.",
                image: "/images/projects/gentlemans-blade/gentlemans-blade-hero.jpg",
            },
            {
                title: "Accordion Deck Services",
                description: "Services presented as a physical stack of cards that fan out horizontally on scroll. Each card lifts and dims others on hover, with shutter-wipe description reveals.",
                image: "/images/projects/gentlemans-blade/gentlemans-blade-2.jpg",
            },
            {
                title: "Rogue's Gallery Barbers",
                description: "Horizontal scroll section presenting barbers like vintage mugshots. Portrait frames rotate in 3D, names slide out on hover, and the entire gallery creates a 'meet the artists' experience.",
                image: "/images/projects/gentlemans-blade/gentlemans-blade-3.jpg",
            },
        ],
        outcomes: [
            { metric: "Motion Style", value: "Cinematic Americana", description: "Heritage meets modern editorial sophistication" },
            { metric: "3D Effects", value: "WebGL + CSS", description: "Liquid metal distortions and card clusters" },
            { metric: "Unique Sections", value: "7", description: "Each with distinct animation choreography" },
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
            "Ultra-dynamic website for a children's creative studio featuring physics-based Memphis design, exploding color transitions, and playful chaos animations.",
        socialCaption:
            "New build: a Kinetic Memphis Playground website for Pop Playground—physics-based interactions, liquid morphing shapes, and explosive color transitions.",
        tags: ["Web Design", "Motion Design", "React", "GSAP", "WebGL"],
        tagline: "Physics-based Memphis design for a children's creative playground",
        description:
            "Explosive, playful website featuring liquid morphing shapes, floating Memphis patterns, and chaos-driven animations that celebrate pure childhood imagination.",
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
        problem: "Pop Playground needed a website that captured the boundless energy and colorful chaos of children's creativity. Standard templates felt too grown-up—they wanted something that makes kids AND parents excited about art and imagination.",
        solution: "Created a 'Kinetic Memphis Playground' website with physics-based interactions, liquid color mesh backgrounds, and scattered polaroid galleries. Every section explodes with floating shapes, bouncing animations, and playful chaos that mirrors the messy joy of making art.",
        caseStudy: {
            headline: "Pop Playground — Creative Chaos",
            subheadline:
                "An ultra-dynamic website that celebrates pure, unfiltered imagination through Memphis-influenced motion design.",
            tldr: "Built a physics-based children's creative studio website with WebGL liquid color meshes, floating Memphis shapes, and scattered polaroid galleries. Features magnetic cursor interactions, explosive stagger animations, and playful chaos throughout—perfectly capturing the energy of childhood creativity.",
            goals: [
                "Capture the explosive energy of children's creativity",
                "Create physics-based interactions that feel alive and playful",
                "Use Memphis design patterns with modern motion sophistication",
                "Appeal to both kids and parents with premium playfulness",
            ],
            constraints: [
                "Bold Memphis color palette (pinks, purples, greens, yellows)",
                "Physics-based effects without affecting performance",
                "Single-page experience with pinned scroll sections",
                "Cursor-reactive elements without React state updates",
            ],
            delivered: [
                "Full-viewport hero with WebGL liquid color mesh background",
                "Floating Memphis shapes with Lissajous curve motion paths",
                "Diagonal split about section with orbital image clusters",
                "Radial composition featured section with circular headline",
                "Scattered polaroid gallery with throw-down entrance animations",
                "Magnetic cursor zones with CSS custom property updates",
                "Multi-layer parallax with different scroll speeds per layer",
            ],
            whyItWorks: [
                "Physics-based motion creates tangible, playful interactions",
                "Memphis patterns add visual excitement without overwhelming",
                "Scattered, organic layouts mirror the creative chaos of art-making",
                "Premium polish makes parents trust while kids feel excited",
            ],
            approval:
                "Client approved the design direction and gave permission for this project to be featured in my portfolio.",
        },
        cta: {
            headline: "Need a website that's full of energy?",
            body: "I build ultra-dynamic, physics-based websites that capture attention and create memorable experiences—perfect for brands that refuse to be boring.",
            ctaText: "Contact Me",
            href: "/contact?source=case-study-pop-playground",
        },
        process: [
            {
                title: "Explosive Hero Gateway",
                description: "Full-viewport hero with WebGL liquid color mesh that swirls toward the cursor. Headline words have independent float animations, Memphis shapes scatter outward on scroll.",
                image: "/images/projects/pop-playground/pop-playground-hero.jpg",
            },
            {
                title: "Orbital About Composition",
                description: "Diagonal split layout with image cluster in slow orbital rotation. 3D depth positioning, connecting SVG constellation lines, and feature icons with independent bounce timing.",
                image: "/images/projects/pop-playground/pop-playground-1.jpg",
            },
            {
                title: "Scattered Polaroid Gallery",
                description: "Images arranged like scattered photos on a table with unique rotations. Throw-down entrance animations, hover-to-front interactions, and floating shadow effects.",
                image: "/images/projects/pop-playground/pop-playground-2.jpg",
            },
        ],
        outcomes: [
            { metric: "Motion Style", value: "Kinetic Memphis", description: "Physics-based playful chaos throughout" },
            { metric: "Color System", value: "7+ hues", description: "Full Memphis rainbow with dark/light variants" },
            { metric: "Interaction Types", value: "10+", description: "Unique hover, scroll, and cursor effects" },
        ],
        featured: true,
        color: "#F795E9",
        externalUrl: "https://pop-playground-memphis.vercel.app",
    },
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
