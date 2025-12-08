"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });
  const isImagesInView = useInView(imagesRef, { once: true, amount: 0.3 });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const glitchVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    },
    glitch: {
      x: [0, -5, 5, -5, 5, 0],
      y: [0, 2, -2, 2, -2, 0],
      transition: {
        duration: 0.4,
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
      }
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative w-full bg-linear-to-b from-black via-gray-900/20 to-black py-32 px-4 md:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />
        
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-linear-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-linear-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            ref={imagesRef}
            style={{ y: y1 }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isImagesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative group"
            >
              <motion.div
                variants={floatingVariants}
                animate="float"
                className="relative z-10"
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-gray-900/50 to-black/50 backdrop-blur-sm shadow-2xl">
                  <Image
                    src="/images/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scal.jpg"
                    alt="AI Workspace"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 to-cyan-500/10 mix-blend-overlay" />
                  
                  <div className="absolute inset-0 rounded-3xl border border-transparent bg-linear-to-r from-purple-500/20 to-cyan-500/20 bg-clip-padding p-px">
                    <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-purple-500/30 to-cyan-500/30 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={isImagesInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                style={{ y: y2 }}
                className="absolute -bottom-8 -right-8 z-20"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-gray-900/80 to-black/80 backdrop-blur-sm shadow-2xl w-64 md:w-80">
                  <Image
                    src="/images/Artificial-intelligente-and-consultancy-1200x675.jpg"
                    alt="Automation Dashboard"
                    width={500}
                    height={350}
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  <div className="absolute -top-4 -right-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="relative w-16 h-16"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-purple-400 rounded-full blur-sm opacity-50" />
                      
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -left-6 w-32 h-32 border-2 border-dashed border-cyan-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 right-0 w-24 h-24 border-2 border-dashed border-purple-500/30 rounded-full"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            ref={textRef}
            className="order-1 lg:order-2 text-right space-y-8"
          >
            <motion.div
              variants={glitchVariants}
              initial="hidden"
              animate={isTextInView ? "visible" : "hidden"}
              whileHover="glitch"
              className="relative"
            >
              <div className="absolute -inset-4 bg-linear-to-r from-cyan-500/10 to-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
              
              <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white mb-4">
                  هوشمندسازی،
                </span>
                <span className="block bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  فراتر از یک تغییر فنی
                </span>
              </h2>
              
              <motion.div
                initial={{ width: 0 }}
                animate={isTextInView ? { width: "100%" } : {}}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-linear-to-r from-cyan-400 to-purple-400 rounded-full mt-6"
              />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isTextInView ? "visible" : "hidden"}
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
            >
              <motion.p 
                variants={itemVariants}
                className="relative group"
              >
                <span className="absolute -right-6 top-0 w-2 h-full bg-linear-to-b from-cyan-400/50 to-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                ما در طی بیش از <span className="text-cyan-300 font-semibold">۱۷ سال</span> تجربه در حوزه دیجیتال و تجارت الکترونیک، به این
                نتیجه رسیده‌ایم که ارتقای یک کسب‌و‌کار از حالت سنتی به الکترونیک و
                دیجیتال، نیازمند دانش مدیریتی، زیرساخت مناسب و پشتیبانی پایدار است.
              </motion.p>

              <motion.p 
                variants={itemVariants}
                className="relative group bg-linear-to-r from-white/5 to-transparent p-6 rounded-2xl border border-white/10 backdrop-blur-sm"
              >
                بهبود مستمر وب‌سایت، ارتقای تجربه کاربری و استفاده هوشمندانه از
                بازخورد مشتریان، بخشی از این مسیر است. آموزش نیز یکی از مهم‌ترین
                اجزای این فرآیند به شمار می‌رود.
              </motion.p>

              <motion.p 
                variants={itemVariants}
                className="relative group"
              >
                <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-linear-to-r from-purple-400 to-cyan-400 animate-pulse" />
                ما با ترکیب <span className="text-purple-300 font-semibold">تخصص فنی</span>، 
                <span className="text-blue-300 font-semibold mx-2">تجربه مدیریتی</span> و 
                <span className="text-cyan-300 font-semibold mx-2">راهکارهای مبتنی بر هوش مصنوعی</span>، 
                در کنار شما هستیم تا فرآیندهای سازمانی، فروش و ارتباط با
                مشتریان را به‌صورت هوشمند و شخصی‌سازی‌شده ارتقا دهیم.
              </motion.p>
            </motion.div>

          
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="mt-32 h-px bg-linear-to-r from-transparent via-cyan-500/30 via-30% via-purple-500/30 to-transparent"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? "linear-gradient(45deg, #22d3ee, #3b82f6)" 
                : i % 3 === 1 
                ? "linear-gradient(45deg, #8b5cf6, #ec4899)"
                : "linear-gradient(45deg, #3b82f6, #8b5cf6)"
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.section>
  );
}