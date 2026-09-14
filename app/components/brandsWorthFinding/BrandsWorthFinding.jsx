"use client";

import Image from "next/image";
import Button from "../button/Button";
import homeGrid from "../../../assets/icons/homeGrid.svg";

export default function BrandsWorthFinding() {
  return (
    <section className="relative w-full max-w-[1512px] mx-auto px-4 sm:px-12 lg:px-20 py-12 lg:py-24 flex flex-col gap-8 lg:gap-16 text-[#F4F1E9]">
      {/* Section Header */}
      <div className="w-full max-w-[1312px] mx-auto flex flex-col gap-3">
        <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold font-['Oswald'] leading-tight uppercase tracking-tight text-[#F4F1E9]">
          WE MAKE <span className="text-[#D3533D]">BRANDS WORTH</span> FINDING.
        </h2>
        <p className="text-[14px] sm:text-[16px] leading-[22px] font-['Satoshi',sans-serif] font-normal text-[#F4F1E9] opacity-90">
          Everything your brand needs to show up properly.
        </p>
      </div>

      {/* Grid Container with homeGrid.svg background overlay */}
      <div className="relative w-full max-w-[1312px] mx-auto">
        {/* Background SVG shape */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src={homeGrid}
            alt="Home Grid Background"
            className="w-full h-full object-fill"
            priority
          />
        </div>

        {/* 3 Rows x 2 Columns Text Overlay */}
        <div className="relative z-10 grid grid-cols-2 w-full">
          {/* Item 1: Left Cell (Red BG on homeGrid) */}
          <div className="w-full aspect-[656/600] flex flex-col justify-center items-center text-center p-3 sm:p-6 lg:p-14 gap-2 sm:gap-4 lg:gap-6">
            <h3 className="font-['Oswald'] font-bold text-[16px] xs:text-[18px] sm:text-[28px] lg:text-[42px] leading-tight uppercase text-[#F4F1E9]">
              CONTENT DIRECTION
            </h3>
            <p className="font-['Satoshi',sans-serif] font-medium text-[11px] xs:text-[12px] sm:text-[16px] lg:text-[22px] leading-[15px] sm:leading-[22px] lg:leading-[30px] text-[#F4F1E9] max-w-[488px]">
              We define how your brand looks, sounds and behaves, then turn that
              direction into the content pillars, formats and publishing system
              that move your business forward.
            </p>
          </div>

          {/* Item 2: Right Cell (Dark/Transparent BG on homeGrid) */}
          <div className="w-full aspect-[655/600] flex flex-col justify-center items-center text-center p-3 sm:p-6 lg:p-14 gap-2 sm:gap-4 lg:gap-6">
            <h3 className="font-['Oswald'] font-bold text-[16px] xs:text-[18px] sm:text-[28px] lg:text-[42px] leading-tight uppercase text-[#D3533D]">
              CREATOR NETWORK
            </h3>
            <p className="font-['Satoshi',sans-serif] font-medium text-[11px] xs:text-[12px] sm:text-[16px] lg:text-[22px] leading-[15px] sm:leading-[22px] lg:leading-[30px] text-[#F4F1E9] max-w-[488px]">
              We find the right people to bring your brand story to life. From
              creators and photographers to directors and talent, we match you
              with people who fit your brand.
            </p>
          </div>

          {/* Item 3: Left Cell (Dark/Transparent BG on homeGrid) */}
          <div className="w-full aspect-[655/600] flex flex-col justify-center items-center text-center p-3 sm:p-6 lg:p-14 gap-2 sm:gap-4 lg:gap-6">
            <h3 className="font-['Oswald'] font-bold text-[16px] xs:text-[18px] sm:text-[28px] lg:text-[42px] leading-tight uppercase text-[#D3533D]">
              PRODUCTION
            </h3>
            <p className="font-['Satoshi',sans-serif] font-medium text-[11px] xs:text-[12px] sm:text-[16px] lg:text-[22px] leading-[15px] sm:leading-[22px] lg:leading-[30px] text-[#F4F1E9] max-w-[488px]">
              We take your content from shoot to final cut. Reels, campaigns,
              photography, edits, and everything in between, all handled by one
              team and one clear direction.
            </p>
          </div>

          {/* Item 4: Right Cell (Red BG on homeGrid) */}
          <div className="w-full aspect-[656/600] flex flex-col justify-center items-center text-center p-3 sm:p-6 lg:p-14 gap-2 sm:gap-4 lg:gap-6">
            <h3 className="font-['Oswald'] font-bold text-[16px] xs:text-[18px] sm:text-[28px] lg:text-[42px] leading-tight uppercase text-[#F4F1E9]">
              ADVERTISING
            </h3>
            <p className="font-['Satoshi',sans-serif] font-medium text-[11px] xs:text-[12px] sm:text-[16px] lg:text-[22px] leading-[15px] sm:leading-[22px] lg:leading-[30px] text-[#F4F1E9] max-w-[488px]">
              We make the ads: concepts, scripts, static, video built from a
              position, not a brief. And then we handle the media too, on Meta,
              Google, wherever your buyers actually are.
            </p>
          </div>

          {/* Item 5: Left Cell (Red BG on homeGrid) */}
          <div className="w-full aspect-[656/600] flex flex-col justify-center items-center text-center p-3 sm:p-6 lg:p-14 gap-2 sm:gap-4 lg:gap-6">
            <h3 className="font-['Oswald'] font-bold text-[16px] xs:text-[18px] sm:text-[28px] lg:text-[42px] leading-tight uppercase text-[#F4F1E9]">
              BRANDING & DIGITAL PRESENCE
            </h3>
            <p className="font-['Satoshi',sans-serif] font-medium text-[11px] xs:text-[12px] sm:text-[16px] lg:text-[22px] leading-[15px] sm:leading-[22px] lg:leading-[30px] text-[#F4F1E9] max-w-[488px]">
              We get you one identity that travels. Built once, then carried
              everywhere your brand shows up, from your website to your socials.
            </p>
          </div>

          {/* Item 6: Right Cell (Dark/Transparent BG on homeGrid) */}
          <div className="w-full aspect-[655/600] flex flex-col justify-center items-center text-center p-3 sm:p-6 lg:p-14 gap-2 sm:gap-4 lg:gap-6">
            <h3 className="font-['Oswald'] font-bold text-[16px] xs:text-[18px] sm:text-[28px] lg:text-[42px] leading-tight uppercase text-[#D3533D]">
              DISTRIBUTION & GROWTH
            </h3>
            <p className="font-['Satoshi',sans-serif] font-medium text-[11px] xs:text-[12px] sm:text-[16px] lg:text-[22px] leading-[15px] sm:leading-[22px] lg:leading-[30px] text-[#F4F1E9] max-w-[488px]">
              We make your work travel. Organic distribution, paid
              amplification, and creator seeding designed to turn good content
              into reach, recognition, and demand.
            </p>
          </div>
        </div>
      </div>

      {/* Action Button at bottom */}
      <div className="w-full max-w-[1312px] mx-auto flex justify-center pt-4">
        <Button showArrow={true}>See everything we do</Button>
      </div>
    </section>
  );
}
