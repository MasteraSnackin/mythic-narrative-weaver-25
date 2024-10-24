import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Brain, School, Target, TrendingUp, Users, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-50 to-white">
      {/* Hero Section */}
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

      {/* Features Section */}
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
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/70 backdrop-blur-sm hover:bg-purple-50 transition-colors duration-300 border-purple-100">
                  <CardContent className="p-6 space-y-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-12 h-12 text-purple-600" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-purple-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-purple-600 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
              Market Opportunity
            </h2>
            <p className="text-2xl text-gray-600">
              The global interactive fiction market is expected to reach USD 4.1 billion by 2027.
              Join us in shaping the future of storytelling.
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="w-48 bg-white/80 backdrop-blur-sm hover:bg-purple-50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-4xl font-bold text-purple-600">4.1B</h3>
                    <p className="text-sm text-gray-600">Market Size by 2027</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="w-48 bg-white/80 backdrop-blur-sm hover:bg-purple-50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-4xl font-bold text-purple-600">5-10%</h3>
                    <p className="text-sm text-gray-600">Target Market Share</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDAgTDIwMCAxMDAgTDEwMCAyMDAgTDAgMTAwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] opacity-10"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold">Join the Future of Storytelling</h2>
            <p className="text-2xl text-purple-100">
              Be part of the revolution in interactive education and entertainment.
            </p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-100 text-lg px-8 py-6">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

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

export default Index;