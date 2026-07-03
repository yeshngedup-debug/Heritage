'use client'

import Link from "next/link"
import StaggeredMenu from "@/components/StaggeredMenu"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

const socialItems = [
  { label: "Facebook", link: "#" },
  { label: "Instagram", link: "#" },
  { label: "YouTube", link: "#" },
]

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark/70 backdrop-blur-md max-md:hidden">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-8 py-5">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-cream/80 text-lg tracking-[0.2em] font-mono group-hover:text-cream transition-colors">
              PHUDRO GOENPA
            </span>
          </Link>

          <nav className="flex items-center gap-10">
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
        </div>
      </header>

      <div className="md:hidden fixed top-0 left-0 right-0 z-50" style={{ height: '56px' }}>
        <StaggeredMenu
          position="right"
          items={navLinks.map(({ href, label }) => ({ link: href, label }))}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#FFF8E7"
          openMenuButtonColor="#FFF8E7"
          accentColor="#D4AF37"
          colors={['#1A0F0A', '#2A1F1A']}
          logoUrl="/logo.svg"
          changeMenuColorOnOpen={false}
          isFixed={true}
        />
      </div>
    </>
  )
}
