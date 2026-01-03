import { Button } from "@/components/ui/button"
import { CheckCircle, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />

      {/* Decorative Stars */}
      <div className="absolute inset-0 opacity-20 z-10">
        <Star className="absolute top-20 left-10 h-8 w-8 text-secondary animate-pulse" />
        <Star
          className="absolute top-40 right-20 h-6 w-6 text-secondary animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <Star
          className="absolute bottom-40 left-1/4 h-4 w-4 text-sky-400 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <Star
          className="absolute top-1/3 right-1/3 h-5 w-5 text-secondary animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <Star
          className="absolute bottom-20 right-10 h-7 w-7 text-sky-400 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 text-balance leading-tight">
              Premium Custom Swag for <span className="text-secondary">Global Brands</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed max-w-xl">
              High-quality promotional products, factory-direct pricing, and seamless global distribution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="#quote">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:opacity-90 text-lg px-10 py-7 shadow-xl w-full sm:w-auto"
                >
                  Get Instant Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-10 py-7 w-full sm:w-auto bg-transparent"
                >
                  View Products
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">ISO 9001 Certified</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">Free Design Support</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">BSCI Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">100% Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Grid Visual */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left - Large */}
              <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={siteConfig.hero.productShowcase.tshirts.url || "/placeholder.svg"}
                  alt={siteConfig.hero.productShowcase.tshirts.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <div className="text-primary-foreground">
                    <p className="font-bold text-xl">Custom Apparel</p>
                    <p className="text-sm opacity-90">Starting at $4.99</p>
                  </div>
                </div>
              </div>

              {/* Bottom Left */}
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={siteConfig.hero.productShowcase.mugs.url || "/placeholder.svg"}
                  alt={siteConfig.hero.productShowcase.mugs.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                  <p className="text-primary-foreground font-bold">Drinkware</p>
                </div>
              </div>

              {/* Bottom Right */}
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={siteConfig.hero.productShowcase.tech.url || "/placeholder.svg"}
                  alt={siteConfig.hero.productShowcase.tech.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                  <p className="text-primary-foreground font-bold">Tech Items</p>
                </div>
              </div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl p-4 flex gap-8 w-max">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-muted-foreground text-xs">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5,000+</div>
                <div className="text-muted-foreground text-xs">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground text-xs">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
