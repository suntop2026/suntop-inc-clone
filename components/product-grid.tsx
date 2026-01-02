"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

interface Product {
  id: string
  name: string
  category: string
  price: number
  moq: number
  image: string
  imageAlt: string
}

const fallbackProducts: Product[] = [
  {
    id: "1",
    name: "Custom T-Shirts",
    category: "Apparel",
    price: 4.99,
    moq: 50,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    imageAlt: "Custom printed t-shirts for corporate branding",
  },
  {
    id: "2",
    name: "Coffee Mugs",
    category: "Drinkware",
    price: 3.49,
    moq: 100,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop",
    imageAlt: "Custom coffee mugs with company logo",
  },
  {
    id: "3",
    name: "USB Drives",
    category: "Tech",
    price: 6.99,
    moq: 100,
    image: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=600&h=600&fit=crop",
    imageAlt: "Branded USB flash drives",
  },
  {
    id: "4",
    name: "Tote Bags",
    category: "Bags",
    price: 2.99,
    moq: 250,
    image: "https://images.unsplash.com/photo-1591348278863-da4f4c84f58e?w=600&h=600&fit=crop",
    imageAlt: "Custom tote bags for promotional events",
  },
  {
    id: "5",
    name: "Promotional Pens",
    category: "Office",
    price: 0.49,
    moq: 500,
    image: "https://images.unsplash.com/photo-1586943759665-ab7d56e7e940?w=600&h=600&fit=crop",
    imageAlt: "Promotional pens with custom branding",
  },
  {
    id: "6",
    name: "Water Bottles",
    category: "Drinkware",
    price: 5.99,
    moq: 100,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop",
    imageAlt: "Branded water bottles for corporate gifts",
  },
  {
    id: "7",
    name: "Baseball Caps",
    category: "Apparel",
    price: 7.99,
    moq: 50,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop",
    imageAlt: "Custom baseball caps and hats",
  },
  {
    id: "8",
    name: "Power Banks",
    category: "Tech",
    price: 12.99,
    moq: 50,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop",
    imageAlt: "Promotional power banks with logo",
  },
]

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>(fallbackProducts)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  useEffect(() => {
    async function fetchProducts() {
      console.log("[v0] Fetching products from API route...")

      try {
        const response = await fetch("/api/products")
        const data = await response.json()

        console.log("[v0] API response:", data)

        if (data.error) {
          console.warn("[v0] API returned error:", data.error, data.message)
          setError(`${data.message}. Showing sample products.`)
          setProducts(fallbackProducts)
        } else if (data.products && data.products.length > 0) {
          console.log("[v0] Successfully loaded", data.products.length, "products from Airtable")
          setProducts(data.products)
          setError(null)
        } else {
          console.warn("[v0] No products returned from API")
          setError("No products found in Airtable. Showing sample products.")
          setProducts(fallbackProducts)
        }
      } catch (err) {
        console.error("[v0] Failed to fetch products:", err)
        setError("Unable to connect to API. Showing sample products.")
        setProducts(fallbackProducts)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))]
  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Popular Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Browse our most requested promotional items, all customizable with your brand
          </p>

          {error && (
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm max-w-2xl mx-auto">
              <div className="font-semibold mb-1">⚠️ Airtable Connection Notice:</div>
              <div>{error}</div>
            </div>
          )}
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

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-secondary mb-4" />
            <p className="text-muted-foreground">Loading products from Airtable...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href="#" className="group">
                  <Card className="overflow-hidden border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl h-full">
                    <div className="aspect-square overflow-hidden bg-muted relative">
                      <Image
                        src={product.image || "/placeholder.svg?height=400&width=400"}
                        alt={product.imageAlt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=400&width=400"
                        }}
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                      <h3 className="font-semibold text-lg mb-2 text-card-foreground">{product.name}</h3>
                      <div className="space-y-1">
                        <div className="text-xl font-bold text-secondary">From ${product.price.toFixed(2)}</div>
                        {product.moq && <div className="text-sm text-muted-foreground">MOQ: {product.moq} units</div>}
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
          </>
        )}

        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
