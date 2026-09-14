import React from "react";
import BrandCardInfo from "../brandCardInfo/BrandCardInfo";
import SecondSection from "../secondSection/SecondSection";
import WayWeWork from "../wayWeWork/WayWeWork";
import OurCreativeTalent from "../ourCreativeTalent/OurCreativeTalent";
import BrandsWorthFinding from "../brandsWorthFinding/BrandsWorthFinding";
import ProofOfWork from "../proofOfWork/ProofOfWork";
import Insights from "../insights/Insights";
import ShareYourProblem from "../shareYourProblem/ShareYourProblem";
import ContentAnimation from "../contentAnimation/ContentAnimation";

const sections = [
  { id: "brand-card-info", Component: BrandCardInfo },
  { id: "second-section", Component: SecondSection },
  { id: "way-we-work", Component: WayWeWork },
  { id: "our-creative-talent", Component: OurCreativeTalent },
  { id: "brands-worth-finding", Component: BrandsWorthFinding },
  { id: "proof-of-work", Component: ProofOfWork },
  { id: "insights", Component: Insights },
  { id: "share-your-problem", Component: ShareYourProblem },
];

export default function HomePageContent() {
  return (
    <div className="flex flex-col gap-12 sm:gap-14">
      {sections.map(({ id, Component }) => (
        <ContentAnimation key={id}>
          <Component />
        </ContentAnimation>
      ))}
    </div>
  );
}
