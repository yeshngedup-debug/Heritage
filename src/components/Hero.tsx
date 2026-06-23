'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  return (
    <section ref={ref} className="relative h-[100vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark z-10" />
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
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gold/80 text-xs md:text-sm tracking-[0.3em] uppercase font-mono mb-6"
        >
          Sacred Heritage of Bhutan
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream max-w-5xl leading-[1.1] tracking-tight"
        >
          Phudro
          <br />
          <span className="text-gold">Goenpa</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-base md:text-lg text-cream/60 max-w-xl leading-relaxed"
        >
          Perched on a high limestone mountain ridge in the Paro Valley — a
          sanctuary of ancient Buddhist tradition and Himalayan serenity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex gap-5"
        >
          <a
            href="#about"
            className="px-8 py-3.5 bg-gold text-dark text-sm font-medium tracking-wider uppercase hover:bg-gold/90 transition-all"
          >
            Explore
          </a>
          <a
            href="/gallery"
            className="px-8 py-3.5 border border-cream/20 text-cream text-sm font-medium tracking-wider uppercase hover:bg-cream/5 transition-all"
          >
            Gallery
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-cream/40 text-xs tracking-widest uppercase"
        >
          <span>Scroll</span>
          <div className="w-px h-8 bg-cream/20" />
        </motion.div>
      </motion.div>
    </section>
  )
}
