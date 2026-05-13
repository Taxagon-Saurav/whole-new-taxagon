import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { BenefitCard, AudienceCard, TestimonialCard } from '@/components/Cards';
import { benefits, audienceCards, serviceCards, taxSituations, testimonials } from '@/lib/content';
import { ServiceCard } from '@/components/Cards';
import { CTASection } from '@/components/CTASection';
import { StatsSection } from '@/components/StatsSection';
import { Reveal, PageTransition } from '@/components/Motion';
import { ButtonLink } from '@/components/ButtonLink';
import { links } from '@/lib/links';

export const metadata: Metadata = {
  title: 'One team for all your accounting needs',
  description: 'Taxagon provides comprehensive bookkeeping, tax planning, and filing services for individuals, self-employed professionals, and growing businesses.',
  openGraph: { title: 'Taxagon | One team for all your accounting needs', description: 'Bookkeeping, tax planning, filing, outsourced CFO, and company formation in one premium accounting experience.' },
};

export default function Home() {
  return (
    <PageTransition>
      <Hero eyebrow="Tax-tech accounting team" title="One team for all your accounting needs" description="Comprehensive bookkeeping, tax planning, and filing services for individuals, self-employed professionals, and growing businesses." />
      <section className="container-shell overflow-hidden rounded-full border border-slate-200 bg-white/80 py-4 shadow-sm" aria-label="Trusted services">
        <div className="marquee-track flex w-[200%] gap-8 whitespace-nowrap text-sm font-black uppercase tracking-[0.18em] text-slate-500">
          {[...['Bookkeeping', 'Tax planning', 'Tax filing', 'Payroll', 'NRI services', 'Company formation', 'Outsourced accounting', 'Financial planning'], ...['Bookkeeping', 'Tax planning', 'Tax filing', 'Payroll', 'NRI services', 'Company formation', 'Outsourced accounting', 'Financial planning']].map((item, index) => <span key={`${item}-${index}`}>Used for {item}</span>)}
        </div>
      </section>
      <section className="container-shell py-20">
        <SectionHeading eyebrow="Benefits" title="Reduce the taxes on your income, no matter what kind." description="Taxagon pairs proactive planning with reliable execution so your books, filings, and decisions stay aligned." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">{benefits.map((benefit) => <BenefitCard key={benefit.title} {...benefit} />)}</div>
      </section>
      <StatsSection />
      <section className="container-shell grid gap-10 py-20 lg:grid-cols-2 lg:items-center">
        <Reveal><div className="rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20"><div className="rounded-[2rem] bg-white p-6 text-slate-950"><p className="text-sm font-black uppercase tracking-[0.2em] text-[#1C41F7]">A new accounting experience</p><h2 className="mt-4 text-4xl font-black tracking-[-0.055em]">Use your time more efficiently and hit your goals.</h2><div className="mt-8 grid gap-3"><span className="rounded-2xl bg-blue-50 p-4 font-bold">✓ Full suite of accounting services</span><span className="rounded-2xl bg-blue-50 p-4 font-bold">✓ Quick responses and fewer missed deadlines</span><span className="rounded-2xl bg-blue-50 p-4 font-bold">✓ Scalable support as your needs evolve</span></div></div></div></Reveal>
        <Reveal delay={0.1}><SectionHeading align="left" eyebrow="Experience" title="A full accounting suite that feels like an in-house team." description="Taxagon helps you plan strategically, calculate potential returns, execute your tax plan, and keep local, state, and federal compliance organized." /><div className="mt-8"><ButtonLink href="/services">Explore services</ButtonLink></div></Reveal>
      </section>
      <section className="container-shell py-20">
        <SectionHeading eyebrow="Services" title="Taxagon suite of services" description="Choose focused support or bring every finance workflow into one coordinated system." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{serviceCards.map((service) => <ServiceCard key={service.title} {...service} />)}</div>
      </section>
      <section className="container-shell py-20">
        <SectionHeading eyebrow="Customers" title="Built for individuals, businesses, and self-employed professionals." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">{audienceCards.map((card) => <AudienceCard key={card.title} icon="" {...card} />)}</div>
      </section>
      <section className="container-shell py-20">
        <div className="grid gap-8 rounded-[2.5rem] border border-slate-200 bg-white p-6 lg:grid-cols-[.9fr_1.1fr] lg:p-10">
          <SectionHeading align="left" eyebrow="Reading materials" title="Select all that apply to see how Taxagon can advise you." description="Explore common tax situations across income, investments, family, business ownership, and major transitions." />
          <div className="flex flex-wrap content-start gap-3">{taxSituations.map((item) => <span key={item} className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-slate-700">{item}</span>)}</div>
        </div>
      </section>
      <section className="container-shell py-20">
        <SectionHeading eyebrow="Why customers love Taxagon" title="A seamless experience taxpayers actually love." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">{['The Most Reliable|Trustworthy accounting service with quick response.', 'The Most Experienced|Say goodbye to slow responses and missed deadlines.', 'The Most Scalable|No matter how your needs evolve, we’ve got you covered.'].map((item) => { const [title, desc] = item.split('|'); return <BenefitCard key={title} icon="✦" title={title} description={desc} />; })}</div>
      </section>
      <section className="overflow-hidden py-20"><div className="container-shell"><SectionHeading eyebrow="Testimonials" title="What our customers are saying" /></div><div className="mt-10 flex gap-5 overflow-hidden"><div className="marquee-track flex gap-5">{[...testimonials, ...testimonials].map((testimonial, index) => <TestimonialCard key={`${testimonial.quote}-${index}`} {...testimonial} />)}</div></div></section>
      <section className="container-shell py-10"><Reveal className="grid gap-8 rounded-[2.5rem] bg-[#1C41F7] p-8 text-white shadow-2xl shadow-[#1C41F7]/25 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.2em] text-blue-100">Community</p><h2 className="mt-3 text-3xl font-black tracking-[-0.05em] sm:text-5xl">Join our WhatsApp community and save money on taxes.</h2></div><ButtonLink href={links.whatsapp} variant="secondary">Join Community</ButtonLink></Reveal></section>
      <CTASection title="Get in touch — we’re here to help if you have any questions." description="Schedule a call with us, message us, or send an email. Taxagon is always talking taxes." />
    </PageTransition>
  );
}
