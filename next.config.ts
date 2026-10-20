import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The static TC package demo sites were retired (2026-10).
      { source: "/demos", destination: "/tc-packages", permanent: true },
      { source: "/demos/:path*", destination: "/tc-packages", permanent: true },
    ];
  },
};
export default nextConfig;
