import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FadeIn from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the history of Phudro Goenpa, an ancient Bhutanese Buddhist monastery in the Paro Valley.",
}

const timeline = [
  {
    era: "8th Century",
    title: "Sacred Origins",
    description:
      "According to local tradition, the site was first blessed by Guru Rinpoche (Padmasambhava) during his historic visit to Bhutan. Caves on the ridge were used by early meditators seeking solitude in the Himalayan wilderness.",
  },
  {
    era: "13th Century",
    title: "The Monastery Rises",
    description:
      "The first structures of Phudro Goenpa were built by devoted monks who recognized the spiritual potency of the limestone ridge. Simple meditation huts gradually gave way to a proper monastic complex.",
  },
  {
    era: "17th Century",
    title: "Expansion & Fortification",
    description:
      "Under the patronage of the Zhabdrung Ngawang Namgyal, the monastery was expanded and fortified. The distinctive white-washed stone walls, intricate wooden window frames, and golden pinnacle date from this period.",
  },
  {
    era: "20th Century",
    title: "Restoration & Renewal",
    description:
      "A comprehensive restoration effort preserved the monastery's ancient structures while ensuring their stability for future generations. Traditional techniques and materials were used to maintain authenticity.",
  },
  {
    era: "Present Day",
    title: "A Living Heritage",
    description:
      "Today, Phudro Goenpa remains an active monastery, home to a small community of monks who maintain the daily rituals and ceremonies. It stands as a living monument to Bhutanese Buddhist heritage, welcoming pilgrims and visitors from around the world.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark overflow-hidden">
        <section className="pt-32 md:pt-44 pb-28 md:pb-40">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <FadeIn>
              <div className="max-w-3xl mb-24">
                <span className="section-eyebrow flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-gold/40" />
                  About
                </span>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] tracking-tight mb-8">
                  The History of
                  <br />
                  <span className="text-gold">Phudro Goenpa</span>
                </h1>
                <p className="text-cream/50 text-base md:text-lg leading-relaxed max-w-2xl">
                  For over a millennium, this sacred monastery has watched over the Paro Valley from its
                  limestone perch — a testament to the enduring power of faith, tradition, and Himalayan spirituality.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-x-24 gap-y-20">
              <div className="hidden md:block relative">
                <div className="sticky top-44">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: "url('/images/sections/Cloud.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-gold/20" />
                </div>
              </div>

              <div className="relative md:pl-0">
                <div className="absolute left-0 md:left-auto md:right-full md:mr-24 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/10 to-transparent hidden md:block" />

                {timeline.map((item, index) => (
                  <FadeIn key={item.era} delay={index * 0.1}>
                    <div className="relative pb-16 last:pb-0">
                      <div className="absolute -left-14 top-1 w-3 h-3 rounded-full bg-gold border-2 border-dark hidden md:block" />

                      <span className="font-mono text-xs tracking-[0.25em] text-gold/60 mb-3 block">
                        {item.era}
                      </span>
                      <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4 tracking-tight leading-[1.2]">
                        {item.title}
                      </h2>
                      <p className="text-cream/45 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
