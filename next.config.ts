import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: true, // process.env.NODE_ENV === "development", // temporarily disabled for build debugging
});

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

// export default withPWA(nextConfig);
export default nextConfig;
