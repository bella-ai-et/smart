import { Heading, Text } from '@/components/ui/typography'
import Container, { Grid } from '@/components/ui/container'
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
  cols?: 2 | 3 | 4
}

export default function FeaturesSection({
  title,
  subtitle,
  features,
  cols = 3
}: FeaturesSectionProps) {
  return (
    <Container size="lg" padding="lg">
      <div className="text-center mb-16">
        <Heading level="h2" size="3xl" weight="bold" className="mb-4">
          {title}
        </Heading>
        {subtitle && (
          <Text size="xl" className="text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </Text>
        )}
      </div>
      
      <Grid cols={cols} gap="lg">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            hover={true} 
            padding="lg"
            className="text-center h-full"
          >
            <CardHeader>
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded" />
              </div>
              
              <Heading level="h3" size="xl" weight="semibold" className="mb-4">
                {feature.title}
              </Heading>
            </CardHeader>
            
            <CardContent>
              <Text className="text-gray-600 leading-relaxed">
                {feature.description}
              </Text>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}