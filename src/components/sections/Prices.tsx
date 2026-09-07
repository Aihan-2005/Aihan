'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Brain, 
  Sparkles, 
  Rocket, 
  Users, 
  TrendingUp,
  Shield,
  Cpu,
  Code,
  Zap,
  Lock,
  Globe,
  BarChart3,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Mic,
  Video,
  MessageSquare,
  FileText,
  Search,
  Target
} from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null)
  const [showContactForm, setShowContactForm] = useState(false)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section - تاکید روی Custom AI */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative pt-32 pb-20 px-6"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm mb-8"
          >
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium">ساخت و توسعه AI اختصاصی</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            قیمت‌گذاری برای{' '}
            <span className="bg-gradient-to-l from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              هوش مصنوعی شما
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            ما API نمیفروشیم. ما با دانش خود هوش مصنوعی اختصاصی برای کسب‌وکار شما می‌سازیم.
            <br />
            <span className="text-purple-400 font-medium">هر پروژه، یک قیمت منحصربه‌فرد.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => setShowContactForm(true)}
              className="group px-8 py-4 bg-gradient-to-l from-purple-600 to-blue-600 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-purple-500/25 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              دریافت مشاوره رایگان
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link href="#solutions">
              <button className="px-8 py-4 border-2 border-white/20 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                مشاهده راه‌حل‌ها
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* چرا ما متفاوتیم */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              چرا ما <span className="text-purple-400">متفاوتیم</span>؟
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              فراتر از API، فراتر از قالب‌های آماده
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'توسعه اختصاصی',
                description: 'مدل‌های AI طراحی شده خاص برای داده و نیاز شما',
                gradient: 'from-purple-600 to-blue-600'
              },
              {
                icon: Cpu,
                title: 'Fine-Tuning حرفه‌ای',
                description: 'آموزش مدل با داده‌های شما برای دقت بالاتر',
                gradient: 'from-blue-600 to-cyan-600'
              },
              {
                icon: Shield,
                title: 'داده شما، سرور شما',
                description: 'استقرار کامل روی زیرساخت شما - 100% امن',
                gradient: 'from-cyan-600 to-teal-600'
              },
              {
                icon: Zap,
                title: 'بهینه‌سازی عملکرد',
                description: 'کاهش هزینه تا 70% نسبت به APIهای عمومی',
                gradient: 'from-orange-600 to-red-600'
              },
              {
                icon: Code,
                title: 'یکپارچه‌سازی کامل',
                description: 'ادغام کامل با سیستم‌های موجود شما',
                gradient: 'from-pink-600 to-purple-600'
              },
              {
                icon: Users,
                title: 'پشتیبانی اختصاصی',
                description: 'تیم توسعه در کنار شما از ایده تا اجرا',
                gradient: 'from-purple-600 to-pink-600'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl from-purple-500/20 to-blue-500/20" />
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* راه‌حل‌ها بر اساس صنعت */}
      <section id="solutions" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              راه‌حل‌های <span className="text-blue-400">صنعت‌محور</span>
            </h2>
            <p className="text-gray-400 text-lg">
              هر صنعت نیازمند راه‌حل منحصربه‌فرد است
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 'ecommerce',
                icon: Target,
                title: 'فروشگاه‌های آنلاین',
                features: ['چت‌بات فروش هوشمند', 'پیشنهاددهنده محصول', 'تحلیل رفتار مشتری'],
                color: 'blue'
              },
              {
                id: 'healthcare',
                icon: Brain,
                title: 'سلامت و پزشکی',
                features: ['تشخیص بیماری از تصویر', 'منشی هوشمند', 'تحلیل پرونده‌های پزشکی'],
                color: 'green'
              },
              {
                id: 'education',
                icon: FileText,
                title: 'آموزش',
                features: ['معلم مجازی شخصی', 'تصحیح خودکار', 'تولید محتوای آموزشی'],
                color: 'purple'
              },
              {
                id: 'finance',
                icon: BarChart3,
                title: 'مالی و بانکی',
                features: ['تشخیص تقلب', 'مشاور مالی AI', 'تحلیل ریسک خودکار'],
                color: 'orange'
              },
              {
                id: 'media',
                icon: Video,
                title: 'رسانه و سرگرمی',
                features: ['تولید محتوای ویدیویی', 'زیرنویس خودکار', 'تحلیل احساسات'],
                color: 'pink'
              },
              {
                id: 'support',
                icon: MessageSquare,
                title: 'پشتیبانی مشتری',
                features: ['پاسخگوی 24/7', 'تشخیص مشکل خودکار', 'یادگیری از تاریخچه'],
                color: 'cyan'
              }
            ].map((solution, i) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                index={i}
                isActive={activeIndustry === solution.id}
                onActivate={() => setActiveIndustry(solution.id)}
                onContact={() => setShowContactForm(true)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* فرآیند همکاری */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              فرآیند <span className="text-purple-400">همکاری</span>
            </h2>
            <p className="text-gray-400 text-lg">
              از ایده تا اجرای کامل، در کنار شما هستیم
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'مشاوره رایگان',
                description: 'تحلیل نیاز و ارائه راه‌حل مناسب',
                icon: Phone
              },
              {
                step: '02',
                title: 'طراحی و برنامه‌ریزی',
                description: 'معماری سیستم و تخمین زمان/هزینه',
                icon: FileText
              },
              {
                step: '03',
                title: 'توسعه و آموزش',
                description: 'ساخت و Fine-tuning مدل AI',
                icon: Code
              },
              {
                step: '04',
                title: 'استقرار و پشتیبانی',
                description: 'راه‌اندازی و پشتیبانی مادام‌العمر',
                icon: Rocket
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                {/* خط اتصال */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-12 right-0 w-full h-0.5 bg-gradient-to-l from-purple-500/50 to-transparent" />
                )}

                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-purple-500/50 transition-all">
                  <div className="text-5xl font-bold text-purple-500/20 mb-4">{item.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* چرا باید تماس بگیرید */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-pink-600/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  چرا قیمت مشخص نیست؟
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                  چون هر پروژه AI منحصربه‌فرد است. حجم داده، پیچیدگی مدل، نیاز به استقرار،
                  و سطح سفارشی‌سازی همه در قیمت نهایی تاثیر دارند.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: BarChart3, title: 'حجم پروژه', desc: 'از MVP تا سیستم سازمانی' },
                  { icon: Cpu, title: 'پیچیدگی مدل', desc: 'از ChatBot ساده تا Vision AI' },
                  { icon: Globe, title: 'زیرساخت', desc: 'Cloud یا On-Premise' }
                ].map((item, i) => (
                  <div key={i} className="text-center p-6 bg-white/5 rounded-xl">
                    <item.icon className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => setShowContactForm(true)}
                  className="group px-10 py-5 bg-gradient-to-l from-purple-600 to-blue-600 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-purple-500/30 inline-flex items-center gap-3"
                >
                  <Calendar className="w-6 h-6" />
                  رزرو جلسه مشاوره رایگان
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-sm text-gray-400 mt-4">
                  ⏱️ پاسخگویی در کمتر از 2 ساعت کاری
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* تضمین‌ها */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, title: 'تضمین کیفیت', desc: 'یا پول شما برمیگرده' },
              { icon: Shield, title: 'امنیت 100%', desc: 'داده‌ها فقط مال شماست' },
              { icon: Lock, title: 'محرمانگی کامل', desc: 'NDA برای همه پروژه‌ها' },
              { icon: Users, title: 'پشتیبانی مادام‌العمر', desc: 'حتی بعد از تحویل' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
              >
                <item.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactModal onClose={() => setShowContactForm(false)} />
      )}
    </div>
  )
}

/* ─────────────────────────────
   Solution Card Component
────────────────────────────── */
interface SolutionCardProps {
  solution: any
  index: number
  isActive: boolean
  onActivate: () => void
  onContact: () => void
}

function SolutionCard({ solution, index, isActive, onActivate, onContact }: SolutionCardProps) {
  const colorMap: any = {
    blue: 'from-blue-600 to-cyan-600',
    green: 'from-green-600 to-emerald-600',
    purple: 'from-purple-600 to-pink-600',
    orange: 'from-orange-600 to-red-600',
    pink: 'from-pink-600 to-rose-600',
    cyan: 'from-cyan-600 to-blue-600'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onActivate}
    >
      <div className={`relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border transition-all duration-300 overflow-hidden ${
        isActive ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' : 'border-white/10 hover:border-white/20'
      }`}>
        {/* Gradient Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[solution.color]} opacity-0 group-hover:opacity-10 transition-opacity`} />

        <div className="relative p-8">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorMap[solution.color]} flex items-center justify-center mb-6`}>
            <solution.icon className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>

          <div className="space-y-3 mb-6">
            {solution.features.map((feature: string, i: number) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onContact()
            }}
            className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
              isActive
                ? `bg-gradient-to-l ${colorMap[solution.color]} text-white`
                : 'bg-white/10 hover:bg-white/20 border border-white/20'
            }`}
          >
            دریافت مشاوره
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────
   Contact Modal Component
────────────────────────────── */
function ContactModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: ارسال به API
    console.log('Form submitted:', formData)
    alert('درخواست شما ثبت شد! تیم ما به زودی با شما تماس خواهند گرفت.')
    onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">درخواست مشاوره</h2>
            <p className="text-gray-400">تیم ما ظرف 2 ساعت با شما تماس می‌گیرند</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">نام و نام خانوادگی *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none transition-all"
                placeholder="علی احمدی"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">ایمیل *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none transition-all"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">شماره تماس *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none direction-ltr text-right transition-all"
                placeholder="09123456789"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">شرکت/سازمان</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none transition-all"
                placeholder="نام شرکت"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">صنعت/حوزه کاری</label>
            <select
              value={formData.industry}
              onChange={(e) => setFormData({...formData, industry: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none transition-all"
            >
              <option value="">انتخاب کنید</option>
              <option value="ecommerce">فروشگاه آنلاین</option>
              <option value="healthcare">سلامت و پزشکی</option>
              <option value="education">آموزش</option>
              <option value="finance">مالی و بانکی</option>
              <option value="media">رسانه</option>
              <option value="support">پشتیبانی</option>
              <option value="other">سایر</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">توضیحات پروژه</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none transition-all resize-none"
              placeholder="لطفا نیاز خود را به طور خلاصه توضیح دهید..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-l from-purple-600 to-blue-600 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            ارسال درخواست
          </button>

          <p className="text-xs text-gray-500 text-center">
          با ارسال فرم، شما با سیاست حفظ حریم خصوصی موافقت می‌کنید
         </p>
        </form>
      </motion.div>
    </motion.div>
  )
}
