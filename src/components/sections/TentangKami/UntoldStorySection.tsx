import React from 'react';
import Image from 'next/image';
import { TYPOGRAPHY, LAYOUTS } from './constants';

/**
 * Untold Story Section - Awal Sebuah Tempat
 * Tells the story of how Villa De La Tina began
 */
export function UntoldStorySection() {
  return (
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
                  loading="lazy"
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
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full mx-auto mt-10 max-w-7xl">
          <div className="h-[400px] overflow-hidden relative w-full md:max-w-[550px] ">
            <video
              className="object-cover w-full h-full"
              src="/videos/tracking-1080p.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/images/tentang-kami/tentang-awal-2.webp"
            >
              Maaf, browser Anda tidak mendukung video.
            </video>
          </div>
      </div>
    </section>
  );
}
