'use client';

import { useState, useEffect } from 'react';
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
import type { CMSProduct, CMSBrandCategory, CMSTestimonial, CMSGalleryImage } from '@/types/cms';

// Static fallbacks loaded synchronously for instant render
import { staticProducts, staticTestimonials, staticGalleryImages } from '@/data/static';
import { brandCategories as staticBrandCategoriesRaw } from '@/data/brandCategories';

const staticBrandCategories: CMSBrandCategory[] = staticBrandCategoriesRaw.map((cat, idx) => ({
  id: cat.id,
  slug: cat.id,
  title: cat.title,
  brands: cat.brands,
  order: idx,
}));

export default function Home() {
  const [lang, setLang] = useState<Language>('PT');
  const [products, setProducts] = useState<CMSProduct[]>(staticProducts);
  const [brandCategories, setBrandCategories] = useState<CMSBrandCategory[]>(staticBrandCategories);
  const [testimonials, setTestimonials] = useState<CMSTestimonial[]>(staticTestimonials);
  const [galleryImages, setGalleryImages] = useState<CMSGalleryImage[]>(staticGalleryImages);
  const [activeBrandTab, setActiveBrandTab] = useState<string>(staticBrandCategories[0].id);

  // Try to load CMS data on mount (replaces static if CMS is available)
  useEffect(() => {
    async function loadCMSData() {
      try {
        const { getProducts, getBrandCategories, getTestimonials, getGalleryImages } = await import('@/lib/data');

        const [cmsProducts, cmsBrands, cmsTestimonials, cmsGallery] = await Promise.allSettled([
          getProducts(),
          getBrandCategories(),
          getTestimonials(),
          getGalleryImages(),
        ]);

        if (cmsProducts.status === 'fulfilled' && cmsProducts.value.length > 0) {
          setProducts(cmsProducts.value);
        }
        if (cmsBrands.status === 'fulfilled' && cmsBrands.value.length > 0) {
          setBrandCategories(cmsBrands.value);
          setActiveBrandTab(cmsBrands.value[0].id);
        }
        if (cmsTestimonials.status === 'fulfilled' && cmsTestimonials.value.length > 0) {
          setTestimonials(cmsTestimonials.value);
        }
        if (cmsGallery.status === 'fulfilled' && cmsGallery.value.length > 0) {
          setGalleryImages(cmsGallery.value);
        }
      } catch {
        // CMS not available — static data already loaded
      }
    }

    loadCMSData();
  }, []);

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
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </div>
  );
}
