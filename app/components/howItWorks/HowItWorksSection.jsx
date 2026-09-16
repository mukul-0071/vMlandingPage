"use client";

import React from "react";
import Button from "../button/Button";
import PinnedStepCard from "../pinnedStepCard/PinnedStepCard";

const STEPS_DATA = [
  {
    number: "01",
    title: "CREATE YOUR ACCOUNT",
    description:
      "Sign up and upload your business documents. Once our team verifies them, you're ready to start your first campaign.",
    buttonText: "See the documents you'll need",
  },
  {
    number: "02",
    title: "SHARE YOUR BRIEF",
    description:
      "Tell us what you're promoting, your goal, your budget, and who you want to reach. Upload your logo and any images you have.",
  },
  {
    number: "03",
    title: "WE CREATE YOUR ADS",
    description:
      "Our team writes, designs, and edits your ads, whether reels, posts, stories, or carousels.",
  },
  {
    number: "04",
    title: "YOU APPROVE",
    description:
      "See your ads before they go live. Approve them or ask for changes.",
  },
  {
    number: "05",
    title: "WE RUN THEM",
    description:
      "We set up your ads on Meta and Google through our own accounts and manage the targeting and budget.",
  },
  {
    number: "06",
    title: "TRACK YOUR RESULTS",
    description:
      "See your spend, reach, leads, and sales on your dashboard, with a full report at the end.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative w-full py-20 px-0 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-58.5 left-0 right-0 h-[1px] pointer-events-none z-0 bg-gradient-to-r from-transparent via-[#F4F1E9]/40 to-transparent" />
      <div className="absolute top-[52%] left-0 right-0 h-[1px] pointer-events-none z-0 bg-gradient-to-r from-transparent via-[#F4F1E9]/40 to-transparent" />
      <div className="absolute bottom-55.5 left-0 right-0 h-[1px] pointer-events-none z-0 bg-gradient-to-r from-transparent via-[#F4F1E9]/40 to-transparent" />

      <div className="hidden xl:block absolute top-[90px] bottom-[40px] left-[calc(50%-670px)] w-[1px] pointer-events-none z-0 bg-gradient-to-b from-transparent via-[#F4F1E9]/40 to-transparent" />
      <div className="hidden lg:block absolute top-[90px] bottom-[40px] left-[calc(50%-223px)] w-[1px] pointer-events-none z-0 bg-gradient-to-b from-transparent via-[#F4F1E9]/40 to-transparent" />
      <div className="hidden lg:block absolute top-[90px] bottom-[40px] left-[calc(50%+223px)] w-[1px] pointer-events-none z-0 bg-gradient-to-b from-transparent via-[#F4F1E9]/40 to-transparent" />
      <div className="hidden xl:block absolute top-[90px] bottom-[40px] right-[calc(50%-670px)] w-[1px] pointer-events-none z-0 bg-gradient-to-b from-transparent via-[#F4F1E9]/40 to-transparent" />

      <div className="relative z-10 text-center mb-16 max-w-4xl px-4">
        <h2 className="font-['Oswald'] font-bold text-[28px] sm:text-[40px] md:text-[48px] leading-tight uppercase text-[#F4F1E9] tracking-wider">
          HERE'S HOW IT WORKS: FROM{" "}
          <span className="text-[#D3533D]">BRIEF TO RESULTS</span>
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-[1340px] w-full justify-items-center py-6 px-4">
        {STEPS_DATA.map((step) => (
          <PinnedStepCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            buttonText={step.buttonText}
          />
        ))}
      </div>

      <div className="relative z-10 mt-25 flex flex-col items-center gap-8">
        <div className="flex flex-row items-center gap-6 sm:gap-10">
          <Button className="min-w-35 sm:min-w-42.5 h-12">
            Sign Up
          </Button>
          <Button className="min-w-35 sm:min-w-42.5 h-12">
            Sign In
          </Button>
        </div>

        <p className="font-['Satoshi',sans-serif] font-medium text-[13px] sm:text-[15px] text-[#98958E] text-center max-w-lg px-4">
          <span className="font-bold text-[#F4F1E9]">Note:</span> A platform fee
          of X applies to every campaign. Your ad budget is separate.
        </p>
      </div>
    </section>
  );
}
