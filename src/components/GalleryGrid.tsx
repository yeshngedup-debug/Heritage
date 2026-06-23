'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const images = [
  {
    src: "/images/gallery/Goenpa.jpg",
    title: "Phudro Goenpa Monastery",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/gallery/CarryingFirewoods.jpg",
    title: "Life in the Paro Valley",
    aspect: "aspect-square",
  },
  {
    src: "/images/gallery/CloudPlayerFlagDongkolaLhakhang.jpg",
    title: "Prayer Flags at Dongkola Lhakhang",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/gallery/SunsetsParyerFlag.jpg",
    title: "Sunset Prayer Flags",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/gallery/NightViewofParoValley.jpg",
    title: "Paro Valley Night View",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1604537466573-5e94508fd243?q=80&w=600&auto=format&fit=crop",
    title: "Mountain Mist",
    aspect: "aspect-[4/3]",
  },
]

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 bg-dark">
        {images.map((img, i) => (
          <motion.button
            key={i}
            layoutId={`gallery-${i}`}
            layout
            onClick={() => setSelected(i)}
            className={`${img.aspect} overflow-hidden relative group cursor-pointer`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/60 transition-colors duration-500 flex items-end p-6">
              <span className="text-cream font-mono text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {img.title}
              </span>
            </div>
          </motion.button>
        ))}
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
              layoutId={`gallery-${selected}`}
              layout
              className="max-w-5xl max-h-[90vh] overflow-hidden"
            >
              <img
                src={images[selected].src}
                alt={images[selected].title}
                className="w-[85vw] md:w-[70vw] h-[60vh] object-contain"
              />
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(null) }}
              className="absolute top-8 right-8 text-cream/60 text-sm tracking-widest uppercase hover:text-cream transition-colors font-mono"
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
