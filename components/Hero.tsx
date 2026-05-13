import { AnimatedBackground } from './AnimatedBackground';
import { ButtonLink } from './ButtonLink';
import { Reveal } from './Motion';
import { links } from '@/lib/links';

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary?: string;
  secondary?: string;
  compact?: boolean;
};

export function Hero({ eyebrow, title, description, primary = 'Get Started', secondary = 'Book a Call', compact = false }: HeroProps) {
  return (
    <section className={`relative overflow-hidden ${compact ? 'py-20' : 'py-20 lg:py-28'}`}>
      <AnimatedBackground />
      <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <Reveal>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#1C41F7]">{eyebrow}</p>
          <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-[-0.075em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-8xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={links.getStarted}>{primary}</ButtonLink>
            <ButtonLink href={links.calendly} variant="secondary">{secondary}</ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="relative">
          <div className="float-soft rounded-[2.5rem] border border-white bg-white/86 p-5 shadow-2xl shadow-slate-950/10 backdrop-blur">
            <div className="rounded-[2rem] bg-slate-950 p-5 text-white">
              <div className="flex items-center justify-between"><span className="text-sm font-bold text-slate-300">Taxagon snapshot</span><span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black text-emerald-200">Healthy</span></div>
              <div className="mt-8 rounded-3xl bg-white/10 p-5"><p className="text-sm text-slate-300">Estimated tax opportunities</p><strong className="mt-2 block text-4xl font-black tracking-[-0.05em]">Planned early</strong></div>
              <div className="mt-4 grid grid-cols-2 gap-4"><div className="rounded-3xl bg-white p-4 text-slate-950"><span className="text-xs font-bold text-slate-500">Bookkeeping</span><strong className="mt-2 block text-2xl">Clean</strong></div><div className="rounded-3xl bg-[#1C41F7] p-4"><span className="text-xs font-bold text-blue-100">Filing</span><strong className="mt-2 block text-2xl">On time</strong></div></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
