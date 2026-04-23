'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { BlogPost } from '@/data/blog/posts';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden
                 hover:border-purple-500/40 transition-all duration-500
                 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
    >
      {/* تصویر */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay گرادیان */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* دسته‌بندی */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 text-xs font-medium bg-purple-500/80 
                           backdrop-blur-sm text-white rounded-full border border-purple-400/30">
            {post.category}
          </span>
        </div>

        {/* Featured Badge */}
        {post.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium bg-yellow-500/80 
                             backdrop-blur-sm text-black rounded-full">
              ⭐ ویژه
            </span>
          </div>
        )}
      </div>

      {/* محتوا */}
      <div className="p-5 space-y-3">
        {/* متادیتا */}
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        {/* عنوان */}
        <h3 className="text-base font-bold text-white leading-relaxed
                       group-hover:text-purple-300 transition-colors duration-300
                       line-clamp-2">
          {post.title}
        </h3>

        {/* خلاصه */}
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>

        {/* تگ‌ها */}
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="flex items-center gap-1 px-2 py-0.5 text-xs
                         bg-white/5 border border-white/10 rounded-full text-gray-400"
            >
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>

        {/* لینک خواندن */}
        <Link
          href={`/blog/${post.slug}`}
          prefetch={true}
          className="flex items-center gap-2 text-sm text-purple-400 
                     hover:text-purple-300 transition-colors duration-200
                     group/link pt-1"
        >
          <span>مطالعه مقاله</span>
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 
                                group-hover/link:-translate-x-1" />
        </Link>
      </div>

      {/* Spotlight Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.06),transparent_70%)]
                      pointer-events-none" />
    </motion.article>
  );
}
