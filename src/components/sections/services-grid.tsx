import type { Service } from '@/types'
import Link from 'next/link'

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.cta.href}
              className="group"
            >
              <div className="relative h-full p-6 bg-card border border-border/60 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                {/* Icon */}
                <div className="mb-4 inline-flex">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <div className="w-6 h-6 bg-primary rounded-md" />
                  </div>
                </div>

                {/* Service name */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Description - limit to 2 lines */}
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
