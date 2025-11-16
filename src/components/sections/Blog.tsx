<<<<<<< HEAD
=======
// components/sections/Blog.tsx
>>>>>>> 6dfd8d0487202a5237bc10888b093587bc41aae9
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from "@/components/ui/Container"
import SpotlightCard from '../ui/SpotlightCard'

interface BlogPost {
  id: number
  image: string
  title: string
  description: string
  date: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/images/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scal.jpg",
    title: "تازه‌ترین ترندهای هوش مصنوعی در سال 2024",
    description: "مروری بر جدیدترین تحولات و نوآوری‌های حوزه هوش مصنوعی و یادگیری ماشین",
    date: "۱۴۰۲/۱۰/۱۵",
    category: "هوش مصنوعی"
  },
  {
    id: 2,
    image: "/images/Artificial-intelligente-and-consultancy-1200x675.jpg",
    title: "یادگیری عمیق برای مبتدیان",
    description: "آموزش گام به گام مفاهیم پایه‌ای شبکه‌های عصبی و یادگیری عمیق",
    date: "۱۴۰۲/۱۰/۱۲",
    category: "یادگیری ماشین"
  },
  {
    id: 3,
    image: "/images/Blog-images-scaled.jpg",
    title: "علم داده در کسب‌وکارهای نوپا",
    description: "چگونه از تحلیل داده برای رشد استارتاپ‌ها استفاده کنیم",
    date: "۱۴۰۲/۱۰/۰۸",
    category: "علم داده"
  },
  {
    id: 4,
    image: "/images/intelligenza-artificiale-ai-mano.jpg",
    title: "اخلاق در هوش مصنوعی",
    description: "بررسی چالش‌های اخلاقی و اجتماعی توسعه سیستم‌های هوشمند",
    date: "۱۴۰۲/۱۰/۰۵",
    category: "اخلاق AI"
  }
]

export default function Blog() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { 
    once: true,
    margin: "-100px"
  })

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <Container>
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            مستند بلاگ
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            جدیدترین مقالات و آموزش‌های تخصصی در حوزه هوش مصنوعی و فناوری
          </p>
        </motion.div>

        
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              index={index}
              isInView={isInView}
              
            />
          ))}
        </div>
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
    'rgba(0, 229, 255, 0.2)',   
    'rgba(255, 0, 128, 0.2)',    
    'rgba(0, 255, 128, 0.2)',     
    'rgba(255, 128, 0, 0.2)'     
  ]

  const spotlightColor = spotlightColors[index % spotlightColors.length]

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <SpotlightCard 
        className="h-full p-0 border-neutral-700 bg-neutral-800/50 backdrop-blur-sm"
        spotlightColor={spotlightColor}
      >
        <div className="flex flex-col h-full">
          
          <div className="relative w-full h-48 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
          
            <div className="absolute top-4 left-4">
              <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                {post.category}
              </span>
            </div>
          </div>

          
          <div className="flex-1 p-6 space-y-3">

            <div className="flex items-center text-sm text-gray-300">
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{post.date}</span>
            </div>

            <h3 className="text-lg font-bold text-white leading-tight line-clamp-2">
              {post.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
              {post.description}
            </p>

            <button className="w-full py-3 px-4 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/30 mt-4">
              مطالعه مقاله
            </button>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}