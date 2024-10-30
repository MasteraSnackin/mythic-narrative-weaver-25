import { motion } from "framer-motion";
import { Book, Brain, Sparkles, Map, Code, Microscope, FlaskConical, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const demoStories = [
  {
    title: "AI Lab Adventure",
    description: "Explore the fascinating world of artificial intelligence! Learn about machine learning, neural networks, and how AI is shaping our future through hands-on virtual experiments.",
    genre: "Technology",
    educationalFocus: "Computer Science & AI",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
    icon: Brain,
    difficulty: "Advanced",
    skills: ["Problem Solving", "Critical Thinking", "Technology Literacy"]
  },
  {
    title: "Quantum Quest",
    description: "Dive into the mysterious realm of quantum physics! Conduct virtual experiments, understand quantum principles, and solve puzzles using quantum mechanics.",
    genre: "Science",
    educationalFocus: "Physics & Mathematics",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    icon: Microscope,
    difficulty: "Intermediate",
    skills: ["Scientific Method", "Mathematical Reasoning", "Analysis"]
  },
  {
    title: "Code Explorer",
    description: "Embark on a coding adventure! Learn programming concepts through interactive challenges, debug mysterious errors, and build your own virtual applications.",
    genre: "Technology",
    educationalFocus: "Programming & Logic",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd",
    icon: Code,
    difficulty: "Beginner",
    skills: ["Coding", "Logic", "Problem Solving"]
  },
  {
    title: "Chemistry Chronicles",
    description: "Journey through the periodic table! Mix virtual elements, conduct safe experiments, and discover the principles of chemistry through engaging stories.",
    genre: "Science",
    educationalFocus: "Chemistry & Lab Skills",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    icon: FlaskConical,
    difficulty: "Intermediate",
    skills: ["Lab Safety", "Chemical Knowledge", "Scientific Method"]
  },
  {
    title: "Math Mysteries",
    description: "Solve mathematical mysteries! Use algebra, geometry, and statistics to crack codes, solve puzzles, and uncover hidden patterns in this number-based adventure.",
    genre: "Mathematics",
    educationalFocus: "Mathematics & Logic",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
    icon: Calculator,
    difficulty: "Advanced",
    skills: ["Mathematical Thinking", "Problem Solving", "Pattern Recognition"]
  },
  {
    title: "Data Detective",
    description: "Become a data science investigator! Learn to analyze data, create visualizations, and make predictions using real-world scenarios and AI tools.",
    genre: "Technology",
    educationalFocus: "Data Science & Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    icon: Sparkles,
    difficulty: "Intermediate",
    skills: ["Data Analysis", "Statistical Thinking", "Visualization"]
  }
];

export const InteractiveDemo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 to-white dark:from-purple-900/20 dark:to-black/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
            Interactive Learning Labs
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Discover AI-powered educational adventures that adapt to your learning style
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {story.difficulty}
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <story.icon className="w-6 h-6 text-purple-600" />
                    <h3 className="text-xl font-semibold">{story.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-purple-100 dark:bg-purple-900/50 px-3 py-1 rounded-full">
                      {story.genre}
                    </span>
                    <span className="text-sm bg-purple-100 dark:bg-purple-900/50 px-3 py-1 rounded-full">
                      {story.educationalFocus}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{story.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-purple-600">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {story.skills.map((skill) => (
                        <span key={skill} className="text-xs bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link to="/ai-story-engine">Start Lab</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};