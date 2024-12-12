
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'dist',
  basePath: '',
  trailingSlash: true,
};

export default nextConfig;
