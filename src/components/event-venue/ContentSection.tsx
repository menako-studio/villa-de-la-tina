import React from 'react';
import Image from 'next/image';
import { ContentSection as ContentSectionType } from '@/types/event-venue';

interface ContentSectionProps {
  content: ContentSectionType;
  layout: 'full' | 'split';
  index: number;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ content, layout, index }) => {
  if (layout === 'full') {
    return (
      <section className="relative w-full bg-[#a8382d] overflow-hidden">
        <div className="bg-[#f9f6f1] pt-10 md:pt-10 lg:pt-20">
          {/* Text Container */}
          <div className="px-6 mb-10 md:px-10 lg:px-20">
            <h2 className="font-['Young_Serif'] text-[28px] leading-[33.6px] md:text-[36px] md:leading-[43.2px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-[#222] mb-10">
              {content.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < content.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>

            <div className="max-w-full space-y-4">
              {content.paragraphs.map((paragraph, i) => (
                paragraph.includes('<ul>') ? (
                  <div
                    key={i}
                    className="font-['Manrope'] font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545] [&_ul]:list-none [&_ul]:space-y-2 [&_li]:pl-0 [&_li]:relative [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li:before]:content-[''] [&_li:before]:w-1.5 [&_li:before]:h-1.5 [&_li:before]:rounded-full [&_li:before]:bg-[#454545] [&_li:before]:mt-2 [&_li:before]:flex-shrink-0"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ) : (
                  <p
                    key={i}
                    className="font-['Manrope'] font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545]"
                  >
                    {paragraph}
                  </p>
                )
              ))}
            </div>
          </div>

          {/* Full Width Image with zoom effect */}
          <div className="relative w-full h-[550px] overflow-hidden group">
            <Image
              src={content.image}
              alt={content.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              sizes="100vw"
            />
          </div>
        </div>
      </section>
    );
  }

  // Split layout for tablet and desktop
  return (
    <>
      {/* Desktop/Tablet Split View */}
      <section className="hidden md:flex w-full bg-[#f9f6f1]">
        {/* Text Container - Left Half */}
        <div className="flex flex-col justify-start w-1/2 p-10 lg:p-20">
          <h2 className="font-['Young_Serif'] text-[36px] leading-[43.2px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-[#222] mb-10">
            {content.title}
          </h2>

          <div className="space-y-4">
            {content.paragraphs.map((paragraph, i) => (
              paragraph.includes('<ul>') ? (
                <div
                  key={i}
                  className="font-['Manrope'] font-normal text-[18px] leading-[27px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545] [&_ul]:list-none [&_ul]:space-y-2 [&_li]:pl-0 [&_li]:relative [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li:before]:content-[''] [&_li:before]:w-1.5 [&_li:before]:h-1.5 [&_li:before]:rounded-full [&_li:before]:bg-[#454545] [&_li:before]:mt-2 [&_li:before]:flex-shrink-0"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ) : (
                <p
                  key={i}
                  className="font-['Manrope'] font-normal text-[18px] leading-[27px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545]"
                >
                  {paragraph}
                </p>
              )
            ))}
          </div>
        </div>

        {/* Image Container - Right Half with zoom effect */}
        <div className="relative w-1/2 h-[550px] overflow-hidden group">
          <Image
            src={content.image}
            alt={content.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            sizes="50vw"
          />
        </div>
      </section>

      {/* Mobile Full Width View */}
      <section className="md:hidden relative w-full bg-[#a8382d] overflow-hidden">
        <div className="bg-[#f9f6f1] pt-10">
          {/* Text Container */}
          <div className="px-6 mb-10">
            <h2 className="font-['Young_Serif'] font-semibold text-[28px] leading-[33.6px] tracking-[-1px] text-[#222] mb-10">
              {content.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < content.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>

            <div className="space-y-4">
              {content.paragraphs.map((paragraph, i) => (
                paragraph.includes('<ul>') ? (
                  <div
                    key={i}
                    className="font-['Manrope'] font-normal text-[16px] leading-[24px] tracking-[-0.4px] text-[#454545] [&_ul]:list-none [&_ul]:space-y-2 [&_li]:pl-0 [&_li]:relative [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li:before]:content-[''] [&_li:before]:w-1.5 [&_li:before]:h-1.5 [&_li:before]:rounded-full [&_li:before]:bg-[#454545] [&_li:before]:mt-2 [&_li:before]:flex-shrink-0"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ) : (
                  <p
                    key={i}
                    className="font-['Manrope'] font-normal text-[16px] leading-[24px] tracking-[-0.4px] text-[#454545]"
                  >
                    {paragraph}
                  </p>
                )
              ))}
            </div>
          </div>

          {/* Full Width Image with zoom effect */}
          <div className="relative w-full h-[550px] overflow-hidden group">
            <Image
              src={content.image}
              alt={content.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              sizes="100vw"
            />
          </div>
        </div>
      </section>
    </>
  );
};
