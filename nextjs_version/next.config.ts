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
    ],
  },
};

export default nextConfig;
