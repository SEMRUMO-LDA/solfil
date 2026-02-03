
import React from 'react';
import { Language } from '../types';

const Products: React.FC<{ lang: Language }> = ({ lang }) => {
  const translations = {
    PT: {
      tag: 'O NOSSO CATÁLOGO',
      title: 'PRODUTOS',
      desc: 'Explore as nossas principais categorias de materiais. Uma seleção focada em design, durabilidade e excelência técnica para todos os seus projetos.',
      brandsCta: 'CONHEÇA AS MARCAS',
      partnerTag: 'TRABALHAMOS COM OS MELHORES PARCEIROS',
      categories: [
        { title: 'Argamassas Técnicas', description: 'Soluções profissionais para colagem e betumação de cerâmica.' },
        { title: 'Banheiras e Bases de Duche', description: 'Conforto personalizado para banhos extraordinários e relaxantes.' },
        { title: 'Flutuante e Vinílico', description: 'Conforto e resistência com as nossas soluções de pavimentos flutuantes.' },
        { title: 'Isolamentos Térmicos e Acústicos', description: 'Eficiência energética e conforto acústico com soluções de última geração.' },
        { title: 'Materiais Estruturais', description: 'Cimento, tijolo e aço: a base sólida e certificada para qualquer construção.' },
        { title: 'Mobiliário de casa de banho', description: 'Estilo ímpar, mobiliário exclusivo, elevando o conforto e funcionalidade diária.' },
        { title: 'Pavimentos e Azulejos', description: 'Transforme a sua casa num refúgio de elegância com os nossos azulejos e pavimentos exclusivos.' },
        { title: 'Resguardos de Duche', description: 'Soluções elegantes e duradouras para o seu espaço de banho.' },
        { title: 'Revestimentos de Piscinas', description: 'Estilo artisticamente refinado e durabilidade superior para a sua piscina.' },
        { title: 'Sanitárias', description: 'Design sofisticado e funcionalidade de alta qualidade para ambientes requintados.' },
        { title: 'Toalheiros', description: 'Elegância funcional, adicione um toque de luxo ao seu espaço.' },
        { title: 'Torneiras', description: 'Elevando a estética com torneiras exclusivas, a fusão perfeita de forma e função.' },
      ]
    },
    EN: {
      tag: 'OUR CATALOGUE',
      title: 'PRODUCTS',
      desc: 'Explore our main material categories. A selection focused on design, durability, and technical excellence for all your projects.',
      brandsCta: 'DISCOVER OUR BRANDS',
      partnerTag: 'WE WORK WITH THE BEST PARTNERS',
      categories: [
        { title: 'Technical Mortars', description: 'Professional solutions for bonding and grouting ceramics.' },
        { title: 'Bathtubs & Shower Trays', description: 'Personalized comfort for extraordinary and relaxing baths.' },
        { title: 'Floating & Vinyl Flooring', description: 'Comfort and resistance with our floating flooring solutions.' },
        { title: 'Thermal & Acoustic Insulation', description: 'Energy efficiency and acoustic comfort with state-of-the-art solutions.' },
        { title: 'Structural Materials', description: 'Cement, brick, and steel: the solid and certified foundation for any construction.' },
        { title: 'Bathroom Furniture', description: 'Unique style, exclusive furniture, elevating daily comfort and functionality.' },
        { title: 'Flooring & Tiles', description: 'Transform your home into a haven of elegance with our exclusive tiles and flooring.' },
        { title: 'Shower Enclosures', description: 'Elegant and durable solutions for your bathroom space.' },
        { title: 'Pool Coatings', description: 'Artistically refined style and superior durability for your pool.' },
        { title: 'Sanitary Ware', description: 'Sophisticated design and high-quality functionality for refined environments.' },
        { title: 'Towel Rails', description: 'Functional elegance, add a touch of luxury to your space.' },
        { title: 'Taps & Faucets', description: 'Elevating aesthetics with exclusive faucets, the perfect fusion of form and function.' },
      ]
    }
  };

  const t = translations[lang];

  const images = [
    'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=1200', // Argamassas
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200', // Banheiras
    'https://images.unsplash.com/photo-1581858726768-fd12111e0586?auto=format&fit=crop&q=80&w=1200', // Flutuante
    'https://images.unsplash.com/photo-1504307651254-35680fb3ba66?auto=format&fit=crop&q=80&w=1200', // Isolamentos
    'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200', // Estruturais
    'https://sanindusa.com/media/Sanlife-Amb-4-65c3cb6fd699c.jpg', // Mobiliário
    'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=1200', // Pavimentos
    'https://images.unsplash.com/photo-1585140501042-759c15bd0ca0?auto=format&fit=crop&q=80&w=1200', // Resguardos
    'https://images.unsplash.com/photo-1560015534-cee980ba7e13?auto=format&fit=crop&q=80&w=1200', // Piscinas
    'https://sanindusa.com/media/resized/Colecao-Sanlife-600.jpg', // Sanitárias
    'https://images.unsplash.com/photo-1620626012053-1c1ad2506d87?auto=format&fit=crop&q=80&w=1200', // Toalheiros
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200'  // Torneiras
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h3 className="text-solfil-orange font-black tracking-[0.4em] text-[10px] mb-6 uppercase">{t.tag}</h3>
          <h2 className="text-5xl md:text-7xl font-light text-solfil-black uppercase tracking-tighter leading-none">
            {t.title}<span className="font-bold text-solfil-orange">.</span>
          </h2>
        </div>
        <div className="max-w-xl">
          <p className="text-solfil-gray text-lg md:text-xl font-normal leading-relaxed mb-4">
            {t.desc}
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.categories.slice(0, 3).map((prod, idx) => (
            <ProductCard key={idx} prod={{ ...prod, image: images[idx] }} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.categories.slice(3, 6).map((prod, idx) => (
            <ProductCard key={idx} prod={{ ...prod, image: images[idx + 3] }} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.categories.slice(6).map((prod, idx) => (
            <ProductCard key={idx} prod={{ ...prod, image: images[idx + 6] }} />
          ))}
        </div>
      </div>

      <div className="mt-32 pb-10 flex flex-col items-center text-center">
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

const ProductCard: React.FC<{ prod: any }> = ({ prod }) => (
  <div className="group relative bg-white/40 backdrop-blur-md rounded-[32px] overflow-hidden flex flex-col transition-all duration-700 border border-white/60 hover:border-solfil-orange/30 hover:bg-white/80 hover:-translate-y-3 select-none shadow-sm hover:shadow-[0_20px_50px_rgba(254,80,0,0.15)]">
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