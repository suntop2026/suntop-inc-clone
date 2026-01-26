import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Building2 } from "lucide-react"

export const metadata = {
  title: "Contact Us - SUNTOP INC",
  description: "Get in touch with SUNTOP INC for custom promotional products and bulk merchandise inquiries.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our custom promotional products? We'd love to hear from you. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information Cards */}
            
            {/* Email Card */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="text-muted-foreground mb-2">Send us an email anytime</p>
              <a href="mailto:suntopay@outlook.com" className="text-secondary font-semibold hover:underline">
                suntopay@outlook.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Phone</h3>
              </div>
              <p className="text-muted-foreground mb-2">Call us during business hours</p>
              <a href="tel:+19198999969" className="text-secondary font-semibold hover:underline">
                +1 (919) 899-9969
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Address</h3>
              </div>
              <p className="text-muted-foreground mb-2">Visit our office</p>
              <address className="text-secondary font-semibold not-italic">
                20533 East Walnut Drive North<br />
                Diamond Bar, CA 91789<br />
                United States
              </address>
            </div>
          </div>

          {/* Company Details Section */}
          <div className="bg-card border border-border rounded-lg p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column - Company Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Company Information</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Company Name
                    </h3>
                    <p className="text-lg font-semibold text-primary">SUNTOP INC</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Contact Person
                    </h3>
                    <p className="text-lg font-semibold text-primary">Xiangcheng Zhang</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Email Address
                    </h3>
                    <a href="mailto:suntopay@outlook.com" className="text-lg font-semibold text-secondary hover:underline">
                      suntopay@outlook.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Phone Number
                    </h3>
                    <a href="tel:+19198999969" className="text-lg font-semibold text-secondary hover:underline">
                      +1 (919) 899-9969
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Address */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Office Location</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Street Address
                    </h3>
                    <p className="text-lg font-semibold text-primary">20533 East Walnut Drive North</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      City/Town
                    </h3>
                    <p className="text-lg font-semibold text-primary">Diamond Bar</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        State
                      </h3>
                      <p className="text-lg font-semibold text-primary">California</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        ZIP Code
                      </h3>
                      <p className="text-lg font-semibold text-primary">91789</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Country
                    </h3>
                    <p className="text-lg font-semibold text-primary">United States of America</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today to discuss your custom promotional product needs and get a quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:suntopay@outlook.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Send Email
              </a>
              <a
                href="tel:+19198999969"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground/20 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/30 transition-colors border border-primary-foreground/30"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
