import type { Hero } from '@/types'
import Button from '@/components/ui/button'
import { Heading, Text } from '@/components/ui/typography'
import Container from '@/components/ui/container'

interface HeroSectionProps {
  data: Hero
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-muted/30 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 right-1/3 w-px h-40 bg-gradient-to-t from-transparent via-border to-transparent" />

      <Container size="xl" padding="lg">
        <div className="relative z-10 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto lg:mx-0">
            {/* Subtitle badge */}
            {data.subtitle && (
              <div className="inline-flex items-center gap-2 mb-8 group">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-foreground/40" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
                </span>
                <Text
                  size="lg"
                  color="secondary"
                  className="text-muted-foreground font-medium tracking-wide uppercase text-sm"
                >
                  {data.subtitle}
                </Text>
              </div>
            )}

            {/* Main title with elegant typography */}
            <Heading
              level="h1"
              size="5xl"
              weight="bold"
              className="mb-8 text-foreground tracking-tight text-balance leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {data.title}
            </Heading>

            {/* Description with refined styling */}
            <Text
              size="xl"
              className="mb-12 text-muted-foreground leading-relaxed max-w-2xl text-lg md:text-xl"
            >
              {data.description}
            </Text>

            {/* CTA buttons with modern styling */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                href={data.primaryCTA.href}
                className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 text-base font-medium rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                {data.primaryCTA.text}
              </Button>

              {data.secondaryCTA && (
                <Button
                  variant="outline"
                  size="lg"
                  href={data.secondaryCTA.href}
                  className="border-border text-foreground hover:bg-muted px-8 py-4 text-base font-medium rounded-full transition-all duration-300 group bg-transparent"
                >
                  <span className="flex items-center gap-2">
                    {data.secondaryCTA.text}
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
              )}
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Text className="text-sm text-muted-foreground">
                  Trusted by innovative teams
                </Text>
                <div className="flex items-center gap-8 opacity-60">
                  {/* Placeholder logos - using simple shapes */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-foreground/20" />
                    <span className="text-sm font-medium text-foreground/60">Company</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-foreground/20" />
                    <span className="text-sm font-medium text-foreground/60">Brand</span>
                  </div>
                  <div className="hidden md:flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-foreground/20" />
                    <span className="text-sm font-medium text-foreground/60">Studio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-foreground to-transparent" />
      </div>
    </section>
  )
}
