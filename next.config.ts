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
      {
        source: "/housing",
        destination: "/empowerment/housing",
        permanent: false,
      },
      {
        source: "/health/menstrual-health",
        destination: "/health/womens-health",
        permanent: true,
      },
      {
        source: "/empowerment/economic",
        destination: "/women-empowerment/economic",
        permanent: false,
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
