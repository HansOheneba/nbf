import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/initiatives/further-initiatives",
        destination: "/causes",
        permanent: false,
      },
      {
        source: "/initiatives/sickle-cell-awareness",
        destination: "/health/sickle-cell",
        permanent: false,
      },
      {
        source: "/initiatives",
        destination: "/causes",
        permanent: false,
      },
      {
        source: "/our-work",
        destination: "/causes",
        permanent: true,
      },
    ];
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
