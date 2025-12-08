import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/smartAutomation/Hero";
import Intro from "@/components/sections/smartAutomation/intro";
import Values from "@/components/sections/smartAutomation/values";
export default function smartAutomationPage(){
    return(
         <main className="bg-black text-white min-h-screen overflow-x-hidden">
              <Navbar />
              <Hero />
              <Intro/>
              <Values/>
              <Footer />
            </main>
    )
}