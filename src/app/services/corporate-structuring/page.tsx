import type { Metadata } from 'next';
import { corporateStructuringData as data } from '@/data/services/corporate-structuring';
import { Images } from '@/lib/assets';
import HeroSection from '@/components/sections/hero-section';
import ContentWithImage from '@/components/sections/content-with-image';
import ProcessSteps from '@/components/sections/process-steps';
import Container from '@/components/ui/container';
import { Heading, Text } from '@/components/ui/typography';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: data.corporate_structuring_overview.title,
  description: data.corporate_structuring_overview.description,
};

export default function CorporateStructuringPage() {
  const heroData = {
    title: data.corporate_structuring_overview.title,
    subtitle: data.corporate_structuring_overview.core_objective,
    description: data.corporate_structuring_overview.description,
    primaryCTA: {
      text: "Structure Your Business",
      href: "/contact",
    },
  };

  return (
    <>
      <HeroSection data={heroData} />

      <Container className="py-16">
        <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">
          Key Structuring Models 2026
        </Heading>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {data.key_structuring_models_2026.map((model, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{model.model}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 h-20">{model.use_case}</p>
                <div className="space-y-2">
                  <h4 className="font-bold text-sm text-gray-800">Key Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {model.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-600">{benefit}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Heading level="h2" size="3xl" weight="bold" className="mb-6">
              New Legal Features 2026
            </Heading>
            <div className="space-y-6">
              {data.new_legal_features_2026.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold text-primary mb-2">{feature.feature}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <Heading level="h3" size="2xl" weight="bold" className="mb-6">
              Governance & Compliance
            </Heading>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-1">UBO Transparency</h4>
                <p className="text-sm text-gray-600">{data.governance_and_compliance.ubo_transparency}</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Director Accountability</h4>
                <p className="text-sm text-gray-600">{data.governance_and_compliance.director_accountability}</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Board Succession</h4>
                <p className="text-sm text-gray-600">{data.governance_and_compliance.board_succession}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">
            Our Structuring Process
          </Heading>
          <div className="grid md:grid-cols-4 gap-6">
            {data.our_structuring_process.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center p-6 bg-white border rounded-xl h-full hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.step}</h3>
                  <p className="text-sm text-gray-600">{step.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
