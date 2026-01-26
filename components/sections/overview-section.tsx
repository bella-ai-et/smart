import { Heading, Text } from '@/components/ui/typography'
import Container from '@/components/ui/container'
import Button from '@/components/ui/button'

interface OverviewSectionProps {
  title: string
  description: string
  features?: string[]
  cta?: {
    text: string
    href: string
  }
}

export default function OverviewSection({
  title,
  description,
  features,
  cta
}: OverviewSectionProps) {
  return (
    <Container size="lg" padding="lg">
      <div className="text-center max-w-4xl mx-auto">
        <Heading level="h2" size="3xl" weight="bold" className="mb-6">
          {title}
        </Heading>
        
        <Text size="xl" className="text-gray-600 mb-12 leading-relaxed">
          {description}
        </Text>
        
        {features && features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                </div>
                <Text className="text-gray-700 text-left">
                  {feature}
                </Text>
              </div>
            ))}
          </div>
        )}
        
        {cta && (
          <Button
            variant="primary"
            size="lg"
            href={cta.href}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {cta.text}
          </Button>
        )}
      </div>
    </Container>
  )
}