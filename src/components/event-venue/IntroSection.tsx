import React from 'react';

interface IntroSectionProps {
  headline: string;
  description: string;
}

/**
 * IntroSection Component
 * 
 * Introduction section for Event & Venue page
 * Displays centered headline and description text following Figma design
 * 
 * Responsive breakpoints:
 * - Mobile: < 768px - text-[28px] leading-[33.6px], px-[24px], py-[40px], pt-[80px], gap-[80px]
 * - Tablet: 768px - 1279px - text-[36px] leading-[43.2px], px-[40px], py-[40px], pt-[80px], gap-[150px]
 * - Desktop: >= 1280px - text-[40px] leading-[48px], px-[80px], py-[80px], pt-[168px], gap-[152px]
 */
export const IntroSection: React.FC<IntroSectionProps> = ({ headline, description }) => {
  return (
    <section className="bg-[#f9f6f1] w-full">
      <div className="flex flex-col items-center justify-center pb-[40px] pt-[80px] px-[24px] md:pb-[40px] md:pt-[80px] md:px-[40px] lg:pb-[80px] lg:pt-[168px] lg:px-[80px]">
        <div className="flex flex-col gap-[80px] items-center w-full md:gap-[150px] lg:gap-[152px] max-w-[1040px]">
          {/* Headline */}
          <h2 className="font-['Young_Serif'] text-[28px] leading-[33.6px] md:text-[36px] md:leading-[43.2px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-black text-center w-full whitespace-pre-wrap">
            {headline}
          </h2>

          {/* Description */}
          <div className="flex flex-col items-start justify-center w-full md:w-full lg:w-[700px]">
            <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545] text-center w-full whitespace-pre-wrap">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
