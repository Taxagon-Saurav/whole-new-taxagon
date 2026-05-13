import Link from 'next/link';
import type { ReactNode } from 'react';
import { Reveal } from './Motion';
import { ButtonLink } from './ButtonLink';

type CardProps = {
  icon: string;
  title: string;
  description: string;
  href?: string;
  tags?: string[];
};

export function BenefitCard({ icon, title, description }: CardProps) {
  return (
    <Reveal className="card-hover rounded-[2rem] border border-slate-200 bg-white/82 p-6 shadow-sm backdrop-blur">
      <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-2xl font-black text-[#1C41F7]">{icon}</div>
      <h3 className="text-xl font-black tracking-[-0.03em] text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </Reveal>
  );
}

export function ServiceCard({ icon, title, description, href }: CardProps) {
  return (
    <Reveal className="group card-hover flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-7 flex items-center justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#1C41F7] text-xl font-black text-white shadow-lg shadow-[#1C41F7]/25">{icon}</div>
        <span className="text-2xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#1C41F7]">→</span>
      </div>
      <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-950">{title}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate-600">{description}</p>
      {href ? <ButtonLink href={href} variant="secondary" className="mt-7 w-fit">Learn More</ButtonLink> : null}
    </Reveal>
  );
}

export function AudienceCard({ title, description, tags }: CardProps) {
  return (
    <Reveal className="card-hover rounded-[2rem] border border-slate-200 bg-gradient-to-b from-white to-blue-50/45 p-6">
      <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags?.map((tag) => <span key={tag} className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-bold text-slate-600">{tag}</span>)}
      </div>
    </Reveal>
  );
}

export function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <article className="min-w-[310px] rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:min-w-[380px]">
      <div className="text-5xl font-black leading-none text-[#1C41F7]">“</div>
      <p className="mt-2 text-lg font-bold leading-8 tracking-[-0.02em] text-slate-950">{quote}</p>
      <div className="mt-7 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-sm font-black text-white">{name.slice(0, 1)}</div>
        <div>
          <p className="m-0 font-black text-slate-950">{name}</p>
          <p className="m-0 text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </article>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="font-black text-[#1C41F7] underline decoration-[#1C41F7]/20 underline-offset-4 hover:decoration-[#1C41F7]">{children}</Link>;
}
