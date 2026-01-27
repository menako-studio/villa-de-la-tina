/**
 * TypeScript interfaces for Event & Venue page
 */

/**
 * Event Detail with full metadata for dynamic routing
 */
export interface EventDetail {
  slug: string;
  subtitle: string;
  title: string;
  description: string;
  location: string;
  date: string; // ISO format: YYYY-MM-DD
  time?: string; // e.g., "14:00 - 16:00 WIB"
  ctaText: string;
  ctaLink: string;
  heroImage: string;
  price?: number | 'free';
  capacity?: number;
  status?: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  category?: string;
  organizer?: {
    name: string;
    contact: string;
    email?: string;
  };
}

/**
 * Event with detailed information for event detail page
 */
export interface Event extends EventDetail {
  images: string[]; // Gallery images
  highlights: string[];
  longDescription?: string;
  requirements?: string[];
  schedule?: {
    time: string;
    activity: string;
  }[];
  relatedEventSlugs?: string[];
  venue?: {
    name: string;
    address: string;
    mapUrl?: string;
  };
  registration?: {
    isOpen: boolean;
    deadline?: string;
    link?: string;
    maxParticipants?: number;
    currentParticipants?: number;
  };
}

/**
 * Content Section for displaying information blocks
 */
export interface ContentSection {
  title: string;
  paragraphs: string[];
  image: string;
}

/**
 * CTA Section for call-to-action areas
 */
export interface CTASection {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

/**
 * Event card for listing pages
 */
export interface EventCard {
  slug: string;
  title: string;
  date: string;
  location: string;
  image: string;
  category?: string;
  status?: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}
