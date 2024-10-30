import { motion } from "framer-motion";
import { Wand2 } from "lucide-react";

interface StoryImageProps {
  image: string;
  header?: string;
}

export const StoryImage = ({ image, header }: StoryImageProps) => (
  <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
    <motion.img
      src={image}
      alt="Story scene"
      className="w-full h-full object-cover"
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    />
    {header && (
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute top-4 left-4 bg-purple-600/90 text-white px-4 py-2 rounded-full text-lg font-semibold flex items-center gap-2"
      >
        <Wand2 className="w-5 h-5" />
        {header}
      </motion.div>
    )}
  </div>
);