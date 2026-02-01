import React from 'react';
import Head from 'next/head';
import { 
  EventHero, 
  IntroSection, 
  EventTypesSection, 
  GallerySection, 
  CTASection 
} from '@/components/event-venue';
import { 
  eventVenueHero,
  eventVenueIntro,
  eventTypes,
  eventVenueGallery,
  eventVenueCTA
} from '@/lib/data/event-venue-data';

/**
 * Event & Venue Page
 * 
 * Displays the Event & Venue information for Villa De La Tina.
 * Features hero section, intro, event types, gallery, and CTA.
 * 
 * Optimized for:
 * - Page speed with Next.js Image optimization
 * - Responsive design across all breakpoints (Mobile, Tablet, Desktop)
 * - Accessibility with semantic HTML and ARIA labels
 * - Pixel-perfect match to Figma design
 */
export default function EventVenuePage() {
  return (
    <>
      <Head>
        <title>Event & Venue – Villa de La Tina Kuningan | Ruang Acara & Workshop</title>
        <meta 
          name="description" 
          content="Sewa villa untuk event, workshop, dan gathering di Kuningan. Villa De La Tina menyediakan ruang acara dengan kapasitas 50-100 orang, view pegunungan, dan fasilitas lengkap." 
        />
        <meta name="keywords" content="event venue kuningan, sewa villa acara, ruang workshop kuningan, villa gathering, venue meeting kuningan, tempat acara outdoor" />
        <meta name="author" content="Villa De La Tina" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://villadelatina.com/event-venue" />
        <meta property="og:title" content="Event & Venue – Villa de La Tina Kuningan" />
        <meta property="og:description" content="Sewa villa untuk event, workshop, dan gathering di Kuningan dengan fasilitas lengkap dan view pegunungan yang indah." />
        <meta property="og:image" content="https://villadelatina.com/images/event-venue-og.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://villadelatina.com/event-venue" />
        <meta property="twitter:title" content="Event & Venue – Villa de La Tina Kuningan" />
        <meta property="twitter:description" content="Sewa villa untuk event, workshop, dan gathering di Kuningan dengan fasilitas lengkap." />
        <meta property="twitter:image" content="https://villadelatina.com/images/event-venue-og.jpg" />
        
        <link rel="canonical" href="https://villadelatina.com/event-venue" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventVenue",
              "name": "Villa De La Tina Event Venue",
              "description": "Ruang acara dan workshop di villa healing Kuningan dengan kapasitas hingga 100 orang",
              "url": "https://villadelatina.com/event-venue",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Mulya Asih - Puncak",
                "addressLocality": "Kuningan",
                "addressRegion": "Jawa Barat",
                "addressCountry": "ID"
              },
              "maximumAttendeeCapacity": 100,
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Outdoor Space", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Mountain View", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Catering Available", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true }
              ]
            })
          }}
        />
      </Head>

      
      
      {/* Hero Section */}
      <EventHero
        subtitle={eventVenueHero.subtitle}
        title={eventVenueHero.title}
        description={eventVenueHero.description}
        heroImage={eventVenueHero.heroImage}
      />

      {/* Intro Section */}
      <IntroSection
        headline={eventVenueIntro.headline}
        description={eventVenueIntro.description}
      />

      {/* Event Types Section */}
      <EventTypesSection
        header={eventTypes.header}
        eventTypes={eventTypes.types}
      />

      {/* Gallery Section */}
      <GallerySection
        header={eventVenueGallery.header}
        description={eventVenueGallery.description}
        images={eventVenueGallery.images}
      />

      {/* CTA Section */}
      <CTASection
        title={eventVenueCTA.title}
        description={eventVenueCTA.description}
        buttonText={eventVenueCTA.buttonText}
        buttonLink={eventVenueCTA.buttonLink}
        image={eventVenueCTA.image}
      />

      
    </>
  );
}