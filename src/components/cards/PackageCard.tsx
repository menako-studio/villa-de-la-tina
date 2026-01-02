import React from 'react';
import Image from 'next/image';

interface PackageCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  backgroundColor: string;
  reversed?: boolean;
}

export default function PackageCard({ 
  image, 
  alt, 
  title, 
  description, 
  backgroundColor,
  reversed = false 
}: PackageCardProps) {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className={`h-[342px] lg:h-[750px] w-full lg:w-[700px] relative overflow-hidden ${reversed ? 'lg:order-2' : ''}`}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      <div className={`${backgroundColor} w-full lg:w-[340px] p-6 lg:p-10 flex flex-col gap-6 lg:gap-40 justify-center ${reversed ? 'lg:order-1' : ''}`}>
        <h3 className="font-['Young_Serif'] font-medium text-[20px] leading-[30px] lg:text-[24px] lg:leading-[36px] tracking-[-0.4px] text-[#d95143]">
          {title}
        </h3>
        <div className="flex flex-col gap-6">
          <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545]">
            {description}
          </p>
          <button className="bg-[#d95143] px-4 py-2.5 text-white font-['Manrope'] font-medium text-[14px] leading-[21px] hover:bg-[#a8382d] transition-colors">
            Pelajari lebih lanjut
          </button>
        </div>
      </div>
    </div>
  );
}
