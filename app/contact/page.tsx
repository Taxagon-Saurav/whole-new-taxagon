import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeading } from '@/components/SectionHeading';
import { FAQSection } from '@/components/FAQSection';
import { ButtonLink } from '@/components/ButtonLink';
import { links } from '@/lib/links';
import { PageTransition, Reveal } from '@/components/Motion';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Taxagon to book a call, join the WhatsApp community, email the team, or request help with accounting and taxes.',
  openGraph: { title: 'Contact Taxagon', description: 'Book a call, message Taxagon, or send an email for accounting and tax support.' },
};

export default function ContactPage() {
  const cards = [
    { title: 'Book a call', description: 'Schedule a consultation with the Taxagon team.', href: links.calendly, label: 'Open Calendly' },
    { title: 'Contact on WhatsApp', description: 'Message or join the community for tax conversations.', href: links.whatsapp, label: 'Open WhatsApp' },
    { title: 'Email us', description: 'Send questions and concerns to info@taxagon.co.', href: links.email, label: 'Send Email' },
  ];
  return (
    <PageTransition>
      <Hero compact eyebrow="Contact" title="We’re here to help if you have any questions." description="Schedule a call with us, message us, or send an email. Tell us where you are today and what you want your accounting to solve." />
      <section className="container-shell grid gap-8 py-20 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionHeading align="left" eyebrow="Get in touch" title="Start with a note or book directly." description="Use the form for accounting, tax advisory, tax preparation, CFO, or company formation requests." />
          <div className="mt-8 grid gap-4">{cards.map((card) => <Reveal key={card.title} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm"><h3 className="text-xl font-bold tracking-[-0.03em]">{card.title}</h3><p className="mt-2 leading-7 text-slate-600">{card.description}</p><div className="mt-4"><ButtonLink href={card.href} variant="secondary">{card.label}</ButtonLink></div></Reveal>)}</div>
          <div className="mt-8 grid gap-4">{cards.map((card) => <Reveal key={card.title} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm"><h3 className="text-xl font-black tracking-[-0.03em]">{card.title}</h3><p className="mt-2 leading-7 text-slate-600">{card.description}</p><div className="mt-4"><ButtonLink href={card.href} variant="secondary">{card.label}</ButtonLink></div></Reveal>)}</div>
        </div>
        <ContactForm />
      </section>
      <section className="container-shell py-10"><div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-blue-50 p-8"><SectionHeading eyebrow="Location" title="Remote-first support with a clean digital workflow." description="Map placeholder: Taxagon serves clients through secure online intake, calls, email, and messaging." /></div></section>
      <FAQSection />
    </PageTransition>
  );
}
