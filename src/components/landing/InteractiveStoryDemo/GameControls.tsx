import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Minimize2, Maximize2, ChevronDown } from "lucide-react";

interface GameControlsProps {
  gameType: string;
  difficulty: string;
  isGameTypeMinimized: boolean;
  isDifficultyMinimized: boolean;
  onGameTypeChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
  onGameTypeMinimizeToggle: () => void;
  onDifficultyMinimizeToggle: () => void;
  onPlay: () => void;
}

export const GameControls = ({
  gameType,
  difficulty,
  isGameTypeMinimized,
  isDifficultyMinimized,
  onGameTypeChange,
  onDifficultyChange,
  onGameTypeMinimizeToggle,
  onDifficultyMinimizeToggle,
  onPlay,
}: GameControlsProps) => (
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
          onClick={onGameTypeMinimizeToggle}
        >
          {isGameTypeMinimized ? (
            <Maximize2 className="h-4 w-4" />
          ) : (
            <Minimize2 className="h-4 w-4" />
          )}
        </Button>
      </div>
      {!isGameTypeMinimized && (
        <Select onValueChange={onGameTypeChange} value={gameType}>
          <SelectTrigger className="w-full bg-gray-900 border-gray-700 font-['Poppins']">
            <SelectValue placeholder="Select game type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="escape room">Escape Room</SelectItem>
            <SelectItem value="adventure">Adventure</SelectItem>
            <SelectItem value="detective mystery">Detective Mystery</SelectItem>
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
          onClick={onDifficultyMinimizeToggle}
        >
          {isDifficultyMinimized ? (
            <Maximize2 className="h-4 w-4" />
          ) : (
            <Minimize2 className="h-4 w-4" />
          )}
        </Button>
      </div>
      {!isDifficultyMinimized && (
        <Select onValueChange={onDifficultyChange} value={difficulty}>
          <SelectTrigger className="w-full bg-gray-900 border-gray-700 font-['Poppins']">
            <SelectValue placeholder="Select difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      )}
    </div>
    <Button
      onClick={onPlay}
      className="w-full py-6 text-lg bg-gradient-to-r from-[#007AFF] to-[#00C6FF] hover:opacity-90 transition-opacity font-['Poppins']"
    >
      PLAY
    </Button>
  </div>
);
