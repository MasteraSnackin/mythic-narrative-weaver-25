import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { StorytellingDashboard } from "@/components/landing/StorytellingDashboard";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { TrustBadgesSection } from "@/components/landing/TrustBadgesSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { CallToAction } from "@/components/landing/CallToAction";
import { InteractiveDemo } from "@/components/landing/InteractiveStoryDemo";
import { ImageGallery } from "@/components/landing/ImageGallery";
import { Toaster } from "@/components/ui/sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const QuickLinks = () => {
  const links = [
    { to: "/get-started", label: "Get Started" },
    { to: "/learn-more", label: "Learn More" },
    { to: "/contact", label: "Contact" },
    { to: "/stay-updated", label: "Stay Updated" },
    { to: "/library", label: "Library" },
    { to: "/parent-dashboard", label: "Parent Dashboard" },
    { to: "/story-creator", label: "Story Creator" },
    { to: "/community", label: "Community" },
    { to: "/about-us", label: "About Us" },
    { to: "/educator-resources", label: "Educator Resources" },
    { to: "/pricing", label: "Pricing" },
    { to: "/school-pilot", label: "School Pilot" },
    { to: "/ai-story-engine", label: "AI Story Engine" },
    { to: "/blog", label: "Blog" },
    { to: "/faq", label: "FAQ" },
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms" }
  ];

  return (
    <section className="py-12 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
            Quick Access
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="px-4 py-2 text-center rounded-lg bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-50 to-white dark:from-purple-900 dark:via-gray-900 dark:to-black">
      <Toaster />
      <main className="pt-16">
        <HeroSection />
        <InteractiveDemo />
        <FeaturesSection />
        <QuickLinks />
        <ImageGallery />
        <StorytellingDashboard />
        <TrustBadgesSection />
        <TestimonialsSection />
        <FaqSection />
        <CallToAction />
      </main>
    </div>
  );
};

export default Index;