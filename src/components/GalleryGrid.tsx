'use client'

import { motion } from "framer-motion"
import { useState } from "react"

const images = [
  {
    src: "https://images.unsplash.com/photo-1621886292650-520f76c747d6?q=80&w=600&auto=format&fit=crop",
    title: "Monastery Ridge",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1618366712010-f4ae2c3b6c7f?q=80&w=600&auto=format&fit=crop",
    title: "Stupa at Dawn",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1580743880636-e4a6c07f5c22?q=80&w=600&auto=format&fit=crop",
    title: "Stone Pillar",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop",
    title: "Himalayan Sunrise",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1592201913732-63d4d6e08b07?q=80&w=600&auto=format&fit=crop",
    title: "Prayer Flags",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.button
            key={i}
            layoutId={`gallery-${i}`}
            onClick={() => setSelected(i)}
            className={`${img.aspect} rounded-xl overflow-hidden relative group cursor-pointer`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url('${img.src}')` }}
            />
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-300 flex items-end p-4">
              <span className="text-cream font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.title}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-dark/90 flex items-center justify-center p-6 cursor-pointer"
        >
          <motion.div
            layoutId={`gallery-${selected}`}
            className="max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden"
          >
            <div
              className="w-[80vw] h-[60vh] bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${images[selected].src}')`,
              }}
            />
          </motion.div>
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-cream text-3xl hover:text-gold transition-colors"
          >
            ✕
          </button>
        </motion.div>
      )}
    </>
  )
}
