import type { Metadata } from 'next';
import { ServicePage } from '@/components/ServicePage';
import { PageTransition } from '@/components/Motion';

export const metadata: Metadata = {
  title: 'Outsourced CFO',
  description: 'Taxagon outsourced CFO support for reporting, cash flow planning, business advisory, budgeting, forecasting, and monthly financial insights.',
  openGraph: { title: 'Outsourced CFO | Taxagon', description: 'CFO-level reporting, cash-flow planning, and advisory for growing businesses.' },
};

export default function OutsourcedCfoPage() {
  return <PageTransition><ServicePage eyebrow="Outsourced CFO" title="Monthly financial clarity without hiring a full finance department." description="Use your numbers to make better decisions with reporting, cash flow planning, business advisory, budgeting, forecasting, and monthly insights." sections={[{ icon: '📈', title: 'Financial reporting', description: 'Clean monthly views that translate books into margin, runway, and operating decisions.' }, { icon: '⏱', title: 'Cash flow planning', description: 'Understand timing, reserves, and scenarios before cash pressure arrives.' }, { icon: '◎', title: 'Business advisory', description: 'Practical guidance for growth, hiring, pricing, budgets, forecasts, and financial priorities.' }]} included={['Monthly financial insights and review cadence', 'Cash flow planning and reserve guidance', 'Budgeting and forecasting support', 'Business advisory connected to bookkeeping and taxes']} process={['Build a reporting foundation from clean books.', 'Review cash flow, budget, and forecast drivers.', 'Use monthly insights to guide decisions.']} cta="Bring CFO-level insight into your business." /></PageTransition>;
}
