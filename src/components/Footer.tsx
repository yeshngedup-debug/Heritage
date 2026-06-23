import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-cream/5">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-5">
            <span className="text-cream text-lg tracking-[0.2em] font-mono">
              PHUDRO GOENPA
            </span>
            <p className="text-cream/40 text-sm leading-relaxed max-w-xs">
              A sacred monument of Bhutanese Buddhist heritage, perched on the
              limestone ridge of the Paro Valley.
            </p>
            <div className="flex gap-4">
              {["FB", "IG", "YT"].map((s) => (
                <span
                  key={s}
                  className="w-9 h-9 border border-cream/10 flex items-center justify-center text-cream/40 text-xs hover:border-gold/50 hover:text-gold transition-colors cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-cream/60 text-xs tracking-[0.2em] uppercase mb-6">
              Pages
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
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
            <h4 className="text-cream/60 text-xs tracking-[0.2em] uppercase mb-6">
              Contact
            </h4>
            <div className="space-y-4 text-cream/40 text-sm">
              <p>Paro Valley, Bhutan</p>
              <p>hello@phudrogoenpa.heritage</p>
              <p>+975 17 323 883</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/5 flex flex-col md:flex-row items-center justify-between gap-4 text-cream/30 text-xs">
          <p>&copy; {new Date().getFullYear()} Phudro Goenpa Heritage. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
