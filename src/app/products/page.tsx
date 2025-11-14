import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/sections/Footer"
import Products from "@/components/sections/Products"

export default function ProductsPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Products />
      <Footer />
    </main>
  )
}
