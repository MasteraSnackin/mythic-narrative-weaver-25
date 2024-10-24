import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
      <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-900 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Revolutionizing Storytelling with AI
      </h1>
      <p className="text-2xl text-gray-700 leading-relaxed">
        Where every reader becomes the hero of their own adventure, powered by adaptive AI narratives.
      </p>
      <motion.div 
        className="space-x-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6">
          Get Started
        </Button>
        <Button size="lg" variant="outline" className="text-lg px-8 py-6">
          Learn More
        </Button>
      </motion.div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex-1 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-transparent rounded-2xl" />
      <img 
        src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=800" 
        alt="AI Storytelling" 
        className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
      />
    </motion.div>
  </section>
);