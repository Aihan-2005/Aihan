"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Particle = {
  left: string;
  top: string;
  duration: number;
  delay: number;
  gradient: string;
};

export default function Intro() {
  const particlesRef = useRef<Particle[] | null>(null);

  if (!particlesRef.current) {
    particlesRef.current = Array.from({ length: 10 }).map((_, i) => ({
      left: `${15 + i * 8}%`,
      top: `${(i * 17) % 100}%`,
      duration: 4 + (i % 3),
      delay: i * 0.2,
      gradient:
        i % 3 === 0
          ? "linear-gradient(45deg, #22d3ee, #3b82f6)"
          : i % 3 === 1
          ? "linear-gradient(45deg, #8b5cf6, #ec4899)"
          : "linear-gradient(45deg, #3b82f6, #8b5cf6)",
    }));
  }

  const particles = particlesRef.current;

  return (
    <section className="relative w-full bg-gradient-to-b from-black via-gray-900/20 to-black py-32 px-4 md:px-8 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Images */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative order-2 lg:order-1 opacity-0 translate-y-16"
        >
          <motion.div
            whileHover={{ rotateX: 4, rotateY: -4 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="relative [transform-style:preserve-3d]"
          >
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl opacity-60 animate-pulse" />

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/50 shadow-2xl">
              <Image
                src="/images/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scal.jpg"
                alt="AI Workspace"
                width={600}
                height={450}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-cyan-500/10" />
            </div>

            {/* Secondary Image */}
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3 },
                scale: { duration: 0.6, delay: 0.3 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -bottom-10 -right-10 opacity-0 scale-90"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 w-64 md:w-80 shadow-xl">
                <Image
                  src="/images/Artificial-intelligente-and-consultancy-1200x675.jpg"
                  alt="Automation Dashboard"
                  width={400}
                  height={280}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="order-1 lg:order-2 text-right space-y-8"
        >
          <motion.h2
            variants={{ visible: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold opacity-0 translate-y-6"
          >
            <span className="block text-white mb-4">هوشمندسازی،</span>
            <span className="block bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              فراتر از یک تغییر فنی
            </span>
          </motion.h2>

          <motion.p
            variants={{ visible: { opacity: 1, y: 0 } }}
            className="text-lg text-gray-300 leading-relaxed opacity-0 translate-y-6"
          >
            ما با ترکیب تخصص فنی، تجربه مدیریتی و راهکارهای مبتنی بر هوش مصنوعی،
            مسیر رشد دیجیتال شما را هموار می‌کنیم.
          </motion.p>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: p.left,
              top: p.top,
              background: p.gradient,
            }}
            animate={{ y: [0, -60, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
}
