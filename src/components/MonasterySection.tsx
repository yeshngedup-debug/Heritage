'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  )
}

export default function MonasterySection() {
  const ref = useRef(null)

  return (
    <section id="about" ref={ref} className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <div className="space-y-6">
              <span className="text-gold text-sm tracking-[0.2em] uppercase">
                The Monastery
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-dark leading-tight">
                A Sanctuary in the Clouds
              </h2>
              <div className="w-16 h-0.5 bg-gold" />
              <p className="text-dark/70 leading-relaxed">
                High on a rugged limestone mountain ridge overlooking the Paro
                Valley, Phudro Goenpa has stood for centuries as a beacon of
                Bhutanese Buddhist heritage. The monastery&apos;s white-washed
                stone walls, intricate red and gold wooden window frames, and
                shining golden pinnacle rise dramatically against the vast
                Himalayan sky.
              </p>
              <p className="text-dark/70 leading-relaxed">
                Surrounded by deep green pine forests and often wrapped in
                morning mist, the monastery offers a rare glimpse into the
                serene spiritual traditions that have shaped Bhutan&apos;s
                cultural identity.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1621886292650-520f76c747d6?q=80&w=2070&auto=format&fit=crop')",
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold/30 rounded-xl hidden md:block" />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
