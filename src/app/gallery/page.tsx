import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GalleryGrid from "@/components/GalleryGrid"

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <span className="text-gold text-sm tracking-[0.2em] uppercase">
              Gallery
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-dark leading-tight mt-4">
              Visual Journey
            </h1>
            <div className="w-16 h-0.5 bg-gold my-8" />
            <GalleryGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
