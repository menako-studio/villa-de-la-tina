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
    title: 'Tentang Pelatihan Ini',
    paragraphs: [
      'Pelatihan ini dirancang untuk memperkenalkan proses produksi sabun secara sederhana dan aplikatif, menyesuaikan dengan kebutuhan dan potensi peserta di lingkungan sekitar.'
    ],
    image: '/images/event-venue/content-event.webp'
  },
  {
    title: 'Tujuan yang Ingin Dicapai',
    paragraphs: [
      `<ul>
        <li>Memahami proses produksi dasar</li>
        <li>Meningkatkan keterampilan praktis peserta</li>
        <li>Mendorong kemandirian dan kualitas produk</li>
        <li>Membuka ruang belajar bersama</li>
      </ul>`
    ],
    image: '/images/event-venue/content-2-event.webp'
  }
];

export const ctaSection: CTASection = {
  title: 'Tertarik untuk Terlibat?',
  description: 'Jika Anda ingin mengetahui pelatihan serupa atau berdiskusi mengenai kegiatan berikutnya, kami membuka ruang untuk percakapan.',
  buttonText: 'Daftar sekarang',
  buttonLink: '/tina-wiryawati-center',
  image: '/images/event-venue/cta-event.webp'
};
