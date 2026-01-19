import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
   remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000", // 👈 allows all ports (3000, 8000, etc.)
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
