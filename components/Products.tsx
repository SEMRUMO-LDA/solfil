'use client';

import React, { useRef } from 'react';
import { Language } from '@/types';
import type { CMSProduct } from '@/types/cms';

interface ProductsProps {
  lang: Language;
  products: CMSProduct[];
  onCategoryClick: (id: string) => void;
}

const Products: React.FC<ProductsProps> = ({ lang, products, onCategoryClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const translations = {
    PT: {
      tag: 'O NOSSO CATÁLOGO',
      title: 'PRODUTOS',
      desc: 'Explore as nossas principais categorias de materiais. Uma seleção focada em design, durabilidade e excelência técnica para todos os seus projetos.',
      brandsCta: 'CONHEÇA AS MARCAS',
      partnerTag: 'TRABALHAMOS COM OS MELHORES PARCEIROS',
      prev: 'Anterior',
      next: 'Próximo',
    },
    EN: {
      tag: 'OUR CATALOGUE',
      title: 'PRODUCTS',
      desc: 'Explore our main material categories. A selection focused on design, durability, and technical excellence for all your projects.',
      brandsCta: 'DISCOVER OUR BRANDS',
      partnerTag: 'WE WORK WITH THE BEST PARTNERS',
      prev: 'Previous',
      next: 'Next',
    }
  };

  const t = translations[lang];

  const scroll = (dir: 'l' | 'r') => {
    if (scrollRef.current) {
      const scrollAmount = dir === 'l' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-20 gap-8">
        <div>
          <h3 className="text-solfil-orange font-black tracking-[0.4em] text-[10px] mb-6 uppercase">{t.tag}</h3>
          <h2 className="text-5xl md:text-7xl font-light text-solfil-black uppercase tracking-tighter leading-none">
            {t.title}<span className="font-bold text-solfil-orange">.</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-end flex-1 justify-end">
          <p className="hidden xl:block text-solfil-gray text-lg font-normal leading-relaxed max-w-sm">
            {t.desc}
          </p>
          <div className="flex gap-4 lg:hidden">
            <button
              onClick={() => scroll('l')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-solfil-black hover:border-solfil-orange hover:text-solfil-orange transition-all"
              aria-label={t.prev}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('r')}
              className="w-12 h-12 rounded-full bg-solfil-black text-white flex items-center justify-center hover:bg-solfil-orange transition-all shadow-lg"
              aria-label={t.next}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Carousel Layout */}
      <div ref={scrollRef} className="lg:hidden no-scrollbar slider-full-bleed">
        <div className="flex gap-8 py-20 overflow-visible">
          {products.map((prod) => (
            <div key={prod.id} className="min-w-[85vw] md:min-w-[45vw]">
              <ProductCard
                title={prod.title[lang]}
                description={prod.description[lang]}
                image={prod.image}
                onClick={() => onCategoryClick(prod.slug)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            title={prod.title[lang]}
            description={prod.description[lang]}
            image={prod.image}
            onClick={() => onCategoryClick(prod.slug)}
          />
        ))}
      </div>

      <div className="mt-24 pb-10 flex flex-col items-center text-center">
        <p className="text-solfil-gray/50 text-[10px] font-bold uppercase tracking-[0.5em] mb-10">{t.partnerTag}</p>
        <a href="#marcas" className="group flex flex-col items-center cursor-pointer">
          <div className="relative mb-6">
            <span className="text-sm font-black tracking-[0.5em] uppercase text-solfil-black">{t.brandsCta}</span>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-solfil-orange transition-all duration-500 group-hover:w-full"></div>
          </div>
          <svg className="w-5 h-5 text-solfil-orange/30 transition-all duration-500 group-hover:translate-y-3 group-hover:text-solfil-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, onClick }) => (
  <div
    onClick={onClick}
    className="group relative bg-white/40 backdrop-blur-md rounded-[32px] overflow-hidden flex flex-col transition-all duration-700 border border-white/60 hover:border-solfil-orange/30 hover:bg-white/80 hover:-translate-y-3 select-none shadow-sm hover:shadow-[0_20px_50px_rgba(254,80,0,0.15)] cursor-pointer h-full"
  >
    <div className="relative aspect-[16/9] overflow-hidden bg-solfil-black">
      <img src={image} alt={title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-40"></div>
    </div>
    <div className="p-8 relative z-10 flex-1 flex flex-col">
      <div className="w-8 h-1 bg-solfil-orange/20 mb-4 group-hover:w-16 group-hover:bg-solfil-orange transition-all duration-500"></div>
      <h3 className="text-2xl font-bold text-solfil-black mb-3 group-hover:text-solfil-orange transition-colors">
        {title}
      </h3>
      <p className="text-solfil-gray text-sm font-normal leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default Products;
