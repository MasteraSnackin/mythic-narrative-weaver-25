import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, Minimize2, Maximize2 } from "lucide-react";

const themes = [
  { id: "cyber", name: "Cyber City", image: "/themes/cyber-city.jpg" },
  { id: "island", name: "Deserted Island", image: "/themes/deserted-island.jpg" },
  { id: "detective", name: "Detective's Office", image: "/themes/detective-office.jpg" },
  { id: "forest", name: "Enchanted Forest", image: "/themes/enchanted-forest.jpg" },
  { id: "haunted", name: "Haunted House", image: "/themes/haunted-house.jpg" },
  { id: "jungle", name: "Lush Jungle", image: "/themes/lush-jungle.jpg" },
  { id: "space", name: "Outer Space", image: "/themes/outer-space.jpg" },
  { id: "underwater", name: "Underwater", image: "/themes/underwater.jpg" }
];

const gameTypes = ["Escape Room", "Adventure", "Detective Mystery"];
const difficulties = ["Easy", "Medium", "Hard"];

export const InteractiveStoryDemo = () => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [gameType, setGameType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [isGameTypeMinimized, setIsGameTypeMinimized] = useState(false);
  const [isDifficultyMinimized, setIsDifficultyMinimized] = useState(false);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#007AFF] to-[#00C6FF] bg-clip-text text-transparent font-['Poppins']">
            Adventure Games
          </h1>
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
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
              {!selectedTheme && !gameType && !difficulty ? (
                <p className="text-gray-400 text-center p-8 font-['Poppins']">
                  You must select a theme, game type, and difficulty level to get started.
                </p>
              ) : (
                <img
                  src={themes.find(t => t.id === selectedTheme)?.image || themes[0].image}
                  alt="Adventure preview"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
