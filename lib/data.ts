/**
 * Data Layer - Solfil
 *
 * Each function tries to fetch from KIBANcms first.
 * If the CMS is not configured or the request fails, static data is returned.
 *
 * This means the site works out of the box with hardcoded content
 * and seamlessly switches to CMS-driven content once configured.
 */

import { getKibanClient } from './kiban';
import type {
  CMSBrandCategory,
  CMSTestimonial,
  CMSGalleryImage,
  CMSProduct,
  CMSSiteSettings,
} from '@/types/cms';
import {
  brandCategories as staticBrandCategories,
} from '@/data/brandCategories';
import {
  staticProducts,
  staticTestimonials,
  staticGalleryImages,
  staticSiteSettings,
} from '@/data/static';

// ---------------------------------------------------------------------------
// Brand Categories
// ---------------------------------------------------------------------------

export async function getBrandCategories(): Promise<CMSBrandCategory[]> {
  const kiban = getKibanClient();
  if (!kiban) return mapStaticBrands();

  try {
    const entries = await kiban.getEntries('marcas', {
      status: 'published',
      sort: 'title',
      order: 'asc',
      limit: 50,
    });

    return entries.map((entry) => ({
      id: entry.slug,
      slug: entry.slug,
      title: entry.content.title as { PT: string; EN: string },
      brands: entry.content.brands as CMSBrandCategory['brands'],
      order: (entry.content.order as number) ?? 0,
    }));
  } catch (error) {
    console.warn('[Solfil] Failed to fetch brands from CMS, using static data:', error);
    return mapStaticBrands();
  }
}

function mapStaticBrands(): CMSBrandCategory[] {
  return staticBrandCategories.map((cat, idx) => ({
    id: cat.id,
    slug: cat.id,
    title: cat.title,
    brands: cat.brands,
    order: idx,
  }));
}

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

export async function getProducts(): Promise<CMSProduct[]> {
  const kiban = getKibanClient();
  if (!kiban) return staticProducts;

  try {
    const entries = await kiban.getEntries('produtos', {
      status: 'published',
      sort: 'title',
      order: 'asc',
      limit: 50,
    });

    return entries.map((entry) => ({
      id: entry.id,
      slug: entry.slug,
      title: entry.content.title as { PT: string; EN: string },
      description: entry.content.description as { PT: string; EN: string },
      image: (entry.content.image as string) ?? entry.featured_image ?? '',
      order: (entry.content.order as number) ?? 0,
    }));
  } catch (error) {
    console.warn('[Solfil] Failed to fetch products from CMS, using static data:', error);
    return staticProducts;
  }
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export async function getTestimonials(): Promise<CMSTestimonial[]> {
  const kiban = getKibanClient();
  if (!kiban) return staticTestimonials;

  try {
    const entries = await kiban.getEntries('testemunhos', {
      status: 'published',
      limit: 20,
    });

    return entries.map((entry) => ({
      id: entry.id,
      name: entry.title,
      location: entry.content.location as string,
      quote: entry.content.quote as { PT: string; EN: string },
      image: (entry.content.image as string) ?? entry.featured_image ?? '',
    }));
  } catch (error) {
    console.warn('[Solfil] Failed to fetch testimonials from CMS, using static data:', error);
    return staticTestimonials;
  }
}

// ---------------------------------------------------------------------------
// Gallery
// ---------------------------------------------------------------------------

export async function getGalleryImages(): Promise<CMSGalleryImage[]> {
  const kiban = getKibanClient();
  if (!kiban) return staticGalleryImages;

  try {
    const entries = await kiban.getEntries('galeria', {
      status: 'published',
      limit: 20,
    });

    return entries.map((entry) => ({
      id: entry.id,
      url: (entry.content.url as string) ?? entry.featured_image ?? '',
      alt: entry.title,
      category: (entry.content.category as string) ?? '',
      gridClass: (entry.content.gridClass as string) ?? '',
      order: (entry.content.order as number) ?? 0,
    }));
  } catch (error) {
    console.warn('[Solfil] Failed to fetch gallery from CMS, using static data:', error);
    return staticGalleryImages;
  }
}

// ---------------------------------------------------------------------------
// Site Settings
// ---------------------------------------------------------------------------

export async function getSiteSettings(): Promise<CMSSiteSettings> {
  const kiban = getKibanClient();
  if (!kiban) return staticSiteSettings;

  try {
    const entry = await kiban.getEntry('configuracoes', 'geral');
    const c = entry.content as Record<string, any>;

    // Parse locations from JSON string (textarea field) or use as-is if already object
    let locations = staticSiteSettings.locations;
    if (c.locations) {
      try {
        locations = typeof c.locations === 'string' ? JSON.parse(c.locations) : c.locations;
      } catch {
        locations = staticSiteSettings.locations;
      }
    }

    return {
      companyName: c.companyName || staticSiteSettings.companyName,
      description: {
        PT: c.description_pt || c.description?.PT || staticSiteSettings.description.PT,
        EN: c.description_en || c.description?.EN || staticSiteSettings.description.EN,
      },
      logoUrl: c.logoUrl || staticSiteSettings.logoUrl,
      companyEmail: c.companyEmail || staticSiteSettings.companyEmail,
      whatsappNumber: c.whatsappNumber || staticSiteSettings.whatsappNumber,
      socialLinks: {
        facebook: c.facebook || c.socialLinks?.facebook || staticSiteSettings.socialLinks.facebook,
        instagram: c.instagram || c.socialLinks?.instagram || staticSiteSettings.socialLinks.instagram,
      },
      locations,
    };
  } catch (error) {
    console.warn('[Solfil] Failed to fetch settings from CMS, using static data:', error);
    return staticSiteSettings;
  }
}
