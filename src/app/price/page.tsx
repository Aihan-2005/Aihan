import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/sections/Footer"
import Prices from "@/components/sections/Prices"

export default function ProductsPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Prices />
      <Footer />
    </main>
  )
}
