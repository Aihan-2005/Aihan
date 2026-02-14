import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  
  reactStrictMode: true,
  
  experimental: {
    reactCompiler: true,
    
    typedRoutes: true,
    
    optimizeCss: true,
    
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  
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
    
    formats: ['image/avif', 'image/webp'],
    
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    minimumCacheTTL: 60,
    
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  
  swcMinify: true,
  
  compress: true,
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' 
      ? {
          exclude: ['error', 'warn'],
        }
      : false,
  },

  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  
  typescript: {
    ignoreBuildErrors: false,
  },

  eslint: {
    ignoreDuringBuilds: false,
  },

  
  // برای تحلیل حجم bundle (اختیاری)
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.alias = {
  //       ...config.resolve.alias,
  //       '@': './src',
  //     }
  //   }
  //   return config
  // },
}

export default nextConfig
