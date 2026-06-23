import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark">
        <section className="pt-44 pb-28 md:pb-40">
          <div className="mx-auto max-w-4xl px-8">
            <span className="section-number flex items-center gap-3 mb-8">
              <span className="text-gold font-mono text-sm tracking-[0.2em]">04</span>
              <span className="h-px w-8 bg-gold/30" />
              <span className="text-cream/40 text-xs tracking-[0.2em] uppercase">Contact</span>
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] tracking-tight mb-12">
              Get in
              <br />
              <span className="text-gold">Touch</span>
            </h1>
            <p className="text-cream/50 text-base md:text-lg max-w-xl leading-relaxed mb-16">
              For inquiries about visiting Phudro Goenpa, research collaborations, or heritage
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "→", title: "Location", desc: "Paro Valley, Bhutan" },
                { icon: "→", title: "Email", desc: "hello@phudrogoenpa.heritage" },
                { icon: "→", title: "Phone", desc: "+975 17 323 883" },
                { icon: "→", title: "Social", desc: "Instagram / Facebook" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-cream/10 p-8 space-y-3 hover:border-gold/30 transition-colors group"
                >
                  <span className="text-gold text-sm font-mono group-hover:translate-x-1 transition-transform inline-block">
                    {item.icon}
                  </span>
                  <h3 className="font-serif text-xl text-cream">{item.title}</h3>
                  <p className="text-cream/40 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
