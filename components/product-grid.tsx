"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { staticProducts, categories } from "@/lib/static-data"

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1560393464-5c69a73c5770?auto=format&fit=crop&q=80&w=800"

function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setImgSrc(src)
    setHasError(false)
    setIsLoading(true)
  }, [src])

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Loading...</span>
        </div>
      )}
      <img
        src={hasError ? FALLBACK_IMAGE : imgSrc}
        alt={alt}
        className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => {
          setIsLoading(false)
          console.log("[v0] Image loaded successfully:", imgSrc)
        }}
        onError={() => {
          console.log("[v0] Image failed to load:", imgSrc)
          if (!hasError) {
            setHasError(true)
            setImgSrc(FALLBACK_IMAGE)
          }
          setIsLoading(false)
        }}
      />
    </div>
  )
}

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const filteredProducts =
    selectedCategory === "All"
      ? staticProducts.slice(0, 8)
      : staticProducts.filter((p) => p.category === selectedCategory).slice(0, 8)

  useEffect(() => {
    console.log(
      "[v0] ProductGrid mounted, products:",
      filteredProducts.map((p) => ({ name: p.name, image: p.image })),
    )
  }, [filteredProducts])

  return (
    <section id="products" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Popular Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Browse our most requested promotional items, all customizable with your brand
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
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
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="group">
              <Card className="overflow-hidden border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl h-full">
                <div className="aspect-square overflow-hidden bg-muted relative">
                  <ProductImage src={product.image} alt={product.imageAlt} />
                </div>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">{product.name}</h3>
                  <div className="space-y-1">
                    <div className="text-xl font-bold text-secondary">From ${product.price.toFixed(2)}</div>
                    <div className="text-sm text-muted-foreground">MOQ: {product.moq} units</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
