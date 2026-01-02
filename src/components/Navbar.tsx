import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6 py-4 lg:px-[60px] flex items-center justify-between">
        {/* Left Links - Hidden on mobile */}
        <div className="items-center hidden gap-6 lg:flex">
          <Link href="/penginapan" className="text-[#222] font-['Manrope'] font-medium text-[18px] hover:text-[#d95143] transition-colors">
            Penginapan
          </Link>
          <Link href="/event-venue" className="text-[#222] font-['Manrope'] font-medium text-[18px] hover:text-[#d95143] transition-colors">
            Event & Venue
          </Link>
        </div>
        
        {/* Logo */}
        <div className="text-center">
          <p className="font-['Manrope'] font-semibold text-[24px] leading-[36px] text-[#222]">
            Villa De La Tina
          </p>
          <p className="font-['Manrope'] font-medium text-[16px] leading-[24px] text-[#222]">
            Kuningan
          </p>
        </div>
        
        {/* Right Links - Hidden on mobile */}
        <div className="items-center hidden gap-6 lg:flex">
          <Link href="/twc" className="text-[#222] font-['Manrope'] font-medium text-[18px] hover:text-[#d95143] transition-colors">
            TWC
          </Link>
          <Link href="/about" className="text-[#222] font-['Manrope'] font-medium text-[18px] hover:text-[#d95143] transition-colors">
            Tentang Kami
          </Link>
        </div>

        {/* Menu Icon - Visible on mobile */}
        <button className="lg:hidden p-2.5 rounded" aria-label="Menu">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="5" y="8" width="22" height="2" fill="#222"/>
            <rect x="5" y="15" width="22" height="2" fill="#222"/>
            <rect x="5" y="22" width="22" height="2" fill="#222"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}
