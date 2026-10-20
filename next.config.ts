import type { NextConfig } from "next";

// Permanent, single-hop redirects for retired URLs (brief §8). When a URL is
// removed or renamed, add it here pointing at its final destination, never
// at another redirect.
const retired: [source: string, destination: string][] = [
  // TC pages merged into one audience page
  ["/tc-packages", "/transaction-coordinators"],
  ["/industries/transaction-coordinators", "/transaction-coordinators"],
  ["/demos", "/transaction-coordinators"],
  ["/demos/:path*", "/transaction-coordinators"],
  // Agent, coach, and brokerage pages merged into one audience page
  ["/industries/real-estate-professionals", "/agents-and-brokerages"],
  ["/industries/real-estate-coaches", "/agents-and-brokerages"],
  ["/lp/real-estate", "/agents-and-brokerages"],
  ["/agents-and-teams", "/agents-and-brokerages"],
  // Industries outside real estate are no longer marketed
  ["/industries", "/"],
  ["/industries/trades", "/"],
  ["/industries/home-services", "/"],
  ["/industries/homeowners-associations", "/"],
  // Services merged into pricing
  ["/services", "/pricing"],
  ["/services/website", "/pricing"],
  ["/services/landing-pages", "/pricing"],
  ["/services/growth-retainers", "/pricing#hosting"],
  // Products moved to About
  ["/tools", "/about#software"],
  ["/work/norma", "/about#software"],
  ["/work/norma-intake", "/about#software"],
  ["/work/utility-sheet", "/about#software"],
  ["/work/client-portal", "/about#software"],
  // Concepts and personal projects removed
  ["/lab", "/work"],
  ["/work/nomad-gear", "/work"],
  ["/work/velvet-rose", "/work"],
  ["/work/gentlemans-blade", "/work"],
  ["/work/pop-playground", "/work"],
  ["/work/northpoint-realty", "/work"],
  ["/work/momentum-coaching", "/work"],
  ["/work/clarity-growth", "/work"],
  ["/work/peppers-portal", "/work"],
  ["/work/workout-tracker", "/work"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return retired.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
