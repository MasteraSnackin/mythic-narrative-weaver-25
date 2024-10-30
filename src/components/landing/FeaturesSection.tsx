import { motion } from "framer-motion";
import { BookOpen, Brain, Sparkles, Target, Clock, Users } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    title: "AI-Powered Narratives",
    description: "Our AI crafts dynamic stories that adapt to your choices, creating unique and personalized adventures every time you read.",
    icon: Brain
  },
  {
    title: "Dynamic Difficulty & Pacing",
    description: "Stories automatically adjust to your skill level and reading pace, ensuring an engaging and challenging experience.",
    icon: Clock
  },
  {
    title: "Immersive Storytelling",
    description: "Experience stories that react to your decisions, creating truly interactive and engaging narratives.",
    icon: Sparkles
  },
  {
    title: "Educational Value",
    description: "Stories seamlessly integrate educational elements, making learning fun and interactive for ages 5-14.",
    icon: BookOpen
  },
  {
    title: "Endless Possibilities",
    description: "With AI-generated content, every story offers multiple paths and outcomes, ensuring high replayability.",
    icon: Target
  },
  {
    title: "Community Focused",
    description: "Join a growing community of young readers and educators embracing the future of interactive storytelling.",
    icon: Users
  }
];

export const FeaturesSection = () => (
  <section className="py-20 bg-white/80 backdrop-blur-lg">
    <div className="container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent"
      >
        Why Choose Mythic Mind Labs?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  </section>
);