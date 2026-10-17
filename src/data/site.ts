// Central place for business details. Edit here and every page updates.

export const site = {
  name: 'DevNode',
  url: 'https://devnode.info',
  tagline: 'Professional websites, built fast and priced fairly.',
  description:
    'DevNode designs, builds and hosts professional websites for businesses in Lebanon, Africa and the Gulf. Fast delivery, transparent pricing, one year of hosting included.',
  // Leave empty until the business email is created in cPanel.
  email: '',
  // GA4 Measurement ID, e.g. 'G-XXXXXXXXXX'. Leave empty to disable analytics.
  gaId: '',
  regions: ['Lebanon', 'Africa', 'the Gulf'],
};

export const phones = [
  { label: 'Lebanon', display: '+961 71 294 645', wa: '96171294645', primary: true },
  { label: 'DR Congo', display: '+243 998 189 909', wa: '243998189909', primary: false },
];

export const primaryPhone = phones.find((p) => p.primary) ?? phones[0];

export function waLink(number: string, text = 'Hello DevNode, I would like a website.') {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export const manager = {
  name: 'Hassan Ahmad Fakih',
  role: 'Founder & Managing Director',
  initials: 'HF',
  // Square photo, shown as a circle. Set to '' to show initials instead.
  photo: '/images/hassan-fakih.jpg',
  bio: [
    'Hassan founded DevNode with a simple idea: every business deserves a professional website without the long delays and inflated prices that usually come with it.',
    'Working with clients across Lebanon, Central Africa and Saudi Arabia, he leads every project personally, from the first planning call to launch day, and stays the direct point of contact long after the site goes live.',
  ],
};

export const pricing = {
  currency: '$',
  launch: 500,
  renewal: 450,
  hourly: 25,
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  includes: string[];
  idealFor: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: 'business-websites',
    title: 'Business Websites',
    short: 'A complete, professional website that presents your company and turns visitors into customers.',
    intro:
      'Your website is often the first impression a client gets of your business. We build clean, fast, mobile-first company websites that explain what you do, build trust and make it easy to contact you.',
    includes: [
      'Planning session to define pages, content and goals',
      'Custom design in your brand colours',
      'Up to 6 pages (Home, About, Services, Gallery, Contact…)',
      'WhatsApp, phone and email contact buttons',
      'Mobile, tablet and desktop optimisation',
      'Basic SEO setup and Google indexing',
    ],
    idealFor: 'Companies, clinics, schools, restaurants, consultants and service providers.',
    icon: 'building',
  },
  {
    slug: 'ecommerce-stores',
    title: 'E-commerce Stores',
    short: 'Online stores that let your customers browse products and order in a few taps.',
    intro:
      'Sell online with a store designed for how customers in our region actually buy: on their phones, often finishing the order on WhatsApp. We set up your catalogue, product pages and ordering flow.',
    includes: [
      'Product catalogue with categories and search',
      'Product pages with photos, prices and variants',
      'Cart and checkout, or order-via-WhatsApp flow',
      'Local payment and delivery options where available',
      'Easy product management after launch',
      'Speed optimisation for large catalogues',
    ],
    idealFor: 'Retail shops, fashion and beauty brands, perfume stores and distributors.',
    icon: 'cart',
  },
  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    short: 'Focused single pages for campaigns, launches and ads that convert.',
    intro:
      'Running ads or launching a product? A dedicated landing page with one clear message and one clear action converts far better than sending people to a general homepage.',
    includes: [
      'One focused page built around a single goal',
      'Persuasive structure: offer, benefits, proof, call to action',
      'Lead form or WhatsApp click-to-chat',
      'Fast loading for paid traffic',
      'Tracking ready for Google and Meta ads',
    ],
    idealFor: 'Product launches, events, promotions and ad campaigns.',
    icon: 'target',
  },
  {
    slug: 'website-redesign',
    title: 'Website Redesign',
    short: 'Turn an outdated or slow website into a modern one that works on every device.',
    intro:
      'If your current website looks dated, loads slowly or breaks on mobile, it is costing you clients. We rebuild it with a modern design while keeping the content and search rankings that matter.',
    includes: [
      'Review of your current site and what to keep',
      'Modern design and improved structure',
      'Content migration',
      'Redirects to protect existing Google rankings',
      'Performance and mobile improvements',
    ],
    idealFor: 'Businesses whose website is more than a few years old.',
    icon: 'refresh',
  },
  {
    slug: 'hosting-maintenance',
    title: 'Hosting & Maintenance',
    short: 'Reliable hosting, security updates and small changes, handled for you every year.',
    intro:
      'A website needs care after launch. Every DevNode website includes its first year of hosting, and our yearly plan keeps it online, secure and up to date so you can focus on your business.',
    includes: [
      'Fast, secure hosting with SSL certificate',
      'Domain connection and DNS setup',
      'Regular backups',
      'Security and software updates',
      'Uptime monitoring',
      'Priority support on WhatsApp',
    ],
    idealFor: 'Every DevNode client, and businesses who want someone reliable to look after their site.',
    icon: 'server',
  },
  {
    slug: 'seo-setup',
    title: 'SEO Setup',
    short: 'Get found on Google by customers searching for what you offer.',
    intro:
      'A beautiful website is only useful if people can find it. We set up the technical foundations so Google understands your site and shows it to customers in your city and country.',
    includes: [
      'Keyword research for your market',
      'Page titles, descriptions and headings',
      'Google Search Console and sitemap',
      'Google Business Profile guidance',
      'Structured data for rich results',
      'Speed and mobile checks',
    ],
    idealFor: 'Local businesses that want more clients from Google search.',
    icon: 'search',
  },
];

export type Project = {
  slug: string;
  name: string;
  url: string;
  domain: string;
  country: string;
  category: string;
  summary: string;
  work: string[];
  accent: string;
  // Screenshots live in public/images/projects/<slug>/
  image?: string;
  gallery?: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: 'dolook',
    name: 'DoLook Contracting',
    url: 'https://www.dolook.sa',
    domain: 'dolook.sa',
    country: 'Saudi Arabia',
    category: 'Corporate Website',
    summary:
      'A bilingual corporate website for a Saudi contracting company founded in 2001, presenting its four divisions, 20+ projects, major clients and official certificates.',
    work: [
      'Bilingual Arabic / English website with full right-to-left support',
      'Dedicated pages for the company’s four divisions',
      'Project portfolio filterable by status and division',
      'Project pages with 3D image galleries, floor plans and area tables',
      'Clients and certificates pages with in-browser PDF viewing',
      'Quote request form that opens WhatsApp, ready to send',
    ],
    accent: '#1E3A8A',
    image: '/images/projects/dolook/thumb.jpg',
    gallery: [
      { src: '/images/projects/dolook/home.jpg', caption: 'Homepage' },
      { src: '/images/projects/dolook/projects.jpg', caption: 'Project portfolio with filters' },
      { src: '/images/projects/dolook/gallery.jpg', caption: 'Project image gallery' },
      { src: '/images/projects/dolook/clients.jpg', caption: 'Clients & partners' },
      { src: '/images/projects/dolook/certificates.jpg', caption: 'Certificates' },
      { src: '/images/projects/dolook/contact.jpg', caption: 'Contact & WhatsApp quote form' },
    ],
  },
  {
    slug: 'kin-lattafa',
    name: 'Kin Lattafa',
    url: 'https://www.kinlattafa.store',
    domain: 'kinlattafa.store',
    country: 'DR Congo',
    category: 'E-commerce Store',
    summary:
      'An online store that lets customers in Kinshasa browse the full product range and place orders directly from their phones.',
    work: ['Store design and setup', 'Product catalogue', 'Mobile ordering flow', 'Hosting and launch'],
    accent: '#8B5CF6',
  },
  {
    slug: 'coverf',
    name: 'CoverF',
    url: 'https://www.coverf.net',
    domain: 'coverf.net',
    country: 'International',
    category: 'Business Website',
    summary:
      'A professional company website that presents the brand, its offering and an easy way for new clients to get in touch.',
    work: ['Website design', 'Development', 'Contact integration', 'Hosting and launch'],
    accent: '#10B981',
  },
];

export type Testimonial = { quote: string; name: string; company: string };

// Only add real, client-approved quotes here. The section stays hidden while this list is empty.
export const testimonials: Testimonial[] = [];

export const values = [
  {
    title: 'Credibility',
    text: 'Clear agreements, honest timelines and no hidden fees. What we promise is what you get.',
    icon: 'shield',
  },
  {
    title: 'Speed',
    text: 'Most websites go live within 1 to 3 weeks, and every page we build loads fast.',
    icon: 'bolt',
  },
  {
    title: 'Competitive Pricing',
    text: 'One fixed launch price that includes planning, development and a full year of hosting.',
    icon: 'tag',
  },
];

export const process = [
  { title: 'Plan', text: 'A short call to understand your business, goals and the pages you need.' },
  { title: 'Design', text: 'We design the look of your site in your brand colours and share it for feedback.' },
  { title: 'Build', text: 'We develop the site, write the content with you and test it on every device.' },
  { title: 'Launch', text: 'We publish it on your domain, connect Google and hand everything over to you.' },
];

export const faqs = [
  {
    q: 'What does the $500 include?',
    a: 'Planning, design, development of your website, and publishing it with one full year of hosting. There are no extra setup fees.',
  },
  {
    q: 'What happens after the first year?',
    a: 'The yearly renewal is $450 and covers hosting, maintenance, security updates and keeping your website online.',
  },
  {
    q: 'What if I need more pages or features later?',
    a: 'Anything beyond the first version (new pages, sections or features) is billed at $25 per hour. We always give you an estimate before starting.',
  },
  {
    q: 'How long does it take?',
    a: 'Most websites are ready in 1 to 3 weeks, depending on the number of pages and how quickly content is ready.',
  },
  {
    q: 'Do I need to own a domain?',
    a: 'If you already have one, we connect it. If not, we help you choose and register one.',
  },
  {
    q: 'Do you work with clients outside Lebanon?',
    a: 'Yes. We work remotely with clients across Lebanon, Africa and the Gulf, mostly over WhatsApp and video calls.',
  },
];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/about/', label: 'About' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];
