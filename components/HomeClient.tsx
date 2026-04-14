'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Brands from '@/components/Brands';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Language } from '@/types';
import type { CMSProduct, CMSBrandCategory, CMSTestimonial, CMSGalleryImage, CMSSiteSettings } from '@/types/cms';

interface HomeClientProps {
  products: CMSProduct[];
  brandCategories: CMSBrandCategory[];
  testimonials: CMSTestimonial[];
  galleryImages: CMSGalleryImage[];
  siteSettings: CMSSiteSettings;
}

export default function HomeClient({
  products,
  brandCategories,
  testimonials,
  galleryImages,
  siteSettings,
}: HomeClientProps) {
  const [lang, setLang] = useState<Language>('PT');
  const [activeBrandTab, setActiveBrandTab] = useState<string>(brandCategories[0]?.id ?? '');

  const handleCategorySelect = (id: string) => {
    setActiveBrandTab(id);
    const brandsSection = document.getElementById('marcas');
    if (brandsSection) {
      brandsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <Header lang={lang} setLang={setLang} />
      <main>
        <section id="home">
          <Hero lang={lang} />
        </section>

        <section id="produtos" className="py-16 md:py-24 bg-white scroll-mt-24">
          <Products lang={lang} products={products} onCategoryClick={handleCategorySelect} />
        </section>

        <section id="sobre" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
          <About lang={lang} />
        </section>

        <section id="marcas" className="py-16 md:py-24 bg-white scroll-mt-24">
          <Brands
            lang={lang}
            brandCategories={brandCategories}
            activeTab={activeBrandTab}
            setActiveTab={setActiveBrandTab}
          />
        </section>

        <section id="galeria" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
          <Gallery lang={lang} images={galleryImages} />
        </section>

        <section id="testemunhos" className="py-16 md:py-24 bg-white scroll-mt-24">
          <Testimonials lang={lang} testimonials={testimonials} />
        </section>

        <section id="contactos" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
          <Contact lang={lang} />
        </section>
      </main>
      <Footer lang={lang} settings={siteSettings} />
      <WhatsAppButton lang={lang} phoneNumber={siteSettings.whatsappNumber} />
    </div>
  );
}
