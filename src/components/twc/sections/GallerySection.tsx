import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { galleryMoments } from '@/lib/data/twc-data';

/**
 * Gallery section with carousel navigation
 */
export const GallerySection: React.FC = () => {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleGalleryNext = () => {
    if (galleryRef.current) {
      const scrollAmount = 416; // width of card + gap
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setGalleryIndex(Math.min(galleryIndex + 1, galleryMoments.length - 1));
    }
  };

  const handleGalleryPrev = () => {
    if (galleryRef.current) {
      const scrollAmount = 416;
      galleryRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setGalleryIndex(Math.max(galleryIndex - 1, 0));
    }
  };

  return (
    <section className="bg-[#f9f6f1] flex flex-col items-center overflow-hidden py-10 md:py-10 lg:py-20 px-6 md:px-10 lg:px-20">
      <div className="flex flex-col items-center w-full max-w-[700px] lg:max-w-[1040px] gap-10 md:gap-10 lg:gap-20">
        <div className="flex flex-col items-start w-full gap-6 md:gap-10">
          <h2 className="font-['Young_Serif'] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-[#222] text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px] w-full">
            Merekam Perjalanan yang Dijalani
          </h2>
          <p className="font-normal leading-6 md:leading-[27px] lg:leading-[30px] text-[#454545] text-base md:text-lg lg:text-xl tracking-[-0.4px] w-full max-w-[700px] lg:max-w-[550px]">
            Setiap kegiatan di Tina Wiryawati Center didokumentasikan sebagai bagian dari proses belajar. Bukan untuk dirayakan berlebihan, tetapi untuk dibagikan dan diteruskan.
          </p>
        </div>

        <div className="flex flex-col items-start w-full gap-6">
          <div 
            ref={galleryRef}
            className="h-[470px] md:h-[500px] lg:h-[600px] relative w-full overflow-x-auto overflow-y-hidden scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="absolute top-0 left-0 flex h-full gap-4">
              {galleryMoments.map((moment) => (
                <div 
                  key={moment.id} 
                  className="flex flex-col gap-2.5 h-full justify-end overflow-hidden relative w-[320px] md:w-[350px] lg:w-[400px] shrink-0 rounded-lg group cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-full h-full">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bg-gradient-to-b from-transparent to-[#222] h-full left-0 top-0 w-full group-hover:to-[#000] transition-colors duration-300" />
                  </div>
                  <div className="relative z-10 flex items-end justify-center w-full p-6 md:p-8">
                    <p className="font-normal leading-6 md:leading-[27px] text-white text-base md:text-lg tracking-[-0.4px]">
                      {moment.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center w-full gap-6">
            <button 
              onClick={handleGalleryPrev}
              disabled={galleryIndex === 0}
              className="transition-opacity size-10 hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed opacity-80"
              aria-label="Previous gallery item"
            >
              <svg className="w-full h-full" viewBox="0 0 40 40" fill="none">
                <path d="M25 30L15 20L25 10" stroke="#8C3128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className="font-serif font-semibold leading-[30px] md:leading-[33px] lg:leading-[36px] text-[#ebe4d4] text-xl md:text-[22px] lg:text-2xl tracking-[-0.4px]">/</span>
            <button 
              onClick={handleGalleryNext}
              disabled={galleryIndex === galleryMoments.length - 1}
              className="transition-opacity size-10 hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next gallery item"
            >
              <svg className="w-full h-full" viewBox="0 0 40 40" fill="none">
                <path d="M15 10L25 20L15 30" stroke="#8C3128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
