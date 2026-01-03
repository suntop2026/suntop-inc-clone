import { Suspense } from "react"
import { ProductsContent } from "@/components/products-content"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<ProductsLoading />}>
        <ProductsContent />
      </Suspense>
      <Footer />
    </>
  )
}

function ProductsLoading() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="animate-pulse">
          <div className="h-8 w-32 bg-muted rounded mb-8" />
          <div className="text-center mb-12">
            <div className="h-12 w-64 bg-muted rounded mx-auto mb-4" />
            <div className="h-6 w-96 bg-muted rounded mx-auto" />
          </div>
          <div className="flex justify-center gap-2 mb-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-10 w-24 bg-muted rounded-full" />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <div className="aspect-square bg-muted" />
                <div className="p-4 space-y-2">
                  <div className="h-4 w-16 bg-muted rounded" />
                  <div className="h-6 w-32 bg-muted rounded" />
                  <div className="h-4 w-24 bg-muted rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
