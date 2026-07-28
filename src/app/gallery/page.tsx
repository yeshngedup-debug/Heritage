import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GalleryGrid from "@/components/GalleryGrid"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the visual journey of Phudro Goenpa — sacred monastery, prayer flags, Himalayan views, and Paro Valley.",
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark overflow-hidden">
        <section className="pt-32 md:pt-44 pb-28 md:pb-40">
          <div className="mx-auto max-w-7xl px-5 md:px-8 mb-16">
            <span className="section-eyebrow flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold/40" />
              Gallery
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] tracking-tight mb-6">
              Visual
              <br />
              <span className="text-gold">Journey</span>
            </h1>
            <p className="text-cream/50 text-base md:text-lg max-w-xl leading-relaxed">
              Through the lens — moments captured from the monastery, the valley, and the sky
            </p>
          </div>
          <GalleryGrid />
        </section>
      </main>
      <Footer />
    </>
  )
}
