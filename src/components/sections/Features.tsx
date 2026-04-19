// src/components/sections/Features.tsx
"use client"

import { motion } from "framer-motion"
import Container from "@/components/ui/Container"

const features = [
  {
    title: "هوش مصنوعی سفارشی برای کسب‌وکار شما",
    desc: "مدل‌های AI را متناسب با داده، فرآیند و اهداف کسب‌وکار شما آموزش می‌دهیم. نه یک راه‌حل عمومی — یک موتور هوشمند که دقیقاً برای رشد شما ساخته شده.",
    icon: "🧠",
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "خودکارسازی فرآیندها، کاهش هزینه",
    desc: "تکراری‌ترین و زمان‌برترین کارهای تیم شما را با AI اتوماتیک می‌کنیم. نتیجه: تیم کوچک‌تر، سرعت بالاتر و سود بیشتر.",
    icon: "⚡",
    color: "from-blue-400 to-indigo-500"
  },
  {
    title: "رشد پایدار با داده‌محوری",
    desc: "با تحلیل رفتار مشتریان، پیش‌بینی بازار و بینش‌های عمیق AI، تصمیم‌های استراتژیک را بر پایه داده بگیرید نه حدس.",
    icon: "📈",
    color: "from-indigo-400 to-purple-500"
  }
]

export default function Features() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-[#04040a] via-[#060819] to-[#0b0c1a] text-white border-t border-blue-900/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,115,255,0.15)_0%,transparent_80%)] pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 text-transparent bg-clip-text">
            چرا WiserAI؟
          </h2>
          <p className="text-gray-400 mt-5 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            ما زیرساخت هوش مصنوعی را طوری طراحی کرده‌ایم که کسب‌وکارها با کمترین پیچیدگی، بیشترین رشد را تجربه کنند.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                rotateY: (index - 1) * 3,
                boxShadow: "0 0 35px rgba(0,180,255,0.3)"
              }}
              className="relative group rounded-3xl p-[2px] bg-gradient-to-r from-gray-800/60 to-gray-900/60 hover:from-gray-700/70 hover:to-gray-800/70 transition"
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${f.color} opacity-0 group-hover:opacity-40 blur-2xl transition duration-500`}
              />

              <div className="relative z-10 rounded-3xl bg-black/70 backdrop-blur-xl border border-white/10 p-10 flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-5xl mb-6"
                >
                  {f.icon}
                </motion.div>
                <h3
                  className={`text-2xl font-bold mb-3 bg-gradient-to-r ${f.color} bg-clip-text text-transparent`}
                >
                  {f.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{f.desc}</p>

                <motion.div
                  className={`mt-6 inline-block text-sm font-semibold bg-gradient-to-r ${f.color} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.1 }}
                >
                  بیشتر بدانید →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
    </section>
  )
}
