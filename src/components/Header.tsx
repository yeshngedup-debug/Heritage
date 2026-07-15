'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

const containerVariants = {
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const itemVariants = {
  closed: { opacity: 0, y: -20 },
  open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/70 backdrop-blur-xl border-b border-gold/10">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 md:px-8 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-cream text-lg tracking-[0.2em] font-mono group-hover:text-cream transition-colors">
            PHUDRO GOENPA<span className="text-gold">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group text-sm tracking-wider uppercase py-1 transition-colors ${
                  isActive ? "text-gold" : "text-cream/60 hover:text-cream"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-px left-0 h-px bg-gold transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-gold text-dark text-sm font-medium tracking-wider uppercase hover:bg-gold/90 transition-all"
          >
            Visit
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-px bg-cream block origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-px bg-cream block"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-px bg-cream block origin-center"
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-dark/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center md:hidden"
          >
            <motion.nav
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-3xl font-serif tracking-tight transition-colors ${
                        isActive ? "text-gold" : "text-cream/70 hover:text-cream"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div variants={itemVariants} className="mt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block px-8 py-3.5 bg-gold text-dark text-sm font-medium tracking-wider uppercase hover:bg-gold/90 transition-all"
                >
                  Visit
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
