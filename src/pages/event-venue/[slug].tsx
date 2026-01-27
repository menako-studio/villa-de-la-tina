import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { EventHero } from '@/components/event-venue';
import { Event } from '@/types/event-venue';
import { 
  getEventBySlug, 
  getAllEventSlugs, 
  formatEventDate,
  getRelatedEvents 
} from '@/lib/data/event-venue-data';

interface EventDetailPageProps {
  event: Event;
  relatedEvents: Event[];
}

/**
 * Event Detail Page - Dynamic Route
 * 
 * Displays individual event information based on the URL slug parameter.
 * Features hero section with event details, description, highlights,
 * schedule, registration, and related events.
 * 
 * Optimized for:
 * - Dynamic routing with Next.js getStaticProps & getStaticPaths
 * - SEO with dynamic meta tags and JSON-LD structured data
 * - Page speed with Next.js Image optimization
 * - Responsive design across all breakpoints
 * - Accessibility with semantic HTML and ARIA labels
 */
export default function EventDetailPage({ event, relatedEvents }: EventDetailPageProps) {
  const formattedDate = formatEventDate(event.date);
  const eventUrl = `https://villadelatina.com/event-venue/${event.slug}`;
  const eventImageUrl = `https://villadelatina.com${event.heroImage}`;

  return (
    <>
      <Head>
        <title>{`${event.title} – Villa de La Tina Kuningan | Event & Workshop`}</title>
        <meta 
          name="description" 
          content={event.description}
        />
        <meta 
          name="keywords" 
          content={`${event.category}, event kuningan, workshop kuningan, ${event.title}, villa de la tina, tina wiryawati center`}
        />
        <meta name="author" content="Villa De La Tina" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={eventUrl} />
        <meta property="og:title" content={`${event.title} – Villa de La Tina Kuningan`} />
        <meta property="og:description" content={event.description} />
        <meta property="og:image" content={eventImageUrl} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={eventUrl} />
        <meta property="twitter:title" content={`${event.title} – Villa de La Tina Kuningan`} />
        <meta property="twitter:description" content={event.description} />
        <meta property="twitter:image" content={eventImageUrl} />
        
        <link rel="canonical" href={eventUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data - Event Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": event.title,
              "description": event.description,
              "image": eventImageUrl,
              "startDate": event.date,
              "endDate": event.date,
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": event.venue?.name || event.location,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": event.venue?.address || "Jl. Mulya Asih - Puncak",
                  "addressLocality": "Kuningan",
                  "addressRegion": "Jawa Barat",
                  "addressCountry": "ID"
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": event.organizer?.name || "Tina Wiryawati Center",
                "url": "https://villadelatina.com"
              },
              "offers": event.price === 'free' ? {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "IDR",
                "availability": "https://schema.org/InStock",
                "validFrom": new Date().toISOString()
              } : event.price ? {
                "@type": "Offer",
                "price": event.price.toString(),
                "priceCurrency": "IDR",
                "availability": "https://schema.org/InStock",
                "validFrom": new Date().toISOString()
              } : undefined,
              "performer": {
                "@type": "Organization",
                "name": event.organizer?.name || "Tina Wiryawati Center"
              }
            })
          }}
        />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section with Event Details */}
        <EventHero event={event} />

        {/* Event Description Section */}
        <section className="bg-[#f9f6f1] px-6 py-10 md:px-10 md:py-16 lg:px-20 lg:py-20">
          <div className="max-w-[1200px] mx-auto">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-[14px] text-[#454545]">
                <li>
                  <Link href="/" className="hover:text-[#a8382d] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/event-venue" className="hover:text-[#a8382d] transition-colors">
                    Event & Venue
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[#a8382d] font-medium" aria-current="page">
                  {event.title}
                </li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* About Event */}
                <div>
                  <h2 className="font-['Young_Serif'] text-[28px] leading-[33.6px] md:text-[36px] md:leading-[43.2px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-[#222] mb-6">
                    Tentang Event Ini
                  </h2>
                  <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545]">
                    {event.longDescription || event.description}
                  </p>
                </div>

                {/* Highlights */}
                {event.highlights && event.highlights.length > 0 && (
                  <div>
                    <h3 className="font-['Young_Serif'] text-[24px] leading-[28.8px] md:text-[28px] md:leading-[33.6px] tracking-[-1px] text-[#222] mb-6">
                      Yang Akan Anda Dapatkan
                    </h3>
                    <ul className="space-y-3">
                      {event.highlights.map((highlight, index) => (
                        <li 
                          key={index}
                          className="flex items-start gap-3 font-['Manrope'] font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] tracking-[-0.4px] text-[#454545]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#a8382d] mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Schedule */}
                {event.schedule && event.schedule.length > 0 && (
                  <div>
                    <h3 className="font-['Young_Serif'] text-[24px] leading-[28.8px] md:text-[28px] md:leading-[33.6px] tracking-[-1px] text-[#222] mb-6">
                      Jadwal Acara
                    </h3>
                    <div className="space-y-4">
                      {event.schedule.map((item, index) => (
                        <div 
                          key={index}
                          className="flex gap-4 pb-4 border-b border-[#e0e0e0] last:border-b-0"
                        >
                          <div className="font-['Manrope'] font-semibold text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-[#a8382d] min-w-[120px]">
                            {item.time}
                          </div>
                          <div className="font-['Manrope'] font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] text-[#454545]">
                            {item.activity}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Requirements */}
                {event.requirements && event.requirements.length > 0 && (
                  <div>
                    <h3 className="font-['Young_Serif'] text-[24px] leading-[28.8px] md:text-[28px] md:leading-[33.6px] tracking-[-1px] text-[#222] mb-6">
                      Persyaratan
                    </h3>
                    <ul className="space-y-3">
                      {event.requirements.map((requirement, index) => (
                        <li 
                          key={index}
                          className="flex items-start gap-3 font-['Manrope'] font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] tracking-[-0.4px] text-[#454545]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#454545] mt-2 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Event Info Card */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e0e0e0]">
                    <h3 className="font-['Manrope'] font-semibold text-[18px] leading-[27px] text-[#222] mb-4">
                      Informasi Event
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="font-['Manrope'] font-medium text-[14px] text-[#a8382d] mb-1">
                          Tanggal
                        </div>
                        <div className="font-['Manrope'] text-[16px] text-[#454545]">
                          {formattedDate}
                        </div>
                      </div>
                      {event.time && (
                        <div>
                          <div className="font-['Manrope'] font-medium text-[14px] text-[#a8382d] mb-1">
                            Waktu
                          </div>
                          <div className="font-['Manrope'] text-[16px] text-[#454545]">
                            {event.time}
                          </div>
                        </div>
                      )}
                      <div>
                        <div className="font-['Manrope'] font-medium text-[14px] text-[#a8382d] mb-1">
                          Lokasi
                        </div>
                        <div className="font-['Manrope'] text-[16px] text-[#454545]">
                          {event.venue?.name || event.location}
                        </div>
                      </div>
                      {event.price !== undefined && (
                        <div>
                          <div className="font-['Manrope'] font-medium text-[14px] text-[#a8382d] mb-1">
                            Harga
                          </div>
                          <div className="font-['Manrope'] text-[16px] text-[#454545]">
                            {event.price === 'free' ? 'Gratis' : `Rp ${event.price.toLocaleString('id-ID')}`}
                          </div>
                        </div>
                      )}
                      {event.capacity && (
                        <div>
                          <div className="font-['Manrope'] font-medium text-[14px] text-[#a8382d] mb-1">
                            Kapasitas
                          </div>
                          <div className="font-['Manrope'] text-[16px] text-[#454545]">
                            {event.registration?.currentParticipants || 0} / {event.capacity} peserta
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Registration Button */}
                    {event.registration?.isOpen && (
                      <a 
                        href={event.registration.link || event.ctaLink}
                        className="mt-6 block w-full bg-[#a8382d] text-white text-center py-3 px-4 font-['Manrope'] font-medium text-[16px] hover:bg-[#d95143] transition-colors"
                      >
                        {event.ctaText}
                      </a>
                    )}
                  </div>

                  {/* Contact Organizer */}
                  {event.organizer && (
                    <div className="bg-[#f9f6f1] p-6 rounded-lg border border-[#e0e0e0]">
                      <h3 className="font-['Manrope'] font-semibold text-[18px] leading-[27px] text-[#222] mb-4">
                        Penyelenggara
                      </h3>
                      <div className="space-y-2">
                        <div className="font-['Manrope'] text-[16px] text-[#454545]">
                          {event.organizer.name}
                        </div>
                        {event.organizer.contact && (
                          <div className="font-['Manrope'] text-[14px] text-[#454545]">
                            {event.organizer.contact}
                          </div>
                        )}
                        {event.organizer.email && (
                          <div className="font-['Manrope'] text-[14px] text-[#a8382d]">
                            {event.organizer.email}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Events Section */}
        {relatedEvents && relatedEvents.length > 0 && (
          <section className="bg-white px-6 py-10 md:px-10 md:py-16 lg:px-20 lg:py-20">
            <div className="max-w-[1200px] mx-auto">
              <h2 className="font-['Young_Serif'] text-[28px] leading-[33.6px] md:text-[36px] md:leading-[43.2px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-[#222] mb-10">
                Event Lainnya
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedEvents.map((relatedEvent) => (
                  <Link 
                    key={relatedEvent.slug}
                    href={`/event-venue/${relatedEvent.slug}`}
                    className="group bg-white rounded-lg overflow-hidden border border-[#e0e0e0] hover:shadow-lg transition-all"
                  >
                    <div className="relative h-[200px] overflow-hidden">
                      <Image 
                        src={relatedEvent.heroImage}
                        alt={relatedEvent.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="font-['Manrope'] font-semibold text-[12px] text-[#a8382d] mb-2 uppercase">
                        {relatedEvent.category}
                      </div>
                      <h3 className="font-['Young_Serif'] text-[20px] leading-[24px] text-[#222] mb-3">
                        {relatedEvent.title}
                      </h3>
                      <div className="font-['Manrope'] text-[14px] text-[#454545] mb-2">
                        {formatEventDate(relatedEvent.date)}
                      </div>
                      <div className="font-['Manrope'] text-[14px] text-[#454545]">
                        {relatedEvent.location}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

/**
 * Generate static paths for all events
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllEventSlugs();
  
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false, // 404 for non-existent slugs
  };
};

/**
 * Fetch event data for the given slug
 */
export const getStaticProps: GetStaticProps<EventDetailPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const event = getEventBySlug(slug);

  // Handle 404
  if (!event) {
    return {
      notFound: true,
    };
  }

  // Get related events
  const relatedEvents = getRelatedEvents(slug, 3);

  return {
    props: {
      event,
      relatedEvents,
    },
    revalidate: 3600, // Revalidate every hour
  };
};
