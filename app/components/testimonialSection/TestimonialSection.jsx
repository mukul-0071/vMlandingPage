"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../button/Button";
import fbSvg from "../../../assets/icons/fb.svg";
import youtubeSvg from "../../../assets/icons/youtube.svg";
import xSvg from "../../../assets/icons/x.svg";
import instaSvg from "../../../assets/icons/insta.svg";
import linkedinSvg from "../../../assets/icons/linkedin.svg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TestimonialSection() {
  const sectionRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const validWords = wordsRef.current.filter(Boolean);
    if (validWords.length === 0) return;

    const ctx = gsap.context(() => {
      // Set initial blur & opacity for each word
      gsap.set(validWords, {
        filter: "blur(14px)",
        opacity: 0.15,
        y: 10,
      });

      // Animate words one by one to clear normal state on scroll
      gsap.to(validWords, {
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
        stagger: 0.25,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 30%",
          scrub: 0.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const titleWords = [
    { text: "You ", isHighlight: false },
    { text: "Bring ", isHighlight: false },
    { text: "the ", isHighlight: false },
    { text: "Brand.", isHighlight: true },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-[1511px] mx-auto px-4 sm:px-12 lg:px-20 py-20 lg:py-30 flex flex-col items-center gap-12 text-[#F4F1E9] isolation-isolate overflow-hidden"
    >
      {/* Large Decorative Quotes */}
      {/* Left Quote */}
      <span className="absolute left-[5%] sm:left-[10%] lg:left-[14%] top-[40px] sm:top-[60px] font-['Instrument_Serif',serif] font-normal text-[140px] sm:text-[180px] lg:text-[200px] leading-[0.3] text-[#662920] select-none pointer-events-none z-0">
        “
      </span>

      {/* Right Quote */}
      <span className="absolute right-[5%] sm:right-[10%] lg:right-[14%] top-[240px] sm:top-[280px] lg:top-[300px] font-['Instrument_Serif',serif] font-normal text-[140px] sm:text-[180px] lg:text-[200px] leading-[0.3] text-[#662920] select-none pointer-events-none z-0">
        ”
      </span>

      {/* Title & Subtitle Container (Frame 65) */}
      <div className="relative z-10 w-full max-w-[1311px] mx-auto flex flex-col items-center gap-[18px] text-center">
        {/* Main Heading with Word-by-Word Scroll Blur-to-Normal Reveal */}
        <h2 className="font-['Oswald'] font-semibold text-[48px] sm:text-[72px] lg:text-[97px] leading-[1.1] uppercase tracking-tight text-[#F4F1E9] flex flex-wrap justify-center gap-x-3 sm:gap-x-4 lg:gap-x-5">
          {titleWords.map((item, index) => (
            <span
              key={index}
              ref={(el) => (wordsRef.current[index] = el)}
              className={`inline-block transition-all duration-300 ${
                item.isHighlight ? "text-[#D3533D]" : "text-[#F4F1E9]"
              }`}
            >
              {item.text}
            </span>
          ))}
        </h2>

        {/* Sub-heading */}
        <p className="font-['Satoshi',sans-serif] font-medium text-[16px] sm:text-[20px] lg:text-[22px] leading-[1.3] text-[#F4F1E9] tracking-[0.3em] sm:tracking-[0.54em] uppercase">
          WE’LL BRING THE REST
        </p>
      </div>

      {/* Frame 651: Description, Book Call Button & Socials */}
      <div className="relative z-10 w-full max-w-[1311px] mx-auto flex flex-col items-center gap-10 sm:gap-12">
        {/* Description Line & Text */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-[64px] h-[0px] border-t-[1.5px] border-[#111111] opacity-60"></div>
          <p className="max-w-[727px] font-['Satoshi',sans-serif] font-medium text-[14px] sm:text-[16px] leading-[22px] text-[#F4F1E9] opacity-90 px-4">
            Tell us the brand. We'll tell you how it should look, sound, and
            repeat. And don’t worry we will reply within 24 hours.
          </p>
        </div>

        {/* Button with corner crosshairs */}
        <div className="relative p-2">
          <Button showArrow={false}>Let's get you known</Button>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center gap-3 mt-4">
          <span className="font-['Poppins',sans-serif] font-normal text-[13px] leading-[20px] text-[#F4F1E9] opacity-90 tracking-wide">
            Follow us on Social Media
          </span>

          <div className="flex items-center justify-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={fbSvg}
                alt="Facebook"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={youtubeSvg}
                alt="YouTube"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={xSvg}
                alt="X (Twitter)"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={instaSvg}
                alt="Instagram"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={linkedinSvg}
                alt="LinkedIn"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
