import type { NextConfig } from "next";

// No static export, server mode
const nextConfig: NextConfig = {
  // Remove `output: "export"` to allow `npm start`

  // Optional: basePath only if deploying to a subfolder
  // basePath: "/Resume-Nextjs",
  // assetPrefix: "/Resume-Nextjs",

  images: {
    unoptimized: true,
  },

  trailingSlash: true, // optional, can keep or remove
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
