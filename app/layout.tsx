import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageTransition } from "@/components/motion/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://multimedium.dev"),
  title: {
    default: "Multimedium | Haydn - Web Design & Development",
    template: "%s | Multimedium",
  },
  description:
    "Conversion-first web design and development for teams that want to look premium, load fast, and turn attention into inquiries. Based in the Poconos — available remote.",
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
    url: "https://multimedium.dev",
    siteName: "Multimedium",
    title: "Multimedium | Haydn — Web Design & Development",
    description:
      "Conversion-first web design and development for teams that want to look premium and convert.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multimedium | Haydn — Web Design & Development",
    description:
      "Conversion-first web design and development for teams that want to look premium and convert.",
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
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
