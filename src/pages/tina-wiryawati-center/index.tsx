import React from 'react';
import Head from 'next/head';
import {
  HeroSection,
  IntroSection,
  ProgramSection,
  BlogSection,
  GallerySection,
  BridgingSection,
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
        <title>Tina Wiryawati Center – Pusat Kegiatan & Pembelajaran Masyarakat Kuningan</title>
        <meta name="description" content="Tina Wiryawati Center (TWC) adalah pusat kegiatan dan pembelajaran masyarakat di Kuningan. Program pelatihan UMKM, workshop kewirausahaan, dan pemberdayaan perempuan." />
        <meta name="keywords" content="tina wiryawati center, pelatihan umkm kuningan, workshop kewirausahaan, pemberdayaan perempuan, komunitas kuningan, program sosial" />
        <meta name="author" content="Villa De La Tina" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://villadelatina.com/tina-wiryawati-center" />
        <meta property="og:title" content="Tina Wiryawati Center – Pusat Kegiatan & Pembelajaran" />
        <meta property="og:description" content="Pusat kegiatan dan pembelajaran masyarakat dengan program pelatihan UMKM, workshop, dan pemberdayaan di Kuningan." />
        <meta property="og:image" content="https://villadelatina.com/images/twc-og.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://villadelatina.com/tina-wiryawati-center" />
        <meta property="twitter:title" content="Tina Wiryawati Center – Pusat Kegiatan & Pembelajaran" />
        <meta property="twitter:description" content="Pusat kegiatan dan pembelajaran masyarakat dengan program pelatihan UMKM dan pemberdayaan di Kuningan." />
        <meta property="twitter:image" content="https://villadelatina.com/images/twc-og.jpg" />
        
        <link rel="canonical" href="https://villadelatina.com/tina-wiryawati-center" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Tina Wiryawati Center",
              "description": "Pusat kegiatan dan pembelajaran masyarakat dengan fokus pada pemberdayaan UMKM dan perempuan",
              "url": "https://villadelatina.com/tina-wiryawati-center",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Mulya Asih - Puncak",
                "addressLocality": "Kuningan",
                "addressRegion": "Jawa Barat",
                "addressCountry": "ID"
              },
              "offers": {
                "@type": "Offer",
                "category": "Educational Programs",
                "description": "Program pelatihan UMKM, workshop kewirausahaan, dan pemberdayaan masyarakat"
              }
            })
          }}
        />
      </Head>

      <HeroSection />
      <IntroSection />
      <ProgramSection />
      <BlogSection />
      <GallerySection />
      <BridgingSection />
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
