'use client'

import { motion } from "framer-motion"
import Container from "@/components/ui/Container"
import SectionTitle from "@/components/ui/SectionTitle"

const features = [
  {
    title: "یکپارچگی API",
    desc: "دریافت API Key و مصرف آسان مدل‌ها در پروژه‌های شما.",
    icon: "⚙️"
  },
  {
    title: "تحلیل و آمار دقیق",
    desc: "داشبورد هوشمند با آمار مصرف و بازخورد هوش مصنوعی.",
    icon: "📊"
  },
  {
    title: "امنیت و مقیاس‌پذیری",
    desc: "با معماری ابری، امنیت داده‌ها و مقیاس‌پذیری حرفه‌ای.",
    icon: "🛡️"
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-black text-white">
      <Container>
        <SectionTitle
          title="چرا WiserApp؟"
          subtitle="سه دلیل برای انتخاب این پلتفرم"
        />
        <div className="grid md:grid-cols-3 gap-12 mt-12">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-blue-600/20 transition-shadow"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
