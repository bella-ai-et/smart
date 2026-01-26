import type { Testimonial } from '@/types'
import { Heading, Text } from '@/components/ui/typography'
import Container, { Grid } from '@/components/ui/container'
import Card from '@/components/ui/card'

interface TestimonialsSectionProps {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
  featured?: boolean
  cols?: 1 | 2 | 3 | 4
}

export default function TestimonialsSection({
  title = "What Our Clients Say",
  subtitle,
  testimonials,
  featured = true,
  cols = 3
}: TestimonialsSectionProps) {
  const displayTestimonials = featured 
    ? testimonials.filter(t => t.featured)
    : testimonials

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
        {displayTestimonials.map((testimonial) => (
          <Card 
            key={testimonial.id} 
            hover={true} 
            padding="lg"
            className="h-full flex flex-col"
          >
            {/* Rating Stars */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 mr-1">
                  {i < testimonial.rating ? (
                    <div className="w-full h-full bg-yellow-400 rounded-sm" />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded-sm" />
                  )}
                </div>
              ))}
            </div>
            
            <Text className="text-gray-600 mb-6 flex-1 leading-relaxed">
              "{testimonial.content}"
            </Text>
            
            <div className="flex items-center">
              {/* Avatar Placeholder */}
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0" />
              
              <div>
                <Text weight="semibold" className="text-gray-900">
                  {testimonial.name}
                </Text>
                <Text size="sm" color="muted">
                  {testimonial.role} at {testimonial.company}
                </Text>
                {testimonial.project && (
                  <div className="mt-1">
                    <a 
                      href={testimonial.project.href}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      View Project →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}