"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import FloatingLines from "@/components/ui/FloatingLines";

const WORDS = ["هوشمندسازی", "تحول دیجیتال", "اتوماسیون", "بهینه‌سازی"];

type Particle = {
  left: string;
  top: string;
  duration: number;
  delay: number;
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % WORDS.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 6 + Math.random() * 4,
        delay: i * 0.4,
      })),
    []
  );

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      {mounted && (
        <div className="absolute inset-0">
          <FloatingLines
            enabledWaves={["middle"]}
            lineCount={[4]}
            animationSpeed={0.8}
            parallax={false}
          />
        </div>
      )}

      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="font-extrabold leading-tight">
            <span className="block text-cyan-400 text-4xl md:text-5xl mb-4">
              آینده دیجیتال را با
            </span>

            <motion.span
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="block text-5xl md:text-6xl bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
            >
              {WORDS[index]}
            </motion.span>

            <span className="block text-gray-100 text-3xl md:text-4xl mt-6">
              تجربه کنید
            </span>
          </h1>

          <p className="mt-8 text-blue-200/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/10">
            طراحی و توسعه سیستم‌های هوشمند متناسب با نیاز واقعی کسب‌و‌کار شما
          </p>
        </div>
      </div>

      {/* Particles */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
              style={{ left: p.left, top: p.top }}
              animate={{ y: [0, -60, 0], opacity: [0.2, 0.6, 0.2] }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
