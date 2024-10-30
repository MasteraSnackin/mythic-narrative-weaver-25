import { StoryNode } from "@/types/story";

export const problemSolvingNodes: Record<string, StoryNode> = {
  problemSolving: {
    text: "Welcome to the Problem-Solving Workshop! Here, puzzles and challenges await to test your wit and creativity.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    header: "Mind Master",
    choices: [
      { text: "Logic Puzzles Challenge", nextNode: "logic", educational: true },
      { text: "Mathematical Adventures", nextNode: "math", educational: true },
      { text: "Strategic Thinking Games", nextNode: "strategy", educational: true },
      { text: "Return to the Hub", nextNode: "start" }
    ]
  }
};