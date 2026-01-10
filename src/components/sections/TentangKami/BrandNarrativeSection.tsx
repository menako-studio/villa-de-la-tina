import React from 'react';
import Image from 'next/image';
import { TYPOGRAPHY, LAYOUTS } from './constants';

/**
 * Brand Narrative Section - Sebuah Ruang yang Tumbuh Perlahan
 * Describes how the space has grown organically
 */
export function BrandNarrativeSection() {
  return (
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
  );
}
