"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingLines from "@/components/ui/FloatingLines";

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const words = ["هوشمندسازی", "تحول دیجیتال", "اتوماسیون", "بهینه‌سازی"];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(typingInterval);
  }, [words.length]);

  
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      <div className="absolute inset-0">
        <FloatingLines
          linesGradient={["#7C3AED", "#22D3EE", "#9e1dfa"]}
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[6, 5, 4]}
          lineDistance={[6, 10, 6]}
          animationSpeed={1.2}
          parallax={true}
          interactive={true}
          mixBlendMode="screen"
        />
      </div>

      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl"
        >
          
          <motion.div
            variants={itemVariants}
            className="inline-block mb-8"
          >
            
          </motion.div>

          
          <motion.h1
            variants={itemVariants}
            className="font-extrabold leading-tight tracking-tight mb-6"
          >
            <motion.span
              variants={floatVariants}
              animate="float"
              className="block text-cyan-400 text-4xl md:text-5xl lg:text-6xl mb-4 opacity-90"
            >
              آینده دیجیتال را با 
            </motion.span>
            
            <div className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isTyping ? 1 : 0.7,
                    y: 0,
                    scale: isTyping ? 1 : 0.95
                  }}
                  exit={{ opacity: 0, y: -20 }}
                  className="block text-5xl md:text-6xl lg:text-7xl bg-linear-to-r from-purple-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-linear-to-b from-cyan-400 to-purple-400 rounded-full"
              />
            </div>

            <motion.span
              variants={itemVariants}
              className="block text-[#f7f9fb] text-3xl md:text-4xl lg:text-5xl mt-6"
            >
              تجربه کنید
            </motion.span>
          </motion.h1>

        
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-blue-200/90 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10"
            >
              <span className="inline-block">
                طراحی، پیاده‌سازی و توسعه سیستم‌های هوشمند مبتنی بر AI
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="inline-block mt-2"
              >
                متناسب با نیاز واقعی کسب‌و‌کار شما
              </motion.span>
            </motion.p>
          </motion.div>



          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm text-blue-300/60">اسکرول کنید</span>
              <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-3 bg-linear-to-b from-cyan-400 to-purple-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-linear-to-r from-cyan-400/50 to-purple-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
      `}</style>
    </section>
  );
}