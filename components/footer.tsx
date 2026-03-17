"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { siteConfig } from "@/config/site-config"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src={siteConfig.logo.url}
                alt={siteConfig.logo.alt}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold tracking-tight">{siteConfig.companyName}</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 text-pretty">
              Your trusted partner for custom promotional products. Bringing brands to life since 2008.
            </p>
            <div className="flex gap-3">
              <Link href={siteConfig.socials.facebook} className="bg-secondary/20 hover:bg-secondary/30 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href={siteConfig.socials.twitter} className="bg-secondary/20 hover:bg-secondary/30 p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href={siteConfig.socials.instagram} className="bg-secondary/20 hover:bg-secondary/30 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href={siteConfig.socials.linkedin} className="bg-secondary/20 hover:bg-secondary/30 p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/factory" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Factory Tour
                </Link>
              </li>
              <li>
                <Link href="/ai-design" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  AI Design Lab
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-secondary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-primary-foreground/60 uppercase font-bold mb-1">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-primary-foreground/60 uppercase font-bold mb-1">Phone</p>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-primary-foreground/60 uppercase font-bold mb-1">Address</p>
                  <p className="text-primary-foreground/80">
                    {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}, {siteConfig.address.country}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Person */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-secondary">Our Team</h3>
            <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/20">
              <p className="text-sm text-primary-foreground/80 italic mb-4">
                "We are committed to providing the best promotional solutions for your brand."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                  GP
                </div>
                <div>
                  <p className="font-bold text-secondary">{siteConfig.contactPerson}</p>
                  <p className="text-xs text-primary-foreground/60">Sales Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved. Built with precision and pride.</p>
        </div>
      </div>
    </footer>
  )
}
