import Image from "next/image"
import { siteConfig } from "@/config/site-config"

export function TrustedBy() {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by Leading Global Brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {siteConfig.trustedBy.map((company) => (
            <div
              key={company.name}
              className="relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={company.url || "/placeholder.svg"}
                alt={company.alt}
                width={140}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
