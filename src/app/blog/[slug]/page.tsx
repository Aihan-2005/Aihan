import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/data/blog/posts'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/sections/Footer'
import BlogPostContent from '@/components/blog/BlogPostContent'

// این برای Static Generation هست
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// این Page Component اصلی هست
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <BlogPostContent post={post} />
      <Footer />
    </main>
  )
}
