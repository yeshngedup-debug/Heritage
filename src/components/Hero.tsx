'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export default function Hero() {
  const ref = useRef(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  return (
    <section ref={ref} className="relative h-dvh overflow-hidden">
      <motion.div style={{ y: prefersReduced ? "0%" : y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/10 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(26,15,10,0.3)_100%)] z-10" />
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero/MainGoenpa.jpg')",
          }}
        />
      </motion.div>

      <div className="absolute top-8 left-6 md:top-12 md:left-10 z-20">
        <span className="text-gold/60 text-xs tracking-[0.25em] uppercase font-mono">
          Sacred Heritage of Bhutan
        </span>
      </div>

      <motion.div
        style={{ opacity: prefersReduced ? 1 : opacity }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={childVariants} className="flex items-center gap-3 mb-6">
            <span className="h-px w-6 bg-gold/60" />
            <span className="text-gold/80 text-xs md:text-sm tracking-[0.3em] uppercase font-mono">
              DISCOVER
            </span>
            <span className="h-px w-6 bg-gold/60" />
          </motion.div>

          <motion.h1 variants={childVariants} className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream max-w-5xl leading-[1.1] tracking-tight">
            Phudro
            <br />
            <span className="text-gold">Goenpa</span>
          </motion.h1>

          <motion.p variants={childVariants} className="mt-8 text-base md:text-lg text-cream/60 max-w-xl leading-relaxed">
            Perched on a high limestone mountain ridge in the Paro Valley — a
            sanctuary of ancient Buddhist tradition and Himalayan serenity.
          </motion.p>

          <motion.div variants={childVariants} className="mt-12 flex gap-5">
            <a
              href="#about"
              className="px-8 py-4 bg-gold text-dark text-sm font-medium tracking-wider uppercase hover:bg-gold/90 transition-all"
            >
              Explore the Sanctuary
            </a>
            <a
              href="/gallery"
              className="px-8 py-4 border border-cream/20 text-cream text-sm font-medium tracking-wider uppercase hover:bg-cream/5 transition-all"
            >
              View Gallery
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 6, 0] }}
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
