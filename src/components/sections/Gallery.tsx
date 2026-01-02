import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const carouselImages = [
  { alt: 'Cottage', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=1200&fit=crop' },
  { alt: 'Cabin', image: 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=800&h=1200&fit=crop' },
  { alt: 'Restaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=1200&fit=crop' },
  { alt: 'Pool', image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=1200&fit=crop' },
  { alt: 'Sauna', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=1200&fit=crop' },
];

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(416);
  
  useEffect(() => {
    const handleResize = () => {
      setSlideWidth(typeof window !== 'undefined' && window.innerWidth < 1024 ? 336 : 416);
    };
    
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="bg-[#f9f6f1] py-10 md:py-16 lg:py-20 px-6 md:px-8 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 md:gap-12 lg:gap-20">
        <h2 className="font-['Young_Serif'] font-semibold text-[24px] md:text-[32px] lg:text-[40px] leading-[28.8px] md:leading-[38.4px] lg:leading-[48px] tracking-[-1px] text-black text-center">
          In Every Moment
        </h2>
        
        {/* Carousel Container */}
        <div className="flex flex-col gap-6 md:gap-8 overflow-hidden lg:gap-10">
          {/* Images */}
          <div className="flex gap-4 overflow-hidden">
            <div 
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}
            >
              {carouselImages.map((item, index) => (
                <div key={index} className="relative h-[470px] lg:h-[600px] w-[320px] lg:w-[400px] flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#222222]" />
                  <div className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8">
                    <p className="font-['Manrope'] font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-white">
                      {item.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 px-0 lg:px-40">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center opacity-[0.08] lg:opacity-50 hover:opacity-100 transition-opacity"
              aria-label="Previous slide"
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M18.75 22.5L11.25 15L18.75 7.5" stroke="#8c3128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <p className="font-['Young_Serif'] font-semibold text-[24px] leading-[36px] text-[#ebe4d4]">
              {currentSlide + 1} / {carouselImages.length}
            </p>
            <button 
              onClick={nextSlide}
              className="flex items-center justify-center w-10 h-10 transition-opacity hover:opacity-80"
              aria-label="Next slide"
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M11.25 7.5L18.75 15L11.25 22.5" stroke="#8c3128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
