'use client'

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const images = [
  { src: "/images/gallery/Goenpa.jpg", title: "Phudro Goenpa Monastery" },
  { src: "/images/gallery/CarryingFirewoods.jpg", title: "Life in the Paro Valley" },
  { src: "/images/gallery/CloudPlayerFlagDongkolaLhakhang.jpg", title: "View of Dongkola Lhakhang from Phudro Goenpa" },
  { src: "/images/gallery/SunsetsParyerFlag.jpg", title: "Sunset Prayer Flags" },
  { src: "/images/gallery/NightViewofParoValley.jpg", title: "Paro Valley Night View" },
  { src: "/images/gallery/Jomolhari.jpg", title: "Mount Jomolhari" },
]

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 bg-dark">
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            layoutId={`gallery-${i}`}
            layout
            onClick={() => setSelected(i)}
            className="aspect-[2/1] overflow-hidden relative group cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            <Image
              fill
              src={img.src}
              alt={img.title}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
              className="relative w-[85vw] md:w-[70vw] h-[60vh]"
            >
              <Image
                fill
                src={images[selected].src}
                alt={images[selected].title}
                className="object-contain"
                sizes="70vw"
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
