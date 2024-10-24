import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Brain, School, Target, TrendingUp, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-purple-900">
            Revolutionizing Storytelling with AI
          </h1>
          <p className="text-xl text-gray-600">
            Where every reader becomes the hero of their own adventure, powered by adaptive AI narratives.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <img 
            src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=800" 
            alt="AI Storytelling" 
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
            Why Choose Mythic Mind Labs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 space-y-4">
                    <feature.icon className="w-12 h-12 text-purple-600" />
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl font-bold text-purple-900">Market Opportunity</h2>
            <p className="text-xl text-gray-600">
              The global interactive fiction market is expected to reach USD 4.1 billion by 2027.
              Join us in shaping the future of storytelling.
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <Card className="w-48">
                <CardContent className="p-6 text-center">
                  <h3 className="text-3xl font-bold text-purple-600">4.1B</h3>
                  <p className="text-sm text-gray-600">Market Size by 2027</p>
                </CardContent>
              </Card>
              <Card className="w-48">
                <CardContent className="p-6 text-center">
                  <h3 className="text-3xl font-bold text-purple-600">5-10%</h3>
                  <p className="text-sm text-gray-600">Target Market Share</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold">Join the Future of Storytelling</h2>
            <p className="text-xl">
              Be part of the revolution in interactive education and entertainment.
            </p>
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              Contact Us
            </Button>
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