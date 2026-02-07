import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Navbar } from "@/components/nav/Navbar";
import { MobileStickyCTA } from "@/components/nav/MobileStickyCTA";
import { Footer } from "@/components/footer/Footer";
import { PageTransition } from "@/components/motion/PageTransition";
import { siteUrl } from "@/lib/site";
import { getSiteStructuredData } from "@/lib/structuredData";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-brand-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-brand-mono",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-brand-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Multimedium | Websites for Service Teams and Real Estate Ops",
    template: "%s | Multimedium",
  },
  description:
    "TC-first web design and development for transaction coordinators, real estate operations teams, and service businesses. Clear messaging, fast performance, and conversion-focused pages that turn visits into qualified inquiries.",
  keywords: [
    "web design transaction coordinators",
    "real estate operations web design",
    "web design for service businesses",
    "conversion focused web design",
    "web design poconos",
    "professional business website design",
    "next.js web development",
  ],
  authors: [{ name: "Haydn" }],
  creator: "Multimedium",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Multimedium",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Multimedium | Websites for Service Teams and Real Estate Ops",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getSiteStructuredData();

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
    >
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-card focus:text-foreground focus:border focus:border-border focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <PageTransition>
          <main id="main-content" className="pb-[var(--mobile-cta-offset)] md:pb-0">
            {children}
          </main>
        </PageTransition>
        <MobileStickyCTA />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
