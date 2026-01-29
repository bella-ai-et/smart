import type { Hero } from '@/types'
import Button from '@/components/ui/button'
import { Heading, Text } from '@/components/ui/typography'
import Container from '@/components/ui/container'

interface HeroSectionProps {
  data: Hero
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
      <Container size="xl" padding="lg">
        <div className="relative z-10 py-24 lg:py-32">
          <div className="max-w-4xl">
            {data.subtitle && (
              <Text size="lg" color="secondary" className="mb-4">
                {data.subtitle}
              </Text>
            )}
            
            <Heading level="h1" size="5xl" weight="bold" className="mb-6">
              {data.title}
            </Heading>
            
            <Text size="xl" className="mb-8 text-gray-300 leading-relaxed">
              {data.description}
            </Text>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                href={data.primaryCTA.href}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {data.primaryCTA.text}
              </Button>
              
              {data.secondaryCTA && (
                <Button
                  variant="outline"
                  size="lg"
                  href={data.secondaryCTA.href}
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  {data.secondaryCTA.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}