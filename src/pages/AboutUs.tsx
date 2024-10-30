import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Trophy, Rocket, Users, Code, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    bio: "Former EdTech executive with a passion for storytelling and AI innovation.",
    imageUrl: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-founder",
    bio: "AI researcher and game developer with expertise in adaptive learning systems.",
    imageUrl: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Emma Thompson",
    role: "Head of Education",
    bio: "Educational psychologist specializing in interactive learning methodologies.",
    imageUrl: "https://i.pravatar.cc/150?u=emma"
  }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-50 to-white dark:from-purple-900 dark:via-gray-900 dark:to-black">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-20"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
            Revolutionizing Interactive Fiction
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At Mythic Mind Labs, we're combining the power of AI with the art of storytelling to create immersive, educational experiences that adapt to every reader.
          </p>
        </motion.section>

        {/* Origin Story */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20"
        >
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <Code className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-semibold">Our Story</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Born in a 36-hour hackathon fueled by coffee and ambition, Mythic Mind Labs emerged from a shared vision to revolutionize how stories are told and experienced. What started as an experimental project has grown into a platform that's changing the landscape of interactive education and entertainment.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <Brain className="w-12 h-12 text-purple-600 mx-auto" />
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pushing the boundaries of AI and storytelling to create unique experiences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <Sparkles className="w-12 h-12 text-purple-600 mx-auto" />
              <h3 className="text-xl font-semibold">Creativity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Crafting engaging narratives that inspire imagination and learning.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <Users className="w-12 h-12 text-purple-600 mx-auto" />
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building a global community of storytellers and learners.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Team */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-center mb-10">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6 text-center space-y-4">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-purple-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl font-semibold">Join Our Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Be part of the future of storytelling. Whether you're an educator, parent, or storyteller, there's a place for you in our community.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/get-started">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;