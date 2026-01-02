import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(416);
  
  useEffect(() => {
    const handleResize = () => {
      setSlideWidth(typeof window !== 'undefined' && window.innerWidth < 1024 ? 336 : 416);
    };
    
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  const carouselImages = [
    { alt: 'Cottage', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=1200&fit=crop' },
    { alt: 'Cabin', image: 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=800&h=1200&fit=crop' },
    { alt: 'Restaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=1200&fit=crop' },
    { alt: 'Pool', image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=1200&fit=crop' },
    { alt: 'Sauna', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=1200&fit=crop' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <>
      <Head>
        <title>Villa de La Tina - A Private Retreat in the Heart of Nature</title>
        <meta 
          name="description" 
          content="Villa De La Tina adalah ruang tinggal yang tenang dan intim, dikelilingi lanskap alami Kuningan. Dirancang untuk mereka yang menghargai ketenangan, ruang, dan waktu yang berjalan lebih pelan." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#f9f6f1] min-h-screen">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
          <div className="max-w-[1200px] mx-auto px-6 py-4 lg:px-[60px] flex items-center justify-between">
            {/* Left Links - Hidden on mobile */}
            <div className="items-center hidden gap-6 lg:flex">
              <Link href="/penginapan" className="text-[#222] font-['Manrope'] font-medium text-[18px] hover:text-[#d95143] transition-colors">
                Penginapan
              </Link>
              <Link href="/event-venue" className="text-[#222] font-['Manrope'] font-medium text-[18px] hover:text-[#d95143] transition-colors">
                Event & Venue
              </Link>
            </div>
            
            {/* Logo */}
            <div className="text-center">
              <p className="font-['Manrope'] font-semibold text-[24px] leading-[36px] text-[#222]">
                Villa de La Tina
              </p>
              <p className="font-['Manrope'] font-medium text-[16px] leading-[24px] text-[#222]">
                Kuningan
              </p>
            </div>
            
            {/* Right Links - Hidden on mobile */}
            <div className="items-center hidden gap-6 lg:flex">
              <Link href="/twc" className="text-[#222] font-['Manrope'] font-medium text-[18px] hover:text-[#d95143] transition-colors">
                TWC
              </Link>
              <Link href="/about" className="text-[#222] font-['Manrope'] font-medium text-[18px] hover:text-[#d95143] transition-colors">
                Tentang Kami
              </Link>
            </div>

            {/* Menu Icon - Visible on mobile */}
            <button className="lg:hidden p-2.5 rounded" aria-label="Menu">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="5" y="8" width="22" height="2" fill="#222"/>
                <rect x="5" y="15" width="22" height="2" fill="#222"/>
                <rect x="5" y="22" width="22" height="2" fill="#222"/>
              </svg>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[600px] flex flex-col items-center justify-center overflow-hidden pt-0 lg:pt-[148px]">
          {/* Background Video/Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.webp"
              alt="Nature background"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#222222]" />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center gap-6 px-6 max-w-[750px] pb-10 lg:pb-0">
            <h1 className="font-['Young_Serif'] font-semibold text-[38px] leading-[45.6px] lg:text-[56px] lg:leading-[67.2px] tracking-[-2px] text-white text-center">
              A Private Retreat in<span className="lg:inline"><br /></span> the Heart of Nature
            </h1>
            <div className="flex flex-col items-center w-full gap-6">
              <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#d1d1d1] text-center">
                Villa De La Tina adalah ruang tinggal yang tenang dan intim, dikelilingi lanskap alami Kuningan. 
                Dirancang untuk mereka yang menghargai ketenangan, ruang, dan waktu yang berjalan lebih pelan.
              </p>
              <button className="bg-[#d95143] px-5 py-3 text-white font-['Manrope'] font-medium text-[16px] leading-[24px] hover:bg-[#a8382d] transition-colors">
                Discover the Experience
              </button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="bg-[#f9f6f1] py-20 lg:py-[168px] px-6 lg:px-20 flex flex-col items-center justify-center">
          <div className="max-w-[1200px] flex flex-col lg:h-[584px] items-center justify-between gap-20">
            <h2 className="font-['Young_Serif'] font-semibold text-[28px] leading-[33.6px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-black text-center max-w-full">
              Di tengah lanskap hijau Kuningan, Villa De La Tina hadir sebagai ruang yang menyatu dengan alam, 
              tenang, terbuka, dan penuh kehadiran. Sebuah tempat di mana cahaya, udara, dan waktu bergerak dengan iramanya sendiri.
            </h2>
            <div className="flex flex-col gap-4 lg:gap-6 items-start justify-center w-full lg:w-[700px]">
              <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545] text-center w-full">
                Setiap sudut di Villa De La Tina dirancang untuk memberi jarak dari hiruk pikuk, menghadirkan ketenangan yang terasa alami, 
                bukan sekadar tempat singgah, tetapi ruang untuk benar-benar tinggal, mendengarkan alam, dan kembali pada ritme yang lebih pelan.
              </p>
              <div className="relative flex items-center justify-center w-full h-9">
                <p className="font-['Adventures_Unlimited_Script'] text-[32px] lg:text-[45px] leading-[25.4px] lg:leading-[35.2px] tracking-[-0.3px] text-[#8c3128] text-center transform -rotate-[5deg]">
                  selamat datang!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="bg-[#f9f6f1] py-10 lg:py-20 px-6 lg:px-20">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-10 lg:gap-20">
            {/* Header */}
            <div className="flex flex-col items-center gap-6 text-center lg:gap-10">
              <h2 className="font-['Young_Serif'] font-semibold text-[28px] leading-[33.6px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-black">
                Dirancang untuk Memulihkan dan<br className="hidden lg:block" /> Dijalani dengan Tenang
              </h2>
              <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545] max-w-full lg:max-w-[700px]">
                Di Villa De La Tina, fasilitas bukan sekadar pelengkap. Ia hadir sebagai bagian dari pengalaman yang menyatu dengan alam, 
                menyelaraskan tubuh dan pikiran, tanpa perlu berlebihan.
              </p>
            </div>
            
            {/* Facilities Grid */}
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
              {/* Left Column - Mobile: Stacked */}
              <div className="flex flex-col gap-10 lg:gap-20 w-full lg:w-[550px]">
                {/* SPA */}
                <div className="flex flex-col gap-6 lg:gap-10">
                  <div className="h-[300px] lg:h-[400px] overflow-hidden relative">
                    <Image
                      src="/images/spa.webp"
                      alt="Spa"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4 lg:gap-6">
                    <div className="flex flex-col gap-2">
                      <p className="font-['Manrope'] font-medium text-[16px] leading-[24px] text-black">SPA</p>
                      <h3 className="font-['Young_Serif'] font-medium text-[20px] leading-[30px] lg:text-[24px] lg:leading-[36px] tracking-[-0.4px] text-[#d95143]">
                        Sebuah Ritual untuk Kembali Seimbang
                      </h3>
                    </div>
                    <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545]">
                      Di ruang spa yang tenang dan tertutup, waktu seolah melambat. Sentuhan perawatan dilakukan dengan ritme yang lembut, 
                      memberi kesempatan bagi tubuh untuk benar-benar beristirahat dan melepaskan lelah yang tertinggal.
                    </p>
                  </div>
                </div>
                
                {/* Sauna - Mobile order */}
                <div className="flex flex-col w-full gap-6 lg:gap-10 lg:hidden">
                  <div className="h-[500px] overflow-hidden relative">
                    <Image
                      src="/images/sauna.webp"
                      alt="Sauna"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4 lg:gap-6">
                    <div className="flex flex-col gap-2">
                      <p className="font-['Manrope'] font-medium text-[16px] leading-[24px] text-black">SAUNA</p>
                      <h3 className="font-['Young_Serif'] font-medium text-[20px] leading-[30px] lg:text-[24px] lg:leading-[36px] tracking-[-0.4px] text-[#d95143]">
                        Kehangatan yang Menenangkan
                      </h3>
                    </div>
                    <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545]">
                      Sauna menjadi ruang hening untuk memulihkan diri, hangat, sunyi, dan intim. Sebuah jeda sederhana yang membantu tubuh 
                      bernapas lebih dalam, dan pikiran menjadi lebih jernih.
                    </p>
                  </div>
                </div>

                {/* Pool */}
                <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-[470px] lg:ml-auto">
                  <div className="h-[300px] lg:h-[320px] overflow-hidden relative">
                    <Image
                      src="/images/pool.webp"
                      alt="Pool"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4 lg:gap-6">
                    <div className="flex flex-col gap-2">
                      <p className="font-['Manrope'] font-medium text-[16px] leading-[24px] text-black">KOLAM RENANG</p>
                      <h3 className="font-['Young_Serif'] font-medium text-[20px] leading-[30px] lg:text-[24px] lg:leading-[36px] tracking-[-0.4px] text-[#d95143]">
                        Air, Cahaya, dan Keheningan
                      </h3>
                    </div>
                    <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545]">
                      Kolam renang terbuka menghadap alam, dikelilingi lanskap hijau yang menenangkan. Di sini, setiap pagi terasa lebih segar, 
                      dan sore berjalan lebih lambat sehingga mengundang Anda untuk menikmati waktu lebih lama.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Sauna - Desktop only */}
              <div className="hidden lg:flex flex-col w-[410px]">
                <div className="flex flex-col gap-10">
                  <div className="h-[600px] overflow-hidden relative">
                    <Image
                      src="/images/sauna.webp"
                      alt="Sauna"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <p className="font-['Manrope'] font-medium text-[16px] leading-[24px] text-black">SAUNA</p>
                      <h3 className="font-['Young_Serif'] font-medium text-[24px] leading-[36px] tracking-[-0.4px] text-[#d95143]">
                        Kehangatan yang Menenangkan
                      </h3>
                    </div>
                    <p className="font-['Manrope'] font-normal text-[20px] leading-[30px] tracking-[-0.4px] text-[#454545]">
                      Sauna menjadi ruang hening untuk memulihkan diri, hangat, sunyi, dan intim. Sebuah jeda sederhana yang membantu tubuh 
                      bernapas lebih dalam, dan pikiran menjadi lebih jernih.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Package Section */}
        <section className="bg-[#f9f6f1] py-10 lg:py-20 px-6 lg:px-20">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-10 lg:gap-20">
            {/* Header */}
            <div className="flex flex-col items-center gap-6 text-center lg:gap-10">
              <h2 className="font-['Young_Serif'] font-semibold text-[28px] leading-[33.6px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-black">
                Ruang untuk Menetap Lebih Lama
              </h2>
              <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545] max-w-full lg:max-w-[700px]">
                Villa De La Tina menghadirkan rangkaian pengalaman menginap yang dirancang dengan ritme yang tenang. 
                Setiap paket bukan sebuah agenda, melainkan undangan untuk tinggal, merasakan, dan membiarkan hari berjalan apa adanya.
              </p>
            </div>
            
            {/* Packages */}
            <div className="flex flex-col gap-6 lg:gap-10">
              {/* Package 1 */}
              <div className="flex flex-col lg:flex-row">
                <div className="h-[342px] lg:h-[750px] w-full lg:w-[700px] relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1400&h=1500&fit=crop"
                    alt="Private Healing Stay"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#fbe7e5] w-full lg:w-[340px] p-6 lg:p-10 flex flex-col gap-6 lg:gap-40 justify-center">
                  <h3 className="font-['Young_Serif'] font-medium text-[20px] leading-[30px] lg:text-[24px] lg:leading-[36px] tracking-[-0.4px] text-[#d95143]">
                    Private Healing Stay
                  </h3>
                  <div className="flex flex-col gap-6">
                    <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545]">
                      Sebuah pengalaman menginap yang tenang dan personal, memberi ruang bagi tubuh dan pikiran untuk beristirahat tanpa gangguan. 
                      Dirancang bagi mereka yang mencari keheningan, privasi, dan jeda yang utuh.
                    </p>
                    <button className="bg-[#d95143] px-4 py-2.5 text-white font-['Manrope'] font-medium text-[14px] leading-[21px] hover:bg-[#a8382d] transition-colors">
                      Pelajari lebih lanjut
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Package 2 */}
              <div className="flex flex-col lg:flex-row">
                <div className="h-[342px] lg:h-[750px] w-full lg:w-[700px] relative overflow-hidden lg:order-2">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&h=1500&fit=crop"
                    alt="Wellness Retreat"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#ebe4d4] w-full lg:w-[340px] p-6 lg:p-10 flex flex-col gap-6 lg:gap-40 justify-center lg:order-1">
                  <h3 className="font-['Young_Serif'] font-medium text-[20px] leading-[30px] lg:text-[24px] lg:leading-[36px] tracking-[-0.4px] text-[#d95143]">
                    Wellness Retreat
                  </h3>
                  <div className="flex flex-col gap-6">
                    <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545]">
                      Rangkaian hari yang dijalani dengan tenang dan digabungkan dengan waktu istirahat, perawatan, dan kehadiran penuh dalam setiap momen. 
                      Sebuah cara lembut untuk kembali pada keseimbangan.
                    </p>
                    <button className="bg-[#d95143] px-4 py-2.5 text-white font-['Manrope'] font-medium text-[14px] leading-[21px] hover:bg-[#a8382d] transition-colors">
                      Pelajari lebih lanjut
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Package 3 */}
              <div className="flex flex-col lg:flex-row">
                <div className="h-[342px] lg:h-[750px] w-full lg:w-[700px] relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=1400&h=1500&fit=crop"
                    alt="Small Group Retreat"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#fbe7e5] w-full lg:w-[340px] p-6 lg:p-10 flex flex-col gap-6 lg:gap-40 justify-center">
                  <h3 className="font-['Young_Serif'] font-medium text-[20px] leading-[30px] lg:text-[24px] lg:leading-[36px] tracking-[-0.4px] text-[#d95143]">
                    Small Group Retreat
                  </h3>
                  <div className="flex flex-col gap-6">
                    <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545]">
                      Untuk kelompok kecil yang ingin berkumpul dalam suasana yang intim dan tenang. Ruang yang memungkinkan kebersamaan tumbuh, 
                      tanpa kehilangan rasa privat dan kedalaman pengalaman.
                    </p>
                    <button className="bg-[#d95143] px-4 py-2.5 text-white font-['Manrope'] font-medium text-[14px] leading-[21px] hover:bg-[#a8382d] transition-colors">
                      Pelajari lebih lanjut
                    </button>
                  </div>
                </div>
              </div>
              
              {/* CTA Card */}
              <div className="bg-[#a8382d] h-auto lg:h-[608px] flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-end p-6 lg:p-20 overflow-hidden relative gap-10 lg:gap-0">
                {/* Background Image */}
                <div className="relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 h-[342px] lg:h-[448px] w-full lg:w-[600px] overflow-hidden order-1 lg:order-none">
                  <Image
                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=896&fit=crop"
                    alt="Gentle CTA"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="w-full lg:w-[400px] flex flex-col gap-6 lg:justify-between z-10 relative order-2 lg:order-none">
                  <h3 className="font-['Young_Serif'] font-semibold text-[28px] leading-[33.6px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-white lg:mb-40">
                    Setiap pengalaman dirancang personal dan menyesuaikan kebutuhan serta ritme Anda.
                  </h3>
                  <button className="border-b-[1.5px] border-white pb-3 text-white font-['Manrope'] font-medium text-[16px] leading-[24px] text-left hover:border-[#d95143] transition-colors w-fit">
                    Mulai percakapan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-[#f9f6f1] py-10 lg:py-20 px-6 lg:px-20">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-10 lg:gap-20">
            <h2 className="font-['Young_Serif'] font-semibold text-[28px] leading-[33.6px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-black text-center">
              In Every Moment
            </h2>
            
            {/* Carousel Container */}
            <div className="flex flex-col gap-6 overflow-hidden lg:gap-10">
              {/* Images */}
              <div className="flex gap-4 overflow-hidden">
                <div 
                  className="flex gap-4 transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}
                >
                  {carouselImages.map((item, index) => (
                    <div key={index} className="relative h-[470px] lg:h-[600px] w-[320px] lg:w-[400px] flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#222222]" />
                      <div className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8">
                        <p className="font-['Manrope'] font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-white">
                          {item.alt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex items-center justify-center gap-6 px-0 lg:px-40">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 flex items-center justify-center opacity-[0.08] lg:opacity-50 hover:opacity-100 transition-opacity"
                  aria-label="Previous slide"
                >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M18.75 22.5L11.25 15L18.75 7.5" stroke="#8c3128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <p className="font-['Young_Serif'] font-semibold text-[24px] leading-[36px] text-[#ebe4d4]">
                  {currentSlide + 1} / {carouselImages.length}
                </p>
                <button 
                  onClick={nextSlide}
                  className="flex items-center justify-center w-10 h-10 transition-opacity hover:opacity-80"
                  aria-label="Next slide"
                >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M11.25 7.5L18.75 15L11.25 22.5" stroke="#8c3128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-[#a8382d] h-auto lg:h-[608px] flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-end p-6 pt-20 lg:p-20 overflow-hidden relative gap-10 lg:gap-0">
          {/* Background Image */}
          <div className="relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 h-[400px] lg:h-[448px] w-full lg:w-[600px] overflow-hidden order-1 lg:order-none">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=896&fit=crop"
              alt="Begin Your Stay"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="w-full lg:w-[400px] flex flex-col gap-10 lg:gap-40 z-10 relative order-2 lg:order-none pb-6 lg:pb-0">
            <h3 className="font-['Young_Serif'] font-semibold text-[28px] leading-[33.6px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-white">
              Begin Your Stay
            </h3>
            <div className="flex flex-col gap-6 lg:gap-4">
              <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#f6f6f6]">
                Setiap perjalanan dimulai dengan percakapan. Kami dengan senang hati membantu Anda menemukan cara terbaik untuk menikmati waktu 
                di Villa De La Tina sesuai ritme dan kebutuhan Anda.
              </p>
              <button className="border-b-[1.5px] border-white pb-3 text-white font-['Manrope'] font-medium text-[16px] leading-[24px] text-left hover:border-[#d95143] transition-colors w-fit">
                Mulai percakapan
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
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
                    <Link href="/penginapan" className="font-['Manrope'] font-medium text-[14px] leading-[21px] text-[#f9f6f1] hover:text-white transition-colors">
                      Penginapan
                    </Link>
                    <Link href="/event-venue" className="font-['Manrope'] font-medium text-[14px] leading-[21px] text-[#f9f6f1] hover:text-white transition-colors">
                      Event & Venue
                    </Link>
                  </div>
                </div>
                
                {/* Beyond the Stay */}
                <div className="flex flex-col gap-4 w-full lg:w-[240px]">
                  <p className="font-['Manrope'] font-medium text-[14px] leading-[21px] text-[#f3b4ae]">Beyond the Stay</p>
                  <div className="flex flex-col gap-2">
                    <Link href="/twc" className="font-['Manrope'] font-medium text-[14px] leading-[21px] text-[#f9f6f1] hover:text-white transition-colors">
                      Tina Wiryawati Center
                    </Link>
                    <Link href="/about" className="font-['Manrope'] font-medium text-[14px] leading-[21px] text-[#f9f6f1] hover:text-white transition-colors">
                      Tentang Kami
                    </Link>
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
      </main>
    </>
  );
}
