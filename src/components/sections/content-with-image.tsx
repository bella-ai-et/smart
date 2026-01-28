import Image from 'next/image'
import Container from '@/components/ui/container'
import { Heading, Text } from '@/components/ui/typography'
import Button from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ContentWithImageProps {
  title: string
  description: string
  image: string
  imageAlt?: string
  reverse?: boolean
  features?: string[]
  cta?: {
    text: string
    href: string
  }
}

export default function ContentWithImage({
  title,
  description,
  image,
  imageAlt = 'Service image',
  reverse = false,
  features,
  cta
}: ContentWithImageProps) {
  return (
    <Container size="lg" padding="lg">
      <div className={cn(
        "flex flex-col lg:flex-row gap-12 items-center",
        reverse && "lg:flex-row-reverse"
      )}>
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
             {/* Use next/image for optimized image loading */}
            <Image 
              src={image} 
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <Heading level="h2" size="3xl" weight="bold" className="mb-6">
            {title}
          </Heading>
          
          <Text size="lg" className="text-gray-600 mb-8 leading-relaxed">
            {description}
          </Text>
          
          {features && features.length > 0 && (
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <Text className="text-gray-700">{feature}</Text>
                </li>
              ))}
            </ul>
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
      </div>
    </Container>
  )
}
