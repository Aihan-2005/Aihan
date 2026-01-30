import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/sections/Footer'
import SessionProvider from '@/providers/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'استارتاپ ما - دستیار هوش مصنوعی',
  description: 'طراحی سایت و توسعه دستیار هوش مصنوعی',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${inter.className} bg-black text-white`}>
        <SessionProvider>
          {/* Navbar یه بار اینجا رندر میشه */}
          <Navbar />
          
          {/* محتوای صفحات */}
          <main className="min-h-screen">
            {children}
          </main>
          
          {/* Footer یه بار اینجا رندر میشه */}
          {/* <Footer /> */}
        </SessionProvider>
      </body>
    </html>
  )
}
