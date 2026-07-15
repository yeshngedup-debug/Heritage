'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import FadeIn from "@/components/FadeIn"

const steps = [
  {
    number: "01",
    title: "The Ascent",
    description:
      "The journey begins through ancient pine forests draped in moss and prayer flags. The trail winds upward, each step carrying you further from the modern world into a realm of silence and devotion.",
  },
  {
    number: "02",
    title: "The Ridge",
    description:
      "Emerging above the treeline, the limestone ridge stretches before you — a razor-thin spine of rock suspended between earth and sky. The monastery appears as a white speck against the Himalayan blue.",
  },
  {
    number: "03",
    title: "The Gateway",
    description:
      "Passing beneath the ornate gateway, centuries-old murals of guardians and lotus motifs welcome you. The sound of fluttering prayer flags and distant chanting fills the mountain air.",
  },
  {
    number: "04",
    title: "The Sanctuary",
    description:
      "In the inner courtyard, time dissolves. The stone monolith stands silent witness, butter lamps flicker in the temple, and the vast Paro Valley stretches endlessly below — a meeting point of heaven and earth.",
  },
]

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="group">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative pl-14 md:pl-20 border-l border-gold/20 group-last:border-transparent pb-16 last:pb-0"
      >
        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-dark-soft border-2 border-gold/60 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gold" />
        </div>

        <span className="font-mono text-xs tracking-[0.25em] text-gold/60 mb-3 block">
          {step.number}
        </span>

        <h3 className="font-display text-2xl md:text-3xl text-cream mb-4 tracking-wide">
          {step.title}
        </h3>

        <p className="text-cream/45 text-base leading-relaxed max-w-lg">
          {step.description}
        </p>

        <div className="absolute -bottom-4 left-0 w-full h-px bg-gradient-to-r from-gold/20 via-gold/10 to-transparent opacity-0 group-last:hidden md:group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </div>
  )
}

export default function ProcessSection() {
  return (
    <section className="bg-dark-soft py-20 md:py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gold blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-maroon blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 relative z-10">
        <FadeIn>
          <div className="max-w-2xl mb-20">
            <span className="section-eyebrow flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold/40" />
              The Journey
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] tracking-tight">
              The Path to
              <br />
              <span className="text-gold">Phudro Goenpa</span>
            </h2>
            <p className="text-cream/50 text-base md:text-lg leading-relaxed mt-6 max-w-xl">
              A pilgrimage is not merely a walk — it is a transformation. Each step on the
              path to Phudro Goenpa brings you closer to something ancient and enduring.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-x-24 gap-y-8">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
