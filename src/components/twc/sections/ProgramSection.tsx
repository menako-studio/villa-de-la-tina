import React from 'react';
import Image from 'next/image';
import { programCards } from '@/lib/data/twc-data';
import { ProgramCard } from '../ProgramCard';
import { Button } from '../Button';

/**
 * Program section with cards and CTA
 */
export const ProgramSection: React.FC = () => {
  return (
    <section className="bg-[#f9f6f1] flex flex-col items-center overflow-hidden py-10 md:py-10 lg:py-20 px-6 md:px-10 lg:px-20">
      <div className="flex flex-col items-center w-full max-w-[700px] lg:max-w-[1040px] gap-10 md:gap-10 lg:gap-20">
        <div className="flex flex-col items-center w-full gap-6 text-center md:gap-10">
          <h2 className="font-['Young_Serif'] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-[#222] text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px]">
            Belajar dari Proses yang Nyata
          </h2>
          <p className="font-normal leading-6 md:leading-[27px] lg:leading-[30px] text-[#454545] text-base md:text-lg lg:text-xl tracking-[-0.4px] max-w-[700px]">
            Kegiatan di Tina Wiryawati Center berangkat dari praktik. Belajar dilakukan bersama, melalui proses yang relevan dengan keseharian masyarakat.
          </p>
        </div>

        {/* Program Cards or Empty State */}
        {programCards && programCards.length > 0 ? (
          <div className="flex flex-col items-start w-full gap-6 lg:flex-row lg:gap-4">
            {programCards.map((card, index) => (
              <ProgramCard key={index} card={card} />
            ))}
          </div>
        ) : (
          <div className="w-full max-w-[1040px]">
            <div className="border-2 border-dashed border-[#d9cdae] rounded-2xl px-12 py-[120px] flex items-center justify-center">
              <p className="font-['Manrope'] font-semibold text-[18px] leading-[27px] tracking-[-0.4px] text-[#b0b0b0] text-center max-w-full">
                Saat ini belum ada jadwal pelatihan yang dibuka.
                <br />
                Informasi terbaru akan kami perbarui di halaman ini.
              </p>
            </div>
          </div>
        )}

        {/* CTA Card */}
        <div className="bg-[#a8382d] flex flex-col md:flex-row lg:flex-row overflow-hidden w-full max-w-[1040px]">
          <div className="h-[342px] md:h-[500px] lg:min-h-[500px] md:w-1/2 lg:w-1/2 overflow-hidden relative flex-shrink-0">
            <Image
              src="/images/tina-wiryawati-center/gentle-cta-twc.webp"
              alt="Villa De La Tina"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col items-start w-full md:w-1/2 lg:w-1/2 gap-6 md:gap-10 lg:gap-40 p-6 md:p-8 lg:p-[60px]">
            <p className="font-['Young_Serif'] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-white text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px]">
              Tertarik untuk terlibat, berbagi keahlian, atau berkolaborasi? kami membuka ruang untuk berdiskusi.
            </p>
            <Button variant="secondary" className="px-5 py-3">
              Segera Hadir
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
