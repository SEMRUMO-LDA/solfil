import React, { useRef } from 'react';
import { Language } from '../types';

interface ProductsProps {
  lang: Language;
  onCategoryClick: (id: string) => void;
}

const Products: React.FC<ProductsProps> = ({ lang, onCategoryClick }) => {
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
      categories: [
        { id: 'argamassas', title: 'Argamassas Técnicas', description: 'Soluções profissionais para colagem e betumação de cerâmica.' },
        { id: 'banheiras', title: 'Banheiras e Bases de Duche', description: 'Conforto personalizado para banhos extraordinários e relaxantes.' },
        { id: 'flutuante', title: 'Pavimentos Flutuantes e Vinílicos', description: 'Conforto e resistência com as nossas soluções de pavimentos flutuantes.' },
        { id: 'isolamentos', title: 'Isolamentos Térmicos e Acústicos', description: 'Eficiência energética e conforto acústico com soluções de última geração.' },
        { id: 'estruturais', title: 'Materiais Estruturais', description: 'Cimento, tijolo e aço: a base sólida e certificada para qualquer construção.' },
        { id: 'mob-banho', title: 'Mobiliários de casa de banho', description: 'Estilo ímpar, mobiliário exclusivo, elevando o conforto e funcionalidade diária.' },
        { id: 'rev-pav', title: 'Pavimentos e Azulejos', description: 'Transforme a sua casa num refúgio de elegância com os nossos azulejos e pavimentos exclusivos.' },
        { id: 'resguardos', title: 'Resguardos de Duche', description: 'Soluções elegantes e duradouras para o seu espaço de banho.' },
        { id: 'revestimentos-piscinas', title: 'Revestimentos de Piscinas', description: 'Estilo artisticamente refinado e durabilidade superior para a sua piscina.' },
        { id: 'sanitarias', title: 'Sanitárias', description: 'Design sofisticado e funcionalidade de alta qualidade para ambientes requintados.' },
        { id: 'toalheiros', title: 'Toalheiros', description: 'Elegância funcional, adicione um toque de luxo ao seu espaço.' },
        { id: 'torneiras', title: 'Torneiras', description: 'Elevando a estética com torneiras exclusivas, a fusão perfeita de forma e função.' },
      ]
    },
    EN: {
      tag: 'OUR CATALOGUE',
      title: 'PRODUCTS',
      desc: 'Explore our main material categories. A selection focused on design, durability, and technical excellence for all your projects.',
      brandsCta: 'DISCOVER OUR BRANDS',
      partnerTag: 'WE WORK WITH THE BEST PARTNERS',
      prev: 'Previous',
      next: 'Next',
      categories: [
        { id: 'argamassas', title: 'Technical Mortars', description: 'Professional solutions for bonding and grouting ceramics.' },
        { id: 'banheiras', title: 'Bathtubs & Shower Trays', description: 'Personalized comfort for extraordinary and relaxing baths.' },
        { id: 'flutuante', title: 'Floating & Vinyl Flooring', description: 'Comfort and resistance with our floating flooring solutions.' },
        { id: 'isolamentos', title: 'Thermal & Acoustic Insulation', description: 'Energy efficiency and acoustic comfort with state-of-the-art solutions.' },
        { id: 'estruturais', title: 'Structural Materials', description: 'Cement, brick, and steel: the solid and certified foundation for any construction.' },
        { id: 'mob-banho', title: 'Bathroom Furniture', description: 'Unique style, exclusive furniture, daily comfort and functionality.' },
        { id: 'rev-pav', title: 'Flooring & Tiles', description: 'Transform your home into a haven of elegance with our exclusive tiles and flooring.' },
        { id: 'resguardos', title: 'Shower Enclosures', description: 'Elegant and durable solutions for your bathroom space.' },
        { id: 'revestimentos-piscinas', title: 'Pool Coatings', description: 'Artistically refined style and superior durability for your pool.' },
        { id: 'sanitarias', title: 'Sanitary Ware', description: 'Sophisticated design and high-quality functionality for refined environments.' },
        { id: 'toalheiros', title: 'Towel Rails', description: 'Functional elegance, add a touch of luxury to your space.' },
        { id: 'torneiras', title: 'Taps & Faucets', description: 'Elevating aesthetics with exclusive faucets, the perfect fusion of form and function.' },
      ]
    }
  };

  const t = translations[lang];

  const images = [
    '/img/cat-argamassas-tecnicas.jpg', // Argamassas
    '/img/cat-banheiras-e-bases-de-duche.jpg', // Banheiras
    '/img/cat-pavimentos-flutuantes-e-vinilicos.jpg', // Flutuante
    '/img/cat-isolamentos-termicos-e-acusticos.jpg', // Isolamentos
    '/img/cat-materiais-estruturais.jpg', // Estruturais
    '/img/cat-mobiliarios-de-casa-de-banho.jpg', // Mobiliário
    '/img/cat-pavimentos-e-azulejos.jpg', // Pavimentos
    '/img/cat-reguardos-de-duche.jpg', // Resguardos
    '/img/cat-revestimentos-de-piscinas.jpg', // Piscinas
    '/img/cat-sanitarias.jpg', // Sanitárias
    '/img/cat-toalheiros.jpg', // Toalheiros
    '/img/cat-torneiras.jpg'  // Torneiras
  ];

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
          {t.categories.map((prod, idx) => (
            <div key={prod.id} className="min-w-[85vw] md:min-w-[45vw]">
              <ProductCard
                prod={{ ...prod, image: images[idx] }}
                onClick={() => onCategoryClick(prod.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
        {t.categories.map((prod, idx) => (
          <ProductCard
            key={prod.id}
            prod={{ ...prod, image: images[idx] }}
            onClick={() => onCategoryClick(prod.id)}
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
  prod: any;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ prod, onClick }) => (
  <div
    onClick={onClick}
    className="group relative bg-white/40 backdrop-blur-md rounded-[32px] overflow-hidden flex flex-col transition-all duration-700 border border-white/60 hover:border-solfil-orange/30 hover:bg-white/80 hover:-translate-y-3 select-none shadow-sm hover:shadow-[0_20px_50px_rgba(254,80,0,0.15)] cursor-pointer h-full"
  >
    <div className="relative aspect-[16/9] overflow-hidden bg-solfil-black">
      <img src={prod.image} alt={prod.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-40"></div>
    </div>
    <div className="p-8 relative z-10 flex-1 flex flex-col">
      <div className="w-8 h-1 bg-solfil-orange/20 mb-4 group-hover:w-16 group-hover:bg-solfil-orange transition-all duration-500"></div>
      <h3 className="text-2xl font-bold text-solfil-black mb-3 group-hover:text-solfil-orange transition-colors">
        {prod.title}
      </h3>
      <p className="text-solfil-gray text-sm font-normal leading-relaxed">
        {prod.description}
      </p>
    </div>
  </div>
);

export default Products;