"use client";

import React from "react";
import Button from "../button/Button";

export default function OurCreativeTalent() {
  return (
    <section className="relative w-full max-w-[1512px] mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col gap-12 lg:gap-16 text-[#F4F1E9]">
      {/* Section Title */}
      <div className="w-full max-w-[1312px] mx-auto">
        <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold font-['Oswald'] leading-tight uppercase tracking-tight text-[#F4F1E9]">
          OUR <span className="text-[#D3533D]">CREATIVE</span> TALENT
        </h2>
      </div>

      {/* Cards Grid (3 Cols on Desktop, Single Col on Mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-[1312px] mx-auto">
        {/* Card 1 */}
        <div className="w-full h-auto min-h-[520px] lg:h-[600px] bg-[#F4F1E9] p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden text-[#101010] border border-[#F4F1E9] shadow-xl">
          <div className="flex flex-row justify-between items-center w-full text-[12px] font-['Satoshi',sans-serif]">
            <span className="font-bold uppercase tracking-wider text-[#101010]">
              Audience
            </span>
            <span className="font-normal uppercase tracking-wider text-[#101010] opacity-80">
              PORTRAIT
            </span>
          </div>

          <div className="relative w-full h-[380px] sm:h-[400px] bg-[#D3533D] my-auto overflow-hidden shadow-md flex flex-col justify-between p-6"></div>

          <div className="w-[120px] h-[8px] bg-[#101010] opacity-30 rounded-[4px] mt-2"></div>
        </div>

        {/* Card 2 */}
        <div className="w-full h-auto min-h-[520px] lg:h-[600px] bg-[#F4F1E9] p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden text-[#101010] border border-[#F4F1E9] shadow-xl">
          <div className="flex flex-row justify-between items-center w-full text-[12px] font-['Satoshi',sans-serif]">
            <span className="font-bold uppercase tracking-wider text-[#101010]">
              Audience
            </span>
            <span className="font-normal uppercase tracking-wider text-[#101010] opacity-80">
              PORTRAIT
            </span>
          </div>

          <div className="relative w-full h-[380px] sm:h-[400px] bg-[#D3533D] my-auto overflow-hidden shadow-md flex flex-col justify-between p-6"></div>

          <div className="w-[120px] h-[8px] bg-[#101010] opacity-30 rounded-[4px] mt-2"></div>
        </div>

        {/* Card 3 */}
        <div className="w-full h-auto min-h-[520px] lg:h-[600px] bg-[#F4F1E9] p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden text-[#101010] border border-[#F4F1E9] shadow-xl">
          <div className="flex flex-row justify-between items-center w-full text-[12px] font-['Satoshi',sans-serif]">
            <span className="font-bold uppercase tracking-wider text-[#101010]">
              Audience
            </span>
            <span className="font-normal uppercase tracking-wider text-[#101010] opacity-80">
              PORTRAIT
            </span>
          </div>

          <div className="relative w-full h-[380px] sm:h-[400px] bg-[#D3533D] my-auto overflow-hidden shadow-md flex flex-col justify-between p-6"></div>

          <div className="w-[120px] h-[8px] bg-[#101010] opacity-30 rounded-[4px] mt-2"></div>
        </div>
      </div>

      {/* Action Button at bottom */}
      <div className="w-full max-w-[1312px] mx-auto flex justify-start pt-4">
        <Button showArrow={true}>Book A Call</Button>
      </div>
    </section>
  );
}
