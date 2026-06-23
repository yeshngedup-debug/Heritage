'use client'

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-stone/20 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">☸</span>
            <span className="font-serif text-lg text-cream">
              Phudro Goenpa
            </span>
          </div>

          <p className="text-cream/40 text-sm text-center">
            &copy; {new Date().getFullYear()} Phudro Goenpa Heritage. All
            rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="text-gold text-sm tracking-[0.2em] uppercase">
              Paro Valley, Bhutan
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
