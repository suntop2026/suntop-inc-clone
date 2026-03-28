"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"
import { CATEGORIES } from "@/lib/products-data"

const SITE_LOGO = "/logo.png"

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuCloseTimeout, setMenuCloseTimeout] = useState<NodeJS.Timeout | null>(null)

  const getCategoryUrl = (category: string) => {
    return `/products?category=${encodeURIComponent(category)}`
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Icon Only */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12">
              <Image
                src={siteConfig.logo.url || "/logo.png"}
                alt={siteConfig.logo.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu - Simple text-based navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {CATEGORIES.map((category) => (
              <div
                key={category}
                className="relative"
                onMouseEnter={() => {
                  if (menuCloseTimeout) clearTimeout(menuCloseTimeout)
                  setActiveMenu(category)
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => setActiveMenu(null), 150)
                  setMenuCloseTimeout(timeout)
                }}
              >
                <Link
                  href={getCategoryUrl(category)}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary-foreground hover:text-secondary transition-colors"
                >
                  {category}
                  <ChevronDown className="h-4 w-4" />
                </Link>

                {/* Simple text-based dropdown menu */}
                {activeMenu === category && (
                  <div className="absolute left-0 top-full pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-card border border-border rounded-lg shadow-2xl p-4 w-max">
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-3">
                        {category}
                      </p>
                      <p className="text-sm text-card-foreground">
                        Click to view all products in this category
                      </p>
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
              <Link
                key={category}
                href={getCategoryUrl(category)}
                className="block w-full px-4 py-3 text-left font-medium text-card-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category}
              </Link>
            ))}
            <hr className="my-4" />
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
