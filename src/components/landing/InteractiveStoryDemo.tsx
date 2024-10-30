import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";

interface StoryNode {
  text: string;
  image: string;
  choices: {
    text: string;
    nextNode: string;
    educational?: boolean;
  }[];
}

const storyNodes: Record<string, StoryNode> = {
  start: {
    text: "Welcome to the Learning Adventure Hub! As a young explorer, you find yourself in a magical space where knowledge comes to life. Where would you like to begin your journey?",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    choices: [
      { text: "Enter the Science Laboratory", nextNode: "science", educational: true },
      { text: "Visit the Historical Archives", nextNode: "history", educational: true },
      { text: "Explore the Creative Writing Studio", nextNode: "writing" },
      { text: "Join the Problem-Solving Workshop", nextNode: "problemSolving", educational: true }
    ]
  },
  science: {
    text: "The Science Lab buzzes with excitement! Interactive holograms display various experiments and discoveries. What interests you most?",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    choices: [
      { text: "Conduct a Space Exploration", nextNode: "space", educational: true },
      { text: "Study Marine Biology", nextNode: "marine", educational: true },
      { text: "Experiment with Chemistry", nextNode: "chemistry", educational: true },
      { text: "Return to the Hub", nextNode: "start" }
    ]
  },
  history: {
    text: "The Historical Archives come alive with interactive timelines and 3D reconstructions of ancient civilizations. Where would you like to travel?",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1",
    choices: [
      { text: "Ancient Egypt Adventure", nextNode: "egypt", educational: true },
      { text: "Medieval Castle Explorer", nextNode: "medieval", educational: true },
      { text: "Industrial Revolution Journey", nextNode: "industrial", educational: true },
      { text: "Return to the Hub", nextNode: "start" }
    ]
  },
  writing: {
    text: "In the Creative Writing Studio, stories come to life as you write them! Magical tools help you craft your own adventures.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
    choices: [
      { text: "Create a Fantasy Tale", nextNode: "fantasy" },
      { text: "Write a Mystery Story", nextNode: "mystery" },
      { text: "Compose Poetry", nextNode: "poetry" },
      { text: "Return to the Hub", nextNode: "start" }
    ]
  },
  problemSolving: {
    text: "Welcome to the Problem-Solving Workshop! Here, puzzles and challenges await to test your wit and creativity.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    choices: [
      { text: "Logic Puzzles Challenge", nextNode: "logic", educational: true },
      { text: "Mathematical Adventures", nextNode: "math", educational: true },
      { text: "Strategic Thinking Games", nextNode: "strategy", educational: true },
      { text: "Return to the Hub", nextNode: "start" }
    ]
  },
  space: {
    text: "The wonders of the cosmos unfold before you! Interactive star maps and planetary systems await your exploration.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    choices: [
      { text: "Continue Space Exploration", nextNode: "science" },
      { text: "Study Black Holes", nextNode: "space" },
      { text: "Visit Mars", nextNode: "space" },
      { text: "Return to the Hub", nextNode: "start" }
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
            Experience Interactive Learning
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Embark on an educational adventure where your choices shape the story
          </p>
        </motion.div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <motion.div
              animate={{ opacity: fadeIn ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
                <img
                  src={storyNodes[currentNode].image}
                  alt="Story scene"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">{storyNodes[currentNode].text}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {storyNodes[currentNode].choices.map((choice, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`justify-between text-left h-auto py-3 ${
                      choice.educational ? 'border-purple-200 hover:border-purple-400' : ''
                    }`}
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