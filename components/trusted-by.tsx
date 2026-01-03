export function TrustedBy() {
  const companies = [
    { name: "TechCorp", initial: "TC" },
    { name: "GlobalBrand", initial: "GB" },
    { name: "InnovateCo", initial: "IC" },
    { name: "NextGen", initial: "NG" },
    { name: "FutureGroup", initial: "FG" },
    { name: "PrimeSolutions", initial: "PS" },
  ]

  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by Leading Global Brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              {/* SVG-based company logo placeholder */}
              <div className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg bg-muted/30">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{company.initial}</span>
                </div>
                <span className="text-sm font-semibold text-muted-foreground">{company.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
