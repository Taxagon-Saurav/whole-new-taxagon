type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#1C41F7]">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-bold tracking-[-0.055em] text-slate-800 sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}
