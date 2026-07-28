'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import FadeIn from "@/components/FadeIn"

const testimonials = [
  {
    quote:
      "A place where the heavens meet the earth. The silence at Phudro Goenpa speaks louder than any sermon I have ever heard.",
    name: "Tashi Wangmo",
    title: "Pilgrim, Thimphu",
  },
  {
    quote:
      "Standing before the ancient stone pillar, I felt the weight of centuries lift from my shoulders. The monastery holds a peace that defies description.",
    name: "Kencho Dorji",
    title: "Monk, Bumthang",
  },
  {
    quote:
      "The journey to Phudro Goenpa is not just a trek through the mountains — it is a journey inward. Every stone, every prayer flag carries a story.",
    name: "Maria Santos",
    title: "Traveler, Portugal",
  },
]

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-dark/50 backdrop-blur-sm border border-cream/5 p-8 md:p-12 relative group hover:border-gold/20 transition-colors duration-500"
    >
      <span className="font-serif text-6xl leading-none text-gold/10 absolute top-6 right-8 select-none">
        &ldquo;
      </span>

      <p className="text-cream/65 text-base md:text-lg leading-relaxed mb-8 relative z-10">
        {testimonial.quote}
      </p>

      <div className="flex items-center gap-3">
        <div className="w-10 h-px bg-gold/40 flex-shrink-0" />
        <div>
          <p className="text-cream text-sm font-medium">{testimonial.name}</p>
          <p className="text-cream/40 text-xs tracking-wider uppercase mt-0.5">
            {testimonial.title}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialSection() {
  return (
    <section className="bg-dark py-20 md:py-28 lg:py-40 relative">
      <div className="absolute inset-0 noise-overlay" />

      <div className="mx-auto max-w-7xl px-5 md:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="section-eyebrow flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold/40" />
              Pilgrim Voices
              <span className="h-px w-8 bg-gold/40" />
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] tracking-tight">
              Words from
              <br />
              <span className="text-gold">the Devoted</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
