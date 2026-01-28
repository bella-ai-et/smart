import type { Metadata } from 'next';
import { corporateTaxData as data } from '@/data/services/corporate-tax-consultants-dubai';
import { Images } from '@/lib/assets';
import HeroSection from '@/components/sections/hero-section';
import ContentWithImage from '@/components/sections/content-with-image';
import ProcessSteps from '@/components/sections/process-steps';
import Container from '@/components/ui/container';
import { Heading, Text } from '@/components/ui/typography';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: data.corporate_tax_overview.title,
  description: data.corporate_tax_overview.description,
};

export default function CorporateTaxPage() {
  const heroData = {
    title: data.corporate_tax_overview.title,
    subtitle: "Navigate the UAE's federal corporate tax regime with confidence",
    description: data.corporate_tax_overview.description,
    primaryCTA: {
      text: "Get Tax Compliant",
      href: "/contact",
    },
    backgroundImage: {
      src: Images.hero.services.corporateTax,
      alt: data.corporate_tax_overview.title,
    },
  };

  return (
    <>
      <HeroSection data={heroData} />

      <Container className="py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Heading level="h2" size="3xl" weight="bold" className="mb-6">
              Tax Slabs 2026
            </Heading>
            <Text className="mb-6 text-gray-600">
              Understanding the applicable tax rates is crucial for compliance.
            </Text>
            <div className="space-y-4">
              {data.tax_slabs_2026.map((slab, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{slab.slab}</h3>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                        {slab.rate}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{slab.applicability}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <Heading level="h3" size="2xl" weight="bold" className="mb-6">
              Key Compliance Deadlines
            </Heading>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-primary mb-2">Registration</h4>
                <p className="text-gray-700">{data.key_compliance_deadlines.registration}</p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Filing & Payment</h4>
                <p className="text-gray-700">{data.key_compliance_deadlines.filing_and_payment}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
                <strong>Example:</strong> {data.key_compliance_deadlines.example}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">
            Small Business Relief (SBR)
          </Heading>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Threshold</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{data.small_business_relief_sbr.threshold}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Benefit</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{data.small_business_relief_sbr.benefit}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Validity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{data.small_business_relief_sbr.validity}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">
            Our Tax Services
          </Heading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.our_tax_services.map((service, index) => (
              <div key={index} className="flex items-start p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="mr-4 mt-1 text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
