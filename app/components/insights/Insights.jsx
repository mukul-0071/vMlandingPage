"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../button/Button";
import insightLeftSvg from "../../../assets/icons/insightLeft.svg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Insights() {
  const sectionRef = useRef(null);
  const graphicRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (graphicRef.current) {
        gsap.set(graphicRef.current, { opacity: 0, scale: 0.35, transformOrigin: "center center" });
        gsap.to(graphicRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: graphicRef.current,
            start: "top 85%",
            end: "top 45%",
            scrub: 0.5,
          },
        });
      }

      if (rightContentRef.current) {
        gsap.set(rightContentRef.current, { opacity: 0, x: 70 });
        gsap.to(rightContentRef.current, {
          opacity: 1,
          x: 0,
          duration: 1,
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
      <div className="w-full max-w-[1312px] mx-auto">
        <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold font-['Oswald'] leading-tight uppercase tracking-tight text-[#F4F1E9]">
          IN<span className="text-[#D3533D]">SIGHTS</span>
        </h2>
      </div>

      <div className="w-full max-w-[1312px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
        <div
          ref={graphicRef}
          className="relative w-full max-w-[780px] lg:w-[760px] xl:w-[820px] h-auto flex items-center justify-center shrink-0"
        >
          <Image
            src={insightLeftSvg}
            alt="Insights Graphic"
            className="w-full h-auto object-contain origin-top-left drop-shadow-[0_0_35px_rgba(211,83,61,0.25)]"
            priority
          />
        </div>

        <div
          ref={rightContentRef}
          className="w-full lg:flex-1 max-w-[550px] lg:max-w-[580px] flex flex-col justify-center items-start gap-8 lg:gap-10 py-4 shrink-0"
        >
          <p className="font-['Satoshi',sans-serif] font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[28px] lg:leading-[32px] text-[#F4F1E9]">
            We've had the same conversations enough times to know how they
            start. Here's what brands keep telling us — and what we tell them
            back.
          </p>

          <ul className="w-full flex flex-col gap-6 lg:gap-8">
            <li className="flex items-start gap-3.5">
              <span className="text-[22px] lg:text-[26px] leading-[28px] lg:leading-[32px] text-[#F4F1E9]">
                •
              </span>
              <p className="font-['Satoshi',sans-serif] font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[28px] lg:leading-[32px] text-[#F4F1E9]">
                "We post every day and nothing happens."
              </p>
            </li>

            <li className="flex items-start gap-3.5">
              <span className="text-[22px] lg:text-[26px] leading-[28px] lg:leading-[32px] text-[#F4F1E9]">
                •
              </span>
              <p className="font-['Satoshi',sans-serif] font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[28px] lg:leading-[32px] text-[#F4F1E9]">
                "We can't keep up with the content."
              </p>
            </li>

            <li className="flex items-start gap-3.5">
              <span className="text-[22px] lg:text-[26px] leading-[28px] lg:leading-[32px] text-[#F4F1E9]">
                •
              </span>
              <p className="font-['Satoshi',sans-serif] font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[28px] lg:leading-[32px] text-[#F4F1E9]">
                "Our content looks good, but it doesn't sell."
              </p>
            </li>
          </ul>

          <div className="pt-2">
            <Button showArrow={true}>Book A Call</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
