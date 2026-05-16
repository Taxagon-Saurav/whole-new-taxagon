import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';


export const metadata: Metadata = {
  metadataBase: new URL('https://www.taxagon.co'),
  title: { default: 'Taxagon | One team for all your accounting needs', template: '%s | Taxagon' },
  description: 'Comprehensive bookkeeping, tax planning, and filing services for individuals, self-employed professionals, and growing businesses.',
  openGraph: {
    title: 'Taxagon | One team for all your accounting needs',
    description: 'Modern tax advisory, preparation, outsourced CFO, and company formation support.',
    url: 'https://www.taxagon.co',
    siteName: 'Taxagon',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
