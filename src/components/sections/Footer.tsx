'use client';

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaFileAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { 
      name: "Docs", 
      href: "#", 
      icon: <FaFileAlt className="w-4 h-4" />,
      color: "hover:text-cyan-400"
    },
    { 
      name: "GitHub", 
      href: "https://github.com", 
      icon: <FaGithub className="w-4 h-4" />,
      color: "hover:text-purple-400"
    },
    { 
      name: "LinkedIn", 
      href: "#", 
      icon: <FaLinkedin className="w-4 h-4" />,
      color: "hover:text-blue-400"
    },
    { 
      name: "Twitter", 
      href: "#", 
      icon: <FaTwitter className="w-4 h-4" />,
      color: "hover:text-sky-400"
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-purple-500/5" />
      </div>
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 via-30% via-purple-500/30 to-transparent"
      />

      <Container>
        <div className="relative py-12 md:py-16">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-right"
            >
              <div className="flex flex-col items-center lg:items-start gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-white tracking-tight">
                    Wiser<span className="text-cyan-400">Team</span>
                  </span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                  />
                </div>

                <p className="text-gray-400 text-sm md:text-base">
                  © {currentYear} WiserTeam — ساخته‌شده با 
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block mx-1.5 text-red-400"
                  >
                    <FaHeart />
                  </motion.span>
                  توسط تیم ما
                </p>

                <p className="text-xs text-gray-500 mt-2 max-w-md">
                  ارائه راهکارهای نوآورانه در حوزه هوش مصنوعی و اتوماسیون
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-white font-semibold mb-4 text-lg">
                دسترسی سریع
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "صفحه اصلی", href: "/" },
                  { name: "خدمات", href: "/services" },
                  { name: "پروژه‌ها", href: "/projects" },
                  { name: "تماس با ما", href: "/contact" },
                ].map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: -5 }}
                    className="text-gray-400 hover:text-cyan-300 text-sm transition-colors duration-300 flex items-center gap-2 justify-center lg:justify-start"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-white font-semibold mb-4 text-lg">
                شبکه‌های اجتماعی
              </h3>
              <div className="flex justify-center lg:justify-start gap-4">
                {links.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-3 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 
                              border border-white/10 backdrop-blur-sm
                              ${link.color} transition-all duration-300
                              hover:border-white/20 hover:shadow-lg`}
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center gap-2">
                      {link.icon}
                      <span className="hidden md:inline text-sm">{link.name}</span>
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
          >
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="hover:text-gray-300 transition-colors duration-300"
              >
                حریم خصوصی
              </a>
              <a 
                href="#" 
                className="hover:text-gray-300 transition-colors duration-300"
              >
                شرایط استفاده
              </a>
              <a 
                href="#" 
                className="hover:text-gray-300 transition-colors duration-300"
              >
                نقشه سایت
              </a>
            </div>

          </motion.div>
        </div>
      </Container>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${10 + (i * 12)}%`,
              bottom: `${10 + (i * 5)}%`,
              background: i % 2 === 0 
                ? "linear-gradient(45deg, #22d3ee, #3b82f6)" 
                : "linear-gradient(45deg, #8b5cf6, #ec4899)"
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </footer>
  );
}