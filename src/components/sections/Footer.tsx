'use client';

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { 
  FaHeart, 
  
  FaPhone,
  FaTelegram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRocket
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Telegram",
      href: "https://t.me/WiserTeam_Support",
      icon: <FaTelegram className="w-5 h-5" />,
      color: "hover:text-sky-400",
      gradient: "from-blue-400 to-sky-500"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/989123456789",
      icon: <FaWhatsapp className="w-5 h-5" />,
      color: "hover:text-green-400",
      gradient: "from-green-400 to-teal-400"
    },
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="w-4 h-4" />,
      label: "تماس",
      value: "+98 912 345 6789",
      href: "tel:+989123456789",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <FaTelegram className="w-4 h-4" />,
      label: "تلگرام",
      value: "@WiserTeam_Support",
      href: "https://t.me/WiserTeam_Support",
      gradient: "from-blue-400 to-sky-500"
    },
    {
      icon: <FaWhatsapp className="w-4 h-4" />,
      label: "واتساپ",
      value: "+98 912 345 6789",
      href: "https://wa.me/989123456789",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <FaEnvelope className="w-4 h-4" />,
      label: "ایمیل",
      value: "info@wiserteam.ir",
      href: "mailto:info@wiserteam.ir",
      gradient: "from-orange-400 to-red-500"
    },
  ];

  const quickLinks = [
    { name: "صفحه اصلی", href: "/" },
    { name: "خدمات", href: "/services" },
    { name: "پروژه‌ها", href: "/projects" },
    { name: "درباره ما", href: "/about" },
    { name: "وبلاگ", href: "/blog" },
    { name: "تماس با ما", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background with enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent via-50% to-purple-500/10" />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Animated top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-[2px] bg-gradient-to-r from-transparent via-cyan-500 via-50% to-transparent opacity-50"
      />

      <Container>
        <div className="relative py-16 md:py-20">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
            
            {/* Brand section - 4 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="flex flex-col gap-6">
                {/* Logo */}
                <div className="flex items-center gap-3 group">
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-gradient-to-br from-gray-900 to-black p-3 rounded-xl border border-white/10">
                      <FaRocket className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400" />
                    </div>
                  </motion.div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-white tracking-tight">
                      Wiser<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">Innovation & Excellence</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  تیم WiserTeam متعهد به ارائه خدمات تخصصی نرم‌افزاری، هوش مصنوعی
                  و اتوماسیون کسب‌وکار با تمرکز بر کیفیت، امنیت و نتایج قابل‌ اندازه‌گیری است.
                </p>

                {/* Social links */}
                <div className="flex gap-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} rounded-lg blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300`} />
                      <div className={`relative p-3 rounded-lg bg-gradient-to-br from-gray-900/80 to-black/80 
                                    border border-white/10 backdrop-blur-sm
                                    ${link.color} transition-all duration-300
                                    hover:border-white/20`}>
                        {link.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick links - 3 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <h3 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full" />
                دسترسی سریع
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="group text-gray-400 hover:text-cyan-300 text-sm transition-all duration-300 
                             flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 
                                  opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact info - 5 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <h3 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full" />
                ارتباط با ما
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 
                                  border border-white/10 backdrop-blur-sm
                                  group-hover:border-white/20 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} bg-opacity-10`}>
                          <span className="text-white">
                            {item.icon}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                          <p className="text-sm text-gray-300 font-medium truncate group-hover:text-white transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Address */}
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="mt-4 p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 
                         border border-white/10 backdrop-blur-sm
                         hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 bg-opacity-10">
                    <FaMapMarkerAlt className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">آدرس</p>
                    <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      تهران، خیابان آزادی، پلاک ۱۲۳، طبقه ۴
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
          />

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
              <p className="flex items-center gap-2">
                © {currentYear} WiserTeam — ساخته‌شده با 
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block text-red-400"
                >
                  <FaHeart className="w-3 h-3" />
                </motion.span>
                در ایران
              </p>
              
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline text-gray-700">|</span>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  حریم خصوصی
                </a>
                <span className="text-gray-700">•</span>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  شرایط استفاده
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">طراحی و توسعه:</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
                WiserTeam
              </span>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${5 + (i * 6)}%`,
              top: `${10 + (i * 5)}%`,
              background: i % 3 === 0 
                ? "linear-gradient(45deg, #22d3ee, #3b82f6)" 
                : i % 3 === 1
                ? "linear-gradient(45deg, #8b5cf6, #ec4899)"
                : "linear-gradient(45deg, #10b981, #14b8a6)"
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating glow effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 
                 bg-gradient-to-t from-cyan-500/20 via-purple-500/10 to-transparent 
                 blur-3xl pointer-events-none"
      />
    </footer>
  );
}
