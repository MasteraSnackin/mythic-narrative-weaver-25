import { StoryNode } from "@/types/story";

export const writingNodes: Record<string, StoryNode> = {
  writing: {
    text: "In the Creative Writing Studio, stories come to life as you write them! Magical tools help you craft your own adventures.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
    header: "Story Weaver",
    choices: [
      { text: "Create a Fantasy Tale", nextNode: "fantasy" },
      { text: "Write a Mystery Story", nextNode: "mystery" },
      { text: "Compose Poetry", nextNode: "poetry" },
      { text: "Return to the Hub", nextNode: "start" }
    ]
  }
};