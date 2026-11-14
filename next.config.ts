import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    // GoDaddy shared hosting's filesystem doesn't support the file lock Next takes on `.next/lock`,
    // which makes every build fail with "Another next build process is already running".
    lockDistDir: false,
  },
  images: {
   remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000", // 👈 allows all ports (3000, 8000, etc.)
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/**",
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/uploads/**'
      },
      {
        protocol: "http",
        hostname: 'taleemiyat.com'
      },
      {
        protocol: 'http',
        hostname: 'api.taleemiyat.com',
        pathname: '/uploads/**'
      }
    ],
  },
};

export default nextConfig;
