import type { Metadata } from 'next';
import { ServicePage } from '@/components/ServicePage';
import { PageTransition } from '@/components/Motion';

export const metadata: Metadata = {
  title: 'Tax Advisory',
  description: 'Strategic Taxagon tax advisory for individuals, business owners, self-employed professionals, capital gains, crypto, NRI services, and planning needs.',
  openGraph: { title: 'Tax Advisory | Taxagon', description: 'Proactive tax planning to reduce taxes and make confident financial decisions.' },
};

export default function TaxAdvisoryPage() {
  return <PageTransition><ServicePage eyebrow="Tax Advisory" title="Proactive planning to reduce taxes before filing season." description="Maximize your earnings with strategic tax planning, calculated opportunities, and expert execution for complex income, investments, and business decisions." sections={[{ icon: '↘', title: 'High-income earners', description: 'Plan around ordinary income, equity, capital gains, crypto, and major financial decisions.' }, { icon: '◌', title: 'Business owners', description: 'Coordinate entity structure, payroll, bookkeeping, and tax strategy.' }, { icon: '✦', title: 'Families and NRI clients', description: 'Navigate parent/guardian, student, retirement, unemployment, and NRI tax situations.' }]} included={['Tax situation review and planning priorities', 'Estimated payment and deduction guidance', 'Capital gains, crypto, and business owner planning', 'Local, state, and federal compliance guidance']} process={['Discover your income, goals, and upcoming events.', 'Model opportunities and prioritize practical tax moves.', 'Execute, review, and adjust the plan year-round.']} cta="Book a call for proactive tax advisory." /></PageTransition>;
}
