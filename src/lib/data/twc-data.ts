/**
 * Data constants for Tina Wiryawati Center
 */

import { FAQItem, BlogPost, GalleryMoment, ProgramCard } from '@/types/twc';

export const faqData: FAQItem[] = [
  {
    question: 'Apakah Villa De La Tina cocok untuk keluarga dengan anak-anak?',
    answer: 'Ya. Villa De La Tina dirancang sebagai ruang yang ramah untuk keluarga. Tersedia area terbuka yang luas dan aman, kolam renang privat, serta lingkungan yang nyaman bagi anak-anak untuk bermain dan beristirahat.'
  },
  {
    question: 'Apakah villa ini cocok untuk anak muda?',
    answer: 'Sangat cocok. Villa De La Tina menawarkan ruang yang estetis dan artistik, dengan banyak sudut yang natural dan Instagrammable. Suasana yang tenang berpadu dengan ruang untuk berekspresi, berkumpul, dan menciptakan konten secara nyaman.'
  },
  {
    question: 'Apakah di villa tersedia fasilitas hiburan?',
    answer: 'Tersedia. Selain kolam renang privat, Villa De La Tina dilengkapi dengan fasilitas hiburan seperti area karaoke, billiard, serta ruang berkumpul dengan firepit—ideal untuk menikmati waktu bersama, terutama di sore hingga malam hari.'
  },
  {
    question: 'Bagaimana dengan koneksi internet dan hiburan digital?',
    answer: 'Seluruh area Villa De La Tina dilengkapi dengan akses Wi-Fi yang stabil. Fasilitas hiburan digital seperti layanan streaming juga tersedia untuk menemani waktu istirahat dan bersantai.'
  },
  {
    question: 'Berapa kapasitas maksimal Villa De La Tina?',
    answer: 'Villa De La Tina dapat menampung hingga sekitar 50 orang, menjadikannya cocok untuk keluarga besar, reuni, gathering, maupun acara bersama dalam suasana yang tetap tenang dan tertata.'
  },
  {
    question: 'Apakah Villa De La Tina dapat digunakan untuk mengadakan acara atau event?',
    answer: 'Ya. Tersedia ruang serbaguna serta area semi-outdoor yang dapat digunakan untuk berbagai jenis acara, mulai dari workshop, gathering, hingga perayaan privat.'
  },
  {
    question: 'Bisakah villa digunakan untuk workshop atau gathering kantor?',
    answer: 'Tentu. Villa De La Tina sering digunakan untuk kegiatan yang membutuhkan suasana fokus namun tetap santai, baik untuk diskusi, pelatihan, maupun pertemuan internal.'
  },
  {
    question: 'Apakah tersedia layanan makanan atau catering?',
    answer: 'Ya. Kami dapat membantu menyediakan layanan catering sesuai kebutuhan, baik untuk acara keluarga, kegiatan komunitas, maupun acara privat lainnya.'
  },
  {
    question: 'Apakah Villa De La Tina menerima booking jangka pendek maupun jangka panjang?',
    answer: 'Villa De La Tina menerima pemesanan mulai dari satu malam hingga beberapa hari, menyesuaikan kebutuhan menginap, liburan, retreat, atau kegiatan lainnya.'
  },
  {
    question: 'Di mana lokasi Villa De La Tina?',
    answer: 'Villa De La Tina berlokasi di Desa Puncak, Kabupaten Kuningan, Jawa Barat, dikelilingi alam yang hijau, udara sejuk, dan suasana yang tenang.'
  }
];

export const blogCategories = ['Pelatihan', 'Healthy', 'Travel', 'Food', 'Lifestyle', 'Innovate'];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Tina Wiryawati Gagas Program BBM, Solusi Pendidikan dan Pengangguran di Kuningan',
    category: 'Pelatihan',
    author: 'Andini Rahmawati',
    date: '11 Jun, 2025',
    image: '/images/tina-wiryawati-center/blog-bbm.webp',
    size: 'large',
    url: 'https://rri.co.id/cirebon/daerah/1574649/bbm-tina-wiryawati-solusi-pendidikan-untuk-kuningan'
  },
  {
    id: 2,
    title: 'Tina Wiryawati Gelar Pelatihan Swasembada Rumah untuk Ojol dan PKK di Kuningan',
    category: 'Pelatihan',
    author: 'TWC Team',
    date: '2 Jan, 2025',
    image: '/images/tina-wiryawati-center/blog-rumah-ojol.webp',
    size: 'medium',
    url: 'https://gerindra.id/2025/02/03/memperingati-hut-ke-17-partai-gerindra-tina-wiryawati-gelar-pelatihan-swasembada-rumah/'
  },
  {
    id: 3,
    title: 'BesTina Nyakola UMKM Dorong Perempuan Lebih Berdaya Lewat Pelatihan Keterampilan',
    category: 'Pelatihan',
    author: 'TWC Team',
    date: '28 May, 2024',
    image: '/images/tina-wiryawati-center/blog-twc.webp',
    size: 'small',
    url: 'https://www.republika.id/posts/53104/hj-tina-wiryawati-gencar-berdayakan-ekonomi-keluarga'
  },
];

export const galleryMoments: GalleryMoment[] = [
  { id: 1, title: 'Pelatihan UMKM Sabun', image: '/images/tina-wiryawati-center/moment-1.webp' },
  { id: 2, title: 'Workshop Kopi', image: '/images/tina-wiryawati-center/moment-2.webp' },
  { id: 3, title: 'Gathering Komunitas', image: '/images/tina-wiryawati-center/moment-3.webp' },
  { id: 4, title: 'Diskusi Kolaborasi', image: '/images/tina-wiryawati-center/moment-4.webp' }
];

export const programCards: ProgramCard[] = [];

// Uncomment when programs are available:
// export const programCards: ProgramCard[] = [
//   {
//     title: 'Pelatihan UMKM',
//     description: 'Pelatihan produksi dan pengolahan produk lokal. Mulai dari sabun, kopi, hingga olahan pangan dengan pendekatan aplikatif dan berkelanjutan.',
//     image: '/images/tina-wiryawati-center/program-twc.webp'
//   },
//   {
//     title: 'Kegiatan Komunitas',
//     description: 'Ruang berkumpul untuk diskusi, gathering, dan pertemuan yang mempererat hubungan antarindividu dan komunitas.',
//     image: '/images/tina-wiryawati-center/program-twc.webp'
//   },
//   {
//     title: 'Workshop dan Kolaborasi',
//     description: 'Kegiatan tematik yang membuka ruang belajar lintas latar belakang, dijalankan secara terbuka dan partisipatif.',
//     image: '/images/tina-wiryawati-center/program-twc.webp'
//   }
// ];
