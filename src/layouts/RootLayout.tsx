import React, { ReactNode } from 'react';
import { Navbar, Footer } from '@/components';

interface RootLayoutProps {
  children: ReactNode;
}

/**
 * RootLayout Component
 * 
 * This is the main layout wrapper that provides consistent Navbar and Footer
 * across all pages. This is the recommended approach for managing global layout
 * in Next.js applications (Next.js 13+ pages router pattern).
 * 
 * Best Practices Applied:
 * - Centralized layout management
 * - Prevents layout shift
 * - Consistent navigation across app
 * - Proper semantic HTML structure
 * - Accessibility compliance
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Content - grows to fill available space */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer - always at bottom */}
      <Footer />
    </div>
  );
}
