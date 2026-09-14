"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ContentAnimation({ children, className = "", delay = 0 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    let observer;
    const ctx = gsap.context(() => {
      const el = elementRef.current;

      // Set initial hidden state: shifted downwards with zero opacity
      gsap.set(el, {
        y: 60,
        opacity: 0,
      });

      // IntersectionObserver to detect when section enters screen on scroll
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                delay: delay,
                ease: "power3.out",
              });
              // Stop observing once animated
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      observer.observe(el);
    }, elementRef);

    return () => {
      if (observer) observer.disconnect();
      ctx.revert();
    };
  }, [delay]);

  return (
    <div ref={elementRef} className={`w-full ${className}`}>
      {children}
    </div>
  );
}
