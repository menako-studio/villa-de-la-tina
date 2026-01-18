import React from 'react';

export default function Intro() {
  return (
    <section className="bg-[#f9f6f1] py-10 md:py-20 lg:py-[168px] px-6 md:px-10 lg:px-20 flex flex-col items-center justify-center">
      <div className="max-w-[1200px] w-full h-[580px] md:h-[580px] lg:h-[584px] flex flex-col gap-20 md:gap-[150px] lg:gap-20 items-center justify-center">
        <h2 className="font-['Young_Serif'] font-semibold text-[28px] md:text-[36px] lg:text-[40px] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] tracking-[-1px] text-black text-center max-w-full">
          Di tengah lanskap hijau Kuningan, Villa De La Tina hadir sebagai ruang yang<br className="hidden md:inline lg:inline" /> menyatu dengan alam, tenang, terbuka, dan<br className="hidden lg:inline" /> penuh kehadiran.
        </h2>
        <div className="flex flex-col gap-6 items-start justify-center w-full md:w-full lg:w-[700px]">
          <p className="font-['Manrope'] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px] tracking-[-0.4px] text-[#454545] text-center w-full">
            Sebagai villa healing Kuningan, Villa De La Tina terletak di Desa Puncak, Kabupaten Kuningan, di antara lanskap pegunungan dan hamparan perkebunan yang hijau. Cahaya pagi jatuh lembut di sela pepohonan, udara bergerak perlahan, dan hari-hari dijalani tanpa tergesa. Bukan sekadar tempat singgah, melainkan penginapan di Kuningan yang mengundang Anda untuk benar-benar tinggal dan kembali pada ritme yang lebih pelan.
          </p>
          <div className="relative flex items-center justify-center w-full h-9">
            <p
              className="text-[32px] md:text-[45px] lg:text-[45px] leading-[25.4px] md:leading-[35.2px] lg:leading-[35.2px] tracking-[-0.3px] text-[#8c3128] text-center transform -rotate-[5deg]"
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
