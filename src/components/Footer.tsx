"use client"

import Link from "next/link"

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
]

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-10 md:gap-10">
          <div className="space-y-5">
            <span className="text-cream text-lg tracking-[0.2em] font-mono">
              PHUDRO GOENPA<span className="text-gold">.</span>
            </span>
            <p className="text-cream/40 text-sm leading-relaxed max-w-xs">
              A sacred monument of Bhutanese Buddhist heritage, perched on the
              limestone ridge of the Paro Valley.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-11 h-11 border border-gold/20 flex items-center justify-center text-cream/50 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all rounded-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gold/60 text-xs tracking-[0.2em] uppercase mb-6 font-mono">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream/40 text-sm hover:text-cream transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gold/60 text-xs tracking-[0.2em] uppercase mb-6 font-mono">
              Contact
            </h4>
            <div className="space-y-4 text-cream/40 text-sm">
              <div>
                <span className="text-cream/60 text-xs tracking-wider uppercase block mb-1">Location</span>
                <p>Paro Valley, Bhutan</p>
              </div>
              <div>
                <span className="text-cream/60 text-xs tracking-wider uppercase block mb-1">Email</span>
                <p>hello@phudrogoenpa.heritage</p>
              </div>
              <div>
                <span className="text-cream/60 text-xs tracking-wider uppercase block mb-1">Phone</span>
                <p>975 77300860</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-gold/60 text-xs tracking-[0.2em] uppercase mb-6 font-mono">
              Newsletter
            </h4>
            <p className="text-cream/40 text-sm leading-relaxed mb-5">
              Receive updates on events and heritage preservation.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-dark-soft border border-gold/20 text-cream text-sm placeholder:text-cream/25 outline-none focus:border-gold/50 transition-colors"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-gold text-dark text-xs font-medium tracking-wider uppercase hover:bg-gold/90 transition-all shrink-0"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4 text-cream/30 text-xs">
          <p>&copy; {new Date().getFullYear()} Phudro Goenpa Heritage. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cream/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
