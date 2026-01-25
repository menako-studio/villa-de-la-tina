import React from 'react';

interface InfoBadgeProps {
  icon: 'location' | 'calendar';
  label: string;
}

const icons = {
  location: (
    <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path 
        d="M16 2C11.0294 2 7 6.02944 7 11C7 17.5 16 30 16 30C16 30 25 17.5 25 11C25 6.02944 20.9706 2 16 2ZM16 14.5C14.067 14.5 12.5 12.933 12.5 11C12.5 9.067 14.067 7.5 16 7.5C17.933 7.5 19.5 9.067 19.5 11C19.5 12.933 17.933 14.5 16 14.5Z" 
        fill="white"
      />
    </svg>
  ),
  calendar: (
    <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path 
        d="M24 4H8C6.4 4 5 5.4 5 7V27C5 28.6 6.4 30 8 30H24C25.6 30 27 28.6 27 27V7C27 5.4 25.6 4 24 4Z" 
        stroke="white" 
        strokeWidth="2"
      />
      <path d="M11 2V6M21 2V6M5 10H27" stroke="white" strokeWidth="2"/>
    </svg>
  )
};

export const InfoBadge: React.FC<InfoBadgeProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-2 group">
      <div className="transform transition-transform duration-300 group-hover:scale-110">
        {icons[icon]}
      </div>
      <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] tracking-[-0.5px] text-[#d1d1d1] transition-colors duration-300 group-hover:text-white">
        {label}
      </p>
    </div>
  );
};
