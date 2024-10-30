import { StoryNode } from "@/types/story";

export const marineNodes: Record<string, StoryNode> = {
  marine: {
    text: "Dive into the depths of the oceans, discovering the secrets of underwater life and ecosystems.",
    image: "https://images.unsplash.com/photo-1501167711025-d67e9ba30385",
    header: "Ocean Explorer",
    choices: [
      { text: "Coral Reef Adventure", nextNode: "coral" },
      { text: "Join a Deep Sea Expedition", nextNode: "deepsea" },
      { text: "Return to the Lab", nextNode: "science" }
    ]
  },
  coral: {
    text: "Explore the vibrant world of coral reefs and learn about their importance to marine life.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    header: "Coral Reef Adventure",
    choices: [
      { text: "Snorkel with Fish", nextNode: "fish" },
      { text: "Study Coral Ecosystems", nextNode: "ecosystem" },
      { text: "Return to the Ocean", nextNode: "marine" }
    ]
  },
  deepsea: {
    text: "Venture into the abyss where unique marine life thrives in the dark, uncovering their mysteries.",
    image: "https://images.unsplash.com/photo-1533168623885-98d63128a0e2",
    header: "Deep Sea Expedition",
    choices: [
      { text: "Discover Bioluminescent Creatures", nextNode: "bioluminescent" },
      { text: "Return to the Ocean", nextNode: "marine" }
    ]
  }
};