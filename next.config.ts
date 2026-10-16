import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string): NextConfig => ({
  // Keep production verification separate from a running development server.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next' : '.next-production',
  output: 'export',
  images: {
    unoptimized: true,
  },
});

export default nextConfig;
