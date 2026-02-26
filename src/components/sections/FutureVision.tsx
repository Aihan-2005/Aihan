"use client"

import { motion } from "framer-motion"
import Container from "@/components/ui/Container"

export default function FutureVision() {
  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-[#050510] via-[#060818] to-[#0b0c1a] text-white border-t border-blue-900/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,140,255,0.15)_0%,transparent_70%)] pointer-events-none" />

      <Container>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-snug">
            کار و زندگی خودتو با دستیار هوش مصنوعی ارتقا بده!
          </h2>

          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10"
          >
            شروع آینده همین حالاست.  
            با به‌کارگیری و تلفیق هوش مصنوعی در کار و زندگی، می‌تونی به استقبال آینده بری.  
            یادگیری هیچ وقت انقدر ساده نبوده — چون با قدرت مدل‌های هوش مصنوعی میشه
            <span className="text-cyan-400 font-semibold"> ۱۰ برابر سریع‌تر </span>
            یاد گرفت و رشد کرد.
          </motion.p>

          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed mb-10"
          >
            ارتقای دانش، مهارت و کیفیت زندگی با هوش مصنوعی یک فرصت استثنایی‌ست.  
     
          </motion.p>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10 shadow-[0_0_35px_rgba(0,150,255,0.15)]"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              همه چیز در یک جا ✨
            </h3>
            <p className="text-gray-300 leading-relaxed">
              با داشتن یک حساب کاربری در <span className="text-cyan-400 font-semibold mx-1.5">پلتفرم WiserAi</span>  
              تمام نیازهای شما به ابزارهای پایه‌ای هوش مصنوعی برآورده می‌شود.  
              آینده از آن کسانی‌ست که هوشمندانه‌تر زندگی می‌کنند.
            </p>
          </motion.div>
        </motion.div>

        {/* دکمه CTA پایین با Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex justify-center mt-12"
        >
          <button className="relative px-8 py-4 rounded-full font-semibold text-lg transition duration-300 
            bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-blue-500 hover:to-cyan-400 text-white 
            shadow-[0_0_25px_rgba(0,150,255,0.3)] hover:shadow-[0_0_35px_rgba(0,150,255,0.5)]">
            همین حالا شروع کن
          </button>
        </motion.div>
      </Container>

      {/* نور خطی پایین */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
    </section>
  )
}
