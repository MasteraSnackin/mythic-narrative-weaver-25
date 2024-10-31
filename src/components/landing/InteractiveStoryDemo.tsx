import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ThemeSelector } from "./InteractiveStoryDemo/ThemeSelector";
import { GameControls } from "./InteractiveStoryDemo/GameControls";
import { PreviewPanel } from "./InteractiveStoryDemo/PreviewPanel";
import { themes } from "./InteractiveStoryDemo/themes";
import { useTranslation } from "react-i18next";

export const InteractiveDemo = () => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [gameType, setGameType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [isGameTypeMinimized, setIsGameTypeMinimized] = useState(false);
  const [isDifficultyMinimized, setIsDifficultyMinimized] = useState(false);
  const [generatedStory, setGeneratedStory] = useState<string>();
  const { t } = useTranslation();

  const handlePlay = () => {
    const theme = themes.find(t => t.id === selectedTheme);
    if (theme) {
      setGeneratedStory(theme.generatedStory);
    }
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#007AFF] to-[#00C6FF] bg-clip-text text-transparent font-['Poppins']">
            {t("Adventure Games")}
          </h2>
          <p className="text-xl mb-6 font-['Poppins']">
            {t("Generate your very own Adventure Game using the power of AI. These text-based adventures will have you looking for clues, exploring exotic locations, solving mysteries, and more!")}
          </p>
          <p className="text-lg text-gray-300 font-['Poppins']">
            {t("You can choose a theme, game type, and difficulty level to generate your Adventure or start with the randomly selected Adventure we've picked for you.")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <ThemeSelector
              selectedTheme={selectedTheme}
              onThemeSelect={setSelectedTheme}
            />
            <GameControls
              gameType={gameType}
              difficulty={difficulty}
              isGameTypeMinimized={isGameTypeMinimized}
              isDifficultyMinimized={isDifficultyMinimized}
              onGameTypeChange={setGameType}
              onDifficultyChange={setDifficulty}
              onGameTypeMinimizeToggle={() => setIsGameTypeMinimized(!isGameTypeMinimized)}
              onDifficultyMinimizeToggle={() => setIsDifficultyMinimized(!isDifficultyMinimized)}
              onPlay={handlePlay}
            />
          </div>

          <PreviewPanel
            selectedTheme={selectedTheme}
            gameType={gameType}
            difficulty={difficulty}
            generatedStory={generatedStory}
          />
        </div>
      </div>
    </section>
  );
};