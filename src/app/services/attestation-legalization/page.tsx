import type { Metadata } from 'next';
import { attestationLegalizationData as data } from '@/data/services/attestation-legalization';
import HeroSection from '@/components/sections/hero-section';
import ContentWithImage from '@/components/sections/content-with-image';
import ProcessSteps from '@/components/sections/process-steps';
import Container from '@/components/ui/container';
import { Heading, Text } from '@/components/ui/typography';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: data.attestation_legalization_overview.title,
  description: data.attestation_legalization_overview.description,
};

export default function AttestationPage() {
  const heroData = {
    title: data.attestation_legalization_overview.title,
    subtitle: "Professional verification services for your documents",
    description: data.attestation_legalization_overview.description,
    primaryCTA: {
      text: "Get Documents Attested",
      href: "/contact",
    },
    backgroundImage: {
      src: '/images/services/attestation-hero.jpg',
      alt: data.attestation_legalization_overview.title,
    },
  };

  return (
    <>
      <HeroSection data={heroData} />

      <Container className="py-16">
        <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100 mb-16">
          <Heading level="h3" size="2xl" weight="bold" className="mb-4 text-primary">
            Major 2026 Update
          </Heading>
          <Text className="text-lg text-gray-800">
            {data.attestation_legalization_overview.major_2026_update}
          </Text>
        </div>

        <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">
          Standard Attestation Chain
        </Heading>
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {data.standard_attestation_chain.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center p-6 bg-white border rounded-xl h-full hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.authority}</h3>
                <p className="text-sm text-gray-600">{step.action}</p>
              </div>
            </div>
          ))}
        </div>

        <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">
          Document Categories
        </Heading>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {Object.entries(data.document_categories).map(([key, category], index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary capitalize">{key.replace('_', ' ')}</CardTitle>
                <p className="text-sm font-semibold text-gray-500">{category.official_mofa_fee}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-bold text-sm text-gray-800 mb-2">Examples:</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {category.examples.map((example, i) => (
                      <li key={i} className="text-sm text-gray-600">{example}</li>
                    ))}
                  </ul>
                  <h4 className="font-bold text-sm text-gray-800 mb-1">Purpose:</h4>
                  <p className="text-sm text-gray-600">{category.purpose}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <Heading level="h2" size="3xl" weight="bold" className="mb-6">
              Service Features
            </Heading>
            <div className="space-y-4">
              {data.our_service_features.map((feature, index) => (
                <div key={index} className="flex items-start p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="mr-4 mt-1 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{feature.feature}</h3>
                    <p className="text-sm text-gray-600">{feature.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <Heading level="h3" size="2xl" weight="bold" className="mb-6">
              Fees & Timelines
            </Heading>
            <div className="space-y-6">
              {Object.entries(data.common_fees_and_timelines).map(([key, value], index) => (
                <div key={index} className="flex justify-between items-center border-b pb-3 last:border-0">
                  <span className="font-bold text-gray-700 capitalize">{key.replace(/_/g, ' ')}</span>
                  <span className="text-sm text-gray-900 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
