import React from 'react';
import Image from 'next/image';
import { BlogPost } from '@/types/twc';
import { Badge } from './Badge';

interface BlogCardProps {
  post: BlogPost;
}

/**
 * Blog card component with hover effects
 */
export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const sizeClasses = {
    large: 'w-full lg:w-[700px] h-[350px]',
    small: 'w-full md:w-[316px] h-[350px]',
    medium: 'w-full md:w-[336px] h-[350px]'
  };

  const handleClick = () => {
    if (post.url) {
      window.open(post.url, '_blank', 'noopener');
    }
  };

  return (
    <div
      className={`relative rounded-[10px] overflow-hidden group cursor-pointer ${sizeClasses[post.size]}`}
      onClick={post.url ? handleClick : undefined}
      role={post.url ? 'link' : undefined}
      tabIndex={post.url ? 0 : undefined}
      onKeyDown={post.url ? (e) => { if (e.key === 'Enter') handleClick(); } : undefined}
      aria-label={post.title}
    >
      <div className="absolute inset-0">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] group-hover:bg-[rgba(0,0,0,0.5)] transition-colors duration-300" />
      </div>
      
      <div className="relative flex flex-col items-start justify-between h-full p-[24px]">
        <Badge text={post.category} size="small" />
        
        <div className="flex flex-col gap-[10px] w-full">
          <h3 className="font-medium leading-[36px] text-white text-[24px] tracking-[-0.4px]">
            {post.title}
          </h3>
          
          <div className="flex gap-[16px] items-center">
            <div className="flex gap-[6px] items-center">
              <div className="w-[24px] h-[24px] rounded-full bg-[#d1d1d1] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#f3b4ae] to-[#d95143]" />
              </div>
              <p className="font-medium leading-[21px] text-white text-[14px] tracking-[-0.2px]">
                By {post.author}
              </p>
            </div>
            
            <div className="flex gap-[6px] items-center">
              <svg className="w-[32px] h-[32px]" viewBox="0 0 32 32" fill="none">
                <path d="M24 4H8C6.4 4 5 5.4 5 7V27C5 28.6 6.4 30 8 30H24C25.6 30 27 28.6 27 27V7C27 5.4 25.6 4 24 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 10H27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-medium leading-[21px] text-white text-[14px] tracking-[-0.2px]">
                {post.date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
