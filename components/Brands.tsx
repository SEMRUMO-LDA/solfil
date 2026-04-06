'use client';

import React from 'react';
import { Language } from '@/types';
import type { CMSBrandCategory } from '@/types/cms';

interface BrandsProps {
  lang: Language;
  brandCategories: CMSBrandCategory[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const Brands: React.FC<BrandsProps> = ({ lang, brandCategories, activeTab, setActiveTab }) => {
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
          <div className="lg:hidden no-scrollbar slider-full-bleed">
            <nav className="flex gap-4 py-8 overflow-visible">
              {brandCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`whitespace-nowrap text-left px-6 py-5 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === cat.id ? 'bg-solfil-orange text-white shadow-lg' : 'bg-white text-solfil-gray border border-gray-100'
                    }`}
                >
                  {cat.title[lang]}
                </button>
              ))}
            </nav>
          </div>
          <nav className="hidden lg:flex lg:flex-col gap-4">
            {brandCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-left px-6 py-5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === cat.id ? 'bg-solfil-orange text-white shadow-lg' : 'bg-white text-solfil-gray border border-gray-100'
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
              <a
                key={idx}
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-8 bg-white rounded-[32px] border border-gray-100 hover:border-solfil-orange/20 transition-all min-h-[160px] cursor-pointer"
              >
                <div className="h-16 w-full flex items-center justify-center mb-4 overflow-hidden relative">
                  <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
              </a>
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
