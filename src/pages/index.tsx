import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
          <div className="max-w-[1200px] mx-auto px-[60px] py-4 flex items-center justify-between">
            {/* Left Links */}
            <div className="flex items-center gap-6">
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
            
            {/* Right Links */}
            <div className="flex items-center gap-6">
              <Link href="/twc" className="text-[#222] font-['Manrope'] font-medium text-[18px] hover:text-[#d95143] transition-colors">
                TWC
              </Link>
              <Link href="/about" className="text-[#222] font-['Manrope'] font-medium text-[18px] hover:text-[#d95143] transition-colors">
                Tentang Kami
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[600px] flex flex-col items-center justify-center overflow-hidden pt-[148px]">
          {/* Background Video/Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
              alt="Nature background"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#222222]" />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center gap-6 px-[120px] max-w-[700px]">
            <h1 className="font-['Young_Serif'] font-semibold text-[56px] leading-[67.2px] tracking-[-2px] text-white text-center">
              A Private Retreat in<br />the Heart of Nature
            </h1>
            <div className="flex flex-col items-center gap-6 w-full">
              <p className="font-['Manrope'] font-normal text-[20px] leading-[30px] tracking-[-0.4px] text-[#d1d1d1] text-center">
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
        <section className="bg-[#f9f6f1] py-[168px] px-20 flex flex-col items-center justify-center">
          <div className="max-w-[1200px] flex flex-col h-[584px] items-center justify-between">
            <h2 className="font-['Young_Serif'] font-semibold text-[40px] leading-[48px] tracking-[-1px] text-black text-center max-w-full">
              Di tengah lanskap hijau Kuningan, Villa De La Tina hadir sebagai ruang yang menyatu dengan alam, 
              tenang, terbuka, dan penuh kehadiran. Sebuah tempat di mana cahaya, udara, dan waktu bergerak dengan iramanya sendiri.
            </h2>
            <div className="flex flex-col gap-6 items-start justify-center w-[700px]">
              <p className="font-['Manrope'] font-normal text-[20px] leading-[30px] tracking-[-0.4px] text-[#454545] text-center w-full">
                Setiap sudut di Villa De La Tina dirancang untuk memberi jarak dari hiruk pikuk, menghadirkan ketenangan yang terasa alami, 
                bukan sekadar tempat singgah, tetapi ruang untuk benar-benar tinggal, mendengarkan alam, dan kembali pada ritme yang lebih pelan.
              </p>
              <div className="h-9 relative w-full flex items-center justify-center">
                <p className="font-['Adventures_Unlimited_Script'] text-[45px] leading-[35.2px] tracking-[-0.3px] text-[#8c3128] text-center transform -rotate-[5deg]">
                  selamat datang!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="bg-[#f9f6f1] py-20 px-20">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
            {/* Header */}
            <div className="flex flex-col gap-10 items-center text-center">
              <h2 className="font-['Young_Serif'] font-semibold text-[40px] leading-[48px] tracking-[-1px] text-black">
                Dirancang untuk Memulihkan dan<br />Dijalani dengan Tenang
              </h2>
              <p className="font-['Manrope'] font-normal text-[20px] leading-[30px] tracking-[-0.4px] text-[#454545] max-w-[700px]">
                Di Villa De La Tina, fasilitas bukan sekadar pelengkap. Ia hadir sebagai bagian dari pengalaman yang menyatu dengan alam, 
                menyelaraskan tubuh dan pikiran, tanpa perlu berlebihan.
              </p>
            </div>
            
            {/* Facilities Grid */}
            <div className="flex gap-20">
              {/* Left Column */}
              <div className="flex flex-col gap-20 w-[550px]">
                {/* SPA */}
                <div className="flex flex-col gap-10">
                  <div className="h-[400px] overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1100&h=800&fit=crop"
                      alt="Spa"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <p className="font-['Manrope'] font-medium text-[16px] leading-[24px] text-black">SPA</p>
                      <h3 className="font-['Young_Serif'] font-medium text-[24px] leading-[36px] tracking-[-0.4px] text-[#d95143]">
                        Sebuah Ritual untuk Kembali Seimbang
                      </h3>
                    </div>
                    <p className="font-['Manrope'] font-normal text-[20px] leading-[30px] tracking-[-0.4px] text-[#454545]">
                      Di ruang spa yang tenang dan tertutup, waktu seolah melambat. Sentuhan perawatan dilakukan dengan ritme yang lembut, 
                      memberi kesempatan bagi tubuh untuk benar-benar beristirahat dan melepaskan lelah yang tertinggal.
                    </p>
                  </div>
                </div>
                
                {/* Pool */}
                <div className="flex flex-col gap-10 w-[470px] ml-auto">
                  <div className="h-[320px] overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=940&h=640&fit=crop"
                      alt="Pool"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <p className="font-['Manrope'] font-medium text-[16px] leading-[24px] text-black">KOLAM RENANG</p>
                      <h3 className="font-['Young_Serif'] font-medium text-[24px] leading-[36px] tracking-[-0.4px] text-[#d95143]">
                        Air, Cahaya, dan Keheningan
                      </h3>
                    </div>
                    <p className="font-['Manrope'] font-normal text-[20px] leading-[30px] tracking-[-0.4px] text-[#454545]">
                      Kolam renang terbuka menghadap alam, dikelilingi lanskap hijau yang menenangkan. Di sini, setiap pagi terasa lebih segar, 
                      dan sore berjalan lebih lambat sehingga mengundang Anda untuk menikmati waktu lebih lama.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Sauna */}
              <div className="flex flex-col w-[410px]">
                <div className="flex flex-col gap-10">
                  <div className="h-[600px] overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=820&h=1200&fit=crop"
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
        <section className="bg-[#f9f6f1] py-20 px-20">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
            {/* Header */}
            <div className="flex flex-col gap-10 items-center text-center">
              <h2 className="font-['Young_Serif'] font-semibold text-[40px] leading-[48px] tracking-[-1px] text-black">
                Ruang untuk Menetap Lebih Lama
              </h2>
              <p className="font-['Manrope'] font-normal text-[20px] leading-[30px] tracking-[-0.4px] text-[#454545] max-w-[700px]">
                Villa De La Tina menghadirkan rangkaian pengalaman menginap yang dirancang dengan ritme yang tenang. 
                Setiap paket bukan sebuah agenda, melainkan undangan untuk tinggal, merasakan, dan membiarkan hari berjalan apa adanya.
              </p>
            </div>
            
            {/* Packages */}
            <div className="flex flex-col gap-10">
              {/* Package 1 */}
              <div className="flex">
                <div className="h-[750px] w-[700px] relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1400&h=1500&fit=crop"
                    alt="Private Healing Stay"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#fbe7e5] w-[340px] p-10 flex flex-col gap-40 justify-center">
                  <h3 className="font-['Young_Serif'] font-medium text-[24px] leading-[36px] tracking-[-0.4px] text-[#d95143]">
                    Private Healing Stay
                  </h3>
                  <div className="flex flex-col gap-6">
                    <p className="font-['Manrope'] font-normal text-[20px] leading-[30px] tracking-[-0.4px] text-[#454545]">
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
              <div className="flex">
                <div className="bg-[#ebe4d4] w-[340px] p-10 flex flex-col gap-40 justify-center">
                  <h3 className="font-['Young_Serif'] font-medium text-[24px] leading-[36px] tracking-[-0.4px] text-[#d95143]">
                    Wellness Retreat
                  </h3>
                  <div className="flex flex-col gap-6">
                    <p className="font-['Manrope'] font-normal text-[20px] leading-[30px] tracking-[-0.4px] text-[#454545]">
                      Rangkaian hari yang dijalani dengan tenang dan digabungkan dengan waktu istirahat, perawatan, dan kehadiran penuh dalam setiap momen. 
                      Sebuah cara lembut untuk kembali pada keseimbangan.
                    </p>
                    <button className="bg-[#d95143] px-4 py-2.5 text-white font-['Manrope'] font-medium text-[14px] leading-[21px] hover:bg-[#a8382d] transition-colors">
                      Pelajari lebih lanjut
                    </button>
                  </div>
                </div>
                <div className="h-[750px] w-[700px] relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&h=1500&fit=crop"
                    alt="Wellness Retreat"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Package 3 */}
              <div className="flex">
                <div className="h-[750px] w-[700px] relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=1400&h=1500&fit=crop"
                    alt="Small Group Retreat"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#fbe7e5] w-[340px] p-10 flex flex-col gap-40 justify-center">
                  <h3 className="font-['Young_Serif'] font-medium text-[24px] leading-[36px] tracking-[-0.4px] text-[#d95143]">
                    Small Group Retreat
                  </h3>
                  <div className="flex flex-col gap-6">
                    <p className="font-['Manrope'] font-normal text-[20px] leading-[30px] tracking-[-0.4px] text-[#454545]">
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
              <div className="bg-[#a8382d] h-[608px] flex items-center justify-end p-20 overflow-hidden relative">
                {/* Background Image */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[448px] w-[600px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=896&fit=crop"
                    alt="Gentle CTA"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="w-[400px] flex flex-col justify-between z-10 relative">
                  <h3 className="font-['Young_Serif'] font-semibold text-[40px] leading-[48px] tracking-[-1px] text-white mb-40">
                    Setiap pengalaman dirancang personal dan menyesuaikan kebutuhan serta ritme Anda.
                  </h3>
                  <button className="border-b-[1.5px] border-white pb-3 text-white font-['Manrope'] font-medium text-[16px] leading-[24px] text-left hover:border-[#d95143] transition-colors">
                    Mulai percakapan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-[#f9f6f1] py-20 px-20">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
            <h2 className="font-['Young_Serif'] font-semibold text-[40px] leading-[48px] tracking-[-1px] text-black text-center">
              In Every Moment
            </h2>
            
            {/* Carousel Container */}
            <div className="flex flex-col gap-10 overflow-hidden">
              {/* Images */}
              <div className="flex gap-4 overflow-hidden">
                <div 
                  className="flex gap-4 transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 416}px)` }}
                >
                  {carouselImages.map((item, index) => (
                    <div key={index} className="relative h-[600px] w-[400px] flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#222222]" />
                      <div className="absolute bottom-8 left-8">
                        <p className="font-['Manrope'] font-normal text-[20px] leading-[30px] text-white">
                          {item.alt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex items-center justify-center gap-6 px-40">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
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
                  className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
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
        <section className="bg-[#a8382d] h-[608px] flex items-center justify-end p-20 overflow-hidden relative">
          {/* Background Image */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[448px] w-[600px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=896&fit=crop"
              alt="Begin Your Stay"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="w-[400px] flex flex-col gap-40 z-10 relative">
            <h3 className="font-['Young_Serif'] font-semibold text-[40px] leading-[48px] tracking-[-1px] text-white">
              Begin Your Stay
            </h3>
            <div className="flex flex-col gap-4">
              <p className="font-['Manrope'] font-normal text-[20px] leading-[30px] tracking-[-0.4px] text-[#f6f6f6]">
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
        <footer className="bg-[#a8382d] py-20 px-40">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-40">
            {/* Footer Content */}
            <div className="flex flex-col gap-10">
              <div className="h-px w-[880px] bg-white/20" />
              <div className="flex gap-20 justify-center">
                {/* Explore */}
                <div className="flex flex-col gap-4 w-[240px]">
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
                <div className="flex flex-col gap-4 w-[240px]">
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
                <div className="flex flex-col gap-10 w-[240px]">
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
