import React from "react";
import Image from "next/image";
import yourBrandCard from "../../../assets/icons/yourBrandCard.svg";

export default function HomePageContent() {
  return (
    <section className="relative w-full max-w-[1512px] mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
      {/* Left side SVG / Cards stack */}
      <div className="w-full lg:w-[650px] shrink-0 flex justify-center items-center">
        <div className="relative w-full max-w-[650px] aspect-square flex justify-center items-center">
          <Image
            src={yourBrandCard}
            alt="Your Brand Stack"
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Right side typography & copy content */}
      <div className="w-full lg:w-[642px] shrink-0 flex flex-col items-start gap-10 text-[#F4F1E9]">
        <div className="flex flex-col items-start gap-5 w-full">
          <div className="flex items-baseline gap-3 uppercase font-['Oswald'] leading-none">
            <span className="text-[5.5rem] sm:text-[6.5rem] md:text-[6rem] lg:text-[6rem] font-extralight tracking-tight">
              YOUR
            </span>
            <span className="text-[5.5rem] sm:text-[6.5rem] md:text-[6rem] lg:text-[6rem] font-bold tracking-tight">
              BRAND
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 uppercase font-['Oswald']">
            <span className="text-2xl sm:text-3xl lg:text-[2rem] font-bold leading-none tracking-tight">
              DESERVES TO BE SEEN.
            </span>
            <div className="bg-[#D3533D] px-6 py-2 rounded-[6px] inline-flex items-center justify-center">
              <span className="text-2xl sm:text-3xl lg:text-[2rem] font-bold leading-none tracking-tight text-[#F4F1E9]">
                AND TALKED ABOUT.
              </span>
            </div>
          </div>
        </div>

        <p className="text-base sm:text-lg text-[#F4F1E9] font-['Satoshi',sans-serif] font-normal leading-normal">
          We’re here to make your brand the one people know.
        </p>

        <div className="flex flex-col items-start gap-2.5 pl-7 text-base sm:text-lg text-[#F4F1E9] font-['Satoshi',sans-serif]">
          <div className="relative flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1E9] shrink-0"></span>
            <span>The one they recognise before they read the name.</span>
          </div>
          <div className="relative flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1E9] shrink-0"></span>
            <span>The one they send to the group chat.</span>
          </div>
          <div className="relative flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1E9] shrink-0"></span>
            <span>
              The one they think of when someone asks,{" "}
              <span className="italic text-[#D3533D] font-normal">
                “Where should I buy this?”
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2.5 text-base sm:text-lg text-[#F4F1E9] font-['Satoshi',sans-serif]">
          <p>We’re here to make your brand the one people know.</p>
          <p>
            And every day you wait, someone else is giving your customers a
            reason to remember them.
          </p>
          <p>So, shall we make them remember you?</p>
        </div>

        <div className="flex flex-col items-start gap-2 pt-2 uppercase font-['Oswald']">
          <div className="flex items-center gap-3 text-2xl sm:text-[1.75rem] font-bold leading-none">
            <span className="text-[#D3533D]">30 MINUTES</span>
            <span className="text-[#F4F1E9] font-normal">|</span>
            <span className="text-[#F4F1E9]">YOUR BRAND</span>
          </div>
          <h4 className="text-3xl sm:text-4xl lg:text-[2.375rem] font-bold leading-none tracking-tight text-[#F4F1E9]">
            A LOT TO TALK ABOUT
          </h4>
        </div>
      </div>
    </section>
  );
}
