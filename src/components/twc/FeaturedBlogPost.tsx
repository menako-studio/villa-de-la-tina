import React from 'react';
import Image from 'next/image';
import { BlogPost } from '@/types/twc';

interface FeaturedBlogPostProps {
  post: BlogPost;
}

/**
 * FeaturedBlogPost Component
 * 
 * Displays the featured blog post with hero image and overlay text
 */
const FeaturedBlogPost: React.FC<FeaturedBlogPostProps> = ({ post }) => {
  return (
    <div className="flex flex-col gap-[16px] md:gap-[24px] w-full items-center">
      {/* Headline Image */}
      <div className="relative w-full max-w-[342px] md:max-w-[730px] lg:max-w-[1040px] h-[458px] md:h-[458px] lg:h-[558px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Headline Text Overlay */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#f9f6f1] p-[24px] md:p-[40px] lg:p-[40px] w-[310px] md:w-[650px] lg:w-[652px] flex flex-col gap-[16px] items-center">
          <h2 className="font-['Manrope'] font-medium leading-[38.4px] md:leading-[38.4px] lg:leading-[38.4px] text-[#222] text-[24px] md:text-[30px] lg:text-[32px] tracking-[-0.8px] text-center w-full">
            {post.title}
          </h2>
          <div className="flex items-center gap-[16px] justify-center flex-wrap">
            {/* Date */}
            <div className="flex items-center gap-[6px]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z" stroke="#454545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 3V7M10 3V7M5 11H27" stroke="#454545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-['Manrope'] font-semibold text-[14px] leading-[21px] tracking-[-0.2px] text-[#454545]">
                {post.date}
              </span>
            </div>
            
            {/* Author */}
            <div className="flex items-center gap-[6px]">
              <div className="w-[24px] h-[24px] rounded-full bg-gray-300 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500" />
              </div>
              <span className="font-['Manrope'] font-semibold text-[14px] leading-[21px] tracking-[-0.2px] text-[#454545]">
                By {post.author}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogPost;
