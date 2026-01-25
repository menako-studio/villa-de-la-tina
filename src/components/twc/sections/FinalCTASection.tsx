import React from 'react';
import Image from 'next/image';
import { Button } from '../Button';

/**
 * Final CTA section
 */
export const FinalCTASection: React.FC = () => {
  return (
    <section className="bg-[#a8382d] flex flex-col md:flex-row lg:flex-row gap-10 items-end justify-center overflow-hidden pt-20 md:pt-10 lg:pt-20 pb-6 md:pb-10 lg:pb-20 px-6 md:px-10 lg:px-20">
      <div className="h-[400px] md:h-[400px] lg:h-[448px] overflow-hidden relative w-full md:w-1/2 lg:w-1/2 order-2 md:order-1">
        <Image
          src="/images/tina-wiryawati-center/cta-twc.webp"
          alt="Villa Interior"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start w-full md:w-1/2 lg:w-[400px] gap-6 md:gap-10 lg:gap-20 order-1 md:order-2">
        <h2 className="font-['Young_Serif'] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-white text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px]">
          Berakar dari<br />Sebuah Ruang
        </h2>
        <div className="flex flex-col items-start w-full gap-6">
          <p className="font-normal leading-6 md:leading-[27px] lg:leading-[30px] text-[#f6f6f6] text-base md:text-lg lg:text-xl tracking-[-0.4px]">
            Sebagian besar kegiatan di Tina Wiryawati Center berawal dari Villa De La Tina, sebuah ruang yang memberi ketenangan bagi pertemuan dan pembelajaran.
          </p>
          <Button variant="secondary" className="px-5 py-3">
            Mulai percakapan
          </Button>
        </div>
      </div>
    </section>
  );
};
