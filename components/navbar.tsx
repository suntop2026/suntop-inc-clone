"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"

const megaMenuData = {
  Apparel: [
    {
      name: "T-Shirts",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=300",
      alt: "Custom t-shirts",
    },
    {
      name: "Polos",
      image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=300",
      alt: "Branded polo shirts",
    },
    {
      name: "Hats",
      image: "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?auto=format&fit=crop&q=80&w=300",
      alt: "Custom hats and caps",
    },
    {
      name: "Hoodies",
      image: "https://images.unsplash.com/photo-1556821840393-ed5832f48f18?auto=format&fit=crop&q=80&w=300",
      alt: "Custom branded hoodies",
    },
  ],
  Drinkware: [
    {
      name: "Water Bottles",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=300",
      alt: "Branded water bottles",
    },
    {
      name: "Mugs",
      image: "https://images.unsplash.com/photo-1514228742587-6b4df1ef0f7d?auto=format&fit=crop&q=80&w=300",
      alt: "Custom coffee mugs",
    },
    {
      name: "Tumblers",
      image: "https://images.unsplash.com/photo-1577705998148-6bd4f3961bb2?auto=format&fit=crop&q=80&w=300",
      alt: "Insulated tumblers",
    },
    {
      name: "Glassware",
      image: "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?auto=format&fit=crop&q=80&w=300",
      alt: "Custom glassware",
    },
  ],
  Tech: [
    {
      name: "USB Drives",
      image: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?auto=format&fit=crop&q=80&w=300",
      alt: "Branded USB drives",
    },
    {
      name: "Power Banks",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=300",
      alt: "Promotional power banks",
    },
    {
      name: "Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300",
      alt: "Branded headphones",
    },
    {
      name: "Phone Accessories",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&q=80&w=300",
      alt: "Phone accessories",
    },
  ],
  Office: [
    {
      name: "Pens",
      image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=300",
      alt: "Promotional pens",
    },
    {
      name: "Notebooks",
      image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=300",
      alt: "Custom notebooks",
    },
    {
      name: "Desk Accessories",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=300",
      alt: "Desk accessories",
    },
    {
      name: "Calendars",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=300",
      alt: "Custom calendars",
    },
  ],
  Bags: [
    {
      name: "Tote Bags",
      image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=300",
      alt: "Custom tote bags",
    },
    {
      name: "Backpacks",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=300",
      alt: "Branded backpacks",
    },
    {
      name: "Duffel Bags",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=300",
      alt: "Custom duffel bags",
    },
    {
      name: "Laptop Bags",
      image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=300",
      alt: "Laptop bags",
    },
  ],
  Wellness: [
    {
      name: "Yoga Mats",
      image: "https://images.unsplash.com/photo-1544367567463-d25dfeac3438?auto=format&fit=crop&q=80&w=300",
      alt: "Branded yoga mats",
    },
    {
      name: "Fitness Bands",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=300",
      alt: "Custom fitness bands",
    },
    {
      name: "Stress Balls",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=300",
      alt: "Stress balls",
    },
    {
      name: "Hand Sanitizers",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=300",
      alt: "Hand sanitizers",
    },
  ],
  "Home & Garden": [
    {
      name: "Blankets",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=300",
      alt: "Custom blankets",
    },
    {
      name: "Candles",
      image: "https://images.unsplash.com/photo-1602874801006-a9b7e79a0c58?auto=format&fit=crop&q=80&w=300",
      alt: "Promotional candles",
    },
    {
      name: "Coasters",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=300",
      alt: "Branded coasters",
    },
    {
      name: "Tools",
      image: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?auto=format&fit=crop&q=80&w=300",
      alt: "Custom tools",
    },
  ],
  Other: [
    {
      name: "Keychains",
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=300",
      alt: "Promotional keychains",
    },
    {
      name: "Lanyards",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=300",
      alt: "Custom lanyards",
    },
    {
      name: "Badges",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=300",
      alt: "Branded badges",
    },
    {
      name: "Magnets",
      image: "https://images.unsplash.com/photo-1586380951230-e6703d9183cd?auto=format&fit=crop&q=80&w=300",
      alt: "Promotional magnets",
    },
  ],
}

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1560393464-5c69a73c5770?auto=format&fit=crop&q=80&w=300"

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const handleImageError = (imageSrc: string) => {
    setImageErrors((prev) => new Set(prev).add(imageSrc))
  }

  const getImageSrc = (imageSrc: string) => {
    return imageErrors.has(imageSrc) ? FALLBACK_IMAGE : imageSrc
  }

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
                src={siteConfig.logo.url || "/placeholder.svg"}
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

          {/* Desktop Menu - 8 categories */}
          <div className="hidden lg:flex items-center gap-1">
            {Object.keys(megaMenuData).map((category) => (
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

                {activeMenu === category && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                    <div className="bg-card border border-border rounded-lg shadow-2xl p-6 w-[600px]">
                      <div className="grid grid-cols-4 gap-4 mb-4">
                        {megaMenuData[category as keyof typeof megaMenuData].map((item) => (
                          <Link
                            key={item.name}
                            href={getCategoryUrl(category)}
                            className="group flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                          >
                            <div className="w-[120px] h-[120px] rounded-lg overflow-hidden border border-border relative bg-muted">
                              <img
                                src={getImageSrc(item.image) || "/placeholder.svg"}
                                alt={item.alt}
                                width={120}
                                height={120}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                onError={() => handleImageError(item.image)}
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

          {/* Desktop CTA Button */}
          <Link
            href="#quote"
            className="hidden lg:block bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>

          <button className="lg:hidden text-primary-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-card z-40 overflow-y-auto">
          <div className="p-4 space-y-2">
            {Object.keys(megaMenuData).map((category) => (
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
                    {megaMenuData[category as keyof typeof megaMenuData].map((item) => (
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
              href="#quote"
              className="block w-full bg-secondary text-secondary-foreground text-center px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-4"
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
