/**
 * TypeScript interfaces for Event & Venue page
 */

export interface EventDetail {
  subtitle: string;
  title: string;
  description: string;
  location: string;
  date: string;
  ctaText: string;
  ctaLink: string;
  heroImage: string;
}

export interface ContentSection {
  title: string;
  paragraphs: string[];
  image: string;
}

export interface CTASection {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}
