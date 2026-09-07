// 'use client'

// import { useMemo } from 'react'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import Link from 'next/link'
// import {
//   MessageSquare,
//   Sparkles,
//   Brain,
//   Eye,
//   Layers,
//   TrendingUp,
//   Cpu,
//   Search,
//   BarChart,
//   ArrowRight,
//   Star
// } from 'lucide-react'

// import Container from '@/components/ui/Container'
// import Button from '@/components/ui/Button'

// /* -------------------------------------------------------------------------- */
// /*                                   Types                                    */
// /* -------------------------------------------------------------------------- */

// interface Product {
//   id: number
//   name: string
//   description: string
//   image: string
//   icon: string
//   gradient: string
//   features: string[]
//   tag?: string
// }

// /* -------------------------------------------------------------------------- */
// /*                               Products Data                                */
// /* -------------------------------------------------------------------------- */

// const PRODUCTS: Product[] = [
//   {
//     id: 1,
//     name: 'چت‌بات هوشمند',
//     description: 'پاسخگویی خودکار و هوشمند به مشتریان با NLP پیشرفته',
//     image: '/images/products/chatbot.jpg',
//     icon: 'MessageSquare',
//     gradient: 'from-blue-500 to-cyan-500',
//     features: ['NLP', '۲۴/۷', 'یادگیری مداوم'],
//     tag: 'محبوب'
//   },
//   {
//     id: 2,
//     name: 'تولید محتوای AI',
//     description: 'تولید متن‌های بازاریابی و سئو شده با کیفیت بالا',
//     image: '/images/products/content.jpg',
//     icon: 'Sparkles',
//     gradient: 'from-purple-500 to-pink-500',
//     features: ['SEO', 'چندزبانه', 'خلاق']
//   },
//   {
//     id: 3,
//     name: 'تحلیل داده',
//     description: 'تبدیل داده‌های خام به بینش‌های تجاری ارزشمند',
//     image: '/images/products/data.jpg',
//     icon: 'Brain',
//     gradient: 'from-indigo-500 to-blue-500',
//     features: ['تحلیل', 'پیش‌بینی', 'گزارش']
//   },
//   {
//     id: 4,
//     name: 'بینایی ماشین',
//     description: 'تشخیص تصویر و ویدیو با دقت بالا',
//     image: '/images/products/vision.jpg',
//     icon: 'Eye',
//     gradient: 'from-green-500 to-emerald-500',
//     features: ['چهره', 'اشیاء', 'ویدیو'],
//     tag: 'جدید'
//   },
//   {
//     id: 5,
//     name: 'پردازش گفتار',
//     description: 'تبدیل گفتار به متن و بالعکس با کیفیت بالا',
//     image: '/images/products/speech.jpg',
//     icon: 'Layers',
//     gradient: 'from-orange-500 to-red-500',
//     features: ['Speech‑to‑Text', 'Voice AI']
//   },
//   {
//     id: 6,
//     name: 'پیش‌بینی بازار',
//     description: 'تحلیل روند بازار و پیش‌بینی قیمت‌ها',
//     image: '/images/products/market.jpg',
//     icon: 'TrendingUp',
//     gradient: 'from-teal-500 to-cyan-500',
//     features: ['روند', 'ریسک']
//   },
//   {
//     id: 7,
//     name: 'جستجوی هوشمند',
//     description: 'جستجوی معنایی پیشرفته در داده‌ها',
//     image: '/images/products/search.jpg',
//     icon: 'Search',
//     gradient: 'from-violet-500 to-purple-500',
//     features: ['Semantic', 'AI']
//   },
//   {
//     id: 8,
//     name: 'اتوماسیون AI',
//     description: 'خودکارسازی فرآیندهای کسب‌وکار',
//     image: '/images/products/automation.jpg',
//     icon: 'Cpu',
//     gradient: 'from-rose-500 to-pink-500',
//     features: ['RPA', 'کاهش هزینه'],
//     tag: 'پرفروش'
//   },
//   {
//     id: 9,
//     name: 'تحلیل احساسات',
//     description: 'تحلیل نظرات و احساسات کاربران',
//     image: '/images/products/sentiment.jpg',
//     icon: 'BarChart',
//     gradient: 'from-amber-500 to-yellow-500',
//     features: ['Sentiment', 'Feedback']
//   }
// ]

// /* -------------------------------------------------------------------------- */
// /*                                   Icons                                    */
// /* -------------------------------------------------------------------------- */

// const ICONS: Record<string, any> = {
//   MessageSquare,
//   Sparkles,
//   Brain,
//   Eye,
//   Layers,
//   TrendingUp,
//   Cpu,
//   Search,
//   BarChart
// }

// /* -------------------------------------------------------------------------- */
// /*                                Main Section                                 */
// /* -------------------------------------------------------------------------- */

// export default function Products() {
//   return (
//     <section className="py-24 bg-black text-white">
//       <Container>

//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">
//             محصولات هوش مصنوعی
//           </h2>
//           <p className="text-gray-400 text-lg">
//             مجموعه‌ای از راه‌حل‌های هوشمند برای رشد سریع کسب‌وکار شما
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {PRODUCTS.map((product, index) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               priority={index < 3}
//             />
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-20">
//           <Link href="/products" prefetch>
//             <Button className="px-8 py-4 text-lg font-bold">
//               مشاهده همه محصولات
//             </Button>
//           </Link>
//         </div>

//       </Container>
//     </section>
//   )
// }

// /* -------------------------------------------------------------------------- */
// /*                                Product Card                                */
// /* -------------------------------------------------------------------------- */

// function ProductCard({
//   product,
//   priority
// }: {
//   product: Product
//   priority: boolean
// }) {
//   const Icon = useMemo(() => ICONS[product.icon] || Cpu, [product.icon])

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, ease: 'easeOut' }}
//       viewport={{ once: true }}
//       className="relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition"
//     >
//       {product.tag && (
//         <div className="absolute top-4 right-4 z-10 flex items-center gap-1 text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full">
//           <Star className="w-3 h-3" />
//           {product.tag}
//         </div>
//       )}

//       <div className="relative h-56">
//         <Image
//           src={product.image}
//           alt={product.name}
//           fill
//           priority={priority}
//           sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
//           className="object-cover"
//         />
//         <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-40`} />
//       </div>

//       <div className="p-6 space-y-4">
//         <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${product.gradient}`}>
//           <Icon className="w-6 h-6 text-white" />
//         </div>

//         <h3 className="text-xl font-bold">{product.name}</h3>

//         <p className="text-sm text-gray-400 line-clamp-2">
//           {product.description}
//         </p>

//         <div className="flex flex-wrap gap-2">
//           {product.features.map((f, i) => (
//             <span
//               key={i}
//               className="text-xs px-3 py-1 rounded-full bg-white/10"
//             >
//               {f}
//             </span>
//           ))}
//         </div>

//         <Link
//           href={`/products/${product.id}`}
//           className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400"
//         >
//           اطلاعات بیشتر
//           <ArrowRight className="w-4 h-4" />
//         </Link>
//       </div>
//     </motion.div>
//   )
// }
'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  MessageSquare,
  Sparkles,
  Brain,
  Eye,
  Layers,
  TrendingUp,
  Cpu,
  Search,
  BarChart,
  ArrowRight,
  Star
} from 'lucide-react'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

interface Product {
  id: number
  slug: string
  name: string
  description: string
  image: string
  icon: string
  gradient: string
  features: string[]
  tag?: string
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: 'smart-assistant',
    name: 'دستیار هوشمند',
    description: 'پاسخگویی خودکار و هوشمند به مشتریان با NLP پیشرفته',
    image: '/images/ai-assistant.png',
    icon: 'MessageSquare',
    gradient: 'from-blue-500 to-cyan-500',
    features: ['NLP', '۲۴/۷', 'یادگیری مداوم'],
    tag: 'محبوب'
  },
  {
    id: 2,
    slug: 'content-generator',
    name: 'تولید محتوای AI',
    description: 'تولید متن‌های بازاریابی و سئو شده با کیفیت بالا',
    image: '/images/AI-Content-Creation.jpg',
    icon: 'Sparkles',
    gradient: 'from-purple-500 to-pink-500',
    features: ['SEO', 'چندزبانه', 'خلاق']
  },
  {
    id: 3,
    slug: 'data-analyzer',
    name: 'تحلیل داده هوشمند',
    description: 'تبدیل داده‌های خام به بینش‌های تجاری ارزشمند',
    image: '/images/data-analysis.jpg',
    icon: 'Brain',
    gradient: 'from-indigo-500 to-blue-500',
    features: ['تحلیل', 'پیش‌بینی', 'گزارش']
  },
  {
    id: 4,
    slug: 'machine-vision',
    name: 'بینایی ماشین',
    description: 'تشخیص تصویر و ویدیو با دقت بالا',
    image: '/images/machine-vision.jpg',
    icon: 'Eye',
    gradient: 'from-green-500 to-emerald-500',
    features: ['چهره', 'اشیاء', 'ویدیو'],
    tag: 'جدید'
  },
  {
    id: 5,
    slug: 'speech-processing',
    name: 'پردازش گفتار',
    description: 'تبدیل گفتار به متن و بالعکس با کیفیت بالا',
    image: '/images/speech-processing.png',
    icon: 'Layers',
    gradient: 'from-orange-500 to-red-500',
    features: ['Speech‑to‑Text', 'Voice AI']
  },
  {
    id: 6,
    slug: 'market-prediction',
    name: 'پیش‌بینی بازار',
    description: 'تحلیل روند بازار و پیش‌بینی قیمت‌ها',
    image: '/images/market-prediction.jpg',
    icon: 'TrendingUp',
    gradient: 'from-teal-500 to-cyan-500',
    features: ['روند', 'ریسک']
  },
  {
    id: 7,
    slug: 'smart-search',
    name: 'جستجوی هوشمند',
    description: 'جستجوی معنایی پیشرفته در داده‌ها',
    image: '/images/smart-search.png',
    icon: 'Search',
    gradient: 'from-violet-500 to-purple-500',
    features: ['Semantic', 'AI']
  },
  {
    id: 8,
    slug: 'ai-automation',
    name: 'اتوماسیون AI',
    description: 'خودکارسازی فرآیندهای کسب‌وکار',
    image: '/images/ai-automation.jpg',
    icon: 'Cpu',
    gradient: 'from-rose-500 to-pink-500',
    features: ['RPA', 'کاهش هزینه'],
    tag: 'پرفروش'
  },
  {
    id: 9,
    slug: 'sentiment-analysis',
    name: 'تحلیل احساسات',
    description: 'تحلیل نظرات و احساسات کاربران',
    image: '/images/sentiment-analysis.jpg',
    icon: 'BarChart',
    gradient: 'from-amber-500 to-yellow-500',
    features: ['Sentiment', 'Feedback']
  }
]

const ICONS: Record<string, any> = {
  MessageSquare,
  Sparkles,
  Brain,
  Eye,
  Layers,
  TrendingUp,
  Cpu,
  Search,
  BarChart
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${w}" height="${h}" fill="#111111" />
  <rect width="${w}" height="${h}" fill="#1f1f1f" opacity="0.6" />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const shimmerDataUrl = `data:image/svg+xml;base64,${toBase64(shimmer(700, 400))}`

export default function Products() {
  return (
    <section className="py-24 bg-black text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">
            محصولات هوش مصنوعی
          </h2>
          <p className="text-gray-400 text-lg">
            مجموعه‌ای از راه‌حل‌های هوشمند برای رشد سریع کسب‌وکار شما
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < 3}
            />
          ))}
        </div>

        <div className="text-center mt-20">
          <Link href="/products" prefetch>
            <Button className="px-8 py-4 text-lg font-bold">
              مشاهده همه محصولات
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

function ProductCard({
  product,
  priority
}: {
  product: Product
  priority: boolean
}) {
  const Icon = useMemo(() => ICONS[product.icon] || Cpu, [product.icon])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition"
    >
      {product.tag && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full">
          <Star className="w-3 h-3" />
          {product.tag}
        </div>
      )}

      <div className="relative h-56">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          quality={75}
          placeholder="blur"
          blurDataURL={shimmerDataUrl}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-40`} />
      </div>

      <div className="p-6 space-y-4">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${product.gradient}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-xl font-bold">{product.name}</h3>

        <p className="text-sm text-gray-400 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {product.features.map((f, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-white/10"
            >
              {f}
            </span>
          ))}
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400"
        >
          اطلاعات بیشتر
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}