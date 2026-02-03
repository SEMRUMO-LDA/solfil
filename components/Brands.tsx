
import React, { useState } from 'react';
import { Language } from '../types';

interface Brand {
  name: string;
  logo: string;
}

interface BrandCategory {
  id: string;
  title: { PT: string, EN: string };
  brands: Brand[];
}

const brandCategories: BrandCategory[] = [
  {
    id: 'argamassas',
    title: { PT: 'Argamassas Técnicas', EN: 'Technical Mortars' },
    brands: [
      { name: 'WEBER', logo: '/img/logo-weber.png' },
      { name: 'KERAKOLL', logo: '/img/logo-kerakoll.webp' },
    ]
  },
  {
    id: 'banheiras',
    title: { PT: 'Banheiras e Bases de Duche', EN: 'Bathtubs & Shower Trays' },
    brands: [
      { name: 'ORBU', logo: '/img/logo-orbu.png' },
      { name: 'SANINDUSA', logo: '/img/logo-sanindusa.png' },
      { name: 'SANITANA', logo: '/img/logo-sanitana.png' },
      { name: 'VALADARES', logo: '/img/logo-valadares.png' },
      { name: 'AQUORE', logo: '/img/logo-aquore.jpg' },
    ]
  },
  {
    id: 'flutuante',
    title: { PT: 'Flutuante e Vinílico', EN: 'Floating & Vinyl Flooring' },
    brands: [
      { name: 'TERCOBER', logo: '/img/logo-tercocer.svg' },
    ]
  },
  {
    id: 'isolamentos',
    title: { PT: 'Isolamentos Térmicos e Acústicos', EN: 'Thermal & Acoustic Insulation' },
    brands: [
      { name: 'DANOSA', logo: '/img/logo-danosa.svg' },
      { name: 'SOPREMA', logo: '/img/logo-soprema.webp' },
      { name: 'IBERFIBRAN', logo: '/img/logo-fibran.png' },
    ]
  },
  {
    id: 'estruturais',
    title: { PT: 'Materiais Estruturais', EN: 'Structural Materials' },
    brands: [
      { name: 'CIMPOR', logo: '/img/logo-cimpor.png' },
      { name: 'SECIL', logo: '/img/logo-secil.svg' },
      { name: 'VERDASCA', logo: '/img/logo-verdasca.svg' },
      { name: 'TORREENSE', logo: '/img/logo-torreense.svg' },
    ]
  },
  {
    id: 'mob-banho',
    title: { PT: 'Mobiliário de casa de banho', EN: 'Bathroom Furniture' },
    brands: [
      { name: 'MOVILUX', logo: '/img/logo-moovlux.svg' },
      { name: 'BANHOAZIS', logo: '/img/logo-banhoazis.svg' },
      { name: 'VISOBATH', logo: '/img/logo-viso.svg' },
      { name: 'AQUORE', logo: '/img/logo-aquore.jpg' },
      { name: 'SANINDUSA', logo: '/img/logo-sanindusa.png' },
      { name: 'AVILA DOS', logo: '/img/logo-avilados.png' },
      { name: 'EXBANHO', logo: '/img/logo-eban.webp' },
      { name: 'VALADARES', logo: '/img/logo-valadares.png' },
    ]
  },
  {
    id: 'rev-pav',
    title: { PT: 'Pavimentos e Azulejos', EN: 'Tiles & Flooring' },
    brands: [
      { name: 'PAVIGRÉS', logo: '/img/logo-pavigres.svg' },
      { name: 'CINCA', logo: '/img/logo-cinca.png' },
      { name: 'GRESART', logo: '/img/logo-gresart.svg' },
      { name: 'GRESCO', logo: '/img/logo-gresco.webp' },
      { name: 'MARGRES', logo: '/img/logo-margres.svg' },
      { name: 'LOVE TILES', logo: '/img/logo-love.svg' },
      { name: 'PAMESA', logo: '/img/logo-pamesa.png' },
      { name: 'CERTECA', logo: '/img/logo-certeca.png' },
    ]
  },
  {
    id: 'resguardos',
    title: { PT: 'Resguardos de Duche', EN: 'Shower Enclosures' },
    brands: [
      { name: 'ITALBOX', logo: '/img/logo-italbox.webp' },
      { name: 'H-DUO', logo: '/img/logo-hduo.png' },
      { name: 'AQUORE', logo: '/img/logo-aquore.jpg' },
      { name: 'SANINDUSA', logo: '/img/logo-sanindusa.png' },
    ]
  },
  {
    id: 'revestimentos-piscinas',
    title: { PT: 'Revestimentos de Piscinas', EN: 'Pool Coatings' },
    brands: [
      { name: 'REVIGLASS', logo: '/img/logo-reviglass.webp' },
      { name: 'MOSAVIT', logo: '/img/logo-mosavit.jpg' },
      { name: 'EZARRI', logo: '/img/logo-ezarri.svg' },
    ]
  },
  {
    id: 'sanitarias',
    title: { PT: 'Sanitárias', EN: 'Sanitary Ware' },
    brands: [
      { name: 'SANINDUSA', logo: '/img/logo-sanindusa.png' },
      { name: 'SANITANA', logo: '/img/logo-sanitana.png' },
      { name: 'AQUORE', logo: '/img/logo-aquore.jpg' },
      { name: 'VALADARES', logo: '/img/logo-valadares.png' },
    ]
  },
  {
    id: 'toalheiros',
    title: { PT: 'Toalheiros', EN: 'Towel Rails' },
    brands: [
      { name: 'MIRTAK', logo: '/img/logo-mirtak.webp' },
      { name: 'IMEX', logo: '/img/logo-imex.webp' },
      { name: 'AQUORE', logo: '/img/logo-aquore.jpg' },
    ]
  },
  {
    id: 'torneiras',
    title: { PT: 'Torneiras', EN: 'Taps & Faucets' },
    brands: [
      { name: 'SANINDUSA', logo: '/img/logo-sanindusa.png' },
      { name: 'SANITANA', logo: '/img/logo-sanitana.png' },
      { name: 'IMEX', logo: '/img/logo-imex.webp' },
      { name: 'KLUDI', logo: '/img/logo-kludi.png' },
      { name: 'TRES', logo: '/img/logo-tres.svg' },
      { name: 'VALADARES', logo: '/img/logo-valadares.png' },
      { name: 'MIRTAK', logo: '/img/logo-mirtak.webp' },
    ]
  },
];

const Brands: React.FC<{ lang: Language }> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState(brandCategories[0].id);

  const activeCategory = brandCategories.find(c => c.id === activeTab);

  const t = {
    PT: {
      tag: 'MARCAS',
      title1: 'EM QUEM',
      title2: 'CONFIAMOS',
      desc: 'Parcerias sólidas com as marcas mais conceituadas do mercado mundial, garantindo que o seu projeto utilize apenas materiais de excelência comprovada.',
      pdf: 'APRESENTAÇÃO GERAL SOLFIL (PDF)'
    },
    EN: {
      tag: 'BRANDS',
      title1: 'WHO WE',
      title2: 'TRUST',
      desc: 'Solid partnerships with the most renowned global brands, ensuring your project uses only materials of proven excellence.',
      pdf: 'SOLFIL GENERAL PRESENTATION (PDF)'
    }
  }[lang];

  return (
    <div className="container mx-auto px-6">
      <div className="mb-16 lg:mb-24">
        <h3 className="text-solfil-orange font-black tracking-[0.4em] text-[10px] mb-6 uppercase">{t.tag}</h3>
        <h2 className="text-5xl lg:text-7xl font-light text-solfil-black uppercase tracking-tighter leading-none">
          {t.title1} <span className="font-semibold italic">{t.title2}</span><span className="font-bold text-solfil-orange">.</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <aside className="w-full lg:w-80 flex-shrink-0">
          <nav className="flex lg:flex-col overflow-x-auto no-scrollbar lg:overflow-visible gap-2 pb-4">
            {brandCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`whitespace-nowrap lg:whitespace-normal text-left px-6 py-5 rounded-2xl lg:rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === cat.id ? 'bg-solfil-orange text-white shadow-lg' : 'bg-white text-solfil-gray border border-gray-100'
                  }`}
              >
                {cat.title[lang]}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 min-h-[400px]">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12 animate-in fade-in duration-500">
            {activeCategory?.brands.map((brand, idx) => (
              <div key={idx} className="group flex flex-col items-center justify-center p-8 bg-white rounded-[32px] border border-gray-100 hover:border-solfil-orange/20 transition-all min-h-[160px]">
                <div className="h-16 w-full flex items-center justify-center mb-4 overflow-hidden relative">
                  <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-solfil-gray text-sm font-light leading-relaxed max-w-md text-center md:text-left">
          {t.desc}
        </p>
        <button className="flex items-center gap-4 text-solfil-black font-black text-[10px] tracking-[0.4em] uppercase hover:text-solfil-orange transition-colors group">
          {t.pdf}
          <div className="w-10 h-10 rounded-full bg-solfil-black text-white flex items-center justify-center group-hover:bg-solfil-orange transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Brands;
