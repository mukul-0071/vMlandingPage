"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../header/Header";
import Button from "../button/Button";

import ParticleTextHover from "./ParticleTextHover";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const subHeadingLettersRef = useRef([]);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Scroll parallax for content
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0.3,
        scale: 0.95,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // 2. Wave entrance animation for "ALL FROM ONE HOUSE" letters dropping from top ONCE on load
      const validLetters = subHeadingLettersRef.current.filter(Boolean);
      if (validLetters.length > 0) {
        gsap.set(validLetters, {
          y: -50,
          opacity: 0,
          scale: 0.8,
        });

        gsap.to(validLetters, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.03,
          ease: "back.out(1.5)",
          delay: 0.2,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const subHeadingText = "ALL FROM ONE HOUSE";

  return (
    <section
      ref={heroRef}
      className="relative w-full h-full min-h-screen flex flex-col justify-center items-center overflow-hidden py-20 px-4 bg-[#0d0d0d]"
    >
      <Header />

      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#101010]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 mix-blend-hard-light"
        >
          <source src="/virkMediaHerosectiontwo.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: "linear-gradient(0deg, #D3533D 0%, #D3533D 100%)",
            mixBlendMode: "hue",
          }}
        ></div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, transparent 35%, rgba(16,16,16,0.7) 80%, #101010 100%)",
          }}
        ></div>
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center max-w-6xl w-full text-center gap-2 sm:gap-2 mt-14"
      >
        {/* Text for BRAND. CONTENT. ATTENTION. */}
        <ParticleTextHover />

        {/* Wave Entrance Drop Animation for ALL FROM ONE HOUSE */}
        <h2 className="text-[#F4F1E9] font-['Oswald'] font-bold text-base sm:text-2xl md:text-2xl md:leading-9 tracking-[0.25em] sm:tracking-[0.55em] uppercase flex flex-wrap justify-center overflow-hidden py-1">
          {subHeadingText.split("").map((char, index) => (
            <span
              key={index}
              ref={(el) => (subHeadingLettersRef.current[index] = el)}
              className="inline-block transition-all"
              style={{ minWidth: char === " " ? "0.4em" : "auto" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        <p className="text-[#F4F1E9] font-['Satoshi',sans-serif] font-normal text-base sm:text-lg md:text-xl leading-7 max-w-3xl text-center opacity-90">
          You bring the brand. We shape how it looks, what it says, and how it
          gets seen with branding, content, and advertising, built around the
          same direction.
        </p>

        <div className="mt-3">
          <Button
            className="min-w-[16.0625rem] h-11"
            onClick={() => console.log("Teardown clicked")}
          >
            Get a free brand teardown
          </Button>
        </div>
      </div>
    </section>
  );
}
