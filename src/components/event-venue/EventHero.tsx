import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EventDetail, Event } from '@/types/event-venue';
import { InfoBadge } from './InfoBadge';

interface EventHeroProps {
  event: EventDetail | Event;
  showBreadcrumb?: boolean;
}

/**
 * EventHero Component
 * 
 * Hero section for event detail pages featuring:
 * - Responsive hero image with gradient overlay
 * - Event title, subtitle, and description
 * - Event metadata (date, time, location)
 * - Call-to-action button
 * - Optional breadcrumb navigation
 * 
 * Responsive breakpoints:
 * - Mobile: < 768px
 * - Tablet: 768px - 1279px
 * - Desktop: >= 1280px
 */
export const EventHero: React.FC<EventHeroProps> = ({ event, showBreadcrumb = false }) => {
  return (
    <section className="relative w-full bg-[#f9f6f1] pt-24 md:pt-[112px] lg:pt-[112px]">
      {/* Hero Content Container */}
      <div className="relative w-full">
        {/* Text Content - Positioned above image on mobile, overlay on larger screens */}
        <div className="relative z-10 px-6 pb-6 md:absolute md:bottom-0 md:left-0 md:right-0 md:px-10 md:pb-10 lg:px-20 lg:pb-20">
          <div className="max-w-[700px] mx-auto text-center md:text-left md:mx-0">
            {/* Subtitle/Category */}
            <p className="font-['Manrope'] font-semibold text-[14px] leading-[21px] tracking-[-0.2px] text-[#a8382d] mb-2 uppercase">
              {event.subtitle}
            </p>

            {/* Title */}
            <h1 className="font-['Young_Serif'] text-[38px] leading-[45.6px] md:text-[48px] md:leading-[57.6px] lg:text-[56px] lg:leading-[67.2px] tracking-[-2px] text-[#222] md:text-white mb-4 md:mb-6">
              {event.title}
            </h1>

            {/* Description */}
            <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545] md:text-[#f6f6f6] mb-6">
              {event.description}
            </p>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="relative w-full h-[490px] md:h-[600px] lg:h-[600px] overflow-hidden">
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
          {/* Mobile: Top to bottom gradient */}
          {/* Tablet/Desktop: Bottom to top gradient for text overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#222] to-100% md:bg-gradient-to-t md:from-[#222] md:from-0% md:via-[rgba(34,34,34,0.6)] md:via-50% md:to-transparent md:to-100%" />
        </div>
      </div>
    </section>
  );
};
