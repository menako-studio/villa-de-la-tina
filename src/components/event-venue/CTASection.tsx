import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CTASection as CTASectionType } from '@/types/event-venue';

interface CTASectionProps {
  cta: CTASectionType;
}

export const CTASection: React.FC<CTASectionProps> = ({ cta }) => {
  return (
    <section className="relative w-full bg-[#f9f6f1] overflow-hidden">
      <div className="relative px-6 py-6 md:px-10 md:py-10 lg:px-20 lg:py-20">
        {/* Background - Positioned absolutely */}
        <div className="absolute right-0 top-0 w-[calc(100%-24px)] md:w-[calc(100%-40px)] lg:w-[calc(100%-80px)] h-full bg-[#a8382d]" />

        {/* Content Container */}
        <div className="relative flex flex-col gap-10 md:flex-row md:gap-0">
          {/* Image - Left with zoom effect */}
          <div className="relative w-full md:w-[400px] lg:w-[8 00px] h-[448px] overflow-hidden md:-ml-6 lg:-ml-20 group">
            <Image
              src={cta.image}
              alt={cta.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>

          {/* Text Content - Right */}
          <div className="flex flex-col justify-between flex-1 pl-10 pr-0 md:pl-10 lg:pl-20">
            <h2 className="font-['Young_Serif'] text-[28px] leading-[33.6px] md:text-[36px] md:leading-[43.2px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-white mb-6 md:mb-0">
              {cta.title}
            </h2>

            <div className="space-y-4">
              <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#f6f6f6]">
                {cta.description}
              </p>

              <Link href={cta.buttonLink}>
                <button 
                  className="group border-b-[1.5px] border-white px-5 py-3 mt-4 transition-all duration-300 hover:border-[#d95143] hover:px-6"
                  aria-label={cta.buttonText}
                >
                  <span className="font-['Manrope'] font-medium text-[16px] leading-[24px] tracking-[-0.5px] text-white transition-colors duration-300 group-hover:text-[#f3b4ae]">
                    {cta.buttonText}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
