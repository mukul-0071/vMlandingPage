"use client";

import React from "react";
import FireSection from "../fireSection/FireSection";

export function BaseLayer({ children, className = "" }) {
  return (
    <div
      className={`relative z-0 bg-[#494949] w-full min-h-screen overflow-hidden ${className}`}
    >
      {/* Animated Fire graphics rendered on BaseLayer aligned to SecondSection (Right side) */}
      <div className="absolute top-[3100px] sm:top-[2600px] lg:top-[2700px] right-0 pointer-events-none z-0">
        <FireSection position="right" />
      </div>

      {/* Animated Fire graphics rendered on BaseLayer below (Left side) */}
      <div className="absolute top-[4400px] sm:top-[3800px] lg:top-[3800px] left-0 pointer-events-none z-0">
        <FireSection position="left" />
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
          "radial-gradient(circle, transparent 0, transparent 1.5px, #101010 1.5px)",
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
