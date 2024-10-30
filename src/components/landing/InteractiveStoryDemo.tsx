import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

const themes = [
  { id: "cyber", name: "Cyber City", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500" },
  { id: "tropical", name: "Tropical Island", image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500" },
  { id: "haunted", name: "Haunted Mansion", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500" },
  { id: "jungle", name: "Jungle Adventure", image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500" },
  { id: "space", name: "Space Odyssey", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500" },
  { id: "ocean", name: "Ocean Depths", image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=500" },
];

const gameTypes = ["Adventure", "Mystery", "Puzzle"];
const difficulties = ["Easy", "Medium", "Hard"];

export const InteractiveStoryDemo = () => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [gameType, setGameType] = useState("");
  const [difficulty, setDifficulty] = useState("");

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#007AFF] to-[#00C6FF] bg-clip-text text-transparent">
            Adventure Games
          </h1>
          <p className="text-xl mb-6">
            Generate your very own Adventure Game using the power of AI. These text-based adventures will have you looking for clues, exploring exotic locations, solving mysteries, and more!
          </p>
          <p className="text-lg text-gray-300">
            You can choose a theme, game type, and difficulty level to generate your Adventure or start with the randomly selected Adventure we've picked for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00FFFF] flex items-center gap-2">
                <span>THEME</span>
                <ChevronDown className="w-5 h-5" />
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {themes.map((theme) => (
                  <motion.div
                    key={theme.id}
                    whileHover={{ scale: 1.05 }}
                    className={`relative cursor-pointer rounded-lg overflow-hidden ${
                      selectedTheme === theme.id ? "ring-2 ring-[#00FFFF] ring-offset-2 ring-offset-black" : ""
                    }`}
                    onClick={() => setSelectedTheme(theme.id)}
                  >
                    <img src={theme.image} alt={theme.name} className="w-full h-32 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <p className="absolute bottom-2 left-2 text-white font-medium">{theme.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#00FFFF] flex items-center gap-2">
                  <span>GAME TYPE</span>
                  <ChevronDown className="w-5 h-5" />
                </h2>
                <Select onValueChange={setGameType} value={gameType}>
                  <SelectTrigger className="w-full bg-gray-900 border-gray-700">
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
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#00FFFF] flex items-center gap-2">
                  <span>DIFFICULTY</span>
                  <ChevronDown className="w-5 h-5" />
                </h2>
                <Select onValueChange={setDifficulty} value={difficulty}>
                  <SelectTrigger className="w-full bg-gray-900 border-gray-700">
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
              </div>
            </div>

            <Button
              className="w-full py-6 text-lg bg-gradient-to-r from-[#007AFF] to-[#00C6FF] hover:opacity-90 transition-opacity"
            >
              PLAY
            </Button>
          </div>

          <Card className="bg-gray-900 border-gray-800 p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#00FFFF] flex items-center justify-between">
              <span>MY ADVENTURE</span>
              <div className="flex gap-1">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="w-3 h-3 bg-[#FFD700] rounded-full" />
                ))}
              </div>
            </h2>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
              {!selectedTheme && !gameType && !difficulty ? (
                <p className="text-gray-400 text-center p-8">
                  You must select a theme, game type, and difficulty level to get started.
                </p>
              ) : (
                <img
                  src="https://images.unsplash.com/photo-1590955559496-50316bd28ff8?w=800"
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