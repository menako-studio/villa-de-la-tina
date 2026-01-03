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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
