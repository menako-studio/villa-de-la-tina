import React from 'react';
import { TYPOGRAPHY, LAYOUTS } from './constants';

/**
 * FAQ Component Types and Data
 */
export interface FAQItem {
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

export const faqItems: FAQItem[] = [
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

interface FAQSectionProps {
  items: FAQItem[];
  openFaq: number | null;
  onToggle: (index: number) => void;
}

/**
 * FAQ Section - Displays collapsible FAQ items
 */
export function FAQSection({ items, openFaq, onToggle }: FAQSectionProps) {
  return (
    <section className="bg-[#f9f6f1] flex flex-col items-center overflow-hidden">
      <div className={`bg-[#f9f6f1] flex flex-col gap-10 p-6 md:p-10 lg:p-20 w-full ${LAYOUTS.maxWidth}`}>
        <h2 className={TYPOGRAPHY.h2Center + ' text-center mx-auto'}>FAQ</h2>
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
