import Link from "next/link"

const socialLinks = [
  { label: "Facebook", href: "#", src: "/icon/Facebook.png" },
  { label: "Instagram", href: "#", src: "/icon/instagram.png" },
  { label: "YouTube", href: "#", src: "/icon/youtube.png" },
]

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-accent/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-10 md:gap-10">
          <div className="space-y-5">
            <span className="text-cream text-lg tracking-[0.2em] font-mono">
              PHUDRO GOENPA<span className="text-accent">.</span>
            </span>
            <p className="text-cream/40 text-sm leading-relaxed max-w-xs">
              A sacred monument of Bhutanese Buddhist heritage, perched on the
              limestone ridge of the Paro Valley.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="block hover:scale-110 transition-transform duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={s.src} alt="" width={44} height={44} className="object-contain" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-accent/60 text-xs tracking-[0.2em] uppercase mb-6 font-mono">
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
            <h4 className="text-accent/60 text-xs tracking-[0.2em] uppercase mb-6 font-mono">
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
            <h4 className="text-accent/60 text-xs tracking-[0.2em] uppercase mb-6 font-mono">
              Newsletter
            </h4>
            <p className="text-cream/40 text-sm leading-relaxed mb-5">
              Receive updates on events and heritage preservation.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-dark-soft border border-accent/20 text-cream text-sm placeholder:text-cream/25 outline-none focus:border-accent/50 transition-colors"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-accent text-dark text-xs font-medium tracking-wider uppercase hover:bg-accent/90 transition-all shrink-0"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-accent/10 flex flex-col md:flex-row items-center justify-between gap-4 text-cream/30 text-xs">
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
