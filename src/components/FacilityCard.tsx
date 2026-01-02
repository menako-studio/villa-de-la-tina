import React from 'react';
import Image from 'next/image';

interface FacilityCardProps {
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  imageHeight?: string;
  containerWidth?: string;
  marginLeft?: string;
}

export default function FacilityCard({ 
  image, 
  alt, 
  category, 
  title, 
  description, 
  imageHeight = 'h-[300px] lg:h-[400px]',
  containerWidth = 'w-full',
  marginLeft = ''
}: FacilityCardProps) {
  return (
    <div className={`flex flex-col gap-6 lg:gap-10 ${containerWidth} ${marginLeft}`}>
      <div className={`${imageHeight} overflow-hidden relative`}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 lg:gap-6">
        <div className="flex flex-col gap-2">
          <p className="font-['Manrope'] font-medium text-[16px] leading-[24px] text-black">{category}</p>
          <h3 className="font-['Young_Serif'] font-medium text-[20px] leading-[30px] lg:text-[24px] lg:leading-[36px] tracking-[-0.4px] text-[#d95143]">
            {title}
          </h3>
        </div>
        <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545]">
          {description}
        </p>
      </div>
    </div>
  );
}
