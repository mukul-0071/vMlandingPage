"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../button/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OurCreativeTalent() {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        // Desktop initial states:
        // Card 2 (Center) starts upside down (180deg flip)
        // Card 1 (Left) & Card 3 (Right) start hidden off-side
        if (card2Ref.current) {
          gsap.set(card2Ref.current, {
            rotateY: 180,
            transformPerspective: 1000,
            transformStyle: "preserve-3d",
          });
        }
        if (card1Ref.current) {
          gsap.set(card1Ref.current, { opacity: 0, x: -80, scale: 0.95 });
        }
        if (card3Ref.current) {
          gsap.set(card3Ref.current, { opacity: 0, x: 80, scale: 0.95 });
        }
        if (ctaRef.current) {
          gsap.set(ctaRef.current, { opacity: 0, y: 30 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            pinSpacing: true,
            scrub: 0.6,
            anticipatePin: 1,
          },
        });

        // Step 1: Center Card flips straight upright
        tl.to(card2Ref.current, {
          rotateY: 0,
          duration: 1.5,
          ease: "power2.inOut",
        })
          // Step 2: Left and Right cards reveal into grid positions
          .to(
            [card1Ref.current, card3Ref.current],
            {
              opacity: 1,
              x: 0,
              scale: 1,
              stagger: 0.2,
              duration: 1.2,
              ease: "power2.out",
            },
            "+=0.2",
          )
          // Step 3: Reveal CTA Button
          .to(ctaRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
      } else {
        // --- MOBILE ANIMATION (All 3 cards start upside down 180deg & flip upright on scroll) ---
        const cards = [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
        ].filter(Boolean);

        cards.forEach((card) => {
          gsap.set(card, {
            opacity: 0,
            rotateY: 180,
            transformPerspective: 1000,
            transformStyle: "preserve-3d",
          });

          gsap.to(card, {
            opacity: 1,
            rotateY: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              scrub: 0.6,
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
      {/* Section Title */}
      <div className="w-full max-w-[1312px] mx-auto mb-8">
        <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold font-['Oswald'] leading-tight uppercase tracking-tight text-[#F4F1E9]">
          OUR <span className="text-[#D3533D]">CREATIVE</span> TALENT
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-[1312px] mx-auto">
        {/* Card 1 - Left */}
        <div
          ref={card1Ref}
          className="w-full h-auto min-h-[520px] lg:h-[600px] bg-[#F4F1E9] p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden text-[#101010] border border-[#F4F1E9] shadow-xl"
        >
          <div className="flex flex-row justify-between items-center w-full text-[12px] font-['Satoshi',sans-serif]">
            <span className="font-bold uppercase tracking-wider text-[#101010]">
              Audience
            </span>
            <span className="font-normal uppercase tracking-wider text-[#101010] opacity-80">
              PORTRAIT
            </span>
          </div>

          <div className="relative w-full h-[380px] sm:h-[400px] bg-[#D3533D] my-auto overflow-hidden shadow-md flex flex-col justify-between p-6"></div>

          <div className="w-[120px] h-[8px] bg-[#101010] opacity-30 rounded-[4px] mt-2"></div>
        </div>

        {/* Card 2 - Center (Flip Card) */}
        <div
          ref={card2Ref}
          className="w-full h-auto min-h-[520px] lg:h-[600px] bg-[#F4F1E9] p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden text-[#101010] border border-[#F4F1E9] shadow-xl"
        >
          <div className="flex flex-row justify-between items-center w-full text-[12px] font-['Satoshi',sans-serif]">
            <span className="font-bold uppercase tracking-wider text-[#101010]">
              Audience
            </span>
            <span className="font-normal uppercase tracking-wider text-[#101010] opacity-80">
              PORTRAIT
            </span>
          </div>

          <div className="relative w-full h-[380px] sm:h-[400px] bg-[#D3533D] my-auto overflow-hidden shadow-md flex flex-col justify-between p-6"></div>

          <div className="w-[120px] h-[8px] bg-[#101010] opacity-30 rounded-[4px] mt-2"></div>
        </div>

        {/* Card 3 - Right */}
        <div
          ref={card3Ref}
          className="w-full h-auto min-h-[520px] lg:h-[600px] bg-[#F4F1E9] p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden text-[#101010] border border-[#F4F1E9] shadow-xl"
        >
          <div className="flex flex-row justify-between items-center w-full text-[12px] font-['Satoshi',sans-serif]">
            <span className="font-bold uppercase tracking-wider text-[#101010]">
              Audience
            </span>
            <span className="font-normal uppercase tracking-wider text-[#101010] opacity-80">
              PORTRAIT
            </span>
          </div>

          <div className="relative w-full h-[380px] sm:h-[400px] bg-[#D3533D] my-auto overflow-hidden shadow-md flex flex-col justify-between p-6"></div>

          <div className="w-[120px] h-[8px] bg-[#101010] opacity-30 rounded-[4px] mt-2"></div>
        </div>
      </div>

      {/* Action Button at bottom */}
      <div
        ref={ctaRef}
        className="w-full max-w-[1312px] mx-auto flex justify-start pt-6"
      >
        <Button showArrow={true}>Book A Call</Button>
      </div>
    </section>
  );
}
