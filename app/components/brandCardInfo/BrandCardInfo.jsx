"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import brandTopCard from "../../../assets/icons/brandTopCard.svg";
import brandCardOne from "../../../assets/icons/brandCardOne.svg";
import brandCardTwo from "../../../assets/icons/brandCardTwo.svg";
import brandCardThree from "../../../assets/icons/brandCardThree.svg";
import brandCardFour from "../../../assets/icons/brandCardFour.svg";

export default function BrandCardInfo() {
  gsap.registerPlugin(ScrollTrigger);
  const stackRef = useRef(null);

  useEffect(() => {
    if (!stackRef.current) return;

    const cards = stackRef.current.querySelectorAll(".stack-card");

    // Start vertically higher up (y: -250) so cards drop down vertically onto the stack one by one
    gsap.set(cards, { opacity: 0, y: -250, scale: 1, rotate: 0 });

    // Target rotation angles for each card to form the fan/rotated stacked look
    const cardRotations = [-18, 14, -8, 8, -4];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stackRef.current,
        start: "top 80%", // triggers when top of section reaches 80% of viewport height
        toggleActions: "play none none none",
      },
      defaults: { ease: "power2.out" },
    });

    cards.forEach((card, index) => {
      tl.to(
        card,
        {
          opacity: 1,
          y: 0,
          rotate: cardRotations[index] || 0,
          duration: 0.9,
        },
        index * 0.4, // smooth sequential drop delay
      );
    });

    return () => {
      tl.kill();
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
    };
  }, []);

  return (
    <section className="relative w-full max-w-[1512px] mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
      {/* Left side GSAP Animated Cards stack */}
      <div className="w-full lg:w-[650px] shrink-0 flex justify-center items-center">
        <div
          ref={stackRef}
          className="relative w-full max-w-[500px] aspect-square flex justify-center items-center"
        >
          {/* Card 4 (Bottom-most back card) */}
          <div className="stack-card absolute inset-0 flex justify-center items-center z-10 drop-shadow-xl">
            <Image
              src={brandCardFour}
              alt="Brand Card Back 2"
              priority
              className="w-[90%] h-auto object-contain pointer-events-none select-none"
            />
          </div>

          {/* Card 3 */}
          <div className="stack-card absolute inset-0 flex justify-center items-center z-20 drop-shadow-xl">
            <Image
              src={brandCardThree}
              alt="Brand Card Back 1"
              priority
              className="w-[90%] h-auto object-contain pointer-events-none select-none"
            />
          </div>

          {/* Card 2 */}
          <div className="stack-card absolute inset-0 flex justify-center items-center z-30 drop-shadow-xl">
            <Image
              src={brandCardTwo}
              alt="Brand Card Mid 2"
              priority
              className="w-[82%] h-auto object-contain pointer-events-none select-none"
            />
          </div>

          {/* Card 1 */}
          <div className="stack-card absolute inset-0 flex justify-center items-center z-40 drop-shadow-xl">
            <Image
              src={brandCardOne}
              alt="Brand Card Mid 1"
              priority
              className="w-[90%] h-auto object-contain pointer-events-none select-none"
            />
          </div>

          {/* Brand Top Card (Topmost card) */}
          <div className="stack-card absolute inset-0 flex justify-center items-center z-50 drop-shadow-2xl">
            <Image
              src={brandTopCard}
              alt="Your Brand Top Card"
              priority
              className="w-[85%] h-auto object-contain pointer-events-none select-none"
            />
          </div>
        </div>
      </div>

      {/* Right side typography & copy content */}
      <div className="w-full lg:w-[642px] shrink-0 flex flex-col items-center lg:items-start gap-[40px] text-[#F4F1E9] max-w-[395px] lg:max-w-none mx-auto">
        {/* Frame 14 */}
        <div className="flex flex-col items-center lg:items-start gap-[10px] w-full">
          {/* Frame 11 */}
          <div className="flex flex-row justify-center lg:justify-start items-baseline gap-[10px] w-full uppercase font-['Oswald']">
            <span className="text-[78px] font-[200] leading-[116px] tracking-tight">
              YOUR
            </span>
            <span className="text-[78px] font-bold leading-[116px] tracking-tight">
              BRAND
            </span>
          </div>

          {/* Frame 13 */}
          <div className="flex flex-col items-center justify-center gap-[10px] w-full px-0 sm:px-[49px]">
            {/* Frame 12 */}
            <span className="text-[32px] font-bold leading-[47px] tracking-tight uppercase font-['Oswald'] text-center">
              DESERVES TO BE SEEN.
            </span>
            {/* Frame 10 */}
            <div className="bg-[#D3533D] px-[30px] h-[47px] rounded-[6px] inline-flex items-center justify-center w-full max-w-[297px]">
              <span className="text-[32px] font-bold leading-[47px] tracking-tight uppercase font-['Oswald'] text-[#F4F1E9] whitespace-nowrap">
                AND TALKED ABOUT.
              </span>
            </div>
          </div>
        </div>

        {/* We're here text */}
        <p className="w-full text-[16px] leading-[22px] text-center lg:text-left text-[#F4F1E9] font-['Satoshi',sans-serif] font-normal">
          We’re here to make your brand the one people know.
        </p>

        {/* Frame 15 */}
        <div className="flex flex-col items-start gap-[6px] pr-0 sm:pr-[30px] w-full text-[16px] leading-[22px] text-[#F4F1E9] font-['Satoshi',sans-serif]">
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

        {/* Frame 16 */}
        <div className="flex flex-col items-start gap-[10px] w-full text-[16px] leading-[22px] text-left text-[#F4F1E9] font-['Satoshi',sans-serif]">
          <p>We’re here to make your brand the one people know.</p>
          <p>
            And every day you wait, someone else is giving your customers a
            reason to remember them.
          </p>
          <p>So, shall we make them remember you?</p>
        </div>

        {/* Frame 17 */}
        <div className="flex flex-col items-center justify-center gap-[5px] w-full uppercase font-['Oswald']">
          <div className="flex items-center justify-center gap-[10px] text-[28px] font-bold leading-[41px] h-[41px]">
            <span className="text-[#D3533D]">30 MINUTES</span>
            <span className="text-[#F4F1E9] text-[18px] leading-[27px]">|</span>
            <span className="text-[#F4F1E9]">YOUR BRAND</span>
          </div>
          <h4 className="text-[38px] font-bold leading-[40px] tracking-tight text-[#F4F1E9] text-center">
            A LOT TO TALK ABOUT
          </h4>
        </div>
      </div>
    </section>
  );
}
