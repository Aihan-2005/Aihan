'use client'

import { useState, useRef } from 'react'
import ScrollFloat from '../ui/ScrollCard'
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
    image: "/images/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scal.jpg",
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
    image: "/images/Artificial-intelligente-and-consultancy-1200x675.jpg",
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

export default function Products() {
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
            هوش مصنوعی های ما
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            مجموعه کامل راه‌کارهای هوش مصنوعی برای کسب‌وکار شما
          </p>
        </motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <ScrollFloatCard 
              key={product.id} 
              product={product} 
              index={index}
            />
          ))}
        </div>

      
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button variant="primary" className=' font-bold'>
            نمایش تمام محصولات
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}


function ScrollFloatCard({ product, index }: { product: Product; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <ScrollFloat
      animationDuration={0.8}
      ease='power3.out'
      scrollStart={`top bottom+=${100 + (index * 50)}px`}
      scrollEnd={`bottom top+=${100 - (index * 20)}px`}
      stagger={0.05}
      containerClassName="w-full h-full"
      textClassName=""
    >
      <div 
        className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* تصویر محصول */}
        <div className="relative h-60 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
         
          <div className={`absolute inset-0 bg-blue-400 transition-all duration-500 ${
            isHovered 
              ? 'transform skew-x-12 translate-x-1/3 opacity-70' 
              : 'transform skew-x-12 translate-x-full opacity-0'
          }`} />
          
          <div className={`absolute inset-0 bg-blue-800 transition-all duration-500 delay-100 ${
            isHovered 
              ? 'transform -skew-x-12 translate-x-1/4 opacity-70' 
              : 'transform -skew-x-12 translate-x-full opacity-0'
          }`} />

          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        
        <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
          <div className="space-y-3">
            <h3 className={`text-2xl font-bold text-white transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'
            }`}>
              {product.name}
            </h3>
            <p className={`text-white/80 text-sm leading-relaxed transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-4 opacity-0'
            }`}>
              {product.description}
            </p>
          </div>
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
      </div>
    </ScrollFloat>
  )
}