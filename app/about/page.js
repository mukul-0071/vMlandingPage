"use client";

import React from "react";
import Header from "../components/header/Header";
import AboutusBackground from "../components/aboutusBackground/AboutusBackground";
import HowItWorksSection from "../components/howItWorks/HowItWorksSection";

export default function AboutPage() {
  return (
    <AboutusBackground>
      <Header />

      <main className="relative w-full pt-[211px] pb-20 flex flex-col items-center justify-start min-h-screen px-4 overflow-hidden">
        <div className="w-full max-w-[1512px] flex flex-col items-center gap-10 px-4 md:px-[260px]">
          <h1 className="w-full max-w-[992px] text-center font-['Oswald'] font-bold text-[36px] sm:text-[48px] md:text-[60px] leading-[44px] sm:leading-[52px] md:leading-[50px] uppercase text-[#F4F1E9] tracking-normal">
            GET YOUR <span className="text-[#D3533D]">ADS</span> RUNNING
            <br className="hidden sm:inline" />
            <span className="block sm:inline font-normal tracking-[0.25em] sm:tracking-[0.45em] md:tracking-[0.55em] text-[20px] sm:text-[32px] md:text-[40px] mt-2 sm:mt-0">
              WITHOUT AN <span className="text-[#D3533D]">AD ACCOUNT</span>
            </span>
          </h1>

          <div className="w-full max-w-[992px] flex flex-row justify-center items-center px-4 sm:px-10 md:px-[140px] gap-2.5">
            <p className="w-full max-w-[712px] text-center font-['Satoshi',sans-serif] font-medium text-[15px] sm:text-[18px] leading-[22px] sm:leading-[24px] text-[#F4F1E9] opacity-90">
              You share the brief; we make the ads and run them on Meta and Google. No setup, no ad account, no guesswork on your end.
            </p>
          </div>
        </div>

        <HowItWorksSection />
      </main>
    </AboutusBackground>
  );
}
