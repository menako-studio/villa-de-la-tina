import React from 'react';
import Image from 'next/image';

interface CTACardProps {
  image: string;
  title: string;
  description?: string;
  buttonText: string;
}

export default function CTACard({ image, title, description, buttonText }: CTACardProps) {
  return (
    <div className="bg-[#a8382d] h-auto lg:h-[608px] flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-end p-6 lg:p-20 overflow-hidden relative gap-10 lg:gap-0">
      {/* Background Image */}
      <div className="relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 h-[342px] lg:h-[448px] w-full lg:w-[600px] overflow-hidden order-1 lg:order-none">
        <Image
          src={image}
          alt="CTA Background"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="w-full lg:w-[400px] flex flex-col gap-6 lg:gap-40 z-10 relative order-2 lg:order-none">
        <h3 className="font-['Young_Serif'] font-semibold text-[28px] leading-[33.6px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-white">
          {title}
        </h3>
        {description && (
          <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#f6f6f6]">
            {description}
          </p>
        )}
        <button className="border-b-[1.5px] border-white pb-3 text-white font-['Manrope'] font-medium text-[16px] leading-[24px] text-left hover:border-[#d95143] transition-colors w-fit">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
