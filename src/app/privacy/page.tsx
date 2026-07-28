import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FadeIn from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Phudro Goenpa Heritage website.",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark overflow-hidden">
        <section className="pt-32 md:pt-44 pb-28 md:pb-40">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <FadeIn>
              <span className="section-eyebrow flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-accent/40" />
                Legal
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] tracking-tight mb-12">
                Privacy
                <br />
                <span className="text-accent">Policy</span>
              </h1>
            </FadeIn>
            <div className="space-y-6 text-cream/50 text-base leading-relaxed">
              <p>This privacy policy outlines how Phudro Goenpa Heritage collects, uses, and protects your personal information when you visit our website.</p>
              <h2 className="font-serif text-xl text-cream mt-10 mb-4">Information We Collect</h2>
              <p>We may collect personal information such as your name and email address when you submit our contact form. This information is used solely to respond to your inquiries.</p>
              <h2 className="font-serif text-xl text-cream mt-10 mb-4">How We Use Your Information</h2>
              <p>Your information is used only to communicate with you regarding your inquiries about Phudro Goenpa. We do not share your information with third parties.</p>
              <h2 className="font-serif text-xl text-cream mt-10 mb-4">Cookies</h2>
              <p>This website may use essential cookies for functionality. No tracking or analytics cookies are used without your consent.</p>
              <h2 className="font-serif text-xl text-cream mt-10 mb-4">Contact</h2>
              <p>For questions about this policy, please contact us at hello@phudrogoenpa.heritage.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
