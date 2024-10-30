import { StoryNode } from "@/types/story";

export const historyNodes: Record<string, StoryNode> = {
  history: {
    text: "The Historical Archives come alive with interactive timelines and 3D reconstructions of ancient civilizations. Where would you like to travel?",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1",
    header: "Time Traveler",
    choices: [
      { text: "Ancient Egypt Adventure", nextNode: "egypt", educational: true },
      { text: "Medieval Castle Explorer", nextNode: "medieval", educational: true },
      { text: "Industrial Revolution Journey", nextNode: "industrial", educational: true },
      { text: "Return to the Hub", nextNode: "start" }
    ]
  }
};