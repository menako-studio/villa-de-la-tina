import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[600px] flex flex-col items-center justify-center overflow-hidden pt-0 md:pt-24 lg:pt-[148px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="Nature background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#222222]" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 px-6 md:px-20 lg:px-[120px] max-w-full pb-10 md:pb-10 lg:pb-10">
        {/* Label */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-['Manrope'] font-semibold text-[14px] leading-[21px] tracking-[-0.2px] text-white text-center uppercase">
            VILLA DE LA TINA
          </p>
          <h1 className="font-['Young_Serif'] font-semibold text-[38px] md:text-[48px] lg:text-[56px] leading-[45.6px] md:leading-[57.6px] lg:leading-[67.2px] tracking-[-2px] text-white text-center max-w-[700px]">
            A Private Retreat in<br />the Heart of Nature
          </h1>
        </div>
        <div className="flex flex-col items-center w-full max-w-[700px] gap-6">
          <p className="font-['Manrope'] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px] text-[#d1d1d1] text-center">
            Villa De La Tina adalah ruang tinggal yang tenang intim, dan dikelilingi lanskap hijau Kuningan. Dirancang untuk mereka yang menghargai ketenangan, ruang, dan waktu yang berjalan lebih pelan.
          </p>
          <button className="bg-[#d95143] px-5 py-3 text-white font-['Manrope'] font-medium text-[16px] leading-[24px] tracking-[-0.5px] hover:bg-[#a8382d] transition-colors">
            Discover the Experience
          </button>
        </div>
      </div>
    </section>
  );
}
