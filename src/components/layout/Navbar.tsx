'use client'

import { useEffect, useState } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavbarStore } from "@/store/useNavbarStore"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import Image from "next/image"

export default function Navbar() {
  const { data: session } = useSession()
  const user = session?.user
  const { isOpen, toggle, close } = useNavbarStore()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { name: "خانه", href: "/" },
    { name: "محصولات", href: "/products" },
    { name: "قیمت‌ها", href: "/pricing" },
    { name: "مستندات", href: "/docs" },
    { name: "بلاگ", href: "/blog" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="font-extrabold text-2xl text-white tracking-tight">
            Wiser<span className="text-blue-500">AI</span>
          </a>

          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-5 rtl:space-x-reverse">
            {user ? (
              <div className="flex items-center gap-3">
                {user.image && (
                  <Image
                    src={user.image}
                    alt={user.name || "avatar"}
                    width={36}
                    height={36}
                    className="rounded-full border border-gray-700 hover:border-blue-500 transition"
                  />
                )}
                <span className="text-gray-300 text-sm">
                  سلام، {user.name?.split(" ")[0] || "کاربر"}
                </span>
                <button
                  onClick={() => signOut()}
                  className="text-red-400 hover:text-red-300 text-sm underline"
                >
                  خروج
                </button>
              </div>
            ) : (
              <Button
                onClick={() => signIn()}
                variant="primary"
                className="text-sm px-5 py-2"
              >
                ورود / ثبت‌نام
              </Button>
            )}
          </div>

          <button
            className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
            onClick={toggle}
          >
            <span
              className={`w-6 h-0.5 bg-white transition ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="flex flex-col items-center py-5 space-y-5">
              {links.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="text-gray-300 hover:text-white text-lg transition"
                >
                  {item.name}
                </a>
              ))}

              {user ? (
                <div className="flex flex-col items-center space-y-3">
                  {user.image && (
                    <Image
                      src={user.image}
                      alt={user.name || "avatar"}
                      width={40}
                      height={40}
                      className="rounded-full border border-gray-700"
                    />
                  )}
                  <span className="text-gray-400 text-sm">سلام، {user.name}</span>
                  <button
                    onClick={() => {
                      signOut()
                      close()
                    }}
                    className="text-red-400 hover:text-red-300 text-sm underline"
                  >
                    خروج
                  </button>
                </div>
              ) : (
                <Button
                  variant="primary"
                  onClick={() => {
                    signIn()
                    close()
                  }}
                >
                  ورود / ثبت‌نام
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
