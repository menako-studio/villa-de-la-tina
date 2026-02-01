import React from 'react';
import Image from 'next/image';
import { BlogPost } from '@/types/twc';

interface BlogCardItemProps {
  post: BlogPost;
}

/**
 * BlogCardItem Component
 * 
 * Individual blog card with image, category, title, and metadata
 */
const BlogCardItem: React.FC<BlogCardItemProps> = ({ post }) => {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-[16px] w-full hover:opacity-90 transition"
    >
      {/* Image */}
      <div className="relative w-full h-[256px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Badge */}
      <div className="inline-flex items-center justify-center px-[14px] py-[4px] border border-[#d1d1d1] rounded-[4px] self-start">
        <span className="font-['Manrope'] font-medium text-[14px] leading-[21px] tracking-[-0.2px] text-[#222]">
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-['Manrope'] font-medium text-[20px] leading-[30px] tracking-[-0.4px] text-[#222] line-clamp-2">
        {post.title}
      </h3>

      {/* Meta Info */}
      <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-[8px] md:gap-[16px] lg:gap-[16px]">
        {/* Author */}
        <div className="flex items-center gap-[6px]">
          <div className="w-[24px] h-[24px] rounded-full bg-gray-300 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500" />
          </div>
          <span className="font-['Manrope'] font-medium text-[14px] leading-[21px] tracking-[-0.2px] text-[#3d3d3d]">
            By {post.author}
          </span>
        </div>
        
        {/* Date */}
        <div className="flex items-center gap-[6px]">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z" stroke="#3d3d3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 3V7M10 3V7M5 11H27" stroke="#3d3d3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-['Manrope'] font-medium text-[14px] leading-[21px] tracking-[-0.2px] text-[#3d3d3d]">
            {post.date}
          </span>
        </div>
      </div>
    </a>
  );
};

export default BlogCardItem;
