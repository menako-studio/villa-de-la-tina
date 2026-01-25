import React from 'react';
import Head from 'next/head';
import {
  HeroSection,
  IntroSection,
  ProgramSection,
  BlogSection,
  GallerySection,
  FAQSection,
  FinalCTASection
} from '@/components/twc';

/**
 * Tina Wiryawati Center Page - Production Ready
 * Refactored with clean architecture and best practices
 */

export default function TinaWiryawatiCenter() {

  return (
    <>
      <Head>
        <title>Tina Wiryawati Center - Villa De La Tina</title>
        <meta name="description" content="Tina Wiryawati Center adalah ruang kegiatan dan pembelajaran yang tumbuh dari kedekatan dengan masyarakat." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HeroSection />
      <IntroSection />
      <ProgramSection />
      <BlogSection />
      <GallerySection />
      <FAQSection />
      <FinalCTASection />

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
