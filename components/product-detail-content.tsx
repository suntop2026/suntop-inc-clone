"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Package, Truck, Clock, Tag } from "lucide-react"
import Link from "next/link"

interface Product {
  id: string
  name: string
  category: string
  price: number
  moq: number
  image: string
  images: string[]
  description: string
  summary: string
  specs: Record<string, string>
  price_breaks: { quantity: number; price: number }[]
  slug: string
  colors: string[]
}

export function ProductDetailContent({ slug }: { slug: string }) {
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState("")
  const [activeTab, setActiveTab] = useState("details")

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("/api/products")
        const data = await response.json()
        const found = data.products.find((p: any) => p.slug === slug)
        if (found) {
          setProduct(found)
          setActiveImage(found.image)
        }
      } catch (err) {
        console.error("Error fetching product:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [slug])

  if (loading) return <div className="max-w-7xl mx-auto px-4 py-20 text-center">Loading product details...</div>
  if (!product) return <div className="max-w-7xl mx-auto px-4 py-20 text-center">Product not found.</div>

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Link href="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Catalog
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-xl overflow-hidden border-2 border-muted bg-white relative">
            <img src={activeImage} alt={product.name} className="w-full h-full object-contain p-4" />
          </div>
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-secondary' : 'border-transparent hover:border-muted'}`}
                >
                  <img src={img} alt={`${product.name} ${i+1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-sm font-medium text-secondary uppercase tracking-wider">{product.category}</div>
              <span className="text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground">SKU: {product.id}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{product.name}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{product.summary || product.description}</p>
          </div>

          <div className="bg-muted/30 rounded-xl p-6 mb-8">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-secondary">As low as ${product.price.toFixed(2)}</span>
              <span className="text-muted-foreground">/ unit</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Package className="h-4 w-4" /> Minimum Order: {product.moq} units
            </div>
            
            <button 
              onClick={() => router.push(`/quote?product=${encodeURIComponent(product.name)}`)}
              className="w-full py-4 text-lg font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg transition-colors"
            >
              Get a Custom Quote
            </button>
          </div>

          {/* Price Breaks Table */}
          {product.price_breaks && product.price_breaks.length > 0 && (
            <div className="mb-8">
              <h3 className="font-bold mb-4 flex items-center gap-2"><Tag className="h-4 w-4" /> Bulk Pricing</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {product.price_breaks.map((pb, i) => (
                  <div key={i} className="border rounded-lg p-2 text-center bg-white">
                    <div className="text-xs text-muted-foreground">{pb.quantity}+</div>
                    <div className="font-bold text-secondary">${pb.price.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-secondary mt-0.5" />
              <div>
                <div className="text-xs font-bold uppercase text-muted-foreground">Production Time</div>
                <div className="text-sm font-medium">{product.specs?.["Production Time"] || "Contact for details"}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-secondary mt-0.5" />
              <div>
                <div className="text-xs font-bold uppercase text-muted-foreground">Shipping</div>
                <div className="text-sm font-medium">Worldwide Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Tabs */}
      <div className="w-full">
        <div className="flex border-b mb-8">
          <button 
            onClick={() => setActiveTab("details")}
            className={`px-8 py-4 font-bold border-b-2 transition-colors ${activeTab === "details" ? "border-secondary text-secondary" : "border-transparent text-muted-foreground"}`}
          >
            Product Details
          </button>
          <button 
            onClick={() => setActiveTab("specs")}
            className={`px-8 py-4 font-bold border-b-2 transition-colors ${activeTab === "specs" ? "border-secondary text-secondary" : "border-transparent text-muted-foreground"}`}
          >
            Specifications
          </button>
        </div>
        
        {activeTab === "details" ? (
          <div className="prose prose-slate max-w-none">
            <h3 className="text-2xl font-bold mb-4">Description</h3>
            <p className="text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
              {product.description}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex justify-between py-3 border-b border-muted">
              <span className="font-bold text-primary">Item Number (SKU)</span>
              <span className="text-muted-foreground text-right ml-4">{product.id}</span>
            </div>
            {Object.entries(product.specs || {}).map(([key, value]) => (
              value && value !== "nan" && value !== "None" && (
                <div key={key} className="flex justify-between py-3 border-b border-muted">
                  <span className="font-bold text-primary">{key}</span>
                  <span className="text-muted-foreground text-right ml-4">{value}</span>
                </div>
              )
            ))}
            {product.colors && product.colors.length > 0 && (
              <div className="flex justify-between py-3 border-b border-muted">
                <span className="font-bold text-primary">Available Colors</span>
                <span className="text-muted-foreground text-right ml-4">{product.colors.join(', ')}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
