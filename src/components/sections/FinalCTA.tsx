import React from 'react';
import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section className="bg-[#a8382d] h-auto md:h-[480px] lg:h-[608px] flex flex-col md:flex-row items-center md:items-center justify-center md:justify-end p-6 md:p-10 lg:p-20 overflow-hidden relative gap-10 md:gap-10 lg:gap-0">
      {/* Background Image */}
      <div className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 h-[400px] md:h-[400px] lg:h-[448px] w-full md:w-[445px] lg:w-[600px] overflow-hidden order-1 md:order-none">
        <Image
          src="/images/cta-low.webp"
          alt="Begin Your Stay"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="w-full md:w-[245px] lg:w-[400px] flex flex-col justify-between md:h-full gap-10 md:gap-0 lg:gap-40 z-10 relative order-2 md:order-none pb-6 md:pb-0">
        <h3 className="font-['Young_Serif'] text-[24px] md:text-[36px] lg:text-[40px] leading-[28.8px] md:leading-[43.2px] lg:leading-[48px] tracking-[-1px] text-white">
          Begin Your Stay
        </h3>
        <div className="flex flex-col gap-6 md:gap-4 lg:gap-4">
          <p className="font-['Manrope'] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px] text-[#f6f6f6]">
            Jika Anda sedang mencari penginapan di Kuningan yang menawarkan ketenangan dan pengalaman villa healing, Villa De La Tina membuka ruang untuk memulai percakapan, secara personal dan tanpa tergesa.
          </p>
          {/* <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"> */}
            <button className="border-b-[1.5px] border-white pb-3 text-white font-['Manrope'] font-medium text-[16px] leading-[24px] text-left hover:border-[#d95143] transition-colors w-fit">
              Mulai percakapan
            </button>
          {/* </a> */}
        </div>
      </div>
    </section>
  );
}
