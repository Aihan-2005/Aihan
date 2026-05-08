'use client'

import { motion } from 'framer-motion'
import { 
  Check, 
  Star, 
  Zap,
  Clock,
  Brain,
  Languages,
  Sparkles,
  TrendingUp,
  BarChart,
  Layers
} from 'lucide-react'
import Link from 'next/link'
import type { Product } from '@/types/product'

// map icon strings to actual Lucide components
const iconMap: Record<string, any> = {
  MessageSquare: Zap,
  Clock: Clock,
  Brain: Brain,
  Languages: Languages,
  Sparkles: Sparkles,
  Zap: Zap,
  TrendingUp: TrendingUp,
  BarChart: BarChart,
  Layers: Layers,
}

interface ProductDetailClientProps {
  product: Product
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black pt-20">
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
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

          {/* Tag */}
          {product.tag && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-4"
            >
              <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${product.gradient} text-white`}>
                {product.tag}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
              {product.name}
            </h1>
            <p className="text-2xl text-gray-300 mb-4">{product.tagline}</p>
            <p className="text-lg text-gray-400 max-w-3xl">{product.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Long Description & Stats */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">درباره {product.name}</h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {product.longDescription}
              </p>
            </div>
            
            {Object.keys(product.stats).length > 0 && (
              <div className="bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50">
                <h3 className="text-lg font-bold mb-4 text-center">آمار کلیدی</h3>
                <div className="space-y-4">
                  {product.stats.accuracy && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">{product.stats.accuracy}</div>
                      <div className="text-sm text-gray-400">دقت پاسخ‌دهی</div>
                    </div>
                  )}
                  {product.stats.speed && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">{product.stats.speed}</div>
                      <div className="text-sm text-gray-400">زمان پاسخ</div>
                    </div>
                  )}
                  {product.stats.clients && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">{product.stats.clients}</div>
                      <div className="text-sm text-gray-400">مشتری فعال</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      {product.features.length > 0 && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">ویژگی‌های کلیدی</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.features.map((feature, idx) => {
                const Icon = iconMap[feature.icon] || Zap
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Benefits & Use Cases */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {product.benefits.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">مزایای استفاده از {product.name}</h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {product.useCases.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">مناسب برای</h2>
                <ul className="space-y-3">
                  {product.useCases.map((useCase, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{useCase}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {product.pricing.length > 0 && (
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
                    pkg.recommended 
                      ? `border-blue-500 ring-2 ring-blue-500/20` 
                      : 'border-gray-700/50'
                  }`}
                >
                  {pkg.recommended && (
                    <div className="absolute -top-4 right-1/2 translate-x-1/2">
                      <span className={`bg-gradient-to-r ${product.gradient} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                        پیشنهادی
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{pkg.plan}</h3>
                  <div className={`text-3xl font-bold mb-6 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                    {pkg.price}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-xl font-semibold transition ${
                        pkg.recommended
                          ? `bg-gradient-to-r ${product.gradient} hover:shadow-lg`
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                    >
                      خرید و اطلاعات بیشتر
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies */}
      {product.technologies.length > 0 && (
        <section className="py-20 px-4 bg-gray-900/30">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">تکنولوژی‌های استفاده شده</h2>
            <p className="text-gray-400 mb-8">ساخته شده با مدرن‌ترین ابزارهای دنیا</p>
            <div className="flex flex-wrap justify-center gap-3">
              {product.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-2 bg-gradient-to-r ${product.gradient} bg-opacity-10 rounded-full text-sm font-medium text-white border border-white/20`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {product.faqs.length > 0 && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">سوالات متداول</h2>
            <div className="space-y-4">
              {product.faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50"
                >
                  <h3 className="text-lg font-bold mb-2 text-blue-400">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-r ${product.gradient}/20 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30`}
          >
            <h2 className="text-3xl font-bold mb-4">آماده شروع هستید؟</h2>
            <p className="text-gray-300 mb-8">همین حالا با ما تماس بگیرید و مشاوره رایگان دریافت کنید</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 bg-gradient-to-r ${product.gradient} rounded-xl font-semibold hover:shadow-2xl transition`}
              >
                دریافت مشاوره رایگان
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}