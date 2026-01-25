import { Html, Head, Main, NextScript } from 'next/document';

/**
 * _document.tsx - Custom Document for Next.js
 * 
 * Purpose: Optimize font loading and add global meta tags
 * - Preconnect to Google Fonts for faster loading
 * - Preload critical fonts to reduce layout shift
 * - Set document language for better SEO
 */
export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical fonts - Young Serif for headings */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Young+Serif:wght@400;600&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Young+Serif:wght@400;600&display=swap"
          rel="stylesheet"
        />
        
        {/* Preload Manrope for body text */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#F9F6F1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
