import { Award, Truck, Factory } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site-config"

const advantages = [
  {
    icon: Factory,
    title: "In-House Manufacturing",
    description: "100,000 sq ft facility with state-of-the-art equipment for complete quality control",
    image: siteConfig.factory.manufacturing.url,
    alt: siteConfig.factory.manufacturing.alt,
  },
  {
    icon: Truck,
    title: "7-Day Delivery",
    description: "Rush production available with guaranteed fast turnaround on all orders",
    image: siteConfig.factory.delivery.url,
    alt: siteConfig.factory.delivery.alt,
  },
  {
    icon: Award,
    title: "Custom Quality",
    description: "ISO 9001 certified with rigorous quality checks on every single product",
    image: siteConfig.factory.quality.url,
    alt: siteConfig.factory.quality.alt,
  },
]

export function FactorySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            The <span className="text-secondary">SUNTOP</span> Advantage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Factory direct pricing, unmatched quality, and lightning-fast delivery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <Card
              key={advantage.title}
              className="overflow-hidden border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden bg-muted relative">
                <Image
                  src={advantage.image || "/placeholder.svg"}
                  alt={advantage.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6 text-center">
                <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-card-foreground">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
