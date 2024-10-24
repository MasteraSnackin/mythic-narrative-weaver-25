import { motion } from "framer-motion";
import { BookOpen, Brain, School, Target, TrendingUp, Users } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    title: "AI-Powered Narratives",
    description: "Dynamic stories that adapt to user choices in real-time, ensuring a unique experience every time.",
    icon: Brain
  },
  {
    title: "Educational Focus",
    description: "Interactive content designed for both entertainment and education, making learning engaging and fun.",
    icon: School
  },
  {
    title: "High Replayability",
    description: "Multiple story branches and outcomes encourage users to explore new possibilities.",
    icon: BookOpen
  },
  {
    title: "Target Audience",
    description: "Focused on schools and young readers (Ages 5-14) who value interactive experiences.",
    icon: Target
  },
  {
    title: "Market Growth",
    description: "Positioned to capture significant market share in the growing interactive fiction industry.",
    icon: TrendingUp
  },
  {
    title: "User-Centric",
    description: "Personalized content that adapts to individual learning styles and preferences.",
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