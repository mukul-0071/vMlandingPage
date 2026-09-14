import React from "react";
import BrandCardInfo from "../brandCardInfo/BrandCardInfo";
import SecondSection from "../secondSection/SecondSection";
import FireSection from "../fireSection/FireSection";

export default function HomePageContent() {
  return (
    <div className="flex flex-col gap-12 sm:gap-20">
      <BrandCardInfo />
      <SecondSection />
      {/* <FireSection position="right" /> */}
    </div>
  );
}
