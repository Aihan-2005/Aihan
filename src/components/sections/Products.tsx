'use client'

import { useState, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from "next/image"
import Link from "next/link"

import { 
  Sparkles, 
  Zap, 
  Brain, 
  Eye, 
  MessageSquare, 
  TrendingUp,
  ArrowRight,
  Star,
  Cpu,
  Layers
} from 'lucide-react'

import ScrollFloat from '../ui/ScrollCard'
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"

import { products } from '@/data/products'

interface ProductDisplayCard {
  id: number
  image: string
  name: string
  description: string
  icon: any
  color: string
  gradient: string
  features: string[]
  tag?: string
}

const displayProducts: ProductDisplayCard[] = products.slice(0, 6).map(p => ({
  id: p.id,
  image: p.image,
  name: p.name,
  description: p.description,
  icon: getIconComponent(p.icon),  
  color: p.color,
  gradient: p.gradient,
  features: p.features.map(f => f.title).slice(0, 3),
  tag: p.tag
}))

function getIconComponent(iconName: string) {
  const icons: Record<string, any> = {
    MessageSquare,
    Sparkles,
    Brain,
    Eye,
    Layers,
    TrendingUp
  }
  return icons[iconName] || Cpu
}

export default function Products() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(sectionRef, { 
    once: true,
    rootMargin: "-50px"
  })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8])

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <Container>
        <motion.div style={{ opacity, scale }}>
          <motion.div
            className="text-center mb-20 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Cpu className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">محصولات هوش مصنوعی</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-l from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                راه‌حل‌های هوشمند
              </span>
              <motion.div
                className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              مجموعه‌ای کامل از قدرتمندترین ابزارهای{' '}
              <span className="text-blue-400 font-semibold">هوش مصنوعی</span> برای تحول دیجیتال کسب‌وکار شما
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: "6+", label: "محصول فعال" },
                { value: "99%", label: "دقت مدل‌ها" },
                { value: "24/7", label: "پشتیبانی" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 relative z-10">
            {displayProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-white/10 backdrop-blur-xl p-12 overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              <div className="relative z-10 text-center">
                <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  آماده برای شروع هستید؟
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  با مشاوره رایگان، بهترین راه‌حل هوش مصنوعی را برای کسب‌وکارتان پیدا کنید
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button 
                      variant="primary" 
                      className="group font-bold px-8 py-4 bg-gradient-to-l from-blue-600 via-purple-600 to-pink-600 hover:scale-105 transition-all duration-300"
                    >
                      <span className="flex items-center gap-2">
                        مشاوره رایگان
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                  <Link href="/products">
                    <button className="px-8 py-4 rounded-xl border-2 border-white/20 text-white font-bold hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                      مشاهده همه محصولات
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}


interface ProductCardProps {
  product: ProductDisplayCard
  index: number
}

function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = product.icon

  return (
    <ScrollFloat
      animationDuration={0.8}
      ease="power3.out"
      scrollStart={`top bottom+=${100 + index * 50}px`}
      scrollEnd={`bottom top+=${100 - index * 20}px`}
      stagger={0.05}
      containerClassName="w-full h-full"
    >
      <motion.div
        className="group relative h-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div
          className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {product.tag && (
            <motion.div
              className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold flex items-center gap-1"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
            >
              <Star className="w-3 h-3" />
              {product.tag}
            </motion.div>
          )}

          <div className="relative h-64 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              priority={index < 3}
            />

            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${product.gradient} mix-blend-multiply`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.7 : 0.4 }}
              transition={{ duration: 0.5 }}
            />
            
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${product.gradient}`}
              initial={{ x: '100%', skewX: -12 }}
              animate={{ x: isHovered ? '30%' : '100%' }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ opacity: 0.5 }}
            />
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${product.gradient}`}
              initial={{ x: '100%', skewX: 12 }}
              animate={{ x: isHovered ? '50%' : '100%' }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              style={{ opacity: 0.3 }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <motion.div
              className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-br ${product.gradient}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          <div className="relative p-6 space-y-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-l group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
              {product.name}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {product.features.map((feature, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + i * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-l ${product.gradient} bg-clip-text text-transparent`}>
                اطلاعات بیشتر
                <ArrowRight className={`w-4 h-4 text-${product.color}-400 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </div>
            </motion.div>
          </div>

          <motion.div
            className={`absolute inset-0 rounded-2xl pointer-events-none`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)]`} />
          </motion.div>

          <Link
            href={`/products/${product.id}`}
            className="absolute inset-0 z-30 cursor-pointer"
            prefetch={true}
          />
        </div>
      </motion.div>
    </ScrollFloat>
  )
}

