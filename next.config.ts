import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async rewrites() {
    return ["presence", "starter", "growth", "pro"].map((tier) => ({
      source: "/demos/" + tier,
      destination: "/demos/" + tier + "/index.html",
    }));
  },
};
export default nextConfig;
