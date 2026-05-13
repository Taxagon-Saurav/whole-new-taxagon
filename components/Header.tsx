'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { links } from '@/lib/links';
import { navServices } from '@/lib/content';
import { ButtonLink } from './ButtonLink';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Taxagon home">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#1C41F7] text-lg font-black text-white shadow-lg shadow-[#1C41F7]/25">T</span>
      <span className="text-xl font-black tracking-[-0.04em] text-slate-950">Taxagon</span>
    </Link>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="container-shell rounded-full border border-white/70 bg-white/82 px-4 py-3 shadow-[0_16px_50px_rgba(17,24,39,.08)] backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-bold text-slate-700 lg:flex" aria-label="Primary navigation">
            <Link className="transition hover:text-[#1C41F7]" href="/about">About</Link>
            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <Link className="transition hover:text-[#1C41F7]" href="/services" aria-haspopup="menu" aria-expanded={isServicesOpen}>Services</Link>
              <AnimatePresence>
                {isServicesOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-8 w-[360px] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-950/10"
                    role="menu"
                  >
                    {navServices.map((service) => (
                      <Link key={service.href} href={service.href} className="block rounded-2xl p-4 transition hover:bg-blue-50" role="menuitem">
                        <span className="font-black text-slate-950">{service.title}</span>
                        <span className="mt-1 block text-sm font-medium leading-6 text-slate-500">{service.description}</span>
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
            <Link className="transition hover:text-[#1C41F7]" href="/contact">Contact</Link>
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink href={links.clientPortal} variant="secondary">Client Portal</ButtonLink>
            <ButtonLink href={links.getStarted}>Get Started</ButtonLink>
          </div>
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-950 lg:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span className="relative h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="container-shell mt-3 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-950/10 lg:hidden"
          >
            <nav className="grid gap-2 text-sm font-bold" aria-label="Mobile navigation">
              <Link onClick={() => setIsMenuOpen(false)} className="rounded-2xl p-3 hover:bg-blue-50" href="/about">About</Link>
              <Link onClick={() => setIsMenuOpen(false)} className="rounded-2xl p-3 hover:bg-blue-50" href="/services">Services</Link>
              {navServices.map((service) => (
                <Link onClick={() => setIsMenuOpen(false)} key={service.href} className="rounded-2xl px-6 py-3 text-slate-600 hover:bg-blue-50" href={service.href}>{service.title}</Link>
              ))}
              <Link onClick={() => setIsMenuOpen(false)} className="rounded-2xl p-3 hover:bg-blue-50" href="/contact">Contact</Link>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <ButtonLink href={links.clientPortal} variant="secondary">Client Portal</ButtonLink>
                <ButtonLink href={links.getStarted}>Get Started</ButtonLink>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
