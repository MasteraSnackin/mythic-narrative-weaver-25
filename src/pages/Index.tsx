import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { MarketSection } from "@/components/landing/MarketSection";
import { CallToAction } from "@/components/landing/CallToAction";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-50 to-white dark:from-purple-900 dark:via-gray-900 dark:to-black">
        <Navigation />
        <main className="pt-16">
          <HeroSection />
          <section id="features">
            <FeaturesSection />
          </section>
          <section id="market">
            <MarketSection />
          </section>
          <section id="contact">
            <CallToAction />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;