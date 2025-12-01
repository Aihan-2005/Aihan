import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import ContactPage from "@/components/sections/ContactUs";

export default function AboutUsPage(){
  return (
      <main className="bg-black text-white min-h-screen overflow-x-hidden">
        <Navbar />
        <ContactPage />
        <Footer />
      </main>
    )
}