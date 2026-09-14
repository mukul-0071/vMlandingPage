"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Button from "../button/Button";

import homePageImageOne from "../../../assets/icons/homePageImageOne.svg";
import homePageImageTwo from "../../../assets/icons/homePageImageTwo.svg";

export default function SecondSection() {
  const badgeBoxRef = useRef(null);
  const badgeTrackRef = useRef(null);
  const directRef = useRef(null);
  const produceRef = useRef(null);
  const imageOneRef = useRef(null);
  const imageTwoRef = useRef(null);

  useEffect(() => {
    if (
      !badgeBoxRef.current ||
      !badgeTrackRef.current ||
      !directRef.current ||
      !produceRef.current ||
      !imageOneRef.current ||
      !imageTwoRef.current
    )
      return;

    const ctx = gsap.context(() => {
      // Calculate dynamic widths with solid fallbacks so web & mobile never collapse
      const directW = Math.max(directRef.current?.offsetWidth || 0, 190);
      const produceW = Math.max(produceRef.current?.offsetWidth || 0, 250);

      // Set initial states
      gsap.set(badgeBoxRef.current, { width: directW });
      gsap.set(badgeTrackRef.current, { yPercent: 0 });
      gsap.set(imageOneRef.current, { opacity: 1 });
      gsap.set(imageTwoRef.current, { opacity: 0 });

      const tl = gsap.timeline({ repeat: -1 });

      tl.to({}, { duration: 3 }) // Hold "DIRECT" for 3 seconds

        // Step 1: Upward slide to PRODUCE + animate width to produceW + Image 1 -> Image 2
        .to(
          badgeTrackRef.current,
          {
            yPercent: -33.3333,
            duration: 1.0,
            ease: "power2.inOut",
          },
          "step1",
        )
        .to(
          badgeBoxRef.current,
          {
            width: produceW,
            duration: 1.0,
            ease: "power2.inOut",
          },
          "step1",
        )
        .to(
          imageOneRef.current,
          { opacity: 0, duration: 1.0, ease: "power2.inOut" },
          "step1",
        )
        .to(
          imageTwoRef.current,
          { opacity: 1, duration: 1.0, ease: "power2.inOut" },
          "step1",
        )

        .to({}, { duration: 3 }) // Hold "PRODUCE" for 3 seconds

        // Step 2: Upward slide to DIRECT + animate width to directW + Image 2 -> Image 1
        .to(
          badgeTrackRef.current,
          {
            yPercent: -66.6666,
            duration: 1.0,
            ease: "power2.inOut",
          },
          "step2",
        )
        .to(
          badgeBoxRef.current,
          {
            width: directW,
            duration: 1.0,
            ease: "power2.inOut",
          },
          "step2",
        )
        .to(
          imageTwoRef.current,
          { opacity: 0, duration: 1.0, ease: "power2.inOut" },
          "step2",
        )
        .to(
          imageOneRef.current,
          { opacity: 1, duration: 1.0, ease: "power2.inOut" },
          "step2",
        )

        // Instantly reset track back to 0% for infinite upward loop
        .set(badgeTrackRef.current, { yPercent: 0 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full max-w-[1512px] mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 text-[#F4F1E9] overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[616px_1fr] items-center lg:items-start justify-between gap-8 lg:gap-x-16 lg:gap-y-10">
        {/* Item 1: Header Row & YOU JUST SHOW UP (Order 1 on Mobile, Right Column Row 1 on Desktop) */}
        <div className="order-1 lg:col-start-2 lg:row-start-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-2 w-full max-w-[395px] lg:max-w-none mx-auto">
          <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 font-['Oswald'] uppercase w-full">
            <span className="text-[60px] lg:text-[78px] font-[200] leading-none tracking-tight shrink-0">
              WE
            </span>

            {/* Animated Pill Badge with Dynamic Smooth Width */}
            <div
              ref={badgeBoxRef}
              className="bg-[#D3533D] rounded-[10px] h-[64px] sm:h-[76px] lg:h-[84px] overflow-hidden relative shrink-0 min-w-[190px]"
            >
              <div
                ref={badgeTrackRef}
                className="w-full flex flex-col items-center justify-start absolute top-0 left-0"
              >
                <span
                  ref={directRef}
                  className="text-[44px] sm:text-[50px] lg:text-[58px] font-bold leading-none tracking-tight text-[#F4F1E9] h-[64px] sm:h-[76px] lg:h-[84px] shrink-0 flex items-center justify-center whitespace-nowrap px-5 sm:px-8"
                >
                  DIRECT
                </span>
                <span
                  ref={produceRef}
                  className="text-[44px] sm:text-[50px] lg:text-[58px] font-bold leading-none tracking-tight text-[#F4F1E9] h-[64px] sm:h-[76px] lg:h-[84px] shrink-0 flex items-center justify-center whitespace-nowrap px-5 sm:px-8"
                >
                  PRODUCE
                </span>
                <span className="text-[44px] sm:text-[50px] lg:text-[58px] font-bold leading-none tracking-tight text-[#F4F1E9] h-[64px] sm:h-[76px] lg:h-[84px] shrink-0 flex items-center justify-center whitespace-nowrap px-5 sm:px-8">
                  DIRECT
                </span>
              </div>
            </div>
          </div>

          {/* YOU JUST SHOW UP */}
          <h2 className="text-[36px] sm:text-[64px] lg:text-[72px] font-bold font-['Oswald'] leading-[53px] lg:leading-tight uppercase tracking-tight text-[#F4F1E9] text-center lg:text-left w-full">
            YOU JUST SHOW UP.
          </h2>
        </div>

        {/* Item 2: Framed Image (Order 2 on Mobile - directly below YOU JUST SHOW UP, Left Column Rows 1 & 2 on Desktop) */}
        <div className="order-2 lg:col-start-1 lg:row-start-1 lg:row-span-2 w-full max-w-[395px] lg:max-w-[616px] mx-auto shrink-0 relative p-0 my-4 lg:my-0">
          {/* Button-Style Extended Corner Gradient Lines */}
          <span className="absolute left-0 -top-8 w-[1px] h-[40px] pointer-events-none z-20 bg-gradient-to-t from-[#FFFFFF] to-transparent"></span>
          <span className="absolute -left-8 top-0 w-[40px] h-[1px] pointer-events-none z-20 bg-gradient-to-l from-[#FFFFFF] to-transparent"></span>

          <span className="absolute right-0 -top-8 w-[1px] h-[40px] pointer-events-none z-20 bg-gradient-to-t from-[#FFFFFF] to-transparent"></span>
          <span className="absolute -right-8 top-0 w-[40px] h-[1px] pointer-events-none z-20 bg-gradient-to-r from-[#FFFFFF] to-transparent"></span>

          <span className="absolute left-0 -bottom-8 w-[1px] h-[40px] pointer-events-none z-20 bg-gradient-to-b from-[#FFFFFF] to-transparent"></span>
          <span className="absolute -left-8 bottom-0 w-[40px] h-[1px] pointer-events-none z-20 bg-gradient-to-l from-[#FFFFFF] to-transparent"></span>

          <span className="absolute right-0 -bottom-8 w-[1px] h-[40px] pointer-events-none z-20 bg-gradient-to-b from-[#FFFFFF] to-transparent"></span>
          <span className="absolute -right-8 bottom-0 w-[40px] h-[1px] pointer-events-none z-20 bg-gradient-to-r from-[#FFFFFF] to-transparent"></span>

          {/* Flush Image Container matching Mobile & Desktop aspect ratio */}
          <div className="relative w-full aspect-[395/444.5] lg:aspect-[616/731] overflow-hidden rounded-[4px] shadow-2xl border border-[#FFFFFF]">
            <div ref={imageOneRef} className="absolute inset-0 w-full h-full">
              <Image
                src={homePageImageOne}
                alt="Virk Media Team - Direct"
                fill
                priority
                className="object-cover pointer-events-none select-none"
              />
            </div>
            <div ref={imageTwoRef} className="absolute inset-0 w-full h-full">
              <Image
                src={homePageImageTwo}
                alt="Virk Media Team - Produce"
                fill
                priority
                className="object-cover pointer-events-none select-none"
              />
            </div>
          </div>
        </div>

        {/* Item 3: Body Copy, Bullets & Button (Order 3 on Mobile - below image, Right Column Row 2 on Desktop) */}
        <div className="order-3 lg:col-start-2 lg:row-start-2 w-full lg:w-[694px] max-w-[395px] lg:max-w-none mx-auto shrink-0 flex flex-col items-start gap-8 lg:gap-10">
          {/* Copy Details: You & We */}
          <div className="flex flex-col gap-5 w-full font-['Satoshi',sans-serif]">
            <div className="flex flex-col gap-1">
              <h3 className="text-[26px] font-bold text-[#F4F1E9] leading-[35px]">
                You:
              </h3>
              <p className="text-[16px] leading-[22px] text-[#F4F1E9]">
                Bring the brand.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-[26px] font-bold text-[#F4F1E9] leading-[35px]">
                We:
              </h3>
              <p className="text-[16px] leading-[22px] text-[#F4F1E9]">
                Bring the strategy, ideas, and production.
              </p>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="flex flex-col gap-2.5 font-['Satoshi',sans-serif] text-[16px] text-[#F4F1E9]">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1E9] shrink-0"></span>
              <span>No scattered freelancers.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1E9] shrink-0"></span>
              <span>No strategy decks collecting dust.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4F1E9] shrink-0"></span>
              <span>No endless handoffs.</span>
            </div>
          </div>

          {/* Footer Copy & Taglines */}
          <div className="flex flex-col gap-3 w-full font-['Satoshi',sans-serif]">
            <p className="text-[16px] leading-[22px] text-[#F4F1E9]">
              Just <span className="text-[#D3533D]">one team</span>, taking your
              content from{" "}
              <span className="text-[#D3533D] font-bold">
                brief to finished.
              </span>
            </p>
            <h4 className="text-[24px] leading-[32px] font-extrabold text-[#D3533D]">
              That’s Virk Media.
            </h4>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <Button showArrow={true}>Who we are</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
