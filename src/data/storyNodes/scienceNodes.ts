import { StoryNode } from "@/types/story";

export const scienceNodes: Record<string, StoryNode> = {
  science: {
    text: "The Science Lab buzzes with excitement! Interactive holograms display various experiments and discoveries. What interests you most?",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    header: "Scientific Discovery",
    choices: [
      { text: "Conduct a Space Exploration", nextNode: "space", educational: true },
      { text: "Study Marine Biology", nextNode: "marine", educational: true },
      { text: "Experiment with Chemistry", nextNode: "chemistry", educational: true },
      { text: "Return to the Hub", nextNode: "start" }
    ]
  },
  space: {
    text: "The wonders of the cosmos unfold before you! Interactive star maps and planetary systems await your exploration.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    header: "Cosmic Explorer",
    choices: [
      { text: "Continue Space Exploration", nextNode: "science" },
      { text: "Study Black Holes", nextNode: "space" },
      { text: "Visit Mars", nextNode: "space" },
      { text: "Return to the Hub", nextNode: "start" }
    ]
  },
  chemistry: {
    text: "Experiment with fascinating chemical reactions that reveal the wonders of matter and states of change.",
    image: "https://images.unsplash.com/photo-1558929082-4f0017f9b497",
    header: "Chemistry Lab",
    choices: [
      { text: "Create a Volcano", nextNode: "volcano" },
      { text: "Mix Colors", nextNode: "colors" },
      { text: "Return to the Lab", nextNode: "science" }
    ]
  }
};