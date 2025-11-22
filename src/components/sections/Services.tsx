"use client"

import { motion } from "framer-motion"
import Container from "@/components/ui/Container"

export default function Services() {
  const services = [
    {
      title: "مدل‌های هوش مصنوعی",
      color: "from-cyan-400 to-blue-500",
      desc: "طراحی و پیاده‌سازی مدل‌های تخصصی هوش مصنوعی مانند بینایی ماشین، NLP و داده‌های ساختاریافته برای نیاز هر کسب‌وکار.",
    },
    {
      title: "توسعه نرم‌افزار سفارشی",
      color: "from-blue-400 to-indigo-500",
      desc: "از تحلیل نیاز تا استقرار کامل محصول — توسعه نرم‌افزارهای هوشمند، ایمن و مقیاس‌پذیر با جدیدترین فناوری‌ها.",
    },
    {
      title: "طراحی و توسعه وب اپلیکیشن ",
      color: "from-indigo-400 to-purple-500",
      desc: "طراحی وب‌سایت‌های مدرن و واکنش‌گرا برای برندها و شرکت‌هایی که می‌خواهند حضور دیجیتالی درخشان داشته باشند.",
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-[#050510] to-[#0b0c1a] text-white border-t border-blue-900/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.15)_0%,transparent_70%)] pointer-events-none" />

      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent"
          >
            محصولات و خدمات WiserAI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-gray-400 mt-5 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            ما ترکیبی از فناوری پیشرفته، طراحی حرفه‌ای و خلاقیت بی‌پایان ارائه می‌دهیم تا محصولات و خدمات
            شما هوشمندتر، زیباتر و سریع‌تر رشد کنند.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative rounded-3xl p-[2px] group bg-gradient-to-b from-gray-800/60 to-gray-900/60 hover:from-gray-700/70 hover:to-gray-800/70 transition"
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-30 blur-xl transition duration-500`}
              />

              <div className="relative z-10 rounded-3xl bg-black/70 backdrop-blur-xl border border-white/10 p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">{service.desc}</p>
                </div>

                <div className="mt-6">
                  <span
                    className={`inline-block text-sm font-semibold bg-gradient-to-r ${service.color} text-transparent bg-clip-text`}
                  >
                    بیشتر بدانید →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
