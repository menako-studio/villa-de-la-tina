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
      <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 px-6 md:px-8 max-w-[750px] pb-10 md:pb-8 lg:pb-0">
        <h1 className="font-['Young_Serif'] font-semibold text-[36px] md:text-[44px] lg:text-[56px] leading-[43.2px] md:leading-[52.8px] lg:leading-[67.2px] tracking-[-2px] text-white text-center">
          A Private Retreat in<span className="md:inline lg:inline"><br /></span> the Heart of Nature
        </h1>
        <div className="flex flex-col items-center w-full gap-6">
          <p className="font-['Manrope'] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px] text-[#d1d1d1] text-center">
            Villa De La Tina adalah ruang tinggal yang tenang dan intim, dikelilingi lanskap alami Kuningan. 
            Dirancang untuk mereka yang menghargai ketenangan, ruang, dan waktu yang berjalan lebih pelan.
          </p>
          <button className="bg-[#d95143] px-5 py-3 md:px-6 md:py-3 text-white font-['Manrope'] font-medium text-[16px] leading-[24px] hover:bg-[#a8382d] transition-colors">
            Discover the Experience
          </button>
        </div>
      </div>
    </section>
  );
}
