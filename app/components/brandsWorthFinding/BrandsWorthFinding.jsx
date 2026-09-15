"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../button/Button";
import homeGrid from "../../../assets/icons/homeGrid.svg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BrandsWorthFinding() {
  const sectionRef = useRef(null);
  const svgMaskRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        // Natural unpinned scroll reveal: SVG background & text rows reveal progressive as user scrolls down page
        if (svgMaskRef.current) {
          gsap.set(svgMaskRef.current, {
            clipPath: "inset(0% 0% 100% 0%)",
          });

          // Row 1 scroll trigger: reveals top 33% SVG
          gsap.to(svgMaskRef.current, {
            clipPath: "inset(0% 0% 67% 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: row1Ref.current,
              start: "top 80%",
              end: "top 40%",
              scrub: 0.5,
            },
          });

          // Row 2 scroll trigger: reveals middle 67% SVG
          gsap.to(svgMaskRef.current, {
            clipPath: "inset(0% 0% 34% 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: row2Ref.current,
              start: "top 80%",
              end: "top 40%",
              scrub: 0.5,
            },
          });

          // Row 3 scroll trigger: reveals full 100% SVG
          gsap.to(svgMaskRef.current, {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: row3Ref.current,
              start: "top 80%",
              end: "top 40%",
              scrub: 0.5,
            },
          });
        }

        // Animate each row text into view as user scrolls down
        const desktopRows = [
          { ref: row1Ref.current },
          { ref: row2Ref.current },
          { ref: row3Ref.current },
        ];

        desktopRows.forEach(({ ref }) => {
          if (!ref) return;
          gsap.set(ref, { opacity: 0, y: 40 });
          gsap.to(ref, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              end: "top 45%",
              scrub: 0.5,
            },
          });
        });

        if (btnRef.current) {
          gsap.set(btnRef.current, { opacity: 0, y: 20 });
          gsap.to(btnRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: btnRef.current,
              start: "top 90%",
            },
          });
        }
      } else {
        // Mobile Natural Scroll Reveal for each row
        const rows = [row1Ref.current, row2Ref.current, row3Ref.current].filter(
          Boolean,
        );

        if (svgMaskRef.current) {
          gsap.set(svgMaskRef.current, { clipPath: "inset(0% 0% 0% 0%)" });
        }

        rows.forEach((row) => {
          gsap.set(row, { opacity: 0, y: 50 });
          gsap.to(row, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              end: "top 55%",
              scrub: 0.5,
            },
          });
        });

        if (btnRef.current) {
          gsap.set(btnRef.current, { opacity: 0, y: 20 });
          gsap.to(btnRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: btnRef.current,
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
      className="relative w-full max-w-[1512px] mx-auto px-4 sm:px-12 lg:px-20 min-h-screen flex flex-col justify-center py-12 lg:py-20 text-[#F4F1E9] overflow-hidden"
    >
      {/* Section Header */}
      <div className="w-full max-w-[1312px] mx-auto flex flex-col gap-3 mb-8">
        <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold font-['Oswald'] leading-tight uppercase tracking-tight text-[#F4F1E9]">
          WE MAKE <span className="text-[#D3533D]">BRANDS WORTH</span> FINDING.
        </h2>
        <p className="text-[14px] sm:text-[16px] leading-[22px] font-['Satoshi',sans-serif] font-normal text-[#F4F1E9] opacity-90">
          Everything your brand needs to show up properly.
        </p>
      </div>

      {/* Grid Container with homeGrid.svg background overlay */}
      <div className="relative w-full max-w-[1312px] mx-auto">
        {/* Background SVG shape with clip-path mask */}
        <div
          ref={svgMaskRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0 transition-all duration-75"
        >
          <Image
            src={homeGrid}
            alt="Home Grid Background"
            className="w-full h-full object-fill"
            priority
          />
        </div>

        {/* 3 Rows x 2 Columns Text Overlay */}
        <div className="relative z-10 grid grid-cols-2 w-full">
          {/* ROW 1: Content Direction (Left) & Creator Network (Right) */}
          <div
            ref={row1Ref}
            className="col-span-2 grid grid-cols-2 w-full"
          >
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
          </div>

          {/* ROW 2: Production (Left) & Advertising (Right) */}
          <div
            ref={row2Ref}
            className="col-span-2 grid grid-cols-2 w-full"
          >
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
          </div>

          {/* ROW 3: Branding & Digital Presence (Left) & Distribution & Growth (Right) */}
          <div
            ref={row3Ref}
            className="col-span-2 grid grid-cols-2 w-full"
          >
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
      </div>

      {/* Action Button at bottom */}
      <div
        ref={btnRef}
        className="w-full max-w-[1312px] mx-auto flex justify-center pt-6"
      >
        <Button showArrow={true}>See everything we do</Button>
      </div>
    </section>
  );
}
