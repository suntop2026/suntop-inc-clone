"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { staticProducts, categories } from "@/lib/static-data"
import { SITE_LOGO } from "@/lib/products-data"

const FALLBACK_IMAGE = SITE_LOGO

function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isFallback, setIsFallback] = useState(false)

  const handleError = () => {
    setImgSrc(FALLBACK_IMAGE)
    setIsFallback(true)
  }

  return (
    <img
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={400}
      height={400}
      className={`w-full h-full transition-transform duration-500 ${isFallback ? "object-contain bg-gray-100 p-4" : "object-cover group-hover:scale-110"}`}
      onError={handleError}
      loading="lazy"
    />
  )
}

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const filteredProducts =
    selectedCategory === "All"
      ? staticProducts.slice(0, 8)
      : staticProducts.filter((p) => p.category === selectedCategory).slice(0, 8)

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
