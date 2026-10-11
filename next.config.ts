import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The home page is the static site in public/new; the previous Next.js site lives under /old.
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/new/index.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    return [
      { source: "/new", destination: "/", permanent: true },
      { source: "/new/index.html", destination: "/", permanent: true },
      ...["about", "portfolio", "contact", "blog"].map((p) => ({
        source: `/${p}`,
        destination: `/old/${p}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
