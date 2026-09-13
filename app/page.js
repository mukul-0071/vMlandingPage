import HeroSection from "./components/HeroSection";
import InfiniteMarquee from "./components/InfiniteMarquee";
import MainLayerBg from "./components/MainLayerBg";
import TestComponent from "./components/TestComponent";

export default function Home() {
  return (
    <MainLayerBg>
      <HeroSection />
      <InfiniteMarquee />
      <TestComponent />
    </MainLayerBg>
  );
}


