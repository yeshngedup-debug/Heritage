'use client'

import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-accent/30 bg-accent/5 p-10 text-center"
      >
        <p className="text-accent font-serif text-2xl mb-2">Thank You</p>
        <p className="text-cream/50 text-sm">
          Your message has been received. We will be in touch soon.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="border border-cream/10 p-6 md:p-10">
      <h3 className="font-serif text-2xl text-cream mb-2">Send a Message</h3>
      <p className="text-cream/40 text-sm mb-8">
        We will respond to your inquiry as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-cream/60 text-xs tracking-wider uppercase mb-2 font-mono">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full bg-dark-soft border border-cream/10 px-5 py-3.5 text-cream text-sm outline-none focus:border-accent/50 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-cream/60 text-xs tracking-wider uppercase mb-2 font-mono">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full bg-dark-soft border border-cream/10 px-5 py-3.5 text-cream text-sm outline-none focus:border-accent/50 transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-cream/60 text-xs tracking-wider uppercase mb-2 font-mono">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            required
            className="w-full bg-dark-soft border border-cream/10 px-5 py-3.5 text-cream text-sm outline-none focus:border-accent/50 transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-accent text-dark text-sm font-medium tracking-wider uppercase hover:bg-accent/90 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
