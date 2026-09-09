import type { Metadata } from 'next'
import { posts } from '@/data/blog/posts'
import BlogList from '@/components/blog/BlogList'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'وبلاگ هوش مصنوعی | WiserTeam',
  description: 'خبرها و تحلیل‌های به‌روز درباره هوش مصنوعی، مدل‌های زبانی، Agentها و اتوماسیون.',
}

export const dynamic = 'force-static'

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />
      <BlogList posts={posts} />
      <Footer />
    </main>
  )
}
