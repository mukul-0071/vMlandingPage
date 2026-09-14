"use client";

import React from "react";
import Image from "next/image";
import Button from "../button/Button";

import themeEllipse from "../../../assets/icons/themeEllipse.svg";
import whiteEllipse from "../../../assets/icons/whiteEllipse.svg";

export default function WayWeWork() {
  return (
    <section className="relative w-full max-w-[1512px] mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col gap-12 lg:gap-16 text-[#F4F1E9]">
      <div className="w-full max-w-[1312px] mx-auto">
        <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold font-['Oswald'] leading-tight uppercase tracking-tight text-[#F4F1E9]">
          THE WAY WE WORK
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-[1312px] mx-auto">
        {/* Card 1 */}
        <div className="w-full h-auto min-h-[520px] lg:h-[600px] bg-[#D3533D] p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden text-[#F4F1E9] border border-[#D3533D] shadow-xl">
          <div className="flex flex-row justify-between items-center w-full text-[12px] font-['Satoshi',sans-serif]">
            <span className="font-bold uppercase tracking-wider text-[#F4F1E9]">
              Audience
            </span>
            <span className="font-normal uppercase tracking-wider text-[#F4F1E9] opacity-90">
              PORTRAIT
            </span>
          </div>

          <div className="relative w-full bg-[#F4F4F5] p-6 sm:p-8 border border-[#D4D4D8] my-auto overflow-hidden shadow-inner text-[#000000] flex flex-col gap-5">
            <h3 className="relative z-10 font-['Satoshi',sans-serif] font-normal text-[22px] leading-[30px] text-[#000000] max-w-[240px]">
              We find out who's actually buying, before we touch anything else.
            </h3>

            <ul className="relative z-10 flex flex-col gap-1 sm:gap-1.5 font-['Satoshi',sans-serif] font-bold text-[20px] leading-[27px] text-[#D3533D] max-w-[240px]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                Business model
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                Who buys
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                Why they buy
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                What's getting in the way
              </li>
            </ul>
          </div>

          <div className="w-[120px] h-[8px] bg-[#F4F1E9] opacity-50 rounded-[4px] mt-2"></div>
        </div>

        <div className="w-full flex flex-col gap-6 lg:gap-8 justify-between lg:h-[600px]">
          {/* Card 2 */}
          <div className="w-full h-auto min-h-[284px] bg-[#F4F1E9] p-6 lg:p-7 flex flex-col justify-between text-[#101010] border border-[#F4F1E9] shadow-xl">
            <div className="flex flex-row justify-between items-center w-full font-['Inter',sans-serif] text-[12px] font-semibold text-[#101010]">
              <span>Forecast</span>
              <span className="w-2.5 h-2.5 bg-[#D3533D]"></span>
            </div>

            <h3 className="font-['Satoshi',sans-serif] font-normal text-[18px] sm:text-[20px] leading-[25px] sm:leading-[27px] text-[#000000] my-3">
              We model the demand before we spend a dirham making or promoting
              anything.
            </h3>

            <ul className="flex flex-col gap-1 font-['Satoshi',sans-serif] font-bold text-[15px] sm:text-[18px] leading-[24px] sm:leading-[27px] text-[#D3533D] mb-3">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                What's worth making
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                Expected reach
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                Budget modeling
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                Where the return comes from
              </li>
            </ul>

            <div className="w-[180px] h-[8px] bg-[#D3533D] rounded-[4px]"></div>
          </div>

          {/* Card 3 */}
          <div className="w-full h-auto min-h-[284px] bg-[#F4F1E9] p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden text-[#101010] border border-[#F4F1E9] shadow-xl">
            <div className="flex flex-row justify-between items-center w-full font-['Inter',sans-serif] text-[12px] font-semibold text-[#101010]">
              <span>Strategy</span>
            </div>

            <h3 className="font-['Satoshi',sans-serif] font-normal text-[18px] sm:text-[20px] leading-[25px] sm:leading-[27px] text-[#000000] my-3 relative z-10">
              We decide how the brand looks, sounds, and behaves — before a
              camera ever rolls.
            </h3>

            <ul className="flex flex-col gap-1 font-['Satoshi',sans-serif] font-bold text-[15px] sm:text-[18px] leading-[24px] sm:leading-[27px] text-[#D3533D] mb-3 relative z-10">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                Positioning
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                Art direction
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                Voice
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                Visual language
              </li>
            </ul>

            <div className="absolute -bottom-10 -right-10 pointer-events-none z-0">
              <Image
                src={themeEllipse}
                alt="Theme Ellipse Accent"
                className="w-[154px] h-[154px] object-contain opacity-80"
              />
            </div>

            <div className="w-[140px] h-[8px] bg-[#D3533D] rounded-[4px] relative z-10"></div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 lg:gap-8 justify-between lg:h-[600px]">
          {/* Card 4 */}
          <div className="w-full h-auto min-h-[257px] bg-[#F4F1E9] p-6 lg:p-7 flex flex-col justify-between text-[#101010] border border-[#F4F1E9] shadow-xl">
            <div className="flex flex-row justify-between items-center w-full font-['Inter',sans-serif] text-[12px] font-semibold text-[#101010]">
              <span>Distribution</span>
            </div>

            <h3 className="font-['Satoshi',sans-serif] font-normal text-[18px] sm:text-[20px] leading-[25px] sm:leading-[27px] text-[#000000] my-3">
              We decide where this lives before we build it, not after.
            </h3>

            <ul className="flex flex-col gap-1 font-['Satoshi',sans-serif] font-bold text-[15px] sm:text-[18px] leading-[24px] sm:leading-[27px] text-[#D3533D] mb-3">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                Organic
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                Paid
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                Platforms
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3533D]"></span>
                Creator seeding
              </li>
            </ul>

            <div className="w-[100px] h-[8px] bg-[#662920] rounded-[4px]"></div>
          </div>

          {/* Card 5 */}
          <div className="w-full h-auto min-h-[311px] bg-[#D3533D] p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden text-[#F4F1E9] border border-[#D3533D] shadow-xl">
            <div className="flex flex-row justify-between items-center w-full font-['Satoshi',sans-serif] text-[12px] font-bold text-[#F4F1E9] relative z-10">
              <span>Start</span>
            </div>

            <h3 className="font-['Satoshi',sans-serif] font-normal text-[18px] sm:text-[20px] leading-[25px] sm:leading-[27px] text-[#F4F1E9] my-3 relative z-10">
              Then we bring in the right people, and make it real.
            </h3>

            <ul className="flex flex-col gap-1 font-['Satoshi',sans-serif] font-bold text-[15px] sm:text-[18px] leading-[24px] sm:leading-[27px] text-[#F4F1E9] mb-3 relative z-10">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1E9]"></span>
                Organic
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1E9]"></span>
                Paid
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1E9]"></span>
                Platforms
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1E9]"></span>
                Creator seeding
              </li>
            </ul>

            <div className="absolute -top-12 -right-12 pointer-events-none z-0">
              <Image
                src={whiteEllipse}
                alt="White Ellipse Accent"
                className="w-[180px] h-[180px] object-contain opacity-80"
              />
            </div>

            <div className="w-[140px] h-[8px] bg-[#662920] rounded-[4px] relative z-10"></div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1312px] mx-auto flex justify-start pt-4">
        <Button showArrow={true}>Book A Call</Button>
      </div>
    </section>
  );
}
