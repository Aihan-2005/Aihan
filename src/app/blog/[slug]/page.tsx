import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllSlugs } from '@/data/blog/posts'
import BlogPostContent from '@/components/blog/BlogPostContent'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/sections/Footer'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 675, alt: post.title }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />
      <BlogPostContent post={post} />
      <Footer />
    </main>
  )
}
