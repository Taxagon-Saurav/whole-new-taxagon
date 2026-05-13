import { ButtonLink } from './ButtonLink';
import { links } from '@/lib/links';

export function ContactForm() {
  return (
    <form className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700">First name<input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1C41F7] focus:ring-4 focus:ring-[#1C41F7]/10" placeholder="Alex" /></label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">Last name<input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1C41F7] focus:ring-4 focus:ring-[#1C41F7]/10" placeholder="Morgan" /></label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-slate-700">Email<input type="email" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1C41F7] focus:ring-4 focus:ring-[#1C41F7]/10" placeholder="alex@company.com" /></label>
      <label className="mt-4 grid gap-2 text-sm font-bold text-slate-700">What can we help with?<select className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1C41F7] focus:ring-4 focus:ring-[#1C41F7]/10" defaultValue=""><option value="" disabled>Select a service</option><option>Tax Advisory</option><option>Tax Preparation</option><option>Outsourced CFO</option><option>Company Formation</option></select></label>
      <label className="mt-4 grid gap-2 text-sm font-bold text-slate-700">Message<textarea className="min-h-36 rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1C41F7] focus:ring-4 focus:ring-[#1C41F7]/10" placeholder="Tell us about your goals, timeline, or current tax situation." /></label>
      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href={links.getStarted}>Submit Request</ButtonLink>
        <ButtonLink href={links.calendly} variant="secondary">Book a Call</ButtonLink>
      </div>
    </form>
  );
}
