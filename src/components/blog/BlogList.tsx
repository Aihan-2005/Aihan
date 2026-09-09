'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import BlogCard from './BlogCard';
import { BlogPost } from '@/data/blog/posts';

interface Particle {
  id: number;
  left: string;
  top: string;
  width: string;
  height: string;
  duration: number;
  delay: number;
}

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('همه');
  const [particles, setParticles] = useState<Particle[] | null>(null);

  // ✅ مقداردهی ذرات فقط در کلاینت
  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${2 + Math.random() * 3}px`,
        height: `${2 + Math.random() * 3}px`,
        duration: 4 + Math.random() * 6,
        delay: Math.random() * 3,
      }))
    );
  }, []);

  // دسته‌بندی‌های یکتا
  const categories = ['همه', ...Array.from(new Set(posts.map(p => p.category)))];

  // فیلتر کردن
  const filtered = posts.filter(post => {
    const matchSearch =
      search === '' ||
      post.title.includes(search) ||
      post.excerpt.includes(search) ||
      post.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));

    const matchCategory =
      activeCategory === 'همه' || post.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div dir="rtl" className="relative min-h-screen bg-black">
      {/* پس‌زمینه */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />

        {/* ذرات - فقط در کلاینت */}
        {particles?.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-purple-400/20"
            style={{
              left: p.left,
              top: p.top,
              width: p.width,
              height: p.height,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* هدر */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white">
            وبلاگ{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              تخصصی
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            خبرها و تحلیل‌های به‌روز درباره مدل‌های هوش مصنوعی، Agentها، زیرساخت AI و کاربردهای واقعی آن‌ها
          </p>
        </motion.div>

        {/* جستجو و فیلتر */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 space-y-4"
        >
          {/* جستجو */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="جستجو در مقالات..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl
                         pl-4 pr-10 py-3 text-sm text-white placeholder-gray-500
                         focus:outline-none focus:border-purple-500/50 transition-colors"
              dir="rtl"
            />
          </div>

          {/* فیلتر دسته‌بندی */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                  ${activeCategory === cat
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* تعداد نتایج */}
        <div className="flex items-center gap-2 mb-6 text-sm text-gray-400">
          <Filter className="w-4 h-4" />
          <span>{filtered.length} مقاله یافت شد</span>
        </div>

        {/* گرید کارت‌ها */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-gray-500"
          >
            <p className="text-lg">مقاله‌ای با این مشخصات یافت نشد</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('همه'); }}
              className="mt-4 text-purple-400 hover:text-purple-300 text-sm"
            >
              پاک کردن فیلترها
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
