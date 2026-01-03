"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { staticProducts, categories } from "@/lib/static-data"
import { ArrowLeft } from "lucide-react"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const filteredProducts =
    selectedCategory === "All" ? staticProducts : staticProducts.filter((p) => p.category === selectedCategory)

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">All Products</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore our complete catalog of {staticProducts.length}+ promotional products
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-secondary text-secondary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
                {category !== "All" && (
                  <span className="ml-1 text-xs">({staticProducts.filter((p) => p.category === category).length})</span>
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="group">
                <Card className="overflow-hidden border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl h-full">
                  <div className="aspect-square overflow-hidden bg-muted relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.imageAlt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                    <div className="space-y-1">
                      <div className="text-xl font-bold text-secondary">From ${product.price.toFixed(2)}</div>
                      <div className="text-sm text-muted-foreground">MOQ: {product.moq} units</div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
