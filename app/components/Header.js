import React from "react";
import Image from "next/image";
import logoSvg from "../../assets/icons/virkMediaBrandLogofull.svg";

export default function Header() {
  return (
    <header className="absolute top-8 left-1/2 -translate-x-1/2 w-[95%] max-w-[1440px] h-[86px] px-8 md:px-12 flex items-center justify-between z-50 rounded-[22px] bg-black/40 backdrop-blur-md border border-white/15 shadow-[0_4_30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center">
        <Image
          src={logoSvg}
          alt="Virk Media Logo"
          width={230}
          height={40}
          className="w-[190px] md:w-[230px] h-auto object-contain"
          priority
        />
      </div>

      <nav className="flex items-center gap-8 md:gap-10">
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
    </header>
  );
}

