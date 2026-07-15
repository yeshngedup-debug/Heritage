import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import FadeIn from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Phudro Goenpa heritage for visiting inquiries, research collaborations, and preservation.",
}

const contactInfo = [
  { label: "Location", value: "Paro Valley, Bhutan", icon: "◇" },
  { label: "Email", value: "hello@phudrogoenpa.heritage", icon: "◇" },
  { label: "Phone", value: "+975 17 323 883", icon: "◇" },
  { label: "Social", value: "Instagram / Facebook", icon: "◇" },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark">
        <section className="pt-44 pb-28 md:pb-40">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <FadeIn>
              <div className="max-w-3xl mb-20">
                <span className="section-eyebrow flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-gold/40" />
                  Contact
                </span>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] tracking-tight mb-8">
                  Get in
                  <br />
                  <span className="text-gold">Touch</span>
                </h1>
                <p className="text-cream/50 text-base md:text-lg max-w-xl leading-relaxed">
                  For inquiries about visiting Phudro Goenpa, research collaborations, or heritage preservation
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <FadeIn key={item.label} delay={index * 0.1}>
                    <div className="border border-cream/10 p-8 space-y-2 hover:border-gold/30 transition-colors duration-500 group">
                      <span className="text-gold text-sm font-mono tracking-wider">
                        {item.label}
                      </span>
                      <p className="font-serif text-xl text-cream group-hover:text-gold/80 transition-colors duration-500">
                        {item.value}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn direction="right" delay={0.2}>
                <ContactForm />
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
