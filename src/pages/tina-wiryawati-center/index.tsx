import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Tina Wiryawati Center Page
 * 
 * Navbar and Footer are automatically provided by RootLayout in _app.tsx
 */

// FAQ data with questions and answers
const faqData = [
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

export default function TinaWiryawatiCenter() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Tina Wiryawati Center - Villa De La Tina</title>
        <meta name="description" content="Tina Wiryawati Center adalah ruang kegiatan dan pembelajaran yang tumbuh dari kedekatan dengan masyarakat." />
      </Head>

      {/* Hero Section */}
      <section className="bg-[#f9f6f1] flex flex-col items-center justify-center overflow-hidden pt-32 md:pt-44 lg:pt-52 pb-0 px-6 md:px-10 lg:px-6">
        <div className="flex flex-col items-center w-full max-w-[700px] gap-4 md:gap-6 pb-6 md:pb-10 text-center">
          <div className="flex flex-col items-center justify-center w-full gap-2">
            <p className="font-semibold leading-[21px] text-[#a8382d] text-sm tracking-[-0.2px]">
              TINA WIRYAWATI CENTER
            </p>
            <h1 className="font-serif font-semibold leading-[45.6px] md:leading-[57.6px] lg:leading-[67.2px] text-[#222] text-[38px] md:text-[48px] lg:text-[56px] tracking-[-2px]">
              A Place to Learn, Gather, and Grow
            </h1>
          </div>
          <p className="font-normal leading-6 md:leading-[27px] lg:leading-[30px] text-[#454545] text-base md:text-lg lg:text-xl tracking-[-0.4px]">
            Tina Wiryawati Center adalah ruang kegiatan dan pembelajaran yang tumbuh dari kedekatan dengan masyarakat, tempat pelatihan, pertemuan, dan kolaborasi dijalankan secara nyata dan berkelanjutan.
          </p>
        </div>
        
        <div className="h-[490px] md:h-[600px] overflow-hidden relative w-full">
          <div className="absolute h-[490px] md:h-[600px] left-1/2 top-0 -translate-x-1/2 w-full max-w-[871px] md:max-w-[1067px] lg:max-w-[1152px]">
            <Image
              src="https://source.unsplash.com/1200x600/?workshop,training,community"
              alt="Tina Wiryawati Center"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute bg-gradient-to-b from-transparent via-transparent to-[#222] h-[490px] md:h-[600px] left-0 top-0 w-full opacity-50" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-[#f9f6f1] flex flex-col items-center overflow-hidden pt-10 md:pt-20 lg:pt-40 pb-10 md:pb-20 lg:pb-40 px-6 md:px-10 lg:px-20">
        <div className="border-b border-[#ebe4d4] flex flex-col items-center pb-10 md:pb-20 lg:pb-40 w-full max-w-[700px] lg:max-w-[1040px]">
          <p className="font-serif font-semibold leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-[#222] text-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px]">
            Menjadi ruang tempat orang belajar, berbagi, dan bertumbuh bersama, berangkat dari kebutuhan nyata, dijalani dengan kesadaran, dan diarahkan pada kebermanfaatan yang berkelanjutan.
          </p>
        </div>
      </section>

      {/* Program Section */}
      <section className="bg-[#f9f6f1] flex flex-col items-center overflow-hidden py-10 md:py-10 lg:py-20 px-6 md:px-10 lg:px-20">
        <div className="flex flex-col items-center w-full max-w-[700px] lg:max-w-[1040px] gap-10 md:gap-10 lg:gap-20">
          <div className="flex flex-col items-center w-full gap-6 text-center md:gap-10">
            <h2 className="font-serif font-semibold leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-[#222] text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px]">
              Belajar dari Proses yang Nyata
            </h2>
            <p className="font-normal leading-6 md:leading-[27px] lg:leading-[30px] text-[#454545] text-base md:text-lg lg:text-xl tracking-[-0.4px] max-w-[700px]">
              Kegiatan di Tina Wiryawati Center berangkat dari praktik. Belajar dilakukan bersama, melalui proses yang relevan dengan keseharian masyarakat.
            </p>
          </div>

          <div className="flex flex-col items-start w-full gap-6 lg:flex-row lg:gap-4">
            {/* Program Cards */}
            <div className="flex flex-col items-start w-full gap-6 md:flex-col lg:flex-row lg:gap-4">
              {/* Program Card 1 */}
              <div className="flex flex-col w-full lg:w-[336px] gap-6 p-4 overflow-hidden bg-white shadow-sm rounded-xl">
                <div className="h-[250px] overflow-hidden relative rounded-lg w-full">
                  <Image
                    src="https://source.unsplash.com/400x300/?small-business,training,workshop"
                    alt="Pelatihan UMKM"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-start w-full gap-6">
                  <div className="flex flex-col items-start w-full gap-4">
                    <h3 className="font-semibold leading-[27px] text-[#222] text-lg tracking-[-0.4px] w-full">
                      Pelatihan UMKM
                    </h3>
                    <p className="font-normal leading-6 text-[#454545] text-base tracking-[-0.5px] w-full">
                      Pelatihan produksi dan pengolahan produk lokal. Mulai dari sabun, kopi, hingga olahan pangan dengan pendekatan aplikatif dan berkelanjutan.
                    </p>
                  </div>
                  <button className="bg-[#d95143] flex gap-1.5 items-center justify-center px-4 py-2.5 rounded-lg w-full hover:bg-[#c14539] transition-colors">
                    <span className="font-medium leading-[21px] text-white text-sm tracking-[-0.2px]">
                      Daftar sekarang
                    </span>
                  </button>
                </div>
              </div>

              {/* Program Card 2 */}
              <div className="flex flex-col w-full lg:w-[336px] gap-6 p-4 overflow-hidden bg-white shadow-sm rounded-xl">
                <div className="h-[250px] overflow-hidden relative rounded-lg w-full">
                  <Image
                    src="https://source.unsplash.com/400x300/?community,gathering,people"
                    alt="Kegiatan Komunitas"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-start w-full gap-6">
                  <div className="flex flex-col items-start w-full gap-4">
                    <h3 className="font-semibold leading-[27px] text-[#222] text-lg tracking-[-0.4px] w-full">
                      Kegiatan Komunitas
                    </h3>
                    <p className="font-normal leading-6 text-[#454545] text-base tracking-[-0.5px] w-full">
                      Ruang berkumpul untuk diskusi, gathering, dan pertemuan yang mempererat hubungan antarindividu dan komunitas.
                    </p>
                  </div>
                  <button className="bg-[#d95143] flex gap-1.5 items-center justify-center px-4 py-2.5 rounded-lg w-full hover:bg-[#c14539] transition-colors">
                    <span className="font-medium leading-[21px] text-white text-sm tracking-[-0.2px]">
                      Daftar sekarang
                    </span>
                  </button>
                </div>
              </div>

              {/* Program Card 3 */}
              <div className="flex flex-col w-full lg:w-[336px] gap-6 p-4 overflow-hidden bg-white shadow-sm rounded-xl">
                <div className="h-[250px] overflow-hidden relative rounded-lg w-full">
                  <Image
                    src="https://source.unsplash.com/400x300/?workshop,collaboration,teamwork"
                    alt="Workshop dan Kolaborasi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-start w-full gap-6">
                  <div className="flex flex-col items-start w-full gap-4">
                    <h3 className="font-semibold leading-[27px] text-[#222] text-lg tracking-[-0.4px] w-full">
                      Workshop dan Kolaborasi
                    </h3>
                    <p className="font-normal leading-6 text-[#454545] text-base tracking-[-0.5px] w-full">
                      Kegiatan tematik yang membuka ruang belajar lintas latar belakang, dijalankan secara terbuka dan partisipatif.
                    </p>
                  </div>
                  <button className="bg-[#d95143] flex gap-1.5 items-center justify-center px-4 py-2.5 rounded-lg w-full hover:bg-[#c14539] transition-colors">
                    <span className="font-medium leading-[21px] text-white text-sm tracking-[-0.2px]">
                      Daftar sekarang
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-[#a8382d] flex flex-col md:flex-row lg:flex-row overflow-hidden w-full max-w-[1040px]">
            <div className="h-[342px] md:h-[500px] lg:h-full md:w-1/2 lg:w-1/2 overflow-hidden relative">
              <Image
                src="https://source.unsplash.com/600x500/?villa,nature,retreat"
                alt="Villa De La Tina"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start w-full md:w-1/2 lg:w-1/2 gap-6 md:gap-10 lg:gap-40 p-6 md:p-8 lg:p-[60px]">
              <p className="font-serif font-semibold leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-white text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px]">
                Tertarik untuk terlibat, berbagi keahlian, atau berkolaborasi? kami membuka ruang untuk berdiskusi.
              </p>
              <button className="border-b-[1.5px] border-white flex gap-1.5 items-center justify-center py-3 hover:opacity-80 transition-opacity">
                <span className="font-medium leading-6 text-white text-base tracking-[-0.5px]">
                  Terhubung dengan kami
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-[#f9f6f1] flex flex-col items-center overflow-hidden py-10 md:py-10 lg:py-20 px-6 md:px-10 lg:px-20">
        <div className="flex flex-col items-center w-full max-w-[700px] lg:max-w-[1040px] gap-10 md:gap-10 lg:gap-20">
          <div className="flex flex-col items-start w-full gap-6 md:gap-10">
            <h2 className="font-serif font-semibold leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-[#222] text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px] w-full">
              Merekam Perjalanan yang Dijalani
            </h2>
            <p className="font-normal leading-6 md:leading-[27px] lg:leading-[30px] text-[#454545] text-base md:text-lg lg:text-xl tracking-[-0.4px] w-full max-w-[700px] lg:max-w-[550px]">
              Setiap kegiatan di Tina Wiryawati Center didokumentasikan sebagai bagian dari proses belajar. Bukan untuk dirayakan berlebihan, tetapi untuk dibagikan dan diteruskan.
            </p>
          </div>

          <div className="flex flex-col items-start w-full gap-6">
            <div className="h-[470px] md:h-[500px] lg:h-[600px] relative w-full overflow-x-auto overflow-y-hidden">
              <div className="absolute top-0 left-0 flex h-full gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex flex-col gap-2.5 h-full justify-end overflow-hidden relative w-[320px] md:w-[350px] lg:w-[400px] shrink-0">
                    <div className="absolute top-0 left-0 w-full h-full">
                      <Image
                        src={`https://source.unsplash.com/400x600/?training,workshop,activity,${item}`}
                        alt={`Activity ${item}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bg-gradient-to-b from-transparent to-[#222] h-full left-0 top-0 w-full" />
                    </div>
                    <div className="relative flex items-end justify-center w-full p-6 md:p-8">
                      <p className="font-normal leading-6 md:leading-[27px] text-white text-base md:text-lg tracking-[-0.4px]">
                        Nama Kegiatan
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center w-full gap-6">
              <button className="transition-opacity size-10 opacity-80 hover:opacity-100">
                <svg className="w-full h-full" viewBox="0 0 40 40" fill="none">
                  <path d="M25 30L15 20L25 10" stroke="#8C3128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span className="font-serif font-semibold leading-[30px] md:leading-[33px] lg:leading-[36px] text-[#ebe4d4] text-xl md:text-[22px] lg:text-2xl tracking-[-0.4px]">/</span>
              <button className="transition-opacity size-10 hover:opacity-80">
                <svg className="w-full h-full" viewBox="0 0 40 40" fill="none">
                  <path d="M15 10L25 20L15 30" stroke="#8C3128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f9f6f1] flex flex-col items-center overflow-hidden py-10 md:py-10 lg:py-20 px-6 md:px-10 lg:px-20">
        <div className="flex flex-col items-center w-full max-w-[800px] gap-10 md:gap-10 lg:gap-10">
          <h2 className="font-serif font-semibold leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-[#222] text-[28px] md:text-[36px] lg:text-[40px] text-center tracking-[-1px] w-full">
            FAQ
          </h2>
          <div className="flex flex-col items-center w-full gap-6">
            {faqData.map((faq, index) => (
              <button
                key={index}
                onClick={() => toggleFaq(index)}
                className={`border-[#ebe4d4] ${index === 0 ? 'border-t border-b' : 'border-b'} flex flex-col gap-5 items-start ${index === 0 ? 'py-6' : 'pb-6'} w-full text-left transition-all`}
              >
                <div className="flex items-start w-full gap-8 md:gap-20">
                  <p className="flex-1 font-serif font-normal leading-[30px] md:leading-[33px] lg:leading-[36px] text-[#a8382d] text-xl md:text-[22px] lg:text-2xl tracking-[-0.4px]">
                    {faq.question}
                  </p>
                  <div className="relative overflow-hidden shrink-0 size-10">
                    <div className={`absolute flex h-6 items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 transition-opacity ${openFaqIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                      <div className="rotate-90">
                        <div className="bg-[#a8382d] h-0.5 w-6" />
                      </div>
                    </div>
                    <div className="absolute bg-[#a8382d] h-0.5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6" />
                  </div>
                </div>
                {openFaqIndex === index && (
                  <div className="font-normal leading-[30px] text-[#454545] text-lg md:text-xl tracking-[-0.4px] pr-12 md:pr-20 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#a8382d] flex flex-col md:flex-row lg:flex-row gap-10 items-end justify-center overflow-hidden pt-20 md:pt-10 lg:pt-20 pb-6 md:pb-10 lg:pb-20 px-6 md:px-10 lg:px-20">
        <div className="h-[400px] md:h-[400px] lg:h-[448px] overflow-hidden relative w-full md:w-1/2 lg:w-1/2 order-2 md:order-1">
          <Image
            src="https://source.unsplash.com/800x400/?villa,interior,retreat"
            alt="Villa Interior"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/2 lg:w-[400px] gap-6 md:gap-10 lg:gap-20 order-1 md:order-2">
          <h2 className="font-serif font-semibold leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-white text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px]">
            Berakar dari<br />Sebuah Ruang
          </h2>
          <div className="flex flex-col items-start w-full gap-6">
            <p className="font-normal leading-6 md:leading-[27px] lg:leading-[30px] text-[#f6f6f6] text-base md:text-lg lg:text-xl tracking-[-0.4px]">
              Sebagian besar kegiatan di Tina Wiryawati Center berawal dari Villa De La Tina, sebuah ruang yang memberi ketenangan bagi pertemuan dan pembelajaran.
            </p>
            <button className="border-b-[1.5px] border-white flex gap-1.5 items-center justify-center py-3 hover:opacity-80 transition-opacity">
              <span className="font-medium leading-6 text-white text-base tracking-[-0.5px]">
                Mulai percakapan
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}