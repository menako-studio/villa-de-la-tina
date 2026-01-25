import React from 'react';
import { FAQItem as FAQItemType } from '@/types/twc';

interface FAQItemProps {
  faq: FAQItemType;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * FAQ accordion item component
 */
export const FAQItem: React.FC<FAQItemProps> = ({ faq, index, isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`border-[#ebe4d4] ${index === 0 ? 'border-t border-b' : 'border-b'} flex flex-col gap-5 items-start ${index === 0 ? 'py-6' : 'pb-6'} w-full text-left transition-all`}
    >
      <div className="flex items-start w-full gap-8 md:gap-20">
        <p className="flex-1 font-['Young_Serif'] leading-[30px] md:leading-[33px] lg:leading-[36px] text-[#a8382d] text-xl md:text-[22px] lg:text-2xl tracking-[-0.4px]">
          {faq.question}
        </p>
        <div className="relative overflow-hidden shrink-0 size-10">
          <div className={`absolute flex h-6 items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
            <div className="rotate-90">
              <div className="bg-[#a8382d] h-0.5 w-6" />
            </div>
          </div>
          <div className="absolute bg-[#a8382d] h-0.5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6" />
        </div>
      </div>
      {isOpen && (
        <div className="font-normal leading-[30px] text-[#454545] text-lg md:text-xl tracking-[-0.4px] pr-12 md:pr-20 animate-fadeIn">
          {faq.answer}
        </div>
      )}
    </button>
  );
};
