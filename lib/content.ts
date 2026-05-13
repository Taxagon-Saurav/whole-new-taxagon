export type ServiceSlug = 'tax-advisory' | 'tax-preparation' | 'outsourced-cfo' | 'company-formation';

export const navServices = [
  { title: 'Tax Advisory', href: '/services/tax-advisory', description: 'Proactive planning to reduce taxes.' },
  { title: 'Tax Preparation', href: '/services/tax-preparation', description: 'Accurate individual and business filings.' },
  { title: 'Outsourced CFO', href: '/services/outsourced-cfo', description: 'Reporting, forecasting, and financial clarity.' },
  { title: 'Company Formation', href: '/services/company-formation', description: 'Entity setup, EIN, and structure guidance.' },
];

export const serviceCards = [
  {
    slug: 'tax-advisory' as ServiceSlug,
    icon: '↘',
    title: 'Tax Advisory',
    href: '/services/tax-advisory',
    description: 'Strategic tax planning for ordinary income, capital gains, crypto, business ownership, NRI questions, and complex life events.',
  },
  {
    slug: 'tax-preparation' as ServiceSlug,
    icon: '✓',
    title: 'Tax Preparation',
    href: '/services/tax-preparation',
    description: 'Full-service filing support for individuals, self-employed professionals, and businesses with accuracy and compliance built in.',
  },
  {
    slug: 'outsourced-cfo' as ServiceSlug,
    icon: '◌',
    title: 'Outsourced CFO',
    href: '/services/outsourced-cfo',
    description: 'Monthly financial insights, cash-flow planning, budgeting, forecasting, and advisory that scales with your business.',
  },
  {
    slug: 'company-formation' as ServiceSlug,
    icon: '⬡',
    title: 'Company Formation',
    href: '/services/company-formation',
    description: 'Done-for-you execution to set up your business entity, EIN, bookkeeping foundation, payroll readiness, and tax structure.',
  },
];

export const benefits = [
  { title: 'Reduce Taxes', icon: '↓', description: 'Maximize your earnings with every dollar through strategic planning, calculated opportunities, and expert execution.' },
  { title: 'Save Time & Labor', icon: '⏱', description: 'Streamline your accounting processes and grow your wealth with outsourced bookkeeping and tax operations.' },
  { title: 'Get IRS Audit Protection', icon: '🛡', description: 'Stay compliant with local, state, and federal requirements while gaining peace of mind against penalties and issues.' },
];

export const audienceCards = [
  { title: 'For Individuals', description: 'Reduce taxes owed on ordinary income, capital gains, crypto, or other major financial moments.', tags: ['Tax filing', 'Tax planning', 'Financial planning', 'NRI services'] },
  { title: 'For Business Owners', description: 'Done-for-you execution for entity setup, payroll, bookkeeping, tax filing, and outsourced accounting.', tags: ['Company formation', 'Bookkeeping', 'Payroll', 'Taxes'] },
  { title: 'For Self-Employed', description: 'The all-in-one financial solution for contractors, creators, gig workers, and entrepreneurs.', tags: ['Quarterlies', 'Deductions', 'Filing', 'Planning'] },
];

export const taxSituations = [
  'I have high ordinary income', 'I am selling public stock', 'I am selling crypto currency', 'I need help with financial planning',
  'I need help with NRI services', 'I am a parent/guardian', 'I am a business owner', 'I work for myself/I’m a gig worker',
  'I am a student', 'I am retired', 'I am unemployed', 'I made money in other ways', 'Other tax situations',
];

export const testimonials = [
  { quote: 'Thanks to Taxagon, I can focus 100% on my work.', name: 'Growth professional', role: 'Individual client' },
  { quote: 'Taxagon helps me optimize my workload without sacrificing quality.', name: 'Small business owner', role: 'Business client' },
  { quote: 'Without Taxagon, I do not think I would be able to do the work that I love.', name: 'Independent consultant', role: 'Self-employed client' },
  { quote: 'I love working with Taxagon because I feel like I am being handheld.', name: 'Founder', role: 'Advisory client' },
];

export const faqs = [
  { question: 'Who does Taxagon work with?', answer: 'Taxagon supports individuals, self-employed professionals, and growing businesses that want bookkeeping, tax planning, filing, and advisory under one roof.' },
  { question: 'Can I book a call before getting started?', answer: 'Yes. Use the Book a Call CTA to schedule time with the Taxagon team and discuss your tax or accounting needs.' },
  { question: 'Do you help with IRS audit notices?', answer: 'Taxagon provides informational guidance for eligible returns and helps you understand next steps. Legal representation is not included.' },
  { question: 'Can Taxagon help form my company?', answer: 'Yes. Taxagon can guide LLC or corporation setup, EIN support, compliance considerations, and tax structure planning.' },
];
