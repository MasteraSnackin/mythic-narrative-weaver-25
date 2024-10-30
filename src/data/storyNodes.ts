import { StoryNode } from "@/types/story";

export const storyNodes: Record<string, StoryNode> = {
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
  },
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
  },
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
  },
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
  chemistry: {
    text: "Experiment with fascinating chemical reactions that reveal the wonders of matter and states of change.",
    image: "https://images.unsplash.com/photo-1558929082-4f0017f9b497",
    header: "Chemistry Lab",
    choices: [
      { text: "Create a Volcano", nextNode: "volcano" },
      { text: "Mix Colors", nextNode: "colors" },
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
  },
  bioluminescent: {
    text: "Learn about the fascinating flora and fauna that glow in the deep dark sea.",
    image: "https://images.unsplash.com/photo-1623669619315-4b9bb7c09ab2",
    header: "Bioluminescent Wonders",
    choices: [
      { text: "Return to the Deep Sea", nextNode: "deepsea" },
      { text: "Return to the Ocean", nextNode: "marine" }
    ]
  },
  volcano: {
    text: "Create your own mini volcano and watch it erupt with colorful reactions!",
    image: "https://images.unsplash.com/photo-1512510074988-709b123c56b7",
    header: "Volcano Maker",
    choices: [
      { text: "Experiment with Vinegar and Baking Soda", nextNode: "experiment" },
      { text: "Return to Chemistry Lab", nextNode: "chemistry" }
    ]
  },
  colors: {
    text: "Mix colors using various substances to create beautiful reactions.",
    image: "https://images.unsplash.com/photo-1582986262592-4b4ce2b0218b",
    header: "Color Mixing Fun",
    choices: [
      { text: "Create a Rainbow", nextNode: "rainbow" },
      { text: "Return to Chemistry Lab", nextNode: "chemistry" }
    ]
  },
  rainbow: {
    text: "Watch as your colors blend to form a beautiful spectrum!",
    image: "https://images.unsplash.com/photo-1528890729511-ac51add65779",
    header: "Rainbow Extravanganza",
    choices: [
      { text: "Return to Chemistry Lab", nextNode: "chemistry" }
    ]
  },
  fish: {
    text: "Snorkel with tropical fish and learn about their habitats!",
    image: "https://images.unsplash.com/photo-1528028324728-8d8f28e7276c",
    header: "Tropical Fish Snorkeling",
    choices: [
      { text: "Explore More Underwater", nextNode: "marine" },
      { text: "Return to Coral Adventure", nextNode: "coral" }
    ]
  },
  ecosystem: {
    text: "Understand the intricate relationships within coral ecosystems and their importance.",
    image: "https://images.unsplash.com/photo-1513791840245-2f7e168ebcef",
    header: "Coral Ecosystem Learnings",
    choices: [
      { text: "Return to Coral Adventure", nextNode: "coral" },
      { text: "Return to the Ocean", nextNode: "marine" }
    ]
  },
  logic: {
    text: "Puzzle time! Solve a challenging logic puzzle to test your reasoning.",
    image: "https://images.unsplash.com/photo-1607504160545-ecf7e0e4d94d",
    header: "Logic Challenge",
    choices: [
      { text: "Solve the Puzzle", nextNode: "solve" },
      { text: "Return to Problem-Solving Workshop", nextNode: "problemSolving" }
    ]
  },
  math: {
    text: "Engage in exciting math adventures that will expand your knowledge.",
    image: "https://images.unsplash.com/photo-1560075715-b0c6b4e36d02",
    header: "Math Adventures",
    choices: [
      { text: "Solve Fun Math Problems", nextNode: "solveMath" },
      { text: "Return to Problem-Solving Workshop", nextNode: "problemSolving" }
    ]
  },
  strategy: {
    text: "Put your mind to the test with strategic thinking games that require planning.",
    image: "https://images.unsplash.com/photo-1526333211961-e6fedb2a0f5d",
    header: "Strategic Thinking Games",
    choices: [
      { text: "Play a Strategy Game", nextNode: "playGame" },
      { text: "Return to Problem-Solving Workshop", nextNode: "problemSolving" }
    ]
  }
};
