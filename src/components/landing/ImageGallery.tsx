import { motion } from "framer-motion";
import { Book, Rocket, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stories = [
  {
    title: "Fantasy Adventure",
    description: "Embark on a magical journey where your choices shape the story",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    icon: Book,
    badge: "Family-Friendly"
  },
  {
    title: "Science Explorer",
    description: "Learn about space and science through interactive storytelling",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    icon: Rocket,
    badge: "Educational"
  },
  {
    title: "Historical Quest",
    description: "Travel through time and make decisions that change history",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1",
    icon: Clock,
    badge: "Advanced"
  }
];

export const ImageGallery = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full bg-white dark:bg-gray-800">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="px-3 py-1 text-sm text-white rounded-full bg-purple-600">
                        {story.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <story.icon className="w-5 h-5 text-purple-600" />
                      <h3 className="text-xl font-semibold">{story.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {story.description}
                    </p>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">
                      Try Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};