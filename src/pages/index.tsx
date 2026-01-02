import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Facilities from '@/components/Facilities';
import Packages from '@/components/Packages';
import Gallery from '@/components/Gallery';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

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
        <Navbar />
        <Hero />
        <Intro />
        <Facilities />
        <Packages />
        <Gallery />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
