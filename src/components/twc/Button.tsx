import React from 'react';
import { ButtonProps } from '@/types/twc';

/**
 * Reusable Button component with multiple variants
 * Note: All buttons are disabled (Segera Hadir state)
 */
export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  href 
}) => {
  const baseStyles = 'flex gap-1.5 items-center justify-center px-4 py-2.5 rounded-lg font-medium leading-[21px] text-sm tracking-[-0.2px] cursor-not-allowed opacity-60';
  const variants = {
    primary: 'bg-[#999999] text-white',
    secondary: 'border-b-[1.5px] border-white text-white rounded-none',
    outline: 'border border-[#999999] text-[#999999]'
  };

  const Element = href ? 'a' : 'button';
  
  return (
    <Element
      onClick={onClick}
      href={href}
      disabled={!href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Element>
  );
};
