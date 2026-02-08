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

export const blogCategories = ['Pelatihan', 'Innovate'];

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
  {
    id: 4,
    title: 'Hj Tina Wiryawati Gelar Pelatihan Keterampilan untuk Pemberdayaan Perempuan di Kuningan',
    category: 'Pelatihan',
    author: 'TWC Team',
    date: '28 Jan, 2025',
    image: '/images/tina-wiryawati-center/blog-pelatihan-perempuan.webp',
    size: 'medium',
    url: 'https://gerindra.id/2025/01/28/hj-tina-wiryawati-gelar-pelatihan-keterampilan-untuk-pemberdayaan-perempuan-di-kuningan/'
  },
  {
    id: 5,
    title: 'Lahir Dari Pelatihan Barista Tina Wiryawati Center, Pemuda Asal Banjar Sukses Jalankan Usaha',
    category: 'Pelatihan',
    author: 'TWC Team',
    date: '21 Feb, 2023',
    image: '/images/tina-wiryawati-center/blog-barista-banjar.webp',
    size: 'small',
    url: 'https://kuninganonline.com/lahir-dari-pelatihan-barista-tina-wiryawati-center-pemuda-asal-banjar-sukses-jalankan-usaha/'
  },
  {
    id: 6,
    title: 'Tina Wiryawati Berdayakan Kelompok Wanita Tani dengan Pelatihan Pembuatan Pasta Gigi Capai Kemandirian Masyarakat',
    category: 'Pelatihan',
    author: 'TWC Team',
    date: '26 May, 2024',
    image: '/images/tina-wiryawati-center/blog-pasta-gigi.webp',
    size: 'medium',
    url: 'https://gerindra.id/2024/05/26/tina-wiryawati-berdayakan-kelompok-wanita-tani-dengan-pelatihan-pembuatan-pasta-gigi-capai-kemandirian-masyarakat/'
  },
  {
    id: 7,
    title: 'Tina Wiryawati Dorong Peningkatan Ekonomi Keluarga Melalui Pelatihan MUA',
    category: 'Pelatihan',
    author: 'TWC Team',
    date: '15 May, 2024',
    image: '/images/tina-wiryawati-center/blog-pelatihan-mua.webp',
    size: 'small',
    url: 'https://asajabar.com/tina-wiryawati-dorong-peningkatan-ekonomi-keluarga-melalui-pelatihan-mua/'
  },
  {
    id: 8,
    title: 'Gelar Reses Hj Tina Wiryawati Fasilitasi Pelatihan dan Pengobatan untuk Masyarakat',
    category: 'Pelatihan',
    author: 'TWC Team',
    date: '7 Mar, 2025',
    image: '/images/tina-wiryawati-center/blog-reses-pelatihan.webp',
    size: 'large',
    url: 'https://gerindra.id/2025/03/07/gelar-reses-hj-tina-wiryawati-fasilitasi-pelatihan-dan-pengobatan-untuk-masyarakat/'
  },
  {
    id: 9,
    title: 'Inisiatif Ekonomi Kreatif Jawa Barat Tina Wiryawati Perluas Akses Modal dan Pelatihan Kopi',
    category: 'Pelatihan',
    author: 'TWC Team',
    date: '12 Jun, 2024',
    image: '/images/tina-wiryawati-center/blog-pelatihan-kopi.webp',
    size: 'medium',
    url: 'https://jabar.tribunnews.com/adikarya-parlemen/1155584/inisiatif-ekonomi-kreatif-jawa-barat-tina-wiryawati-perluas-akses-modal-dan-pelatihan-kopi'
  },
  {
    id: 10,
    title: 'Momen HUT Gerindra Tina Wiryawati Latih Emak-emak Bikin Produk Pelembab Alami di Kuningan',
    category: 'Pelatihan',
    author: 'TWC Team',
    date: '3 Feb, 2025',
    image: '/images/tina-wiryawati-center/blog-pelembab-kuningan.webp',
    size: 'small',
    url: 'https://kuningan.inews.id/read/552107/momen-hut-gerindra-tina-wiryawati-latih-emak-emak-bikin-produk-pelembab-alami-di-kuningan'
  },
  {
    id: 11,
    title: 'Tina Wiryawati: Aplikasi Nyari Gawe Perlu Didukung dengan Data Valid dan Akses Pelatihan Merata',
    category: 'Innovate',
    author: 'TWC Team',
    date: '17 Oct, 2025',
    image: '/images/tina-wiryawati-center/blog-nyari-gawe.webp',
    size: 'medium',
    url: 'https://secondnewsupdate.co.id/tina-wiryawati-aplikasi-nyari-gawe-perlu-didukung-dengan-data-valid-dan-akses-pelatihan-merata/'
  },
  {
    id: 12,
    title: 'Roadshow Reses di Ciamis Tina Wiryawati Gelar Pelatihan Pemberdayaan Ekonomi Perempuan',
    category: 'Pelatihan',
    author: 'TWC Team',
    date: '8 Mar, 2024',
    image: '/images/tina-wiryawati-center/blog-reses-ciamis.webp',
    size: 'small',
    url: 'https://ciamis.pikiran-rakyat.com/ciamis/pr-509136590/roadshow-reses-di-ciamis-tina-wiryawati-gelar-pelatihan-pemberdayaan-ekonomi-perempuan'
  },
  {
    id: 13,
    title: 'Anggota DPRD Jabar Tina Wiryawati Gelar Pelatihan Pembuatan Minyak Telon di Kota Banjar',
    category: 'Pelatihan',
    author: 'TWC Team',
    date: '18 Apr, 2024',
    image: '/images/tina-wiryawati-center/blog-minyak-telon.webp',
    size: 'medium',
    url: 'https://asajabar.com/anggota-dprd-jabar-tina-wiryawati-gelar-pelatihan-pembuatan-minyak-telon-di-kota-banjar/'
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
