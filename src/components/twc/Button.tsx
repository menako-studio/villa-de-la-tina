import React from 'react';
import { ButtonProps } from '@/types/twc';

/**
 * Reusable Button component with multiple variants
 */
export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  href 
}) => {
  const baseStyles = 'flex gap-1.5 items-center justify-center px-4 py-2.5 rounded-lg transition-all duration-300 font-medium leading-[21px] text-sm tracking-[-0.2px]';
  const variants = {
    primary: 'bg-[#d95143] text-white hover:bg-[#c14539] hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'border-b-[1.5px] border-white text-white hover:opacity-80 rounded-none',
    outline: 'border border-[#d1d1d1] text-[#0d0d0d] hover:border-[#a8382d] hover:text-[#a8382d]'
  };

  const Element = href ? 'a' : 'button';
  
  return (
    <Element
      onClick={onClick}
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Element>
  );
};
