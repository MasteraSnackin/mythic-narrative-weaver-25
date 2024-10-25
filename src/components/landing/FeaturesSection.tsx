import { motion } from "framer-motion";
import { Cloud, Brain, Coins, Shield, Zap, Users } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    title: "Weather Data Integration",
    description: "Real-time weather data from reliable APIs triggers insurance payouts automatically based on specific conditions.",
    icon: Cloud
  },
  {
    title: "Smart Contract Automation",
    description: "Blockchain and oracles automate insurance payouts, increasing efficiency and reducing administrative overhead.",
    icon: Brain
  },
  {
    title: "Transparent Claims",
    description: "All transactions and contract terms are immutable and transparent on the blockchain, ensuring trust.",
    icon: Shield
  },
  {
    title: "Instant Payouts",
    description: "Automated system processes claims instantly when predefined weather conditions are met.",
    icon: Zap
  },
  {
    title: "Cost Efficient",
    description: "Reduced administrative costs and automated processes lead to more affordable insurance coverage.",
    icon: Coins
  },
  {
    title: "Community Focused",
    description: "Designed to benefit underserved communities with accessible and reliable insurance solutions.",
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
        Why Choose Our Parametric Insurance?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  </section>
);