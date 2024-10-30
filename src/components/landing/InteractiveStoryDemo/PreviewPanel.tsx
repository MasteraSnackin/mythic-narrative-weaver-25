import { motion } from "framer-motion";
import { themes } from "./themes";

interface PreviewPanelProps {
  selectedTheme: string;
  gameType: string;
  difficulty: string;
  generatedStory?: string;
}

export const PreviewPanel = ({ selectedTheme, gameType, difficulty, generatedStory }: PreviewPanelProps) => {
  const selectedThemeData = themes.find(t => t.id === selectedTheme);

  return (
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
              src={generatedStory ? selectedThemeData.secondaryImage : selectedThemeData.image}
              alt={selectedThemeData.name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg font-['Poppins'] text-gray-300">
            {generatedStory || selectedThemeData.description}
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
  );
};