import type { Metadata } from 'next';
import { ServicePage } from '@/components/ServicePage';
import { PageTransition } from '@/components/Motion';

export const metadata: Metadata = {
  title: 'Company Formation',
  description: 'Taxagon company formation support for LLC and corporation setup, EIN support, compliance guidance, tax structure, and business setup checklist.',
  openGraph: { title: 'Company Formation | Taxagon', description: 'Entity setup, EIN support, compliance guidance, and tax structure planning.' },
};

export default function CompanyFormationPage() {
  return <PageTransition><ServicePage eyebrow="Company Formation" title="Set up your business entity with the tax foundation in mind." description="Taxagon helps with LLC or corporation setup support, EIN guidance, compliance considerations, tax structure, and a practical business setup checklist." sections={[{ icon: '⬡', title: 'LLC / corporation setup', description: 'Entity formation guidance aligned with your business model and growth plans.' }, { icon: '✓', title: 'EIN and compliance', description: 'Support for foundational identifiers, registrations, and ongoing responsibilities.' }, { icon: '↘', title: 'Tax structure guidance', description: 'Think through structure, payroll readiness, bookkeeping, deductions, and filing from day one.' }]} included={['LLC and corporation setup support', 'EIN support and setup checklist', 'Compliance and recordkeeping guidance', 'Tax structure planning connected to accounting workflows']} process={['Choose the right setup path for your goals.', 'Coordinate entity, EIN, and compliance tasks.', 'Prepare bookkeeping, payroll, and tax workflows.']} cta="Launch your company with Taxagon support." /></PageTransition>;
}
