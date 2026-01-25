import React from 'react';

/**
 * Intro section with mission statement
 */
export const IntroSection: React.FC = () => {
  return (
    <section className="bg-[#f9f6f1] flex flex-col items-center overflow-hidden pt-10 md:pt-20 lg:pt-40 pb-10 md:pb-20 lg:pb-40 px-6 md:px-10 lg:px-20">
      <div className="border-b border-[#ebe4d4] flex flex-col items-center pb-10 md:pb-20 lg:pb-40 w-full max-w-[700px] lg:max-w-[1040px]">
        <p className="font-['Young_Serif'] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-[#222] text-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px]">
          Menjadi ruang tempat orang belajar, berbagi, dan bertumbuh bersama, berangkat dari kebutuhan nyata, dijalani dengan kesadaran, dan diarahkan pada kebermanfaatan yang berkelanjutan.
        </p>
      </div>
    </section>
  );
};
