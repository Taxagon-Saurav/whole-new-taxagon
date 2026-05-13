import { links } from '@/lib/links';
import { ButtonLink } from './ButtonLink';
import { Reveal } from './Motion';

export function CTASection({ title = 'Ready to simplify your accounting and taxes?', description = 'Bring bookkeeping, tax planning, filing, and financial questions into one responsive team.' }: { title?: string; description?: string }) {
  return (
    <Reveal className="container-shell my-20 overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 sm:p-10 lg:p-14">
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-200">Get in touch</p>
          <h2 className="text-balance text-3xl font-bold tracking-[-0.055em] sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={links.getStarted}>Get Started</ButtonLink>
          <ButtonLink href={links.calendly} variant="secondary">Book a Call</ButtonLink>
        </div>
      </div>
    </Reveal>
  );
}
