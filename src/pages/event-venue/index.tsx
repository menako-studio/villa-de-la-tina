import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { EventHero, ContentSection, CTASection } from '@/components/event-venue';
import { eventDetail, contentSections, ctaSection } from '@/lib/data/event-venue-data';

/**
 * Event & Venue Page
 * 
 * Displays upcoming events and venue information for Villa De La Tina.
 * Features hero section with event details, content sections showcasing
 * the venue, and a call-to-action to encourage engagement.
 * 
 * Optimized for:
 * - Page speed with Next.js Image optimization
 * - Responsive design across all breakpoints
 * - Accessibility with semantic HTML and ARIA labels
 * - Maintainability with separated concerns
 */
export default function EventVenuePage() {
  return (
    <>
      <Head>
        <title>Event & Venue - Villa de La Tina</title>
        <meta 
          name="description" 
          content="Pelatihan dan kegiatan yang tumbuh dari kebiasaan berkumpul di Villa De La Tina. Tempat percakapan dan pembelajaran yang nyaman di Kuningan." 
        />
        <meta name="keywords" content="event venue, villa kuningan, pelatihan umkm, ruang workshop" />
        <meta property="og:title" content="Event & Venue - Villa de La Tina" />
        <meta 
          property="og:description" 
          content="Pelatihan dan kegiatan yang tumbuh dari kebiasaan berkumpul di Villa De La Tina" 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://villadelatina.com/event-venue" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section with Event Details */}
        <EventHero event={eventDetail} />

        {/* Content Sections - Showcasing the Venue */}
        {contentSections.map((content, index) => (
          <ContentSection 
            key={index}
            content={content}
            layout={index === 0 ? 'full' : 'split'}
            index={index}
          />
        ))}

        {/* Call to Action Section */}
        <CTASection cta={ctaSection} />
      </main>

      <Footer />
    </>
  );
}