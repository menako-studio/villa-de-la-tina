import React from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import RootLayout from '@/layouts/RootLayout';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WBL15RMTKS"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WBL15RMTKS');
        `}
      </Script>
      {/* Google Tag Manager */}
      <Script id="gtm-head" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NXQ5VKT9');
        `}
      </Script>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NXQ5VKT9"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <div className={inter.variable}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
        <Analytics />
        <SpeedInsights />
      </div>
    </>
  );
}