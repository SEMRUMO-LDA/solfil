/**
 * Static Data - Fallback content used when KIBANcms is not configured.
 *
 * This data is a mirror of what should exist in the CMS collections.
 * Once the CMS is populated, this file serves only as a safety net.
 */

import type {
  CMSProduct,
  CMSTestimonial,
  CMSGalleryImage,
  CMSSiteSettings,
} from '@/types/cms';

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

export const staticProducts: CMSProduct[] = [
  {
    id: 'argamassas', slug: 'argamassas', order: 0,
    title: { PT: 'Argamassas Técnicas', EN: 'Technical Mortars' },
    description: { PT: 'Soluções profissionais para colagem e betumação de cerâmica.', EN: 'Professional solutions for bonding and grouting ceramics.' },
    image: '/img/cat-argamassas-tecnicas.jpg',
  },
  {
    id: 'banheiras', slug: 'banheiras', order: 1,
    title: { PT: 'Banheiras e Bases de Duche', EN: 'Bathtubs & Shower Trays' },
    description: { PT: 'Conforto personalizado para banhos extraordinários e relaxantes.', EN: 'Personalized comfort for extraordinary and relaxing baths.' },
    image: '/img/cat-banheiras-e-bases-de-duche.jpg',
  },
  {
    id: 'flutuante', slug: 'flutuante', order: 2,
    title: { PT: 'Pavimentos Flutuantes e Vinílicos', EN: 'Floating & Vinyl Flooring' },
    description: { PT: 'Conforto e resistência com as nossas soluções de pavimentos flutuantes.', EN: 'Comfort and resistance with our floating flooring solutions.' },
    image: '/img/cat-pavimentos-flutuantes-e-vinilicos.jpg',
  },
  {
    id: 'isolamentos', slug: 'isolamentos', order: 3,
    title: { PT: 'Isolamentos Térmicos e Acústicos', EN: 'Thermal & Acoustic Insulation' },
    description: { PT: 'Eficiência energética e conforto acústico com soluções de última geração.', EN: 'Energy efficiency and acoustic comfort with state-of-the-art solutions.' },
    image: '/img/cat-isolamentos-termicos-e-acusticos.jpg',
  },
  {
    id: 'estruturais', slug: 'estruturais', order: 4,
    title: { PT: 'Materiais Estruturais', EN: 'Structural Materials' },
    description: { PT: 'Cimento, tijolo e aço: a base sólida e certificada para qualquer construção.', EN: 'Cement, brick, and steel: the solid and certified foundation for any construction.' },
    image: '/img/cat-materiais-estruturais.jpg',
  },
  {
    id: 'mob-banho', slug: 'mob-banho', order: 5,
    title: { PT: 'Mobiliários de casa de banho', EN: 'Bathroom Furniture' },
    description: { PT: 'Estilo ímpar, mobiliário exclusivo, elevando o conforto e funcionalidade diária.', EN: 'Unique style, exclusive furniture, daily comfort and functionality.' },
    image: '/img/cat-mobiliarios-de-casa-de-banho.jpg',
  },
  {
    id: 'rev-pav', slug: 'rev-pav', order: 6,
    title: { PT: 'Pavimentos e Azulejos', EN: 'Flooring & Tiles' },
    description: { PT: 'Transforme a sua casa num refúgio de elegância com os nossos azulejos e pavimentos exclusivos.', EN: 'Transform your home into a haven of elegance with our exclusive tiles and flooring.' },
    image: '/img/cat-pavimentos-e-azulejos.jpg',
  },
  {
    id: 'resguardos', slug: 'resguardos', order: 7,
    title: { PT: 'Resguardos de Duche', EN: 'Shower Enclosures' },
    description: { PT: 'Soluções elegantes e duradouras para o seu espaço de banho.', EN: 'Elegant and durable solutions for your bathroom space.' },
    image: '/img/cat-reguardos-de-duche.jpg',
  },
  {
    id: 'revestimentos-piscinas', slug: 'revestimentos-piscinas', order: 8,
    title: { PT: 'Revestimentos de Piscinas', EN: 'Pool Coatings' },
    description: { PT: 'Estilo artisticamente refinado e durabilidade superior para a sua piscina.', EN: 'Artistically refined style and superior durability for your pool.' },
    image: '/img/cat-revestimentos-de-piscinas.jpg',
  },
  {
    id: 'sanitarias', slug: 'sanitarias', order: 9,
    title: { PT: 'Sanitárias', EN: 'Sanitary Ware' },
    description: { PT: 'Design sofisticado e funcionalidade de alta qualidade para ambientes requintados.', EN: 'Sophisticated design and high-quality functionality for refined environments.' },
    image: '/img/cat-sanitarias.jpg',
  },
  {
    id: 'toalheiros', slug: 'toalheiros', order: 10,
    title: { PT: 'Toalheiros', EN: 'Towel Rails' },
    description: { PT: 'Elegância funcional, adicione um toque de luxo ao seu espaço.', EN: 'Functional elegance, add a touch of luxury to your space.' },
    image: '/img/cat-toalheiros.jpg',
  },
  {
    id: 'torneiras', slug: 'torneiras', order: 11,
    title: { PT: 'Torneiras', EN: 'Taps & Faucets' },
    description: { PT: 'Elevando a estética com torneiras exclusivas, a fusão perfeita de forma e função.', EN: 'Elevating aesthetics with exclusive faucets, the perfect fusion of form and function.' },
    image: '/img/cat-torneiras.jpg',
  },
];

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export const staticTestimonials: CMSTestimonial[] = [
  {
    id: '1',
    name: 'Riya Felix',
    location: 'Loulé',
    quote: {
      PT: 'Profissionais, criativos e fáceis de trabalhar. Do primeiro contacto à entrega final, o processo foi impecável. O resultado final superou as expectativas.',
      EN: 'Professional, creative, and easy to work with. From first contact to final delivery, the process was flawless. The end result exceeded expectations.',
    },
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '2',
    name: 'Ricardo Silva',
    location: 'Albufeira',
    quote: {
      PT: 'A Solfil transformou completamente a nossa percepção de fornecimento de obra. A atenção ao detalhe e o apoio técnico foram fundamentais para o sucesso do projeto.',
      EN: 'Solfil completely transformed our perception of construction supply. The attention to detail and technical support were key to the project\'s success.',
    },
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '3',
    name: 'António Matos',
    location: 'Faro',
    quote: {
      PT: 'Procurávamos qualidade e confiança — e encontraram exatamente isso. Hoje a nossa casa é um reflexo do rigor que a Solfil coloca em tudo o que faz.',
      EN: 'We were looking for quality and trust — and found exactly that. Today our home reflects the rigor Solfil puts into everything they do.',
    },
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
];

// ---------------------------------------------------------------------------
// Gallery
// ---------------------------------------------------------------------------

export const staticGalleryImages: CMSGalleryImage[] = [
  { id: '1', url: '/img/galeria-1.jpg', alt: 'Showroom Solfil', category: 'SHOWROOM', gridClass: 'col-span-4 lg:col-span-4 lg:row-span-3', order: 0 },
  { id: '2', url: '/img/galeria-2.jpg', alt: 'Equipamentos de Banho', category: 'BANHOS', gridClass: 'col-span-2 lg:col-span-2 lg:row-span-1', order: 1 },
  { id: '3', url: '/img/galeria-3.jpg', alt: 'Materiais de Construção', category: 'MATERIAIS', gridClass: 'col-span-2 lg:col-span-2 lg:row-span-1', order: 2 },
  { id: '4', url: '/img/galeria-4.jpg', alt: 'Soluções de Pavimento', category: 'PAVIMENTOS', gridClass: 'col-span-2 lg:col-span-2 lg:row-span-2', order: 3 },
  { id: '5', url: '/img/galeria-5.jpg', alt: 'Exposição de Cerâmica', category: 'CERÂMICA', gridClass: 'col-span-2 lg:col-span-2 lg:row-span-2', order: 4 },
  { id: '6', url: '/img/galeria-6.jpg', alt: 'Revestimentos Modernos', category: 'REVESTIMENTOS', gridClass: 'col-span-4 lg:col-span-8 lg:row-span-2', order: 5 },
];

// ---------------------------------------------------------------------------
// Site Settings
// ---------------------------------------------------------------------------

export const staticSiteSettings: CMSSiteSettings = {
  companyName: 'SOLFIL, SA',
  description: {
    PT: 'Qualidade e rigor no fornecimento de materiais de construção desde 1986.',
    EN: 'Quality and precision in construction material supply since 1986.',
  },
  logoUrl: 'https://raw.githubusercontent.com/solfil/solfil/solfil-assets/assets/logo.png',
  companyEmail: 'geral@solfil.pt',
  whatsappNumber: '351919521697',
  socialLinks: {
    facebook: 'https://www.facebook.com/solfilpt/',
    instagram: 'https://www.instagram.com/solfilpt/',
  },
  locations: [
    {
      name: 'Vale de Parra',
      address: 'Estrada de Vale Rabelho, Vale de Parra, 8200-427 Guia Albufeira',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Solfil+Vale+de+Parra+Albufeira',
      phones: [
        { number: '+351 919 557 343', raw: '351919557343' },
        { number: '+351 289 580 320', raw: '351289580320' },
      ],
      emails: ['telmo@solfil.pt'],
      note: {
        PT: 'O levantamento de material de acabamento é sempre realizado no nosso armazém de Ferreiras.',
        EN: 'Pick-up of finishing materials is always carried out at our Ferreiras warehouse.',
      },
      hours: { week: '07h30 - 12h30 | 14h00 - 18h00', saturday: 'Fechado', sunday: { PT: 'Fechado', EN: 'Closed' } },
    },
    {
      name: 'Ferreiras',
      address: 'Avenida 25 de abril, Ferreiras, 8200-559 Albufeira',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Solfil+Ferreiras+Albufeira',
      phones: [
        { number: '+351 919 521 697', raw: '351919521697' },
        { number: '+351 289 540 890', raw: '351289540890' },
      ],
      emails: ['dora@solfil.pt', 'cidalia@solfil.pt'],
      hours: { week: '08h30 - 13h00 | 14h30 - 18h00', saturday: '09h00 - 13h00', sunday: { PT: 'Fechado', EN: 'Closed' } },
    },
  ],
};
