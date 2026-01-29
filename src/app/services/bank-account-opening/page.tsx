import React from 'react';
import { bankAccountOpeningData } from '@/data/services/bank-account-opening';
import { Images } from '@/lib/assets';
import HeroSection from '@/components/sections/hero-section';
import ContentWithImage from '@/components/sections/content-with-image';
import ProcessSteps from '@/components/sections/process-steps';
import Container from '@/components/ui/container';
import { Heading, Text } from '@/components/ui/typography';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: bankAccountOpeningData.bank_account_opening_overview.title,
  description: bankAccountOpeningData.bank_account_opening_overview.description,
};

export default function BankAccountOpeningPage() {
  const data = bankAccountOpeningData;

  const heroData = {
    title: data.bank_account_opening_overview.title,
    subtitle: data.bank_account_opening_overview.success_rate_2026,
    description: data.bank_account_opening_overview.description,
    primaryCTA: {
      text: "Start Your Application",
      href: "/contact"
    }
  };

  return (
    <>
      <HeroSection data={heroData} />

      <Container className="py-16">
        <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">Banking Options 2026</Heading>
        <div className="grid md:grid-cols-3 gap-8">
            {data.banking_options_2026.map((option, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                    <Heading level="h3" size="xl" className="mb-2 text-blue-700">{option.type}</Heading>
                    <Text size="sm" className="mb-4 text-gray-500 font-medium">Best for: {option.best_for}</Text>
                    
                    <div className="mb-4">
                        <Text weight="semibold" className="mb-2">Examples:</Text>
                        <div className="flex flex-wrap gap-2">
                            {option.examples.map((ex, i) => (
                                <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{ex}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <Text weight="semibold" className="mb-2">Advantages:</Text>
                        <ul className="space-y-1">
                            {option.advantages.map((adv, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-600">
                                    <span className="mr-2 text-green-500">✓</span>
                                    {adv}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
      </Container>

      <div className="bg-gray-50 py-16">
        <Container>
            <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">Mandatory Requirements</Heading>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <Heading level="h3" size="lg" className="mb-4 border-b pb-2">Company Documents</Heading>
                    <ul className="space-y-3">
                        {data.mandatory_requirements.company_documents.map((req, i) => (
                            <li key={i} className="flex items-start">
                                <span className="mr-2 text-blue-600">•</span>
                                <Text size="sm">{req}</Text>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <Heading level="h3" size="lg" className="mb-4 border-b pb-2">Shareholder Documents</Heading>
                    <ul className="space-y-3">
                        {data.mandatory_requirements.shareholder_documents.map((req, i) => (
                            <li key={i} className="flex items-start">
                                <span className="mr-2 text-blue-600">•</span>
                                <Text size="sm">{req}</Text>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <Heading level="h3" size="lg" className="mb-4 border-b pb-2">Business Substance</Heading>
                    <ul className="space-y-3">
                        {data.mandatory_requirements.business_substance.map((req, i) => (
                            <li key={i} className="flex items-start">
                                <span className="mr-2 text-blue-600">•</span>
                                <Text size="sm">{req}</Text>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
      </div>

      <ProcessSteps
        title="Our Assistance Process"
        steps={data.our_assistance_process.map((step, index) => ({
            title: step.step,
            description: step.action
        }))}
      />

      <Container className="py-16 bg-blue-50">
        <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">Common Challenges We Solve</Heading>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {data.common_challenges_solved.map((challenge, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <div className="mr-4 text-blue-600 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <Text className="font-medium">{challenge}</Text>
                </div>
            ))}
        </div>
      </Container>
    </>
  );
}
