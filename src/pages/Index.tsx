import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { MarketSection } from "@/components/landing/MarketSection";
import { CallToAction } from "@/components/landing/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-50 to-white">
      <HeroSection />
      <FeaturesSection />
      <MarketSection />
      <CallToAction />
    </div>
  );
};

export default Index;