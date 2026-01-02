import React from 'react';
import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section className="bg-[#a8382d] h-auto lg:h-[608px] flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-end p-6 pt-20 lg:p-20 overflow-hidden relative gap-10 lg:gap-0">
      {/* Background Image */}
      <div className="relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 h-[400px] lg:h-[448px] w-full lg:w-[600px] overflow-hidden order-1 lg:order-none">
        <Image
          src="/images/cta-low.webp"
          alt="Begin Your Stay"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="w-full lg:w-[400px] flex flex-col gap-10 lg:gap-40 z-10 relative order-2 lg:order-none pb-6 lg:pb-0">
        <h3 className="font-['Young_Serif'] font-semibold text-[28px] leading-[33.6px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-white">
          Begin Your Stay
        </h3>
        <div className="flex flex-col gap-6 lg:gap-4">
          <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#f6f6f6]">
            Setiap perjalanan dimulai dengan percakapan. Kami dengan senang hati membantu Anda menemukan cara terbaik untuk menikmati waktu 
            di Villa De La Tina sesuai ritme dan kebutuhan Anda.
          </p>
          <button className="border-b-[1.5px] border-white pb-3 text-white font-['Manrope'] font-medium text-[16px] leading-[24px] text-left hover:border-[#d95143] transition-colors w-fit">
            Mulai percakapan
          </button>
        </div>
      </div>
    </section>
  );
}
