import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import AboutUs from "@/components/sections/AboutUs";

export default function AboutUsPage(){
  return (
      <main className="bg-black text-white min-h-screen overflow-x-hidden">
        <Navbar />
        <AboutUs />
        <Footer />
      </main>
    )
}