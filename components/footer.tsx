import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Suntopify Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
            <p className="text-primary-foreground/80 mb-4 text-pretty">
              Your trusted partner for custom promotional products. Bringing brands to life since 2008.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="bg-secondary/20 hover:bg-secondary/30 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-secondary/20 hover:bg-secondary/30 p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-secondary/20 hover:bg-secondary/30 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-secondary/20 hover:bg-secondary/30 p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Apparel
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Drinkware
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Tech
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Office
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Bags
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Factory Tour
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Terms & Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 SUNTOP INC. All rights reserved. Built with precision and pride.</p>
        </div>
      </div>
    </footer>
  )
}
