import { motion } from "framer-motion";
import { Book, Brain, Sparkles, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const demoStories = [
  {
    title: "The Enchanted Library",
    description: "Journey through a magical library where books come to life! Learn about literature and history as you help the young wizard apprentice solve ancient riddles.",
    genre: "Fantasy",
    educationalFocus: "Literature & History",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
    icon: Book,
    difficulty: "Beginner"
  },
  {
    title: "Space Academy 2150",
    description: "Become a cadet at the Solar System's premier space academy. Master physics and astronomy concepts while navigating through thrilling space missions!",
    genre: "Science Fiction",
    educationalFocus: "Physics & Astronomy",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    icon: Brain,
    difficulty: "Intermediate"
  },
  {
    title: "Lost Civilizations",
    description: "Explore ancient ruins and uncover historical mysteries! Learn about world civilizations while making crucial archaeological discoveries.",
    genre: "Adventure",
    educationalFocus: "World History & Archaeology",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1",
    icon: Map,
    difficulty: "Advanced"
  },
  {
    title: "Detective Academy",
    description: "Solve intriguing cases using logic and deduction! Practice critical thinking and problem-solving skills as you become a master detective.",
    genre: "Mystery",
    educationalFocus: "Logic & Problem Solving",
    image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da",
    icon: Sparkles,
    difficulty: "Intermediate"
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
            Experience Interactive Learning
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Discover AI-powered stories that adapt to your choices and learning style
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {demoStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative h-48">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded-full text-sm">
                    {story.difficulty}
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <story.icon className="w-5 h-5 text-purple-600" />
                    <h3 className="text-xl font-semibold">{story.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-sm bg-purple-100 dark:bg-purple-900/50 px-2 py-1 rounded-full">
                      {story.genre}
                    </span>
                    <span className="text-sm bg-purple-100 dark:bg-purple-900/50 px-2 py-1 rounded-full">
                      {story.educationalFocus}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{story.description}</p>
                  <Button asChild className="w-full">
                    <Link to="/ai-story-engine">Try Demo</Link>
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