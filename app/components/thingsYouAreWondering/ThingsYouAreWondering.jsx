"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqItems = [
  {
    id: 1,
    question: "So, how exactly does Virk Media help our brand?",
    answer:
      "We decide how your brand should look, sound, and show up. Then we handle the production that brings it to life, week after week.",
  },
  {
    id: 2,
    question: "Are you an agency or a production house?",
    answer:
      "We are the best of both. We build the plan and produce the work ourselves. So there’s no gap between what we want to create and what actually gets made.",
  },
  {
    id: 3,
    question: "Do you have in-house creators or do you hire out?",
    answer:
      "We run a vetted network of directors, shooters, editors, and creators. We match the right people to your brand and campaign, based on what the work needs.",
  },
  {
    id: 4,
    question: "What's this going to cost?",
    answer:
      "We price around the work your brand needs. Instead of splitting everything between different services and vendors, we handle the complete package, from strategy to production.",
  },
  {
    id: 5,
    question: "What if we don't know what we want yet?",
    answer:
      "No worries. Most brands don't. That's what the first phase is for. We sit with the brands, work out what it actually needs to be known for, and come back with a direction.",
  },
  {
    id: 6,
    question: "How quickly can we get started?",
    answer:
      "As soon as we align on the direction. We onboard quickly and dive straight into strategy and initial production concepts within the first week.",
  },
];

export default function ThingsYouAreWondering() {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  const card6Ref = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = [
        card1Ref.current,
        card2Ref.current,
        card3Ref.current,
        card4Ref.current,
        card5Ref.current,
        card6Ref.current,
      ].filter(Boolean);

      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        gsap.set(cards, { opacity: 0, y: 60, scale: 0.95 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=80",
            pin: true,
            pinSpacing: true,
            scrub: 0.3,
            anticipatePin: 1,
          },
        });

        cards.forEach((card, index) => {
          tl.to(
            card,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power2.out",
            },
            `card-${index}`,
          );
        });
      } else {
        cards.forEach((card) => {
          gsap.set(card, { opacity: 0, y: 50, scale: 0.96 });
          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 55%",
              scrub: 0.5,
            },
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-[1512px] mx-auto px-4 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-center gap-12 lg:gap-16 text-[#F4F1E9] min-h-screen"
    >
      <div className="w-full max-w-[1312px] mx-auto text-center">
        <h2 className="text-[36px] sm:text-[52px] lg:text-[68px] font-bold font-['Oswald'] leading-tight uppercase tracking-tight text-[#F4F1E9]">
          THINGS YOU'RE{" "}
          <span className="text-[#D3533D]">PROBABLY WONDERING.</span>
        </h2>
      </div>

      <div className="w-full max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div
            ref={card1Ref}
            className="group relative cursor-pointer p-7 lg:p-8 rounded-[30px] overflow-hidden bg-[#101010] border-[1px] border-[#DD7049] transition-all duration-700 ease-in-out flex flex-col justify-between min-h-[170px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#DD7049] to-[#662920] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none z-0"></div>
            <div className="relative z-10 flex flex-col gap-3">
              <h3 className="font-['Satoshi',sans-serif] font-bold text-[18px] sm:text-[20px] leading-[27px] text-[#F4F1E9]">
                {faqItems[0].question}
              </h3>
              <p className="font-['Satoshi',sans-serif] font-medium text-[15px] sm:text-[16px] leading-[27px] text-[#F4F1E9] opacity-90">
                {faqItems[0].answer}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              ref={card4Ref}
              className="group relative cursor-pointer p-7 rounded-[30px] overflow-hidden bg-[#101010] border-[1px] border-[#DD7049] transition-all duration-700 ease-in-out flex flex-col justify-between min-h-[370px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#DD7049] to-[#662920] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none z-0"></div>
              <div className="relative z-10 flex flex-col gap-4">
                <h3 className="font-['Satoshi',sans-serif] font-bold text-[18px] sm:text-[20px] leading-[27px] text-[#F4F1E9]">
                  {faqItems[3].question}
                </h3>
                <p className="font-['Satoshi',sans-serif] font-medium text-[15px] sm:text-[16px] leading-[27px] text-[#F4F1E9] opacity-90">
                  {faqItems[3].answer}
                </p>
              </div>
            </div>

            <div
              ref={card5Ref}
              className="group relative cursor-pointer p-7 rounded-[30px] overflow-hidden bg-[#101010] border-[1px] border-[#DD7049] transition-all duration-700 ease-in-out flex flex-col justify-between min-h-[370px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#DD7049] to-[#662920] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none z-0"></div>
              <div className="relative z-10 flex flex-col gap-4">
                <h3 className="font-['Satoshi',sans-serif] font-bold text-[18px] sm:text-[20px] leading-[27px] text-[#F4F1E9]">
                  {faqItems[4].question}
                </h3>
                <p className="font-['Satoshi',sans-serif] font-medium text-[15px] sm:text-[16px] leading-[27px] text-[#F4F1E9] opacity-90">
                  {faqItems[4].answer}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              ref={card2Ref}
              className="group relative cursor-pointer p-7 lg:p-8 rounded-[30px] overflow-hidden bg-[#101010] border-[1px] border-[#DD7049] transition-all duration-700 ease-in-out flex flex-col justify-between min-h-[305px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#DD7049] to-[#662920] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none z-0"></div>
              <div className="relative z-10 flex flex-col gap-4">
                <h3 className="font-['Satoshi',sans-serif] font-bold text-[18px] sm:text-[20px] leading-[27px] text-[#F4F1E9]">
                  {faqItems[1].question}
                </h3>
                <p className="font-['Satoshi',sans-serif] font-medium text-[15px] sm:text-[16px] leading-[27px] text-[#F4F1E9] opacity-90">
                  {faqItems[1].answer}
                </p>
              </div>
            </div>

            <div
              ref={card3Ref}
              className="group relative cursor-pointer p-7 lg:p-8 rounded-[30px] overflow-hidden bg-[#101010] border-[1px] border-[#DD7049] transition-all duration-700 ease-in-out flex flex-col justify-between min-h-[305px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#DD7049] to-[#662920] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none z-0"></div>
              <div className="relative z-10 flex flex-col gap-4">
                <h3 className="font-['Satoshi',sans-serif] font-bold text-[18px] sm:text-[20px] leading-[27px] text-[#F4F1E9]">
                  {faqItems[2].question}
                </h3>
                <p className="font-['Satoshi',sans-serif] font-medium text-[15px] sm:text-[16px] leading-[27px] text-[#F4F1E9] opacity-90">
                  {faqItems[2].answer}
                </p>
              </div>
            </div>
          </div>

          <div
            ref={card6Ref}
            className="group relative cursor-pointer p-7 lg:p-8 rounded-[30px] overflow-hidden bg-[#101010] border-[1px] border-[#DD7049] transition-all duration-700 ease-in-out flex flex-col justify-between min-h-[236px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#DD7049] to-[#662920] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none z-0"></div>
            <div className="relative z-10 flex flex-col gap-3">
              <h3 className="font-['Satoshi',sans-serif] font-bold text-[18px] sm:text-[20px] leading-[27px] text-[#F4F1E9]">
                {faqItems[5].question}
              </h3>
              <p className="font-['Satoshi',sans-serif] font-medium text-[15px] sm:text-[16px] leading-[27px] text-[#F4F1E9] opacity-90">
                {faqItems[5].answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
