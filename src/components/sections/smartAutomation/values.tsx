"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    id: "01",
    title: "وقت‌شناسی و تحویل رأس موعد مقرر",
    
    gradient: "from-cyan-400 to-blue-400"
  },
  {
    id: "02",
    title: "مشتری‌مداری و رعایت اصول حرفه‌ای",
    
    gradient: "from-blue-400 to-purple-400"
  },
  {
    id: "03",
    title: "پایبندی به تعهدات و مفاد قرارداد",
    
    gradient: "from-purple-400 to-pink-400"
  },
  {
    id: "04",
    title: "ایجاد رابطه برد-برد با مشتریان",
   
    gradient: "from-cyan-400 to-purple-400"
  },
  {
    id: "05",
    title: "پشتیبانی مطمئن و پاسخگو",
    
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    id: "06",
    title: "ارائه مشاوره در جهت رشد مشتریان",
    
    gradient: "from-purple-400 to-blue-400"
  },
];

export default function Values() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

 
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.8,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const, 
        stiffness: 80,
        damping: 12,
        mass: 0.8
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants: Variants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-linear-to-b from-black via-gray-900/30 to-black py-32 px-4 md:px-8 overflow-hidden"
    >
    
      <div className="absolute inset-0">
      
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px]" />
        
       
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-linear-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
      
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-gray-400 mb-4 tracking-widest uppercase"
          >
            آنچه در همکاری با شما و اجرای پروژه‌ها
          </motion.div>
          
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              برای ما 
              <span className="block bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mt-2">
                مهم است
              </span>
            </h2>
            
         
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "180px" } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-linear-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mt-6"
            />
          </div>
        </motion.div>

       
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
                y: -8,
                scale: 1.02,
                transition: { type: "spring" as const, stiffness: 300 }
              }}
              className="group relative"
            >
  
              <div className="relative h-full bg-linear-to-br from-gray-900/60 to-black/60 
                            rounded-2xl border border-white/10 
                            backdrop-blur-sm overflow-hidden
                            transition-all duration-500
                            group-hover:border-white/20
                            group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                
                <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 
                              group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="absolute inset-0 rounded-2xl border border-transparent bg-linear-to-r from-cyan-500/20 to-purple-500/20 bg-clip-padding p-px">
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-500/30 to-purple-500/30 blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-700" />
                </div>

                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <motion.div
                      variants={floatingVariants}
                      animate="float"
                      className="relative"
                    >
                      <div className="absolute -inset-4 bg-linear-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      <span className={`relative text-5xl md:text-6xl font-black bg-linear-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {item.id}
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        delay: index * 0.1 + 0.3, 
                        type: "spring" as const 
                      }}
                      className="text-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      
                    </motion.div>
                  </div>

                  <p className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed 
                              transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </p>

                 
                </div>

                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-linear-to-r from-cyan-400/50 to-purple-400/50"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 25}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </div>

              {index < values.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-px bg-linear-to-r from-cyan-500/30 to-purple-500/30" />
              )}
            </motion.div>
          ))}
        </motion.div>

     
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="mt-32 h-px bg-linear-to-r from-transparent via-cyan-500/20 via-30% via-purple-500/20 to-transparent origin-left"
      />
    </section>
  );
}