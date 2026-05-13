import { Reveal } from './Motion';

const stats = [
  { value: '3', label: 'client groups served: individuals, businesses, self-employed' },
  { value: '4', label: 'core services connected in one accounting suite' },
  { value: '365', label: 'days of year-round planning support mindset' },
];

export function StatsSection() {
  return (
    <section className="container-shell py-12">
      <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur md:grid-cols-3">
        {stats.map((stat) => (
          <Reveal key={stat.label} className="rounded-[1.5rem] bg-blue-50/60 p-6 text-center">
            <div className="text-4xl font-bold tracking-[-0.06em] text-[#1C41F7]">{stat.value}</div>
            <p className="mt-2 text-sm font-bold leading-6 text-slate-600">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
