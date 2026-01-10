import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FinalCTA } from '@/components';
import Link from 'next/link';

/**
 * Tentang Kami Page
 * 
 * Navbar and Footer are automatically provided by RootLayout in _app.tsx
 * This eliminates duplication and ensures consistent layout across all pages.
 */

// ===== Typography Classes =====
const TYPOGRAPHY = {
  label: 'text-[#a8382d] text-xs md:text-sm font-semibold tracking-tight uppercase',
  h1: "font-['Young_Serif'] text-[#222] text-[38px] md:text-5xl lg:text-[56px] leading-tight md:leading-[1.2] lg:leading-[1.2] tracking-tight",
  h2: 'text-black text-2xl md:text-[30px] lg:text-[32px] font-semibold leading-tight tracking-tight',
  h2Dark: "font-['Young_Serif'] text-white text-[28px] md:text-4xl lg:text-[40px] leading-tight tracking-tight",
  h2Center: "font-['Young_Serif'] text-black text-[28px] md:text-4xl lg:text-[40px] text-center tracking-tight",
  body: 'text-[#454545] text-base md:text-lg leading-relaxed',
  bodyLarge: 'text-[#454545] text-base md:text-lg lg:text-xl leading-relaxed',
  bodyLight: 'text-[#d1d1d1] text-base md:text-lg leading-relaxed',
} as const;

// ===== Layout Classes =====
const LAYOUTS = {
  sectionContainer: 'flex flex-col items-start px-6 py-10 md:p-10 lg:p-20',
  maxWidth: 'max-w-7xl mx-auto',
  centerContent: 'flex flex-col items-center w-full gap-4 px-6 pb-6 mx-auto text-center',
  halfWidth: 'w-full md:w-[330px] lg:w-[536px]',
  twoThirdsWidth: 'md:w-[384px] lg:w-[484px]',
} as const;

// ===== FAQ Component =====
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQItemProps {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItemComponent({ item, index, isOpen, onToggle }: FAQItemProps) {
  const borderTop = index === 0 ? 'border-t' : 'border-t-0';
  const padding = index === 0 ? 'py-6' : 'pb-6 pt-0';

  return (
    <button
      type="button"
      className={`border-[#ebe4d4] ${borderTop} border-b border-l-0 border-r-0 flex flex-col gap-5 items-start ${padding} w-full transition-colors`}
      tabIndex={0}
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      <div className="flex items-center w-full gap-20 md:gap-20">
        <p className="font-['Young_Serif'] flex-1 text-[#a8382d] text-xl md:text-2xl lg:text-2xl text-left leading-relaxed">
          {item.question}
        </p>
        <div className="relative flex-shrink-0 w-10 h-10 overflow-hidden">
          <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <div className="bg-[#a8382d] h-0.5 w-6" />
          </div>
          <div className={`absolute transition-transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ${isOpen ? 'rotate-90' : ''}`}> 
            <div className="bg-[#a8382d] h-0.5 w-6 rotate-90" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="w-full mt-2">
          <div
            className="text-[#454545] text-left md:text-lg rounded-lg"
            dangerouslySetInnerHTML={{ __html: item.answer }}
          />
        </div>
      )}
    </button>
  );
}

// ===== FAQ Data =====
const faqItems: FAQItem[] = [
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
      answer: 'Villa De La Tina menerima pemesanan mulai dari <strong>satu malam hingga beberapa hari</strong>, menyesuaikan kebutuhan menginap, liburan, retreat, atau kegiatan lainnya.'
    },
    {
      question: 'Di mana lokasi Villa De La Tina?',
      answer: 'Villa De La Tina berlokasi di <strong>Desa Puncak, Kabupaten Kuningan, Jawa Barat</strong>, dikelilingi alam yang hijau, udara sejuk, dan suasana yang tenang.'
    }
  ];

// ===== Section Components =====

/**
 * FAQ Section - Displays collapsible FAQ items
 */
function FAQSection({ items, openFaq, onToggle }: { 
  items: FAQItem[]
  openFaq: number | null
  onToggle: (index: number) => void 
}) {
  return (
    <section className="bg-[#f9f6f1] flex flex-col items-center overflow-hidden">
      <div className={`bg-[#f9f6f1] flex flex-col gap-10 p-6 md:p-10 lg:p-20 w-full ${LAYOUTS.maxWidth}`}>
        <h2 className={TYPOGRAPHY.h2Center}>FAQ</h2>
        <div className="flex flex-col items-center w-full gap-6 mx-auto md:max-w-4xl">
          {items?.map((item, index) => (
            <FAQItemComponent
              key={index}
              item={item}
              index={index}
              isOpen={openFaq === index}
              onToggle={() => onToggle(openFaq === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TentangKami() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const handleFaqToggle = React.useCallback((index: number) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  return (
    <>
      <Head>
        <title>Tentang Kami - Villa De La Tina</title>
        <meta 
          name="description" 
          content="Villa De La Tina lahir dari keyakinan sederhana, bahwa ruang yang tenang dapat mempertemukan orang, membuka percakapan, dan menumbuhkan makna yang bertahan lama." 
        />
      </Head>

      <main className="bg-[#f9f6f1] min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#f9f6f1] flex flex-col items-start justify-center overflow-hidden pb-6 pt-52 px-6 md:pb-24 md:pt-52 lg:pb-6 lg:pt-52">
          <div className={`${LAYOUTS.centerContent} md:gap-6 md:pb-10 md:px-10 lg:px-28 ${LAYOUTS.maxWidth}`}>
            <div className="flex flex-col items-center justify-center w-full gap-2 md:max-w-3xl">
              <p className={TYPOGRAPHY.label}>TENTANG VILLA DE LA TINA</p>
              <h1 className={TYPOGRAPHY.h1}>A Place Shaped<br />by Care</h1>
            </div>
            <p className={`${TYPOGRAPHY.bodyLarge} w-full md:max-w-3xl`}>
              Villa De La Tina lahir dari keyakinan sederhana, bahwa ruang yang tenang dapat mempertemukan orang, membuka percakapan, dan menumbuhkan makna yang bertahan lama.
            </p>
          </div>
          <div className="h-[490px] md:h-[600px] overflow-hidden relative w-full">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/tentang-kami/hero-tentang-kami.webp"
                alt="Villa De La Tina"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#222] opacity-50" />
          </div>
        </section>

        {/* Untold Story Section - Awal Sebuah Tempat */}
        <section className={`bg-[#f9f6f1] ${LAYOUTS.sectionContainer}`}>
          <div className={`flex flex-col items-start justify-center w-full gap-10 ${LAYOUTS.maxWidth} md:flex-row md:gap-10 lg:gap-20`}>
            <div className="flex flex-col items-center w-full gap-10 md:gap-20 md:flex-1">
              <div className="flex flex-col items-start w-full gap-6">
                <div className="flex flex-col items-start w-full gap-4">
                  <p className={TYPOGRAPHY.label}>AWAL SEBUAH TEMPAT</p>
                  <h2 className={TYPOGRAPHY.h2}>
                    Villa De La Tina tidak hadir dari sebuah rencana besar. Ia tumbuh perlahan, dari kebiasaan mendengar dan membantu.
                  </h2>
                </div>
                <div className="flex flex-col items-start w-full gap-4">
                  <p className={TYPOGRAPHY.body}>
                    Dalam kesehariannya, Tina Wiryawati kerap menjadi tempat orang-orang di sekitarnya berbagi cerita. Ada yang datang membawa kegelisahan, ada pula yang sekadar ingin berbincang. Dari percakapan-percakapan itulah tumbuh kepercayaan, dan dari kepercayaan itu lahir kedekatan.
                  </p>
                  <p className={TYPOGRAPHY.body}>
                    Seiring waktu, ruang-ruang pertemuan itu semakin sering terjadi. Pertemuan yang awalnya berpindah-pindah, perlahan menemukan tempatnya sendiri. Bukan sebagai simbol kepemilikan, melainkan sebagai ruang yang bisa digunakan bersama, untuk duduk, berbagi, dan bertukar pikiran tanpa jarak.
                  </p>
                </div>
                <div className="flex flex-col items-start w-full md:hidden">
                  <div className="h-[500px] overflow-hidden relative w-full rounded-lg">
                    <Image
                      src="/images/tentang-kami/tentang-awal.webp"
                      alt="Gathering at Villa"
                      fill
                      className="object-cover"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <p className={TYPOGRAPHY.body}>
                Dari sanalah, Villa De La Tina bertumbuh. Bukan sebagai tujuan akhir, tetapi sebagai wadah dari kebiasaan yang sudah lama ada.
              </p>
            </div>
            <div className="hidden md:flex flex-col items-start w-full md:w-[330px] lg:w-[536px]">
              <div className="h-[712px] lg:h-[737px] overflow-hidden relative w-full ">
                <Image
                  src="/images/tentang-kami/tentang-awal.webp"
                  alt="Gathering at Villa"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full mx-auto mt-10 max-w-7xl">
            <div className="h-[400px] overflow-hidden relative w-full md:max-w-[550px] ">
               <Image
                  src="/images/tentang-kami/tentang-awal-2.webp"
                  alt="Gathering at Villa"
                  fill
                  className="object-cover"
                  quality={100}
                />
            </div>
          </div>
        </section>

        {/* Brand Narrative Section - Sebuah Ruang yang Tumbuh Perlahan */}
        <section className="bg-[#a8382d] flex flex-col gap-10 items-center pb-0 pt-10 md:pt-10 lg:pt-20">
          <div className={`flex flex-col items-start w-full gap-10 px-6 ${LAYOUTS.maxWidth} md:px-10 lg:px-20`}>
            <h2 className={TYPOGRAPHY.h2Dark}>
              Sebuah Ruang yang<br />Tumbuh Perlahan
            </h2>
            <div className={`flex flex-col md:flex-row gap-10 items-start w-full ${TYPOGRAPHY.bodyLight}`}>
              <div className="flex flex-col gap-4 items-start justify-center md:w-[345px] lg:flex-1">
                <p>Villa De La Tina dirawat sebagai ruang untuk bertemu dan tinggal lebih lama. Tempat percakapan terjadi tanpa tergesa, dan waktu dibiarkan berjalan dengan ritmenya sendiri.</p>
                <p>Dari kebiasaan berkumpul itulah, berbagai pertemuan dan kegiatan tumbuh secara alami.</p>
              </div>
              <div className="flex flex-col items-start justify-center flex-1 gap-4 md:pt-20">
                <p>Sebagian menjadi pengalaman, sebagian menjadi langkah kecil yang berarti.</p>
                <p>Hingga kini, ruang ini tetap dijalani dengan cara yang sama, tenang, terbuka, dan dekat dengan orang-orang di sekitarnya.</p>
              </div>
            </div>
          </div>
          <div className="h-[750px] overflow-hidden relative w-full">
            <Image
              src="/images/tentang-kami/tentang-sebuah-ruang.webp"
              alt="Villa De La Tina"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </section>

        {/* TWC Bridging Section */}
        <section className="bg-[#f9f6f1] flex flex-col items-center justify-end overflow-hidden p-6 md:p-10 lg:p-20">
          <div className={`flex flex-col items-center w-full gap-20 ${LAYOUTS.maxWidth} md:flex-row md:items-start`}>
            <div className="bg-[#dcdcdc] h-[400px] md:h-[592px] overflow-hidden relative w-full md:w-[384px] lg:w-[484px] ">
            
              <Image
                src="/images/tentang-kami/tina-wiryawati.webp"
                alt="Tina Wiryawati Center"
                fill
                quality={100}
              />
            </div>
            <div className="flex flex-col items-start flex-1 gap-10">
              <div className="flex flex-col items-start justify-center w-full gap-6">
                <div className="flex flex-col items-start w-full gap-2">
                  <div className="bg-[#eaeaea] flex gap-2 items-center justify-center px-3 py-1 rounded-full">
                    <span className="text-[#222] text-xs md:text-sm font-medium tracking-tight">
                      Tina Wiryawati Center
                    </span>
                  </div>
                  <h2 className={`${TYPOGRAPHY.h2Center}`}>
                    Merangkum Perjalanan<br />yang Tumbuh Bersama
                  </h2>
                </div>
                <p className={`${TYPOGRAPHY.bodyLarge}`}>
                  Berbagai kegiatan dan inisiatif yang lahir dari ruang ini kemudian dirangkum dalam Tina Wiryawati Center, sebuah tempat untuk mencatat, merawat, dan membagikan perjalanan kepedulian yang dijalani bersama masyarakat.
                  <br /><br />
                  Bukan sebagai pencapaian, melainkan sebagai pengingat bahwa setiap langkah selalu dimulai dari kehadiran.
                </p>
              </div>
              <Link href="/tina-wiryawati-center" className="w-fit"> 
              <button className="bg-[#d95143] flex gap-2 items-center justify-center px-5 py-3 text-white font-medium text-base hover:bg-[#c44537] transition-colors">
                Jelajahi Tina Wiryawati Center
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection items={faqItems} openFaq={openFaq} onToggle={handleFaqToggle} />

        {/* Call-to-Action Section */}
        <FinalCTA />
      </main>
    </>
  );
}