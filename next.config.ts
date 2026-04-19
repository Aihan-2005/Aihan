// import type { NextConfig } from "next"

// const nextConfig: NextConfig = {
//   reactStrictMode: true,

//   reactCompiler: true,
//   typedRoutes: true,

//   experimental: {
//     optimizeCss: true,
//     serverActions: {
//       bodySizeLimit: "2mb",
//     },
//   },

//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "avatars.githubusercontent.com" },
//       { protocol: "https", hostname: "lh3.googleusercontent.com" },
//       { protocol: "https", hostname: "cdn.discordapp.com" },
//     ],
//     formats: ["image/avif", "image/webp"],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     minimumCacheTTL: 60,
//     dangerouslyAllowSVG: true,
//     contentDispositionType: "attachment",
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   },

//   compress: true,

//   compiler: {
//     removeConsole:
//       process.env.NODE_ENV === "production"
//         ? { exclude: ["error", "warn"] }
//         : false,
//   },

//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: [
//           { key: "X-DNS-Prefetch-Control", value: "on" },
//           { key: "X-Frame-Options", value: "SAMEORIGIN" },
//           { key: "X-Content-Type-Options", value: "nosniff" },
//           { key: "Referrer-Policy", value: "origin-when-cross-origin" },
//         ],
//       },
//       {
//         source: "/images/:path*",
//         headers: [
//           { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
//         ],
//       },
//     ]
//   },

//   typescript: {
//     ignoreBuildErrors: false,
//   },
// }

// export default nextConfig
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // ✅ حالت Strict React
  reactStrictMode: true,

  // ✅ فشرده‌سازی پاسخ‌ها
  compress: true,

  // ✅ حذف console در Production
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  // ✅ تنظیمات TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },

  // ✅ تنظیمات تصویر - اضافه شدن unsplash
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "cdn.discordapp.com" },
      // ✅ اضافه شد - برای تصاویر بلاگ
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ✅ serverActions به سطح بالا منتقل شد (Next.js 15+)
  serverExternalPackages: [],

  experimental: {
    // ✅ reactCompiler به داخل experimental منتقل شد
    reactCompiler: true,

    // ✅ typedRoutes به داخل experimental منتقل شد
    typedRoutes: true,

    // ✅ optimizeCss - فقط اگر critters نصب باشد فعال کن
    // برای فعال‌سازی: npm install critters
    // optimizeCss: true,

    // ✅ serverActions به اینجا تعلق دارد (Next.js 14 و پایین‌تر)
    // در Next.js 15 این گزینه به سطح بالا رفته
    // serverActions: { bodySizeLimit: "2mb" },
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          // ✅ اضافه شد - امنیت بیشتر
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // ✅ اضافه شد - کش فونت‌ها
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ]
  },
}

export default nextConfig
