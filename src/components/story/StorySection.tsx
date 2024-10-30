import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { usePerformanceTracking } from "@/hooks/usePerformanceTracking";
import { calculateDifficulty, getDifficultyLabel } from "@/utils/difficultyAdjustment";
import { DifficultyIndicator } from "./DifficultyIndicator";

interface Choice {
  text: string;
  outcome: string;
  isSuccess?: boolean;
}

interface StorySectionProps {
  content: string;
  choices: Choice[];
  onChoice: (outcome: string) => void;
}

export const StorySection = ({ content, choices, onChoice }: StorySectionProps) => {
  const [decisionStartTime, setDecisionStartTime] = useState<number>(Date.now());
  const { trackDecision, trackSuccess, getMetrics } = usePerformanceTracking();
  const { toast } = useToast();
  const [settings, setSettings] = useState(calculateDifficulty(getMetrics()));
  
  useEffect(() => {
    setDecisionStartTime(Date.now());
  }, [content]);
  
  const handleChoice = (choice: Choice) => {
    const timeSpent = (Date.now() - decisionStartTime) / 1000;
    trackDecision(timeSpent);
    
    if (choice.isSuccess !== undefined) {
      trackSuccess(choice.isSuccess);
    }
    
    const newSettings = calculateDifficulty(getMetrics());
    setSettings(newSettings);
    
    if (timeSpent > settings.timeLimit) {
      toast({
        title: "Time's up!",
        description: "Try to make decisions more quickly to maintain the story's pace.",
        variant: "destructive",
      });
    }
    
    onChoice(choice.outcome);
  };
  
  return (
    <div className="relative">
      <DifficultyIndicator 
        settings={settings}
        label={getDifficultyLabel(settings)}
      />
      
      <Card className="max-w-2xl mx-auto my-8">
        <CardContent className="p-6 space-y-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg leading-relaxed"
          >
            {content}
          </motion.p>
          
          <div className="space-y-4">
            {choices.map((choice, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant="outline"
                  className="w-full text-left justify-start h-auto py-4 px-6"
                  onClick={() => handleChoice(choice)}
                >
                  {choice.text}
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};