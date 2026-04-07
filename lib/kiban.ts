/**
 * KIBANcms Client
 *
 * Lightweight client compatible with the @kiban/client SDK API.
 * When the SDK is published to npm, replace this file with:
 *   import { KibanClient } from '@kiban/client';
 */

export interface KibanConfig {
  url: string;
  apiKey: string;
  timeout?: number;
}

export interface KibanEntryOptions {
  status?: 'draft' | 'review' | 'scheduled' | 'published' | 'archived';
  search?: string;
  tags?: string;
  limit?: number;
  offset?: number;
  sort?: 'created_at' | 'updated_at' | 'published_at' | 'title' | 'status';
  order?: 'asc' | 'desc';
}

export interface KibanResponse<T> {
  data: T;
  meta?: {
    total?: number;
    limit?: number;
    offset?: number;
  };
  timestamp: string;
}

export interface KibanCollection {
  id: string;
  name: string;
  slug: string;
  description: string;
  type: 'post' | 'page' | 'custom';
  fields: KibanField[];
  icon?: string;
  color?: string;
}

export interface KibanField {
  id: string;
  name: string;
  type: 'text' | 'textarea' | 'richtext' | 'slug' | 'number' | 'boolean' | 'date' | 'select' | 'image';
  required?: boolean;
  maxLength?: number;
}

export interface KibanEntry {
  id: string;
  collection_id: string;
  title: string;
  slug: string;
  content: Record<string, unknown>;
  excerpt?: string;
  featured_image?: string;
  status: 'draft' | 'review' | 'scheduled' | 'published' | 'archived';
  published_at?: string;
  author_id?: string;
  meta?: Record<string, unknown>;
  tags?: string[];
  version: number;
  created_at: string;
  updated_at: string;
}

export interface KibanMedia {
  id: string;
  filename: string;
  original_name: string;
  mime_type: string;
  size_bytes: number;
  storage_path: string;
  alt_text?: string;
  caption?: string;
  folder_path?: string;
  is_public: boolean;
}

class KibanClient {
  private url: string;
  private apiKey: string;
  private timeout: number;

  constructor(config: KibanConfig) {
    this.url = config.url.replace(/\/$/, '');
    this.apiKey = config.apiKey;
    this.timeout = config.timeout ?? 10000;
  }

  private async request<T>(path: string, options?: RequestInit): Promise<T> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const res = await fetch(`${this.url}/api/v1${path}`, {
        ...options,
        signal: controller.signal,
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      if (!res.ok) {
        throw new Error(`KIBANcms API error: ${res.status} ${res.statusText}`);
      }

      const json: KibanResponse<T> = await res.json();
      return json.data;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async getCollections(): Promise<KibanCollection[]> {
    return this.request<KibanCollection[]>('/collections');
  }

  async getCollection(slug: string): Promise<KibanCollection> {
    return this.request<KibanCollection>(`/collections/${slug}`);
  }

  async getEntries(collection: string, options?: KibanEntryOptions): Promise<KibanEntry[]> {
    const params = new URLSearchParams();
    if (options) {
      Object.entries(options).forEach(([key, value]) => {
        if (value !== undefined) params.set(key, String(value));
      });
    }
    const qs = params.toString();
    return this.request<KibanEntry[]>(`/entries/${collection}${qs ? `?${qs}` : ''}`);
  }

  async getEntry(collection: string, slug: string): Promise<KibanEntry> {
    return this.request<KibanEntry>(`/entries/${collection}/${slug}`);
  }

  async getMedia(options?: { limit?: number; offset?: number }): Promise<KibanMedia[]> {
    const params = new URLSearchParams();
    if (options?.limit) params.set('limit', String(options.limit));
    if (options?.offset) params.set('offset', String(options.offset));
    const qs = params.toString();
    return this.request<KibanMedia[]>(`/media${qs ? `?${qs}` : ''}`);
  }

  async getMediaItem(id: string): Promise<KibanMedia> {
    return this.request<KibanMedia>(`/media/${id}`);
  }

  async subscribe(data: {
    email: string;
    name?: string;
    source?: string;
  }): Promise<{ subscribed: boolean }> {
    return this.request<{ subscribed: boolean }>('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async submitForm(data: {
    form_name: string;
    name?: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
    source_url?: string;
    extra?: Record<string, unknown>;
  }): Promise<{ id: string; form: string; received_at: string }> {
    return this.request<{ id: string; form: string; received_at: string }>('/forms/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

// Server-side singleton (uses secret API key for fetching content)
let client: KibanClient | null = null;

export function getKibanClient(): KibanClient | null {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_KIBAN_API_URL;
  const apiKey = process.env.KIBAN_API_KEY;

  if (!url || !apiKey) return null;

  client = new KibanClient({ url, apiKey });
  return client;
}

// Client-side singleton (uses public API key for form submissions)
let browserClient: KibanClient | null = null;

export function getKibanBrowserClient(): KibanClient | null {
  if (browserClient) return browserClient;

  const url = process.env.NEXT_PUBLIC_KIBAN_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_KIBAN_FORMS_KEY;

  if (!url || !apiKey) return null;

  browserClient = new KibanClient({ url, apiKey, timeout: 15000 });
  return browserClient;
}

export { KibanClient };
