import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/sections/Footer"
import Blog from "@/components/sections/Blog"

export default function BlogPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Blog />
      <Footer />
    </main>
  )
}
