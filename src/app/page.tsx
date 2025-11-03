import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
