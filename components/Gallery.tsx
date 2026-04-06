'use client';

import React, { useState } from 'react';
import { Language } from '@/types';
import type { CMSGalleryImage } from '@/types/cms';

interface GalleryProps {
  lang: Language;
  images: CMSGalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ lang, images }) => {
  const [selectedImage, setSelectedImage] = useState<CMSGalleryImage | null>(null);

  const translations = {
    PT: {
      tag: 'GALERIA',
      title1: 'IMAGENS QUE',
      title2: 'INSPIRAM',
    },
    EN: {
      tag: 'GALLERY',
      title1: 'IMAGES THAT',
      title2: 'INSPIRE',
    }
  };

  const t = translations[lang];

  const openLightbox = (img: CMSGalleryImage) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-end mb-12 lg:mb-20">
        <div>
          <h3 className="text-solfil-orange font-black tracking-[0.4em] text-[10px] mb-6 uppercase">{t.tag}</h3>
          <h2 className="text-5xl lg:text-7xl font-light text-solfil-black uppercase tracking-tighter leading-none">
            {t.title1} <span className="font-semibold italic">{t.title2}</span><span className="font-bold text-solfil-orange">.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            onClick={() => openLightbox(img)}
            className={`${img.gridClass} group relative rounded-[24px] lg:rounded-[40px] overflow-hidden bg-solfil-black cursor-pointer shadow-sm transition-all duration-700 hover:shadow-[0_20px_50px_rgba(254,80,0,0.15)] hover:-translate-y-3 min-h-[200px] lg:h-auto`}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.opacity = '0';
              }}
            />
            <div className="absolute inset-0 bg-solfil-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <span className="bg-solfil-orange text-white text-[8px] font-black tracking-[0.4em] px-4 py-2 rounded-full uppercase">
                {img.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-solfil-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-4 bg-white/5 rounded-full"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="max-w-6xl w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[85vh] overflow-hidden rounded-[32px] lg:rounded-[48px] shadow-2xl bg-solfil-black">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                }}
              />
            </div>
            <div className="mt-8 text-center space-y-3">
              <span className="text-solfil-orange text-[10px] font-black tracking-[0.5em] uppercase">{selectedImage.category}</span>
              <h4 className="text-white text-2xl lg:text-4xl font-light tracking-tighter uppercase">{selectedImage.alt}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
