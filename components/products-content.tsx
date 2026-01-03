"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { categories } from "@/lib/static-data"
import { SITE_LOGO } from "@/lib/products-data"
import { ArrowLeft } from "lucide-react"

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

export function ProductsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const categoryParam = searchParams.get("category")

  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
        setError(null)
      } catch (err) {
        console.error("Error fetching products:", err)
        setError("Failed to load products. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    if (categoryParam) {
      const matchedCategory = categories.find((cat) => cat.toLowerCase() === categoryParam.toLowerCase())
      if (matchedCategory) {
        setSelectedCategory(matchedCategory)
      }
    } else {
      setSelectedCategory("All")
    }
  }, [categoryParam])

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    const url = category === "All" ? "/products" : `/products?category=${encodeURIComponent(category)}`
    window.history.pushState({}, "", url)
  }

  const handleAddToQuote = (e: React.MouseEvent, productName: string) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/quote?product=${encodeURIComponent(productName)}`)
  }

  if (loading) {
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

  if (error) {
    return (
      <main className="min-h-screen pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center py-12">
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        </div>
      </main>
    )
  }

  return (
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {selectedCategory === "All" ? "All Products" : selectedCategory}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {selectedCategory === "All"
              ? `Explore our complete catalog of ${products.length}+ promotional products`
              : `Browse our ${filteredProducts.length} ${selectedCategory.toLowerCase()} products`}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-secondary text-secondary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
              {category !== "All" && (
                <span className="ml-1 text-xs">({products.filter((p) => p.category === category).length})</span>
              )}
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
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found in this category.</p>
          </div>
        )}

        <div className="text-center mt-16">
          <Link
            href="/quote"
            className="inline-block bg-secondary text-secondary-foreground px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
          >
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </main>
  )
}
