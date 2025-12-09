'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from "next/image"
import Link from "next/link"

import ScrollFloat from '../ui/ScrollCard'
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"

interface Product {
  id: number
  image: string
  name: string
  description: string
}

const products: Product[] = [
  {
    id: 1,
    image: "/images/artificial-intelligence.jpg",
    name: "دستیار هوشمند",
    description: "دستیار هوشمند برای پاسخگویی به سوالات و راهنمایی کاربران"
  },
  {
    id: 2,
    image: "/images/robot-analyzing-dark-neon.png",
    name: "تولید محتوا",
    description: "سیستم تولید محتوای خودکار و خلاق برای شبکه‌های اجتماعی"
  },
  {
    id: 3,
    image: "/images/data-analysis-ai.jpg",
    name: "تحلیل داده",
    description: "تحلیل و پردازش داده‌های بزرگ برای کسب‌وکارها"
  },
  {
    id: 4,
    image: "/images/robot-drawing-neon.png",
    name: "بینایی کامپیوتر",
    description: "سیستم تشخیص تصویر و ویدیو با دقت بالا"
  },
  {
    id: 5,
    image: "/images/robot-content-generator.png",
    name: "پردازش زبان",
    description: "پردازش زبان طبیعی فارسی برای تحلیل متون"
  },
  {
    id: 6,
    image: "/images/robot-trend-forecast.png",
    name: "پیش‌بینی",
    description: "سیستم پیش‌بینی و آنالیز روندهای بازار"
  }
]

export default function Products() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(sectionRef, { 
    once: true,
    rootMargin: "-100px"
  })

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden"
    >
      <Container>
        {/* عنوان بخش */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            هوش مصنوعی‌های ما
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            مجموعه‌ای از بهترین مدل‌ها و محصولات هوش مصنوعی برای رشد کسب‌وکار شما
          </p>
        </motion.div>

        {/* کارت محصولات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <ScrollFloatCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* دکمه نمایش همه */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button variant="primary" className="font-bold">
            نمایش تمام محصولات
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}

/* ─────────────────────────────
   ScrollFloatCard Component
────────────────────────────── */
interface ScrollFloatCardProps {
  product: Product
  index: number
}

function ScrollFloatCard({ product, index }: ScrollFloatCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <ScrollFloat
      animationDuration={0.8}
      ease="power3.out"
      scrollStart={`top bottom+=${100 + index * 50}px`}
      scrollEnd={`bottom top+=${100 - index * 20}px`}
      stagger={0.05}
      containerClassName="w-full h-full"
    >
      <div
        className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 
                   hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ willChange: "transform, opacity" }}
      >
        {/* تصویر */}
        <div className="relative h-60 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority={index < 3}
          />

          {/* افکت‌های Overlay */}
          <div
            className={`absolute inset-0 bg-blue-400 transition-all duration-500 ${
              isHovered
                ? 'transform skew-x-12 translate-x-1/3 opacity-70'
                : 'transform skew-x-12 translate-x-full opacity-0'
            }`} 
            style={{ willChange: 'transform, opacity' }}
          />
          <div
            className={`absolute inset-0 bg-blue-800 transition-all duration-500 delay-100 ${
              isHovered
                ? 'transform -skew-x-12 translate-x-1/4 opacity-70'
                : 'transform -skew-x-12 translate-x-full opacity-0'
            }`} 
            style={{ willChange: 'transform, opacity' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* محتوای کارت */}
        <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
          <div className="space-y-3">
            <h3
              className={`text-2xl font-bold text-white transition-all duration-300 ${
                isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'
              }`}
            >
              {product.name}
            </h3>
            <p
              className={`text-white/80 text-sm leading-relaxed transition-all duration-300 ${
                isHovered
                  ? 'translate-y-0 opacity-100 delay-100'
                  : 'translate-y-4 opacity-0'
              }`}
            >
              {product.description}
            </p>
          </div>
        </div>

        {/* افکت حاشیه */}
        <div
          className={`absolute inset-0 rounded-xl transition-all duration-300 ${
            isHovered ? 'shadow-[0_0_0_2px_#3b82f6]' : ''
          }`}
        />

        {/* لینک خود کارت */}
        <Link
          href={`/products/${product.id}`}
          className="absolute inset-0 z-20 cursor-pointer"
          prefetch={true}
        />
      </div>
    </ScrollFloat>
  )
}
