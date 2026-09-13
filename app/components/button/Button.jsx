"use client";

import React from "react";

export default function Button({
  children,
  onClick,
  className = "",
  showArrow = false,
}) {
  return (
    <div className={`group relative inline-block ${className}`}>
      <span className="absolute left-0 -top-6 w-[1px] h-[32px] pointer-events-none z-20 transition-all duration-300 bg-gradient-to-t from-[#D3533D] group-hover:from-[#F4F1E9] to-transparent"></span>
      <span className="absolute -left-6 top-0 w-[32px] h-[1px] pointer-events-none z-20 transition-all duration-300 bg-gradient-to-l from-[#D3533D] group-hover:from-[#F4F1E9] to-transparent"></span>

      <span className="absolute right-0 -top-6 w-[1px] h-[32px] pointer-events-none z-20 transition-all duration-300 bg-gradient-to-t from-[#D3533D] group-hover:from-[#F4F1E9] to-transparent"></span>
      <span className="absolute -right-6 top-0 w-[32px] h-[1px] pointer-events-none z-20 transition-all duration-300 bg-gradient-to-r from-[#D3533D] group-hover:from-[#F4F1E9] to-transparent"></span>

      <span className="absolute left-0 -bottom-6 w-[1px] h-[32px] pointer-events-none z-20 transition-all duration-300 bg-gradient-to-b from-[#D3533D] group-hover:from-[#F4F1E9] to-transparent"></span>
      <span className="absolute -left-6 bottom-0 w-[32px] h-[1px] pointer-events-none z-20 transition-all duration-300 bg-gradient-to-l from-[#D3533D] group-hover:from-[#F4F1E9] to-transparent"></span>

      <span className="absolute right-0 -bottom-6 w-[1px] h-[32px] pointer-events-none z-20 transition-all duration-300 bg-gradient-to-b from-[#D3533D] group-hover:from-[#F4F1E9] to-transparent"></span>
      <span className="absolute -right-6 bottom-0 w-[32px] h-[1px] pointer-events-none z-20 transition-all duration-300 bg-gradient-to-r from-[#D3533D] group-hover:from-[#F4F1E9] to-transparent"></span>

      <button
        onClick={onClick}
        className="relative flex items-center justify-center gap-[10px] w-full h-full px-[30px] py-[10px] bg-[#D3533D] group-hover:bg-[#F4F1E9] text-white group-hover:text-[#D3533D] font-['Satoshi',sans-serif] font-bold text-base text-center leading-none tracking-normal transition-all duration-300 cursor-pointer shadow-lg  whitespace-nowrap"
      >
        <span className="whitespace-nowrap leading-none text-center">
          {children}
        </span>
        {showArrow && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        )}
      </button>
    </div>
  );
}
