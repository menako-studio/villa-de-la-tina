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
        <title>Tentang Kami - Villa De La Tina</title>
        <meta 
          name="description" 
          content="Villa De La Tina lahir dari keyakinan sederhana, bahwa ruang yang tenang dapat mempertemukan orang, membuka percakapan, dan menumbuhkan makna yang bertahan lama." 
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