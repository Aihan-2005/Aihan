import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/sections/Footer"
import Blog from "@/components/sections/Blog"
import { getAllPosts } from "@/data/blog/posts"

export default function BlogPage() {
  const posts = getAllPosts()
  
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Blog posts={posts} />
      <Footer />
    </main>
  )
}
