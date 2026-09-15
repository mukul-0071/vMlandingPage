"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../button/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ShareYourProblem() {
  const sectionRef = useRef(null);
  const leftTitleRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Smooth scale, position & opacity scroll animation for left side heading
      if (leftTitleRef.current) {
        gsap.set(leftTitleRef.current, {
          opacity: 0,
          scale: 0.6,
          transformOrigin: "left center",
        });

        gsap.to(leftTitleRef.current, {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftTitleRef.current,
            start: "top 85%",
            end: "top 45%",
            scrub: 0.5,
          },
        });
      }

      // Smooth position & opacity scroll animation for right side content
      if (rightContentRef.current) {
        gsap.set(rightContentRef.current, {
          opacity: 0,
          x: 60,
          y: 30,
        });

        gsap.to(rightContentRef.current, {
          opacity: 1,
          x: 0,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightContentRef.current,
            start: "top 85%",
            end: "top 45%",
            scrub: 0.5,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-[1512px] mx-auto px-4 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col gap-12 lg:gap-16 text-[#F4F1E9] overflow-hidden"
    >
      <div className="w-full max-w-[1312px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
        {/* Left Side: Large Title with Smooth Position Scroll Animation */}
        <div ref={leftTitleRef} className="w-full lg:w-[616px] shrink-0">
          <h2 className="font-['Oswald'] font-bold text-[40px] sm:text-[56px] lg:text-[68px] leading-[52px] sm:leading-[72px] lg:leading-[101px] uppercase text-[#F4F1E9]">
            WANT TO <span className="text-[#D3533D]">SHARE YOUR</span>{" "}
            <span className="text-[#D3533D]">PROBLEM</span> WITHOUT COMMITMENT?
          </h2>
        </div>

        {/* Right Side: Details & CTA with Smooth Position Scroll Animation */}
        <div
          ref={rightContentRef}
          className="w-full lg:w-[616px] flex flex-col gap-8 lg:gap-10 shrink-0"
        >
          {/* Main Description */}
          <p className="font-['Satoshi',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[26px] sm:leading-[29px] text-[#F4F1E9] opacity-90 max-w-[586px]">
            Send us your Instagram or your website.
            <br className="hidden sm:block" />
            We'll come back with the one thing costing you the most attention
            right
            <br className="hidden sm:block" />
            now, written out in plain language.
          </p>

          {/* 2-Column Info Grid: What we need / What you get */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex flex-col gap-1">
              <h3 className="font-['Satoshi',sans-serif] font-bold text-[22px] sm:text-[26px] leading-[35px] text-[#D3533D]">
                What we need:
              </h3>
              <p className="font-['Satoshi',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[22px] text-[#F4F1E9]">
                your handle or your URL.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-['Satoshi',sans-serif] font-bold text-[22px] sm:text-[26px] leading-[35px] text-[#D3533D]">
                What you get:
              </h3>
              <p className="font-['Satoshi',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[22px] text-[#F4F1E9]">
                one problem, named — and what we'd do about it.
              </p>
            </div>
          </div>

          {/* Full Width Row: When */}
          <div className="flex flex-col gap-1">
            <h3 className="font-['Satoshi',sans-serif] font-bold text-[22px] sm:text-[26px] leading-[35px] text-[#D3533D]">
              When:
            </h3>
            <p className="font-['Satoshi',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[22px] text-[#F4F1E9]">
              within 24 hours.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <Button showArrow={false}>Talk to Us.</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
