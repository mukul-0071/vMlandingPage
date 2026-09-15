"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import brandTopCard from "../../../assets/icons/brandTopCard.png";
import brandCardOne from "../../../assets/icons/brandCardOne.svg";
import brandCardTwo from "../../../assets/icons/brandCardTwo.svg";
import brandCardThree from "../../../assets/icons/brandCardThree.svg";
import brandCardFour from "../../../assets/icons/brandCardFour.svg";

export default function BrandCardInfo() {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  const sectionRef = useRef(null);
  const stackRef = useRef(null);
  const rightContentRef = useRef(null);
  const statsRef = useRef(null);

  const [counts, setCounts] = React.useState({
    creators: 0,
    brands: 0,
    industries: 0,
  });

  useEffect(() => {
    if (!stackRef.current || !sectionRef.current) return;

    const cards = stackRef.current.querySelectorAll(".stack-card");

    // Cards start vertically higher up (y: -250)
    gsap.set(cards, { opacity: 0, y: -250, scale: 1, rotate: 0 });

    // Right-side copy content starts slightly lower & hidden
    if (rightContentRef.current) {
      gsap.set(rightContentRef.current, { opacity: 0, y: 60 });
    }

    // Target rotation angles for each card to form the fan/rotated stacked look
    const cardRotations = [-18, 14, -8, 8, -4];

    // Scroll-driven scrub animation timeline directly controlled by scroll position
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // starts when section enters viewport
        end: "top 15%", // completes when section is fully in view
        scrub: 1, // smooth scroll-driven scrubbing
      },
      defaults: { ease: "none" },
    });

    // Animate cards dropping down sequentially as user scrolls
    cards.forEach((card, index) => {
      tl.to(
        card,
        {
          opacity: 1,
          y: 0,
          rotate: cardRotations[index] || 0,
          duration: 1,
        },
        index * 0.45
      );
    });

    // Simultaneously reveal right-side content alongside card drop sequence
    if (rightContentRef.current) {
      tl.to(
        rightContentRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
        },
        0.3
      );
    }

    // Stats counter animation trigger
    let statsSt;
    if (statsRef.current) {
      const targets = { creators: 0, brands: 0, industries: 0 };
      statsSt = ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.to(targets, {
            creators: 2000,
            brands: 50,
            industries: 12,
            duration: 2.2,
            ease: "power2.out",
            onUpdate: () => {
              setCounts({
                creators: Math.floor(targets.creators),
                brands: Math.floor(targets.brands),
                industries: Math.floor(targets.industries),
              });
            },
          });
        },
        once: true,
      });
    }

    return () => {
      tl.kill();
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      if (statsSt) statsSt.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-[1512px] mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col gap-16 lg:gap-24"
    >
      {/* Upper Section: Cards + Copy Content */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
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
                className="w-[95%] h-auto object-contain pointer-events-none select-none"
              />
            </div>
          </div>
        </div>

        {/* Right side typography & copy content */}
        <div
          ref={rightContentRef}
          className="w-full lg:w-[642px] shrink-0 flex flex-col items-center lg:items-start gap-8 lg:gap-[40px] text-[#F4F1E9] max-w-full lg:max-w-none mx-auto px-2 sm:px-0"
        >
          <div className="flex flex-col items-center lg:items-start gap-[10px] w-full">
            <div className="flex flex-row justify-center lg:justify-start items-baseline gap-[10px] w-full uppercase font-['Oswald'] max-w-full overflow-hidden">
              <span className="text-[38px] xs:text-[48px] sm:text-[64px] lg:text-[78px] font-[200] leading-none lg:leading-[116px] tracking-tight">
                YOUR
              </span>
              <span className="text-[38px] xs:text-[48px] sm:text-[64px] lg:text-[78px] font-bold leading-none lg:leading-[116px] tracking-tight">
                BRAND
              </span>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-[10px] w-full px-0 sm:px-[49px] lg:px-0">
              <span className="text-[20px] xs:text-[24px] sm:text-[32px] font-bold leading-tight lg:leading-[47px] tracking-tight uppercase font-['Oswald'] text-center lg:text-left whitespace-nowrap">
                DESERVES TO BE SEEN.
              </span>
              <div className="bg-[#D3533D] px-3 sm:px-[30px] py-1 sm:py-0 h-auto sm:h-[47px] rounded-[6px] inline-flex items-center justify-center shrink-0">
                <span className="text-[20px] xs:text-[24px] sm:text-[32px] font-bold leading-tight lg:leading-[47px] tracking-tight uppercase font-['Oswald'] text-[#F4F1E9] whitespace-nowrap">
                  AND TALKED ABOUT.
                </span>
              </div>
            </div>
          </div>

          <p className="w-full text-[16px] leading-[22px] text-center lg:text-left text-[#F4F1E9] font-['Satoshi',sans-serif] font-normal">
            We’re here to make your brand the one people know.
          </p>

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

          <div className="flex flex-col items-start gap-[10px] w-full text-[16px] leading-[22px] text-left text-[#F4F1E9] font-['Satoshi',sans-serif]">
            <p>We’re here to make your brand the one people know.</p>
            <p>
              And every day you wait, someone else is giving your customers a
              reason to remember them.
            </p>
            <p>So, shall we make them remember you?</p>
          </div>

          <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-[5px] w-full uppercase font-['Oswald']">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-[10px] text-[20px] xs:text-[24px] sm:text-[28px] font-bold leading-tight sm:leading-[41px]">
              <span className="text-[#D3533D]">30 MINUTES</span>
              <span className="text-[#F4F1E9] text-[16px] sm:text-[18px]">
                |
              </span>
              <span className="text-[#F4F1E9]">YOUR BRAND</span>
            </div>
            <h4 className="text-[26px] xs:text-[32px] sm:text-[38px] font-bold leading-tight sm:leading-[40px] tracking-tight text-[#F4F1E9] text-center lg:text-left">
              A LOT TO TALK ABOUT
            </h4>
          </div>
        </div>
      </div>

      {/* Bottom Section: Animated Stats Cards */}
      <div
        ref={statsRef}
        className="w-full flex flex-col items-center justify-center gap-10 pt-6 px-2 sm:px-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[40px] w-full max-w-[1312px]">
          <div className="box-border flex flex-col items-center justify-center py-[24px] sm:py-[30px] px-6 w-full h-auto min-h-[170px] bg-[#D3533D] border border-[#F4F1E9] rounded-[24px] sm:rounded-[30px] gap-2 shadow-lg">
            <span className="font-['Oswald'] font-bold text-[48px] sm:text-[60px] leading-none sm:leading-[89px] uppercase text-[#F4F1E9] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              {counts.creators}+
            </span>
            <span className="font-['Satoshi',sans-serif] font-medium text-[18px] sm:text-[22px] leading-[26px] sm:leading-[30px] text-[#F4F1E9] text-center">
              Creators On Call
            </span>
          </div>

          <div className="box-border flex flex-col items-center justify-center py-[24px] sm:py-[30px] px-6 w-full h-auto min-h-[170px] bg-[#D3533D] border border-[#F4F1E9] rounded-[24px] sm:rounded-[30px] gap-2 shadow-lg">
            <span className="font-['Oswald'] font-bold text-[48px] sm:text-[60px] leading-none sm:leading-[89px] uppercase text-[#F4F1E9] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              {counts.brands}+
            </span>
            <span className="font-['Satoshi',sans-serif] font-medium text-[18px] sm:text-[22px] leading-[26px] sm:leading-[30px] text-[#F4F1E9] text-center">
              Brands Worked With
            </span>
          </div>

          <div className="box-border flex flex-col items-center justify-center py-[24px] sm:py-[30px] px-6 w-full h-auto min-h-[170px] bg-[#D3533D] border border-[#F4F1E9] rounded-[24px] sm:rounded-[30px] gap-2 shadow-lg">
            <span className="font-['Oswald'] font-bold text-[48px] sm:text-[60px] leading-none sm:leading-[89px] uppercase text-[#F4F1E9] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              {counts.industries}+
            </span>
            <span className="font-['Satoshi',sans-serif] font-medium text-[18px] sm:text-[22px] leading-[26px] sm:leading-[30px] text-[#F4F1E9] text-center">
              Industries Covered
            </span>
          </div>
        </div>

        <p className="w-full font-['Satoshi',sans-serif] font-normal text-[16px] leading-[22px] text-center text-[#F4F1E9] sm:whitespace-nowrap px-4">
          We take on only a few new brands each month, so the work stays
          directed, not diluted.
        </p>
      </div>
    </section>
  );
}
