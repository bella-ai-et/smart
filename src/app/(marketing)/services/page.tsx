import { servicePageContent, faqs, faqCategories } from '@/data'
import HeroSection from '@/components/sections/hero-section'
import OverviewSection from '@/components/sections/overview-section'
import FeaturesSection from '@/components/sections/features-section'
import ServicesGrid from '@/components/sections/services-grid'
import FAQSection from '@/components/sections/faq-section'
import CTASection from '@/components/sections/cta-section'

export default function ServicesPage() {
  return (
    <>
      <HeroSection data={servicePageContent.hero} />
      
      <OverviewSection 
        title={servicePageContent.overview.title}
        description={servicePageContent.overview.description}
        cta={{
          text: "Get Free Consultation",
          href: "/contact"
        }}
      />
      
      <FeaturesSection
        title="Our Process"
        subtitle="We follow a proven methodology to deliver exceptional results"
        features={servicePageContent.process.steps.map(step => ({
          title: step.title,
          description: step.description,
          icon: `/icons/process-${step.order}.svg`
        }))}
        cols={5}
      />
      
      <ServicesGrid
        title="Our Services"
        description="Comprehensive digital solutions tailored to your business needs"
        services={servicePageContent.services}
        showPricing={true}
      />
      
      <FAQSection
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services and process"
        faqs={faqs}
        categories={faqCategories}
        showCategories={true}
        cols={2}
      />
      
      <CTASection
        title="Ready to Start Your Project?"
        description="Let's discuss how we can help transform your digital presence and achieve your business goals."
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Portfolio",
          href: "/portfolio"
        }}
        background="primary"
      />
    </>
  )
}