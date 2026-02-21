import React from 'react';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';

/**
 * Bridging section - Connect with Tina Wiryawati on social media
 */
export const BridgingSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/tina_wiryawati/',
      icon: Instagram,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/tina.wiryawati.5102/',
      icon: Facebook,
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@tinawiryawati',
      icon: null, // Will use SVG for TikTok
    },
  ];

  return (
    <section className="bg-[#a8382d] flex flex-col items-center overflow-hidden py-10 md:py-10 lg:py-20 px-6 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-start w-full max-w-[1152px] gap-10 md:gap-10 lg:gap-20">
        {/* Image - Top on mobile/tablet, Right on desktop */}
        <div className="w-full lg:hidden h-[400px] md:h-[495px] relative overflow-hidden order-1">
          <Image
            src="/images/tina-wiryawati-center/contact.webp"
            alt="Tina Wiryawati"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col flex-1 order-2 gap-10 lg:order-1">
          <div className="flex flex-col gap-6">
            <h2 className="font-['Young_Serif'] leading-[33.6px] md:leading-[43.2px] lg:leading-[48px] text-white text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px]">
              Tetap Terhubung Bersama Tina Wiryawati
            </h2>
            <div className="flex flex-col gap-1">
              <p className="font-normal leading-6 md:leading-[27px] lg:leading-[30px] text-[#d1d1d1] text-base md:text-lg lg:text-xl tracking-[-0.4px]">
                Sebagian pemikiran dan aktivitas Tina Wiryawati dibagikan juga melalui kanal pribadinya.
              </p>
              <p className="font-normal leading-6 md:leading-[27px] lg:leading-[30px] text-[#d1d1d1] text-base md:text-lg lg:text-xl tracking-[-0.4px]">
                Ikuti perjalanannya lebih dekat, Anda dapat menemukannya di media berikut.
              </p>
            </div>
          </div>

          {/* Social Media Buttons */}
          <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Instagram */}
            <a
              href={socialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-[1.5px] border-white flex items-center justify-center gap-1.5 px-5 py-3 text-white hover:bg-white hover:text-[#a8382d] transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-medium text-base leading-6 tracking-[-0.5px]">
                Instagram
              </span>
            </a>

            {/* Facebook */}
            <a
              href={socialLinks[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-[1.5px] border-white flex items-center justify-center gap-1.5 px-5 py-3 text-white hover:bg-white hover:text-[#a8382d] transition-colors duration-200"
            >
              <Facebook className="w-5 h-5" />
              <span className="font-medium text-base leading-6 tracking-[-0.5px]">
                Facebook
              </span>
            </a>

            {/* TikTok */}
            <a
              href={socialLinks[2].url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-[1.5px] border-white flex items-center justify-center gap-1.5 px-5 py-3 text-white hover:bg-white hover:text-[#a8382d] transition-colors duration-200 col-span-2 lg:col-span-1"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3906 0C12.5195 1.06445 12.9844 2.51172 14.3633 3.47656C15.3281 4.17188 16.6289 4.42188 17 4.5V8.01953C15.8203 8.10938 14.4844 7.83594 13.3008 7.09375C12.8125 6.78516 12.3906 6.4375 12.0352 6.07031V13.2773C12.0352 13.9219 11.957 15.6602 10.9375 17.082C10.1289 18.207 8.99609 18.9648 8.67188 19.1758C7.77734 19.75 6.79297 20 6.25 20C5.92578 20 4.61719 19.9648 3.28516 19.0625C2.42969 18.4688 1.78125 17.6836 1.375 17.1016C0.414062 15.7305 0.257812 14.3125 0.25 13.9375V13.8672C0.289062 13.0156 0.515625 11.9141 1.17969 10.8203C1.6875 9.98828 2.32422 9.42578 2.82812 9.00391C3.92969 8.10156 5.10156 7.76953 5.76562 7.63281C6.13281 7.5625 6.85156 7.44922 7.625 7.71094V11.3398C7.45312 11.2578 7.28906 11.207 7.17188 11.1797C6.80469 11.0938 6.44531 11.0781 6.20312 11.0859C5.97656 11.1016 5.62891 11.1289 5.24219 11.3281C4.74219 11.5859 4.41406 11.9531 4.24219 12.125C3.97266 12.4062 3.73438 12.7422 3.57031 13.1133C3.37891 13.5547 3.32812 13.9453 3.3125 14.1328C3.29688 14.3516 3.26562 14.9141 3.51562 15.5586C3.64453 15.8906 3.79688 16.1328 3.92188 16.3047C4.42969 17.0234 5.07031 17.3906 5.33594 17.5391C5.85938 17.8203 6.38281 17.8828 6.64062 17.8906C7.05469 17.8906 7.45312 17.7891 7.61719 17.7344C8.30469 17.5234 8.78125 17.125 8.94922 17C9.15234 16.8359 9.66797 16.3984 10.0586 15.6836C10.3906 15.0938 10.4805 14.4805 10.5 14.2266V0H12.3906Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-medium text-base leading-6 tracking-[-0.5px]">
                TikTok
              </span>
            </a>
          </div>
        </div>

        {/* Image - Desktop only (right side) */}
        <div className="hidden lg:block w-[484px] h-[406px] relative overflow-hidden shrink-0 order-2">
          <Image
            src="/images/tina-wiryawati-center/contact.webp"
            alt="Tina Wiryawati"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};
