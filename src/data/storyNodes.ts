import { StoryNode } from "@/types/story";
import { scienceNodes } from "./storyNodes/scienceNodes";
import { marineNodes } from "./storyNodes/marineNodes";
import { historyNodes } from "./storyNodes/historyNodes";
import { writingNodes } from "./storyNodes/writingNodes";
import { problemSolvingNodes } from "./storyNodes/problemSolvingNodes";

const startNode: Record<string, StoryNode> = {
  start: {
    text: "Welcome to the Learning Adventure Hub! As a young explorer, you find yourself in a magical space where knowledge comes to life. Where would you like to begin your journey?",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    header: "Learning Explorer",
    animation: "fade",
    choices: [
      { 
        text: "Enter the Science Laboratory", 
        nextNode: "science", 
        educational: true,
        effect: "🔬 Discover the wonders of science!"
      },
      { 
        text: "Visit the Historical Archives", 
        nextNode: "history", 
        educational: true,
        effect: "📚 Travel through time!"
      },
      { 
        text: "Explore the Creative Writing Studio", 
        nextNode: "writing",
        effect: "✍️ Unleash your creativity!"
      },
      { 
        text: "Join the Problem-Solving Workshop", 
        nextNode: "problemSolving", 
        educational: true,
        effect: "🧩 Challenge your mind!"
      }
    ]
  }
};

export const storyNodes: Record<string, StoryNode> = {
  ...startNode,
  ...scienceNodes,
  ...marineNodes,
  ...historyNodes,
  ...writingNodes,
  ...problemSolvingNodes
};