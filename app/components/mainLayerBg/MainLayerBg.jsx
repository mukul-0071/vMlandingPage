"use client";

import React from "react";
import Image from "next/image";
import FireSection from "../fireSection/FireSection";
import SubtractSvg from "../../../assets/icons/Subtract.svg";
import rectangleSvg from "../../../assets/icons/rectangle.svg";

export function BaseLayer({ children, className = "" }) {
  return (
    <div
      className={`relative z-0 bg-[#494949] w-full min-h-screen overflow-hidden ${className}`}
    >
      {/* rendered on BaseLayer aligned to SecondSection (Right side) */}
      <div className="absolute top-[3100px] sm:top-[2600px] lg:top-[2700px] right-0 pointer-events-none z-0">
        <FireSection position="right" />
      </div>

      {/*  rendered on BaseLayer (Left side) */}
      <div className="absolute top-[4400px] sm:top-[3800px] lg:top-[3800px] left-0 pointer-events-none z-0">
        <FireSection position="left" />
      </div>

      {/*  rendered on BaseLayer aligned to BrandsWorthFinding (Right side) */}
      <div className="absolute top-[8200px] sm:top-[6000px] lg:top-[6500px] right-0 pointer-events-none z-0">
        <FireSection position="right" />
      </div>
      <div className="absolute top-[9200px] sm:top-[6000px] lg:top-[7500px] right-0 pointer-events-none z-0">
        <FireSection position="right" />
      </div>

      {/* Subtract  BaseLayer touching left 0 */}
      <div className="absolute top-[9800px] sm:top-[7300px] lg:top-[7700px] left-0 pointer-events-none z-0">
        <Image
          src={SubtractSvg}
          alt="Subtract Accent"
          className="w-auto h-auto object-contain pointer-events-none"
        />
      </div>

      {/* Rectangle SVG on BaseLayer behind Proof of Work Card 1 area */}
      <div className="absolute top-[9850px] sm:top-[7350px] lg:top-[8060px] left-[5%] sm:left-[10%] lg:left-[14%] pointer-events-none z-0">
        <Image
          src={rectangleSvg}
          alt="Rectangle Accent"
          className="w-auto h-auto object-contain pointer-events-none opacity-90"
        />
      </div>
      <div className="absolute top-[10900px] sm:top-[6000px] lg:top-[9200px] right-0 pointer-events-none z-0">
        <FireSection position="right" />
      </div>
      {/* Additional Bottom FireSection for Testimonial Section area */}
      <div className="absolute top-[15500px] sm:top-[10200px] lg:top-[11950px] left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none z-0">
        <FireSection position="bottom" />
      </div>
      {children}
    </div>
  );
}

export function DottedLayer({ children, className = "" }) {
  return (
    <div
      className={`relative z-10 min-h-screen w-full ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle, transparent 0, transparent 1.5px, #000000 1.5px)",
        backgroundSize: "34px 34px",
      }}
    >
      {children}
    </div>
  );
}

export default function MainLayerBg({ children, className = "" }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <BaseLayer>
        <DottedLayer>{children}</DottedLayer>
      </BaseLayer>
    </div>
  );
}
