"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"

const megaMenuData = {
  Apparel: [
    { name: "T-Shirts", image: siteConfig.megaMenu.apparel.tshirts.url, alt: siteConfig.megaMenu.apparel.tshirts.alt },
    { name: "Polos", image: siteConfig.megaMenu.apparel.polos.url, alt: siteConfig.megaMenu.apparel.polos.alt },
    { name: "Hats", image: siteConfig.megaMenu.apparel.hats.url, alt: siteConfig.megaMenu.apparel.hats.alt },
    { name: "Hoodies", image: siteConfig.megaMenu.apparel.hoodies.url, alt: siteConfig.megaMenu.apparel.hoodies.alt },
  ],
  Drinkware: [
    {
      name: "Water Bottles",
      image: siteConfig.megaMenu.drinkware.waterBottles.url,
      alt: siteConfig.megaMenu.drinkware.waterBottles.alt,
    },
    { name: "Mugs", image: siteConfig.megaMenu.drinkware.mugs.url, alt: siteConfig.megaMenu.drinkware.mugs.alt },
    {
      name: "Tumblers",
      image: siteConfig.megaMenu.drinkware.tumblers.url,
      alt: siteConfig.megaMenu.drinkware.tumblers.alt,
    },
    {
      name: "Glassware",
      image: siteConfig.megaMenu.drinkware.glassware.url,
      alt: siteConfig.megaMenu.drinkware.glassware.alt,
    },
  ],
  Tech: [
    { name: "USB Drives", image: siteConfig.megaMenu.tech.usbDrives.url, alt: siteConfig.megaMenu.tech.usbDrives.alt },
    {
      name: "Power Banks",
      image: siteConfig.megaMenu.tech.powerBanks.url,
      alt: siteConfig.megaMenu.tech.powerBanks.alt,
    },
    {
      name: "Headphones",
      image: siteConfig.megaMenu.tech.headphones.url,
      alt: siteConfig.megaMenu.tech.headphones.alt,
    },
    {
      name: "Phone Accessories",
      image: siteConfig.megaMenu.tech.phoneAccessories.url,
      alt: siteConfig.megaMenu.tech.phoneAccessories.alt,
    },
  ],
  Office: [
    { name: "Pens", image: siteConfig.megaMenu.office.pens.url, alt: siteConfig.megaMenu.office.pens.alt },
    {
      name: "Notebooks",
      image: siteConfig.megaMenu.office.notebooks.url,
      alt: siteConfig.megaMenu.office.notebooks.alt,
    },
    {
      name: "Desk Accessories",
      image: siteConfig.megaMenu.office.deskAccessories.url,
      alt: siteConfig.megaMenu.office.deskAccessories.alt,
    },
    {
      name: "Calendars",
      image: siteConfig.megaMenu.office.calendars.url,
      alt: siteConfig.megaMenu.office.calendars.alt,
    },
  ],
  Bags: [
    { name: "Tote Bags", image: siteConfig.megaMenu.bags.toteBags.url, alt: siteConfig.megaMenu.bags.toteBags.alt },
    { name: "Backpacks", image: siteConfig.megaMenu.bags.backpacks.url, alt: siteConfig.megaMenu.bags.backpacks.alt },
    {
      name: "Duffel Bags",
      image: siteConfig.megaMenu.bags.duffelBags.url,
      alt: siteConfig.megaMenu.bags.duffelBags.alt,
    },
    {
      name: "Laptop Bags",
      image: siteConfig.megaMenu.bags.laptopBags.url,
      alt: siteConfig.megaMenu.bags.laptopBags.alt,
    },
  ],
  Wellness: [
    {
      name: "Yoga Mats",
      image: siteConfig.megaMenu.wellness.yogaMats.url,
      alt: siteConfig.megaMenu.wellness.yogaMats.alt,
    },
    {
      name: "Fitness Bands",
      image: siteConfig.megaMenu.wellness.fitnessBands.url,
      alt: siteConfig.megaMenu.wellness.fitnessBands.alt,
    },
    {
      name: "Stress Balls",
      image: siteConfig.megaMenu.wellness.stressBalls.url,
      alt: siteConfig.megaMenu.wellness.stressBalls.alt,
    },
    {
      name: "Hand Sanitizers",
      image: siteConfig.megaMenu.wellness.handSanitizers.url,
      alt: siteConfig.megaMenu.wellness.handSanitizers.alt,
    },
  ],
  "Home & Garden": [
    {
      name: "Blankets",
      image: siteConfig.megaMenu.homeGarden.blankets.url,
      alt: siteConfig.megaMenu.homeGarden.blankets.alt,
    },
    {
      name: "Candles",
      image: siteConfig.megaMenu.homeGarden.candles.url,
      alt: siteConfig.megaMenu.homeGarden.candles.alt,
    },
    {
      name: "Coasters",
      image: siteConfig.megaMenu.homeGarden.coasters.url,
      alt: siteConfig.megaMenu.homeGarden.coasters.alt,
    },
    { name: "Tools", image: siteConfig.megaMenu.homeGarden.tools.url, alt: siteConfig.megaMenu.homeGarden.tools.alt },
  ],
  Other: [
    { name: "Keychains", image: siteConfig.megaMenu.other.keychains.url, alt: siteConfig.megaMenu.other.keychains.alt },
    { name: "Lanyards", image: siteConfig.megaMenu.other.lanyards.url, alt: siteConfig.megaMenu.other.lanyards.alt },
    { name: "Badges", image: siteConfig.megaMenu.other.badges.url, alt: siteConfig.megaMenu.other.badges.alt },
    { name: "Magnets", image: siteConfig.megaMenu.other.magnets.url, alt: siteConfig.megaMenu.other.magnets.alt },
  ],
}

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)

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
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary-foreground hover:text-secondary transition-colors">
                  {category}
                  <ChevronDown className="h-4 w-4" />
                </button>

                {activeMenu === category && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                    <div className="bg-card border border-border rounded-lg shadow-2xl p-6 w-[600px]">
                      <div className="grid grid-cols-4 gap-4 mb-4">
                        {megaMenuData[category as keyof typeof megaMenuData].map((item) => (
                          <Link
                            key={item.name}
                            href="/products"
                            className="group flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                          >
                            <div className="w-full aspect-square rounded-lg overflow-hidden border border-border relative">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                sizes="150px"
                              />
                            </div>
                            <span className="text-xs font-medium text-center text-card-foreground">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/products"
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
                        href="/products"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
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
