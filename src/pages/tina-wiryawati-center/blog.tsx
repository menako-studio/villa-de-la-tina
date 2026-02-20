import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { blogCategories, blogPosts } from '@/lib/data/twc-data';
import { 
  FeaturedBlogPost, 
  CategoryFilter, 
  BlogCardItem, 
  PaginationControls 
} from '@/components/twc';

/**
 * Blog Page - Tina Wiryawati Center
 * 
 * Halaman blog lengkap dengan semua artikel dari TWC
 * Mengikuti desain dari Figma untuk desktop/tablet/mobile
 */
const BlogPage: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);

  // Featured post: pick the first post with size 'large', or fallback to first post
  const featuredPost = blogPosts.find(post => post.size === 'large') || blogPosts[0];

  // Filter posts by selected category (except 'Semua')
  const filteredPosts = selectedCategory === 'Semua'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  // Pagination logic
  const POSTS_PER_PAGE = 9;
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE, 
    currentPage * POSTS_PER_PAGE
  );

  // Handler for category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  // Handler for page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Head>
        <title>Jejak Aktivitas - Tina Wiryawati Center | Villa de La Tina</title>
        <meta name="description" content="Catatan kegiatan, pertemuan, dan proses yang dijalani bersama masyarakat yang dirangkum sebagai bagian dari perjalanan yang terus bertumbuh." />
        <meta name="keywords" content="blog tina wiryawati center, jejak aktivitas, kegiatan masyarakat kuningan, program twc, cerita pemberdayaan, umkm kuningan" />
        <meta name="author" content="Tina Wiryawati Center" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://villadelatina.com/tina-wiryawati-center/blog" />
        <meta property="og:title" content="Jejak Aktivitas - Tina Wiryawati Center" />
        <meta property="og:description" content="Catatan kegiatan, pertemuan, dan proses yang dijalani bersama masyarakat di Kuningan." />
        <meta property="og:image" content="https://villadelatina.com/images/twc-blog-og.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://villadelatina.com/tina-wiryawati-center/blog" />
        <meta property="twitter:title" content="Jejak Aktivitas - Tina Wiryawati Center" />
        <meta property="twitter:description" content="Catatan kegiatan, pertemuan, dan proses yang dijalani bersama masyarakat di Kuningan." />
        <meta property="twitter:image" content="https://villadelatina.com/images/twc-blog-og.jpg" />
        
        <link rel="canonical" href="https://villadelatina.com/tina-wiryawati-center/blog" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Jejak Aktivitas - Tina Wiryawati Center",
              "description": "Catatan kegiatan, pertemuan, dan proses yang dijalani bersama masyarakat yang dirangkum sebagai bagian dari perjalanan yang terus bertumbuh",
              "url": "https://villadelatina.com/tina-wiryawati-center/blog",
              "isPartOf": {
                "@type": "WebSite",
                "name": "Villa De La Tina",
                "url": "https://villadelatina.com"
              }
            })
          }}
        />
      </Head>

      <main className="bg-[#f9f6f1] w-full">
        {/* Hero Section with Featured Blog */}
        <section className="flex flex-col items-center px-[24px] pt-[208px] pb-[40px] md:px-[40px] md:pt-[208px] md:pb-[40px] lg:px-[80px] lg:pt-[208px] lg:pb-[80px]">
          <div className="flex flex-col items-center text-center w-full max-w-[1040px] gap-[40px]">
            {/* Title & Description */}
            <div className="flex flex-col items-center gap-[40px] w-full">
              <h1 className="font-['Young_Serif'] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-black text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px] w-full">
                Jejak Aktivitas
              </h1>
              <p className="font-['Manrope'] font-normal leading-6 md:leading-[27px] lg:leading-[30px] text-[#454545] text-base md:text-lg lg:text-xl tracking-[-0.4px] w-full max-w-[700px]">
                Catatan kegiatan, pertemuan, dan proses yang dijalani bersama masyarakat yang dirangkum sebagai bagian dari perjalanan yang terus bertumbuh.
              </p>
            </div>

            {/* Featured Blog Post */}
            {featuredPost && <FeaturedBlogPost post={featuredPost} />}

            {/* Category Filters */}
            <CategoryFilter
              categories={['Semua', ...blogCategories]}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="flex flex-col items-center px-0 md:px-[40px] lg:px-[80px] pb-[40px] md:pb-[40px] lg:pb-[80px]">
          <div className="flex flex-col items-center w-full max-w-[1040px] gap-[40px]">
            {/* Blog Grid - Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full px-[24px] md:px-0">
              {paginatedPosts.map((post) => (
                <BlogCardItem key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage;
