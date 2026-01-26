import Button from '@/components/ui/button'
import { Heading, Text } from '@/components/ui/typography'
import Container from '@/components/ui/container'

interface CTASectionProps {
  title: string
  description?: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  background?: 'light' | 'gray' | 'primary'
  centered?: boolean
}

export default function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  background = 'primary',
  centered = true
}: CTASectionProps) {
  const backgroundClasses = {
    light: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-blue-600 text-white'
  }
  
  const textClasses = background === 'primary' 
    ? 'text-white' 
    : 'text-gray-900'

  const descriptionClasses = background === 'primary'
    ? 'text-blue-100'
    : 'text-gray-600'

  return (
    <div className={`${backgroundClasses[background]} ${background !== 'light' ? 'py-20' : 'py-16'}`}>
      <Container size="md">
        <div className={`text-center ${centered ? '' : 'text-left'}`}>
          <Heading 
            level="h2" 
            size="3xl" 
            weight="bold" 
            className={`mb-4 ${textClasses}`}
          >
            {title}
          </Heading>
          
          {description && (
            <Text 
              size="lg" 
              className={`mb-8 max-w-2xl mx-auto ${descriptionClasses} ${!centered ? 'ml-0' : ''}`}
            >
              {description}
            </Text>
          )}
          
          <div className={`flex flex-col sm:flex-row gap-4 ${centered ? 'justify-center' : ''}`}>
            <Button
              variant={background === 'primary' ? 'secondary' : 'primary'}
              size="lg"
              href={primaryCTA.href}
              className={background === 'primary' 
                ? 'bg-white text-blue-600 hover:bg-gray-100' 
                : 'bg-blue-600 hover:bg-blue-700'
              }
            >
              {primaryCTA.text}
            </Button>
            
            {secondaryCTA && (
              <Button
                variant={background === 'primary' ? 'outline' : 'outline'}
                size="lg"
                href={secondaryCTA.href}
                className={background === 'primary'
                  ? 'border-white text-white hover:bg-white hover:text-blue-600'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}