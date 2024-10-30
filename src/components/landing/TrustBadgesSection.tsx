import { motion } from "framer-motion";
import { BookOpen, Target, Users, Award } from "lucide-react";

export const TrustBadgesSection = () => {
  const badges = [
    {
      icon: Target,
      title: "4.1B Market",
      description: "Expected market size by 2027"
    },
    {
      icon: Users,
      title: "270M+",
      description: "CYOA books sold worldwide"
    },
    {
      icon: Award,
      title: "36-Hour",
      description: "Hackathon origin story"
    },
    {
      icon: BookOpen,
      title: "5-14 yrs",
      description: "Target age range"
    }
  ];

  return (
    <section className="py-16 bg-purple-50/50 dark:bg-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto w-16 h-16 mb-4 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                <badge.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{badge.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};