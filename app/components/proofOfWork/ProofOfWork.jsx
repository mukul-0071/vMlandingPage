"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../button/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProofOfWork() {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        // Desktop: Cards roll like a wheel from left into position on scroll
        const cards = [card1Ref.current, card2Ref.current, card3Ref.current].filter(
          Boolean,
        );

        // Target final rotation tilt angles matching original design
        const targetRotations = [3.5, -2, 5];

        cards.forEach((card, i) => {
          gsap.set(card, {
            x: -350 - i * 80,
            rotation: -25 - i * 10,
            opacity: 0,
            scale: 0.85,
          });
        });

        if (btnRef.current) {
          gsap.set(btnRef.current, { opacity: 0, y: 20 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            pinSpacing: true,
            scrub: 0.5, // 1:1 scrub sync for instant forward and reverse tracking
            anticipatePin: 1,
          },
        });

        // Wheel move effect: cards roll smoothly from left into their exact grid tilt positions, and roll back on reverse scroll
        tl.to(cards, {
          x: 0,
          rotation: (index) => targetRotations[index] || 0,
          opacity: 1,
          scale: 1,
          stagger: 0.25,
          duration: 1.5,
          ease: "none",
        }).to(btnRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "none",
        });
      } else {
        // Mobile: Unpinned natural scroll with alternating Left and Right card entries
        const mobileCards = [
          { ref: card1Ref.current, xOffset: -90 },
          { ref: card2Ref.current, xOffset: 90 },
          { ref: card3Ref.current, xOffset: -90 },
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
      <div className="w-full max-w-[1312px] mx-auto mb-8">
        <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold font-['Oswald'] leading-tight uppercase tracking-tight text-[#F4F1E9]">
          PROOF OF <span className="text-[#D3533D]">WORK</span>
        </h2>
      </div>

      <div className="w-full max-w-[1312px] mx-auto relative min-h-[460px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6 py-8">
        {/* Card 1 */}
        <div
          ref={card1Ref}
          className="relative w-full max-w-[420px] lg:w-[420px] h-[300px] sm:h-[320px] bg-[#D3533D] border border-[#111111] shadow-2xl rotate-0 lg:rotate-[3.5deg] transition-transform duration-300 hover:rotate-0 p-8 flex flex-col justify-between shrink-0"
        >
          <div className="absolute inset-3 border border-[#F4F1E9] opacity-80 pointer-events-none"></div>
        </div>

        {/* Card 2 */}
        <div
          ref={card2Ref}
          className="w-full max-w-[360px] lg:w-[360px] h-[340px] sm:h-[380px] bg-[#F4F4F5] border-[1.5px] border-[#D4D4D8] rotate-0 lg:-rotate-[2deg] transition-transform duration-300 hover:rotate-0 p-8 sm:p-10 flex flex-col justify-between items-center text-center shadow-xl shrink-0"
        >
          <span className="font-['Oswald'] font-normal text-[100px] sm:text-[144px] leading-none text-[#D3533D]">
            01
          </span>
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] uppercase tracking-wider text-[#101010]">
            PRIMARY ATELIER BLOCK
          </span>
        </div>

        {/* Card 3 */}
        <div
          ref={card3Ref}
          className="w-full max-w-[350px] lg:w-[350px] h-[340px] sm:h-[350px] bg-[#FFFFFF] border-[1.5px] border-[#111111] shadow-2xl rotate-0 lg:rotate-[5deg] transition-transform duration-300 hover:rotate-0 p-4 flex flex-col justify-between shrink-0"
        >
          <div className="w-full h-[240px] sm:h-[260px] bg-[#D3533D] flex items-center justify-center relative overflow-hidden">
            <div className="w-10 h-10 bg-[#FFFFFF] border border-[#111111] rotate-[45deg]"></div>
          </div>

          <div className="flex flex-row justify-between items-center w-full px-1 font-['Inter',sans-serif] text-[#101010]">
            <span className="font-semibold text-[12px]">COMP_C.IMG</span>
            <span className="font-normal text-[11px]">1:1 RATIO</span>
          </div>
        </div>
      </div>

      <div ref={btnRef} className="w-full max-w-[1312px] mx-auto flex justify-center pt-6">
        <Button showArrow={true}>Book A Call</Button>
      </div>
    </section>
  );
}
