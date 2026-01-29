'use client'

import Card, { CardHeader, CardContent } from '@/components/ui/card'

interface FeaturesSectionProps {
  title: string
  subtitle?: string
  features: Array<{
    title: string
    description: string
    icon?: string
    image?: string
  }>
  cols?: 1 | 2 | 3 | 4 | 5 | 6
}

export default function FeaturesSection({
  title,
  subtitle,
  features,
  cols = 3,
}: FeaturesSectionProps) {
  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  }

  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Floating gradient orbs */}
        <div className="absolute top-1/3 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -left-64 w-80 h-80 bg-muted/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          {subtitle && (
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-foreground/40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
              </span>
              <span className="text-muted-foreground font-medium tracking-wide uppercase text-sm">
                {subtitle}
              </span>
            </div>
          )}

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight text-balance">
            {title}
          </h2>
        </div>

        {/* Features Grid */}
        <div className={`grid ${gridColsClass[cols]} gap-6 lg:gap-8`}>
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-background to-muted/20 border border-border/50 hover:border-border/80 transition-all duration-500 hover:shadow-lg h-full"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="pb-0 px-6 pt-6">
                {/* Feature Icon Container */}
                <div className="relative mb-6">
                  <div className="inline-flex">
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-primary/40 transition-all duration-300">
                      {/* Icon placeholder - can be replaced with actual icon or image */}
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/60 to-primary/40 group-hover:from-primary/80 group-hover:to-primary/60 transition-all duration-300" />
                    </div>
                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-500 pointer-events-none" />
                  </div>
                </div>

                {/* Feature Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                {/* Feature Description */}
                <p className="text-muted-foreground leading-relaxed text-balance text-sm sm:text-base">
                  {feature.description}
                </p>

                {/* Subtle indicator */}
                <div className="mt-6 pt-6 border-t border-border/30 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground/60 font-medium">
                    Learn more
                  </span>
                  <svg
                    className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badge or call-to-action section */}
        <div className="mt-20 pt-20 border-t border-border/30 text-center">
          <p className="text-muted-foreground mb-4">
            Trusted by teams building world-class products
          </p>
          <div className="flex items-center justify-center gap-8 opacity-50 flex-wrap">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 border border-border/20"
              >
                <div className="w-5 h-5 rounded bg-foreground/20" />
                <span className="text-sm font-medium text-foreground/60">Brand {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
