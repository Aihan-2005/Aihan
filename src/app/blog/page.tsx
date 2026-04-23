// import Navbar from "@/components/layout/Navbar"
// import Footer from "@/components/sections/Footer"
// import Blog from "@/components/sections/Blog"

// export default function BlogPage() {
//   return (
//     <main className="bg-black text-white min-h-screen overflow-x-hidden">
//       <Navbar />
//       <Blog />
//       <Footer />
//     </main>
//   )
// }


import { Metadata } from 'next';
import { posts } from '@/data/blog/posts';
import BlogList from '@/components/blog/BlogList';

export const metadata: Metadata = {
  title: 'وبلاگ | نام سایت',
  description: 'آخرین مقالات تخصصی در حوزه توسعه وب',
};

// صفحه استاتیک - نیازی به revalidate نیست
export const dynamic = 'force-static';

export default function BlogPage() {
  return <BlogList posts={posts} />;
}
