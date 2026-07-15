import Link from "next/link"
import Image from "next/image"

const socialLinks = [
  { label: "Facebook", href: "#", icon: "/icon/Facebook.png" },
  { label: "Instagram", href: "#", icon: "/icon/instagram.png" },
  { label: "YouTube", href: "#", icon: "/icon/youtube.png" },
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
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-10">
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
                  className="w-10 h-10 border border-gold/20 flex items-center justify-center text-cream/50 hover:border-gold hover:text-gold transition-colors p-2.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={s.icon} alt="" width={18} height={18} className="opacity-60 hover:opacity-100 transition-opacity object-contain" />
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
