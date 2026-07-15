import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FadeIn from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Phudro Goenpa Heritage website.",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark">
        <section className="pt-44 pb-28 md:pb-40">
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <FadeIn>
              <span className="section-eyebrow flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-gold/40" />
                Legal
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] tracking-tight mb-12">
                Terms of
                <br />
                <span className="text-gold">Service</span>
              </h1>
            </FadeIn>
            <div className="space-y-6 text-cream/50 text-base leading-relaxed">
              <p>By accessing and using the Phudro Goenpa Heritage website, you agree to comply with the following terms and conditions.</p>
              <h2 className="font-serif text-xl text-cream mt-10 mb-4">Use of Content</h2>
              <p>All content on this website, including text, images, and media, is the property of Phudro Goenpa Heritage unless otherwise stated. Content may not be reproduced without permission.</p>
              <h2 className="font-serif text-xl text-cream mt-10 mb-4">Accuracy</h2>
              <p>While we strive for accuracy, the information on this website is provided for general informational purposes about Phudro Goenpa and may be updated without notice.</p>
              <h2 className="font-serif text-xl text-cream mt-10 mb-4">External Links</h2>
              <p>This website may contain links to external sites. We are not responsible for the content or practices of third-party websites.</p>
              <h2 className="font-serif text-xl text-cream mt-10 mb-4">Changes</h2>
              <p>We reserve the right to update these terms at any time. Continued use of the website constitutes acceptance of any changes.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
