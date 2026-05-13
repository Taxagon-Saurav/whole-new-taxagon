import type { Metadata } from 'next';
import { ServicePage } from '@/components/ServicePage';
import { PageTransition } from '@/components/Motion';

export const metadata: Metadata = {
  title: 'Tax Preparation',
  description: 'Taxagon tax preparation support for individual and business tax filing with document collection, accuracy, and compliance.',
  openGraph: { title: 'Tax Preparation | Taxagon', description: 'Accurate tax filing support for individuals, businesses, and self-employed professionals.' },
};

export default function TaxPreparationPage() {
  return <PageTransition><ServicePage eyebrow="Tax Preparation" title="Accurate filing support for individuals and businesses." description="Taxagon organizes documents, prepares returns, reviews details, and helps you file with confidence while keeping compliance front and center." sections={[{ icon: '✓', title: 'Individual filing', description: 'Support for W-2s, investments, family changes, students, retirees, and other tax situations.' }, { icon: '⬡', title: 'Business filing', description: 'Business returns connected to clean books, payroll, deductions, and entity details.' }, { icon: '🛡', title: 'Compliance focus', description: 'Review checkpoints designed to reduce errors, penalties, and missed opportunities.' }]} included={['Document checklist and secure intake guidance', 'Individual and business tax preparation', 'Accuracy review and filing readiness', 'Informational guidance for eligible IRS or state notices']} process={['Collect documents and understand the year.', 'Prepare, review, and clarify open questions.', 'File accurately and keep records organized.']} cta="Get started with Taxagon tax preparation." /></PageTransition>;
}
