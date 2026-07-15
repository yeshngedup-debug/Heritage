"use client"

import { motion } from "framer-motion"
import FadeIn from "@/components/FadeIn"
import { useReducedMotion } from "@/hooks/useReducedMotion"

export default function FlyingStupaSection() {
  const prefersReduced = useReducedMotion()
  return (
    <section className="bg-cream py-20 md:py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <FadeIn>
            <div className="space-y-8">
              <span className="section-number flex items-center gap-3">
                <span className="text-gold font-mono text-sm tracking-[0.2em]">03 / SACRED LEGEND</span>
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark leading-[1.1] tracking-tight">
                The Legend of
                <br />
                <span className="text-maroon">the Flying Stupa</span>
              </h2>
              <div className="space-y-5 text-dark/60 leading-relaxed text-base md:text-lg">
                <p>
                  Ancient lore tells of a sacred stone stupa that once floated
                  serenely above the monastery, suspended in the clouds above the
                  mountain ridge.
                </p>
                <p>
                  Rays of divine golden light would pierce through the mist,
                  illuminating the sacred structure. To this day, travelers speak
                  of strange lights and ethereal shapes drifting above the ridge
                  at dawn.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gold)_0%,_transparent_70%)] opacity-20 blur-2xl" />
              <motion.div
                animate={prefersReduced ? {} : { y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="aspect-square overflow-hidden relative"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/images/sections/flyingStupa.jpg')",
                  }}
                />
              </motion.div>
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-gold/5 blur-3xl" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
