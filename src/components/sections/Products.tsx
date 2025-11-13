'use client'
import { useState, useRef } from 'react'

import { motion, useInView } from 'framer-motion'
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
    image: "/images/cyberpunk-warrior-portrait.jpg",
    name: "دستیار هوشمند",
    description: "دستیار هوشمند برای پاسخگویی به سوالات و راهنمایی کاربران"
  },
  {
    id: 2,
    image: "/images/Firefly_Gemini Flash_A robot  analysing data. The theme should be dark with neon colours.  The picture sho 152106.png",
    name: "تولید محتوا",
    description: "سیستم تولید محتوای خودکار و خلاق برای شبکه‌های اجتماعی"
  },
  {
    id: 3,
    image: "/images/Firefly_Gemini Flash_A robot drawing an image 152106.png",
    name: "تحلیل داده",
    description: "تحلیل و پردازش داده‌های بزرگ برای کسب‌وکارها"
  },
  {
    id: 4,
    image: "/images/Firefly_Gemini Flash_A robot drawing an image. The theme should be dark with neon colours.  The picture sh 152106.png",
    name: "بینایی کامپیوتر",
    description: "سیستم تشخیص تصویر و ویدیو با دقت بالا"
  },
  {
    id: 5,
    image: "/images/Firefly_Gemini Flash_A robot producing content. The theme should be dark with neon colours.  The picture s 152106.png",
    name: "پردازش زبان",
    description: "پردازش زبان طبیعی فارسی برای تحلیل متون"
  },
  {
    id: 6,
    image: "/images/Firefly_Gemini Flash_A robot  analysing data. The theme should be dark with neon colours.  The picture sho 152106.png",
    name: "پیش‌بینی",
    description: "سیستم پیش‌بینی و آنالیز trends بازار"
  }
]


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const hoverCardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    y: 30
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function Products() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { 
    once: true,
    margin: "-100px"
  })

  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { 
    once: true,
    margin: "-50px"
  })

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <Container>
        
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            هوش مصنوعی های ما
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            مجموعه کامل راه‌کارهای هوش مصنوعی برای کسب‌وکار شما
          </motion.p>
        </motion.div>

        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
            />
          ))}
        </motion.div>

        
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button variant="primary" size="lg">
            نمایش تمام محصولات
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { 
    once: true,
    margin: "-50px"
  })

  return (
    <motion.div
      ref={cardRef}
      variants={hoverCardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     
      <div className="relative h-auto overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />
        
        
        <div className={`absolute inset-0 bg-blue-600/60 transition-all duration-500 ${
          isHovered 
            ? 'transform skew-x-12 translate-x-1/3 opacity-50' 
            : 'transform skew-x-12 translate-x-full opacity-0'
        }`} />
        
        <div className={`absolute inset-0 bg-blue-700/60 transition-all duration-500 delay-100 ${
          isHovered 
            ? 'transform -skew-x-12 translate-x-1/4 opacity-50' 
            : 'transform -skew-x-12 translate-x-full opacity-0'
        }`} />

       
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      
      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
        <motion.div className="space-y-3">
          <motion.h3 
            className="text-2xl font-bold text-white"
            animate={{ 
              y: isHovered ? 0 : 6,
              opacity: isHovered ? 1 : 0.9
            }}
            transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
          >
            {product.name}
          </motion.h3>
          <motion.p 
            className="text-white/80 text-sm leading-relaxed"
            animate={{ 
              y: isHovered ? 0 : 6,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3, delay: isHovered ? 0.3 : 0 }}
          >
            {product.description}
          </motion.p>
        </motion.div>
      </div>

      
      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
        isHovered 
          ? 'shadow-[0_0_0_2px_#3b82f6]' 
          : ''
      }`} />

    
      <a 
        href="#" 
        className="absolute inset-0 z-20 cursor-pointer"
        onClick={(e) => {
          e.preventDefault()
          console.log('Clicked product:', product.name)
        }}
      />
    </motion.div>
  )
}