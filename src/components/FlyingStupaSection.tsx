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

export default function FlyingStupaSection() {
  return (
    <section className="bg-cream py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <div className="space-y-6">
              <span className="text-gold text-sm tracking-[0.2em] uppercase">
                Sacred Legend
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-dark leading-tight">
                The Legend of the Flying Stupa
              </h2>
              <div className="w-16 h-0.5 bg-gold" />
              <p className="text-dark/70 leading-relaxed">
                Ancient lore tells of a sacred stone stupa that once floated
                serenely above the monastery, suspended in the clouds above the
                mountain ridge. Rays of divine golden light would pierce through
                the mist, illuminating the sacred structure.
              </p>
              <p className="text-dark/70 leading-relaxed">
                To this day, travelers speak of strange lights and ethereal
                shapes seen drifting above the ridge at dawn — a living legend
                that continues to inspire pilgrims and visitors alike.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="relative">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1618366712010-f4ae2c3b6c7f?q=80&w=1974&auto=format&fit=crop')",
                  }}
                />
              </motion.div>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gold/10 blur-2xl" />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
