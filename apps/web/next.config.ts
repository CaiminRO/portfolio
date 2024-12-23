import type { NextConfig } from "next";

const SANITY_PATH = `/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/**`;

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: SANITY_PATH,
      },
      {
        protocol: "http",
        hostname: "cdn.sanity.io",
        pathname: SANITY_PATH,
      },
    ],
  },
};

export default nextConfig;
