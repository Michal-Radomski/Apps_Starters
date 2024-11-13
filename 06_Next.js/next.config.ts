import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  eslint: {
    // Specify directories to lint during production builds
    dirs: ["pages", "components", "lib"], // Adjust as needed
  },
};

export default nextConfig;
