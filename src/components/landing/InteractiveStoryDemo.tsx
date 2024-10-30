import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Gamepad2, Sparkles, Brain, Map, BookOpen } from "lucide-react";
import { storyNodes } from "@/data/storyNodes";

export const InteractiveStoryDemo = () => {
  const [currentNode, setCurrentNode] = useState("start");

  const handleChoice = (nextNode: string) => {
    setCurrentNode(nextNode);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 to-white dark:from-purple-900/20 dark:to-black/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent mb-6">
            Adventure Games
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Embark on an epic journey through interactive learning adventures. Choose your path and discover knowledge in exciting new ways.
          </p>
        </motion.div>

        <Card className="max-w-5xl mx-auto overflow-hidden bg-gradient-to-br from-purple-900 to-purple-800 shadow-2xl">
          <CardContent className="p-0">
            <div className="relative">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-purple-600/80 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-3 shadow-lg">
                  <Gamepad2 className="w-5 h-5" />
                  Adventure Quest
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <img 
                src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3"
                alt="Fantasy adventure landscape"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-purple-300" />
                  Begin Your Quest
                </h2>
                <p className="text-xl mb-6 leading-relaxed max-w-3xl">
                  Welcome, brave adventurer! Your journey through knowledge and discovery begins here. Choose your path wisely, as each decision shapes your unique learning adventure.
                </p>
              </div>
            </div>
            
            <div className="p-8 bg-gradient-to-b from-purple-900/50 to-purple-900/90">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="group w-full justify-between text-left h-auto py-6 px-8 bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40 text-white transition-all backdrop-blur-sm"
                  onClick={() => handleChoice("science")}
                >
                  <div className="flex items-center gap-4">
                    <Brain className="w-8 h-8 text-purple-300 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Science Laboratory</h3>
                      <p className="text-sm text-gray-300">Discover the wonders of scientific exploration</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-purple-300 group-hover:translate-x-2 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  className="group w-full justify-between text-left h-auto py-6 px-8 bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40 text-white transition-all backdrop-blur-sm"
                  onClick={() => handleChoice("history")}
                >
                  <div className="flex items-center gap-4">
                    <Map className="w-8 h-8 text-purple-300 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Historical Archives</h3>
                      <p className="text-sm text-gray-300">Travel through time and explore the past</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-purple-300 group-hover:translate-x-2 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  className="group w-full justify-between text-left h-auto py-6 px-8 bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40 text-white transition-all backdrop-blur-sm"
                  onClick={() => handleChoice("writing")}
                >
                  <div className="flex items-center gap-4">
                    <BookOpen className="w-8 h-8 text-purple-300 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Creative Writing Studio</h3>
                      <p className="text-sm text-gray-300">Craft your own magical stories</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-purple-300 group-hover:translate-x-2 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  className="group w-full justify-between text-left h-auto py-6 px-8 bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40 text-white transition-all backdrop-blur-sm"
                  onClick={() => handleChoice("problemSolving")}
                >
                  <div className="flex items-center gap-4">
                    <Sparkles className="w-8 h-8 text-purple-300 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Problem-Solving Workshop</h3>
                      <p className="text-sm text-gray-300">Challenge your mind with exciting puzzles</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-purple-300 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};