"use client";

import React from "react";
import { marqueeItems } from "../../utils/marqueeData";

export default function InfiniteMarquee() {
  const groups = [marqueeItems, marqueeItems, marqueeItems, marqueeItems, marqueeItems];

  return (
    <div className="w-full h-[4.875rem] overflow-hidden bg-[#101010] border-y border-[#D3533D] flex items-center select-none">
      <div className="animate-marquee flex items-center gap-[3.75rem] whitespace-nowrap">
        {groups.map((group, groupIdx) => (
          <React.Fragment key={groupIdx}>
            <div className="flex items-center gap-[3.75rem]">
              {group.map((item, itemIdx) => (
                <span
                  key={itemIdx}
                  className="text-[#F4F1E9] font-['Oswald'] font-bold text-2xl leading-[2.25rem] uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
            <span className="text-[#F4F1E9] font-['Oswald'] font-bold text-2xl leading-[2.25rem] uppercase">
              |
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

