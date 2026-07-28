"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"

const categories = ["All", "Monastery", "Valley", "Nature", "Culture"] as const

type Category = typeof categories[number]

interface GalleryImage {
  src: string
  title: string
  category: Category
}

const images: GalleryImage[] = [
  { src: "/images/gallery/Goenpa.jpg", title: "Phudro Goenpa Monastery", category: "Monastery" },
  { src: "/images/gallery/CarryingFirewoods.jpg", title: "Life in the Paro Valley", category: "Valley" },
  { src: "/images/gallery/CloudPlayerFlagDongkolaLhakhang.jpg", title: "View of Dongkola Lhakhang from Phudro Goenpa", category: "Monastery" },
  { src: "/images/gallery/SunsetsParyerFlag.jpg", title: "Sunset Prayer Flags", category: "Culture" },
  { src: "/images/gallery/NightViewofParoValley.jpg", title: "Paro Valley Night View", category: "Valley" },
  { src: "/images/gallery/Jomolhari.jpg", title: "Mount Jomolhari", category: "Nature" },
]

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const filtered = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory)
  const globalIndex = selected !== null ? images.findIndex((img) => img.src === filtered[selected]?.src) : -1

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [selected])

  const handlePrev = useCallback(() => {
    setSelected((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))
  }, [])

  const handleNext = useCallback(() => {
    setSelected((prev) => (prev !== null && prev < filtered.length - 1 ? prev + 1 : prev))
  }, [filtered.length])

  useEffect(() => {
    if (selected === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null)
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [selected, handlePrev, handleNext])

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-14 px-5 md:px-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setSelected(null) }}
            className={`px-5 py-2 text-xs tracking-[0.2em] uppercase font-mono transition-all duration-500 ${
              activeCategory === cat
                ? "text-accent border-b border-accent"
                : "text-cream/30 hover:text-cream/60 border-b border-transparent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 bg-dark">
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <motion.button
              key={img.src}
              layoutId={`gallery-${img.src}`}
              layout
              onClick={() => setSelected(i)}
              className="aspect-[2/1] overflow-hidden relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Image
                fill
                src={img.src}
                alt={img.title}
                loading={i < 2 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-cream font-mono text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {img.title}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.div
              layoutId={`gallery-${filtered[selected].src}`}
              layout
              className="relative w-[85vw] md:w-[70vw] h-[60vh] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                fill
                src={filtered[selected].src}
                alt={filtered[selected].title}
                className="object-contain"
                sizes="70vw"
              />
            </motion.div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 text-xs tracking-widest uppercase font-mono">
              {selected + 1} / {filtered.length}
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 text-cream/80 text-sm font-serif">
              {filtered[selected].title}
            </div>

            {selected > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev() }}
                className="absolute left-8 top-1/2 -translate-y-1/2 px-4 py-3 text-cream/40 text-2xl hover:text-cream transition-colors"
                aria-label="Previous image"
              >
                ‹
              </button>
            )}
            {selected < filtered.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); handleNext() }}
                className="absolute right-8 top-1/2 -translate-y-1/2 px-4 py-3 text-cream/40 text-2xl hover:text-cream transition-colors"
                aria-label="Next image"
              >
                ›
              </button>
            )}

            <button
              onClick={(e) => { e.stopPropagation(); setSelected(null) }}
              className="absolute top-8 right-8 px-4 py-3 text-cream/60 text-sm tracking-widest uppercase hover:text-cream transition-colors font-mono"
              aria-label="Close lightbox"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
