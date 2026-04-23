"use client"

import { motion } from "framer-motion"
import Container from "@/components/ui/Container"
import Link from "next/link"

const stats = [
  { value: "۱۰×", label: "سرعت یادگیری" },
  { value: "۷۰٪", label: "صرفه‌جویی در زمان" },
  { value: "۳+", label: "ابزار یکپارچه" },
]

const highlights = [
  {
    icon: "🎯",
    title: "یادگیری هدفمند",
    desc: "با AI شخصی‌سازی‌شده، فقط چیزی یاد بگیر که برات مهمه.",
  },
  {
    icon: "⚡",
    title: "رشد ۱۰ برابری",
    desc: "مدل‌های AI پیشرفته، یادگیری رو از هفته‌ها به ساعت‌ها کاهش می‌دن.",
  },
  {
    icon: "🔗",
    title: "همه چیز در یک جا",
    desc: "یک حساب کاربری، تمام ابزارهای AI که نیاز داری.",
  },
]

export default function FutureVision() {
  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-[#050510] via-[#060818] to-[#0b0c1a] text-white border-t border-blue-900/20">

      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,140,255,0.18)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.15)_0%,transparent_60%)] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTEgMWg1OHY1OEgxVjF6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+PC9nPjwvc3ZnPg==')] opacity-40 pointer-events-none" />

      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 border border-blue-400/30 text-blue-300"
          >
            آینده همین حالاست
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            با هوش مصنوعی،
            <br />
            <span className="text-white">
              نسخه بهتری از خودت بساز
            </span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            دیگه لازم نیست سال‌ها وقت بذاری تا مهارت کسب کنی.
            با قدرت مدل‌های AI، می‌تونی{" "}
            <span className="text-cyan-400 font-bold">
              ۱۰ برابر سریع‌تر
            </span>{" "}
            یاد بگیری، رشد کنی و به اهدافت برسی.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex justify-center gap-6 md:gap-14 mb-20 flex-wrap"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.5, type: "spring" }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm mt-1 font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl p-7 bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,255,0.12)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative z-10">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,150,255,0.15)]"
        >
          {/* Card glow bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black/60 to-indigo-900/40 backdrop-blur-xl" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          <div className="relative z-10 p-10 md:p-14 text-center">
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="text-5xl mb-5 inline-block"
            >
              ✨
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-300 via-white to-indigo-300 bg-clip-text text-transparent">
              همه ابزارهای AI که نیاز داری، در یک پلتفرم
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              با یک حساب کاربری در{" "}
              <span className="text-cyan-400 font-bold">WiserAI</span>، به تمام
              ابزارهای هوش مصنوعی که برای یادگیری، کار و رشد شخصی نیاز داری
              دسترسی داری.
            </p>

            <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
              آینده از آن کسانی‌ست که هوشمندانه‌تر زندگی می‌کنند.
              سوال اینه که تو کِی شروع می‌کنی؟
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
          className="flex justify-center mt-14"
        >
          <Link href="/auth/signup" prefetch={true}>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-10 py-4 rounded-full font-bold text-lg text-white
                bg-gradient-to-r from-cyan-500 to-blue-600
                shadow-[0_0_30px_rgba(0,180,255,0.35)]
                hover:shadow-[0_0_50px_rgba(0,180,255,0.55)]
                transition-shadow duration-300 group"
            >
              <span className="relative z-10">همین حالا شروع کن ←</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition duration-300"
                style={{ zIndex: 0 }}
              />
            </motion.button>
          </Link>
        </motion.div>

      </Container>

      {/* Bottom line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
    </section>
  )
}
