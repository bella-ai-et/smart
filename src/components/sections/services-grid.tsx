import type { Service } from '@/types'
import Button from '@/components/ui/button'
import Card, { CardHeader, CardContent, CardFooter } from '@/components/ui/card'

interface ServicesGridProps {
  title?: string
  description?: string
  services: Service[]
  showPricing?: boolean
}

export default function ServicesGrid({
  title,
  description,
  services,
  showPricing = true,
}: ServicesGridProps) {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 lg:py-28">
      {/* Animated gradient orbs background */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-muted/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        {(title || description) && (
          <div className="text-center mb-16 lg:mb-24">
            {title && (
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground text-balance mb-6">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative h-full"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Card className="relative h-full flex flex-col backdrop-blur-sm bg-card/95 border border-border/50 hover:border-border rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/10">
                {/* Gradient top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="pb-6">
                  {/* Icon container with gradient */}
                  <div className="mb-6 inline-flex">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors duration-500">
                        <div className="w-7 h-7 bg-primary rounded-lg" />
                      </div>
                    </div>
                  </div>

                  {/* Service name and description */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 pb-6">
                  {/* Features list */}
                  {service.features && service.features.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide opacity-70">
                        Key Features
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className="mt-1.5 flex-shrink-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-primary/60 group-hover/item:scale-125 transition-transform duration-300" />
                            </div>
                            <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex flex-col items-start gap-4 pt-6 border-t border-border/30">
                  {/* Pricing display */}
                  {showPricing && service.pricing && (
                    <div className="w-full">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">
                        Starting from
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-foreground">
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: service.pricing.currency,
                            minimumFractionDigits: 0,
                          }).format(service.pricing.startingFrom)}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          /{service.pricing.period}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button
                    href={service.cta.href}
                    className="w-full rounded-full py-3 font-medium transition-all duration-300 group-hover:shadow-lg"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {service.cta.text}
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
