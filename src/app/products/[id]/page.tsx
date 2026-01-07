'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Check, 
  Star, 
  Zap,
  Shield,
  Rocket 
} from 'lucide-react'
import Link from 'next/link'

// فعلاً داده‌ها رو اینجا می‌ذاریم (بعداً از data/products.ts می‌خونیم)
const productsData = {
  'smart-assistant': {
    id: 1,
    name: 'دستیار هوشمند',
    tagline: 'دستیار AI که هرگز خسته نمی‌شود',
    description: 'دستیار هوشمند مبتنی بر AI که می‌تواند به سوالات پیچیده پاسخ دهد و ۲۴/۷ در خدمت مشتریان شما باشد.',
    features: [
      { icon: Zap, title: 'پاسخگویی فوری', desc: 'پاسخ در کمتر از ۲ ثانیه' },
      { icon: Shield, title: 'امن و قابل اعتماد', desc: 'رمزنگاری سطح بانکی' },
      { icon: Rocket, title: 'مقیاس‌پذیر', desc: 'هزاران درخواست همزمان' },
    ],
    pricing: [
      {
        plan: 'استارتاپی',
        price: '۲,۵۰۰,۰۰۰',
        features: ['۱۰۰۰ مکالمه/ماه', 'پشتیبانی ایمیل', 'یک کانال']
      },
      {
        plan: 'حرفه‌ای',
        price: '۵,۰۰۰,۰۰۰',
        popular: true,
        features: ['نامحدود', 'پشتیبانی ۲۴/۷', 'چند کانال', 'API']
      },
      {
        plan: 'سازمانی',
        price: 'تماس',
        features: ['همه امکانات', 'سفارشی‌سازی', 'سرور اختصاصی']
      }
    ]
  },
  'content-generator': {
    id: 2,
    name: 'تولید محتوا',
    tagline: 'محتوای خلاقانه در چند ثانیه',
    description: 'سیستم تولید محتوای هوشمند برای شبکه‌های اجتماعی و وبلاگ',
    features: [
      { icon: Zap, title: 'تولید سریع', desc: 'محتوا در ۳۰ ثانیه' },
      { icon: Star, title: 'خلاقیت بالا', desc: 'محتوای یونیک و جذاب' },
      { icon: Rocket, title: 'چند زبانه', desc: 'فارسی و انگلیسی' },
    ],
    pricing: [
      {
        plan: 'پایه',
        price: '۱,۵۰۰,۰۰۰',
        features: ['۱۰۰ محتوا/ماه', 'فارسی', 'تمپلیت‌های آماده']
      },
      {
        plan: 'پیشرفته',
        price: '۳,۰۰۰,۰۰۰',
        popular: true,
        features: ['۵۰۰ محتوا/ماه', 'فارسی و انگلیسی', 'تمپلیت سفارشی']
      }
    ]
  }
}

type ProductSlug = keyof typeof productsData

export default function ProductDetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const product = productsData[params.id as ProductSlug]

  // اگه محصول پیدا نشد، صفحه ۴۰۴ نشون بده
  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-gray-400 mb-8"
          >
            <Link href="/" className="hover:text-white transition">خانه</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition">محصولات</Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {product.name}
            </h1>
            <p className="text-2xl text-gray-300 mb-4">{product.tagline}</p>
            <p className="text-lg text-gray-400 max-w-3xl">{product.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">ویژگی‌های کلیدی</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {product.features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">پکیج‌های قیمتی</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {product.pricing.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border ${
                  pkg.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-gray-700/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 right-1/2 translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      محبوب‌ترین
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{pkg.plan}</h3>
                <div className="text-4xl font-bold mb-6 text-blue-400">
                  {pkg.price}
                  {pkg.price !== 'تماس' && <span className="text-lg text-gray-400"> تومان</span>}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-xl font-semibold transition ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    انتخاب پکیج
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30"
          >
            <h2 className="text-3xl font-bold mb-4">سوالی دارید؟</h2>
            <p className="text-gray-300 mb-8">تیم ما آماده پاسخگویی به شماست</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition"
              >
                تماس با ما
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
