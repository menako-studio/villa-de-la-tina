import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EventDetail } from '@/types/event-venue';
import { InfoBadge } from './InfoBadge';

interface EventHeroProps {
  event: EventDetail;
}

export const EventHero: React.FC<EventHeroProps> = ({ event }) => {
  return (
    <section className="relative w-full bg-[#f9f6f1]">
      {/* Hero Image Container */}
      <div className="relative w-full h-[698px] md:h-[651px] lg:h-[736px] overflow-hidden">
        {/* Hero Image with zoom effect on hover */}
        <div className="absolute inset-0 group">
          <Image
            src={event.heroImage}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Gradient Overlay - Different for each breakpoint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(34,34,34,0)] from-[20%] to-[#222] to-[70%] md:bg-gradient-to-l md:from-[rgba(34,34,34,0)] md:from-[20%] md:to-[#222] md:to-[80%] lg:bg-gradient-to-l lg:from-[rgba(34,34,34,0)] lg:from-[20%] lg:to-[#222] lg:to-[80%]" />
      </div>

      {/* Hero Content */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 md:px-10 md:pb-10 lg:px-20 lg:pb-20">
        <div className="max-w-[480px] animate-fade-in">
          {/* Subtitle */}
          <p className="font-['Manrope'] font-semibold text-[14px] leading-[21px] tracking-[-0.2px] text-[#a8382d] mb-2">
            {event.subtitle}
          </p>

          {/* Title */}
          <h1 className="font-['Young_Serif']  text-[28px] leading-[33.6px] md:text-[36px] md:leading-[43.2px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-white mb-6">
            {event.title}
          </h1>

          {/* Description */}
          <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#f6f6f6] mb-4">
            {event.description}
          </p>

          {/* Info Container */}
          <div className="flex flex-col gap-4 mb-10 md:flex-row">
            <InfoBadge icon="location" label={`Lokasi: ${event.location}`} />
            <InfoBadge icon="calendar" label={`Tanggal: ${event.date}`} />
          </div>

          {/* CTA Button with hover effect */}
          <Link href={event.ctaLink}>
            <button 
              className="group flex items-center gap-1.5 bg-[#d95143] px-4 py-2.5 transition-all duration-300 hover:bg-[#a8382d] hover:gap-3 hover:shadow-lg"
              aria-label={event.ctaText}
            >
              <span className="font-['Manrope'] font-medium text-[14px] leading-[21px] tracking-[-0.2px] text-white">
                {event.ctaText}
              </span>
              <svg 
                className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-1" 
                viewBox="0 0 32 32" 
                fill="none"
                aria-hidden="true"
              >
                <path 
                  d="M6 16H26M26 16L19 9M26 16L19 23" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
