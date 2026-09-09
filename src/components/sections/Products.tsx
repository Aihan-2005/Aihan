'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
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
} from 'lucide-react'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

interface ProductCardData {
  id: number
  slug: string
  name: string
  description: string
  image: string
  icon: keyof typeof ICONS
  gradient: string
  features: string[]
}

const ICONS = {
  MessageSquare,
  Sparkles,
  Brain,
  Eye,
  Layers,
  TrendingUp,
  Cpu,
  Search,
  BarChart,
} satisfies Record<string, LucideIcon>

const PRODUCTS: ProductCardData[] = [
  {
    id: 1,
    slug: 'smart-assistant',
    name: 'دستیار هوشمند',
    description:
      'دستیار مکالمه‌ای مبتنی بر مدل‌های زبانی که می‌تواند به دانش سازمان متصل شود، سوالات تکراری را پاسخ دهد و موارد حساس یا کم‌اطمینان را به اپراتور انسانی ارجاع دهد.',
    image: '/images/ai-assistant.png',
    icon: 'MessageSquare',
    gradient: 'from-blue-500 to-cyan-500',
    features: ['RAG', 'دانش سازمانی', 'Human-in-the-loop'],
  },
  {
    id: 2,
    slug: 'content-generator',
    name: 'تولید محتوای AI',
    description:
      'دستیار تولید و بازنویسی پیش‌نویس برای مقاله، شبکه اجتماعی، ایمیل و توضیح محصول؛ با امکان تعریف لحن برند و بازبینی انسانی قبل از انتشار.',
    image: '/images/AI-Content-Creation.jpg',
    icon: 'Sparkles',
    gradient: 'from-purple-500 to-pink-500',
    features: ['پیش‌نویس', 'لحن برند', 'راهنمای سئو'],
  },
  {
    id: 3,
    slug: 'data-analyzer',
    name: 'تحلیل داده هوشمند',
    description:
      'اتصال به فایل، دیتابیس و API برای پاک‌سازی، تحلیل و گزارش‌گیری؛ همراه با مدل‌سازی پیش‌بینی فقط زمانی که کیفیت و ساختار داده برای آن مناسب باشد.',
    image: '/images/data-analysis.jpg',
    icon: 'Brain',
    gradient: 'from-indigo-500 to-blue-500',
    features: ['Data Quality', 'داشبورد', 'مدل‌سازی'],
  },
  {
    id: 4,
    slug: 'machine-vision',
    name: 'بینایی ماشین',
    description:
      'تشخیص، طبقه‌بندی، OCR و تحلیل تصویر یا ویدیو با ارزیابی روی داده واقعی پروژه؛ عملکرد نهایی به کیفیت تصویر، شرایط محیط و دیتاست وابسته است.',
    image: '/images/machine-vision.jpg',
    icon: 'Eye',
    gradient: 'from-green-500 to-emerald-500',
    features: ['Object Detection', 'OCR', 'Video Analysis'],
  },
  {
    id: 5,
    slug: 'speech-processing',
    name: 'پردازش گفتار',
    description:
      'تبدیل گفتار به متن و متن به گفتار برای فایل یا جریان صوتی؛ با انتخاب موتور متناسب با زبان، لهجه، نویز محیط و الزامات حریم خصوصی.',
    image: '/images/speech-processing.png',
    icon: 'Layers',
    gradient: 'from-orange-500 to-red-500',
    features: ['Speech-to-Text', 'Text-to-Speech', 'Audio'],
  },
  {
    id: 6,
    slug: 'market-prediction',
    name: 'تحلیل و مدل‌سازی بازار',
    description:
      'تحلیل روند، سناریو و ریسک بازار با backtest زمانی و نمایش عدم‌قطعیت؛ بدون ادعای پیش‌بینی قطعی قیمت یا تضمین سود.',
    image: '/images/market-prediction.jpg',
    icon: 'TrendingUp',
    gradient: 'from-teal-500 to-cyan-500',
    features: ['Trend Analysis', 'Backtesting', 'Risk'],
  },
  {
    id: 7,
    slug: 'smart-search',
    name: 'جستجوی هوشمند',
    description:
      'جستجوی ترکیبی واژه‌ای و معنایی روی اسناد و داده‌ها، با امکان reranking، فیلتر سطح دسترسی و حفظ منبع برای پاسخ‌های قابل‌بررسی.',
    image: '/images/smart-search.png',
    icon: 'Search',
    gradient: 'from-violet-500 to-purple-500',
    features: ['Hybrid Search', 'Embeddings', 'Reranking'],
  },
  {
    id: 8,
    slug: 'ai-automation',
    name: 'اتوماسیون AI',
    description:
      'ترکیب workflowهای قطعی، API و AI برای استخراج و طبقه‌بندی داده؛ همراه با retry، audit log و تأیید انسانی برای عملیات حساس.',
    image: '/images/ai-automation.jpg',
    icon: 'Cpu',
    gradient: 'from-rose-500 to-pink-500',
    features: ['Workflow', 'API/Webhook', 'Audit Log'],
  },
  {
    id: 9,
    slug: 'sentiment-analysis',
    name: 'تحلیل احساسات',
    description:
      'دسته‌بندی احساسات، موضوع و intent در نظرات و تیکت‌ها، با threshold اطمینان و ارزیابی روی نمونه‌های واقعی همان دامنه.',
    image: '/images/sentiment-analysis.jpg',
    icon: 'BarChart',
    gradient: 'from-amber-500 to-yellow-500',
    features: ['Sentiment', 'Topic/Intent', 'Analytics'],
  },
]

export default function Products() {
  return (
    <section dir="rtl" className="bg-black py-24 text-white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            محصولات هوش مصنوعی
          </h2>
          <p className="text-lg leading-8 text-gray-400">
            راهکارهای AI برای مسائل مشخص کسب‌وکار؛ با تمرکز بر داده واقعی، ارزیابی قابل‌اندازه‌گیری و کنترل انسانی در نقاط حساس.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 3} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/products" prefetch>
            <Button className="px-8 py-4 text-lg font-bold">مشاهده همه محصولات</Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

function ProductCard({ product, priority }: { product: ProductCardData; priority: boolean }) {
  const Icon = ICONS[product.icon]

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-white/20"
    >
      <div className="relative h-56">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-40`} />
      </div>

      <div className="space-y-4 p-6">
        <div className={`inline-flex rounded-xl bg-gradient-to-br p-3 ${product.gradient}`}>
          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>

        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="line-clamp-3 text-sm leading-7 text-gray-400">{product.description}</p>

        <div className="flex flex-wrap gap-2">
          {product.features.map((feature) => (
            <span key={feature} className="rounded-full bg-white/10 px-3 py-1 text-xs">
              {feature}
            </span>
          ))}
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
        >
          اطلاعات بیشتر
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  )
}
