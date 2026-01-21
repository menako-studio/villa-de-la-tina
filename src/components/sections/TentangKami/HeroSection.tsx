import React from 'react';
import Image from 'next/image';
import { TYPOGRAPHY, LAYOUTS } from './constants';

/**
 * Hero Section for Tentang Kami page
 * Displays the main heading and hero image
 */
export function HeroSection() {
  return (
    <section className="bg-[#f9f6f1] flex flex-col items-start justify-center overflow-hidden pb-6 pt-52 px-6 md:pb-24 md:pt-52 lg:pb-6 lg:pt-52">
      <div className={`${LAYOUTS.centerContent} md:gap-6 md:pb-10 md:px-10 lg:px-28 ${LAYOUTS.maxWidth}`}>
        <div className="flex flex-col items-center justify-center w-full gap-2 md:max-w-3xl">
          <p className={TYPOGRAPHY.label}>TENTANG VILLA DE LA TINA</p>
          <h1 className={TYPOGRAPHY.h1}>A Place Shaped<br />by Care</h1>
        </div>
        <p className={`${TYPOGRAPHY.bodyLarge} w-full md:max-w-3xl`}>
          Villa De La Tina lahir dari keyakinan sederhana, bahwa ruang yang tenang dapat mempertemukan orang, membuka percakapan, dan menumbuhkan makna yang bertahan lama.
        </p>
      </div>
      <div className="h-[490px] md:h-[600px] overflow-hidden relative w-full">
        <div className="absolute inset-0 w-full h-full">
          <video
            className="object-cover w-full h-full"
            src="/videos/aerial-villa.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/images/tentang-kami/hero-tentang-kami.webp"
          >
            Maaf, browser Anda tidak mendukung video.
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#222] opacity-50" />
      </div>
    </section>
  );
}
