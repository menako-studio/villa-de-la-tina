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
        <title>Villa De La Tina - A Private Retreat in the Heart of Nature</title>
        <meta 
          name="description" 
          content="Villa De La Tina adalah ruang tinggal yang tenang dan intim, dikelilingi lanskap alami Kuningan. Dirancang untuk mereka yang menghargai ketenangan, ruang, dan waktu yang berjalan lebih pelan." 
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
