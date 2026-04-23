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
      transition={{ duration: 0.4, ease: 'easeOut' }}
      // ✅ className ثابت - بدون template literal داینامیک در SSR
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-2xl border-b border-cyan-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
          : 'bg-transparent'
      }`}
    >
      {/* ✅ خط درخشان زیر navbar هنگام scroll */}
      {scrolled && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" prefetch={true}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-7 h-7 text-white drop-shadow-md" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
                استارتاپ ما
              </span>
              <span className="text-[10px] text-gray-500 tracking-widest uppercase font-medium">
                Innovation
              </span>
            </div>
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
            className="lg:hidden p-2 rounded-xl hover:bg-gray-800/80 border border-transparent hover:border-gray-700 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen
                ? <X className="w-6 h-6 text-gray-300" />
                : <Menu className="w-6 h-6 text-gray-300" />
              }
            </motion.div>
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
    <div className="hidden lg:flex items-center gap-1">
      {NAV_LINKS.map(link => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            prefetch={true}
            className={`relative px-4 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 group ${
              isActive
                ? 'text-white bg-white/10'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {/* ✅ گلو پس‌زمینه فعال */}
            {isActive && (
              <motion.div
                layoutId="navbar-active"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10"
                transition={{ type: 'spring', duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
            {/* ✅ خط زیر هنگام hover */}
            <span className={`absolute bottom-1 right-2 left-2 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
              isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
            }`} />
          </Link>
        )
      })}
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
      <div className="hidden lg:flex items-center gap-3">
        <Link
          href="/dashboard"
          prefetch={true}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/60 hover:bg-gray-700/60 border border-gray-700/50 hover:border-gray-600 transition-all duration-200"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-gray-200">{session.user?.name}</span>
        </Link>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={onSignOut}
          className="flex items-center gap-2 px-5 py-2.5 bg-red-600/90 hover:bg-red-600 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 shadow-lg hover:shadow-red-500/30"
        >
          <LogOut className="w-4 h-4" />
          خروج
        </motion.button>
      </div>
    )
  }

  return (
    <div className="hidden lg:flex items-center gap-3">
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={onSignIn}
        className="flex items-center gap-2 px-5 py-2.5 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700/60 hover:border-gray-500 rounded-xl text-sm font-bold tracking-wide transition-all duration-200"
      >
        <LogIn className="w-4 h-4 text-blue-400" />
        <span className="text-gray-200">ورود</span>
      </motion.button>
      <Link href="/auth/signup" prefetch={true}>
        <motion.button
          whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(99,102,241,0.5)' }}
          whileTap={{ scale: 0.96 }}
          className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 shadow-lg"
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
          transition={{ duration: 0.25 }}
          className="lg:hidden bg-gray-950/98 backdrop-blur-2xl border-t border-gray-800/80"
        >
          <div className="px-4 py-6 space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  onClick={onClose}
                  className={`flex items-center gap-3 py-3 px-4 rounded-xl font-semibold text-base tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-white/10'
                      : 'text-gray-400 hover:bg-gray-800/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                  )}
                  {link.name}
                </Link>
              )
            })}

            <div className="pt-4 border-t border-gray-800/80 space-y-3">
              {session ? (
                <>
                  <Link
                    href="/dashboard"
                    prefetch={true}
                    onClick={onClose}
                    className="flex items-center gap-3 py-3 px-4 rounded-xl bg-gray-800/60 hover:bg-gray-700/60 border border-gray-700/50 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-200">{session.user?.name}</span>
                  </Link>
                  <button
                    onClick={onSignOut}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-red-600/90 hover:bg-red-600 rounded-xl font-bold text-sm tracking-wide transition-all duration-200"
                  >
                    <LogOut className="w-4 h-4" />
                    خروج
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={onSignIn}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700/60 rounded-xl font-bold text-sm tracking-wide transition-all duration-200"
                  >
                    <LogIn className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-200">ورود</span>
                  </button>
                  <Link
                    href="/auth/signup"
                    prefetch={true}
                    onClick={onClose}
                    className="block text-center py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-bold text-sm tracking-wide transition-all duration-200"
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
