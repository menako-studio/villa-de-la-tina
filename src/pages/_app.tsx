import React from 'react';
import type { AppProps } from 'next/app';
import RootLayout from '@/layouts/RootLayout';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

// Optimize font loading with font-display: swap for better PageSpeed
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

/**
 * _app.tsx - Next.js App Component
 * 
 * This is the root component that wraps all pages.
 * The RootLayout provides consistent Navbar and Footer across all pages.
 * 
 * Best Practices Applied:
 * - Global layout management using RootLayout wrapper
 * - Consistent styling through globals.css
 * - Optimized font loading with next/font/google
 * - Prevents layout shift and provides stable navigation
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.variable}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </div>
  );
}