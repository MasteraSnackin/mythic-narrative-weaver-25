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
  }[];
}

const storyNodes: Record<string, StoryNode> = {
  start: {
    text: "You find yourself in a mysterious tech hub, surrounded by holographic displays and advanced machinery. What catches your attention first?",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    choices: [
      { text: "The glowing quantum computer", nextNode: "quantum" },
      { text: "The AI research lab", nextNode: "ai" },
      { text: "The virtual reality chamber", nextNode: "vr" },
      { text: "The robotics workshop", nextNode: "robotics" }
    ]
  },
  quantum: {
    text: "The quantum computer hums with otherworldly energy. Its displays show complex calculations that seem to bend reality itself.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    choices: [
      { text: "Run a quantum simulation", nextNode: "simulation" },
      { text: "Study the architecture", nextNode: "architecture" },
      { text: "Check the error rates", nextNode: "errors" },
      { text: "Return to the hub", nextNode: "start" }
    ]
  },
  ai: {
    text: "In the AI lab, multiple screens display neural networks learning and evolving in real-time. The possibilities seem endless.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    choices: [
      { text: "Train a new model", nextNode: "training" },
      { text: "Analyze the results", nextNode: "analysis" },
      { text: "Test the AI's creativity", nextNode: "creativity" },
      { text: "Return to the hub", nextNode: "start" }
    ]
  },
  vr: {
    text: "The VR chamber promises immersive experiences beyond imagination. Various simulations await your command.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    choices: [
      { text: "Enter a fantasy world", nextNode: "fantasy" },
      { text: "Try space exploration", nextNode: "space" },
      { text: "Start historical simulation", nextNode: "history" },
      { text: "Return to the hub", nextNode: "start" }
    ]
  },
  robotics: {
    text: "The robotics workshop is filled with various machines in different stages of assembly. What would you like to work on?",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    choices: [
      { text: "Program a new robot", nextNode: "program" },
      { text: "Test the prototypes", nextNode: "test" },
      { text: "Improve the AI core", nextNode: "improve" },
      { text: "Return to the hub", nextNode: "start" }
    ]
  },
  simulation: {
    text: "The quantum simulation reveals fascinating patterns in the fabric of reality. Would you like to continue exploring?",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    choices: [
      { text: "Try another simulation", nextNode: "quantum" },
      { text: "Share your findings", nextNode: "share" },
      { text: "Document the results", nextNode: "document" },
      { text: "Return to the hub", nextNode: "start" }
    ]
  }
};

// Add similar nodes for other paths...

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
                    className="justify-between text-left h-auto py-3"
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