"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../button/Button";

import themeEllipse from "../../../assets/icons/themeEllipse.svg";
import whiteEllipse from "../../../assets/icons/whiteEllipse.svg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WayWeWork() {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const remainingCards = [
        card2Ref.current,
        card3Ref.current,
        card4Ref.current,
        card5Ref.current,
      ].filter(Boolean);

      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        // --- DESKTOP ANIMATION (UNTOUCHED & PRESERVED) ---
        if (card1Ref.current) {
          gsap.set(card1Ref.current, { xPercent: 105 });
        }
        gsap.set(remainingCards, { opacity: 0, y: 80, scale: 0.92 });
        if (ctaRef.current) gsap.set(ctaRef.current, { opacity: 0, y: 30 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=250%",
            pin: true,
            pinSpacing: true,
            scrub: 0.8, // Slightly smoother scrub response
            anticipatePin: 1,
          },
        });

        tl.to(card1Ref.current, {
          xPercent: 0,
          duration: 1.5, // Made center-to-left shift much slower and smoother
          ease: "power1.inOut",
        })
          .to(
            [card2Ref.current, card3Ref.current],
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.25,
              duration: 1.2,
              ease: "power2.out",
            },
            "+=0.2",
          )
          .to(
            [card4Ref.current, card5Ref.current],
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.25,
              duration: 1.2,
              ease: "power2.out",
            },
            "+=0.2",
          )
          .to(ctaRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          });
      } else {
        // --- MOBILE ANIMATION (Natural Scroll + Cards Slide In From Right/Left on Viewport Entry) ---
        // Section is NOT pinned on mobile so page scrolls naturally
        // Cards 2 & 4 come from Right (+80px x)
        // Cards 3 & 5 come from Left (-80px x)
        const mobileCards = [
          { ref: card2Ref.current, xOffset: 90 },
          { ref: card3Ref.current, xOffset: -90 },
          { ref: card4Ref.current, xOffset: 90 },
          { ref: card5Ref.current, xOffset: -90 },
        ];

        mobileCards.forEach(({ ref, xOffset }) => {
          if (!ref) return;

          gsap.set(ref, { opacity: 0, x: xOffset });

          gsap.to(ref, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
              end: "top 55%",
              scrub: 0.5,
            },
          });
        });

        if (ctaRef.current) {
          gsap.set(ctaRef.current, { opacity: 0, y: 30 });
          gsap.to(ctaRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
            },
          });
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-[1512px] mx-auto px-6 sm:px-12 lg:px-20 min-h-screen flex flex-col justify-center py-12 lg:py-20 text-[#F4F1E9] overflow-hidden"
    >
      <div className="w-full max-w-[1312px] mx-auto mb-8">
        <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold font-['Oswald'] leading-tight uppercase tracking-tight text-[#F4F1E9]">
          THE WAY WE WORK
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-[1312px] mx-auto">
        {/* Card 1 - Always Revealed First */}
        <div
          ref={card1Ref}
          className="w-full h-auto min-h-[520px] lg:h-[600px] bg-[#D3533D] p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden text-[#F4F1E9] border border-[#D3533D] shadow-xl z-20"
        >
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
          {/* Card 2 - Forecast */}
          <div
            ref={card2Ref}
            className="w-full h-auto min-h-[284px] bg-[#F4F1E9] p-6 lg:p-7 flex flex-col justify-between text-[#101010] border border-[#F4F1E9] shadow-xl z-10"
          >
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

          {/* Card 3 - Strategy */}
          <div
            ref={card3Ref}
            className="w-full h-auto min-h-[284px] bg-[#F4F1E9] p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden text-[#101010] border border-[#F4F1E9] shadow-xl z-10"
          >
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
          {/* Card 4 - Distribution */}
          <div
            ref={card4Ref}
            className="w-full h-auto min-h-[257px] bg-[#F4F1E9] p-6 lg:p-7 flex flex-col justify-between text-[#101010] border border-[#F4F1E9] shadow-xl z-10"
          >
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

          {/* Card 5 - Start */}
          <div
            ref={card5Ref}
            className="w-full h-auto min-h-[311px] bg-[#D3533D] p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden text-[#F4F1E9] border border-[#D3533D] shadow-xl z-10"
          >
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

      <div
        ref={ctaRef}
        className="w-full max-w-[1312px] mx-auto flex justify-start pt-6"
      >
        <Button showArrow={true}>Book A Call</Button>
      </div>
    </section>
  );
}
