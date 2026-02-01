import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import RootLayout from '@/layouts/RootLayout';
import { blogCategories } from '@/lib/data/twc-data';

/**
 * Blog Page - Tina Wiryawati Center
 * 
 * Halaman blog lengkap dengan semua artikel dari TWC
 * Mengikuti desain dari Figma untuk desktop/tablet/mobile
 */
const BlogPage: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);

  // Placeholder blog data
  const placeholderBlog = {
    id: '1',
    title: 'Flavours from Around the Globe: Culinary Adventures',
    category: 'Pelatihan',
    author: 'Melo Gomes',
    date: '14 Jun, 2024',
    image: '/images/event-venue/hero.jpg',
    excerpt: 'Eksplorasi cita rasa dari berbagai belahan dunia dalam petualangan kuliner yang menakjubkan.'
  };

  const allBlogs = Array(11).fill(placeholderBlog);

  return (
    <RootLayout>
      <Head>
        <title>Jejak Aktivitas - Tina Wiryawati Center | Villa de La Tina</title>
        <meta name="description" content="Catatan kegiatan, pertemuan, dan proses yang dijalani bersama masyarakat yang dirangkum sebagai bagian dari perjalanan yang terus bertumbuh." />
      </Head>

      <main className="bg-[#f9f6f1] w-full">
        {/* Hero Section with Featured Blog */}
        <section className="flex flex-col items-center px-[24px] pt-[208px] pb-[40px] md:px-[40px] md:pt-[208px] md:pb-[40px] lg:px-[80px] lg:pt-[208px] lg:pb-[80px]">
          <div className="flex flex-col items-center text-center w-full max-w-[1040px] gap-[40px]">
            {/* Title & Description */}
            <div className="flex flex-col items-center gap-[40px] w-full">
              <h1 className="font-['Young_Serif'] font-semibold leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-black text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px] w-full">
                Jejak Aktivitas
              </h1>
              <p className="font-['Manrope'] font-normal leading-6 md:leading-[27px] lg:leading-[30px] text-[#454545] text-base md:text-lg lg:text-xl tracking-[-0.4px] w-full max-w-[700px]">
                Catatan kegiatan, pertemuan, dan proses yang dijalani bersama masyarakat yang dirangkum sebagai bagian dari perjalanan yang terus bertumbuh.
              </p>
            </div>

            {/* Featured Blog Post */}
            <div className="flex flex-col gap-[16px] md:gap-[24px] w-full items-center">
              {/* Headline Image */}
              <div className="relative w-full max-w-[342px] md:max-w-[730px] lg:max-w-[1040px] h-[458px] md:h-[458px] lg:h-[558px] overflow-hidden">
                <Image
                  src={placeholderBlog.image}
                  alt={placeholderBlog.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Headline Text Overlay */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#f9f6f1] p-[24px] md:p-[40px] lg:p-[40px] w-[310px] md:w-[650px] lg:w-[652px] flex flex-col gap-[16px] items-center">
                  <h2 className="font-['Manrope'] font-medium leading-[38.4px] md:leading-[38.4px] lg:leading-[38.4px] text-[#222] text-[24px] md:text-[30px] lg:text-[32px] tracking-[-0.8px] text-center w-full">
                    {placeholderBlog.title}
                  </h2>
                  <div className="flex items-center gap-[16px] justify-center flex-wrap">
                    <div className="flex items-center gap-[6px]">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z" stroke="#454545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 3V7M10 3V7M5 11H27" stroke="#454545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-['Manrope'] font-semibold text-[14px] leading-[21px] tracking-[-0.2px] text-[#454545]">
                        {placeholderBlog.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-[6px]">
                      <div className="w-[24px] h-[24px] rounded-full bg-gray-300 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500" />
                      </div>
                      <span className="font-['Manrope'] font-semibold text-[14px] leading-[21px] tracking-[-0.2px] text-[#454545]">
                        By {placeholderBlog.author}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Featured Info (Desktop/Tablet Only) - Hidden on Mobile */}
              <div className="hidden md:flex gap-[24px] items-start w-full max-w-[730px] lg:max-w-[1040px]">
                {[1, 2, 3].slice(0, window.innerWidth >= 1024 ? 3 : 2).map((_, idx) => (
                  <div key={idx} className="flex gap-[16px] items-center flex-1">
                    <div className="w-[90px] h-[90px] relative overflow-hidden shrink-0">
                      <Image
                        src={placeholderBlog.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="flex flex-col gap-[8px] flex-1">
                      <h3 className="font-['Manrope'] font-medium text-[16px] leading-[24px] tracking-[-0.5px] text-[#222] line-clamp-2">
                        {placeholderBlog.title}
                      </h3>
                      <span className="font-['Manrope'] font-medium text-[14px] leading-[21px] tracking-[-0.2px] text-[#454545]">
                        {placeholderBlog.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Featured Info */}
              <div className="flex md:hidden flex-col gap-[16px] w-full">
                {[1, 2].map((_, idx) => (
                  <div key={idx} className="flex gap-[16px] items-center w-full">
                    <div className="w-[90px] h-[90px] relative overflow-hidden shrink-0">
                      <Image
                        src={placeholderBlog.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="flex flex-col gap-[8px] flex-1">
                      <h3 className="font-['Manrope'] font-medium text-[16px] leading-[24px] tracking-[-0.5px] text-[#222] line-clamp-2">
                        {placeholderBlog.title}
                      </h3>
                      <span className="font-['Manrope'] font-medium text-[14px] leading-[21px] tracking-[-0.2px] text-[#454545]">
                        {placeholderBlog.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex gap-[8px] md:gap-[16px] lg:gap-[16px] items-center w-full max-w-[342px] md:max-w-[730px] lg:max-w-[1040px] overflow-x-auto pb-2">
              {['Semua', ...blogCategories].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`border rounded-[50px] px-[14px] md:px-[24px] lg:px-[24px] py-[4px] md:py-[8px] lg:py-[8px] whitespace-nowrap font-['Manrope'] font-medium text-[14px] md:text-[18px] lg:text-[18px] leading-[21px] md:leading-[27px] lg:leading-[27px] tracking-[-0.2px] md:tracking-[-0.4px] lg:tracking-[-0.4px] transition-all duration-300 shrink-0 ${
                    selectedCategory === category
                      ? 'border-[#a8382d] bg-[#a8382d] text-white'
                      : 'border-[#d1d1d1] text-[#222] md:text-[#0d0d0d] lg:text-[#0d0d0d] hover:border-[#a8382d]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="flex flex-col items-center px-0 md:px-[40px] lg:px-[80px] pb-[40px] md:pb-[40px] lg:pb-[80px]">
          <div className="flex flex-col items-center w-full max-w-[1040px] gap-[40px]">
            {/* Blog Grid - Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full px-[24px] md:px-0">
              {allBlogs.map((blog, idx) => (
                <div key={idx} className="flex flex-col gap-[16px] w-full">
                  {/* Badge */}
                  <div className="inline-flex items-center justify-center px-[14px] py-[4px] border border-[#d1d1d1] rounded-[4px] self-start">
                    <span className="font-['Manrope'] font-medium text-[14px] leading-[21px] tracking-[-0.2px] text-[#222]">
                      {blog.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Manrope'] font-medium text-[20px] leading-[30px] tracking-[-0.4px] text-[#222] line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-[8px] md:gap-[16px] lg:gap-[16px]">
                    <div className="flex items-center gap-[6px]">
                      <div className="w-[24px] h-[24px] rounded-full bg-gray-300 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500" />
                      </div>
                      <span className="font-['Manrope'] font-medium text-[14px] leading-[21px] tracking-[-0.2px] text-[#3d3d3d]">
                        By {blog.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-[6px]">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z" stroke="#3d3d3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 3V7M10 3V7M5 11H27" stroke="#3d3d3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-['Manrope'] font-medium text-[14px] leading-[21px] tracking-[-0.2px] text-[#3d3d3d]">
                        {blog.date}
                      </span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-[256px] overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center gap-[8px]">
              {/* Previous Button */}
              <button 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                className={`w-[32px] h-[32px] border border-[#d1d1d1] bg-white flex items-center justify-center ${currentPage === 1 ? 'opacity-24' : 'hover:border-[#8c3128]'}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Page Numbers */}
              {[1, 2, '...', 9, 10].map((page, idx) => (
                <button
                  key={idx}
                  onClick={() => typeof page === 'number' && setCurrentPage(page)}
                  disabled={typeof page !== 'number'}
                  className={`w-[32px] h-[32px] border flex items-center justify-center font-['Manrope'] font-semibold text-[14px] leading-[21px] tracking-[-0.2px] ${
                    page === currentPage
                      ? 'bg-[#fdf4f3] border-[#8c3128] text-[#8c3128]'
                      : 'bg-white border-[#d1d1d1] text-[#222] hover:border-[#8c3128]'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button 
                onClick={() => setCurrentPage(p => Math.min(10, p + 1))}
                disabled={currentPage === 10}
                className="w-[32px] h-[32px] border border-[#d1d1d1] bg-white flex items-center justify-center hover:border-[#8c3128]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>
    </RootLayout>
  );
};

export default BlogPage;
