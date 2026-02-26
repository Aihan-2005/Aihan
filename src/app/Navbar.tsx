'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, LogIn, LogOut, User, Shield } from 'lucide-react'
import { useSession, signIn, signOut } from 'next-auth/react'

const NAV_LINKS = [
  { name: 'خانه', href: '/' as const },
  { name: 'محصولات', href: '/products' as const },
  { name: 'درباره ما', href: '/about' as const },
  { name: 'تماس', href: '/contact' as const },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { data: session, status } = useSession()
  const pathname = usePathname() as string
  const prevPathname = useRef(pathname)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname
      setIsOpen(false)
    }
  }, [pathname])

  const handleSignOut = useCallback(() => {
    signOut()
    setIsOpen(false)
  }, [])

  const handleSignIn = useCallback(() => {
    signIn()
    setIsOpen(false)
  }, [])

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ?
          'bg-black/80 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' :
          'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group" prefetch={true}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              استارتاپ ما
            </span>
          </Link>

          <DesktopMenu pathname={pathname} />

          <AuthSection
            session={session}
            status={status}
            onSignOut={handleSignOut}
            onSignIn={handleSignIn}
          />

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isOpen}
        session={session}
        pathname={pathname}
        onClose={() => setIsOpen(false)}
        onSignOut={handleSignOut}
        onSignIn={handleSignIn}
      />
    </motion.nav>
  )
}

function DesktopMenu({ pathname }: { pathname: string }) {
  return (
    <div className="hidden lg:flex items-center gap-8">
      {NAV_LINKS.map(link => (
        <Link
          key={link.href}
          href={link.href}
          prefetch={true}
          className={`relative text-gray-300 hover:text-white transition-colors group ${
            pathname === link.href ? 'text-white' : ''
          }`}
        >
          {link.name}
          <span
            className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
              pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          />
        </Link>
      ))}
    </div>
  )
}

interface AuthSectionProps {
  session: any
  status: string
  onSignOut: () => void
  onSignIn: () => void
}

function AuthSection({ session, status, onSignOut, onSignIn }: AuthSectionProps) {
  if (status === 'loading') {
    return (
      <div className="hidden lg:block">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }
  if (session) {
    return (
      <div className="hidden lg:flex items-center gap-4">
        <Link
          href="/dashboard"
          prefetch={true}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
        >
          <User className="w-5 h-5 text-blue-400" />
          <span className="text-sm">{session.user?.name}</span>
        </Link>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onSignOut}
          className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition-colors"
        >
          <LogOut className="w-5 h-5" />
          خروج
        </motion.button>
      </div>
    )
  }
  return (
    <div className="hidden lg:flex items-center gap-3">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onSignIn}
        className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-semibold transition-colors"
      >
        <LogIn className="w-5 h-5" />
        ورود
      </motion.button>
      <Link href="/auth/signup" prefetch={true}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 rounded-xl font-semibold transition-all"
        >
          ثبت‌نام
        </motion.button>
      </Link>
    </div>
  )
}

interface MobileMenuProps {
  isOpen: boolean
  session: any
  pathname: string
  onClose: () => void
  onSignOut: () => void
  onSignIn: () => void
}

function MobileMenu({ isOpen, session, pathname, onClose, onSignOut, onSignIn }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800"
        >
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                onClick={onClose}
                className={`block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-lg ${
                  pathname === link.href ? 'bg-gray-800' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-800 space-y-3">
              {session ? (
                <>
                  <Link
                    href="/dashboard"
                    prefetch={true}
                    onClick={onClose}
                    className="flex items-center gap-3 py-3 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <User className="w-5 h-5 text-blue-400" />
                    <span>{session.user?.name}</span>
                  </Link>
                  <button
                    onClick={onSignOut}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    خروج
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={onSignIn}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors"
                  >
                    <LogIn className="w-5 h-5" />
                    ورود
                  </button>
                  <Link
                    href="/auth/signup"
                    prefetch={true}
                    onClick={onClose}
                    className="block text-center py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold"
                  >
                    ثبت‌نام
                  </Link>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
