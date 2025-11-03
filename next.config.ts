import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true, 

  images: {
    remotePatterns: [
      {
        protocol: "https", 
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https", 
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https", 
        hostname: "cdn.discordapp.com",
      },
    ],
  },

  experimental: {
    typedRoutes: true, 
  },
}

export default nextConfig
