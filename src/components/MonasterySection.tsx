import FadeIn from "@/components/FadeIn"

export default function MonasterySection() {
  return (
    <section id="about" className="bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <FadeIn>
            <div className="space-y-8">
              <span className="section-number flex items-center gap-3">
                <span className="text-gold font-mono text-sm tracking-[0.2em]">01</span>
                <span className="h-px w-8 bg-gold/40" />
                <span className="text-stone text-xs tracking-[0.2em] uppercase">The Monastery</span>
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark leading-[1.1] tracking-tight">
                A Sanctuary
                <br />
                <span className="text-maroon">in the Clouds</span>
              </h2>
              <div className="space-y-5 text-dark/60 leading-relaxed text-base md:text-lg">
                <p>
                  High on a rugged limestone mountain ridge overlooking the Paro
                  Valley, Phudro Goenpa has stood for centuries as a beacon of
                  Bhutanese Buddhist heritage.
                </p>
                <p>
                  The monastery&apos;s white-washed stone walls, intricate red and
                  gold wooden window frames, and shining golden pinnacle rise
                  dramatically against the vast Himalayan sky — a testament to
                  the enduring spirit of Himalayan spirituality.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-bottom hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage:
                      "url('/images/sections/Cloud.jpg')",
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-gold/30" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
