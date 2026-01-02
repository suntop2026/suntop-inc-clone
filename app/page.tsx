import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustedBy } from "@/components/trusted-by"
import { ProductGrid } from "@/components/product-grid"
import { QuoteCTA } from "@/components/quote-cta"
import { FactorySection } from "@/components/factory-section"
import { Footer } from "@/components/footer"
import { TrustBadges } from "@/components/trust-badges"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <TrustedBy />
        <TrustBadges />
        <ProductGrid />
        <FactorySection />
        <Testimonials />
        <QuoteCTA />
      </main>
      <Footer />
    </>
  )
}
