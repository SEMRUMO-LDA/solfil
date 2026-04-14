/**
 * CMS Content Types
 *
 * These types map KIBANcms collection entries to the Solfil data model.
 * Each type corresponds to a collection that should be created in KIBANcms.
 *
 * Collections to create in KIBANcms admin:
 *   - produtos        (custom) → Product categories
 *   - marcas          (custom) → Brand categories with nested brands
 *   - testemunhos     (custom) → Customer testimonials
 *   - galeria         (custom) → Gallery images
 *   - configuracoes   (custom) → Site settings (locations, contacts, etc.)
 */

export interface CMSProduct {
  id: string;
  slug: string;
  title: { PT: string; EN: string };
  description: { PT: string; EN: string };
  image: string;
  order: number;
}

export interface CMSBrand {
  name: string;
  logo: string;
  website: string;
}

export interface CMSBrandCategory {
  id: string;
  slug: string;
  title: { PT: string; EN: string };
  brands: CMSBrand[];
  order: number;
}

export interface CMSTestimonial {
  id: string;
  name: string;
  location: string;
  quote: { PT: string; EN: string };
  image: string;
}

export interface CMSGalleryImage {
  id: string;
  url: string;
  alt: string;
  category: string;
  gridClass: string;
  order: number;
}

export interface CMSLocation {
  name: string;
  address: string;
  mapUrl: string;
  phones: { number: string; raw: string }[];
  emails: string[];
  note?: { PT: string; EN: string };
  hours: {
    week: string;
    saturday: string;
    sunday: { PT: string; EN: string };
  };
}

export interface CMSSiteSettings {
  companyName: string;
  description: { PT: string; EN: string };
  logoUrl: string;
  locations: CMSLocation[];
  companyEmail: string;
  whatsappNumber: string;
  socialLinks: { facebook?: string; instagram?: string };
}
