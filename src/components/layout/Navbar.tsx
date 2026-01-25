
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Transparent only on /event-venue and only when not scrolled
  const isEventVenue = router.pathname === '/';
  const navBg = isEventVenue && !isScrolled
    ? 'bg-transparent'
    : 'bg-[#f9f6f1]';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${isScrolled ? 'shadow-sm' : ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-6 lg:px-[60px] py-4 md:py-[16px] flex items-center justify-between">
        {/* Left Links - Visible on desktop only (1200px+) */}
        <div className="hidden lg:flex items-center gap-[24px]">
          <Link 
            href="/" 
            className="text-[#222] font-['Manrope'] font-medium text-[18px] leading-[27px] tracking-[-0.4px] hover:text-[#d95143] transition-colors"
          >
            Penginapan
          </Link>
          <Link 
            href="/event-venue" 
            className="text-[#222] font-['Manrope'] font-medium text-[18px] leading-[27px] tracking-[-0.4px] hover:text-[#d95143] transition-colors"
          >
            Event & Venue
          </Link>
        </div>
        {/* Logo - Centered on desktop, left-aligned on tablet/mobile */}
        <div className="text-left md:text-left lg:text-center pb-[4px]">
          <p className="font-['Manrope'] font-semibold text-[24px] leading-[36px] tracking-[-0.4px] text-[#222]">
            Villa de La Tina
          </p>
          <p className="font-['Manrope'] font-medium text-[16px] leading-[24px] tracking-[-0.5px] text-[#222]">
            Kuningan
          </p>
        </div>
        {/* Right Links - Visible on desktop only (1200px+) */}
        <div className="hidden lg:flex items-center gap-[24px] w-[233px]">
          <Link 
            href="/tina-wiryawati-center" 
            className="text-[#222] font-['Manrope'] font-medium text-[18px] leading-[27px] tracking-[-0.4px] hover:text-[#d95143] transition-colors"
          >
            TWC
          </Link>
          <Link 
            href="/tentang-kami" 
            className="text-[#222] font-['Manrope'] font-medium text-[18px] leading-[27px] tracking-[-0.4px] hover:text-[#d95143] transition-colors"
          >
            Tentang Kami
          </Link>
        </div>
        {/* Menu Icon - Visible on tablet and mobile only */}
        <button 
          className="lg:hidden p-[10px] rounded-[4px] hover:bg-[#f3f0eb] transition-colors" 
          aria-label="Menu"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="5" y="8" width="22" height="2" rx="1" fill="#222"/>
            <rect x="5" y="15" width="22" height="2" rx="1" fill="#222"/>
            <rect x="5" y="22" width="22" height="2" rx="1" fill="#222"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}
