import React from 'react';
import PackageCard from '../cards/PackageCard';
import CTACard from '../cards/CTACard';

const packages = [
  {
    image: '/images/private-healing-stay.webp',
    alt: 'Private Healing Stay',
    title: 'Private Healing Stay',
    description: 'Sebuah pengalaman menginap yang tenang dan personal, memberi ruang bagi tubuh dan pikiran untuk beristirahat tanpa gangguan. Dirancang bagi mereka yang mencari keheningan, privasi, dan jeda yang utuh.',
    backgroundColor: 'bg-[#fbe7e5]'
  },
  {
    image: '/images/wellness-retreat.webp',
    alt: 'Wellness Retreat',
    title: 'Wellness Retreat',
    description: 'Rangkaian hari yang dijalani dengan tenang dan digabungkan dengan waktu istirahat, perawatan, dan kehadiran penuh dalam setiap momen. Sebuah cara lembut untuk kembali pada keseimbangan.',
    backgroundColor: 'bg-[#ebe4d4]',
    reversed: true
  },
  {
    image: '/images/small-group-retreat.webp',
    alt: 'Small Group Retreat',
    title: 'Small Group Retreat',
    description: 'Untuk kelompok kecil yang ingin berkumpul dalam suasana yang intim dan tenang. Ruang yang memungkinkan kebersamaan tumbuh, tanpa kehilangan rasa privat dan kedalaman pengalaman.',
    backgroundColor: 'bg-[#fbe7e5]'
  }
];

export default function Packages() {
  return (
    <section className="bg-[#f9f6f1] py-10 lg:py-20 px-6 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 lg:gap-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center lg:gap-10">
          <h2 className="font-['Young_Serif'] text-[28px] leading-[33.6px] lg:text-[40px] lg:leading-[48px] tracking-[-1px] text-black">
            Ruang untuk Menetap Lebih Lama
          </h2>
          <p className="font-['Manrope'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] tracking-[-0.4px] text-[#454545] max-w-full lg:max-w-[700px]">
            Villa De La Tina menghadirkan rangkaian pengalaman menginap yang dirancang dengan ritme yang tenang. 
            Setiap paket bukan sebuah agenda, melainkan undangan untuk tinggal, merasakan, dan membiarkan hari berjalan apa adanya.
          </p>
        </div>
        
        {/* Packages */}
        <div className="flex flex-col gap-6 lg:gap-10">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
          
          {/* CTA Card */}
          <CTACard 
            image="/images/cta.webp"
            title="Setiap pengalaman dirancang personal dan menyesuaikan kebutuhan serta ritme Anda."
            buttonText="Mulai percakapan"
          />
        </div>
      </div>
    </section>
  );
}
