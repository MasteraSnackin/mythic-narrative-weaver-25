import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";

interface StoryNode {
  text: string;
  choices: {
    text: string;
    nextNode: string;
  }[];
}

const storyNodes: Record<string, StoryNode> = {
  start: {
    text: "You stand before an ancient library, its doors mysteriously ajar. A soft purple glow emanates from within...",
    choices: [
      { text: "Enter the library", nextNode: "library" },
      { text: "Investigate the surroundings", nextNode: "surroundings" }
    ]
  },
  library: {
    text: "Inside, floating books circle around a central pedestal. A magical tablet rests there, displaying strange symbols.",
    choices: [
      { text: "Touch the tablet", nextNode: "tablet" },
      { text: "Try to catch a book", nextNode: "book" }
    ]
  },
  surroundings: {
    text: "Around the library, you discover ancient runes carved into the ground, forming a perfect circle.",
    choices: [
      { text: "Trace the runes", nextNode: "runes" },
      { text: "Return to the entrance", nextNode: "start" }
    ]
  },
  tablet: {
    text: "The tablet glows brighter at your touch! Words appear: 'Welcome to the Mythic Mind Labs Demo!'",
    choices: [
      { text: "Start a new story", nextNode: "start" }
    ]
  },
  book: {
    text: "The book gently floats into your hands. Its pages contain countless interactive stories waiting to be explored!",
    choices: [
      { text: "Start a new story", nextNode: "start" }
    ]
  },
  runes: {
    text: "The runes begin to glow! They reveal the magic of AI-powered storytelling that adapts to each reader.",
    choices: [
      { text: "Start a new story", nextNode: "start" }
    ]
  }
};

export const InteractiveStoryDemo = () => {
  const [currentNode, setCurrentNode] = useState("start");
  const [fadeIn, setFadeIn] = useState(true);

  const handleChoice = (nextNode: string) => {
    setFadeIn(false);
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
            Try Our Interactive Story Demo
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Experience how our AI adapts stories to your choices
          </p>
        </motion.div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <motion.div
              animate={{ opacity: fadeIn ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">{storyNodes[currentNode].text}</p>
              </div>
              
              <div className="space-y-3">
                {storyNodes[currentNode].choices.map((choice, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-between text-left h-auto py-3"
                    onClick={() => handleChoice(choice.nextNode)}
                  >
                    <span>{choice.text}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};