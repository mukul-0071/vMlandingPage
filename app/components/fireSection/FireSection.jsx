"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import fireOne from "../../../assets/icons/fireOne.svg";
import fireTwo from "../../../assets/icons/fireTwo.svg";

export default function FireSection({
  position = "right",
  children,
  className = "",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Smooth continuous vertical up-and-down floating & gentle flickering animation
    const ctx = gsap.context(() => {
      // Up and down movement along screen Y-axis
      gsap.to(containerRef.current, {
        y: -90,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  const isRight = position === "right";
  const isBottom = position === "bottom";

  const fireGraphicEl = (
    <div
      ref={containerRef}
      className={`pointer-events-none flex items-center ${
        isBottom
          ? "justify-center w-full"
          : isRight
          ? "justify-end"
          : "justify-start"
      } select-none`}
    >
      <div
        className={`pointer-events-none flex flex-col items-center justify-center -space-y-16 sm:-space-y-24 ${
          isBottom
            ? "rotate-0 translate-y-[20%] w-full max-w-[1200px]"
            : isRight
            ? "-rotate-90 translate-x-[42%] sm:translate-x-[45%] lg:translate-x-[42%] w-[650px] sm:w-[800px] lg:w-[950px]"
            : "rotate-90 -translate-x-[42%] sm:-translate-x-[45%] lg:-translate-x-[42%] w-[650px] sm:w-[800px] lg:w-[950px]"
        } shrink-0 select-none`}
      >
        {/* Fire One Graphic */}
        <div className="w-full flex justify-center">
          <Image
            src={fireOne}
            alt="Fire Accent 1"
            className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_0_20px_rgba(235,90,60,0.4)]"
            priority
          />
        </div>

        {/* Fire Two Graphic */}
        <div className="w-full flex justify-center -mt-12 sm:-mt-20">
          <Image
            src={fireTwo}
            alt="Fire Accent 2"
            className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_0_20px_rgba(235,90,60,0.4)]"
            priority
          />
        </div>
      </div>
    </div>
  );

  // When used purely as a background fire graphic on BaseLayer
  if (!children) {
    return (
      <div
        className={`pointer-events-none flex items-center ${
          isBottom
            ? "justify-center w-full"
            : isRight
            ? "justify-end"
            : "justify-start"
        } overflow-visible ${className}`}
      >
        {fireGraphicEl}
      </div>
    );
  }

  return (
    <section
      className={`relative w-full max-w-[1512px] mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 text-[#F4F1E9] overflow-hidden ${className}`}
    >
      {/* Side Animated Fire Graphics Container */}
      <div
        className={`absolute top-0 bottom-0 ${
          isRight ? "right-0" : "left-0"
        } w-[220px] sm:w-[320px] lg:w-[420px] pointer-events-none flex items-center justify-center z-10 overflow-hidden`}
      >
        {fireGraphicEl}
      </div>

      {/* Inner Content Area */}
      <div
        className={`w-full max-w-[800px] flex flex-col gap-8 relative z-20 ${
          !isRight ? "ml-auto" : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
}
