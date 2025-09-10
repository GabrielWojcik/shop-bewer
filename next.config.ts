import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "d4lgxe9bm8juw.cloudfront.net",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
