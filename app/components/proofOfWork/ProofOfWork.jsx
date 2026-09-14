"use client";

import React from "react";
import Button from "../button/Button";

export default function ProofOfWork() {
  return (
    <section className="relative w-full max-w-[1512px] mx-auto px-4 sm:px-12 lg:px-20 pt-16 pb-10 lg:py-24 flex flex-col gap-12 lg:gap-16 text-[#F4F1E9]">
      <div className="w-full max-w-[1312px] mx-auto">
        <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold font-['Oswald'] leading-tight uppercase tracking-tight text-[#F4F1E9]">
          PROOF OF <span className="text-[#D3533D]">WORK</span>
        </h2>
      </div>

      <div className="w-full max-w-[1312px] mx-auto relative min-h-[460px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6 py-8">
        <div className="relative w-full max-w-[420px] lg:w-[420px] h-[300px] sm:h-[320px] bg-[#D3533D] border border-[#111111] shadow-2xl rotate-0 lg:rotate-[3.5deg] transition-transform duration-300 hover:rotate-0 p-8 flex flex-col justify-between shrink-0">
          <div className="absolute inset-3 border border-[#F4F1E9] opacity-80 pointer-events-none"></div>
        </div>

        <div className="w-full max-w-[360px] lg:w-[360px] h-[340px] sm:h-[380px] bg-[#F4F4F5] border-[1.5px] border-[#D4D4D8] rotate-0 lg:-rotate-[2deg] transition-transform duration-300 hover:rotate-0 p-8 sm:p-10 flex flex-col justify-between items-center text-center shadow-xl shrink-0">
          <span className="font-['Oswald'] font-normal text-[100px] sm:text-[144px] leading-none text-[#D3533D]">
            01
          </span>
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] uppercase tracking-wider text-[#101010]">
            PRIMARY ATELIER BLOCK
          </span>
        </div>

        <div className="w-full max-w-[350px] lg:w-[350px] h-[340px] sm:h-[350px] bg-[#FFFFFF] border-[1.5px] border-[#111111] shadow-2xl rotate-0 lg:rotate-[5deg] transition-transform duration-300 hover:rotate-0 p-4 flex flex-col justify-between shrink-0">
          <div className="w-full h-[240px] sm:h-[260px] bg-[#D3533D] flex items-center justify-center relative overflow-hidden">
            <div className="w-10 h-10 bg-[#FFFFFF] border border-[#111111] rotate-[45deg]"></div>
          </div>

          <div className="flex flex-row justify-between items-center w-full px-1 font-['Inter',sans-serif] text-[#101010]">
            <span className="font-semibold text-[12px]">COMP_C.IMG</span>
            <span className="font-normal text-[11px]">1:1 RATIO</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1312px] mx-auto flex justify-center pt-4">
        <Button showArrow={true}>Book A Call</Button>
      </div>
    </section>
  );
}
