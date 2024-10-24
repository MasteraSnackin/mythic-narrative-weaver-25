import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { MarketSection } from "@/components/landing/MarketSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { NewsletterSection } from "@/components/landing/NewsletterSection";
import { TrustBadgesSection } from "@/components/landing/TrustBadgesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { CallToAction } from "@/components/landing/CallToAction";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-50 to-white dark:from-purple-900 dark:via-gray-900 dark:to-black">
        <Toaster />
        <Navigation />
        <main className="pt-16">
          <HeroSection />
          <HowItWorksSection />
          <section id="features">
            <FeaturesSection />
          </section>
          <TrustBadgesSection />
          <section id="market">
            <MarketSection />
          </section>
          <TestimonialsSection />
          <FaqSection />
          <NewsletterSection />
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