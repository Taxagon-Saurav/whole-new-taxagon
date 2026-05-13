import { Hero } from './Hero';
import { SectionHeading } from './SectionHeading';
import { BenefitCard } from './Cards';
import { CTASection } from './CTASection';
import { Reveal } from './Motion';

type ServicePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: { title: string; description: string; icon: string }[];
  included: string[];
  process: string[];
  cta?: string;
};

export function ServicePage({ eyebrow, title, description, sections, included, process, cta }: ServicePageProps) {
  return (
    <>
      <Hero compact eyebrow={eyebrow} title={title} description={description} />
      <section className="container-shell py-20"><SectionHeading eyebrow="Who it helps" title="Built around your situation, not a generic checklist." description="Taxagon starts with your goals, obligations, and financial reality, then creates a practical path for planning and execution." /><div className="mt-10 grid gap-5 md:grid-cols-3">{sections.map((section) => <BenefitCard key={section.title} {...section} />)}</div></section>
      <section className="container-shell py-20"><div className="grid gap-8 rounded-[2.5rem] bg-white p-8 shadow-xl shadow-slate-950/5 lg:grid-cols-2 lg:p-10"><SectionHeading align="left" eyebrow="Included" title="What’s included" description="Clear deliverables, thoughtful guidance, and a responsive team to keep everything moving." /><div className="grid gap-3">{included.map((item) => <Reveal key={item} className="rounded-2xl border border-slate-200 bg-blue-50/50 p-4 font-bold text-slate-700">✓ {item}</Reveal>)}</div></div></section>
      <section className="container-shell py-20"><SectionHeading eyebrow="Process" title="How Taxagon works with you" /><div className="mt-10 grid gap-5 md:grid-cols-3">{process.map((item, index) => <Reveal key={item} className="rounded-[2rem] border border-slate-200 bg-white p-6"><span className="text-sm font-bold text-[#1C41F7]">STEP 0{index + 1}</span><p className="mt-4 text-lg font-bold tracking-[-0.02em] text-slate-950">{item}</p></Reveal>)}</div></section>
      <section className="container-shell py-20"><SectionHeading eyebrow="Process" title="How Taxagon works with you" /><div className="mt-10 grid gap-5 md:grid-cols-3">{process.map((item, index) => <Reveal key={item} className="rounded-[2rem] border border-slate-200 bg-white p-6"><span className="text-sm font-black text-[#1C41F7]">STEP 0{index + 1}</span><p className="mt-4 text-lg font-black tracking-[-0.02em] text-slate-950">{item}</p></Reveal>)}</div></section>
      <CTASection title={cta ?? 'Ready to move forward with Taxagon?'} />
    </>
  );
}
