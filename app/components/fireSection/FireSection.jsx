"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import fireOne from "../../../assets/icons/fireOne.svg";
import fireTwo from "../../../assets/icons/fireTwo.svg";

export default function FireSection({ position = "right", children, className = "" }) {
  const fireGroupRef = useRef(null);

  useEffect(() => {
    if (!fireGroupRef.current) return;

    // Smooth continuous up-and-down floating / moving animation for both fire graphics together
    const ctx = gsap.context(() => {
      gsap.to(fireGroupRef.current, {
        y: 40,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  const isRight = position === "right";

  return (
    <section className={`relative w-full max-w-[1512px] mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 text-[#F4F1E9] overflow-hidden ${className}`}>
      {/* Side Animated Fire Graphics Container */}
      <div
        className={`absolute top-0 bottom-0 ${
          isRight ? "right-0" : "left-0"
        } w-[220px] sm:w-[320px] lg:w-[420px] pointer-events-none flex items-center justify-center z-10 overflow-hidden`}
      >
        <div
          ref={fireGroupRef}
          className={`flex flex-col items-center justify-center -space-y-16 sm:-space-y-24 ${
            isRight ? "-rotate-90" : "rotate-90"
          } w-[600px] lg:w-[800px] shrink-0`}
        >
          {/* Fire One Graphic */}
          <div className="w-full flex justify-center">
            <Image
              src={fireOne}
              alt="Fire Accent 1"
              className="w-full h-auto object-contain select-none pointer-events-none"
              priority
            />
          </div>

          {/* Fire Two Graphic (Overlapping center) */}
          <div className="w-full flex justify-center -mt-12 sm:-mt-20">
            <Image
              src={fireTwo}
              alt="Fire Accent 2"
              className="w-full h-auto object-contain select-none pointer-events-none"
              priority
            />
          </div>
        </div>
      </div>

      {/* Optional Inner Content Area */}
      {children && (
        <div
          className={`w-full max-w-[800px] flex flex-col gap-8 relative z-20 ${
            !isRight ? "ml-auto" : ""
          }`}
        >
          {children}
        </div>
      )}
    </section>
  );
}
