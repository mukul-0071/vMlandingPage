import HeroSection from "./components/herosection/HeroSection";
import InfiniteMarquee from "./components/infiniteMarquee/InfiniteMarquee";
import MainLayerBg from "./components/mainLayerBg/MainLayerBg";
import HomePageContent from "./components/homePageContent/HomePageContent";
import SplashScreen from "./components/splashScreen/SplashScreen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <MainLayerBg>
        {/* Sticky wrapper for HeroSection */}
        <div className="sticky top-0 h-screen w-full z-0 overflow-hidden">
          <HeroSection />
        </div>

        {/* Content layer that slides UP over the HeroSection as user scrolls */}
        <div className="relative z-10 shadow-[0_-25px_60px_rgba(0,0,0,0.8)]">
          <InfiniteMarquee />
          <HomePageContent />
        </div>
      </MainLayerBg>
    </>
  );
}




