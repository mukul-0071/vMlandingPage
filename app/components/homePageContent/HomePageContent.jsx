import React from "react";
import BrandCardInfo from "../brandCardInfo/BrandCardInfo";
import SecondSection from "../secondSection/SecondSection";
import WayWeWork from "../wayWeWork/WayWeWork";
import OurCreativeTalent from "../ourCreativeTalent/OurCreativeTalent";
import BrandsWorthFinding from "../brandsWorthFinding/BrandsWorthFinding";

export default function HomePageContent() {
  return (
    <div className="flex flex-col gap-12 sm:gap-20">
      <BrandCardInfo />
      <SecondSection />
      <WayWeWork />
      <OurCreativeTalent />
      <BrandsWorthFinding />
    </div>
  );
}
