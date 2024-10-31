import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  HERO_IMAGE, 
  STORYTELLING_IMAGE, 
  TECHNOLOGY_IMAGE, 
  FANTASY_IMAGE,
  ADVENTURE_GENRE_IMAGE,
  CREATIVE_WRITING_IMAGE 
} from "@/utils/images";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const imageInfo = [
  {
    src: FANTASY_IMAGE,
    alt: "Fantasy Storytelling",
    tooltip: "Dive into magical worlds where your choices shape the narrative."
  },
  {
    src: CREATIVE_WRITING_IMAGE,
    alt: "Creative Writing",
    tooltip: "Experience stories that evolve with your choices."
  },
  {
    src: STORYTELLING_IMAGE,
    alt: "Interactive Stories",
    tooltip: "Join a growing community of young readers."
  },
  {
    src: TECHNOLOGY_IMAGE,
    alt: "AI Technology",
    tooltip: "Cutting-edge AI technology adapts to your skill level."
  },
  {
    src: ADVENTURE_GENRE_IMAGE,
    alt: "Adventure Stories",
    tooltip: "Part of a growing interactive fiction market."
  },
  {
    src: HERO_IMAGE,
    alt: "Reading Experience",
    tooltip: "Perfect for ages 5-14, making learning fun and interactive."
  }
];

export const HeroSection = () => {
  const { t } = useTranslation(['home', 'common']);
  
  return (
    <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-8 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30"
        />
        <h1 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400">
          {t('home:Hero Title')}
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('home:Hero Subtitle')}
        </p>
        <motion.div 
          className="space-x-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6">
            <Link to="/get-started">{t('home:Get Started CTA')}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
            <Link to="/learn-more">{t('home:Learn More CTA')}</Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 relative grid grid-cols-3 gap-4"
      >
        <TooltipProvider>
          {imageInfo.map((image, index) => (
            <Tooltip key={image.alt}>
              <TooltipTrigger asChild>
                <motion.div 
                  className={`relative aspect-square ${
                    index === 1 ? "mt-8" : 
                    index === 3 ? "-mt-8" : 
                    index === 4 ? "mt-4" : 
                    index === 5 ? "-mt-8" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={image.src}
                    alt={t(image.alt)}
                    className="rounded-2xl shadow-2xl object-cover w-full h-full cursor-pointer"
                  />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent 
                side="top"
                className="max-w-[200px] p-4 text-sm bg-white/90 backdrop-blur-sm border border-purple-200"
              >
                {t(image.tooltip)}
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </motion.div>
    </section>
  );
};