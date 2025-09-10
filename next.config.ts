import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "files.wiseapp.live",
      },
      {
        protocol: "https",
        hostname: "cdn.wiseapp.live",
      },
      {
        protocol: "https",
        hostname: "shikshanation.com",
      },
    ]
  }
};

export default nextConfig;
