/**
 * Shared constants for Tentang Kami page sections
 */

export const TYPOGRAPHY = {
  label: 'text-[#a8382d] text-xs md:text-sm font-semibold tracking-tight uppercase',
  h1: "font-['Young_Serif'] text-[#222] text-[38px] md:text-5xl lg:text-[56px] leading-tight md:leading-[1.2] lg:leading-[1.2] tracking-tight",
  h2: 'text-black text-2xl md:text-[30px] lg:text-[32px] font-semibold leading-tight tracking-tight',
  h2Dark: "font-['Young_Serif'] text-white text-[28px] md:text-4xl lg:text-[40px] leading-tight tracking-tight",
  h2Center: "font-['Young_Serif'] text-black text-[28px] md:text-4xl lg:text-[40px] text-center tracking-tight",
  body: 'text-[#454545] text-base md:text-lg leading-relaxed',
  bodyLarge: 'text-[#454545] text-base md:text-lg lg:text-xl leading-relaxed',
  bodyLight: 'text-[#d1d1d1] text-base md:text-lg leading-relaxed',
} as const;

export const LAYOUTS = {
  sectionContainer: 'flex flex-col items-start px-6 py-10 md:p-10 lg:p-20',
  maxWidth: 'max-w-7xl mx-auto',
  centerContent: 'flex flex-col items-center w-full gap-4 px-6 pb-6 mx-auto text-center',
  halfWidth: 'w-full md:w-[330px] lg:w-[536px]',
  twoThirdsWidth: 'md:w-[384px] lg:w-[484px]',
} as const;
