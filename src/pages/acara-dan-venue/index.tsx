import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function AcaraDanVenuePage() {
  return (
    <>
      <Head>
        <title>Event & Venue - Villa de La Tina</title>
        <meta name="description" content="Villa De La Tina menghadirkan ruang acara yang menyatu dengan alam Kuningan dirancang untuk pertemuan yang terasa personal, hangat, dan berkesan." />
      </Head>

      <div className="bg-[#f9f6f1] min-h-screen">
        {/* Hero Section */}
        <section className="relative px-6 pt-32 pb-6 md:pt-44 lg:pt-52 md:px-10 lg:px-24">
          <div className="max-w-[700px] mx-auto text-center mb-6 md:mb-6 lg:mb-6">
            <div className="mb-2">
              <p className="font-semibold text-[#a8382d] text-[14px] leading-[21px] tracking-[-0.2px]">
                EVENT & VENUE
              </p>
            </div>
            <h1 className="font-serif text-[#222] text-[38px] md:text-[48px] lg:text-[56px] leading-[45.6px] md:leading-[57.6px] lg:leading-[67.2px] tracking-[-2px] mb-6">
              A Setting for Meaningful Gatherings
            </h1>
            <p className="font-sans text-[#454545] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px]">
              Villa De La Tina menghadirkan ruang acara yang menyatu dengan alam Kuningan dirancang untuk pertemuan yang terasa personal, hangat, dan berkesan.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative h-[490px] md:h-[600px] lg:h-[600px] overflow-hidden">
            <Image
              src="https://source.unsplash.com/1600x900/?villa,event,venue,garden"
              alt="Villa De La Tina Event Space"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#222]" />
          </div>
        </section>

        {/* Intro Section */}
        <section className="bg-[#f9f6f1] py-20 md:py-20 lg:py-40 px-6 md:px-10 lg:px-20">
          <div className="max-w-[700px] lg:max-w-[1040px] mx-auto text-center space-y-20 md:space-y-[150px] lg:space-y-[152px]">
            <h2 className="font-serif text-[#222] text-[28px] md:text-[36px] lg:text-[40px] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] tracking-[-1px]">
              Di Villa De La Tina, acara tidak berdiri sendiri,
              <br className="hidden md:block" />
              tetapi dipengaruhi oleh cahaya, udara, lanskap,
              <br className="hidden md:block" />
              dan ritme tempat di sekitarnya.
            </h2>
            <p className="font-sans text-[#454545] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px] max-w-[700px] mx-auto">
              Baik di ruang terbuka maupun area semi-indoor, setiap pertemuan dijalani dalam suasana yang tenang, memberi ruang bagi percakapan, perayaan, dan kebersamaan untuk hadir dengan lebih utuh.
            </p>
          </div>
        </section>

        {/* Outdoor Space Gallery Section */}
        <section className="bg-[#f9f6f1] py-10 md:py-10 lg:py-20 px-6 md:px-10 lg:px-20">
          <div className="max-w-[1040px] mx-auto">
            <div className="mb-10 space-y-6 text-center md:mb-10 lg:mb-20 md:space-y-10 lg:space-y-10">
              <h2 className="font-serif text-[#222] text-[28px] md:text-[36px] lg:text-[40px] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] tracking-[-1px]">
                Outdoor Space
              </h2>
              <p className="font-sans text-[#454545] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px] max-w-[700px] mx-auto">
                Area outdoor dengan latar pegunungan dan perkebunan di sekitarnya, ideal untuk acara yang mengutamakan suasana alami dan kebebasan ruang. Dapat menampung hingga ±100 orang dalam pengaturan yang tetap nyaman.
              </p>
            </div>
            
            {/* Gallery Grid - Mobile: Vertical, Tablet/Desktop: Horizontal */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 h-auto md:h-[400px] lg:h-[400px]">
                <div className="relative h-[192px] md:h-full md:flex-1 lg:flex-1 overflow-hidden bg-[#454545]">
                  <Image
                    src="https://source.unsplash.com/800x400/?outdoor,event,garden"
                    alt="Outdoor Space 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[192px] md:h-full md:w-[310px] lg:w-[310px] overflow-hidden bg-[#454545]">
                  <Image
                    src="https://source.unsplash.com/400x500/?outdoor,gathering"
                    alt="Outdoor Space 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 h-auto md:h-[400px] lg:h-[400px]">
                <div className="relative h-[192px] md:h-full md:w-[310px] lg:w-[310px] overflow-hidden bg-[#454545]">
                  <Image
                    src="https://source.unsplash.com/400x500/?villa,outdoor"
                    alt="Outdoor Space 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[192px] md:h-full md:flex-1 lg:flex-1 overflow-hidden bg-[#454545]">
                  <Image
                    src="https://source.unsplash.com/800x400/?nature,celebration"
                    alt="Outdoor Space 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Row 3 */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 h-auto md:h-[400px] lg:h-[400px]">
                <div className="relative h-[192px] md:h-full md:flex-1 lg:flex-1 overflow-hidden bg-[#454545]">
                  <Image
                    src="https://source.unsplash.com/800x400/?event,venue"
                    alt="Outdoor Space 5"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[192px] md:h-full md:w-[310px] lg:w-[310px] overflow-hidden bg-[#454545]">
                  <Image
                    src="https://source.unsplash.com/400x500/?wedding,outdoor"
                    alt="Outdoor Space 6"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Indoor/Semi-Indoor Gallery Section */}
        <section className="bg-[#fdf4f3] py-10 md:py-10 lg:py-20 px-6 md:px-10 lg:px-20">
          <div className="max-w-[1040px] mx-auto">
            <div className="mb-10 space-y-6 text-center md:mb-10 lg:mb-20 md:space-y-10 lg:space-y-10">
              <h2 className="font-serif text-[#222] text-[28px] md:text-[36px] lg:text-[40px] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] tracking-[-1px]">
                Indoor / Semi-Indoor
              </h2>
              <p className="font-sans text-[#454545] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px] max-w-[700px] mx-auto">
                Ruang joglo dirancang sebagai tempat berkumpul yang lebih terlindung, cocok untuk pertemuan yang membutuhkan keintiman dan fokus.
              </p>
            </div>
            
            {/* Gallery Grid */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 h-auto md:h-[400px] lg:h-[400px]">
                <div className="relative h-[192px] md:h-full md:flex-1 lg:flex-1 overflow-hidden bg-[#454545]">
                  <Image
                    src="https://source.unsplash.com/800x400/?indoor,venue,joglo"
                    alt="Indoor Space 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[192px] md:h-full md:w-[310px] lg:w-[310px] overflow-hidden bg-[#454545]">
                  <Image
                    src="https://source.unsplash.com/400x500/?indoor,event"
                    alt="Indoor Space 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 h-auto md:h-[400px] lg:h-[400px]">
                <div className="relative h-[192px] md:h-full md:w-[310px] lg:w-[310px] overflow-hidden bg-[#454545]">
                  <Image
                    src="https://source.unsplash.com/400x500/?meeting,room"
                    alt="Indoor Space 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[192px] md:h-full md:flex-1 lg:flex-1 overflow-hidden bg-[#454545]">
                  <Image
                    src="https://source.unsplash.com/800x400/?gathering,indoor"
                    alt="Indoor Space 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Row 3 */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 h-auto md:h-[400px] lg:h-[400px]">
                <div className="relative h-[192px] md:h-full md:flex-1 lg:flex-1 overflow-hidden bg-[#454545]">
                  <Image
                    src="https://source.unsplash.com/800x400/?conference,venue"
                    alt="Indoor Space 5"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[192px] md:h-full md:w-[310px] lg:w-[310px] overflow-hidden bg-[#454545]">
                  <Image
                    src="https://source.unsplash.com/400x500/?seminar,indoor"
                    alt="Indoor Space 6"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Types Section */}
        <section className="bg-[#f9f6f1] py-10 md:py-10 lg:py-20 px-6 md:px-10 lg:px-20">
          <div className="max-w-[1040px] mx-auto">
            <div className="mb-10 text-center md:mb-10 lg:mb-20">
              <h2 className="font-serif text-[#222] text-[28px] md:text-[36px] lg:text-[40px] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] tracking-[-1px]">
                Untuk Beragam Momen
              </h2>
            </div>
            
            {/* Event Cards - Mobile: Vertical Stack, Desktop: Horizontal */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3 md:gap-6 lg:gap-4">
              {/* Card 1: Weddings & Celebration */}
              <div className="flex flex-col">
                <div className="relative h-[504px] overflow-hidden">
                  <Image
                    src="https://source.unsplash.com/600x900/?wedding,celebration"
                    alt="Weddings & Celebration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#222]" />
                </div>
                <div className="pt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[#222] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px]">
                      Weddings & Celebration
                    </h3>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#8c3128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 2: Corporate Gathering */}
              <div className="flex flex-col">
                <div className="relative h-[504px] overflow-hidden">
                  <Image
                    src="https://source.unsplash.com/600x900/?corporate,meeting"
                    alt="Corporate Gathering"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#222]" />
                </div>
                <div className="pt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[#222] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px]">
                      Corporate Gathering
                    </h3>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#8c3128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 3: Community Event */}
              <div className="flex flex-col">
                <div className="relative h-[504px] overflow-hidden">
                  <Image
                    src="https://source.unsplash.com/600x900/?community,event"
                    alt="Community Event"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#222]" />
                </div>
                <div className="pt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[#222] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px]">
                      Community Event
                    </h3>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#8c3128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-6 py-20 md:py-10 lg:py-20 md:px-10 lg:px-20">
          <div className="relative max-w-[1040px] mx-auto">
            {/* Background */}
            <div className="absolute inset-0 md:inset-y-0 md:right-0 md:left-auto md:w-[calc(100%-40px)] lg:w-[calc(100%-80px)] bg-[#a8382d]" />
            
            {/* Content Container */}
            <div className="relative flex flex-col items-end gap-10 md:flex-row lg:flex-row md:items-center lg:items-center md:gap-10 lg:gap-10">
              {/* Image */}
              <div className="relative w-full md:w-[445px] lg:w-[600px] h-[400px] md:h-[400px] lg:h-[448px] overflow-hidden order-1 md:order-1 lg:order-1">
                <Image
                  src="https://source.unsplash.com/1200x800/?villa,kuningan,nature"
                  alt="Villa De La Tina"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Text Content */}
              <div className="relative flex-1 order-2 space-y-4 md:space-y-4 lg:space-y-4 md:order-2 lg:order-2 md:pr-10 lg:pr-20">
                <h2 className="font-serif text-white text-[28px] md:text-[36px] lg:text-[40px] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] tracking-[-1px]">
                  Setiap kegiatan dirancang melalui percakapan
                </h2>
                <p className="font-sans text-[#f6f6f6] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px]">
                  Ceritakan kebutuhan acara Anda. Kami akan membantu menyesuaikannya dengan suasana Villa De La Tina.
                </p>
                <button className="border-b-[1.5px] border-white py-3 transition-opacity hover:opacity-80">
                  <span className="font-medium text-white text-[16px] leading-[24px] tracking-[-0.5px]">
                    Hubungi kami
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}