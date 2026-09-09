import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import BlogPostContent from '@/components/blog/BlogPostContent'
import Footer from '@/components/sections/Footer'

import {
  getAllSlugs,
  getPostBySlug,
} from '@/data/blog/posts'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params

  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'مقاله یافت نشد | WiserTeam',
      description: 'مقاله مورد نظر وجود ندارد.',
    }
  }

  return {
    title: `${post.title} | WiserTeam`,

    description: post.excerpt,

    openGraph: {
      type: 'article',

      title: post.title,

      description: post.excerpt,

      images: [
        {
          url: post.image,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',

      title: post.title,

      description: post.excerpt,

      images: [post.image],
    },
  }
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params

  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <BlogPostContent post={post} />
      <Footer />
    </div>
  )
}

