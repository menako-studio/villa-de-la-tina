import React from 'react';
import Link from 'next/link';

const footerLinks = {
  explore: [
    { href: '/penginapan', label: 'Penginapan' },
    { href: '/event-venue', label: 'Event & Venue' }
  ],
  beyondStay: [
    { href: '/twc', label: 'Tina Wiryawati Center' },
    { href: '/about', label: 'Tentang Kami' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-[#a8382d] py-10 lg:py-20 px-10 lg:px-40">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 lg:gap-40">
        {/* Footer Content */}
        <div className="flex flex-col gap-10">
          <div className="h-px w-full lg:w-[880px] bg-white/20" />
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-20 lg:justify-center">
            {/* Explore */}
            <div className="flex flex-col gap-4 w-full lg:w-[240px]">
              <p className="font-['Manrope'] font-medium text-[14px] leading-[21px] text-[#f3b4ae]">Explore</p>
              <div className="flex flex-col gap-2">
                {footerLinks.explore.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="font-['Manrope'] font-medium text-[14px] leading-[21px] text-[#f9f6f1] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Beyond the Stay */}
            <div className="flex flex-col gap-4 w-full lg:w-[240px]">
              <p className="font-['Manrope'] font-medium text-[14px] leading-[21px] text-[#f3b4ae]">Beyond the Stay</p>
              <div className="flex flex-col gap-2">
                {footerLinks.beyondStay.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="font-['Manrope'] font-medium text-[14px] leading-[21px] text-[#f9f6f1] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Location & Contact */}
            <div className="flex flex-col gap-10 w-full lg:w-[240px]">
              <div className="flex flex-col gap-4">
                <p className="font-['Manrope'] font-medium text-[14px] leading-[21px] text-[#f3b4ae]">Lokasi</p>
                <div className="font-['Young_Serif'] font-medium text-[16px] leading-[24px] text-[#f9f6f1]">
                  <p>Jl. Mulya Asih - Puncak</p>
                  <p>Kuningan, Jawa Barat</p>
                  <p>Indonesia</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-['Manrope'] font-medium text-[14px] leading-[21px] text-[#f3b4ae]">Kontak</p>
                <div className="font-['Young_Serif'] font-medium text-[16px] leading-[24px] text-[#f9f6f1]">
                  <p>info@villadelatina.com</p>
                  <p>+62 8123-4567-890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div>
          <p className="font-['Manrope'] font-medium text-[14px] leading-[21px] text-[#f3b4ae]">
            Copyright © Villa de La Tina 2026
          </p>
        </div>
      </div>
    </footer>
  );
}