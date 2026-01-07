# Studio Portfolio

A premium, cinematic portfolio built with Next.js 16, Tailwind CSS 4, and Framer Motion.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 + shadcn/ui (nova style)
- **Animations**: Framer Motion
- **Icons**: Tabler Icons
- **Fonts**: Inter (via next/font)

## Project Structure

```
app/
├── page.tsx              # Home page
├── work/
│   ├── page.tsx          # Work grid
│   └── [slug]/
│       └── page.tsx      # Case study pages
├── about/
│   └── page.tsx          # About page
└── contact/
    └── page.tsx          # Contact page

components/
├── hero/
│   └── HeroParallax.tsx  # Signature parallax hero (client)
├── motion/
│   ├── PageTransition.tsx     # Route transition wrapper
│   └── AnimatedSection.tsx    # In-view reveal animations
├── nav/
│   └── Navbar.tsx        # Responsive navigation
├── footer/
│   └── Footer.tsx        # Site footer
├── sections/
│   └── Section.tsx       # Reusable section wrapper
└── work/
    └── ProjectCard.tsx   # Project preview card

content/
└── projects.ts           # All project data (typed)
```

## Editing Content

### Projects

Edit `content/projects.ts` to add, remove, or modify projects. Each project has:

```typescript
{
  slug: string;          // URL-friendly identifier
  title: string;         // Project name
  tagline: string;       // Short description
  description: string;   // Full description
  category: string;      // "Web Design" | "SaaS" | "Automation" | "UI System" | "Portal"
  year: string;          // Project year
  client: string;        // Client name
  role: string;          // Your role
  tools: string[];       // Technologies used
  thumbnail: string;     // Card image path
  heroImage: string;     // Case study hero image
  images: string[];      // Additional images
  problem: string;       // The challenge
  solution: string;      // Your solution
  process: [...];        // Process steps with images
  outcomes: [...];       // Results with metrics
  testimonial?: {...};   // Optional client quote
  featured: boolean;     // Show on home page
  color: string;         // Accent color (hex)
}
```

### Personal Info

- **Navbar/Footer**: Edit `components/nav/Navbar.tsx` and `components/footer/Footer.tsx`
- **About Page**: Edit `app/about/page.tsx` for bio, skills, and experience
- **Contact Info**: Edit `app/contact/page.tsx` for email and social links
- **SEO**: Update metadata in `app/layout.tsx`

## How the Parallax Hero Works

The hero (`components/hero/HeroParallax.tsx`) creates depth through layered motion:

### Scroll Parallax
- **Background layer**: Gradient orbs move at 30% scroll speed
- **Midground layer**: Decorative shapes move at 15% scroll speed
- **Foreground layer**: Text moves at -5% (slight counter-scroll)

Uses Framer Motion's `useScroll` + `useTransform` for GPU-accelerated transforms only (`translate3d`, `opacity`).

### Pointer Parallax (Desktop Only)
On mouse move, layers shift subtly based on cursor position. Uses `useMotionValue` + `useSpring` for smooth physics.

### Accessibility
- **Touch devices**: Pointer effects auto-disabled
- **prefers-reduced-motion**: Falls back to static layout with simple fade-in

## Customization

### Theme Colors

Edit CSS variables in `app/globals.css`:

```css
.dark {
  --background: oklch(0.09 0.02 270);
  --glow: oklch(0.65 0.2 280);
  /* ... */
}
```

### Design Tokens

The globals.css includes utility classes:
- `.grain` - Subtle noise texture overlay
- `.glow` - Box shadow glow effect
- `.glow-text` - Text shadow glow
- `.glass` - Glassmorphism background
- `.text-gradient` - Gradient text effect
- `.btn-primary` / `.btn-secondary` - Button styles

## Performance Notes

- All images use `next/image` for optimization
- Motion components are client-side only
- Server components used where possible
- `prefers-reduced-motion` fully respected
- No heavy scroll-bound filters

## Adding Images

1. Add images to `public/images/projects/`
2. Update paths in `content/projects.ts`
3. Images are lazy-loaded via `next/image`

## License

MIT
