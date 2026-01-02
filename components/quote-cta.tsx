"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Building2, Upload, Check } from "lucide-react"

export function QuoteCTA() {
  const [fileName, setFileName] = useState<string>("")
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  return (
    <section id="quote" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Request a <span className="text-secondary">Free Quote</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Fill out the form below and our team will respond within 24 hours with a customized quote for your
            promotional product needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div>
            <div className="bg-card border-2 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">Email Us</h4>
                    <p className="text-muted-foreground">sales@suntopify.com</p>
                    <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">Call Us</h4>
                    <p className="text-muted-foreground">1-503-209-2680</p>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9AM-6PM WST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg flex-shrink-0">
                    <Building2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">Visit Our Factory</h4>
                    <p className="text-muted-foreground">Schedule a tour to see our production process</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Why Choose SUNTOP INC?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Factory-direct pricing with no middlemen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Fast 7-day production turnaround</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Free design consultation included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Quality guarantee on all products</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8">
              <form action="https://formspree.io/f/xykzwdor" method="POST" className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold mb-2 text-foreground">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input id="fullName" name="fullName" type="text" required placeholder="John Doe" className="h-11" />
                  </div>

                  <div>
                    <label htmlFor="workEmail" className="block text-sm font-semibold mb-2 text-foreground">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="workEmail"
                      name="workEmail"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="h-11"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold mb-2 text-foreground">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    placeholder="ACME Corporation"
                    className="h-11"
                  />
                </div>

                <div>
                  <label htmlFor="productInterest" className="block text-sm font-semibold mb-2 text-foreground">
                    Product Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    required
                    className="w-full h-11 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">Select a product category...</option>
                    <option value="apparel">Apparel (T-Shirts, Polos, Hoodies)</option>
                    <option value="drinkware">Drinkware (Mugs, Bottles, Tumblers)</option>
                    <option value="tech">Tech Items (USB Drives, Power Banks)</option>
                    <option value="office">Office Supplies (Pens, Notebooks)</option>
                    <option value="bags">Bags (Totes, Backpacks, Duffels)</option>
                    <option value="wellness">Wellness (Yoga Mats, Fitness Items)</option>
                    <option value="home-garden">Home & Garden</option>
                    <option value="other">Other - Please specify in message</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="estimatedQuantity" className="block text-sm font-semibold mb-2 text-foreground">
                    Estimated Quantity <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="estimatedQuantity"
                    name="estimatedQuantity"
                    required
                    className="w-full h-11 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">Select quantity range...</option>
                    <option value="50-100">50-100 units</option>
                    <option value="100-250">100-250 units</option>
                    <option value="250-500">250-500 units</option>
                    <option value="500-1000">500-1,000 units</option>
                    <option value="1000-2500">1,000-2,500 units</option>
                    <option value="2500+">2,500+ units</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Upload Your Logo/Design</label>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
                      isDragging
                        ? "border-secondary bg-secondary/5"
                        : "border-border hover:border-secondary hover:bg-secondary/5"
                    }`}
                  >
                    <input
                      id="fileUpload"
                      name="fileUpload"
                      type="file"
                      accept=".png,.jpg,.jpeg,.pdf,.ai,.svg"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                    {fileName ? (
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">{fileName}</p>
                        <p className="text-xs text-muted-foreground">Click to change file</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">
                          Drag and drop your file here, or click to browse
                        </p>
                        <p className="text-xs text-muted-foreground">PNG, JPG, PDF, AI, SVG up to 10MB</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Please describe your project, preferred colors, deadline, and any special requirements..."
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-secondary text-secondary-foreground hover:opacity-90 font-semibold h-12"
                  >
                    Request Free Quote
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    By submitting this form, you agree to receive communications from SUNTOP INC
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
