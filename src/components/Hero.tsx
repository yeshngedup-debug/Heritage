'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-cream z-10" />
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1621886292650-520f76c747d6?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Sacred Heritage of Bhutan
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream max-w-4xl leading-tight"
        >
          Phudro Goenpa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-cream/80 max-w-2xl"
        >
          Perched on a high limestone mountain ridge in the Paro Valley — a
          sanctuary of ancient Buddhist tradition and Himalayan serenity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#about"
            className="px-8 py-3 bg-gold text-dark font-medium rounded-full hover:bg-gold/90 transition-colors"
          >
            Explore
          </a>
          <a
            href="/gallery"
            className="px-8 py-3 border border-cream/40 text-cream font-medium rounded-full hover:bg-cream/10 transition-colors"
          >
            Gallery
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-cream/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}
