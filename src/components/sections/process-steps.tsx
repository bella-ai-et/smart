import Container from '@/components/ui/container'
import { Heading, Text } from '@/components/ui/typography'
import Card from '@/components/ui/card'
import type { ServiceProcessStep } from '@/types'

interface ProcessStepsProps {
  title: string
  steps: ServiceProcessStep[]
  columns?: 2 | 3 | 4
}

export default function ProcessSteps({
  title,
  steps,
  columns = 4
}: ProcessStepsProps) {
  return (
    <Container size="lg" padding="lg">
      <div className="text-center mb-16">
        <Heading level="h2" size="3xl" weight="bold" className="mb-4">
          {title}
        </Heading>
      </div>
      
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
        {steps.map((step, index) => (
          <Card 
            key={index} 
            hover={true} 
            padding="lg" 
            className="text-center h-full relative"
            {...(step.id ? { id: step.id } : {})}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-xl">
              {index + 1}
            </div>
            <Heading level="h3" size="lg" weight="semibold" className="mb-3">
              {step.title}
            </Heading>
            <Text className="text-gray-600 leading-relaxed">
              {step.description}
            </Text>
          </Card>
        ))}
      </div>
    </Container>
  )
}
