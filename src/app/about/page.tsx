import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark">
        <section className="pt-44 pb-28 md:pb-40">
          <div className="mx-auto max-w-4xl px-8">
            <span className="section-number flex items-center gap-3 mb-8">
              <span className="text-gold font-mono text-sm tracking-[0.2em]">01</span>
              <span className="h-px w-8 bg-gold/30" />
              <span className="text-cream/40 text-xs tracking-[0.2em] uppercase">About</span>
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] tracking-tight mb-12">
              The History of
              <br />
              <span className="text-gold">Phudro Goenpa</span>
            </h1>
            <div className="space-y-6 text-cream/50 leading-relaxed text-base md:text-lg max-w-3xl">
              <p>
                Phudro Goenpa is an ancient Bhutanese Buddhist monastery nestled
                on a high mountain ridge in the Paro Valley. Its dramatic
                location — perched atop rugged limestone cliffs surrounded by
                dense pine forests — makes it one of the most visually striking
                monastic sites in the Himalayas.
              </p>
              <p>
                The monastery&apos;s architecture is a testament to traditional
                Bhutanese craftsmanship, featuring white-washed stone walls,
                intricate red and gold wooden window frames, and a shining
                golden pinnacle that catches the first light of dawn. For
                centuries, it has served as a center for Buddhist study,
                meditation, and spiritual practice.
              </p>
              <p>
                Beyond its physical beauty, Phudro Goenpa holds a special place
                in Bhutanese folklore. Legends speak of a floating stupa, a
                sacred stone monolith, and miraculous events that have drawn
                pilgrims to this remote sanctuary for generations.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
