"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Container from "@/components/ui/Container"

const testimonials = [
  {
    name: "سارا مقدم",
    role: "مدیر محصول در TechNova",
    text: "کار با WiserAI ترکیبی از دقت، خلاقیت و هماهنگی تیمی بود. ما تونستیم چرخه تولید رو ۲ برابر سریع‌تر کنیم.",
    avatar: "/avatars/avatar1.png"
  },
  {
    name: "علی راد",
    role: "بنیان‌گذار DataLayer",
    text: "مدل‌های سفارشی WiserAI مسیر تحلیل داده رو متحول کردن. تصمیم‌گیری‌هامون هوشمندتر و سریع‌تر از همیشه است.",
    avatar: "/avatars/avatar2.png"
  },
  {
    name: "نگار جهان‌دوست",
    role: "UI/UX Designer در Cloudify",
    text: "تعهد تیم WiserAI به زیبایی بصری و سرعت اجرا واقعاً الهام‌بخشه. تجربه کاربر توی محصول ما متحول شد.",
    avatar: "/avatars/avatar3.png"
  },
  {
    name: "رضا نیک‌فر",
    role: "CTO در VisionTech",
    text: "تکنولوژی AvalAI بدون اغراق آینده توسعه نرم‌افزاره. ما از ۲۲ مدل هوش مصنوعی‌شون تو سیستم‌هامون استفاده کردیم.",
    avatar: "/avatars/avatar4.png"
  },
  {
    name: "مهسا فلاح",
    role: "دانشمند داده در SynapseAI",
    text: "تیم WiserAI دقیقاً می‌فهمه هوش مصنوعی واقعی چیه. از طراحی تا اجرا، سریع، تمیز و فکرشده.",
    avatar: "/avatars/avatar5.png"
  },
  {
    name: "مهسا فلاح",
    role: "دانشمند داده در SynapseAI",
    text: "تیم WiserAI دقیقاً می‌فهمه هوش مصنوعی واقعی چیه. از طراحی تا اجرا، سریع، تمیز و فکرشده.",
    avatar: "/avatars/avatar5.png"
  },
  {
    name: "مهسا فلاح",
    role: "دانشمند داده در SynapseAI",
    text: "تیم WiserAI دقیقاً می‌فهمه هوش مصنوعی واقعی چیه. از طراحی تا اجرا، سریع، تمیز و فکرشده.",
    avatar: "/avatars/avatar5.png"
  },
  {
    name: "مهسا فلاح",
    role: "دانشمند داده در SynapseAI",
    text: "تیم WiserAI دقیقاً می‌فهمه هوش مصنوعی واقعی چیه. از طراحی تا اجرا، سریع، تمیز و فکرشده.",
    avatar: "/avatars/avatar5.png"
  },
  {
    name: "مهسا فلاح",
    role: "دانشمند داده در SynapseAI",
    text: "تیم WiserAI دقیقاً می‌فهمه هوش مصنوعی واقعی چیه. از طراحی تا اجرا، سریع، تمیز و فکرشده.",
    avatar: "/avatars/avatar5.png"
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  // انتخاب سه آیتم متوالی
  const visible = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length]
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0b0c1a] via-[#060818] to-[#050510] text-white overflow-hidden border-t border-blue-900/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,160,255,0.12)_0%,transparent_75%)] pointer-events-none" />

      <Container>
        {/* تیتر ثابت */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            نظرات دیگران 💬
          </h2>
          <p className="text-gray-400 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            نظر افرادی که تجربه واقعی با WiserAI داشتن.
          </p>
        </div>

        {/* اسلاید نرمی با translateX */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            key={index} // باعث trigger animation هر بار میشه
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1] // ease-out cubic-bezier curve
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {visible.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, boxShadow: "0 0 30px rgba(0,180,255,0.25)" }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="p-[2px] rounded-3xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-indigo-500/10 blur-xl opacity-0 group-hover:opacity-20 transition" />
                <div className="relative z-10 h-full rounded-3xl bg-black/70 backdrop-blur-xl border border-white/10 p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400/40 shadow-cyan-400/10">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-cyan-300 font-semibold">{t.name}</h3>
                      <p className="text-gray-400 text-sm">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed italic">“{t.text}”</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  )
}
