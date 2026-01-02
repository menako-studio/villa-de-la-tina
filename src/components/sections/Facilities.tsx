import React from 'react';
import FacilityCard from '../cards/FacilityCard';

const facilities = [
  {
    image: '/images/spa.webp',
    alt: 'Spa',
    category: 'SPA',
    title: 'Sebuah Ritual untuk Kembali Seimbang',
    description: 'Di ruang spa yang tenang dan tertutup, waktu seolah melambat. Sentuhan perawatan dilakukan dengan ritme yang lembut, memberi kesempatan bagi tubuh untuk benar-benar beristirahat dan melepaskan lelah yang tertinggal.'
  },
  {
    image: '/images/sauna.webp',
    alt: 'Sauna',
    category: 'SAUNA',
    title: 'Kehangatan yang Menenangkan',
    description: 'Sauna menjadi ruang hening untuk memulihkan diri, hangat, sunyi, dan intim. Sebuah jeda sederhana yang membantu tubuh bernapas lebih dalam, dan pikiran menjadi lebih jernih.',
    imageHeight: 'h-[500px] lg:h-[600px]'
  },
  {
    image: '/images/pool.webp',
    alt: 'Pool',
    category: 'KOLAM RENANG',
    title: 'Air, Cahaya, dan Keheningan',
    description: 'Kolam renang terbuka menghadap alam, dikelilingi lanskap hijau yang menenangkan. Di sini, setiap pagi terasa lebih segar, dan sore berjalan lebih lambat sehingga mengundang Anda untuk menikmati waktu lebih lama.',
    imageHeight: 'h-[300px] lg:h-[320px]',
    containerWidth: 'w-full lg:w-[470px]',
    marginLeft: 'lg:ml-auto'
  }
];

export default function Facilities() {
  return (
    <section className="bg-[#f9f6f1] py-10 md:py-16 lg:py-20 px-6 md:px-8 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 md:gap-12 lg:gap-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 text-center">
          <h2 className="font-['Young_Serif'] font-semibold text-[24px] md:text-[32px] lg:text-[40px] leading-[28.8px] md:leading-[38.4px] lg:leading-[48px] tracking-[-1px] text-black">
            Dirancang untuk Memulihkan dan<br className="hidden lg:block" /> Dijalani dengan Tenang
          </h2>
          <p className="font-['Manrope'] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px] text-[#454545] max-w-full lg:max-w-[700px]">
            Di Villa De La Tina, fasilitas bukan sekadar pelengkap. Ia hadir sebagai bagian dari pengalaman yang menyatu dengan alam, 
            menyelaraskan tubuh dan pikiran, tanpa perlu berlebihan.
          </p>
        </div>
        
        {/* Facilities Grid */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-20">
          {/* Left Column */}
          <div className="flex flex-col gap-10 md:gap-8 lg:gap-20 w-full md:w-[50%] lg:w-[550px]">
            {/* SPA */}
            <FacilityCard {...facilities[0]} />
            
            {/* Sauna - Mobile order */}
            <div className="md:hidden">
              <FacilityCard {...facilities[1]} />
            </div>

            {/* Pool */}
            <FacilityCard {...facilities[2]} />
          </div>
          
          {/* Right Column - Sauna - Tablet and Desktop only */}
          <div className="hidden md:flex flex-col md:w-[50%] lg:w-[410px]">
            <FacilityCard {...facilities[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
