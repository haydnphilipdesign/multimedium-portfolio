import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Navbar } from "@/components/nav/Navbar";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Multimedium | Haydn - Web Design & Development",
    template: "%s | Multimedium",
  },
  description:
    "Conversion-first web design and development for teams that want to look premium, load fast, and turn attention into inquiries. Based in the Poconos - available remote.",
  keywords: [
    "web design poconos",
    "web development nepa",
    "conversion focused web design",
    "next.js agency",
    "marketing automation",
    "professional web design",
    "business website design",
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
        alt: "Multimedium | Haydn - Web Design & Development",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}>
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
          <main id="main-content">{children}</main>
        </PageTransition>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
