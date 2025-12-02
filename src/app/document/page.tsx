import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import Documents from "@/components/sections/Documents";

export default function AboutUsPage(){
  return (
      <main className="bg-black text-white min-h-screen overflow-x-hidden">
        <Navbar />
        <Documents/>
        <Footer />
      </main>
    )
}