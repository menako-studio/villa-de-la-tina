/**
 * Data constants for Event & Venue page
 */

import { EventDetail, Event, ContentSection, CTASection } from '@/types/event-venue';

/**
 * Date formatting helper
 */
export const formatEventDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  };
  return date.toLocaleDateString('id-ID', options);
};

/**
 * Check if event is upcoming
 */
export const isUpcoming = (dateString: string): boolean => {
  const eventDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return eventDate >= today;
};

/**
 * All available events
 */
export const events: Event[] = [
  {
    slug: 'pelatihan-sabun-rumah-tangga',
    subtitle: 'PELATIHAN UMKM',
    title: 'Pelatihan Produksi Sabun Rumah Tangga',
    description: 'Pelatihan aplikatif yang dijalankan bersama masyarakat, berfokus pada praktik dan kualitas produk.',
    longDescription: 'Pelatihan ini dirancang untuk memperkenalkan proses produksi sabun secara sederhana dan aplikatif, menyesuaikan dengan kebutuhan dan potensi peserta di lingkungan sekitar. Kami menggunakan bahan-bahan alami dan metode yang mudah diterapkan untuk mendukung kemandirian ekonomi masyarakat.',
    location: 'Desa Puncak',
    date: '2026-02-19',
    time: '09:00 - 15:00 WIB',
    ctaText: 'Daftar pelatihan',
    ctaLink: '#registration',
    heroImage: '/images/event-venue/hero-event.webp',
    images: [
      '/images/event-venue/hero-event.webp',
      '/images/event-venue/content-event.webp',
      '/images/event-venue/content-2-event.webp',
      '/images/event-venue/gallery-1.webp',
    ],
    price: 'free',
    capacity: 30,
    status: 'upcoming',
    category: 'Workshop',
    highlights: [
      'Memahami proses produksi dasar sabun alami',
      'Meningkatkan keterampilan praktis peserta',
      'Mendorong kemandirian dan kualitas produk',
      'Membuka ruang belajar bersama dan kolaborasi',
      'Sertifikat keikutsertaan untuk semua peserta',
    ],
    requirements: [
      'Tidak ada syarat khusus, terbuka untuk umum',
      'Membawa alat tulis untuk mencatat',
      'Menggunakan pakaian yang nyaman untuk praktik',
      'Mendaftar maksimal 3 hari sebelum acara',
    ],
    schedule: [
      { time: '09:00 - 09:30', activity: 'Registrasi dan perkenalan peserta' },
      { time: '09:30 - 10:30', activity: 'Pengenalan bahan dan alat produksi sabun' },
      { time: '10:30 - 12:00', activity: 'Praktik produksi sabun (sesi 1)' },
      { time: '12:00 - 13:00', activity: 'Istirahat dan makan siang' },
      { time: '13:00 - 14:30', activity: 'Praktik produksi sabun (sesi 2)' },
      { time: '14:30 - 15:00', activity: 'Tanya jawab dan penutupan' },
    ],
    organizer: {
      name: 'Tina Wiryawati Center',
      contact: '+62 812-3456-7890',
      email: 'info@villadelatina.com',
    },
    venue: {
      name: 'Villa De La Tina',
      address: 'Jl. Mulya Asih - Puncak, Desa Puncak, Kuningan, Jawa Barat',
      mapUrl: 'https://maps.google.com',
    },
    registration: {
      isOpen: true,
      deadline: '2026-02-16',
      link: '/register/pelatihan-sabun-rumah-tangga',
      maxParticipants: 30,
      currentParticipants: 12,
    },
    relatedEventSlugs: ['workshop-kerajinan-tangan', 'gathering-komunitas-umkm'],
  },
  {
    slug: 'workshop-kerajinan-tangan',
    subtitle: 'WORKSHOP KREATIF',
    title: 'Workshop Kerajinan Tangan dari Bahan Lokal',
    description: 'Belajar membuat kerajinan tangan berkualitas menggunakan bahan-bahan lokal yang mudah didapat.',
    longDescription: 'Workshop ini mengajarkan teknik dasar pembuatan kerajinan tangan dari bahan-bahan lokal seperti bambu, rotan, dan kain. Peserta akan belajar cara mengolah bahan mentah menjadi produk bernilai jual tinggi.',
    location: 'Villa De La Tina',
    date: '2026-03-15',
    time: '10:00 - 16:00 WIB',
    ctaText: 'Daftar workshop',
    ctaLink: '#registration',
    heroImage: '/images/event-venue/workshop-kerajinan.webp',
    images: [
      '/images/event-venue/workshop-kerajinan.webp',
      '/images/event-venue/content-event.webp',
    ],
    price: 150000,
    capacity: 25,
    status: 'upcoming',
    category: 'Workshop',
    highlights: [
      'Teknik dasar kerajinan tangan dari bahan lokal',
      'Praktik langsung dengan pendampingan',
      'Materi bahan disediakan oleh penyelenggara',
      'Dapat membawa pulang hasil karya',
    ],
    organizer: {
      name: 'Tina Wiryawati Center',
      contact: '+62 812-3456-7890',
      email: 'info@villadelatina.com',
    },
    venue: {
      name: 'Villa De La Tina',
      address: 'Jl. Mulya Asih - Puncak, Kuningan, Jawa Barat',
    },
    registration: {
      isOpen: true,
      deadline: '2026-03-12',
      maxParticipants: 25,
      currentParticipants: 8,
    },
    relatedEventSlugs: ['pelatihan-sabun-rumah-tangga', 'gathering-komunitas-umkm'],
  },
  {
    slug: 'gathering-komunitas-umkm',
    subtitle: 'KOMUNITAS & NETWORKING',
    title: 'Gathering Komunitas UMKM Kuningan',
    description: 'Pertemuan bulanan untuk berbagi pengalaman, strategi bisnis, dan membangun jaringan antar pelaku UMKM.',
    location: 'Villa De La Tina',
    date: '2026-04-10',
    time: '14:00 - 17:00 WIB',
    ctaText: 'Gabung gathering',
    ctaLink: '#registration',
    heroImage: '/images/event-venue/gathering-umkm.webp',
    images: [
      '/images/event-venue/gathering-umkm.webp',
    ],
    price: 'free',
    capacity: 50,
    status: 'upcoming',
    category: 'Networking',
    highlights: [
      'Berbagi pengalaman dengan sesama pelaku UMKM',
      'Diskusi strategi pemasaran digital',
      'Networking dan kolaborasi bisnis',
      'Snack dan minuman disediakan',
    ],
    organizer: {
      name: 'Tina Wiryawati Center',
      contact: '+62 812-3456-7890',
      email: 'info@villadelatina.com',
    },
    venue: {
      name: 'Villa De La Tina',
      address: 'Jl. Mulya Asih - Puncak, Kuningan, Jawa Barat',
    },
    registration: {
      isOpen: true,
      deadline: '2026-04-08',
      maxParticipants: 50,
      currentParticipants: 23,
    },
    relatedEventSlugs: ['pelatihan-sabun-rumah-tangga', 'workshop-kerajinan-tangan'],
  },
];

/**
 * Get event by slug
 */
export const getEventBySlug = (slug: string): Event | undefined => {
  return events.find(event => event.slug === slug);
};

/**
 * Get all event slugs for static generation
 */
export const getAllEventSlugs = (): string[] => {
  return events.map(event => event.slug);
};

/**
 * Get related events
 */
export const getRelatedEvents = (currentSlug: string, limit: number = 3): Event[] => {
  return events
    .filter(event => event.slug !== currentSlug)
    .slice(0, limit);
};

/**
 * Legacy event detail for backward compatibility (deprecated)
 * @deprecated Use getEventBySlug instead
 */
export const eventDetail: EventDetail = {
  slug: 'pelatihan-sabun-rumah-tangga',
  subtitle: 'PELATIHAN UMKM',
  title: 'Pelatihan Produksi Sabun Rumah Tangga',
  description: 'Pelatihan aplikatif yang dijalankan bersama masyarakat, berfokus pada praktik dan kualitas produk.',
  location: 'Desa Puncak',
  date: '2026-02-19',
  ctaText: 'Daftar pelatihan',
  ctaLink: '/trainings',
  heroImage: '/images/event-venue/hero-event.webp'
};

/**
 * Legacy content sections (deprecated)
 * @deprecated Use Event.highlights and Event.longDescription instead
 */
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

/**
 * Legacy CTA section (deprecated)
 * @deprecated Use Event.registration instead
 */
export const ctaSection: CTASection = {
  title: 'Tertarik untuk Terlibat?',
  description: 'Jika Anda ingin mengetahui pelatihan serupa atau berdiskusi mengenai kegiatan berikutnya, kami membuka ruang untuk percakapan.',
  buttonText: 'Daftar sekarang',
  buttonLink: '/tina-wiryawati-center',
  image: '/images/event-venue/cta-event.webp'
};
