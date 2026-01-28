import type { Metadata } from 'next';
import { relocationData as data } from '@/data/services/corporate-relocation';
import { Images } from '@/lib/assets';
import HeroSection from '@/components/sections/hero-section';
import ContentWithImage from '@/components/sections/content-with-image';
import ProcessSteps from '@/components/sections/process-steps';
import Container from '@/components/ui/container';
import { Heading, Text } from '@/components/ui/typography';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: data.relocation_services_overview.title,
  description: data.relocation_services_overview.description,
};

export default function CorporateRelocationPage() {
  const heroData = {
    title: data.relocation_services_overview.title,
    subtitle: data.relocation_services_overview.service_scope,
    description: data.relocation_services_overview.description,
    primaryCTA: {
      text: "Start Relocation",
      href: "/contact",
    },
    backgroundImage: {
      src: Images.hero.services.corporateRelocation,
      alt: data.relocation_services_overview.title,
    },
  };

  return (
    <>
      <HeroSection data={heroData} />

      <Container className="py-16">
        {/* Legal & Licensing Migration */}
        <div className="mb-20">
          <Heading level="h2" size="3xl" weight="bold" className="text-center mb-4">
            {data.legal_and_licensing_migration.title}
          </Heading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {data.legal_and_licensing_migration.steps.map((step, index) => (
              <Card key={index} className="h-full border-t-4 border-t-primary">
                <CardHeader>
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-3 text-sm">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{step.action}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Physical Move Management */}
        <div className="mb-20">
          <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">
            {data.physical_move_management.title}
          </Heading>
          <div className="grid md:grid-cols-2 gap-8">
            {data.physical_move_management.features.map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature.feature}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Re-domiciliation Specialty */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 mb-20 border border-primary/10">
          <div className="md:flex gap-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                {data.re_domiciliation_specialty.context}
              </span>
              <Heading level="h3" size="2xl" weight="bold" className="mb-4">
                Business Continuation
              </Heading>
              <Text className="text-gray-700 mb-6">
                {data.re_domiciliation_specialty.description}
              </Text>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg mb-4 border-b pb-2">Key Benefits</h4>
                <ul className="space-y-3">
                  {data.re_domiciliation_specialty.key_benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="max-w-3xl mx-auto">
          <Heading level="h2" size="2xl" weight="bold" className="text-center mb-8">
            Relocation Checklist 2026
          </Heading>
          <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
            {data.relocation_checklist_2026.map((item, index) => (
              <div key={index} className={`p-4 flex items-start gap-4 ${index !== data.relocation_checklist_2026.length - 1 ? 'border-b' : ''}`}>
                <div className="flex-shrink-0 w-6 h-6 rounded border-2 border-gray-300 mt-0.5"></div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </>
  );
}
