import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import Navbar from '@/components/layout/Navbar'
import SessionProvider from '@/providers/SessionProvider'

const inter = Inter({
  subsets: ['latin'],
})

function getMetadataBase(): URL {

  
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

  if (configuredSiteUrl) {
    return new URL(configuredSiteUrl)
  }

  const vercelUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim()

  if (vercelUrl) {
    return new URL(`https://${vercelUrl}`)
  }

  return new URL('http://localhost:3000')
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),

  title: 'وایزر - دستیار هوش مصنوعی',

  description:
    'طراحی و توسعه راهکارهای نرم‌افزاری، هوش مصنوعی و اتوماسیون توسط WiserTeam.',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${inter.className} min-h-screen bg-black text-white antialiased`}
      >
        <SessionProvider>
          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}

