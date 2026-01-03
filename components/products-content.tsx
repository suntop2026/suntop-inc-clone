"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { staticProducts, categories } from "@/lib/static-data"
import { ArrowLeft } from "lucide-react"

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1560393464-5c69a73c5770?auto=format&fit=crop&q=80&w=800"

function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  return (
    <img
      src={hasError ? FALLBACK_IMAGE : imgSrc}
      alt={alt}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      onError={() => {
        if (!hasError) {
          setHasError(true)
          setImgSrc(FALLBACK_IMAGE)
        }
      }}
    />
  )
}

export function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [selectedCategory, setSelectedCategory] = useState<string>("All")

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
    selectedCategory === "All" ? staticProducts : staticProducts.filter((p) => p.category === selectedCategory)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    const url = category === "All" ? "/products" : `/products?category=${encodeURIComponent(category)}`
    window.history.pushState({}, "", url)
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
              ? `Explore our complete catalog of ${staticProducts.length}+ promotional products`
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
                  <ProductImage src={product.image} alt={product.imageAlt} />
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

        <div className="text-center mt-16">
          <Link
            href="#quote"
            className="inline-block bg-secondary text-secondary-foreground px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
          >
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </main>
  )
}
