'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Clock3, Newspaper } from 'lucide-react'
import type { BlogPost } from '@/data/blog/posts'

interface BlogPostContentProps {
  post: BlogPost
}

function ArticleBody({ content }: { content: string }) {
  const blocks = content
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)

  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.startsWith('### ')) {
          return (
            <h3 key={index} className="pt-3 text-xl font-bold leading-9 text-white md:text-2xl">
              {block.slice(4)}
            </h3>
          )
        }

        if (block.startsWith('## ')) {
          return (
            <h2 key={index} className="pt-6 text-2xl font-black leading-10 text-white md:text-3xl">
              {block.slice(3)}
            </h2>
          )
        }

        const lines = block.split('\n').map((line) => line.trim()).filter(Boolean)
        if (lines.length > 0 && lines.every((line) => line.startsWith('- '))) {
          return (
            <ul key={index} className="space-y-3 pr-5 text-base leading-8 text-gray-300 md:text-lg">
              {lines.map((line, lineIndex) => (
                <li key={`${index}-${lineIndex}`} className="list-disc marker:text-purple-400">
                  {line.slice(2)}
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p key={index} className="text-base leading-9 text-gray-300 md:text-lg md:leading-10">
            {lines.join(' ')}
          </p>
        )
      })}
    </div>
  )
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article dir="rtl" className="relative bg-black px-4 py-16 text-white sm:px-6 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />
      <div className="relative mx-auto max-w-4xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 md:mb-12"
        >
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-purple-300 transition hover:text-purple-200"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
            بازگشت به وبلاگ
          </Link>

          <div className="mb-5">
            <span className="inline-flex rounded-full border border-purple-400/20 bg-purple-500/15 px-4 py-2 text-sm text-purple-200">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl font-black leading-[1.6] text-white sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-400">
            <span>{post.author}</span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" aria-hidden="true" />
              {post.readTime} مطالعه
            </span>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 md:mb-12"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <p className="mb-10 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-lg leading-9 text-gray-200 md:p-7 md:text-xl">
            {post.excerpt}
          </p>

          <ArticleBody content={post.content} />

          <div className="mt-12 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-400">
            <Newspaper className="h-4 w-4 shrink-0 text-purple-300" aria-hidden="true" />
            <span>منبع خبر: {post.source}</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-gray-800 pt-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
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
