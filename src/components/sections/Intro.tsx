import React from 'react';

export default function Intro() {
  return (
    <section className="bg-[#f9f6f1] py-12 md:py-20 lg:py-[168px] px-6 md:px-8 lg:px-20 flex flex-col items-center justify-center">
      <div className="max-w-[1200px] flex flex-col md:gap-16 lg:gap-20 items-center justify-between">
        <h2 className="font-['Young_Serif'] font-semibold text-[24px] md:text-[32px] lg:text-[40px] leading-[28.8px] md:leading-[38.4px] lg:leading-[48px] tracking-[-1px] text-black text-center max-w-full">
          Di tengah lanskap hijau Kuningan, Villa De La Tina hadir sebagai ruang yang menyatu dengan alam, 
          tenang, terbuka, dan penuh kehadiran. Sebuah tempat di mana cahaya, udara, dan waktu bergerak dengan iramanya sendiri.
        </h2>
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 items-start justify-center w-full md:w-[600px] lg:w-[700px]">
          <p className="font-['Manrope'] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px] text-[#454545] text-center w-full">
            Setiap sudut di Villa De La Tina dirancang untuk memberi jarak dari hiruk pikuk, menghadirkan ketenangan yang terasa alami, 
            bukan sekadar tempat singgah, tetapi ruang untuk benar-benar tinggal, mendengarkan alam, dan kembali pada ritme yang lebih pelan.
          </p>
          <div className="relative flex items-center justify-center w-full h-9">
            <p
              className="text-[28px] md:text-[36px] lg:text-[45px] leading-[22px] md:leading-[28px] lg:leading-[35.2px] tracking-[-0.3px] text-[#8c3128] text-center transform md:-rotate-[3deg] lg:-rotate-[5deg]"
              style={{ fontFamily: "var(--font-family-script)" }}
            >
              selamat datang!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
