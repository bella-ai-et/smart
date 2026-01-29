import React from 'react';
import { accountingBookkeepingData } from '@/data/services/accounting-bookkeeping-services-dubai';
import { Images } from '@/lib/assets';
import HeroSection from '@/components/sections/hero-section';
import ContentWithImage from '@/components/sections/content-with-image';
import ProcessSteps from '@/components/sections/process-steps';
import Container from '@/components/ui/container';
import { Heading, Text } from '@/components/ui/typography';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: accountingBookkeepingData.accounting_bookkeeping_overview.title,
  description: accountingBookkeepingData.accounting_bookkeeping_overview.description,
};

export default function AccountingBookkeepingPage() {
  const data = accountingBookkeepingData;

  const heroData = {
    title: data.accounting_bookkeeping_overview.title,
    subtitle: data.accounting_bookkeeping_overview.compliance_focus,
    description: data.accounting_bookkeeping_overview.description,
    primaryCTA: {
      text: "Get a Free Consultation",
      href: "/contact"
    }
  };

  return (
    <>
      <HeroSection data={heroData} />

      <Container className="bg-gray-50 py-16">
         <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">Core Services</Heading>
         <div className="grid md:grid-cols-2 gap-6">
            {data.core_services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <Heading level="h3" size="xl" className="mb-4">{service.service}</Heading>
                    <ul className="space-y-2">
                        {service.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start">
                                <span className="mr-2 text-blue-600">•</span>
                                <Text>{feature}</Text>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
         </div>
      </Container>

      <div className="bg-white py-16">
        <Container>
            <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">Tax Compliance Integration</Heading>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-blue-50 rounded-xl">
                    <Heading level="h3" size="lg" className="mb-3">Corporate Tax</Heading>
                    <Text>{data.tax_compliance_integration.corporate_tax}</Text>
                </div>
                <div className="p-6 bg-blue-50 rounded-xl">
                    <Heading level="h3" size="lg" className="mb-3">VAT Services</Heading>
                    <Text>{data.tax_compliance_integration.vat_services}</Text>
                </div>
                <div className="p-6 bg-blue-50 rounded-xl">
                    <Heading level="h3" size="lg" className="mb-3">Record Retention</Heading>
                    <Text>{data.tax_compliance_integration.record_retention}</Text>
                </div>
            </div>
        </Container>
      </div>

      <ContentWithImage
        title="Why Outsource?"
        description="Key benefits of choosing our professional services."
        image={Images.why.default}
        features={data.why_outsource}
        reverse={false}
      />

      <ProcessSteps
        title="Process Workflow"
        steps={data.process_workflow.map((step, index) => ({
            title: `Step ${index + 1}`,
            description: step
        }))}
      />
    </>
  );
}
