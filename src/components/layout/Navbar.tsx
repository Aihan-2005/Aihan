

"use client"

import { useEffect, useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { useNavbarStore } from "@/store/useNavbarStore"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const { data: session } = useSession()
  const user = session?.user
  const { isOpen, toggle, close } = useNavbarStore()
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  const links = [
    { name: "خانه", href: "/" },
    { name: "محصولات", href: "/products" },
    { name: "قیمت‌ها", href: "/price" },
    { name: "مستندات", href: "/document" },
    { name: "بلاگ", href: "/blog" },
    { name: "درباره ما", href: "/about" },
    { name: "ارتباط با ما", href: "/contact" },
    { name: "هوشمندسازی", href: "/smart-automation" },
    { name: "همکاری با ما", href: "/join-us" },
  ]as const

  useEffect(() => {
    links.forEach(link => {
      router.prefetch(link.href)
    })
  }, [])

  // ✅ Scroll Listener برای افکت شفاف / نیمه‌شفاف Navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ✨ انیمیشن ظاهر Navbar هنگام ورود صفحه
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={variants}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all ${
        scrolled
          ? "bg-black/70 border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* لوگو */}
          <Link href="/" prefetch={true} className="font-extrabold text-2xl text-white select-none">
            Wiser<span className="text-blue-500">AI</span>
          </Link>

          {/* لینک‌ها در نمایش دسکتاپ */}
          <div dir="rtl" className="hidden md:flex items-center gap-8 text-right">
            {links.map(item => (
              <Link
                prefetch={true} // 👈 Prefetch برای هر لینک
                key={item.href}
                href={item.href}
                onClick={close}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* بخش پروفایل یا ورود */}
          <div className="hidden md:flex items-center gap-5">
            {user ? (
              <div className="flex items-center gap-3">
                {user.image && (
                  <Image
                    src={user.image}
                    alt={user.name || "avatar"}
                    width={36}
                    height={36}
                    priority
                    className="rounded-full border border-gray-700 hover:border-blue-500 transition duration-200"
                  />
                )}
                <span className="text-gray-300 text-sm">
                  سلام، {user.name?.split(" ")[0] || "کاربر"}
                </span>
                <button
                  onClick={() => signOut()}
                  className="text-red-400 hover:text-red-300 text-sm underline underline-offset-4"
                >
                  خروج
                </button>
              </div>
            ) 
            : (
              null
              // <Link href="/login" prefetch={true}>
              //   <Button variant="primary" className="text-sm px-5 py-2">
              //     ورود / ثبت‌نام
              //   </Button>
              // </Link>
            )
            }
          </div>

          {/* منو موبایل */}
          <button
            aria-label="Toggle Navbar"
            className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
            onClick={toggle}
          >
            <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`} />
            <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`} />
            <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`} />
          </button>
        </div>
      </Container>

      {/* منو بازشونده موبایل */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 border-t border-gray-800 backdrop-blur-md"
          >
            <div dir="rtl" className="flex flex-col items-center py-6 gap-5 text-right">
              {links.map(item => (
                <Link
                  prefetch={true}
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}

              {user ? (
                <div className="flex flex-col items-center gap-3">
                  {user.image && (
                    <Image
                      src={user.image}
                      alt={user.name || "avatar"}
                      width={40}
                      height={40}
                      priority
                      className="rounded-full border border-gray-700"
                    />
                  )}
                  <span className="text-gray-400 text-sm">
                    سلام، {user.name?.split(" ")[0] || "کاربر"}
                  </span>
                  <button
                    onClick={() => { signOut(); close() }}
                    className="text-red-400 hover:text-red-300 text-sm underline underline-offset-4"
                  >
                    خروج
                  </button>
                </div>
              ) : (
                null
                // <Link href="/login" prefetch={true} onClick={close}>
                //   <Button variant="primary" className="text-sm px-5">
                //     ورود / ثبت‌نام
                //   </Button>
                // </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
