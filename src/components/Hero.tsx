import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex flex-col items-center justify-center overflow-hidden pt-0 lg:pt-[148px]">
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
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 max-w-[750px] pb-10 lg:pb-0">
        <h1 className="font-['Young_Serif'] font-semibold text-[38px] leading-[45.6px] lg:text-[56px] lg:leading-[67.2px] tracking-[-2px] text-white text-center">
          A Private Retreat in<span className="lg:inline"><br /></span> the Heart of Nature
        </h1>
        <div className="flex flex-col items-center w-full gap-6">
          <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#d1d1d1] text-center">
            Villa De La Tina adalah ruang tinggal yang tenang dan intim, dikelilingi lanskap alami Kuningan. 
            Dirancang untuk mereka yang menghargai ketenangan, ruang, dan waktu yang berjalan lebih pelan.
          </p>
          <button className="bg-[#d95143] px-5 py-3 text-white font-['Manrope'] font-medium text-[16px] leading-[24px] hover:bg-[#a8382d] transition-colors">
            Discover the Experience
          </button>
        </div>
      </div>
    </section>
  );
}
