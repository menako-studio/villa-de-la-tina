
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  // Transparent only on home page and only when not scrolled
  const isHomePage = router.pathname === '/';
  const navBg = isHomePage && !isScrolled && !isMenuOpen
    ? 'bg-transparent'
    : 'bg-[#f9f6f1]';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${isScrolled ? 'shadow-sm' : ''}`}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Main Header */}
        <div className="px-6 md:px-6 lg:px-[60px] py-4 md:py-[16px] flex items-center justify-between">
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
            onClick={toggleMenu}
            className="lg:hidden p-[10px] rounded-[4px] hover:bg-[#f3f0eb] transition-colors" 
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              // X Icon
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M24 8L8 24M8 8L24 24" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              // Hamburger Icon
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="5" y="8" width="22" height="2" rx="1" fill="#222"/>
                <rect x="5" y="15" width="22" height="2" rx="1" fill="#222"/>
                <rect x="5" y="22" width="22" height="2" rx="1" fill="#222"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile/Tablet Menu - Expanded */}
        {isMenuOpen && (
          <div className="lg:hidden px-6 md:px-6 pb-6 flex flex-col gap-[24px]">
            {/* Menu Links */}
            <div className="flex flex-col gap-[16px] md:gap-[24px]">
              <Link 
                href="/" 
                className="text-[#222] font-['Manrope'] font-medium text-[18px] leading-[27px] tracking-[-0.4px] hover:text-[#d95143] transition-colors text-center"
              >
                Penginapan
              </Link>
              <Link 
                href="/event-venue" 
                className="text-[#222] font-['Manrope'] font-medium text-[18px] leading-[27px] tracking-[-0.4px] hover:text-[#d95143] transition-colors text-center"
              >
                Event & Venue
              </Link>
              <Link 
                href="/tina-wiryawati-center" 
                className="text-[#222] font-['Manrope'] font-medium text-[18px] leading-[27px] tracking-[-0.4px] hover:text-[#d95143] transition-colors text-center"
              >
                Tina Wiryawati Center
              </Link>
              <Link 
                href="/tentang-kami" 
                className="text-[#222] font-['Manrope'] font-medium text-[18px] leading-[27px] tracking-[-0.4px] hover:text-[#d95143] transition-colors text-center"
              >
                Tentang Kami
              </Link>
            </div>

            {/* CTA Button */}
            {/* <a 
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d95143] flex gap-[6px] items-center justify-center px-[20px] py-[12px] hover:bg-[#c44639] transition-colors"
            > */}
              <span className="font-['Manrope'] font-medium text-[16px] leading-[24px] tracking-[-0.5px] text-white">
                Pesan sekarang
              </span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 16H26M26 16L20 10M26 16L20 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            {/* </a> */}
          </div>
        )}
      </div>
    </nav>
  );
}
