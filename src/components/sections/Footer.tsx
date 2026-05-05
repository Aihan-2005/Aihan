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
  FaRocket,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

const PARTICLES = [
  { left: "5%",  top: "10%", type: 0, duration: 4.0, delay: 0.0 },
  { left: "15%", top: "20%", type: 1, duration: 4.5, delay: 0.3 },
  { left: "25%", top: "30%", type: 2, duration: 5.0, delay: 0.6 },
  { left: "35%", top: "40%", type: 0, duration: 4.2, delay: 0.9 },
  { left: "45%", top: "50%", type: 1, duration: 4.8, delay: 1.2 },
  { left: "55%", top: "60%", type: 2, duration: 5.2, delay: 1.5 },
  { left: "65%", top: "70%", type: 0, duration: 4.1, delay: 1.8 },
  { left: "75%", top: "80%", type: 1, duration: 4.6, delay: 2.1 },
  { left: "85%", top: "90%", type: 2, duration: 5.1, delay: 2.4 },
  { left: "95%", top: "15%", type: 0, duration: 4.3, delay: 2.7 },
] as const;

const PARTICLE_X = [8, -6, 4, -9, 7, -3, 10, -7, 5, -8] as const;

const PARTICLE_COLORS = [
  "linear-gradient(45deg, #22d3ee, #3b82f6)",
  "linear-gradient(45deg, #8b5cf6, #ec4899)",
  "linear-gradient(45deg, #10b981, #14b8a6)",
] as const;

const socialLinks = [
  {
    name: "Telegram",
    href: "https://t.me/Aihan-m",
    icon: <FaTelegram className="w-5 h-5" />,
    color: "hover:text-sky-400",
    gradient: "from-blue-400 to-sky-500",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/989916393684",
    icon: <FaWhatsapp className="w-5 h-5" />,
    color: "hover:text-green-400",
    gradient: "from-green-400 to-teal-400",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: <FaLinkedin className="w-5 h-5" />,
    color: "hover:text-blue-400",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "Instagram",
    href: "#",
    icon: <FaInstagram className="w-5 h-5" />,
    color: "hover:text-pink-400",
    gradient: "from-pink-500 to-purple-500",
  },
];

const contactInfo = [
  {
    icon: <FaPhone className="w-4 h-4" />,
    label: "تماس",
    value: "۰۹۹۱ ۶۳۹ ۳۶۸۴",
    href: "tel:+989916393684",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: <FaTelegram className="w-4 h-4" />,
    label: "تلگرام",
    value: "WiserTeam_Support@",
    href: "https://t.me/Aihan-m",
    gradient: "from-blue-400 to-sky-500",
  },
  {
    icon: <FaWhatsapp className="w-4 h-4" />,
    label: "واتساپ",
    value: "۰۹۹۱ ۶۳۹ ۳۶۸۴",
    href: "https://wa.me/989916393684",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: <FaEnvelope className="w-4 h-4" />,
    label: "ایمیل",
    value: "info@wiserteam.ir",
    href: "mailto:info@wiserteam.ir",
    gradient: "from-orange-400 to-red-500",
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

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Top Border Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"
      />

      <Container>
        <div className="relative py-12 md:py-16 lg:py-20">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">

            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 lg:col-span-4"
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
                      <FaRocket className="w-6 h-6 text-cyan-400" />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      Wiser<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">Innovation & Excellence</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  تیم Wiser متعهد به ارائه خدمات تخصصی نرم‌افزاری، هوش مصنوعی
                  و اتوماسیون کسب‌وکار با تمرکز بر کیفیت، امنیت و نتایج قابل اندازه‌گیری است.
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                      aria-label={link.name}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} rounded-lg blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300`} />
                      <div className={`relative p-3 rounded-lg bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10 backdrop-blur-sm ${link.color} transition-all duration-300 hover:border-white/20`}>
                        {link.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1 lg:col-span-3"
            >
              <h3 className="text-white font-bold mb-6 text-base md:text-lg flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full" />
                دسترسی سریع
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="group text-gray-400 hover:text-cyan-300 text-sm transition-all duration-300 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-1 lg:col-span-5"
            >
              <h3 className="text-white font-bold mb-6 text-base md:text-lg flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full" />
                ارتباط با ما
              </h3>
              
              {/* Contact Cards - 2x2 Grid on Mobile */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className="relative p-3 md:p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 backdrop-blur-sm group-hover:border-white/20 transition-all duration-300 h-full">
                      <div className="flex flex-col gap-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} bg-opacity-10 w-fit`}>
                          <span className="text-white">{item.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                          <p className="text-xs md:text-sm text-gray-300 font-medium break-words group-hover:text-white transition-colors leading-relaxed" dir="rlt">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Address Card - Full Width */}
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 bg-opacity-10 shrink-0">
                    <FaMapMarkerAlt className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-1">آدرس</p>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors" dir="rlt">
                      تهران، جردن
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

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6"
          >
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 text-center md:text-right">
              <p className="flex items-center gap-2 flex-wrap justify-center">
                <span>© {CURRENT_YEAR} WiserTeam</span>
                <span className="hidden sm:inline">—</span>
                <span className="flex items-center gap-1.5">
                  ساخته‌شده با
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block text-red-400"
                  >
                    <FaHeart className="w-3 h-3" />
                  </motion.span>
                  در ایران
                </span>
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <span className="hidden sm:inline text-gray-700">|</span>
                <a href="/privacy" className="hover:text-gray-300 transition-colors duration-300">حریم خصوصی</a>
                <span className="text-gray-700">•</span>
                <a href="/terms" className="hover:text-gray-300 transition-colors duration-300">شرایط استفاده</a>
              </div>
            </div>

            {/* Credits */}
            <div className="flex items-center gap-2 text-xs md:text-sm">
              <span className="text-gray-500">طراحی و توسعه:</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
                WiserTeam
              </span>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              background: PARTICLE_COLORS[particle.type],
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, PARTICLE_X[i], 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Bottom Glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-cyan-500/20 via-purple-500/10 to-transparent blur-3xl pointer-events-none"
      />
    </footer>
  );
}
