import React, { useState } from 'react';
import { blogCategories, blogPosts } from '@/lib/data/twc-data';
import { BlogCard } from '../BlogCard';

/**
 * Blog section with category filter
 */
export const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Pelatihan');
  const filteredBlogPosts = blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="bg-[#f9f6f1] flex flex-col items-center overflow-hidden py-10 md:py-10 lg:py-20 px-6 md:px-10 lg:px-20">
      <div className="flex flex-col items-center w-full max-w-[700px] lg:max-w-[1040px] gap-10 md:gap-10 lg:gap-10">
        <div className="flex flex-col items-start w-full gap-6 md:gap-10">
          <h2 className="font-['Young_Serif'] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-[#222] text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px] w-full">
            Jejak Aktivitas
          </h2>
          <p className="font-normal leading-6 md:leading-[27px] lg:leading-[30px] text-[#454545] text-base md:text-lg lg:text-xl tracking-[-0.4px] w-full max-w-[700px]">
            Catatan kegiatan, pertemuan, dan proses yang dijalani bersama masyarakat yang dirangkum sebagai bagian dari perjalanan yang terus bertumbuh.
          </p>
        </div>

        {/* Categories */}
        <div className="flex gap-[14px] items-center w-full overflow-x-auto pb-2">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`border rounded-[50px] px-[24px] py-[8px] whitespace-nowrap font-medium text-[18px] leading-[27px] tracking-[-0.4px] transition-all duration-300 ${
                selectedCategory === category
                  ? 'border-[#a8382d] bg-[#a8382d] text-white'
                  : 'border-[#d1d1d1] text-[#0d0d0d] hover:border-[#a8382d]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="flex flex-col gap-[24px] w-full">
          <div className="flex flex-col md:flex-row gap-[24px] w-full">
            {filteredBlogPosts.slice(0, 2).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-[24px] w-full">
            {filteredBlogPosts.slice(2, 5).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
