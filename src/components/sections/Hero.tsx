'use client'

import { motion } from "framer-motion"
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Container>
        <div className="text-center">
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
            سامانه‌ای برای ساخت و انتشار مدل‌های هوش مصنوعی،  
            دقیق، امن و قدرتمند 
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Button variant="primary">شروع کن</Button>
            <Button variant="secondary">مشاهده دمو</Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
