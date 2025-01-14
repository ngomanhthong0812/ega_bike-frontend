import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Bỏ qua lỗi TypeScript khi build
  },
  images: {
    domains: ["bizweb.dktcdn.net"]
  }
};

export default nextConfig;
