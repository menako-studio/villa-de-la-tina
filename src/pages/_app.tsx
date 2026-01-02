import React from 'react';
import type { AppProps } from 'next/app';
import RootLayout from '@/layouts/RootLayout';
import '@/styles/globals.css';

/**
 * _app.tsx - Next.js App Component
 * 
 * This is the root component that wraps all pages.
 * The RootLayout provides consistent Navbar and Footer across all pages.
 * 
 * Best Practices Applied:
 * - Global layout management using RootLayout wrapper
 * - Consistent styling through globals.css
 * - Prevents layout shift and provides stable navigation
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}