import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HERO_IMAGE, STORYTELLING_IMAGE, TECHNOLOGY_IMAGE } from "@/utils/images";

export const HeroSection = () => (
  <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex-1 space-y-8 relative z-10"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute -top-20 -left-20 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30"
      />
      <h1 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400">
        The Future of Storytelling
      </h1>
      <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
        Our AI crafts dynamic "Choose Your Own Adventure" experiences that adapt to your choices, creating a truly immersive and personalized journey. Every decision shapes the story.
      </p>
      <motion.div 
        className="space-x-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6">
          <Link to="/get-started">Start Your Adventure</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
          <Link to="/learn-more">Learn More</Link>
        </Button>
      </motion.div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex-1 relative grid grid-cols-2 gap-4"
    >
      <div className="relative aspect-square">
        <img 
          src={HERO_IMAGE}
          alt="Interactive Storytelling" 
          className="rounded-2xl shadow-2xl object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="relative aspect-square mt-8">
        <img 
          src={STORYTELLING_IMAGE}
          alt="AI-Powered Stories" 
          className="rounded-2xl shadow-2xl object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="relative aspect-square -mt-8">
        <img 
          src={TECHNOLOGY_IMAGE}
          alt="Future of Reading" 
          className="rounded-2xl shadow-2xl object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </motion.div>
  </section>
);