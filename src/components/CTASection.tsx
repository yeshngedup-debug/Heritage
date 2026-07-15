'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-40 overflow-hidden bg-dark">
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center md:bg-fixed opacity-30"
          style={{
            backgroundImage:
              "url('/images/hero/MainGoenpa.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/90" />
      </div>

      <div className="absolute inset-0 noise-overlay" />

      <div className="mx-auto max-w-4xl px-8 relative z-10 text-center">
        <FadeIn>
          <span className="section-eyebrow flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold/40" />
            Begin Your Pilgrimage
            <span className="h-px w-8 bg-gold/40" />
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-cream leading-[1.1] tracking-tight mb-6">
            Embark on a
            <br />
            <span className="text-gold gold-glow">Sacred Journey</span>
          </h2>

          <p className="text-cream/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Whether you seek spiritual solace, historical wonder, or the raw beauty of the
            Himalayas — Phudro Goenpa awaits. Plan your pilgrimage to this ancient sanctuary
            perched between heaven and earth.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Plan Your Visit
            </Link>
            <Link href="/about" className="btn-outline w-full sm:w-auto">
              Learn More
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
