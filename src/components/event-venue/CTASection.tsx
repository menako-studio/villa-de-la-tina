import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

/**
 * CTASection Component
 * 
 * Call-to-action section for Event & Venue page
 * Features "Begin Your Stay" message with image and CTA button
 * Follows Figma design specifications
 * 
 * Responsive breakpoints:
 * - Mobile: < 768px - Stacked layout, pb-[24px] pt-[80px], px-[24px], unusual height h-[3906px]
 * - Tablet: 768px - 1279px - Side by side with overlap, h-[480px], p-[40px]
 * - Desktop: >= 1280px - Side by side with overlap, h-[608px], p-[80px]
 */
export const CTASection: React.FC<CTASectionProps> = ({ title, description, buttonText, buttonLink, image }) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-[40px] items-end justify-center pb-[24px] pt-[80px] px-[24px] md:hidden">
        {/* Background - Mobile */}
        <div className="absolute bg-[#a8382d] bottom-0 right-0 top-0 w-[calc(100%-24px)]" />
        
        {/* Image - Mobile */}
        <div className="h-[448px] overflow-hidden relative w-[600px] z-10">
          <div className="relative h-full w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="600px"
            />
          </div>
        </div>

        {/* Text Content - Mobile */}
        <div className="flex flex-col gap-[16px] items-start pl-[40px] pr-[16px] relative w-full z-10">
          <div className="flex flex-col items-start justify-center w-full">
            <h2 className="font-['Young_Serif'] text-[28px] leading-[33.6px] tracking-[-1px] text-white w-full whitespace-pre-wrap">
              {title}
            </h2>
          </div>

          <div className="flex flex-col gap-[24px] items-start w-full">
            <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] tracking-[-0.4px] text-[#f6f6f6] w-full whitespace-pre-wrap">
              {description}
            </p>

            <Link href={buttonLink}>
              <button className="border-b-[1.5px] border-white px-5 py-3 flex gap-[6px] items-center justify-center">
                <span className="font-['Manrope'] font-medium text-[16px] leading-[24px] tracking-[-0.5px] text-white whitespace-nowrap">
                  {buttonText}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tablet/Desktop Layout */}
      <div className="hidden md:flex flex-col gap-[40px] h-[480px] items-end justify-center overflow-hidden p-[40px] relative lg:h-[608px] lg:p-[80px]">
        {/* Background - Tablet/Desktop */}
        <div className="absolute bg-[#a8382d] h-full right-0 top-0 w-[calc(100%-40px)] lg:w-[calc(100%-80px)]" />

        {/* Image - Tablet/Desktop */}
        <div className="absolute h-[448px] left-0 overflow-hidden top-[40px] w-[600px] lg:top-[80px]">
          <div className="relative h-full w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="600px"
            />
          </div>
        </div>

        {/* Text Content - Tablet/Desktop */}
        <div className="flex flex-1 flex-col items-start justify-between min-h-0 min-w-0 relative w-[285px] lg:w-[400px]">
          <div className="flex flex-col items-start justify-center w-full">
            <h2 className="font-['Young_Serif'] text-[36px] leading-[43.2px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-white w-full whitespace-pre-wrap">
              {title}
            </h2>
          </div>

          <div className="flex flex-col gap-[16px] items-start w-full">
            <p className="font-['Manrope'] font-normal text-[18px] leading-[27px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#f6f6f6] w-full whitespace-pre-wrap">
              {description}
            </p>

            <Link href={buttonLink}>
              <button className="border-b-[1.5px] border-white px-5 py-3 flex gap-[6px] items-center justify-center">
                <span className="font-['Manrope'] font-medium text-[16px] leading-[24px] tracking-[-0.5px] text-white whitespace-nowrap">
                  {buttonText}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
