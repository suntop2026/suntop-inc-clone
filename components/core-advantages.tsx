"use client"

import { Zap, Shield, Palette, Globe, Users, TrendingDown } from "lucide-react"

export function CoreAdvantages() {
  const advantages = [
    {
      icon: Zap,
      title: "Fast Production",
      description: "Rapid turnaround times without compromising quality. Get your products market-ready in days, not weeks.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified manufacturing with rigorous quality control at every production stage. Your satisfaction guaranteed.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Palette,
      title: "Full Customization",
      description: "Unlimited design possibilities. From simple logos to complex artwork, we bring your vision to life with precision.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Globe,
      title: "Global Shipping",
      description: "Reliable international logistics to over 150 countries. Competitive rates and fast delivery worldwide.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated account managers and design specialists. Personalized service from inquiry to delivery.",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: TrendingDown,
      title: "Best Pricing",
      description: "Competitive wholesale rates with volume discounts. Maximum value for your promotional investment.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose SUNTOP INC</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-leading expertise combined with cutting-edge technology and customer-first service
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-secondary transition-all duration-300"
              >
                {/* Icon Container */}
                <div className={`${advantage.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-8 w-8 ${advantage.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>

                {/* Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1 ${advantage.color.replace("text-", "bg-")} rounded-b-xl w-0 group-hover:w-full transition-all duration-300`}></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to elevate your brand with premium promotional products?
          </p>
          <a
            href="/quote"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}
