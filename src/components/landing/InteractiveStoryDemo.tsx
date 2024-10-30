import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, Minimize2, Maximize2 } from "lucide-react";

const themes = [
  {
    id: "cyber",
    name: "Cyber City",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "Navigate through neon-lit streets and hack into mysterious systems in this cyberpunk adventure.",
    secondaryImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    id: "island",
    name: "Deserted Island",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    description: "Survive on a mysterious island filled with ancient secrets and hidden dangers.",
    secondaryImage: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151"
  },
  {
    id: "detective",
    name: "Detective's Office",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Solve complex cases in a noir-style detective agency set in the heart of the city.",
    secondaryImage: "https://images.unsplash.com/photo-1492301936769-b49830bc1d1e"
  },
  {
    id: "forest",
    name: "Enchanted Forest",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    description: "Discover magical creatures and solve mystical puzzles in an ancient enchanted woodland.",
    secondaryImage: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
  },
  {
    id: "haunted",
    name: "Haunted House",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    description: "Explore a spine-chilling mansion with dark secrets and supernatural phenomena.",
    secondaryImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "jungle",
    name: "Lush Jungle",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    description: "Trek through dense rainforests and encounter exotic wildlife in this tropical adventure.",
    secondaryImage: "https://images.unsplash.com/photo-1518855727101-fcb8e2b4ac95"
  },
  {
    id: "space",
    name: "Outer Space",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    description: "Embark on an interstellar journey through the cosmos and discover alien civilizations.",
    secondaryImage: "https://images.unsplash.com/photo-1517022812141-23620dba5c23"
  },
  {
    id: "underwater",
    name: "Underwater",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4",
    description: "Dive into the depths of the ocean and uncover mysterious marine phenomena.",
    secondaryImage: "https://images.unsplash.com/photo-1441057206919-63d19fac2369"
  }
];

const gameTypes = ["Escape Room", "Adventure", "Detective Mystery"];
const difficulties = ["Easy", "Medium", "Hard"];

export const InteractiveDemo = () => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [gameType, setGameType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [isGameTypeMinimized, setIsGameTypeMinimized] = useState(false);
  const [isDifficultyMinimized, setIsDifficultyMinimized] = useState(false);

  const selectedThemeData = themes.find(t => t.id === selectedTheme);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#007AFF] to-[#00C6FF] bg-clip-text text-transparent font-['Poppins']">
            Adventure Games
          </h2>
          <p className="text-xl mb-6 font-['Poppins']">
            Generate your very own Adventure Game using the power of AI. These text-based adventures will have you looking for clues, exploring exotic locations, solving mysteries, and more!
          </p>
          <p className="text-lg text-gray-300 font-['Poppins']">
            You can choose a theme, game type, and difficulty level to generate your Adventure or start with the randomly selected Adventure we've picked for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00FFFF] flex items-center gap-2 font-['Poppins']">
                <span>THEME</span>
                <ChevronDown className="w-5 h-5" />
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {themes.map((theme) => (
                  <motion.div
                    key={theme.id}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 15px #00FFFF"
                    }}
                    className={`relative cursor-pointer rounded-lg overflow-hidden ${
                      selectedTheme === theme.id ? "ring-2 ring-[#00FFFF] ring-offset-2 ring-offset-black" : ""
                    }`}
                    onClick={() => setSelectedTheme(theme.id)}
                  >
                    <img src={theme.image} alt={theme.name} className="w-full h-32 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <p className="absolute bottom-2 left-2 text-white font-medium font-['Poppins']">{theme.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className={`transition-all duration-300 ${isGameTypeMinimized ? 'opacity-50' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-[#00FFFF] flex items-center gap-2 font-['Poppins']">
                    <span>GAME TYPE</span>
                    <ChevronDown className="w-5 h-5" />
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[#00FFFF] hover:bg-[#00FFFF]/10"
                    onClick={() => setIsGameTypeMinimized(!isGameTypeMinimized)}
                  >
                    {isGameTypeMinimized ? (
                      <Maximize2 className="h-4 w-4" />
                    ) : (
                      <Minimize2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {!isGameTypeMinimized && (
                  <Select onValueChange={setGameType} value={gameType}>
                    <SelectTrigger className="w-full bg-gray-900 border-gray-700 font-['Poppins']">
                      <SelectValue placeholder="Select game type" />
                    </SelectTrigger>
                    <SelectContent>
                      {gameTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

              <div className={`transition-all duration-300 ${isDifficultyMinimized ? 'opacity-50' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-[#00FFFF] flex items-center gap-2 font-['Poppins']">
                    <span>DIFFICULTY</span>
                    <ChevronDown className="w-5 h-5" />
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[#00FFFF] hover:bg-[#00FFFF]/10"
                    onClick={() => setIsDifficultyMinimized(!isDifficultyMinimized)}
                  >
                    {isDifficultyMinimized ? (
                      <Maximize2 className="h-4 w-4" />
                    ) : (
                      <Minimize2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {!isDifficultyMinimized && (
                  <Select onValueChange={setDifficulty} value={difficulty}>
                    <SelectTrigger className="w-full bg-gray-900 border-gray-700 font-['Poppins']">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      {difficulties.map((level) => (
                        <SelectItem key={level} value={level.toLowerCase()}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>

            <Button
              className="w-full py-6 text-lg bg-gradient-to-r from-[#007AFF] to-[#00C6FF] hover:opacity-90 transition-opacity font-['Poppins']"
            >
              PLAY
            </Button>
          </div>

          <Card className="bg-gray-900 border-gray-800 p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#00FFFF] flex items-center justify-between font-['Poppins']">
              <span>MY ADVENTURE</span>
              <div className="flex gap-1">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="w-3 h-3 bg-[#FFD700] rounded-full" />
                ))}
              </div>
            </h2>
            {selectedThemeData ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={selectedThemeData.image}
                    alt={selectedThemeData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-['Poppins'] text-gray-300">
                  {selectedThemeData.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={selectedThemeData.secondaryImage}
                    alt={`${selectedThemeData.name} secondary`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="bg-gray-800 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">Selected Options:</p>
                    <p className="text-[#00FFFF]">Theme: {selectedThemeData.name}</p>
                    <p className="text-[#00FFFF]">Type: {gameType || "Not selected"}</p>
                    <p className="text-[#00FFFF]">Difficulty: {difficulty || "Not selected"}</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
                <p className="text-gray-400 text-center p-8 font-['Poppins']">
                  Select a theme to preview your adventure
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};