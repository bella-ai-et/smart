import { notFound } from 'next/navigation'
import { getCompanySetupBySlug, companySetupData } from '@/data/company-setup'
import { ajmanFreeZoneData } from '@/data/start-your-company/freezone/ajman-free-zone'
import { ifzaData } from '@/data/start-your-company/freezone/ifza-dsoa'
import { dmccData } from '@/data/start-your-company/freezone/dmcc'
import { creativeCityFujairahData } from '@/data/start-your-company/freezone/creative-city-fujairah'
import { meydanFreeZoneData } from '@/data/start-your-company/freezone/meydan-free-zone'
import { rakezData } from '@/data/start-your-company/freezone/rakez'
import { shamsData } from '@/data/start-your-company/freezone/shams'
import { spcFreeZoneData } from '@/data/start-your-company/freezone/spc-free-zone'
import { srtipData } from '@/data/start-your-company/freezone/srtip'
import { dubaiMainlandData } from '@/data/start-your-company/mainland/dubai'
import { abuDhabiMainlandData } from '@/data/start-your-company/mainland/abu-dhabi'
import { jafzaOffshoreData } from '@/data/start-your-company/offshore/jafza'
import { rakIccOffshoreData } from '@/data/start-your-company/offshore/rak-icc'
import { ajmanOffshoreData } from '@/data/start-your-company/offshore/ajman'
import HeroSection from '@/components/sections/hero-section'
import ContentWithImage from '@/components/sections/content-with-image'
import FeaturesSection from '@/components/sections/features-section'
import ContactForm from '@/components/sections/contact-form'
import Container, { Grid } from '@/components/ui/container'
import { Heading, Text } from '@/components/ui/typography'
import Card, { CardHeader, CardContent } from '@/components/ui/card'
import Button from '@/components/ui/button'
import type { Metadata } from 'next'
import { Images } from '@/lib/assets'

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
      title: 'Ajman Free Zone Company Setup | JOAB SOLUTIONS',
      description: `Established in ${ajmanFreeZoneData.ajman_free_zone_overview.established}, Ajman Free Zone offers ${ajmanFreeZoneData.ajman_free_zone_overview.key_value_proposition}`,
      keywords: ['Ajman Free Zone', 'Company Setup Ajman', 'UAE Free Zone', 'Business Setup', 'JOAB SOLUTIONS'],
    }
  }

  // Handle IFZA with dedicated data
  if (slug === 'ifza-dsoa' && category === 'free-zone') {
    return {
      title: ifzaData.seo.title,
      description: ifzaData.seo.description,
      keywords: ifzaData.seo.keywords,
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

  // Handle Creative City Fujairah with dedicated data
  if (slug === 'creative-city-fujairah' && category === 'free-zone') {
    return {
      title: creativeCityFujairahData.seo.title,
      description: creativeCityFujairahData.seo.description,
      keywords: creativeCityFujairahData.seo.keywords,
    }
  }

  // Handle Meydan Free Zone with dedicated data
  if (slug === 'meydan-free-zone' && category === 'free-zone') {
    return {
      title: meydanFreeZoneData.seo.title,
      description: meydanFreeZoneData.seo.description,
      keywords: meydanFreeZoneData.seo.keywords,
    }
  }

  // Handle RAKEZ with dedicated data
  if (slug === 'rakez' && category === 'free-zone') {
    return {
      title: rakezData.seo.title,
      description: rakezData.seo.description,
      keywords: rakezData.seo.keywords,
    }
  }

  // Handle SHAMS with dedicated data
  if (slug === 'shams' && category === 'free-zone') {
    return {
      title: shamsData.seo.title,
      description: shamsData.seo.description,
      keywords: shamsData.seo.keywords,
    }
  }

  // Handle SPC Free Zone with dedicated data
  if (slug === 'spc-free-zone' && category === 'free-zone') {
    return {
      title: spcFreeZoneData.seo.title,
      description: spcFreeZoneData.seo.description,
      keywords: spcFreeZoneData.seo.keywords,
    }
  }

  // Handle SRTIP with dedicated data
  if (slug === 'srtip' && category === 'free-zone') {
    return {
      title: srtipData.seo.title,
      description: srtipData.seo.description,
      keywords: srtipData.seo.keywords,
    }
  }

  // Handle Dubai Mainland with dedicated data
  if (slug === 'dubai' && category === 'mainland') {
    return {
      title: dubaiMainlandData.seo.title,
      description: dubaiMainlandData.seo.description,
      keywords: dubaiMainlandData.seo.keywords,
    }
  }

  // Handle Abu Dhabi Mainland with dedicated data
  if (slug === 'abu-dhabi' && category === 'mainland') {
    return {
      title: abuDhabiMainlandData.seo.title,
      description: abuDhabiMainlandData.seo.description,
      keywords: abuDhabiMainlandData.seo.keywords,
    }
  }

  // Handle JAFZA Offshore with dedicated data
  if (slug === 'jafza-offshore' && category === 'offshore') {
    return {
      title: jafzaOffshoreData.seo.title,
      description: jafzaOffshoreData.seo.description,
      keywords: jafzaOffshoreData.seo.keywords,
    }
  }

  // Handle RAK ICC Offshore with dedicated data
  if (slug === 'rak-icc-offshore' && category === 'offshore') {
    return {
      title: rakIccOffshoreData.seo.title,
      description: rakIccOffshoreData.seo.description,
      keywords: rakIccOffshoreData.seo.keywords,
    }
  }

  // Handle Ajman Offshore with dedicated data
  if (slug === 'ajman-offshore' && category === 'offshore') {
    return {
      title: ajmanOffshoreData.seo.title,
      description: ajmanOffshoreData.seo.description,
      keywords: ajmanOffshoreData.seo.keywords,
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

  // Add IFZA with its dedicated data
  params.push({
    category: 'free-zone',
    slug: 'ifza-dsoa',
  })

  // Add DMCC with its dedicated data
  params.push({
    category: 'free-zone',
    slug: 'dmcc',
  })

  // Add Creative City Fujairah with its dedicated data
  params.push({
    category: 'free-zone',
    slug: 'creative-city-fujairah',
  })

  // Add Meydan Free Zone with its dedicated data
  params.push({
    category: 'free-zone',
    slug: 'meydan-free-zone',
  })

  // Add RAKEZ with its dedicated data
  params.push({
    category: 'free-zone',
    slug: 'rakez',
  })

  // Add SHAMS with its dedicated data
  params.push({
    category: 'free-zone',
    slug: 'shams',
  })

  // Add SPC Free Zone with its dedicated data
  params.push({
    category: 'free-zone',
    slug: 'spc-free-zone',
  })

  // Add SRTIP with its dedicated data
  params.push({
    category: 'free-zone',
    slug: 'srtip',
  })

  // Add Dubai Mainland with its dedicated data
  params.push({
    category: 'mainland',
    slug: 'dubai',
  })

  // Add Abu Dhabi Mainland with its dedicated data
  params.push({
    category: 'mainland',
    slug: 'abu-dhabi',
  })

  // Add JAFZA Offshore with its dedicated data
  params.push({
    category: 'offshore',
    slug: 'jafza-offshore',
  })

  // Add RAK ICC Offshore with its dedicated data
  params.push({
    category: 'offshore',
    slug: 'rak-icc-offshore',
  })

  // Add Ajman Offshore with its dedicated data
  params.push({
    category: 'offshore',
    slug: 'ajman-offshore',
  })
  
  return params
}

export default async function CompanySetupPage({ params }: PageProps) {
  const { slug, category } = await params
  
  // Handle JAFZA Offshore with dedicated data file
  if (slug === 'jafza-offshore' && category === 'offshore') {
    const heroData = {
      title: jafzaOffshoreData.hero.title,
      subtitle: jafzaOffshoreData.hero.subtitle,
      description: jafzaOffshoreData.jafza_offshore_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
      }
    }

    return (
      <>
        <HeroSection data={heroData} />

        {/* What Is Section */}
        <div id="what-is">
          <ContentWithImage
            title="What is JAFZA Offshore?"
            description={`${jafzaOffshoreData.jafza_offshore_overview.description} ${jafzaOffshoreData.jafza_offshore_overview.key_advantage}`}
            image={Images.services.jafzaOverview}
          />
        </div>

        {/* Benefits */}
        <FeaturesSection
          title="Benefits and Incentives"
          features={[
            {
              title: "Ownership & Tax",
              description: jafzaOffshoreData.benefits_and_incentives.ownership_and_tax.join('. ')
            },
            {
              title: "Corporate Governance",
              description: jafzaOffshoreData.benefits_and_incentives.corporate_governance.join('. ')
            }
          ]}
        />

        {/* Costs */}
        <div className="bg-gray-50 py-16">
            <Container>
                <div className="text-center mb-12">
                    <Heading level="h2" size="3xl" weight="bold">{jafzaOffshoreData.estimated_setup_costs_2026.title}</Heading>
                </div>
                <Grid cols={2} gap="lg">
                    <Card padding="lg">
                        <CardHeader><Heading level="h3" size="lg" weight="semibold">Initial Setup Fees</Heading></CardHeader>
                        <CardContent>
                             <ul className="list-disc pl-4 space-y-2">
                                <li>Registration: {jafzaOffshoreData.estimated_setup_costs_2026.initial_setup_fees.registration_and_agent_package}</li>
                                <li>Name Approval: {jafzaOffshoreData.estimated_setup_costs_2026.initial_setup_fees.name_approval_fee}</li>
                             </ul>
                        </CardContent>
                    </Card>
                    <Card padding="lg">
                        <CardHeader><Heading level="h3" size="lg" weight="semibold">Annual Renewal</Heading></CardHeader>
                        <CardContent>
                             <ul className="list-disc pl-4 space-y-2">
                                <li>Renewal: {jafzaOffshoreData.estimated_setup_costs_2026.annual_renewal_fees.standard_renewal}</li>
                                <li>Good Standing: {jafzaOffshoreData.estimated_setup_costs_2026.annual_renewal_fees.certificate_of_good_standing}</li>
                             </ul>
                        </CardContent>
                    </Card>
                </Grid>
            </Container>
        </div>

        {/* Business Activities */}
        <Container size="lg" padding="lg">
          <div className="text-center mb-16">
              <Heading level="h2" size="3xl" weight="bold" className="mb-4">
                  Permitted Business Activities
              </Heading>
          </div>
          <Grid cols={2} gap="lg">
              {jafzaOffshoreData.permitted_business_activities.map((type, idx) => (
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

        {/* Why Choose JOAB SOLUTIONS */}
        <ContentWithImage
          title={jafzaOffshoreData.whyChooseUs.title}
          description={jafzaOffshoreData.whyChooseUs.description}
          image={jafzaOffshoreData.whyChooseUs.image}
          features={jafzaOffshoreData.whyChooseUs.features}
          reverse={true}
        />

        {/* Contact Section */}
        <div id="contact">
          <ContactForm variant="home" />
        </div>
      </>
    )
  }

  // Handle RAK ICC Offshore with dedicated data file
  if (slug === 'rak-icc-offshore' && category === 'offshore') {
    const heroData = {
      title: rakIccOffshoreData.hero.title,
      subtitle: rakIccOffshoreData.hero.subtitle,
      description: rakIccOffshoreData.rak_icc_offshore_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
      }
    }

    return (
      <>
        <HeroSection data={heroData} />

        {/* What Is Section */}
        <div id="what-is">
          <ContentWithImage
            title="What is RAK ICC?"
            description={`${rakIccOffshoreData.rak_icc_offshore_overview.description} ${rakIccOffshoreData.rak_icc_offshore_overview.real_estate_benefit}`}
            image={Images.services.rakiccOverview}
          />
        </div>

        {/* Benefits */}
        <FeaturesSection
          title="Benefits and Incentives"
          features={[
            {
              title: "Privacy & Security",
              description: rakIccOffshoreData.benefits_and_incentives.privacy_and_security.join('. ')
            },
            {
              title: "Financial Features",
              description: rakIccOffshoreData.benefits_and_incentives.financial_features.join('. ')
            }
          ]}
        />

        {/* Costs */}
        <div className="bg-gray-50 py-16">
            <Container>
                <div className="text-center mb-12">
                    <Heading level="h2" size="3xl" weight="bold">{rakIccOffshoreData.estimated_setup_costs_2026.title}</Heading>
                </div>
                <Grid cols={3} gap="lg">
                    <Card padding="lg">
                        <CardHeader><Heading level="h3" size="lg" weight="semibold">Standard Setup</Heading></CardHeader>
                        <CardContent><Text>{rakIccOffshoreData.estimated_setup_costs_2026.standard_setup_package}</Text></CardContent>
                    </Card>
                    <Card padding="lg">
                        <CardHeader><Heading level="h3" size="lg" weight="semibold">Annual Renewal</Heading></CardHeader>
                        <CardContent><Text>{rakIccOffshoreData.estimated_setup_costs_2026.annual_renewal_fees}</Text></CardContent>
                    </Card>
                    <Card padding="lg">
                        <CardHeader><Heading level="h3" size="lg" weight="semibold">Additional Costs</Heading></CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-4 space-y-2">
                                <li>Good Standing: {rakIccOffshoreData.estimated_setup_costs_2026.additional_legal_costs.certificate_of_good_standing}</li>
                                <li>Notarization: {rakIccOffshoreData.estimated_setup_costs_2026.additional_legal_costs.notarization_and_attestation}</li>
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>
            </Container>
        </div>

        {/* Entity Types */}
        <Container size="lg" padding="lg">
          <div className="text-center mb-16">
              <Heading level="h2" size="3xl" weight="bold" className="mb-4">
                  Entity Types
              </Heading>
          </div>
          <Grid cols={2} gap="lg">
              {rakIccOffshoreData.specialized_entity_types.map((type, idx) => (
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

        {/* Why Choose JOAB SOLUTIONS */}
        <ContentWithImage
          title={rakIccOffshoreData.whyChooseUs.title}
          description={rakIccOffshoreData.whyChooseUs.description}
          image={rakIccOffshoreData.whyChooseUs.image}
          features={rakIccOffshoreData.whyChooseUs.features}
          reverse={true}
        />

        {/* Contact Section */}
        <div id="contact">
          <ContactForm variant="home" />
        </div>
      </>
    )
  }

  // Handle Ajman Offshore with dedicated data file
  if (slug === 'ajman-offshore' && category === 'offshore') {
    const heroData = {
      title: ajmanOffshoreData.hero.title,
      description: ajmanOffshoreData.ajman_offshore_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
      }
    }

    return (
      <>
        <HeroSection data={heroData} />

        {/* What Is Section */}
        <div id="what-is">
          <ContentWithImage
            title="What is Ajman Offshore?"
            description={`${ajmanOffshoreData.ajman_offshore_overview.description} ${ajmanOffshoreData.ajman_offshore_overview.operational_limit}`}
            image={Images.services.ajmanOffshoreOverview}
          />
        </div>

        {/* Benefits */}
        <FeaturesSection
          title="Benefits and Incentives"
          features={[
            {
              title: "Privacy",
              description: ajmanOffshoreData.benefits_and_incentives.privacy_and_confidentiality.join('. ')
            },
            {
              title: "Financial Efficiency",
              description: ajmanOffshoreData.benefits_and_incentives.financial_efficiency.join('. ')
            }
          ]}
        />

        {/* Costs */}
        <div className="bg-gray-50 py-16">
            <Container>
                <div className="text-center mb-12">
                    <Heading level="h2" size="3xl" weight="bold">{ajmanOffshoreData.estimated_setup_costs_2026.title}</Heading>
                </div>
                <Grid cols={2} gap="lg">
                    <Card padding="lg">
                        <CardHeader><Heading level="h3" size="lg" weight="semibold">Setup Package</Heading></CardHeader>
                        <CardContent><Text>{ajmanOffshoreData.estimated_setup_costs_2026.initial_setup_package}</Text></CardContent>
                    </Card>
                    <Card padding="lg">
                        <CardHeader><Heading level="h3" size="lg" weight="semibold">Annual Renewal</Heading></CardHeader>
                        <CardContent><Text>{ajmanOffshoreData.estimated_setup_costs_2026.annual_renewal_fee}</Text></CardContent>
                    </Card>
                </Grid>
            </Container>
        </div>

        {/* Business Activities */}
        <Container size="lg" padding="lg">
          <div className="text-center mb-16">
              <Heading level="h2" size="3xl" weight="bold" className="mb-4">
                  Permitted Business Activities
              </Heading>
          </div>
          <Grid cols={2} gap="lg">
              {ajmanOffshoreData.permissible_business_activities.map((type, idx) => (
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

        {/* Why Choose JOAB SOLUTIONS */}
        <ContentWithImage
          title={ajmanOffshoreData.whyChooseUs.title}
          description={ajmanOffshoreData.whyChooseUs.description}
          image={ajmanOffshoreData.whyChooseUs.image}
          features={ajmanOffshoreData.whyChooseUs.features}
          reverse={true}
        />

        {/* Contact Section */}
        <div id="contact">
          <ContactForm variant="home" />
        </div>
      </>
    )
  }

  if (slug === 'ajman-free-zone' && category === 'free-zone') {
    // Construct Hero data from dedicated file
    const heroData = {
      title: 'Ajman Free Zone',
      description: ajmanFreeZoneData.ajman_free_zone_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
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
            image={Images.services.ajmanOverview}
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

        {/* Why Choose JOAB SOLUTIONS */}
        <ContentWithImage
          title={ajmanFreeZoneData.whyChooseUs.title}
          description={ajmanFreeZoneData.whyChooseUs.description}
          image={ajmanFreeZoneData.whyChooseUs.image}
          features={ajmanFreeZoneData.whyChooseUs.features}
          reverse={true}
        />

        {/* Contact Section */}
        <div id="contact">
          <ContactForm variant="home" />
        </div>
      </>
    )
  }

  // Handle IFZA with dedicated data file
  if (slug === 'ifza-dsoa' && category === 'free-zone') {
    const heroData = {
      title: ifzaData.hero.title,
      description: ifzaData.ifza_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
      }
    }

    return (
      <>
        <HeroSection data={heroData} />

        {/* What Is Section */}
        <div id="what-is">
          <ContentWithImage
            title="What is IFZA?"
            description={ifzaData.ifza_overview.description}
            image={Images.services.ifzaOverview}
          />
        </div>

        {/* Benefits */}
        <FeaturesSection
          title="Benefits and Incentives"
          features={[
            {
              title: "Ownership & Tax",
              description: ifzaData.benefits_and_incentives.ownership_and_tax.join('. ')
            },
            {
              title: "Operational Benefits",
              description: ifzaData.benefits_and_incentives.operational_benefits.join('. ')
            }
          ]}
        />

        {/* License Costs */}
        <div className="bg-gray-50 py-16">
            <Container>
                <div className="text-center mb-12">
                    <Heading level="h2" size="3xl" weight="bold">{ifzaData.cost.title}</Heading>
                </div>
                <Grid cols={2} gap="lg">
                    {ifzaData.cost.packages.map((pkg, idx) => (
                        <Card key={idx} padding="lg">
                            <CardHeader>
                                <Heading level="h3" size="lg" weight="semibold">{pkg.name}</Heading>
                                <Text className="text-xl font-bold text-primary mt-2">{pkg.price}</Text>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-4 space-y-2 mt-4">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li key={fIdx}>{feature}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </div>

        {/* Business License Types */}
        <Container size="lg" padding="lg">
          <div className="text-center mb-16">
              <Heading level="h2" size="3xl" weight="bold" className="mb-4">
                  Business License Types
              </Heading>
          </div>
          <Grid cols={3} gap="lg">
              {ifzaData.business_license_types.map((type, idx) => (
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

        {/* Why Choose JOAB SOLUTIONS */}
        <ContentWithImage
          title={ifzaData.whyChooseUs.title}
          description={ifzaData.whyChooseUs.description}
          image={ifzaData.whyChooseUs.image}
          features={ifzaData.whyChooseUs.features}
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
      description: dmccData.dmcc_free_zone_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
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
            image={Images.services.dmccOverview}
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

        {/* Why Choose JOAB SOLUTIONS */}
        <ContentWithImage
          title={dmccData.whyChooseUs.title}
          description={dmccData.whyChooseUs.description}
          image={dmccData.whyChooseUs.image}
          features={dmccData.whyChooseUs.features}
          reverse={true}
        />

        {/* Contact Section */}
        <div id="contact">
          <ContactForm variant="home" />
        </div>
      </>
    )
  }

  // Handle Creative City Fujairah with dedicated data file
  if (slug === 'creative-city-fujairah' && category === 'free-zone') {
    const heroData = {
      title: creativeCityFujairahData.hero.title,
      description: creativeCityFujairahData.creative_city_fujairah_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
      }
    }

    return (
      <>
        <HeroSection data={heroData} />

        {/* What Is Section */}
        <div id="what-is">
          <ContentWithImage
            title={creativeCityFujairahData.creative_city_fujairah_overview.title}
            description={creativeCityFujairahData.creative_city_fujairah_overview.description}
            image={creativeCityFujairahData.creative_city_fujairah_overview.image}
          />
        </div>

        {/* Benefits */}
        <FeaturesSection
          title={creativeCityFujairahData.whySetup.title}
          features={creativeCityFujairahData.whySetup.cards.map(card => ({
            title: card.title,
            description: card.description
          }))}
        />
        <Container className="text-center pb-16">
            <Button variant="outline" size="lg" href={creativeCityFujairahData.whySetup.ctaHref}>
                {creativeCityFujairahData.whySetup.ctaText}
            </Button>
        </Container>

        {/* License Costs */}
        <div className="bg-gray-50 py-16">
            <Container>
                <div className="text-center mb-12">
                    <Heading level="h2" size="3xl" weight="bold">{creativeCityFujairahData.cost.title}</Heading>
                </div>
                <Grid cols={2} gap="lg">
                    {creativeCityFujairahData.cost.packages.map((pkg, idx) => (
                        <Card key={idx} padding="lg">
                            <CardHeader>
                                <Heading level="h3" size="lg" weight="semibold">{pkg.name}</Heading>
                                <Text className="text-xl font-bold text-primary mt-2">{pkg.price}</Text>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-4 space-y-2 mt-4">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li key={fIdx}>{feature}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </div>

        {/* Business License Types */}
        <Container size="lg" padding="lg">
          <div className="text-center mb-16">
              <Heading level="h2" size="3xl" weight="bold" className="mb-4">
                  {creativeCityFujairahData.businessTypes.title}
              </Heading>
          </div>
          <Grid cols={3} gap="lg">
              {creativeCityFujairahData.businessTypes.types.map((type, idx) => (
                  <Card key={idx} padding="lg" className="h-full">
                      <CardHeader>
                          <Heading level="h3" size="lg" weight="semibold" className="mb-2">
                              {type.name}
                          </Heading>
                      </CardHeader>
                      <CardContent>
                          <Text className="text-gray-600">{type.description}</Text>
                      </CardContent>
                  </Card>
              ))}
          </Grid>
        </Container>

        {/* Why Choose JOAB SOLUTIONS */}
        <ContentWithImage
          title={creativeCityFujairahData.whyChooseUs.title}
          description={creativeCityFujairahData.whyChooseUs.description}
          image={creativeCityFujairahData.whyChooseUs.image}
          features={creativeCityFujairahData.whyChooseUs.features}
          reverse={true}
        />

        {/* Contact Section */}
        <div id="contact">
          <ContactForm variant="home" />
        </div>
      </>
    )
  }

  // Handle Meydan Free Zone with dedicated data file
  if (slug === 'meydan-free-zone' && category === 'free-zone') {
    const heroData = {
      title: meydanFreeZoneData.hero.title,
      description: meydanFreeZoneData.meydan_free_zone_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
      }
    }

    return (
      <>
        <HeroSection data={heroData} />

        {/* What Is Section */}
        <div id="what-is">
          <ContentWithImage
            title="What is Meydan Free Zone?"
            description={`${meydanFreeZoneData.meydan_free_zone_overview.description} Located at ${meydanFreeZoneData.meydan_free_zone_overview.location}. Key innovation: ${meydanFreeZoneData.meydan_free_zone_overview.key_innovation}`}
            image={Images.services.meydanOverview}
          />
        </div>

        {/* Benefits */}
        <FeaturesSection
          title="Benefits and Incentives"
          features={[
            {
              title: "Ownership & Tax",
              description: meydanFreeZoneData.benefits_and_incentives.ownership_and_tax.join('. ')
            },
            {
              title: "Operational Advantages",
              description: meydanFreeZoneData.benefits_and_incentives.operational_advantages.join('. ')
            }
          ]}
        />

        {/* License Costs */}
        <div className="bg-gray-50 py-16">
            <Container>
                <div className="text-center mb-12">
                    <Heading level="h2" size="3xl" weight="bold">{meydanFreeZoneData.cost.title}</Heading>
                </div>
                <Grid cols={1} gap="lg">
                    {meydanFreeZoneData.cost.packages.map((pkg, idx) => (
                        <Card key={idx} padding="lg" className="max-w-2xl mx-auto w-full">
                            <CardHeader>
                                <Heading level="h3" size="lg" weight="semibold">{pkg.name}</Heading>
                                <Text className="text-xl font-bold text-primary mt-2">{pkg.price}</Text>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-4 space-y-2 mt-4">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li key={fIdx}>{feature}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </div>

        {/* Business License Types */}
        <Container size="lg" padding="lg">
          <div className="text-center mb-16">
              <Heading level="h2" size="3xl" weight="bold" className="mb-4">
                  Business License Types
              </Heading>
          </div>
          <Grid cols={2} gap="lg">
              {meydanFreeZoneData.business_license_types.map((type, idx) => (
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

        {/* Why Choose JOAB SOLUTIONS */}
        <ContentWithImage
          title={meydanFreeZoneData.whyChooseUs.title}
          description={meydanFreeZoneData.whyChooseUs.description}
          image={meydanFreeZoneData.whyChooseUs.image}
          features={meydanFreeZoneData.whyChooseUs.features}
          reverse={true}
        />

        {/* Contact Section */}
        <div id="contact">
          <ContactForm variant="home" />
        </div>
      </>
    )
  }

  // Handle RAKEZ with dedicated data file
  if (slug === 'rakez' && category === 'free-zone') {
    const heroData = {
      title: rakezData.hero.title,
      description: rakezData.rakez_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
      }
    }

    return (
      <>
        <HeroSection data={heroData} />

        {/* What Is Section */}
        <div id="what-is">
          <ContentWithImage
            title="What is RAKEZ?"
            description={`${rakezData.rakez_overview.description} Located in ${rakezData.rakez_overview.location}. ${rakezData.rakez_overview.dual_licensing}`}
            image={Images.services.rakezOverview}
          />
        </div>

        {/* Benefits */}
        <FeaturesSection
          title="Benefits and Incentives"
          features={[
            {
              title: "Ownership & Tax",
              description: rakezData.benefits_and_incentives.ownership_and_tax.join('. ')
            },
            {
              title: "Unique Features",
              description: rakezData.benefits_and_incentives.unique_features.join('. ')
            }
          ]}
        />

        {/* License Costs */}
        <div className="bg-gray-50 py-16">
            <Container>
                <div className="text-center mb-12">
                    <Heading level="h2" size="3xl" weight="bold">{rakezData.cost.title}</Heading>
                </div>
                <Grid cols={1} gap="lg">
                    {rakezData.cost.packages.map((pkg, idx) => (
                        <Card key={idx} padding="lg" className="max-w-2xl mx-auto w-full">
                            <CardHeader>
                                <Heading level="h3" size="lg" weight="semibold">{pkg.name}</Heading>
                                <Text className="text-xl font-bold text-primary mt-2">{pkg.price}</Text>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-4 space-y-2 mt-4">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li key={fIdx}>{feature}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </div>

        {/* Business License Types */}
        <Container size="lg" padding="lg">
          <div className="text-center mb-16">
              <Heading level="h2" size="3xl" weight="bold" className="mb-4">
                  Business License Types
              </Heading>
          </div>
          <Grid cols={3} gap="lg">
              {rakezData.business_license_types.map((type, idx) => (
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

        {/* Why Choose JOAB SOLUTIONS */}
        <ContentWithImage
          title={rakezData.whyChooseUs.title}
          description={rakezData.whyChooseUs.description}
          image={rakezData.whyChooseUs.image}
          features={rakezData.whyChooseUs.features}
          reverse={true}
        />

        {/* Contact Section */}
        <div id="contact">
          <ContactForm variant="home" />
        </div>
      </>
    )
  }

  // Handle SHAMS with dedicated data file
  if (slug === 'shams' && category === 'free-zone') {
    const heroData = {
      title: shamsData.hero.title,
      subtitle: shamsData.hero.subtitle,
      description: shamsData.shams_free_zone_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
      }
    }

    return (
      <>
        <HeroSection data={heroData} />

        {/* What Is Section */}
        <div id="what-is">
          <ContentWithImage
            title="What is SHAMS?"
            description={`${shamsData.shams_free_zone_overview.description} Located in ${shamsData.shams_free_zone_overview.location}.`}
            image={Images.services.shamsOverview}
          />
        </div>

        {/* Benefits */}
        <FeaturesSection
          title="Benefits and Incentives"
          features={[
            {
              title: "Ownership & Tax",
              description: shamsData.benefits_and_incentives.ownership_and_tax.join('. ')
            },
            {
              title: "Visa Advantages",
              description: shamsData.benefits_and_incentives.visa_advantages.join('. ')
            }
          ]}
        />

        {/* License Costs */}
        <div className="bg-gray-50 py-16">
            <Container>
                <div className="text-center mb-12">
                    <Heading level="h2" size="3xl" weight="bold">{shamsData.cost.title}</Heading>
                </div>
                <Grid cols={1} gap="lg">
                    {shamsData.cost.packages.map((pkg, idx) => (
                        <Card key={idx} padding="lg" className="max-w-2xl mx-auto w-full">
                            <CardHeader>
                                <Heading level="h3" size="lg" weight="semibold">{pkg.name}</Heading>
                                <Text className="text-xl font-bold text-primary mt-2">{pkg.price}</Text>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-4 space-y-2 mt-4">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li key={fIdx}>{feature}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </div>

        {/* Business License Types */}
        <Container size="lg" padding="lg">
          <div className="text-center mb-16">
              <Heading level="h2" size="3xl" weight="bold" className="mb-4">
                  Business License Types
              </Heading>
          </div>
          <Grid cols={2} gap="lg">
              {shamsData.business_license_types.map((type, idx) => (
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

        {/* Why Choose JOAB SOLUTIONS */}
        <ContentWithImage
          title={shamsData.whyChooseUs.title}
          description={shamsData.whyChooseUs.description}
          image={shamsData.whyChooseUs.image}
          features={shamsData.whyChooseUs.features}
          reverse={true}
        />

        {/* Contact Section */}
        <div id="contact">
          <ContactForm variant="home" />
        </div>
      </>
    )
  }

  // Handle SPC Free Zone with dedicated data file
  if (slug === 'spc-free-zone' && category === 'free-zone') {
    const heroData = {
      title: spcFreeZoneData.hero.title,
      subtitle: spcFreeZoneData.hero.subtitle,
      description: spcFreeZoneData.spc_free_zone_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
      }
    }

    return (
      <>
        <HeroSection data={heroData} />

        {/* What Is Section */}
        <div id="what-is">
          <ContentWithImage
            title="What is SPC Free Zone?"
            description={`${spcFreeZoneData.spc_free_zone_overview.description} Located in ${spcFreeZoneData.spc_free_zone_overview.location}. ${spcFreeZoneData.spc_free_zone_overview.dual_license}`}
            image={Images.services.spcOverview}
          />
        </div>

        {/* Benefits */}
        <FeaturesSection
          title="Benefits and Incentives"
          features={[
            {
              title: "Operational Flexibility",
              description: spcFreeZoneData.benefits_and_incentives.operational_flexibility.join('. ')
            },
            {
              title: "Setup Perks",
              description: spcFreeZoneData.benefits_and_incentives.setup_perks.join('. ')
            }
          ]}
        />

        {/* License Costs */}
        <div className="bg-gray-50 py-16">
            <Container>
                <div className="text-center mb-12">
                    <Heading level="h2" size="3xl" weight="bold">{spcFreeZoneData.cost.title}</Heading>
                </div>
                <Grid cols={2} gap="lg">
                    {spcFreeZoneData.cost.packages.map((pkg, idx) => (
                        <Card key={idx} padding="lg">
                            <CardHeader>
                                <Heading level="h3" size="lg" weight="semibold">{pkg.name}</Heading>
                                <Text className="text-xl font-bold text-primary mt-2">{pkg.price}</Text>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-4 space-y-2 mt-4">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li key={fIdx}>{feature}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </div>

        {/* Why Choose JOAB SOLUTIONS */}
        <ContentWithImage
          title={spcFreeZoneData.whyChooseUs.title}
          description={spcFreeZoneData.whyChooseUs.description}
          image={spcFreeZoneData.whyChooseUs.image}
          features={spcFreeZoneData.whyChooseUs.features}
          reverse={true}
        />

        {/* Contact Section */}
        <div id="contact">
          <ContactForm variant="home" />
        </div>
      </>
    )
  }

  // Handle SRTIP with dedicated data file
    if (slug === 'srtip' && category === 'free-zone') {
      const heroData = {
      title: srtipData.hero.title,
      description: srtipData.srtip_free_zone_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
      }
    }
  
      return (
        <>
          <HeroSection data={heroData} />
  
          {/* What Is Section */}
          <div id="what-is">
            <ContentWithImage
              title="What is SRTIP?"
              description={`${srtipData.srtip_free_zone_overview.description} Located in ${srtipData.srtip_free_zone_overview.location}.`}
              image={Images.services.srtipOverview}
            />
          </div>

        {/* Benefits */}
        <FeaturesSection
          title="Benefits and Incentives"
          features={[
            {
              title: "Innovation Support",
              description: srtipData.benefits_and_incentives.innovation_support.join('. ')
            },
            {
              title: "Operational Benefits",
              description: srtipData.benefits_and_incentives.operational_benefits.join('. ')
            }
          ]}
        />

        {/* License Costs */}
        <div className="bg-gray-50 py-16">
            <Container>
                <div className="text-center mb-12">
                    <Heading level="h2" size="3xl" weight="bold">{srtipData.cost.title}</Heading>
                </div>
                <Grid cols={1} gap="lg">
                    {srtipData.cost.packages.map((pkg, idx) => (
                        <Card key={idx} padding="lg" className="max-w-2xl mx-auto w-full">
                            <CardHeader>
                                <Heading level="h3" size="lg" weight="semibold">{pkg.name}</Heading>
                                <Text className="text-xl font-bold text-primary mt-2">{pkg.price}</Text>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-4 space-y-2 mt-4">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li key={fIdx}>{feature}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </div>

        {/* Business License Types */}
        <Container size="lg" padding="lg">
          <div className="text-center mb-16">
              <Heading level="h2" size="3xl" weight="bold" className="mb-4">
                  Business License Types
              </Heading>
          </div>
          <Grid cols={2} gap="lg">
              {srtipData.business_license_types.map((type, idx) => (
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

        {/* Why Choose JOAB SOLUTIONS */}
        <ContentWithImage
          title={srtipData.whyChooseUs.title}
          description={srtipData.whyChooseUs.description}
          image={srtipData.whyChooseUs.image}
          features={srtipData.whyChooseUs.features}
          reverse={true}
        />

        {/* Contact Section */}
        <div id="contact">
          <ContactForm variant="home" />
        </div>
      </>
    )
  }

  // Handle Dubai Mainland with dedicated data file
  if (slug === 'dubai' && category === 'mainland') {
    const heroData = {
      title: dubaiMainlandData.hero.title,
      subtitle: dubaiMainlandData.hero.subtitle,
      description: dubaiMainlandData.dubai_mainland_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
      }
    }

    return (
      <>
        <HeroSection data={heroData} />

        {/* What Is Section */}
        <div id="what-is">
          <ContentWithImage
            title="What is Dubai Mainland?"
            description={`${dubaiMainlandData.dubai_mainland_overview.description} Entity: ${dubaiMainlandData.dubai_mainland_overview.entity}`}
            image={Images.services.dubaiMainlandOverview}
          />
        </div>

        {/* Benefits */}
        <FeaturesSection
          title="Benefits and Incentives"
          features={[
            {
              title: "Ownership & Tax",
              description: dubaiMainlandData.benefits_and_incentives.ownership_and_tax.join('. ')
            },
            {
              title: "Setup Efficiency",
              description: dubaiMainlandData.benefits_and_incentives.setup_efficiency.join('. ')
            }
          ]}
        />

        {/* Business License Types */}
        <Container size="lg" padding="lg" className="bg-gray-50">
          <div className="text-center mb-16">
              <Heading level="h2" size="3xl" weight="bold" className="mb-4">
                  Business License Types
              </Heading>
          </div>
          <Grid cols={2} gap="lg">
              {dubaiMainlandData.business_license_types.map((type, idx) => (
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

        {/* Why Choose JOAB SOLUTIONS */}
        <ContentWithImage
          title={dubaiMainlandData.whyChooseUs.title}
          description={dubaiMainlandData.whyChooseUs.description}
          image={dubaiMainlandData.whyChooseUs.image}
          features={dubaiMainlandData.whyChooseUs.features}
          reverse={true}
        />

        {/* Contact Section */}
        <div id="contact">
          <ContactForm variant="home" />
        </div>
      </>
    )
  }

  // Handle Abu Dhabi Mainland with dedicated data file
  if (slug === 'abu-dhabi' && category === 'mainland') {
    const heroData = {
      title: abuDhabiMainlandData.hero.title,
      subtitle: abuDhabiMainlandData.hero.subtitle,
      description: abuDhabiMainlandData.abu_dhabi_mainland_overview.description,
      primaryCTA: {
        text: "Get a Free Consultation",
        href: "#contact"
      }
    }

    return (
      <>
        <HeroSection data={heroData} />

        {/* What Is Section */}
        <div id="what-is">
          <ContentWithImage
            title="What is Abu Dhabi Mainland?"
            description={`${abuDhabiMainlandData.abu_dhabi_mainland_overview.description} Key Advantage: ${abuDhabiMainlandData.abu_dhabi_mainland_overview.key_advantage}`}
            image={Images.services.abuDhabiMainlandOverview}
          />
        </div>

        {/* Benefits */}
        <FeaturesSection
          title="Benefits and Incentives"
          features={[
            {
              title: "Setup Efficiency",
              description: abuDhabiMainlandData.benefits_and_incentives.setup_efficiency.join('. ')
            },
            {
              title: "Strategic Benefits",
              description: abuDhabiMainlandData.benefits_and_incentives.strategic_benefits.join('. ')
            }
          ]}
        />

        {/* Business License Types */}
        <Container size="lg" padding="lg" className="bg-gray-50">
          <div className="text-center mb-16">
              <Heading level="h2" size="3xl" weight="bold" className="mb-4">
                  Business License Types
              </Heading>
          </div>
          <Grid cols={2} gap="lg">
              {abuDhabiMainlandData.business_license_types.map((type, idx) => (
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

        {/* Why Choose JOAB SOLUTIONS */}
        <ContentWithImage
          title={abuDhabiMainlandData.whyChooseUs.title}
          description={abuDhabiMainlandData.whyChooseUs.description}
          image={abuDhabiMainlandData.whyChooseUs.image}
          features={abuDhabiMainlandData.whyChooseUs.features}
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

      {/* Why Choose JOAB SOLUTIONS */}
      <ContentWithImage
        title={service.whyChooseUs.title}
        description={service.whyChooseUs.description}
        image={service.whyChooseUs.image}
        features={service.whyChooseUs.features}
        reverse={true}
      />

      {/* Contact Section */}
      <div id="contact">
        <ContactForm variant="home" />
      </div>
    </>
  )
}
