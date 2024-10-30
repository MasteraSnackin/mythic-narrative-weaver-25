import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Choice } from "@/types/story";

interface StoryChoicesProps {
  choices: Choice[];
  onChoice: (nextNode: string, effect?: string) => void;
}

export const StoryChoices = ({ choices, onChoice }: StoryChoicesProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {choices.map((choice, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Button
          variant="outline"
          className={`w-full justify-between text-left h-auto py-3 ${
            choice.educational ? 'border-purple-200 hover:border-purple-400' : ''
          } hover:scale-105 transition-all duration-300`}
          onClick={() => onChoice(choice.nextNode, choice.effect)}
        >
          <span>{choice.text}</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </motion.div>
    ))}
  </div>
);