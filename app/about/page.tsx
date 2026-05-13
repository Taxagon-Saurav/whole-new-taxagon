import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { CTASection } from '@/components/CTASection';
import { BenefitCard } from '@/components/Cards';
import { PageTransition, Reveal } from '@/components/Motion';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Taxagon, the accounting and tax team helping individuals, self-employed professionals, and businesses simplify financial operations.',
  openGraph: { title: 'About Taxagon', description: 'A modern accounting team for bookkeeping, tax planning, filing, and financial clarity.' },
};

export default function AboutPage() {
  const process = ['Understand your goals and current tax situation.', 'Clean up the financial data and organize the right workflow.', 'Plan proactively, file accurately, and keep improving year-round.'];
  return (
    <PageTransition>
      <Hero compact eyebrow="About Taxagon" title="A modern accounting partner built for clarity." description="Taxagon brings bookkeeping, tax planning, filing, and advisory support together so clients can focus on the work and life they love." />
      <section className="container-shell py-20"><SectionHeading eyebrow="Who we are" title="We are one team for all your accounting needs." description="Taxagon supports individuals, self-employed professionals, and growing businesses with trustworthy accounting service, quick response, and scalable support." /></section>
      <section className="container-shell grid gap-6 py-10 md:grid-cols-2"><BenefitCard icon="◎" title="Our mission" description="Use your time more efficiently and hit your goals with a full suite of accounting services that reduce complexity and improve confidence." /><BenefitCard icon="✦" title="Why Taxagon" description="We help clients reduce taxes, save time and labor, and stay prepared for compliance questions before they become stressful." /></section>
      <section className="container-shell py-20"><SectionHeading eyebrow="Different by design" title="What makes us different" /><div className="mt-10 grid gap-5 md:grid-cols-3"><BenefitCard icon="1" title="Reliable" description="A responsive team that organizes deadlines, documents, and next steps." /><BenefitCard icon="2" title="Experienced" description="Support for ordinary income, capital gains, crypto, NRI needs, family changes, and business ownership." /><BenefitCard icon="3" title="Scalable" description="Services evolve from tax filing to company formation, bookkeeping, payroll, and outsourced accounting." /></div></section>
      <section className="container-shell py-20"><div className="rounded-[2.5rem] bg-white p-8 shadow-xl shadow-slate-950/5"><SectionHeading eyebrow="Our process" title="A simple process that keeps momentum." /> <div className="mt-10 grid gap-4 md:grid-cols-3">{process.map((item, index) => <Reveal key={item} className="rounded-[2rem] bg-blue-50 p-6"><span className="font-bold text-[#1C41F7]">0{index + 1}</span><p className="mt-4 font-bold leading-7 text-slate-700">{item}</p></Reveal>)}</div></div></section>
      <section className="container-shell py-20"><div className="rounded-[2.5rem] bg-white p-8 shadow-xl shadow-slate-950/5"><SectionHeading eyebrow="Our process" title="A simple process that keeps momentum." /> <div className="mt-10 grid gap-4 md:grid-cols-3">{process.map((item, index) => <Reveal key={item} className="rounded-[2rem] bg-blue-50 p-6"><span className="font-black text-[#1C41F7]">0{index + 1}</span><p className="mt-4 font-bold leading-7 text-slate-700">{item}</p></Reveal>)}</div></div></section>
      <CTASection title="Ready to simplify your accounting and taxes?" />
    </PageTransition>
  );
}
