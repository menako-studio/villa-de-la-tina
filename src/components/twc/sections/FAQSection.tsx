import React, { useState } from 'react';
import { faqData } from '@/lib/data/twc-data';
import { FAQItem } from '../FAQItem';

/**
 * FAQ section with accordion
 */
export const FAQSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f9f6f1] flex flex-col items-center overflow-hidden py-10 md:py-10 lg:py-20 px-6 md:px-10 lg:px-20">
      <div className="flex flex-col items-center w-full max-w-[800px] gap-10 md:gap-10 lg:gap-10">
        <h2 className="font-['Young_Serif'] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-[#222] text-[28px] md:text-[36px] lg:text-[40px] text-center tracking-[-1px] w-full">
          FAQ
        </h2>
        <div className="flex flex-col items-center w-full gap-6">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openFaqIndex === index}
              onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
