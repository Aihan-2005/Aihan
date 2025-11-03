import type { Metadata } from "next"
import "./globals.css"

import { Inter } from "next/font/google"

import SessionProviderWrapper from "@/components/providers/SessionProviderWrapper"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Wiserapp — AI Products Marketplace",
  description:
    "خرید، بررسی و تجربه محصولات هوش مصنوعی در Wiserapp. هوشمند انتخاب کن، حرفه‌ای استفاده کن.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Wiserapp | بازار محصولات هوش مصنوعی",
    description:
      "با Wiserapp جدیدترین ابزارهای AI را تجربه کن — از چت‌بات‌ها تا مدل‌های تولید تصویر.",
    url: "https://wiserapp.ai",
    siteName: "Wiserapp",
    locale: "fa_IR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className="bg-black">
      <body
        className={`${inter.variable} antialiased bg-black text-white min-h-screen`}
      >
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  )
}
