"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import logoSvg from "../../../assets/icons/virkMediaBrandLogofull.svg";

export default function SplashScreen() {
  const overlayRef = useRef(null);
  const logoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          setIsVisible(false);
        },
      });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" }
      )
        .to(logoRef.current, { duration: 0.6 })
        .to(overlayRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power3.inOut",
        });
    });

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[99999] w-screen h-screen bg-[#662920] flex flex-col items-center justify-center p-4 select-none pointer-events-auto"
    >
      <div ref={logoRef} className="opacity-0">
        <Image
          src={logoSvg}
          alt="Virk Media Logo"
          width={400}
          height={100}
          className="w-[220px] sm:w-[320px] md:w-[420px] h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
