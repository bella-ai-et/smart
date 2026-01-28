import type { Metadata } from 'next';
import { productRegistrationData as data } from '@/data/services/product-registration';
import { Images } from '@/lib/assets';
import HeroSection from '@/components/sections/hero-section';
import ContentWithImage from '@/components/sections/content-with-image';
import ProcessSteps from '@/components/sections/process-steps';
import Container from '@/components/ui/container';
import { Heading, Text } from '@/components/ui/typography';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: data.product_registration_overview.title,
  description: data.product_registration_overview.description,
};

export default function ProductRegistrationPage() {
  const heroData = {
    title: data.product_registration_overview.title,
    subtitle: "Secure mandatory government approvals",
    description: data.product_registration_overview.description,
    primaryCTA: {
      text: "Register Product",
      href: "/contact",
    },
    backgroundImage: {
      src: Images.hero.services.productRegistration,
      alt: data.product_registration_overview.title,
    },
  };

  return (
    <>
      <HeroSection data={heroData} />

      <Container className="py-16">
        <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100 mb-16">
          <Heading level="h3" size="2xl" weight="bold" className="mb-4 text-primary">
            Market Access 2026
          </Heading>
          <Text className="text-lg text-gray-800">
            {data.product_registration_overview.market_access_2026}
          </Text>
        </div>

        <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">
          Regulatory Authorities
        </Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {data.regulatory_authorities_2026.map((auth, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{auth.authority}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{auth.scope}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <Heading level="h2" size="3xl" weight="bold" className="mb-6">
              Mandatory Requirements
            </Heading>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Documentation</h3>
                <ul className="space-y-2">
                  {data.mandatory_requirements_2026.documentation.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Labeling Standards</h3>
                <ul className="space-y-2">
                  {data.mandatory_requirements_2026.labeling_standards.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <Heading level="h2" size="3xl" weight="bold" className="mb-6">
              Registration Pathways
            </Heading>
            <div className="space-y-4">
              {data.registration_pathways.map((path, index) => (
                <div key={index} className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg text-primary mb-2">{path.path}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="block text-gray-500 text-xs uppercase tracking-wider">Timeline</span>
                      <span className="font-medium">{path.timeline}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500 text-xs uppercase tracking-wider">Validity</span>
                      <span className="font-medium">{path.validity}</span>
                    </div>
                    <div className="col-span-2 border-t pt-2 mt-2">
                      <span className="block text-gray-500 text-xs uppercase tracking-wider">Estimated Fee</span>
                      <span className="font-medium text-gray-800">{path.fee_estimate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">
          Our Compliance Process
        </Heading>
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {data.our_compliance_process.map((step, index) => (
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

        <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
          <Heading level="h2" size="2xl" weight="bold" className="mb-6 text-red-800">
            Common Pitfalls We Solve
          </Heading>
          <div className="grid md:grid-cols-2 gap-4">
            {data.common_pitfalls_we_solve.map((pitfall, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700 font-medium">{pitfall}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
