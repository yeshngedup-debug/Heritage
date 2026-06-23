import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6">
            <span className="text-gold text-sm tracking-[0.2em] uppercase">
              About
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-dark leading-tight mt-4">
              The History of Phudro Goenpa
            </h1>
            <div className="w-16 h-0.5 bg-gold my-8" />
            <div className="space-y-6 text-dark/70 leading-relaxed">
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
