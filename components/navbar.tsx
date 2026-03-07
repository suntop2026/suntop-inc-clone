"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"
import { NAV_DATA, CATEGORIES } from "@/lib/products-data"

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1560393464-5c69a73c5770?q=80&w=300"
const SITE_LOGO = "/logo.png"

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)

  const getCategoryUrl = (category: string) => {
    return `/products?category=${encodeURIComponent(category)}`
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src={siteConfig.logo.url || "/logo.png"}
                alt={siteConfig.logo.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg font-bold text-primary-foreground">
              SUNTOP <span className="text-secondary">INC</span>
            </span>
          </Link>

          {/* Desktop Menu - dynamically generated from NAV_DATA */}
          <div className="hidden lg:flex items-center gap-1">
            {CATEGORIES.map((category) => (
              <div
                key={category}
                className="relative"
                onMouseEnter={() => setActiveMenu(category)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={getCategoryUrl(category)}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary-foreground hover:text-secondary transition-colors"
                >
                  {category}
                  <ChevronDown className="h-4 w-4" />
                </Link>

                {/* Mega dropdown menu */}
                {activeMenu === category && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                    <div className="bg-card border border-border rounded-lg shadow-2xl p-6 w-[600px]">
                      <div className="grid grid-cols-4 gap-4 mb-4">
                        {NAV_DATA[category].map((item) => (
                          <Link
                            key={item.name}
                            href={getCategoryUrl(category)}
                            className="group flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                          >
                            <div className="w-[120px] h-[120px] rounded-lg overflow-hidden border border-border relative bg-gray-100">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.alt}
                                width={120}
                                height={120}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.src = item.fallback || SITE_LOGO
                                  target.style.objectFit = "contain"
                                  target.style.backgroundColor = "rgb(243, 244, 246)"
                                  target.style.padding = "1rem"
                                }}
                                loading="lazy"
                              />
                            </div>
                            <span className="text-xs font-medium text-center text-card-foreground">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={getCategoryUrl(category)}
                        className="block text-center text-sm font-semibold text-secondary hover:underline"
                      >
                        View All {category} →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Menu - Contact & Quote */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-primary-foreground hover:text-secondary transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/ai-design"
              className="px-3 py-2 text-sm font-medium text-primary-foreground hover:text-secondary transition-colors"
            >
              🎨 AI Design Lab
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-primary-foreground hover:text-secondary transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/quote"
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Link>
          </div>

          <button className="lg:hidden text-primary-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-card z-40 overflow-y-auto">
          <div className="p-4 space-y-2">
            {CATEGORIES.map((category) => (
              <div key={category}>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-card-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === category ? null : category)}
                >
                  {category}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${mobileSubmenuOpen === category ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileSubmenuOpen === category && (
                  <div className="pl-4 py-2 space-y-2">
                    {NAV_DATA[category].map((item) => (
                      <Link
                        key={item.name}
                        href={getCategoryUrl(category)}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href={getCategoryUrl(category)}
                      className="block px-4 py-2 text-sm font-semibold text-secondary hover:bg-muted rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View All {category} →
                    </Link>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center px-6 py-3 text-card-foreground hover:bg-muted rounded-lg font-semibold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/ai-design"
              className="block w-full text-center px-6 py-3 text-card-foreground hover:bg-muted rounded-lg font-semibold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              🎨 AI Design Lab
            </Link>
            <Link
              href="/contact"
              className="block w-full text-center px-6 py-3 text-card-foreground hover:bg-muted rounded-lg font-semibold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/quote"
              className="block w-full bg-secondary text-secondary-foreground text-center px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
