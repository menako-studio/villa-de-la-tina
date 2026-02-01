import React from 'react';
import Image from 'next/image';

interface GallerySectionProps {
  header: string;
  description: string;
  images: string[];
}

/**
 * GallerySection Component
 * 
 * Gallery section with "In Every Moment" header and responsive image grid
 * Follows Figma design specifications for desktop/tablet/mobile
 * 
 * Image layout:
 * - Desktop & Tablet: 3 rows of 2 images (1 large + 1 small) per row
 * - Mobile: 3 rows of 2 stacked images per row
 * 
 * Responsive breakpoints:
 * - Mobile: < 768px - Stacked layout, px-[24px], py-[40px], gap-[24px]
 * - Tablet: 768px - 1279px - Side by side, px-[40px], py-[40px], gap-[40px]
 * - Desktop: >= 1280px - Side by side, px-[80px], py-[80px], gap-[80px]
 */
export const GallerySection: React.FC<GallerySectionProps> = ({ header, description, images }) => {
  return (
    <section className="bg-[#f9f6f1] w-full">
      <div className="flex flex-col items-center px-[24px] py-[40px] md:px-[40px] md:py-[40px] lg:px-[80px] lg:py-[80px]">
        {/* Container with max-width */}
        <div className="flex flex-col gap-[40px] items-center w-full max-w-[1040px] md:gap-[40px] lg:gap-[80px]">
          {/* Text Container */}
          <div className="flex flex-col gap-[24px] items-center text-center w-full md:gap-[40px] lg:gap-[40px]">
            <h2 className="font-['Young_Serif'] text-[28px] leading-[33.6px] md:text-[36px] md:leading-[43.2px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-black w-full whitespace-pre-wrap">
              {header}
            </h2>
            <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545] w-full">
              {description}
            </p>
          </div>

          {/* Image Grid Container */}
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex flex-col gap-[16px] items-start justify-center w-full">
              {/* Row 1 - Large left, Small right (Desktop/Tablet) / Stacked (Mobile) */}
              <div className="flex flex-col gap-[16px] h-[400px] items-start w-full md:flex-row md:gap-[16px]">
                <div className="bg-[#454545] overflow-hidden relative flex-1 h-full w-full md:flex-1">
                  <div className="relative h-full w-full">
                    <Image
                      src={images[0]}
                      alt="Gallery image 1"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="bg-[#454545] overflow-hidden relative h-full w-full md:w-[310px]">
                  <div className="relative h-full w-full">
                    <Image
                      src={images[1]}
                      alt="Gallery image 2"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 310px"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2 - Small left, Large right (Desktop/Tablet) / Stacked (Mobile) */}
              <div className="flex flex-col gap-[16px] h-[400px] items-start w-full md:flex-row md:gap-[16px]">
                <div className="bg-[#454545] overflow-hidden relative h-full w-full md:w-[310px]">
                  <div className="relative h-full w-full">
                    <Image
                      src={images[2]}
                      alt="Gallery image 3"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 310px"
                    />
                  </div>
                </div>
                <div className="bg-[#454545] overflow-hidden relative flex-1 h-full w-full md:flex-1">
                  <div className="relative h-full w-full">
                    <Image
                      src={images[3]}
                      alt="Gallery image 4"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3 - Large left, Small right (Desktop/Tablet) / Stacked (Mobile) */}
              <div className="flex flex-col gap-[16px] h-[400px] items-start w-full md:flex-row md:gap-[16px]">
                <div className="bg-[#454545] overflow-hidden relative flex-1 h-full w-full md:flex-1">
                  <div className="relative h-full w-full">
                    <Image
                      src={images[4]}
                      alt="Gallery image 5"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="bg-[#454545] overflow-hidden relative h-full w-full md:w-[310px]">
                  <div className="relative h-full w-full">
                    <Image
                      src={images[5]}
                      alt="Gallery image 6"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 310px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
