import type { Metadata } from 'next'
import { officeSpaceData as data } from '@/data/services/office-space-solutions'
import { Images } from '@/lib/assets'
import HeroSection from '@/components/sections/hero-section';
import ContentWithImage from '@/components/sections/content-with-image';
import ProcessSteps from '@/components/sections/process-steps';
import Container from '@/components/ui/container';
import { Heading, Text } from '@/components/ui/typography';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: data.office_solutions_overview.title,
  description: data.office_solutions_overview.description,
};

export default function OfficeSpacePage() {
  const heroData = {
    title: data.office_solutions_overview.title,
    subtitle: "Find your perfect workspace in Dubai",
    description: data.office_solutions_overview.description,
    primaryCTA: {
      text: "Find Office Space",
      href: "/contact",
    },
  };

  return (
    <>
      <HeroSection data={heroData} />

      <Container className="py-16">
        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-16">
          <Heading level="h3" size="2xl" weight="bold" className="mb-4 text-primary">
            Key Requirement
          </Heading>
          <Text className="text-lg text-gray-800">
            {data.office_solutions_overview.key_requirement}
          </Text>
        </div>

        <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">
          Office Types 2026
        </Heading>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {data.office_types_2026.map((type, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{type.type}</CardTitle>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{type.best_for}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-bold text-sm text-gray-800 mb-2">Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {type.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600">{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-sm">
                  <span className="font-bold text-gray-800">Visa Quota: </span>
                  <span className="text-gray-600">{type.visa_quota}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <Heading level="h2" size="3xl" weight="bold" className="mb-6">
              Strategic Locations
            </Heading>
            <div className="space-y-4">
              {data.strategic_locations.map((loc, index) => (
                <div key={index} className="flex items-start p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="mr-4 mt-1 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{loc.area}</h3>
                    <p className="text-sm text-gray-600">{loc.advantage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <Heading level="h2" size="3xl" weight="bold" className="mb-6">
              Compliance & Facilities
            </Heading>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Mandatory Services</h3>
                <ul className="space-y-3">
                  {data.compliance_and_facilities.mandatory_services.map((service, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Shared Amenities</h3>
                <ul className="space-y-3">
                  {data.compliance_and_facilities.shared_amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <Heading level="h2" size="3xl" weight="bold" className="text-center mb-10">
            Our Process
          </Heading>
          <div className="grid md:grid-cols-4 gap-6">
            {data.our_process.map((step, index) => {
              const [title, desc] = step.split(': ');
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center p-6 bg-white border rounded-xl h-full hover:shadow-lg transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{title}</h3>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}
