"use client";

import React from "react";
import { marqueeItems } from "../../utils/marqueeData";

export default function InfiniteMarquee() {
  const repeatedList = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full overflow-hidden bg-[#101010] border-y border-[#D3533D] py-3.5 flex items-center select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {repeatedList.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="text-[#F4F1E9] font-['Oswald'] font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-widest px-2">
              {item}
            </span>
            <span className="text-[#F4F1E9]/40 font-['Oswald'] font-light text-lg sm:text-xl md:text-2xl px-2">
              |
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
