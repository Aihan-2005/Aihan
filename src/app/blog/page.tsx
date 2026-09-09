import type { Metadata } from 'next'

import BlogList from '@/components/blog/BlogList'
import Footer from '@/components/sections/Footer'
import { posts } from '@/data/blog/posts'

export const metadata: Metadata = {
  title: 'وبلاگ هوش مصنوعی | WiserTeam',

  description:
    'خبرها و تحلیل‌های به‌روز درباره هوش مصنوعی، مدل‌های زبانی، Agentها و اتوماسیون.',
}

export const dynamic = 'force-static'

export default function BlogPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <BlogList posts={posts} />
      <Footer />
    </div>
  )
}