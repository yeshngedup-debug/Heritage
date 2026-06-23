import FadeIn from "@/components/FadeIn"

export default function StonePillarSection() {
  return (
    <section className="bg-dark py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <FadeIn>
            <div className="relative order-2 md:order-1">
              <div className="aspect-[3/4] overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1580743880636-e4a6c07f5c22?q=80&w=1974&auto=format&fit=crop')",
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/20" />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-8 order-1 md:order-2">
              <span className="section-number flex items-center gap-3">
                <span className="text-gold font-mono text-sm tracking-[0.2em]">02</span>
                <span className="h-px w-8 bg-gold/30" />
                <span className="text-cream/40 text-xs tracking-[0.2em] uppercase">Ancient Artifact</span>
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] tracking-tight">
                The Stone
                <br />
                <span className="text-gold">Pillar Monolith</span>
              </h2>
              <div className="space-y-5 text-cream/50 leading-relaxed text-base md:text-lg">
                <p>
                  In the monastery courtyard stands a sacred six-foot tall stone
                  pillar monolith, its weathered gray surface etched with subtle
                  ancient carvings.
                </p>
                <p>
                  Flanked by fluttering prayer flags, this monolith has been a silent witness to centuries of devotion. Local tradition holds it was placed by enlightened masters who first established the monastery on this remote ridge.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
