import { Suspense } from "react"
import { QuoteForm } from "@/components/quote-form"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen pt-32" />}>
        <QuoteForm />
      </Suspense>
      <Footer />
    </>
  )
}
