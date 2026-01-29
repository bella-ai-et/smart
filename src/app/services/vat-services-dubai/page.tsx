import type { Metadata } from 'next';
import { vatServicesData as data } from '@/data/services/vat-services-dubai';
import { Images } from '@/lib/assets';
import HeroSection from '@/components/sections/hero-section';
import ContentWithImage from '@/components/sections/content-with-image';
import ProcessSteps from '@/components/sections/process-steps';
import Container from '@/components/ui/container';
import { Heading, Text } from '@/components/ui/typography';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: data.vat_services_overview.title,
  description: data.vat_services_overview.description,
};

export default function VatServicesPage() {
  const heroData = {
    title: data.vat_services_overview.title,
    subtitle: data.vat_services_overview.key_stat,
    description: data.vat_services_overview.description,
    primaryCTA: {
      text: "Ensure VAT Compliance",
      href: "/contact",
    },
  };

  return (
    <>
      <HeroSection data={heroData} />

      <Container className="py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Heading level="h2" size="3xl" weight="bold" className="mb-6">
              Registration Thresholds 2026
            </Heading>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Mandatory Registration</h3>
                  <p className="text-gray-600">{data.registration_thresholds_2026.mandatory_registration}</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Voluntary Registration</h3>
                  <p className="text-gray-600">{data.registration_thresholds_2026.voluntary_registration}</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Exemption</h3>
                  <p className="text-gray-600">{data.registration_thresholds_2026.exemption}</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <Heading level="h3" size="2xl" weight="bold" className="mb-6">
              Penalty Prevention
            </Heading>
            <div className="space-y-4">
              {Object.entries(data.penalty_prevention).map(([key, value]) => (
                <div key={key} className="flex items-start">
                  <div className="mr-3 mt-1 text-red-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 capitalize">{key.replace('_', ' ')}</h4>
                    <p className="text-sm text-gray-600">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">
            Core VAT Services
          </Heading>
          <div className="grid md:grid-cols-2 gap-6">
            {data.core_vat_services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{service.service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 mb-16">
          <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">
            Important 2026 Updates
          </Heading>
          <div className="grid md:grid-cols-3 gap-8">
            {data.important_2026_updates.map((update, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg text-primary mb-3">{update.update}</h3>
                <p className="text-sm text-gray-600">{update.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">
            Required Documentation
          </Heading>
          <div className="max-w-3xl mx-auto bg-white border rounded-xl p-8 shadow-sm">
            <ul className="grid gap-4">
              {data.required_documentation.map((doc, index) => (
                <li key={index} className="flex items-center">
                  <div className="mr-4 text-green-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
