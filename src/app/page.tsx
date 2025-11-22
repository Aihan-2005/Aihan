
import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import Features from "@/components/sections/Features"
import Footer from "@/components/sections/Footer"
import FutureVision from "@/components/sections/FutureVision"
import Comments from "@/components/sections/Comments"


export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services/>
      {/* <Products/> */}
      <Features />
      {/* <Blog/> */}
      <FutureVision/>
      <Comments/>
      <Footer />
    </main>
  )
}

