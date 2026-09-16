"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import paperPinSvg from "../../../assets/icons/paperPin.svg";

export default function PinnedStepCard({
  number,
  title,
  description,
  buttonText,
  buttonOnClick,
  className = "",
}) {
  const cardRef = useRef(null);
  const [hasBeenHovered, setHasBeenHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mouseRotate, setMouseRotate] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHasBeenHovered(true);
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const pinX = rect.width * 0.78;
    const pinY = rect.height * 0.12;

    const deltaX = (x - pinX) / rect.width;
    const deltaY = (y - pinY) / rect.height;

    setMouseRotate({
      rotateY: deltaX * 8,
      rotateX: -deltaY * 6,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseRotate({ rotateX: 0, rotateY: 0 });
  };

  const active = isHovered || hasBeenHovered;

  return (
    <div className={`relative w-[310px] sm:w-[396px] h-[380px] sm:h-[396px] ${className}`}>
      {/* Background Big Number Behind Card */}
      <span className="absolute left-1 sm:-left-3 -top-12 sm:-top-14 font-['Oswald'] font-bold text-[88px] sm:text-[112px] leading-none uppercase text-[#D3533D] z-0 select-none pointer-events-none">
        {number}
      </span>

      {/* Paper Pin - Completely static, fixed at pin anchor point */}
      <div className="absolute top-4 sm:top-5 right-7 sm:right-11 z-30 pointer-events-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
        <Image
          src={paperPinSvg}
          alt="Paper Pin"
          width={75}
          height={75}
          className="w-[58px] sm:w-[75px] h-auto object-contain transform -rotate-12"
        />
        <div className="w-[38px] sm:w-[45px] h-[5px] bg-[#98958E] opacity-60 blur-[3px] rounded-full mt-[-8px] sm:mt-[-10px] ml-2" />
      </div>

      {/* Main Paper Card Container */}
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative z-10 w-full h-full cursor-pointer group ${
          isHovered
            ? "pendulum-swing"
            : "transition-transform duration-500 ease-out"
        }`}
        style={{
          transformOrigin: "78% 12%",
          transform: active
            ? `rotate(-10.43deg) rotateX(${mouseRotate.rotateX}deg) rotateY(${mouseRotate.rotateY}deg)`
            : "rotate(0deg)",
        }}
      >
        {/* Paper Card Frame */}
        <div className="w-[280px] sm:w-[323px] h-[290px] sm:h-[323px] ml-[18px] sm:ml-[29px] mt-[32px] sm:mt-[36px] bg-[#F4F1E9] rounded-[36px] sm:rounded-[60px] p-5 sm:p-10 flex flex-col justify-center items-center gap-4 sm:gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20">
          <div className="flex flex-col items-center gap-2 sm:gap-2.5 text-center">
            <h3 className="font-['Oswald'] font-bold text-[18px] sm:text-[22px] leading-[26px] sm:leading-[33px] uppercase text-[#101010]">
              {title}
            </h3>
            <p className="font-['Satoshi',sans-serif] font-medium text-[13px] sm:text-[16px] leading-[18px] sm:leading-[22px] text-[#98958E] max-w-[243px]">
              {description}
            </p>
          </div>

          {buttonText && (
            <button
              onClick={buttonOnClick}
              className="w-full max-w-[243px] py-2.5 sm:py-3 px-3 sm:px-4 bg-[#D3533D] hover:bg-[#bd4531] text-[#F4F1E9] rounded-[10px] font-['Satoshi',sans-serif] font-bold text-[13px] sm:text-[18px] leading-[20px] sm:leading-[22px] transition-all transform hover:scale-105 active:scale-95"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
