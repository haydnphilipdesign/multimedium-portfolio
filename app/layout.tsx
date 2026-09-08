import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Navbar } from "@/components/nav/Navbar";
import { MobileStickyCTA } from "@/components/nav/MobileStickyCTA";
import { Footer } from "@/components/footer/Footer";
import { PageTransition } from "@/components/motion/PageTransition";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteName, siteUrl } from "@/lib/site";
import { getSiteStructuredData } from "@/lib/structuredData";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-brand-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-brand-display",
  display: "swap",
  style: ["normal", "italic"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Custom Web Design for Small Businesses | Multimedium",
    template: `%s | ${siteName}`,
  },
  description:
    "Multimedium designs websites for small businesses, service providers, and real estate professionals in the Poconos and beyond.",
  keywords: [
    "real estate web design",
    "transaction coordinator website design",
    "real estate marketing website",
    "website design for real estate coaches",
    "brokerage website design",
    "local web design poconos pa",
    "web designer for real estate professionals",
  ],
  authors: [{ name: "Haydn", url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  openGraph: {
    title: "Custom Web Design for Small Businesses | Multimedium",
    description:
      "Custom websites for small businesses and service providers that need better-qualified leads.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Multimedium real estate web design and transaction coordinator websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Design for Small Businesses | Multimedium",
    description: "Custom websites for small businesses and service providers.",
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
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <JsonLd data={structuredData} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-card focus:text-foreground focus:border focus:border-border focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <PageTransition>
          <main
            id="main-content"
            className="pb-[var(--mobile-cta-offset)] md:pb-0"
          >
            {children}
          </main>
        </PageTransition>
        <MobileStickyCTA />
        <Footer />
        {process.env.VERCEL === "1" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
