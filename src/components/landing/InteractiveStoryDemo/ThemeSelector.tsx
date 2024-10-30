import { motion } from "framer-motion";
import { themes } from "./themes";

interface ThemeSelectorProps {
  selectedTheme: string;
  onThemeSelect: (themeId: string) => void;
}

export const ThemeSelector = ({ selectedTheme, onThemeSelect }: ThemeSelectorProps) => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-[#00FFFF] flex items-center gap-2 font-['Poppins']">
      <span>THEME</span>
      <ChevronDown className="w-5 h-5" />
    </h2>
    <div className="grid grid-cols-2 gap-4">
      {themes.map((theme) => (
        <motion.div
          key={theme.id}
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px #00FFFF" }}
          className={`relative cursor-pointer rounded-lg overflow-hidden ${
            selectedTheme === theme.id ? "ring-2 ring-[#00FFFF] ring-offset-2 ring-offset-black" : ""
          }`}
          onClick={() => onThemeSelect(theme.id)}
        >
          <img src={theme.image} alt={theme.name} className="w-full h-32 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <p className="absolute bottom-2 left-2 text-white font-medium font-['Poppins']">{theme.name}</p>
        </motion.div>
      ))}
    </div>
  </div>
);