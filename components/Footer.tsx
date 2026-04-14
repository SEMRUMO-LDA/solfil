'use client';

import React, { useState } from 'react';
import { Language } from '@/types';
import type { CMSSiteSettings } from '@/types/cms';
import PrivacyModal from '@/components/PrivacyModal';

const Footer: React.FC<{ lang: Language; settings: CMSSiteSettings }> = ({ lang, settings }) => {
  const locations = settings.locations;
  const [activeLoc, setActiveLoc] = useState(0);
  const [newsEmail, setNewsEmail] = useState('');
  const [newsStatus, setNewsStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const logoUrl = settings.logoUrl;

  const t = {
    PT: {
      newsTag: 'NEWSLETTER',
      newsTitle1: 'RECEBA AS NOSSAS',
      newsTitle2: 'NOVIDADES.',
      newsPlace: 'O seu melhor e-mail...',
      newsBtn: 'ENVIAR',
      newsSuccess: 'Obrigado por se subscrever!',
      where: 'ONDE ESTAMOS',
      addrLabel: 'MORADA (VER NO MAPA)',
      contactLabel: 'CONTACTOS DIRETOS',
      hoursTitle: 'HORÁRIOS DE FUNCIONAMENTO',
      weekLabel: 'SEGUNDA A SEXTA',
      satLabel: 'SÁBADO',
      sunLabel: 'DOMINGO',
      socialPoints: 'REDES SOCIAIS',
      priv: 'POLÍTICA DE PRIVACIDADE & COOKIES',
      book: 'LIVRO DE RECLAMAÇÕES'
    },
    EN: {
      newsTag: 'NEWSLETTER',
      newsTitle1: 'STAY UPDATED WITH OUR',
      newsTitle2: 'LATEST NEWS.',
      newsPlace: 'Your best email...',
      newsBtn: 'SEND',
      newsSuccess: 'Thank you for subscribing!',
      where: 'OUR LOCATIONS',
      addrLabel: 'ADDRESS (VIEW ON MAP)',
      contactLabel: 'DIRECT CONTACTS',
      hoursTitle: 'OPENING HOURS',
      weekLabel: 'MONDAY TO FRIDAY',
      satLabel: 'SATURDAY',
      sunLabel: 'SUNDAY',
      socialPoints: 'SOCIAL MEDIA',
      priv: 'PRIVACY & COOKIES POLICY',
      book: 'COMPLAINTS BOOK'
    }
  }[lang];

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;

    setNewsStatus('loading');
    try {
      const apiUrl = process.env.NEXT_PUBLIC_KIBAN_API_URL;
      const apiKey = process.env.NEXT_PUBLIC_KIBAN_FORMS_KEY;

      if (!apiUrl || !apiKey) throw new Error('CMS not configured');

      const response = await fetch(`${apiUrl}/api/v1/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email: newsEmail,
          source: 'footer',
        }),
      });

      if (response.ok) {
        setNewsStatus('success');
        setNewsEmail('');
        setTimeout(() => setNewsStatus('idle'), 5000);
      } else {
        throw new Error('Newsletter error');
      }
    } catch (err) {
      console.error('Newsletter Error:', err);
      setNewsStatus('error');
      setTimeout(() => setNewsStatus('idle'), 4000);
    }
  };

  return (
    <footer className="bg-solfil-black text-white py-12 flex flex-col">
      <div className="container mx-auto px-6">
        {/* Newsletter Section - pb-12 para simetria com o topo */}
        <div className="pb-12 border-b border-white/5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-solfil-orange font-black tracking-[0.4em] text-xs mb-4 uppercase">{t.newsTag}</h3>
              <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase leading-none">
                {t.newsTitle1} <span className="font-semibold italic">{t.newsTitle2}</span>
              </h2>
            </div>
            <div>
              {newsStatus === 'success' ? (
                <div className="bg-solfil-orange/20 border border-solfil-orange/30 p-4 rounded-[32px] text-center animate-in zoom-in duration-300">
                  <p className="text-solfil-orange font-bold text-sm tracking-widest uppercase">{t.newsSuccess}</p>
                </div>
              ) : (
                <form onSubmit={handleNewsSubmit} className="flex flex-col sm:flex-row gap-3 p-2 bg-white/5 border border-white/10 rounded-[32px] transition-all focus-within:border-solfil-orange/50">
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  <input
                    type="email"
                    required
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    placeholder={t.newsPlace}
                    className="flex-1 bg-transparent px-6 py-4 text-sm focus:outline-none font-normal"
                  />
                  <button
                    disabled={newsStatus === 'loading'}
                    className="bg-solfil-orange text-white px-8 py-4 rounded-[24px] font-black text-xs hover:bg-white hover:text-solfil-black disabled:opacity-50 transition-all uppercase tracking-[0.2em]"
                  >
                    {newsStatus === 'loading' ? '...' : t.newsBtn}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Grid - py-12 garante a simetria entre as linhas divisórias */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

            {/* COLUNA 1: Logo e Descrição */}
            <div className="lg:col-span-3 space-y-8">
              <img src={logoUrl} alt="Solfil" className="h-10 brightness-0 invert" />
              <p className="text-white/60 leading-relaxed font-normal text-base max-w-sm">
                {settings.description[lang]}
              </p>
              <div className="pt-4 space-y-4">
                <h4 className="text-solfil-orange font-black tracking-[0.4em] text-xs uppercase">{t.socialPoints}</h4>
                <div className="flex space-x-4">
                  {[
                    ...(settings.socialLinks.facebook ? [{ id: 'FB', url: settings.socialLinks.facebook }] : []),
                    ...(settings.socialLinks.instagram ? [{ id: 'IG', url: settings.socialLinks.instagram }] : []),
                  ].map(social => (
                    <a 
                      key={social.id} 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-solfil-orange hover:text-white transition-all cursor-pointer"
                    >
                      <span className="text-[11px] font-bold text-white/50">{social.id}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* COLUNA 2: Horário e Switcher */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <h4 className="font-semibold text-xs tracking-[0.4em] text-solfil-orange uppercase">{t.hoursTitle}</h4>
                <div className="space-y-4 w-full lg:max-w-md">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[11px] font-bold text-white/40 uppercase">{t.weekLabel}</span>
                    <span className="text-sm">{locations[activeLoc].hours.week}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[11px] font-bold text-white/40 uppercase">{t.satLabel}</span>
                    <span className="text-sm">{locations[activeLoc].hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[11px] font-bold text-white/40 uppercase">{t.sunLabel}</span>
                    <span className="text-sm text-red-500 font-bold">{locations[activeLoc].hours.sunday[lang]}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-semibold text-xs tracking-[0.4em] text-solfil-orange uppercase">{t.where}</h4>
                <div className="flex p-1 bg-white/5 rounded-2xl border border-white/10 max-w-xs">
                  {locations.map((loc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveLoc(idx)}
                      className={`flex-1 py-3 rounded-xl text-[11px] font-black uppercase transition-all ${activeLoc === idx ? 'bg-solfil-orange text-white' : 'text-white/40 hover:text-white/60'}`}
                    >
                      {loc.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* COLUNA 3: Info Dinâmica - ESTABILIZADA com min-h para evitar saltos */}
            <div className="lg:col-span-4 space-y-8 min-h-[320px] animate-in fade-in duration-500" key={activeLoc}>
              <div className="space-y-4">
                <h4 className="font-semibold text-xs tracking-[0.4em] text-solfil-orange uppercase">{t.addrLabel}</h4>
                <a href={locations[activeLoc].mapUrl} target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-solfil-orange transition-colors">
                  {locations[activeLoc].address}
                </a>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-xs tracking-[0.4em] text-solfil-orange uppercase">{t.contactLabel}</h4>
                <div className="space-y-3">
                  {locations[activeLoc].phones.map((phone, i) => {
                    const isMobile = phone.raw.startsWith('3519') || phone.raw.startsWith('9');
                    const isFixed = phone.raw.startsWith('3512') || phone.raw.startsWith('2');
                    return (
                      <div key={i} className="mb-4 last:mb-0">
                        <a href={`tel:${phone.raw}`} className="flex items-center gap-3 text-white font-bold text-xl hover:text-solfil-orange transition-colors mb-1">
                          <svg className="w-5 h-5 text-solfil-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {phone.number}
                        </a>
                        {isMobile && <span className="block text-[8px] text-white/30 uppercase tracking-widest pl-8">(chamada para rede móvel nacional)</span>}
                        {isFixed && <span className="block text-[8px] text-white/30 uppercase tracking-widest pl-8">(chamada para rede fixa nacional)</span>}
                      </div>
                    );
                  })}
                  <div className="pt-1">
                    {locations[activeLoc].emails.map((email, i) => (
                      <a key={i} href={`mailto:${email}`} className="flex items-center gap-3 text-white/50 text-base hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {locations[activeLoc].note && (
                <div className="p-6 bg-solfil-orange/10 border border-solfil-orange/20 rounded-[24px]">
                  <p className="text-solfil-orange text-xs font-bold leading-relaxed">
                    {locations[activeLoc].note[lang]}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar - pt-12 para simetria com a linha de cima */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[9px] font-black tracking-[0.4em] uppercase w-full">
          <div className="text-left">
            {settings.companyName} @ {new Date().getFullYear()} DESENVOLVIDO PELA <a href="https://www.aorubro.pt" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-solfil-orange">AORUBRO</a>
          </div>
          <div className="flex gap-8 items-center">
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-solfil-orange uppercase">{t.priv}</button>
            <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-solfil-orange">{t.book}</a>
          </div>
        </div>
      </div>

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} lang={lang} />
    </footer>
  );
};

export default Footer;
