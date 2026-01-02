import { Shield, Award, Truck, HeadphonesIcon } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "Secure Payment",
    description: "SSL encrypted transactions",
  },
  {
    icon: Award,
    title: "Quality Certified",
    description: "ISO 9001:2015 standards",
  },
  {
    icon: Truck,
    title: "Worldwide Shipping",
    description: "Fast & reliable delivery",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Always here to help",
  },
]

export function TrustBadges() {
  return (
    <section className="py-12 bg-muted/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge) => (
            <div key={badge.title} className="flex flex-col items-center text-center gap-3">
              <div className="bg-secondary/20 w-14 h-14 rounded-full flex items-center justify-center">
                <badge.icon className="h-7 w-7 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{badge.title}</p>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
