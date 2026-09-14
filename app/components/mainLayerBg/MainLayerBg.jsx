"use client";

import React from "react";
import FireSection from "../fireSection/FireSection";

export function BaseLayer({ children, className = "" }) {
  return (
    <div
      className={`relative z-0 bg-[#717171] w-full min-h-screen overflow-hidden ${className}`}
    >
      {/* Animated Fire graphics rendered on BaseLayer aligned to SecondSection */}
      <div className="absolute top-[2200px] sm:top-[2450px] lg:top-[2700px] right-0 pointer-events-none z-0">
        <FireSection position="right" />
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
          "radial-gradient(circle, transparent 0, transparent 1px, #101010 1px)",
        backgroundSize: "24px 24px",
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
        <DottedLayer>
        {children}
        </DottedLayer>
      </BaseLayer>
    </div>
  );
}


