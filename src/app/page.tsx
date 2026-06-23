import Header from "@/components/Header"
import Hero from "@/components/Hero"
import MonasterySection from "@/components/MonasterySection"
import StonePillarSection from "@/components/StonePillarSection"
import FlyingStupaSection from "@/components/FlyingStupaSection"
import StatsSection from "@/components/StatsSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MonasterySection />
      <StatsSection />
      <StonePillarSection />
      <FlyingStupaSection />
      <Footer />
    </>
  )
}
