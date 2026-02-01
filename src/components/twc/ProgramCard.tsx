import React from 'react';
import Image from 'next/image';
import { ProgramCard as ProgramCardType } from '@/types/twc';
import { Button } from './Button';

interface ProgramCardProps {
  card: ProgramCardType;
}

/**
 * Program card component with consistent button positioning
 */
export const ProgramCard: React.FC<ProgramCardProps> = ({ card }) => {
  return (
    <div className="flex flex-col w-full lg:w-[336px] lg:h-[510px] p-4 overflow-hidden bg-white shadow-sm rounded-xl hover:shadow-xl transition-shadow duration-300">
      <div className="h-[250px] overflow-hidden relative rounded-lg w-full">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col items-start justify-between flex-1 w-full gap-4 mt-4">
        <div className="flex flex-col items-start w-full gap-4">
          <h3 className="font-semibold leading-[27px] text-[#222] text-lg tracking-[-0.4px] w-full">
            {card.title}
          </h3>
          <p className="font-normal leading-6 text-[#454545] text-base tracking-[-0.5px] w-full">
            {card.description}
          </p>
        </div>
        <div className="w-full mt-auto">
          <Button variant="primary" className="w-full">
            Segera Hadir
          </Button>
        </div>
      </div>
    </div>
  );
};
