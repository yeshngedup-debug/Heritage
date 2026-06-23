import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GalleryGrid from "@/components/GalleryGrid"

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark">
        <section className="pt-44 pb-28 md:pb-40">
          <div className="mx-auto max-w-7xl px-8 mb-16">
            <span className="section-number flex items-center gap-3 mb-8">
              <span className="text-gold font-mono text-sm tracking-[0.2em]">02</span>
              <span className="h-px w-8 bg-gold/30" />
              <span className="text-cream/40 text-xs tracking-[0.2em] uppercase">Gallery</span>
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] tracking-tight">
              Visual
              <br />
              <span className="text-gold">Journey</span>
            </h1>
          </div>
          <GalleryGrid />
        </section>
      </main>
      <Footer />
    </>
  )
}
