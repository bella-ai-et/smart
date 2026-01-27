import { notFound } from 'next/navigation'
import { getDetailedServiceBySlug, detailedServices } from '@/data/services'
import HeroSection from '@/components/sections/hero-section'
import ContentWithImage from '@/components/sections/content-with-image'
import ProcessSteps from '@/components/sections/process-steps'
import FAQSection from '@/components/sections/faq-section'
import ContactForm from '@/components/sections/contact-form'
import Container from '@/components/ui/container'
import { Heading } from '@/components/ui/typography'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getDetailedServiceBySlug(slug)
  
  if (!service) {
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
  return detailedServices.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getDetailedServiceBySlug(slug)
  
  if (!service) {
    notFound()
  }

  // Construct Hero data
  const heroData = {
    title: service.hero.title,
    subtitle: "Professional Services",
    description: service.hero.subtitle, // Using subtitle as description
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
      
      <div id="why-matters">
        <ContentWithImage
          title={service.whyMatters.title}
          description={service.whyMatters.description}
          image={service.whyMatters.image}
        />
      </div>

      <div className="bg-gray-50">
        <ProcessSteps
          title={service.howItWorks.title}
          steps={service.howItWorks.steps}
        />
      </div>

      <ContentWithImage
        title={service.whyChooseUs.title}
        description={service.whyChooseUs.description}
        image={service.whyChooseUs.image}
        features={service.whyChooseUs.features}
        reverse={true}
      />

      <Container size="lg" padding="lg" className="bg-gray-50">
        <div className="text-center max-w-4xl mx-auto">
          <Heading level="h2" size="3xl" weight="bold" className="mb-8">
            {service.whoIsItFor.title}
          </Heading>
          <div className="flex flex-wrap justify-center gap-4">
            {service.whoIsItFor.audiences.map((audience, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 text-gray-700 font-medium hover:border-blue-200 transition-colors">
                {audience}
              </div>
            ))}
          </div>
        </div>
      </Container>

      <ProcessSteps
        title={service.processOverview.title}
        steps={service.processOverview.steps}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={service.faqs.map((f, i) => ({
          id: `faq-${i}`,
          question: f.question,
          answer: f.answer,
          category: 'General',
          order: i
        }))}
      />

      <div id="contact">
        <ContactForm variant="home" />
      </div>
    </>
  )
}
