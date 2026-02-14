"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useMemo } from "react";

const values = [
  {
    id: "01",
    title: "وقت‌شناسی و تحویل رأس موعد مقرر",
    gradient: "from-cyan-400 to-blue-400",
  },
  {
    id: "02",
    title: "مشتری‌مداری و رعایت اصول حرفه‌ای",
    gradient: "from-blue-400 to-purple-400",
  },
  {
    id: "03",
    title: "پایبندی به تعهدات و مفاد قرارداد",
    gradient: "from-purple-400 to-pink-400",
  },
  {
    id: "04",
    title: "ایجاد رابطه برد-برد با مشتریان",
    gradient: "from-cyan-400 to-purple-400",
  },
  {
    id: "05",
    title: "پشتیبانی مطمئن و پاسخگو",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    id: "06",
    title: "ارائه مشاوره در جهت رشد مشتریان",
    gradient: "from-purple-400 to-blue-400",
  },
];

export default function Values() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.15,
        },
      },
    }),
    []
  );

  const itemVariants: Variants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: 30,
        scale: 0.85,
        filter: "blur(8px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          type: "spring",
          stiffness: 90,
          damping: 14,
          mass: 0.8,
        },
      },
    }),
    []
  );

  const titleVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 25 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: "easeOut",
        },
      },
    }),
    []
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-gradient-to-b from-black via-gray-900/30 to-black py-32 px-4 md:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, 18, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -18, 0],
            y: [0, -14, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.15 }}
            className="text-sm md:text-base text-gray-400 mb-4 tracking-widest uppercase"
          >
            آنچه در همکاری با شما و اجرای پروژه‌ها
          </motion.div>

          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              برای ما
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mt-2">
                مهم است
              </span>
            </h2>

            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "180px" } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mt-6"
            />
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative"
            >
              <div
                className="relative h-full bg-gradient-to-br from-gray-900/60 to-black/60 
                            rounded-2xl border border-white/10 
                            backdrop-blur-sm overflow-hidden
                            transition-all duration-500
                            group-hover:border-white/20
                            group-hover:shadow-2xl group-hover:shadow-cyan-500/10"
              >
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 
                              group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-700" />

                <div className="relative p-8 flex flex-col h-full">
                  {/* Number & Title */}
                  <div className="flex justify-between items-start mb-6">
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: index * 0.08 + 0.3 }}
                      className={`relative text-5xl md:text-6xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                    >
                      {item.id}
                    </motion.span>
                  </div>

                  <p
                    className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed 
                              transition-colors duration-300 group-hover:text-white"
                  >
                    {item.title}
                  </p>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400/40 to-purple-400/40"
                      style={{
                        left: `${25 + i * 40}%`,
                        top: `${15 + i * 30}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.2, 0.7, 0.2],
                        scale: [1, 1.4, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 1.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 1, duration: 1.3 }}
        className="mt-32 h-px bg-gradient-to-r from-transparent via-cyan-500/20 via-30% via-purple-500/20 to-transparent origin-left"
      />
    </section>
  );
}
