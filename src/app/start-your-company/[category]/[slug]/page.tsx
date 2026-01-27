import { notFound } from 'next/navigation'
import { getCompanySetupBySlug, companySetupData } from '@/data/company-setup'
import { ajmanFreeZoneData } from '@/data/start-your-company/freezone/ajman-free-zone'
import { dmccData } from '@/data/start-your-company/freezone/dmcc'
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
  
  // Handle Ajman Free Zone with dedicated data
  if (slug === 'ajman-free-zone' && category === 'free-zone') {
    return {
      title: 'Ajman Free Zone Company Setup | Smart Zone',
      description: `Established in ${ajmanFreeZoneData.ajman_free_zone_overview.established}, Ajman Free Zone offers ${ajmanFreeZoneData.ajman_free_zone_overview.key_value_proposition}`,
      keywords: ['Ajman Free Zone', 'Company Setup Ajman', 'UAE Free Zone', 'Business Setup', 'Smart Zone'],
    }
  }

  // Handle DMCC with dedicated data
  if (slug === 'dmcc' && category === 'free-zone') {
    return {
      title: dmccData.seo.title,
      description: dmccData.seo.description,
      keywords: dmccData.seo.keywords,
    }
  }
  
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
  const params = companySetupData.map((service) => ({
    category: service.category,
    slug: service.slug,
  }))
  
  // Add Ajman Free Zone with its dedicated data
  params.push({
    category: 'free-zone',
    slug: 'ajman-free-zone',
  })

  // Add DMCC with its dedicated data
  params.push({
    category: 'free-zone',
    slug: 'dmcc',
  })
  
  return params
}

export default async function CompanySetupPage({ params }: PageProps) {
  const { slug, category } = await params
  
  // Handle Ajman Free Zone with dedicated data file
  if (slug === 'ajman-free-zone' && category === 'free-zone') {
    // Construct Hero data from dedicated file
    const heroData = {
      title: 'Ajman Free Zone',
      subtitle: ajmanFreeZoneData.ajman_free_zone_overview.description,
      description: ajmanFreeZoneData.ajman_free_zone_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
      },
      backgroundImage: {
        src: '/images/hero/ajman-free-zone.jpg',
        alt: 'Ajman Free Zone'
      }
    }

    return (
      <>
        <HeroSection data={heroData} />

        {/* What Is Section */}
        <div id="what-is">
          <ContentWithImage
            title="What is Ajman Free Zone?"
            description={`Established in ${ajmanFreeZoneData.ajman_free_zone_overview.established}, ${ajmanFreeZoneData.ajman_free_zone_overview.description} The free zone features ${ajmanFreeZoneData.ajman_free_zone_overview.infrastructure}, offering ${ajmanFreeZoneData.ajman_free_zone_overview.key_value_proposition}`}
            image="/images/services/ajman-overview.jpg"
          />
        </div>

        {/* Why Set Up Section */}
        <FeaturesSection
          title="Benefits and Incentives"
          features={[
            { 
              title: '100% Foreign Ownership', 
              description: `${ajmanFreeZoneData.benefits_and_incentives.ownership_and_tax[0]} with ${ajmanFreeZoneData.benefits_and_incentives.ownership_and_tax[3]}.` 
            },
            { 
              title: 'Tax Exemptions', 
              description: `${ajmanFreeZoneData.benefits_and_incentives.ownership_and_tax[1]}, plus ${ajmanFreeZoneData.benefits_and_incentives.ownership_and_tax[2]}.` 
            },
            { 
              title: 'Operational Flexibility', 
              description: `${ajmanFreeZoneData.benefits_and_incentives.operational_flexibility[0]}, ${ajmanFreeZoneData.benefits_and_incentives.operational_flexibility[1]}, ${ajmanFreeZoneData.benefits_and_incentives.operational_flexibility[2]}, and ${ajmanFreeZoneData.benefits_and_incentives.operational_flexibility[3]}.` 
            },
            { 
              title: 'Financial Advantages', 
              description: `${ajmanFreeZoneData.benefits_and_incentives.financial_and_strategic[0]}, ${ajmanFreeZoneData.benefits_and_incentives.financial_and_strategic[1]}, and ${ajmanFreeZoneData.benefits_and_incentives.financial_and_strategic[4]}.` 
            }
          ]}
        />
        <Container className="text-center pb-16">
            <Button variant="outline" size="lg" href="/contact">
                Get Started with Ajman Free Zone
            </Button>
        </Container>

        {/* Types of Businesses Allowed */}
        <Container size="lg" padding="lg" className="bg-gray-50">
          <div className="text-center mb-16">
              <Heading level="h2" size="3xl" weight="bold" className="mb-4">
                  Business License Types
              </Heading>
          </div>
          <Grid cols={3} gap="lg">
              {ajmanFreeZoneData.business_license_types.map((type, idx) => (
                  <Card key={idx} padding="lg" className="h-full">
                      <CardHeader>
                          <Heading level="h3" size="lg" weight="semibold" className="mb-2">
                              {type}
                          </Heading>
                      </CardHeader>
                      <CardContent>
                        <Text className="text-gray-600">&nbsp;</Text>
                      </CardContent>
                  </Card>
              ))}
          </Grid>
        </Container>

        {/* Why Choose SmartZone */}
        <ContentWithImage
          title="Why Choose Smart Zone?"
          description={`${ajmanFreeZoneData.service_provider_details.provider_name} is a ${ajmanFreeZoneData.service_provider_details.credentials.status} with ${ajmanFreeZoneData.service_provider_details.credentials.experience}, having incorporated ${ajmanFreeZoneData.service_provider_details.credentials.track_record} with a ${ajmanFreeZoneData.service_provider_details.credentials.retention_rate}. Our services include ${ajmanFreeZoneData.service_provider_details.services_offered[0]}, ${ajmanFreeZoneData.service_provider_details.services_offered[1]}, ${ajmanFreeZoneData.service_provider_details.services_offered[2]}, and ${ajmanFreeZoneData.service_provider_details.services_offered[3]}.`}
          image="/images/services/why-smartzone.jpg"
          features={[
            ajmanFreeZoneData.service_provider_details.credentials.status,
            ajmanFreeZoneData.service_provider_details.credentials.experience,
            ajmanFreeZoneData.service_provider_details.credentials.track_record,
            ajmanFreeZoneData.service_provider_details.credentials.retention_rate
          ]}
          reverse={true}
        />

        {/* Contact Section */}
        <div id="contact">
          <ContactForm variant="home" />
        </div>
      </>
    )
  }

  // Handle DMCC with dedicated data file
  if (slug === 'dmcc' && category === 'free-zone') {
    const heroData = {
      title: dmccData.hero.title,
      subtitle: dmccData.hero.subtitle,
      description: dmccData.dmcc_free_zone_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
      },
      backgroundImage: {
        src: dmccData.hero.backgroundImage,
        alt: dmccData.hero.title
      }
    }

    return (
      <>
        <HeroSection data={heroData} />

        {/* What Is Section */}
        <div id="what-is">
          <ContentWithImage
            title="What is DMCC?"
            description={`${dmccData.dmcc_free_zone_overview.description} ${dmccData.dmcc_free_zone_overview.infrastructure} ${dmccData.dmcc_free_zone_overview.accolades}`}
            image="/images/services/dmcc-overview.jpg"
          />
        </div>

        {/* Benefits and Incentives */}
        <FeaturesSection
          title="Benefits and Incentives"
          features={[
            {
              title: "Ownership & Tax",
              description: dmccData.benefits_and_incentives.ownership_and_tax.join('. ')
            },
            {
              title: "Operational Flexibility",
              description: dmccData.benefits_and_incentives.operational_flexibility.join('. ')
            },
            {
              title: "Strategic Advantages",
              description: dmccData.benefits_and_incentives.strategic_advantages.join('. ')
            }
          ]}
        />

        {/* Financial Requirements */}
        <div className="bg-gray-50 py-16">
            <Container>
                <div className="text-center mb-12">
                    <Heading level="h2" size="3xl" weight="bold">Financial Requirements (2026)</Heading>
                </div>
                <Grid cols={3} gap="lg">
                    <Card padding="lg">
                        <CardHeader><Heading level="h3" size="lg" weight="semibold">Minimum Share Capital</Heading></CardHeader>
                        <CardContent><Text>{dmccData.financial_requirements_2026.minimum_share_capital}</Text></CardContent>
                    </Card>
                    <Card padding="lg">
                        <CardHeader><Heading level="h3" size="lg" weight="semibold">Initial Setup Costs</Heading></CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-4 space-y-2">
                                <li>Application: {dmccData.financial_requirements_2026.initial_setup_costs.application_fee}</li>
                                <li>Registration: {dmccData.financial_requirements_2026.initial_setup_costs.registration_fee}</li>
                                <li>License: {dmccData.financial_requirements_2026.initial_setup_costs.license_fee_range}</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card padding="lg">
                        <CardHeader><Heading level="h3" size="lg" weight="semibold">Ongoing Compliance</Heading></CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-4 space-y-2">
                                {dmccData.financial_requirements_2026.ongoing_compliance.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>
            </Container>
        </div>

        {/* Setup Timeline */}
        <FeaturesSection
            title="Setup Timeline"
            features={dmccData.setup_timeline.phases.map((phase) => {
                const [title, desc] = phase.split(':');
                return {
                    title: title || phase,
                    description: desc || ''
                };
            })}
        />
        <Container className="text-center pb-16">
            <Text className="text-lg font-medium text-gray-700">
                Total Duration: {dmccData.setup_timeline.total_duration}
            </Text>
            <div className="mt-8">
                <Button variant="outline" size="lg" href="/contact">
                    Start Your Application
                </Button>
            </div>
        </Container>

        {/* Business License Types */}
        <Container size="lg" padding="lg" className="bg-gray-50">
          <div className="text-center mb-16">
              <Heading level="h2" size="3xl" weight="bold" className="mb-4">
                  Business License Types
              </Heading>
          </div>
          <Grid cols={3} gap="lg">
              {dmccData.business_license_types.map((type, idx) => (
                  <Card key={idx} padding="lg" className="h-full">
                      <CardHeader>
                          <Heading level="h3" size="lg" weight="semibold" className="mb-2">
                              {type}
                          </Heading>
                      </CardHeader>
                  </Card>
              ))}
          </Grid>
        </Container>

        {/* Why Choose SmartZone */}
        <ContentWithImage
          title={dmccData.whySmartZone.title}
          description={dmccData.whySmartZone.description}
          image={dmccData.whySmartZone.image}
          features={dmccData.whySmartZone.features}
          reverse={true}
        />

        {/* Contact Section */}
        <div id="contact">
          <ContactForm variant="home" />
        </div>
      </>
    )
  }

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
