import HeroSection from "./components/herosection/HeroSection";
import InfiniteMarquee from "./components/infiniteMarquee/InfiniteMarquee";
import MainLayerBg from "./components/mainLayerBg/MainLayerBg";
import HomePageContent from "./components/homePageContent/HomePageContent";

export default function Home() {
  return (
    <MainLayerBg>
      <HeroSection />
      <InfiniteMarquee />
      <HomePageContent />
    </MainLayerBg>
  );
}




