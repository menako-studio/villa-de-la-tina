import React from 'react';
import Image from 'next/image';

interface EventHeroProps {
  subtitle: string;
  title: string;
  description: string;
  heroImage: string;
}

/**
 * EventHero Component
 * 
 * Hero section for Event & Venue page following Figma design specifications
 * - Mobile: Subtitle above image, title + description below
 * - Tablet/Desktop: All text overlaid on image
 * 
 * Responsive breakpoints:
 * - Mobile: < 768px - pt-[208px], px-[24px], pb-[0px], text-[38px]
 * - Tablet: 768px - 1279px - pt-[208px], px-[24px], pb-[24px], text-[48px]
 * - Desktop: >= 1280px - pt-[208px], px-[24px], pb-[24px], text-[56px]
 */
export const EventHero: React.FC<EventHeroProps> = ({ subtitle, title, description, heroImage }) => {
  return (
    <section className="relative w-full bg-[#f9f6f1]">
      <div className="flex flex-col items-start justify-center pt-[208px] px-[24px] md:pb-[24px] lg:pb-[24px]">
        {/* Hero Content - Text above image on all screens */}
        <div className="flex flex-col gap-[16px] items-center pb-[24px] px-0 text-center w-full md:gap-[24px] md:pb-[40px] md:px-[16px] lg:gap-[24px] lg:pb-[40px] lg:px-[96px]">
          {/* Hero Text Container */}
          <div className="flex flex-col gap-[8px] items-center justify-center w-full max-w-[700px]">
            {/* Subtitle */}
            <p className="font-['Manrope'] font-semibold text-[14px] leading-[21px] tracking-[-0.2px] text-[#a8382d] uppercase w-full">
              {subtitle}
            </p>

            {/* Title */}
            <h1 className="font-['Young_Serif'] text-[38px] leading-[45.6px] md:text-[48px] md:leading-[57.6px] lg:text-[56px] lg:leading-[67.2px] tracking-[-2px] text-[#222] w-full whitespace-pre-wrap">
              {title}
            </h1>
          </div>

          {/* Description */}
          <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545] w-full max-w-[700px] whitespace-pre-wrap">
            {description}
          </p>
        </div>

        {/* Hero Image Container */}
        <div className="h-[490px] overflow-hidden relative w-full md:h-[600px] lg:h-[600px]">
          <div className="relative w-full h-full">
            {/* <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            /> */}
            <video
            className="object-cover w-full h-full"
            src="/videos/aerial-villa.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/images/tentang-kami/hero-tentang-kami.webp"
          >
            Maaf, browser Anda tidak mendukung video.
          </video>
          </div>
          {/* Gradient Overlay - Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#222] to-100%" />
        </div>
      </div>
    </section>
  );
};
