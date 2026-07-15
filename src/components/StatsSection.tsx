'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect } from "react"

const stats = [
  { value: 1000, label: "Years of History", display: "1000+" },
  { value: 4000, label: "Above Sea Level", display: "4,000m" },
  { value: 3, label: "Sacred Relics", display: "3" },
  { value: null, label: "Spiritual Legacy", display: "∞" },
]

function AnimatedStat({
  stat,
  index,
}: {
  stat: typeof stats[number]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)

  useEffect(() => {
    if (isInView && stat.value !== null) {
      const controls = animate(count, stat.value, {
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1] as const,
      })
      return controls.stop
    }
  }, [isInView, stat.value, count])

  const formatted = useTransform(count, (v) => {
    const n = Math.round(v)
    if (stat.display === "1000+") return `${n}+`
    if (stat.display === "4,000m") return `${n.toLocaleString()}m`
    return `${n}`
  })

  return (
    <div ref={ref} className="text-center group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="relative py-8 md:py-10"
      >
        {stat.value !== null ? (
          <motion.div className="font-serif text-4xl md:text-5xl text-gold mb-2 group-hover:scale-110 transition-transform duration-500 origin-center">
            {formatted}
          </motion.div>
        ) : (
          <div className="font-serif text-4xl md:text-5xl text-gold mb-2 group-hover:scale-110 transition-transform duration-500">
            {stat.display}
          </div>
        )}
        <div className="text-cream/50 text-sm tracking-wider uppercase">
          {stat.label}
        </div>
      </motion.div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="bg-dark-soft border-y border-gold/10 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <div key={stat.label} className="md:border-r border-gold/10 last:border-r-0">
              <AnimatedStat stat={stat} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
