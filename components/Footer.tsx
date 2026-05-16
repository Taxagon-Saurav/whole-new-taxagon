import Link from 'next/link';
import { links } from '@/lib/links';
import { navServices } from '@/lib/content';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/75">
      <div className="container-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="Taxagon home">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#1C41F7] text-lg font-bold text-white">T</span>
              <span className="text-2xl font-bold tracking-[-0.05em] text-slate-950">Taxagon</span>
            </Link>
            <p className="mt-5 max-w-sm leading-7 text-slate-600">Comprehensive bookkeeping, tax planning, and filing services for individuals, self-employed professionals, and growing businesses.</p>
            <div className="mt-6 flex gap-3" aria-label="Social links">
              {['ig', 'in', 'x'].map((item) => <a key={item} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-xs font-bold uppercase text-slate-700 transition hover:-translate-y-0.5 hover:border-[#1C41F7]/40">{item}</a>)}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-950">Quick links</h3>
            <ul className="mt-5 grid gap-3 text-sm font-semibold text-slate-600">
              {[
                ['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Contact', '/contact'],
              ].map(([label, href]) => <li key={href}><Link className="hover:text-[#1C41F7]" href={href}>{label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-950">Services</h3>
            <ul className="mt-5 grid gap-3 text-sm font-semibold text-slate-600">
              {navServices.map((service) => <li key={service.href}><Link className="hover:text-[#1C41F7]" href={service.href}>{service.title}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-950">Contact</h3>
            <ul className="mt-5 grid gap-3 text-sm font-semibold text-slate-600">
              <li><a className="hover:text-[#1C41F7]" href={links.email}>info@taxagon.co</a></li>
              <li><a className="hover:text-[#1C41F7]" href={links.calendly}>Book a call</a></li>
              <li><a className="hover:text-[#1C41F7]" href={links.whatsapp}>Join WhatsApp community</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-xs leading-6 text-slate-500">
          <p>Any data shared is subject to applicable law and consent. Product images used are for illustrative purposes only.</p>
          <p className="mt-2">© 2023-2026 Taxagon LLC. All rights reserved.</p>
          <p className="mt-4 max-w-5xl">If our tax preparation pro makes an arithmetic error that results in a penalty or interest from the IRS that you would otherwise not have been required to pay, Taxagon may reimburse eligible fees subject to policy terms. Taxagon provides informational audit guidance and does not offer legal advice.</p>
        </div>
      </div>
    </footer>
  );
}
