import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Portfolio from "@/sections/Portfolio";
import Services from "@/sections/Services";
import Stack from "@/sections/Stack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Stack />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
