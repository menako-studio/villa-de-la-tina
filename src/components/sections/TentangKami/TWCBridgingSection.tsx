import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TYPOGRAPHY, LAYOUTS } from './constants';

/**
 * TWC Bridging Section
 * Introduces Tina Wiryawati Center with CTA button
 */
export function TWCBridgingSection() {
  return (
    <section className="bg-[#f9f6f1] flex flex-col items-center justify-end overflow-hidden p-6 md:p-10 lg:p-20">
      <div className={`flex flex-col items-center w-full gap-10 lg:gap-20 ${LAYOUTS.maxWidth} md:flex-row md:items-start`}>
        {/* Mobile: show desktop image, but keep aspect ratio */}
        <div className="bg-[#dcdcdc] h-[400px] overflow-hidden relative w-full md:hidden">
          <Image
            src="/images/tentang-kami/tina-wiryawati.webp"
            alt="Tina Wiryawati Center"
            fill
            quality={100}
            className="object-cover"
            loading="lazy"
          />
        </div>
        {/* Tablet: show tablet image */}
        <div className="bg-[#dcdcdc] h-[592px] overflow-hidden relative w-full hidden md:block lg:hidden md:w-[384px]">
          <Image
            src="/images/tentang-kami/tina-wiryawati-tablet.webp"
            alt="Tina Wiryawati Center"
            fill
            quality={100}
            className="object-cover"
            loading="lazy"
          />
        </div>
        {/* Desktop: show desktop image */}
        <div className="bg-[#dcdcdc] h-[592px] overflow-hidden relative w-full hidden lg:block lg:w-[484px]">
          <Image
            src="/images/tentang-kami/tina-wiryawati.webp"
            alt="Tina Wiryawati Center"
            fill
            quality={100}
            className="object-cover"
            loading="lazy"
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
  );
}
