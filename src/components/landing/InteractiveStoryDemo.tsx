import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { storyNodes } from "@/data/storyNodes";

export const InteractiveStoryDemo = () => {
  const [currentNode, setCurrentNode] = useState("start");

  const handleChoice = (nextNode: string) => {
    setCurrentNode(nextNode);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 to-white dark:from-purple-900/20 dark:to-black/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
            Experience Interactive Learning
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Embark on an educational adventure where your choices shape the story
          </p>
        </motion.div>

        <Card className="max-w-4xl mx-auto overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-medium inline-flex items-center gap-2">
                  <span className="w-4 h-4 bg-white/20 rounded-full"></span>
                  Learning Explorer
                </span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
                alt="Learning materials"
                className="w-full h-[300px] object-cover"
              />
            </div>
            
            <div className="p-8">
              <p className="text-lg mb-8 flex items-start gap-3">
                <span className="text-purple-600 mt-1">✨</span>
                {storyNodes[currentNode].text}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {storyNodes[currentNode].choices.map((choice, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-between text-left h-auto py-4 px-6 hover:border-purple-400 hover:bg-purple-50 transition-all"
                    onClick={() => handleChoice(choice.nextNode)}
                  >
                    <span>{choice.text}</span>
                    <ChevronRight className="w-4 h-4 text-purple-600" />
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};