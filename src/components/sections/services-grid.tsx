import type { Service } from '@/types'
import Button from '@/components/ui/button'
import Card, { CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Heading, Text } from '@/components/ui/typography'
import Container, { Grid } from '@/components/ui/container'

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
  showPricing = true 
}: ServicesGridProps) {
  return (
    <Container size="xl" padding="lg">
      {(title || description) && (
        <div className="text-center mb-16">
          {title && (
            <Heading level="h2" size="4xl" weight="bold" className="mb-4">
              {title}
            </Heading>
          )}
          {description && (
            <Text size="xl" className="text-gray-600 max-w-3xl mx-auto">
              {description}
            </Text>
          )}
        </div>
      )}
      
      <Grid cols={3} gap="lg">
        {services.map((service) => (
          <Card 
            key={service.id} 
            hover={true} 
            padding="lg"
            className="h-full flex flex-col"
          >
            <CardHeader>
              <div className="flex items-center mb-4">
                {/* Icon Placeholder */}
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-blue-600 rounded" />
                </div>
                <Heading level="h3" size="xl" weight="semibold">
                  {service.name}
                </Heading>
              </div>
              
              <Text className="text-gray-600 mb-6">
                {service.description}
              </Text>
            </CardHeader>
            
            <CardContent className="flex-1">
              {/* Features List */}
              {service.features && service.features.length > 0 && (
                <div className="mb-6">
                  <Text size="sm" weight="medium" className="mb-3">
                    Key Features:
                  </Text>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
            
            <CardFooter className="flex flex-col items-start">
              {/* Pricing */}
              {showPricing && service.pricing && (
                <div className="mb-4">
                  <Text size="sm" color="muted" className="mb-1">
                    Starting from
                  </Text>
                  <Text size="2xl" weight="bold" color="accent">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: service.pricing.currency,
                      minimumFractionDigits: 0
                    }).format(service.pricing.startingFrom)}
                    <span className="text-sm font-normal text-gray-500">
                      /{service.pricing.period}
                    </span>
                  </Text>
                </div>
              )}
              
              <Button 
                variant="primary" 
                href={service.cta.href}
                className="w-full"
              >
                {service.cta.text}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}