import React, { useState } from 'react';
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
 * Includes image preview modal with navigation
 * Follows Figma design specifications for desktop/tablet/mobile
 * 
 * Image layout:
 * - Desktop & Tablet: 3 rows of 2 images (1 large + 1 small) per row
 * - Mobile: 3 rows of 2 stacked images per row
 * 
 * Modal specs:
 * - Desktop: 1200x800px centered modal
 * - Tablet: 810x1080px centered modal  
 * - Mobile: 390x844px centered modal
 * 
 * Responsive breakpoints:
 * - Mobile: < 768px - Stacked layout, px-[24px], py-[40px], gap-[24px]
 * - Tablet: 768px - 1279px - Side by side, px-[40px], py-[40px], gap-[40px]
 * - Desktop: >= 1280px - Side by side, px-[80px], py-[80px], gap-[80px]
 */
export const GallerySection: React.FC<GallerySectionProps> = ({ header, description, images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

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
                <div className="bg-[#454545] overflow-hidden relative flex-1 h-full w-full md:flex-1 cursor-pointer group" onClick={() => openModal(0)}>
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={images[0]}
                      alt="Gallery image 1"
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-20" />
                </div>
                <div className="bg-[#454545] overflow-hidden relative h-full w-full md:w-[310px] cursor-pointer group" onClick={() => openModal(1)}>
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={images[1]}
                      alt="Gallery image 2"
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                      sizes="(max-width: 768px) 100vw, 310px"
                    />
                  </div>
                  <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-20" />
                </div>
              </div>

              {/* Row 2 - Small left, Large right (Desktop/Tablet) / Stacked (Mobile) */}
              <div className="flex flex-col gap-[16px] h-[400px] items-start w-full md:flex-row md:gap-[16px]">
                <div className="bg-[#454545] overflow-hidden relative h-full w-full md:w-[310px] cursor-pointer group" onClick={() => openModal(2)}>
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={images[2]}
                      alt="Gallery image 3"
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                      sizes="(max-width: 768px) 100vw, 310px"
                    />
                  </div>
                  <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-20" />
                </div>
                <div className="bg-[#454545] overflow-hidden relative flex-1 h-full w-full md:flex-1 cursor-pointer group" onClick={() => openModal(3)}>
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={images[3]}
                      alt="Gallery image 4"
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-20" />
                </div>
              </div>

              {/* Row 3 - Large left, Small right (Desktop/Tablet) / Stacked (Mobile) */}
              <div className="flex flex-col gap-[16px] h-[400px] items-start w-full md:flex-row md:gap-[16px]">
                <div className="bg-[#454545] overflow-hidden relative flex-1 h-full w-full md:flex-1 cursor-pointer group" onClick={() => openModal(4)}>
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={images[4]}
                      alt="Gallery image 5"
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-20" />
                </div>
                <div className="bg-[#454545] overflow-hidden relative h-full w-full md:w-[310px] cursor-pointer group" onClick={() => openModal(5)}>
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={images[5]}
                      alt="Gallery image 6"
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                      sizes="(max-width: 768px) 100vw, 310px"
                    />
                  </div>
                  <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-[#a8382d] flex items-center justify-center animate-fadeIn">
          {/* Desktop/Tablet/Mobile Container */}
          <div className="relative w-[390px] h-[844px] md:w-[810px] md:h-[1080px] lg:w-[1200px] lg:h-[800px] animate-scaleIn">
            {/* Header */}
            <div className="absolute top-[40px] left-[24px] md:left-[40px] lg:left-[40px] right-[24px] md:right-[40px] lg:right-[40px] flex items-center justify-between">
              {/* Pagination */}
              <div className="flex items-center gap-[8px] font-['Manrope'] font-normal text-[14px] leading-[21px] tracking-[-0.2px] text-white">
                <span className="text-center w-[20px]">{selectedImageIndex + 1}</span>
                <span>/</span>
                <span className="text-center w-[20px]">{images.length}</span>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="w-[32px] h-[32px] flex items-center justify-center hover:scale-110 hover:rotate-90 transition-all duration-200"
                aria-label="Close"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M24 8L8 24M8 8L24 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Image Container - Centered */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[342px] h-[228px] md:w-[730px] md:h-[487px] lg:w-[864px] lg:h-[576px]">
              <div className="relative w-full h-full">
                <Image
                  src={images[selectedImageIndex]}
                  alt={`Gallery image ${selectedImageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 342px, (max-width: 1280px) 730px, 864px"
                />
              </div>
            </div>

            {/* Navigation Container */}
            <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex items-center gap-[24px]">
              {/* Previous Button */}
              <button 
                onClick={goToPrevious}
                className="w-[32px] h-[32px] flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="Previous image"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M20 26L10 16L20 6" stroke="#f9f6f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Separator */}
              <span className="font-['Young_Serif'] font-semibold text-[20px] leading-[30px] md:text-[22px] md:leading-[33px] lg:text-[24px] lg:leading-[36px] tracking-[-0.4px] text-[#f9f6f1]">
                /
              </span>

              {/* Next Button */}
              <button 
                onClick={goToNext}
                className="w-[32px] h-[32px] flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="Next image"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M12 6L22 16L12 26" stroke="#f9f6f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
