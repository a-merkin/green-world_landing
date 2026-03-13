import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Products from "@/components/sections/Products";
import Advantages from "@/components/sections/Advantages";
import Gallery from "@/components/sections/Gallery";
import Partners from "@/components/sections/Partners";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-[160px] pb-[155px]">
        <Hero />
        <About />
        <Achievements />
        <Products />
        <Advantages />
        <Gallery />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
