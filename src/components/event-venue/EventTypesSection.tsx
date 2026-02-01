import React from 'react';
import Image from 'next/image';

interface EventType {
  title: string;
  image: string;
}

interface EventTypesSectionProps {
  header: string;
  eventTypes: EventType[];
}

/**
 * EventTypesSection Component
 * 
 * Displays event types with image cards
 * Follows Figma design for "Untuk Beragam Momen" section
 * 
 * Responsive breakpoints:
 * - Mobile: < 768px - Vertical stacked cards, full width, py-[40px], px-[24px], gap-[24px]
 * - Tablet: 768px - 1279px - Vertical stacked cards, full width, py-[40px], px-[40px], gap-[24px]
 * - Desktop: >= 1280px - Horizontal cards in row, py-[80px], px-[80px], gap-[16px]
 */
export const EventTypesSection: React.FC<EventTypesSectionProps> = ({ header, eventTypes }) => {
  return (
    <section className="bg-[#f9f6f1] w-full">
      <div className="flex flex-col items-center px-[24px] py-[40px] md:px-[40px] md:py-[40px] lg:px-[80px] lg:py-[80px]">
        {/* Container with max-width */}
        <div className="flex flex-col gap-[40px] items-start w-full max-w-[1040px] lg:gap-[80px]">
          {/* Header */}
          <div className="flex flex-col items-center w-full">
            <h2 className="font-['Young_Serif'] text-[28px] leading-[33.6px] md:text-[36px] md:leading-[43.2px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-black text-center w-full whitespace-pre-wrap">
              {header}
            </h2>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col gap-[24px] w-full md:flex-col md:gap-[24px] lg:flex-row lg:gap-[16px]">
            {eventTypes.map((eventType, index) => (
              <div key={index} className="flex flex-col items-start w-full lg:w-[336px]">
                {/* Image Container */}
                <div className="h-[504px] overflow-hidden relative w-full">
                  <div className="relative h-full w-full">
                    <Image
                      src={eventType.image}
                      alt={eventType.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 336px"
                    />
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#222] to-100%" />
                </div>

                {/* Card Content - Title and Arrow */}
                <div className="flex flex-col items-start justify-end pt-[24px] w-full">
                  <div className="flex items-center justify-between w-full">
                    {/* Title */}
                    <h3 className="font-['Manrope'] font-semibold text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#222] whitespace-nowrap">
                      {eventType.title}
                    </h3>

                    {/* Arrow Icon */}
                    <div className="w-[32px] h-[32px] flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
