"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Container from "@/components/ui/Container"

const testimonials = [
  {
    name: "سارا مقدم",
    role: "توسعه‌دهنده فرانت‌اند",
    text: "کار با WiserAI تجربه‌ای متفاوت بود. ابزارهای هوش مصنوعی‌شون واقعاً به من کمک کرد تا کدنویسی رو سریع‌تر و باکیفیت‌تر انجام بدم.",
    avatar: "👩‍💻",
    gender: "female"
  },
  {
    name: "علی راد",
    role: "مهندس داده",
    text: "مدل‌های هوش مصنوعی WiserAI خیلی دقیق و کاربردی هستن. تو پروژه‌های تحلیل داده بهم کمک زیادی کردن.",
    avatar: "👨‍💼",
    gender: "male"
  },
  {
    name: "نگار جهان‌دوست",
    role: "طراح UI/UX",
    text: "رابط کاربری و تجربه کاری با WiserAI فوق‌العاده بود. ابزارهاشون خلاقیت رو تقویت می‌کنن.",
    avatar: "👩‍🎨",
    gender: "female"
  },
  {
    name: "رضا نیک‌فر",
    role: "مدیر فنی",
    text: "تکنولوژی WiserAI واقعاً پیشرفته‌ست. تو پروژه‌های مختلف ازش استفاده کردم و نتیجه عالی بود.",
    avatar: "👨‍🔧",
    gender: "male"
  },
  {
    name: "مهسا فلاح",
    role: "متخصص یادگیری ماشین",
    text: "دقت و سرعت مدل‌های WiserAI واقعاً قابل توجهه. از طراحی تا اجرا، همه چیز حرفه‌ای و فکرشده‌ست.",
    avatar: "👩‍🔬",
    gender: "female"
  },
  {
    name: "امیر حسینی",
    role: "توسعه‌دهنده بک‌اند",
    text: "یکپارچگی API های WiserAI با سیستم‌های مختلف خیلی راحت و سریعه. مستندات هم کامل و واضحه.",
    avatar: "👨‍💻",
    gender: "male"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const getVisibleTestimonials = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return items
  }

  const visibleItems = getVisibleTestimonials()

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#0b0c1a] via-[#060818] to-[#050510] text-white overflow-hidden border-t border-blue-900/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,160,255,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            نظرات کاربران
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto px-4">
            تجربه واقعی افرادی که با WiserAI کار کردن
          </p>
        </motion.div>

        <div className="hidden md:block relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            >
              {visibleItems.map((testimonial, i) => (
                <TestimonialCard key={`${currentIndex}-${i}`} testimonial={testimonial} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="md:hidden relative px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} index={0} />
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1)
                  setCurrentIndex(i)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-8 bg-cyan-400"
                    : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`نظر ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/0 via-blue-500/0 to-indigo-500/0 group-hover:from-cyan-400/20 group-hover:via-blue-500/20 group-hover:to-indigo-500/20 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

      <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-gray-800/80 via-gray-700/50 to-gray-900/80 group-hover:from-cyan-500/50 group-hover:via-blue-500/50 group-hover:to-indigo-500/50 transition-all duration-500">
        <div className="relative h-full rounded-3xl bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-950/95 backdrop-blur-xl border border-white/5 p-6 md:p-8">
          <div className="flex items-center mb-5">
            <div className="relative">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-400/40 flex items-center justify-center text-3xl md:text-4xl shadow-lg shadow-cyan-500/10 group-hover:shadow-cyan-500/30 transition-shadow duration-300">
                {testimonial.avatar}
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900" />
            </div>

            <div className="mr-4 flex-1">
              <h3 className="text-cyan-300 font-semibold text-base md:text-lg group-hover:text-cyan-200 transition-colors">
                {testimonial.name}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm mt-0.5">
                {testimonial.role}
              </p>
            </div>
          </div>

          <div className="text-cyan-400/30 text-4xl md:text-5xl leading-none mb-3 font-serif">"</div>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            {testimonial.text}
          </p>

          <div className="flex gap-1 mt-5 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
