import React from 'react';
import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section className="bg-[#a8382d] h-auto md:h-[500px] lg:h-[608px] flex flex-col md:flex-row items-center md:items-center justify-center md:justify-end p-6 md:p-12 md:pt-20 lg:p-20 overflow-hidden relative gap-10 md:gap-6 lg:gap-0">
      {/* Background Image */}
      <div className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 h-[400px] md:h-[380px] lg:h-[448px] w-full md:w-[500px] lg:w-[600px] overflow-hidden order-1 md:order-none">
        <Image
          src="/images/cta-low.webp"
          alt="Begin Your Stay"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="w-full md:w-[320px] lg:w-[400px] flex flex-col gap-10 md:gap-20 lg:gap-40 z-10 relative order-2 md:order-none pb-6 md:pb-0">
        <h3 className="font-['Young_Serif'] font-semibold text-[24px] md:text-[32px] lg:text-[40px] leading-[28.8px] md:leading-[38.4px] lg:leading-[48px] tracking-[-1px] text-white">
          Begin Your Stay
        </h3>
        <div className="flex flex-col gap-6 md:gap-5 lg:gap-4">
          <p className="font-['Manrope'] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px] text-[#f6f6f6]">
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
