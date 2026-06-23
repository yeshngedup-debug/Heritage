import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6">
            <span className="text-gold text-sm tracking-[0.2em] uppercase">
              Contact
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-dark leading-tight mt-4">
              Get in Touch
            </h1>
            <div className="w-16 h-0.5 bg-gold my-8" />
            <p className="text-dark/70 leading-relaxed mb-12">
              For inquiries about visiting Phudro Goenpa, research, or heritage
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 p-6 rounded-xl border border-stone/20">
                <span className="text-2xl">📍</span>
                <h3 className="font-serif text-xl text-dark">Location</h3>
                <p className="text-dark/60">Paro Valley, Bhutan</p>
              </div>
              <div className="space-y-4 p-6 rounded-xl border border-stone/20">
                <span className="text-2xl">✉️</span>
                <h3 className="font-serif text-xl text-dark">Email</h3>
                <p className="text-dark/60">hello@phudrogoenpa.heritage</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
