import React from 'react';
import FacilityCard from '../cards/FacilityCard';

const facilities = [
  {
    image: '/images/spa.webp',
    alt: 'Spa',
    category: 'SPA',
    title: 'Sebuah Ritual untuk Kembali Seimbang',
    description: 'Ruang perawatan yang sunyi dan tertutup, tempat tubuh diberi waktu untuk beristirahat sepenuhnya. Setiap sentuhan dilakukan dengan perhatian dan ketenangan.'
  },
  {
    image: '/images/sauna.webp',
    alt: 'Sauna',
    category: 'SAUNA',
    title: 'Kehangatan yang Menenangkan',
    description: 'Ruang hening untuk melepas penat, menghangatkan tubuh, dan menjernihkan pikiran, tanpa gangguan, tanpa agenda.',
    imageHeight: 'h-[400px] md:h-[400px] lg:h-[500px]'
  },
  {
    image: '/images/pool.webp',
    alt: 'Pool',
    category: 'KOLAM RENANG',
    title: 'Air, Cahaya, dan Keheningan',
    description: 'Kolam renang terbuka yang menghadap lanskap hijau. Pagi terasa lebih segar, sore berjalan lebih lambat.',
    imageHeight: 'h-[280px] md:h-[280px] lg:h-[320px]',
    containerWidth: 'w-full md:w-full lg:w-[470px]',
    marginLeft: 'md:ml-0 lg:ml-auto'
  },
  {
    image: '/images/moment-of-leisure.webp',
    alt: 'Moments of Leisure',
    category: 'MOMENTS OF LEISURE',
    title: 'Ruang untuk Berkumpul dan Menikmati Waktu',
    description: 'Ketika hari bergeser ke malam, ruang berubah menjadi tempat berkumpul. Api yang menyala perlahan, tawa yang mengisi udara, dan waktu yang dibiarkan mengalir apa adanya.',
    imageHeight: 'h-[300px] md:h-[300px] lg:h-[400px]'
  },
  {
    image: '/images/cabin.webp',
    alt: 'Cabin',
    category: 'CABIN',
    title: 'Ruang Tinggal yang Lebih Intim',
    description: 'Cabin di Villa De La Tina menawarkan pengalaman menginap yang lebih personal, terpisah, tenang, dan dekat dengan alam. Sebuah pilihan bagi mereka yang menginginkan privasi yang lebih dalam.',
    imageHeight: 'h-[500px] md:h-[500px] lg:h-[600px]'
  }
];

export default function Facilities() {
  return (
    <section className="bg-[#f9f6f1] py-10 md:py-16 lg:py-20 px-6 md:px-8 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 md:gap-12 lg:gap-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center md:gap-8 lg:gap-10">
          <h2 className="font-['Young_Serif'] text-[28px] md:text-[36px] lg:text-[40px] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] tracking-[-1px] text-black">
            Dirancang untuk Memulihkan dan<br />Dijalani dengan Tenang
          </h2>
          <p className="font-['Manrope'] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px] text-[#454545] max-w-full lg:max-w-[700px]">
            Di Villa De La Tina, setiap fasilitas hadir sebagai bagian dari pengalaman tinggal. Sebagai salah satu penginapan di Kuningan yang berfokus pada ketenangan dan pemulihan, ruang-ruang ini dirancang untuk dirasakan, bukan dipamerkan.
          </p>
        </div>
        
        {/* Facilities Grid */}
        <div className="flex flex-col justify-center gap-10 md:flex-row md:gap-8 lg:gap-20">
          {/* Left Column */}
          <div className="flex flex-col gap-10 md:gap-8 lg:gap-10 w-full md:w-[50%] ">
            {/* SPA */}
            <FacilityCard {...facilities[0]} />
            
            {/* Pool */}
            <FacilityCard {...facilities[2]} />
            
            {/* Moments of Leisure */}
            <FacilityCard {...facilities[3]} />
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-10 md:gap-8 lg:gap-10 w-full md:w-[50%] lg:w-[410px]">
            {/* Sauna */}
            <FacilityCard {...facilities[1]} />
            
            {/* Cabin */}
            <FacilityCard {...facilities[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
