import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preview of the redesign, served from public/new until it replaces the home page.
  async rewrites() {
    return [{ source: "/new", destination: "/new/index.html" }];
  },
};

export default nextConfig;
