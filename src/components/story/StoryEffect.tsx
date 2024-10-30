import { motion } from "framer-motion";

interface StoryEffectProps {
  effect: string;
}

export const StoryEffect = ({ effect }: StoryEffectProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg"
  >
    {effect}
  </motion.div>
);