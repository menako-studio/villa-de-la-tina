import React from 'react';
import Head from 'next/head';
import { 
  Hero, 
  Intro, 
  Facilities, 
  Packages, 
  Gallery, 
  FinalCTA 
} from '@/components';

/**
 * Home Page - Landing Page
 * 
 * Navbar and Footer are automatically provided by RootLayout in _app.tsx
 * This page only needs to render the content sections.
 * 
 * Best Practices Applied:
 * - No duplicate Navbar/Footer management
 * - Clean separation of concerns
 * - Focused on page-specific content
 */
export default function Home() {

  return (
    <>
      <Head>
        <title>Villa De La Tina – Penginapan & Villa Healing Terbaik di Kuningan</title>
        <meta 
          name="description" 
          content="Cari villa di Kuningan dengan kolam renang privat dan suasana asri? Villa De La Tina ideal untuk retreat, gathering, workshop, dan liburan keluarga. Booking sekarang!" 
        />
        <meta name="keywords" content="villa kuningan, penginapan kuningan, villa healing, villa gathering, retreat villa, villa kolam renang, villa de la tina, villa jawa barat" />
        <meta name="author" content="Villa De La Tina" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://villadelatina.com/" />
        <meta property="og:title" content="Villa De La Tina – Penginapan & Villa Healing Terbaik di Kuningan" />
        <meta property="og:description" content="Cari villa di Kuningan dengan kolam renang privat dan suasana asri? Villa De La Tina ideal untuk retreat, gathering, workshop, dan liburan keluarga." />
        <meta property="og:image" content="https://villadelatina.com/images/villa-og.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://villadelatina.com/" />
        <meta property="twitter:title" content="Villa De La Tina – Penginapan & Villa Healing Terbaik di Kuningan" />
        <meta property="twitter:description" content="Villa healing terbaik di Kuningan dengan kolam renang privat dan suasana asri." />
        <meta property="twitter:image" content="https://villadelatina.com/images/villa-og.jpg" />
        
        <link rel="canonical" href="https://villadelatina.com/" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Villa De La Tina",
              "description": "Villa healing terbaik di Kuningan dengan kolam renang privat, ideal untuk retreat, gathering, workshop, dan liburan keluarga",
              "url": "https://villadelatina.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Mulya Asih - Puncak",
                "addressLocality": "Kuningan",
                "addressRegion": "Jawa Barat",
                "addressCountry": "ID"
              },
              "image": "https://villadelatina.com/images/villa-og.jpg",
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Kolam Renang Privat" },
                { "@type": "LocationFeatureSpecification", "name": "View Pegunungan" },
                { "@type": "LocationFeatureSpecification", "name": "Ruang Meeting" },
                { "@type": "LocationFeatureSpecification", "name": "Taman Luas" }
              ]
            })
          }}
        />
      </Head>

      <main className="bg-[#f9f6f1] min-h-screen">
        <Hero />
        <Intro />
        <Facilities />
        <Packages />
        <Gallery />
        <FinalCTA />
      </main>
    </>
  );
}
