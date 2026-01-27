import Container from '@/components/ui/container'
import { Heading, Text } from '@/components/ui/typography'
import Button from '@/components/ui/button'

export default function NotFound() {
  return (
    <Container size="md" padding="lg">
      <div className="text-center py-16">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl font-bold text-gray-400">404</span>
          </div>
        </div>
        
        <Heading level="h1" size="4xl" weight="bold" className="mb-4">
          Service Not Found
        </Heading>
        
        <Text size="xl" className="text-gray-600 mb-8">
          The service you're looking for doesn't exist or has been moved.
        </Text>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Contact Us
          </Button>
          
          <Button
            variant="outline"
            href="/"
          >
            Return Home
          </Button>
        </div>
      </div>
    </Container>
  )
}
