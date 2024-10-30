import { motion } from "framer-motion";
import { Book, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

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
            Try our AI-powered stories that adapt to your choices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fantasy Adventure",
              description: "Embark on a magical journey where your choices shape the story",
              image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
              icon: Book,
              difficulty: "Family-Friendly"
            },
            {
              title: "Science Explorer",
              description: "Learn about space and science through interactive storytelling",
              image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
              icon: Brain,
              difficulty: "Educational"
            },
            {
              title: "Historical Quest",
              description: "Travel through time and make decisions that change history",
              image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1",
              icon: Sparkles,
              difficulty: "Advanced"
            }
          ].map((demo, index) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded-full text-sm">
                    {demo.difficulty}
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <demo.icon className="w-5 h-5 text-purple-600" />
                    <h3 className="text-xl font-semibold">{demo.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{demo.description}</p>
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