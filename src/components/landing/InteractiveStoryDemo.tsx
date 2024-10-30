import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { storyNodes } from "@/data/storyNodes";
import { StoryImage } from "@/components/story/StoryImage";
import { StoryChoices } from "@/components/story/StoryChoices";
import { StoryEffect } from "@/components/story/StoryEffect";

export const InteractiveStoryDemo = () => {
  const [currentNode, setCurrentNode] = useState("start");
  const [fadeIn, setFadeIn] = useState(true);
  const [effect, setEffect] = useState("");

  const handleChoice = (nextNode: string, choiceEffect?: string) => {
    setFadeIn(false);
    if (choiceEffect) {
      setEffect(choiceEffect);
      setTimeout(() => setEffect(""), 2000);
    }
    setTimeout(() => {
      setCurrentNode(nextNode);
      setFadeIn(true);
    }, 300);
  };

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
            Embark on an educational adventure where your choices shape the story
          </p>
        </motion.div>

        <Card className="max-w-4xl mx-auto relative overflow-hidden">
          <CardContent className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentNode}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <StoryImage 
                  image={storyNodes[currentNode].image} 
                  header={storyNodes[currentNode].header} 
                />
                
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">{storyNodes[currentNode].text}</p>
                </div>
                
                <StoryChoices 
                  choices={storyNodes[currentNode].choices} 
                  onChoice={handleChoice}
                />
              </motion.div>
            </AnimatePresence>

            {effect && <StoryEffect effect={effect} />}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};