import { motion } from "framer-motion";
import { Book, Brain, Map, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const demoStories = [
  {
    title: "Mystery Manor",
    description: "Step into the shoes of a young detective at Mystery Manor, where each room holds educational puzzles and riddles. Practice deductive reasoning, critical thinking, and problem-solving skills while uncovering the secrets of this enigmatic estate. Perfect for aspiring sleuths who love combining mystery with learning!",
    genre: "Mystery",
    educationalFocus: "Logic & Problem Solving",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    icon: Sparkles,
    difficulty: "Intermediate",
    badge: "Most Popular"
  },
  {
    title: "Space Academy 2150",
    description: "Join the elite Space Academy where science meets adventure! Navigate through interactive astronomy lessons, conduct virtual physics experiments, and pilot your own spacecraft. Learn real scientific concepts while exploring distant galaxies and solving intergalactic challenges.",
    genre: "Science Fiction",
    educationalFocus: "Physics & Astronomy",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    icon: Brain,
    difficulty: "Advanced",
    badge: "Staff Pick"
  },
  {
    title: "Time Traveler's Chronicles",
    description: "Embark on an educational journey through time! Visit ancient civilizations, witness historical events firsthand, and interact with historical figures. Each adventure combines accurate historical facts with engaging storytelling, making history come alive while you learn.",
    genre: "Historical Adventure",
    educationalFocus: "History & Culture",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    icon: Map,
    difficulty: "Beginner",
    badge: "New Release"
  },
  {
    title: "The Enchanted Library",
    description: "Discover a magical library where books come to life! Each story teaches valuable lessons in literature, vocabulary, and creative writing. Help classic characters solve modern problems while improving your reading comprehension and storytelling skills.",
    genre: "Fantasy",
    educationalFocus: "Literature & Language",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    icon: Book,
    difficulty: "Intermediate",
    badge: "Editor's Choice"
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
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {story.badge}
                  </div>
                  <div className="absolute top-2 left-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {story.difficulty}
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <story.icon className="w-5 h-5 text-purple-600" />
                    <h3 className="text-xl font-semibold">{story.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-purple-100 dark:bg-purple-900/50 px-2 py-1 rounded-full">
                      {story.genre}
                    </span>
                    <span className="text-sm bg-purple-100 dark:bg-purple-900/50 px-2 py-1 rounded-full">
                      {story.educationalFocus}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{story.description}</p>
                  <Button asChild className="w-full">
                    <Link to="/ai-story-engine">Start Adventure</Link>
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