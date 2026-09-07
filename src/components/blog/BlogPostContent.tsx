'use client'
import { motion } from 'framer-motion'
import { BlogPost } from '@/data/blog/posts'

interface BlogPostContentProps {
  post: BlogPost
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="relative py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* Category Badge */}
          <span className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full text-sm mb-6">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400">
            <span>توسط {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} مطالعه</span>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12 rounded-2xl overflow-hidden"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
             {post.excerpt}
          </p>

          {/* اینجا محتوای اصلی مقاله میاد - می‌تونی از MDX استفاده کنی */}
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              در این مقاله قصد داریم به بررسی جامع و کامل {post.title} بپردازیم...
            </p>
            {/* محتوای بیشتر... */}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-gray-800">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </article>
  )
}


