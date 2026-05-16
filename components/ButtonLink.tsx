import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

function isInternalHref(href: string) {
  return href.startsWith('/');
}

export function ButtonLink({ href, children, variant = 'primary', className = '' }: ButtonLinkProps) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#1C41F7]/20';
  const variants = {
    primary: 'bg-[#1C41F7] !text-white shadow-[0_16px_36px_rgba(28,65,247,.25)] hover:shadow-[0_20px_46px_rgba(28,65,247,.36)]',
    secondary: 'border border-slate-200 bg-white/80 text-slate-900 shadow-sm hover:border-[#1C41F7]/30 hover:bg-white',
    ghost: 'text-slate-700 hover:bg-slate-100',
  };
  const classNames = `${base} ${variants[variant]} ${className}`;

  if (isInternalHref(href)) {
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classNames}>
      {children}
    </a>
  );
}
