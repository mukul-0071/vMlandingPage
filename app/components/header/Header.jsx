"use client";

import React, { useState } from "react";
import Image from "next/image";
import logoSvg from "../../../assets/icons/virkMediaBrandLogofull.svg";
import hamburgerMenuSvg from "../../../assets/icons/hamburgerMenu.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 w-[92%] sm:w-[95%] max-w-[1440px] z-50">
      {/* Main Header Bar */}
      <div className="w-full h-[72px] md:h-[86px] px-6 md:px-12 flex items-center justify-between rounded-[22px] bg-black/40 backdrop-blur-md border border-white/15 shadow-[0_4_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center">
          <Image
            src={logoSvg}
            alt="Virk Media Logo"
            width={230}
            height={40}
            className="w-[160px] sm:w-[190px] md:w-[230px] h-auto object-contain"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 md:gap-10">
          <a
            href="#home"
            className="text-white font-['Satoshi',sans-serif] text-sm md:text-base font-medium uppercase tracking-wider hover:text-[#D3533D] transition-colors"
          >
            Home
          </a>
          <a
            href="#proof-of-work"
            className="text-[#F4F1E9] font-['Satoshi',sans-serif] text-sm md:text-base font-medium uppercase tracking-wider hover:text-[#D3533D] transition-colors"
          >
            Proof of Work
          </a>
          <a
            href="#about"
            className="text-[#F4F1E9] font-['Satoshi',sans-serif] text-sm md:text-base font-medium uppercase tracking-wider hover:text-[#D3533D] transition-colors"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-[#F4F1E9] font-['Satoshi',sans-serif] text-sm md:text-base font-medium uppercase tracking-wider hover:text-[#D3533D] transition-colors"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
        >
          <Image
            src={hamburgerMenuSvg}
            alt="Hamburger Menu"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu (Styled same as header glassmorphism) */}
      {isOpen && (
        <div className="md:hidden mt-3 w-full p-6 flex flex-col gap-5 rounded-[22px] bg-black/80 backdrop-blur-xl border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-top-4 duration-300">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-white font-['Satoshi',sans-serif] text-base font-medium uppercase tracking-wider hover:text-[#D3533D] transition-colors py-1 border-b border-white/10"
          >
            Home
          </a>
          <a
            href="#proof-of-work"
            onClick={() => setIsOpen(false)}
            className="text-[#F4F1E9] font-['Satoshi',sans-serif] text-base font-medium uppercase tracking-wider hover:text-[#D3533D] transition-colors py-1 border-b border-white/10"
          >
            Proof of Work
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-[#F4F1E9] font-['Satoshi',sans-serif] text-base font-medium uppercase tracking-wider hover:text-[#D3533D] transition-colors py-1 border-b border-white/10"
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-[#F4F1E9] font-['Satoshi',sans-serif] text-base font-medium uppercase tracking-wider hover:text-[#D3533D] transition-colors py-1"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
