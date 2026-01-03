"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { categories } from "@/lib/static-data"
import { SITE_LOGO } from "@/lib/products-data"

const FALLBACK_IMAGE = SITE_LOGO

interface Product {
  id: string
  name: string
  category: string
  price: number
  moq: number
  image: string
  imageAlt: string
  description: string
  slug: string
}

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
      className="w-full h-full transition-transform duration-500"
      style={{
        objectFit: isFallback ? "contain" : "cover",
        backgroundColor: isFallback ? "rgb(243, 244, 246)" : "transparent",
        padding: isFallback ? "1rem" : "0",
        transform: !isFallback ? "scale(1)" : "scale(1)",
      }}
      onError={handleError}
      loading="lazy"
    />
  )
}

export function ProductGrid() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch products from API
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        const response = await fetch("/api/products")
        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }
        const data = await response.json()
        setProducts(data.products || [])
      } catch (err) {
        console.error("Error fetching products:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts =
    selectedCategory === "All"
      ? products.slice(0, 8)
      : products.filter((p) => p.category === selectedCategory).slice(0, 8)

  const handleAddToQuote = (e: React.MouseEvent, productName: string) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/quote?product=${encodeURIComponent(productName)}`)
  }

  if (loading) {
    return (
      <section id="products" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Popular Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Browse our most requested promotional items, all customizable with your brand
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="border rounded-lg overflow-hidden animate-pulse">
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
      </section>
    )
  }

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
            <div key={product.id} className="group flex flex-col">
              <Link href={`/products/${product.slug}`} className="flex-1">
                <Card className="overflow-hidden border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl h-full">
                  <div className="aspect-square overflow-hidden bg-muted relative">
                    <ProductImage src={product.image} alt={product.imageAlt} />
                  </div>
                  <CardContent className="p-4 flex flex-col flex-1">
                    <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">{product.name}</h3>
                    <div className="space-y-1 flex-1">
                      <div className="text-xl font-bold text-secondary">From ${product.price.toFixed(2)}</div>
                      <div className="text-sm text-muted-foreground">MOQ: {product.moq} units</div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <button
                onClick={(e) => handleAddToQuote(e, product.name)}
                className="mt-4 w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                Add to Quote
              </button>
            </div>
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
