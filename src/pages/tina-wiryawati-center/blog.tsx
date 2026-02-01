import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import RootLayout from '@/layouts/RootLayout';

/**
 * Blog Page - Tina Wiryawati Center
 * 
 * Halaman blog lengkap dengan semua artikel dari TWC
 * Mengikuti desain dari Figma untuk desktop/tablet/mobile
 */
const BlogPage: NextPage = () => {
  return (
    <RootLayout>
      <Head>
        <title>Jejak Aktivitas - Tina Wiryawati Center | Villa de La Tina</title>
        <meta name="description" content="Catatan kegiatan, pertemuan, dan proses yang dijalani bersama masyarakat yang dirangkum sebagai bagian dari perjalanan yang terus bertumbuh." />
      </Head>

      <main className="bg-[#f9f6f1] w-full">
        {/* Hero Section */}
        <section className="flex flex-col items-center px-[24px] py-[40px] md:px-[40px] md:py-[40px] lg:px-[80px] lg:py-[80px] pt-[208px]">
          <div className="flex flex-col items-center text-center w-full max-w-[700px] gap-[40px]">
            <h1 className="font-['Young_Serif'] font-semibold leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-black text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px] w-full">
              Jejak Aktivitas
            </h1>
            <p className="font-['Manrope'] font-normal leading-6 md:leading-[27px] lg:leading-[30px] text-[#454545] text-base md:text-lg lg:text-xl tracking-[-0.4px] w-full">
              Catatan kegiatan, pertemuan, dan proses yang dijalani bersama masyarakat yang dirangkum sebagai bagian dari perjalanan yang terus bertumbuh.
            </p>
          </div>
        </section>

        {/* Coming Soon Message */}
        <section className="flex flex-col items-center justify-center px-[24px] py-[80px] md:px-[40px] lg:px-[80px]">
          <div className="flex flex-col items-center text-center gap-[24px] max-w-[600px]">
            <div className="w-[120px] h-[120px] rounded-full bg-[#fbe7e5] flex items-center justify-center">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path d="M32 16V32L40 40M56 32C56 45.2548 45.2548 56 32 56C18.7452 56 8 45.2548 8 32C8 18.7452 18.7452 8 32 8C45.2548 8 56 18.7452 56 32Z" stroke="#a8382d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="font-['Young_Serif'] font-semibold leading-[43.2px] text-[#222] text-[36px] tracking-[-1px]">
              Segera Hadir
            </h2>
            <p className="font-['Manrope'] font-normal leading-[27px] text-[#454545] text-lg tracking-[-0.4px]">
              Halaman blog sedang dalam tahap pengembangan. Kami akan segera membagikan cerita dan aktivitas dari Tina Wiryawati Center.
            </p>
          </div>
        </section>
      </main>
    </RootLayout>
  );
};

export default BlogPage;
