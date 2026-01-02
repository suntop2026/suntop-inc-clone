import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "Marketing Director",
    content:
      "SUNTOP INC delivered exceptional quality for our company's 500-piece order. The custom t-shirts exceeded our expectations, and the turnaround time was impressive. Highly recommended for any business looking for reliable promotional products.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Global Events Co.",
    role: "Event Manager",
    content:
      "We've worked with SUNTOP for three years now. Their attention to detail and customer service is unmatched. From branded drinkware to tech accessories, everything arrives perfect every time. A true partner in our brand success.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Wellness Group",
    role: "CEO",
    content:
      "The quality of promotional products from SUNTOP is outstanding. Their design team helped bring our vision to life, and the factory direct pricing made it possible to order larger quantities. Five stars all around!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Trusted by <span className="text-secondary">Thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            See what our clients say about their experience with SUNTOP INC
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-border hover:border-secondary/40 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-secondary/40" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-secondary font-medium">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
