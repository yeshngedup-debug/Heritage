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

export default function StonePillarSection() {
  return (
    <section className="bg-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <div className="relative order-2 md:order-1">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1580743880636-e4a6c07f5c22?q=80&w=1974&auto=format&fit=crop')",
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/30 rounded-xl hidden md:block" />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="space-y-6 order-1 md:order-2">
              <span className="text-gold text-sm tracking-[0.2em] uppercase">
                Ancient Artifact
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-cream leading-tight">
                The Stone Pillar Monolith
              </h2>
              <div className="w-16 h-0.5 bg-gold" />
              <p className="text-cream/60 leading-relaxed">
                In the monastery courtyard stands a sacred six-foot tall stone
                pillar monolith, its weathered gray surface etched with subtle
                ancient carvings. Flanked by fluttering prayer flags, this
                monolith has been a silent witness to centuries of devotion.
              </p>
              <p className="text-cream/60 leading-relaxed">
                The pillar&apos;s exact origins remain a mystery, but local
                tradition holds it was placed by enlightened masters who first
                established the monastery on this remote ridge.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
