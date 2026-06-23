'use client'

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-8 py-5">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-cream/80 text-lg tracking-[0.2em] font-mono group-hover:text-cream transition-colors">
            PHUDRO GOENPA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cream/60 hover:text-cream transition-colors tracking-wider uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-3"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`block h-px w-6 bg-cream transition-all ${isOpen ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block h-px w-6 bg-cream transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-cream transition-all ${isOpen ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-dark/95 backdrop-blur-lg flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl text-cream/80 hover:text-cream transition-colors font-serif"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
