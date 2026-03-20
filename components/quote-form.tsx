"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Upload, CheckCircle } from "lucide-react"
import { staticProducts } from "@/lib/static-data"

export function QuoteForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const productParam = searchParams.get("product")

  const [selectedProduct, setSelectedProduct] = useState(productParam || "")
  const [quantity, setQuantity] = useState("50")
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Find product data based on name or slug
  const selectedProductData = staticProducts.find((p) => p.name === selectedProduct || p.slug === selectedProduct || p.id === selectedProduct)
  const minQty = selectedProductData?.moq || 50

  // Update selected product if URL param changes
  useEffect(() => {
    if (productParam) {
      setSelectedProduct(productParam)
    }
  }, [productParam])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!selectedProduct) newErrors.product = "Please select a product"
    if (!quantity) newErrors.quantity = "Please enter a quantity"
    if (Number.parseInt(quantity) < minQty) {
      newErrors.quantity = `Minimum order is ${minQty} units`
    }
    if (!name.trim()) newErrors.name = "Please enter your name"
    if (!email.trim()) newErrors.email = "Please enter your email"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email"
    
    // Company Name is now optional, so no validation needed here

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    // Success state
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }

  if (submitted) {
    return (
      <main className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background to-muted">
        <div className="mx-auto max-w-2xl px-4">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Request Submitted!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for your interest. Our team will contact you within 24 hours.
            </p>
            <Button
              onClick={() => router.push("/")}
              className="bg-secondary text-secondary-foreground hover:opacity-90"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-background to-muted">
      <div className="mx-auto max-w-2xl px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <Card className="shadow-xl">
          <CardHeader className="bg-primary text-primary-foreground">
            <CardTitle className="text-3xl">Get Your Custom Quote</CardTitle>
            <p className="text-primary-foreground/90 mt-2">
              Fill out the form below and our team will provide a detailed quote within 24 hours
            </p>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Selection */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Product <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => {
                    setSelectedProduct(e.target.value)
                    setErrors({ ...errors, product: "" })
                  }}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="">Select a product</option>
                  {staticProducts.map((product) => (
                    <option key={product.id} value={product.id}>
                      Product No: {product.id} - {product.name} (MOQ: {product.moq})
                    </option>
                  ))}
                </select>
                {errors.product && <p className="text-red-500 text-sm mt-1">{errors.product}</p>}
                {selectedProductData && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Selected Product Number: <span className="font-bold text-secondary">{selectedProductData.id}</span>
                  </p>
                )}
              </div>

              {/* Quantity Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Quantity (Min: {minQty}) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value)
                    setErrors({ ...errors, quantity: "" })
                  }}
                  min={minQty}
                  placeholder="Enter quantity"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
              </div>

              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Upload Your Logo (Optional)</label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-secondary transition-colors cursor-pointer relative">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    {logoFile ? logoFile.name : "Drop your logo here to see a mock-up"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Supports: PNG, JPG, PDF (Max 10MB)</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h3 className="font-semibold text-foreground">Contact Information</h3>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                      setErrors({ ...errors, name: "" })
                    }}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setErrors({ ...errors, email: "" })
                    }}
                    placeholder="john@company.com"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Company Name <span className="text-muted-foreground text-xs ml-1">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value)
                    }}
                    placeholder="Your Company"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary text-secondary-foreground hover:opacity-90 text-lg py-6"
              >
                Submit Request
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information will only be used to contact you with your quote.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
