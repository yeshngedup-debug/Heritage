'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import StaggeredMenu from "@/components/StaggeredMenu"

const navLinks = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Gallery", ariaLabel: "View our gallery", link: "/gallery" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
]

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
            const isActive = pathname === link.link
            return (
              <Link
                key={link.link}
                href={link.link}
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
          className="md:hidden relative z-[60] w-11 h-11 flex flex-col items-center justify-center gap-[5px]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-6 h-px bg-cream block origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-px bg-cream block"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-6 h-px bg-cream block origin-center"
          />
        </button>
      </div>

      <div className="md:hidden">
        <StaggeredMenu
          isFixed
          items={navLinks}
          menuOpen={mobileOpen}
          onToggle={() => setMobileOpen(!mobileOpen)}
          hideHeader
          position="right"
          colors={['#D4AF37', '#FFF8E7', '#E8C84A']}
          menuButtonColor="#FFF8E7"
          openMenuButtonColor="#FFF8E7"
          accentColor="#800020"
          displayItemNumbering
          displaySocials={false}
        />
      </div>
    </header>
  )
}
