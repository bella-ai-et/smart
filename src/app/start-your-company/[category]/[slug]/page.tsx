import { notFound } from 'next/navigation'
import { getCompanySetupBySlug, companySetupData } from '@/data/company-setup'
import HeroSection from '@/components/sections/hero-section'
import ContentWithImage from '@/components/sections/content-with-image'
import FeaturesSection from '@/components/sections/features-section'
import ContactForm from '@/components/sections/contact-form'
import Container, { Grid } from '@/components/ui/container'
import { Heading, Text } from '@/components/ui/typography'
import Card, { CardHeader, CardContent } from '@/components/ui/card'
import Button from '@/components/ui/button'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    category: string
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, category } = await params
  const service = getCompanySetupBySlug(slug)

  if (!service || service.category !== category) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
  }
}

export async function generateStaticParams() {
  return companySetupData.map((service) => ({
    category: service.category,
    slug: service.slug,
  }))
}

export default async function CompanySetupPage({ params }: PageProps) {
  const { slug, category } = await params
  const service = getCompanySetupBySlug(slug)

  if (!service || service.category !== category) {
    notFound()
  }

  // Construct Hero data
  const heroData = {
    title: service.hero.title,
    subtitle: service.hero.subtitle,
    description: service.hero.subtitle,
    primaryCTA: {
      text: "Get a Free Consultation",
      href: "#contact"
    },
    backgroundImage: {
      src: service.hero.backgroundImage,
      alt: service.hero.title
    }
  }

  return (
    <>
      <HeroSection data={heroData} />

      {/* What Is Section */}
      <div id="what-is">
        <ContentWithImage
          title={service.whatIs.title}
          description={service.whatIs.description}
          image={service.whatIs.image}
        />
      </div>

      {/* Cost Section */}
      <Container size="lg" padding="lg" className="bg-gray-50">
        <div className="text-center mb-12">
          <Heading level="h2" size="3xl" weight="bold" className="mb-4">
            {service.cost.title}
          </Heading>
        </div>
        <Grid cols={service.cost.packages.length > 2 ? 3 : 2} gap="lg">
            {service.cost.packages.map((pkg, idx) => (
                <Card key={idx} padding="lg" className="h-full border-t-4 border-t-blue-600">
                    <CardHeader>
                        <Heading level="h3" size="xl" weight="bold" className="mb-2 text-blue-900">
                            {pkg.name}
                        </Heading>
                        <Text size="2xl" weight="bold" className="text-blue-600 mb-4">
                            {pkg.price}
                        </Text>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3 mb-8">
                            {pkg.features?.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start">
                                    <span className="mr-2 text-green-500">✓</span>
                                    <Text className="text-gray-600">{feature}</Text>
                                </li>
                            ))}
                        </ul>
                        <div className="text-center">
                            <Button variant="primary" href="#contact" className="w-full">
                                Enquire Now
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </Grid>
      </Container>

      {/* Why Set Up Section */}
      <FeaturesSection
        title={service.whySetup.title}
        features={service.whySetup.cards.map(card => ({
            title: card.title,
            description: card.description
        }))}
      />
      <Container className="text-center pb-16">
          <Button variant="outline" size="lg" href={service.whySetup.ctaHref}>
              {service.whySetup.ctaText}
          </Button>
      </Container>

      {/* Types of Businesses Allowed */}
      <Container size="lg" padding="lg" className="bg-gray-50">
        <div className="text-center mb-16">
            <Heading level="h2" size="3xl" weight="bold" className="mb-4">
                {service.businessTypes.title}
            </Heading>
        </div>
        <Grid cols={3} gap="lg">
            {service.businessTypes.types.map((type, idx) => (
                <Card key={idx} padding="lg" className="h-full">
                    <CardHeader>
                        <Heading level="h3" size="lg" weight="semibold" className="mb-2">
                            {type.name}
                        </Heading>
                    </CardHeader>
                    <CardContent>
                         {type.description && (
                             <Text className="text-gray-600">{type.description}</Text>
                         )}
                    </CardContent>
                </Card>
            ))}
        </Grid>
      </Container>

      {/* Why Choose SmartZone */}
      <ContentWithImage
        title={service.whySmartZone.title}
        description={service.whySmartZone.description}
        image={service.whySmartZone.image}
        features={service.whySmartZone.features}
        reverse={true}
      />

      {/* Contact Section */}
      <div id="contact">
        <ContactForm variant="home" />
      </div>
    </>
  )
}
