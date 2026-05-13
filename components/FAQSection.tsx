import { faqs } from '@/lib/content';
import { Reveal } from './Motion';
import { SectionHeading } from './SectionHeading';

export function FAQSection() {
  return (
    <section className="container-shell py-20">
      <SectionHeading eyebrow="FAQ" title="Questions before you get started?" description="Clear answers for common Taxagon conversations." />
      <div className="mx-auto mt-10 max-w-4xl divide-y divide-slate-200 overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
        {faqs.map((faq) => (
          <Reveal key={faq.question} className="p-6">
            <h3 className="text-lg font-bold tracking-[-0.02em] text-slate-950">{faq.question}</h3>
            <p className="mt-2 leading-7 text-slate-600">{faq.answer}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
