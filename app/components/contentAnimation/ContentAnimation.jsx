"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContentAnimation({
  children,
  className = "",
  delay = 0,
  parallaxSpeed = 0,
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const el = elementRef.current;
    const ctx = gsap.context(() => {
      // 1. Initial Scroll Reveal (Fade In + Up)
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Parallax Scrolling Movement (if speed > 0)
      if (parallaxSpeed > 0) {
        gsap.to(el, {
          y: -50 * parallaxSpeed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, elementRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={elementRef} className={`w-full ${className}`}>
      {children}
    </div>
  );
}
