import React from 'react';
import Image from 'next/image';

/**
 * Hero section for TWC page
 */
export const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#f9f6f1] flex flex-col items-center justify-center overflow-hidden pt-32 md:pt-44 lg:pt-52 pb-0 px-6 md:px-10 lg:px-6">
      <div className="flex flex-col items-center w-full max-w-[700px] gap-4 md:gap-6 pb-6 md:pb-10 text-center">
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <p className="font-semibold leading-[21px] text-[#a8382d] text-sm tracking-[-0.2px]">
            TINA WIRYAWATI CENTER
          </p>
          <h1 className="font-['Young_Serif'] leading-[45.6px] md:leading-[57.6px] lg:leading-[67.2px] text-[#222] text-[38px] md:text-[48px] lg:text-[56px] tracking-[-2px]">
            A Place to Learn, Gather, and Grow
          </h1>
        </div>
        <p className="font-normal leading-6 md:leading-[27px] lg:leading-[30px] text-[#454545] text-base md:text-lg lg:text-xl tracking-[-0.4px]">
          Tina Wiryawati Center adalah ruang kegiatan dan pembelajaran yang tumbuh dari kedekatan dengan masyarakat, tempat pelatihan, pertemuan, dan kolaborasi dijalankan secara nyata dan berkelanjutan.
        </p>
      </div>
      
      <div className="h-[490px] md:h-[600px] overflow-hidden relative w-full">
        <div className="absolute h-[490px] md:h-[600px] left-1/2 top-0 -translate-x-1/2 w-full max-w-[871px] md:max-w-[1067px] lg:max-w-[1152px] z-20">
          <Image
            src="/images/tina-wiryawati-center/hero-twc.webp"
            alt="Tina Wiryawati Center"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute bg-gradient-to-b from-transparent via-transparent to-[#222] h-[490px] md:h-[600px] left-1/2 top-0 -translate-x-1/2 w-full max-w-[871px] md:max-w-[1067px] lg:max-w-[1152px] opacity-50 z-10" />
      </div>
    </section>
  );
};
