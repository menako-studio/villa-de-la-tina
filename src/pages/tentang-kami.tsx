import React from 'react';
import Head from 'next/head';
import { FinalCTA } from '@/components';
import {
  HeroSection,
  UntoldStorySection,
  BrandNarrativeSection,
  TWCBridgingSection,
  FAQSection,
  faqItems,
} from '@/components/sections/TentangKami';

/**
 * Tentang Kami Page
 * 
 * Navbar and Footer are automatically provided by RootLayout in _app.tsx
 * This page is composed of modular section components for better maintainability.
 */

export default function TentangKami() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const handleFaqToggle = React.useCallback((index: number) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  return (
    <>
      <Head>
        <title>Tentang Kami – Villa De La Tina | Cerita, Visi, dan Perjalanan Kami</title>
        <meta 
          name="description" 
          content="Villa De La Tina lahir dari keyakinan sederhana bahwa ruang yang tenang dapat mempertemukan orang, membuka percakapan, dan menumbuhkan makna yang bertahan lama di Kuningan, Jawa Barat." 
        />
        <meta name="keywords" content="tentang villa de la tina, sejarah villa kuningan, visi misi, tina wiryawati, healing villa story" />
        <meta name="author" content="Villa De La Tina" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://villadelatina.com/tentang-kami" />
        <meta property="og:title" content="Tentang Kami – Villa De La Tina" />
        <meta property="og:description" content="Cerita perjalanan Villa De La Tina, dari keyakinan sederhana menjadi ruang yang mempertemukan orang di tengah ketenangan alam Kuningan." />
        <meta property="og:image" content="https://villadelatina.com/images/about-og.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://villadelatina.com/tentang-kami" />
        <meta property="twitter:title" content="Tentang Kami – Villa De La Tina" />
        <meta property="twitter:description" content="Cerita perjalanan Villa De La Tina di Kuningan, Jawa Barat." />
        <meta property="twitter:image" content="https://villadelatina.com/images/about-og.jpg" />
        
        <link rel="canonical" href="https://villadelatina.com/tentang-kami" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "Tentang Villa De La Tina",
              "description": "Cerita perjalanan dan visi Villa De La Tina sebagai ruang healing di Kuningan",
              "url": "https://villadelatina.com/tentang-kami",
              "mainEntity": {
                "@type": "Organization",
                "name": "Villa De La Tina",
                "foundingDate": "2020",
                "description": "Villa healing dan pusat kegiatan masyarakat di Kuningan, Jawa Barat"
              }
            })
          }}
        />
      </Head>

      <main className="bg-[#f9f6f1] min-h-screen">
        <HeroSection />
        <UntoldStorySection />
        <BrandNarrativeSection />
        <TWCBridgingSection />
        <FAQSection items={faqItems} openFaq={openFaq} onToggle={handleFaqToggle} />
        <FinalCTA />
      </main>
    </>
  );
}