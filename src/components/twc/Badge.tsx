import React from 'react';
import { BadgeProps } from '@/types/twc';

/**
 * Badge component for category labels
 */
export const Badge: React.FC<BadgeProps> = ({ text, size = 'small' }) => {
  const sizeStyles = size === 'small' 
    ? 'px-[14px] py-[4px] text-[14px] leading-[21px]' 
    : 'px-[24px] py-[8px] text-[18px] leading-[27px]';
  
  return (
    <div className={`bg-white rounded-[500px] font-medium text-[#222] tracking-[-0.2px] ${sizeStyles}`}>
      {text}
    </div>
  );
};
