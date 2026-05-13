import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/Cards';
import { SectionHeading } from '@/components/SectionHeading';
import { CTASection } from '@/components/CTASection';
import { serviceCards } from '@/lib/content';
import { PageTransition } from '@/components/Motion';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Taxagon services: tax advisory, tax preparation, outsourced CFO, and company formation.',
  openGraph: { title: 'Taxagon Services', description: 'Four connected services for tax strategy, filing, financial insights, and business setup.' },
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <Hero compact eyebrow="Services" title="One accounting suite. Four ways to move faster." description="From tax planning to business setup, Taxagon gives you expert execution and year-round financial clarity." />
      <section className="container-shell py-20"><SectionHeading eyebrow="What we do" title="Choose your starting point" description="Each service can stand alone or connect into a broader Taxagon support system." /><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{serviceCards.map((service) => <ServiceCard key={service.slug} {...service} />)}</div></section>
      <CTASection />
    </PageTransition>
  );
}
