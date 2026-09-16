"use client";

import React from "react";
import Image from "next/image";
import flashEllipseSvg from "../../../assets/icons/flashEllipse.svg";

export default function AboutusBackground({ children, className = "" }) {
  return (
    <div
      className={`relative w-full min-h-screen bg-[#101010] overflow-hidden ${className}`}
    >
      {/* Background Flash Ellipse SVG Asset */}
      <div className="absolute top-45 sm:top-55 md:top-65 left-[48.58%] -translate-x-1/2 pointer-events-none z-0 w-[1200px] sm:w-[1500px] md:w-[1905px] max-w-none h-auto opacity-75 mix-blend-screen">
        <Image
          src={flashEllipseSvg}
          alt="Flash Ellipse Background Accent"
          priority
          className="w-full h-auto object-contain pointer-events-none"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full min-h-screen">{children}</div>
    </div>
  );
}
