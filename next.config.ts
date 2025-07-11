import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Disable Next.js image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default withSentryConfig(nextConfig, {
  org: "souravbiswas",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
