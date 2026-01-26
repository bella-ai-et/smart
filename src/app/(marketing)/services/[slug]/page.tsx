import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/data/services'
import HeroSection from '@/components/sections/hero-section'
import OverviewSection from '@/components/sections/overview-section'
import FeaturesSection from '@/components/sections/features-section'
import CTASection from '@/components/sections/cta-section'
import Container from '@/components/ui/container'
import { Heading, Text } from '@/components/ui/typography'
import Card from '@/components/ui/card'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)
  
  if (!service) {
    notFound()
  }

  const serviceHero = {
    title: service.name,
    subtitle: "Expert Digital Solutions",
    description: service.longDescription,
    primaryCTA: service.cta,
    secondaryCTA: {
      text: "View All Services",
      href: "/services"
    },
    ...(service.heroImage ? { backgroundImage: service.heroImage } : {})
  }

  const processFeatures = [
    {
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project strategy."
    },
    {
      title: "Design & Prototyping",
      description: "Our team creates detailed wireframes and prototypes to ensure we're aligned on the vision before development begins."
    },
    {
      title: "Development & Testing",
      description: "We build your solution using industry best practices, followed by rigorous testing to ensure quality and performance."
    },
    {
      title: "Launch & Support",
      description: "We handle the deployment process and provide ongoing support to ensure your solution continues to perform optimally."
    }
  ]

  return (
    <>
      <HeroSection data={serviceHero} />
      
      <OverviewSection 
        title={`Why Choose Our ${service.name} Services?`}
        description={`We specialize in delivering high-quality ${service.name.toLowerCase()} solutions that drive business growth and exceed expectations. Our team brings expertise, creativity, and technical excellence to every project.`}
        features={service.features}
        cta={service.cta}
      />
      
      <Container size="lg" padding="lg">
        <div className="text-center mb-16">
          <Heading level="h2" size="3xl" weight="bold" className="mb-4">
            Our {service.name} Process
          </Heading>
          <Text size="xl" className="text-gray-600">
            We follow a proven methodology to deliver exceptional results
          </Text>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processFeatures.map((feature, index) => (
            <Card key={index} hover={true} padding="lg" className="text-center h-full">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">{index + 1}</span>
              </div>
              <Heading level="h3" size="lg" weight="semibold" className="mb-3">
                {feature.title}
              </Heading>
              <Text className="text-gray-600 leading-relaxed">
                {feature.description}
              </Text>
            </Card>
          ))}
        </div>
      </Container>
      
      <FeaturesSection
        title={`${service.name} Features`}
        subtitle={`Comprehensive features to meet your ${service.name.toLowerCase()} needs`}
        features={service.features.map((feature, index) => ({
          title: feature,
          description: `Professional ${feature.toLowerCase()} capabilities delivered by our expert team with proven methodologies.`,
          icon: `/icons/feature-${index + 1}.svg`
        }))}
        cols={3}
      />
      
      <Container size="lg" padding="lg">
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
          <Heading level="h2" size="3xl" weight="bold" className="mb-4">
            Start Your {service.name} Project
          </Heading>
          <Text size="xl" className="text-gray-600 mb-8">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: service.pricing.currency,
              minimumFractionDigits: 0
            }).format(service.pricing.startingFrom)} starting from
            <span className="block text-lg mt-2">
              Custom quotes available based on your specific requirements
            </span>
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={service.cta.href}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              {service.cta.text}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </Container>
      
      <CTASection
        title="Ready to Get Started?"
        description="Let's discuss how our services can help achieve your business goals and drive digital transformation."
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Other Services",
          href: "/services"
        }}
        background="gray"
      />
    </>
  )
}