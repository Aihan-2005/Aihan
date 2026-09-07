'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from "@/components/ui/Container"
import SpotlightCard from '../ui/SpotlightCard'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendar, FaUser, FaClock, FaArrowLeft } from 'react-icons/fa'

interface BlogPost {
  id: number
  slug: string
  image: string
  title: string
  description: string
  content?: string
  date: string
  category: string
  author: string
  readTime: string
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "ai-trends-2024",
    image: "/images/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scal.jpg",
    title: "تازه‌ترین ترندهای هوش مصنوعی در سال 2024",
    description: "مروری بر جدیدترین تحولات و نوآوری‌های حوزه هوش مصنوعی و یادگیری ماشین که صنعت فناوری را متحول خواهد کرد",
    date: "۱۴۰۴/۱۱/۰۶",
    category: "هوش مصنوعی",
    author: "علی احمدی",
    readTime: "۸ دقیقه",
    tags: ["AI", "Machine Learning", "Technology", "Innovation"]
  },
  {
    id: 2,
    slug: "deep-learning-beginners",
    image: "/images/Artificial-intelligente-and-consultancy-1200x675.jpg",
    title: "یادگیری عمیق برای مبتدیان",
    description: "آموزش جامع و گام به گام مفاهیم پایه‌ای شبکه‌های عصبی و یادگیری عمیق برای علاقه‌مندان به این حوزه",
    date: "۱۴۰۴/۱۱/۰۳",
    category: "یادگیری ماشین",
    author: "سارا محمدی",
    readTime: "۱۲ دقیقه",
    tags: ["Deep Learning", "Neural Networks", "Tutorial", "Beginner"]
  },
  {
    id: 3,
    slug: "data-science-startups",
    image: "/images/Blog-images-scaled.jpg",
    title: "علم داده در کسب‌وکارهای نوپا",
    description: "چگونه از قدرت تحلیل داده و هوش تجاری برای رشد سریع و پایدار استارتاپ‌ها بهره‌برداری کنیم",
    date: "۱۴۰۴/۱۰/۲۸",
    category: "علم داده",
    author: "محمد رضایی",
    readTime: "۱۰ دقیقه",
    tags: ["Data Science", "Startups", "Analytics", "Growth"]
  },
  {
    id: 4,
    slug: "ai-ethics",
    image: "/images/intelligenza-artificiale-ai-mano.jpg",
    title: "اخلاق در هوش مصنوعی",
    description: "بررسی عمیق چالش‌های اخلاقی و اجتماعی توسعه سیستم‌های هوشمند و تأثیر آن‌ها بر جامعه",
    date: "۱۴۰۴/۱۰/۲۵",
    category: "اخلاق AI",
    author: "فاطمه کریمی",
    readTime: "۱۵ دقیقه",
    tags: ["AI Ethics", "Society", "Philosophy", "Technology"]
  },
  {
    id: 5,
    slug: "blockchain-future",
    image: "/images/blockchain-future.jpg",
    title: "آینده بلاک‌چین و رمزارزها",
    description: "نگاهی به پتانسیل‌های بلاک‌چین در تحول صنایع مختلف و تأثیر آن بر اقتصاد دیجیتال",
    date: "۱۴۰۴/۱۰/۲۰",
    category: "بلاک‌چین",
    author: "حسین نوری",
    readTime: "۹ دقیقه",
    tags: ["Blockchain", "Cryptocurrency", "DeFi", "Web3"]
  },
  {
    id: 6,
    slug: "iot-smart-cities",
    image: "/images/iot-smart-city.jpg",
    title: "اینترنت اشیا و شهرهای هوشمند",
    description: "کاربرد تکنولوژی IoT در ایجاد شهرهای هوشمند و بهبود کیفیت زندگی شهروندان",
    date: "۱۴۰۴/۱۰/۱۵",
    category: "اینترنت اشیا",
    author: "مریم اکبری",
    readTime: "۱۱ دقیقه",
    tags: ["IoT", "Smart Cities", "Urban Planning", "Sustainability"]
  },
  {
    id: 7,
    slug: "quantum-computing",
    image: "/images/quantum-computer.jpg",
    title: "محاسبات کوانتوم: انقلاب آینده",
    description: "آشنایی با مفاهیم پایه محاسبات کوانتوم و تأثیر آن بر آینده فناوری و امنیت",
    date: "۱۴۰۴/۱۰/۱۰",
    category: "محاسبات کوانتوم",
    author: "دکتر امیر حسینی",
    readTime: "۲۰ دقیقه",
    tags: ["Quantum Computing", "Physics", "Cryptography", "Future Tech"]
  },
  {
    id: 8,
    slug: "cybersecurity-2024",
    image: "/images/cybersecurity.jpg",
    title: "امنیت سایبری در عصر دیجیتال",
    description: "بررسی جدیدترین تهدیدات سایبری و راهکارهای محافظت از داده‌ها در محیط دیجیتال",
    date: "۱۴۰۴/۱۰/۰۵",
    category: "امنیت سایبری",
    author: "رضا موسوی",
    readTime: "۱۳ دقیقه",
    tags: ["Cybersecurity", "Data Protection", "Privacy", "Hacking"]
  },
  {
    id: 9,
    slug: "ar-vr-metaverse",
    image: "/images/ar-vr-metaverse.jpg",
    title: "واقعیت مجازی و متاورس",
    description: "کاوش در دنیای واقعیت مجازی، افزوده و پتانسیل‌های بی‌نظیر متاورس در آینده",
    date: "۱۴۰۴/۰۹/۳۰",
    category: "واقعیت مجازی",
    author: "نیما پارسا",
    readTime: "۱۴ دقیقه",
    tags: ["AR", "VR", "Metaverse", "Virtual Reality", "Gaming"]
  }
]

export default function Blog() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { 
    once: true,
    margin: "-100px"
  })

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-purple-500/5" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Container>
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-20"
            />
            <h2 className="relative text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              مجله تخصصی
            </h2>
          </div>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            جدیدترین مقالات و آموزش‌های تخصصی در حوزه‌های هوش مصنوعی، 
            فناوری‌های نوین و تحولات دیجیتال
          </motion.p>

          <motion.div
            className="mt-8 h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Link 
            href="/blog"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            مشاهده تمام مقالات
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}

function BlogCard({ post, index, isInView }: { 
  post: BlogPost; 
  index: number;
  isInView: boolean;
}) {
  const spotlightColors = [
    'rgba(34, 211, 238, 0.15)',   // cyan
    'rgba(168, 85, 247, 0.15)',   // purple  
    'rgba(16, 185, 129, 0.15)',   // emerald
    'rgba(245, 158, 11, 0.15)',   // amber
    'rgba(239, 68, 68, 0.15)',    // red
    'rgba(59, 130, 246, 0.15)',   // blue
    'rgba(139, 92, 246, 0.15)',   // violet
    'rgba(236, 72, 153, 0.15)',   // pink
    'rgba(20, 184, 166, 0.15)'    // teal
  ]as const

  const gradients = [
    'from-cyan-500 to-blue-500',
    'from-purple-500 to-pink-500', 
    'from-emerald-500 to-teal-500',
    'from-amber-500 to-orange-500',
    'from-red-500 to-pink-500',
    'from-blue-500 to-indigo-500',
    'from-violet-500 to-purple-500',
    'from-pink-500 to-rose-500',
    'from-teal-500 to-cyan-500'
  ]

  const spotlightColor = spotlightColors[index % spotlightColors.length]
  const gradient = gradients[index % gradients.length]

  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 60, scale: 0.9 }
      }
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -12,
        transition: { duration: 0.3 },
      }}
    >
      <Link href={`/blog/${post.slug}`} className="h-full block">
        <SpotlightCard
          className="h-full p-0 border-neutral-700/50 bg-gradient-to-br from-neutral-900/70 to-black/70 backdrop-blur-lg hover:border-neutral-600/50 transition-all duration-500"
          spotlightColor={spotlightColor}
        >
          <div className="flex flex-col h-full">
            {/* Image Section */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                width={400}
                height={250}
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`inline-block px-3 py-1.5 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${gradient} shadow-lg`}
                >
                  {post.category}
                </span>
              </div>

              {/* Read Time Badge */}
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 text-white text-xs rounded-full backdrop-blur-sm">
                  <FaClock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 space-y-4">
              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <FaCalendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaUser className="w-3 h-3" />
                  <span>{post.author}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white leading-tight line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors">
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs text-gray-400 bg-gray-800/50 rounded-md border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/70 transition-all"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Read More */}
              <div className="pt-2">
                <div
                  className={`w-full py-3 px-4 bg-gradient-to-r ${gradient} text-white text-sm font-medium rounded-lg opacity-90 hover:opacity-100 transition-all duration-300 text-center group-hover:shadow-lg group-hover:scale-[1.02]`}
                >
                  مطالعه کامل مقاله
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </Link>
    </motion.div>
  )
}
