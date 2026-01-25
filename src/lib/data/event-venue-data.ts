/**
 * Data constants for Event & Venue page
 */

import { EventDetail, ContentSection, CTASection } from '@/types/event-venue';

export const eventDetail: EventDetail = {
  subtitle: 'PELATIHAN UMKM',
  title: 'Pelatihan Produksi Sabun Rumah Tangga',
  description: 'Pelatihan aplikatif yang dijalankan bersama masyarakat, berfokus pada praktik dan kualitas produk.',
  location: 'Desa Puncak',
  date: '19 Februari 2026',
  ctaText: 'Daftar pelatihan',
  ctaLink: '/trainings',
  heroImage: '/images/event-venue/hero-event.webp'
};

export const contentSections: ContentSection[] = [
  {
    title: 'Sebuah Ruang yang\nTumbuh Perlahan',
    paragraphs: [
      'Villa De La Tina dirawat sebagai ruang untuk bertemu dan tinggal lebih lama. Tempat percakapan terjadi tanpa tergesa, dan waktu dibiarkan berjalan dengan ritmenya sendiri.',
      'Dari kebiasaan berkumpul itulah, berbagai pertemuan dan kegiatan tumbuh secara alami.'
    ],
    image: '/images/event-venue/content-event.webp'
  },
  {
    title: 'Sebuah Ruang yang Tumbuh Perlahan',
    paragraphs: [
      'Villa De La Tina dirawat sebagai ruang untuk bertemu dan tinggal lebih lama. Tempat percakapan terjadi tanpa tergesa, dan waktu dibiarkan berjalan dengan ritmenya sendiri.',
      'Dari kebiasaan berkumpul itulah, berbagai pertemuan dan kegiatan tumbuh secara alami.'
    ],
    image: '/images/event-venue/content-2-event.webp'
  }
];

export const ctaSection: CTASection = {
  title: 'Berakar dari Sebuah Ruang',
  description: 'Sebagian besar kegiatan di Tina Wiryawati Center berawal dari Villa De La Tina, sebuah ruang yang memberi ketenangan bagi pertemuan dan pembelajaran.',
  buttonText: 'Mulai percakapan',
  buttonLink: '/tina-wiryawati-center',
  image: '/images/event-venue/cta-event.webp'
};
