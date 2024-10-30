import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Gamepad2 } from "lucide-react";
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

        <Card className="max-w-4xl mx-auto overflow-hidden bg-gradient-to-br from-purple-900 to-purple-800">
          <CardContent className="p-0">
            <div className="relative">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-purple-600/80 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-3 shadow-lg">
                  <Gamepad2 className="w-5 h-5" />
                  Learning Explorer
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
                alt="Learning materials"
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="p-8 text-white">
              <p className="text-xl mb-8 flex items-start gap-3 leading-relaxed">
                <span className="text-purple-300 mt-1">✨</span>
                {storyNodes[currentNode].text}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {storyNodes[currentNode].choices.map((choice, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-between text-left h-auto py-4 px-6 bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40 text-white transition-all backdrop-blur-sm"
                    onClick={() => handleChoice(choice.nextNode)}
                  >
                    <span>{choice.text}</span>
                    <ChevronRight className="w-5 h-5 text-purple-300" />
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