'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { number: "1000+", label: "Years of History" },
  { number: "4,000m", label: "Above Sea Level" },
  { number: "3", label: "Sacred Relics" },
  { number: "∞", label: "Spiritual Legacy" },
]

function StatItem({ stat }: { stat: typeof stats[number] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-serif text-4xl md:text-5xl text-gold mb-2"
      >
        {stat.number}
      </motion.div>
      <div className="text-cream/50 text-sm tracking-wider uppercase">{stat.label}</div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="bg-dark-soft border-y border-cream/5 py-20">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
