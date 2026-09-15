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
        <HeroSection />
        <InfiniteMarquee />
        <HomePageContent />
      </MainLayerBg>
    </>
  );
}




