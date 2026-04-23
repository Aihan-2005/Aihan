'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import Aurora from "../ui/Aurora"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 z-10">
        <Aurora
          colorStops={["#61f5f2", "#b19eef", "#3507ed"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="absolute inset-0 -z-5 bg-gradient-to-b from-black/70 via-gray-900/50 to-black/70" />

      <Container>
        <div className="text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WiserAI
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            استارتاپی برای ساخت و انتشار زیرساخت های هوش مصنوعی،
            دقیق، امن و قدرتمند برای توانمند کردن و رشد بیشتر کسب و کار شما
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center space-x-5 gap-2 rtl:space-x-reverse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link href="/smart-automation" prefetch={true}>
              <Button variant="primary">شروع همکاری</Button>
            </Link>
            <Link href="/products" prefetch={true}>
              <Button variant="secondary">مشاهده محصولات</Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
