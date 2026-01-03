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
      image: "/custom-printed-t-shirts-for-corporate-branding.jpg",
      alt: "Custom t-shirts",
    },
    {
      name: "Polos",
      image: "/professional-polo-shirts-with-embroidered-logo.jpg",
      alt: "Branded polo shirts",
    },
    {
      name: "Hats",
      image: "/custom-baseball-caps-and-promotional-hats.jpg",
      alt: "Custom hats and caps",
    },
    {
      name: "Hoodies",
      image: "/custom-branded-hoodies-and-sweatshirts.jpg",
      alt: "Custom branded hoodies",
    },
  ],
  Drinkware: [
    {
      name: "Water Bottles",
      image: "/branded-stainless-steel-water-bottles.jpg",
      alt: "Branded water bottles",
    },
    {
      name: "Mugs",
      image: "/custom-coffee-mugs-with-company-logo.jpg",
      alt: "Custom coffee mugs",
    },
    {
      name: "Tumblers",
      image: "/insulated-travel-tumblers-stainless-steel.jpg",
      alt: "Insulated tumblers",
    },
    {
      name: "Glassware",
      image: "/clear-drinking-glasses-glassware-set.jpg",
      alt: "Custom glassware",
    },
  ],
  Tech: [
    {
      name: "USB Drives",
      image: "/branded-usb-flash-drives.jpg",
      alt: "Branded USB drives",
    },
    {
      name: "Power Banks",
      image: "/portable-power-bank-charger.jpg",
      alt: "Promotional power banks",
    },
    {
      name: "Headphones",
      image: "/branded-headphones-and-earbuds.jpg",
      alt: "Branded headphones",
    },
    {
      name: "Phone Accessories",
      image: "/phone-cases-and-accessories.jpg",
      alt: "Phone accessories",
    },
  ],
  Office: [
    {
      name: "Pens",
      image: "/promotional-ballpoint-pens.jpg",
      alt: "Promotional pens",
    },
    {
      name: "Notebooks",
      image: "/custom-branded-notebooks-and-journals.jpg",
      alt: "Custom notebooks",
    },
    {
      name: "Desk Accessories",
      image: "/desk-organizer-and-office-accessories.jpg",
      alt: "Desk accessories",
    },
    {
      name: "Calendars",
      image: "/custom-wall-calendars.jpg",
      alt: "Custom calendars",
    },
  ],
  Bags: [
    {
      name: "Tote Bags",
      image: "/custom-canvas-tote-bags.jpg",
      alt: "Custom tote bags",
    },
    {
      name: "Backpacks",
      image: "/placeholder.svg?height=300&width=300",
      alt: "Branded backpacks",
    },
    {
      name: "Duffel Bags",
      image: "/placeholder.svg?height=300&width=300",
      alt: "Custom duffel bags",
    },
    {
      name: "Laptop Bags",
      image: "/placeholder.svg?height=300&width=300",
      alt: "Laptop bags",
    },
  ],
  Wellness: [
    {
      name: "Yoga Mats",
      image: "/placeholder.svg?height=300&width=300",
      alt: "Branded yoga mats",
    },
    {
      name: "Fitness Bands",
      image: "/placeholder.svg?height=300&width=300",
      alt: "Custom fitness bands",
    },
    {
      name: "Stress Balls",
      image: "/placeholder.svg?height=300&width=300",
      alt: "Stress relief balls",
    },
    {
      name: "Hand Sanitizers",
      image: "/placeholder.svg?height=300&width=300",
      alt: "Hand sanitizer bottles",
    },
  ],
  "Home & Garden": [
    {
      name: "Blankets",
      image: "/placeholder.svg?height=300&width=300",
      alt: "Custom blankets",
    },
    {
      name: "Candles",
      image: "/placeholder.svg?height=300&width=300",
      alt: "Promotional candles",
    },
    {
      name: "Coasters",
      image: "/placeholder.svg?height=300&width=300",
      alt: "Branded coasters",
    },
    {
      name: "Tools",
      image: "/placeholder.svg?height=300&width=300",
      alt: "Custom tools",
    },
  ],
  Other: [
    {
      name: "Keychains",
      image: "/placeholder.svg?height=300&width=300",
      alt: "Promotional keychains",
    },
    {
      name: "Lanyards",
      image: "/placeholder.svg?height=300&width=300",
      alt: "Custom lanyards",
    },
    {
      name: "Badges",
      image: "/placeholder.svg?height=300&width=300",
      alt: "Branded badges",
    },
    {
      name: "Magnets",
      image: "/placeholder.svg?height=300&width=300",
      alt: "Promotional magnets",
    },
  ],
}

const FALLBACK_IMAGE = "/placeholder.svg?height=300&width=300"

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
                                src={item.image || "/placeholder.svg"}
                                alt={item.alt}
                                width={120}
                                height={120}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.src = FALLBACK_IMAGE
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
