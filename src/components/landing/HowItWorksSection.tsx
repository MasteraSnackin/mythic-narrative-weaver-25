import { motion } from "framer-motion";
import { BookOpen, Sparkles, Users, Trophy } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Choose Your Story",
    description: "Browse our extensive library of interactive stories across various genres and reading levels."
  },
  {
    icon: Sparkles,
    title: "AI Adaptation",
    description: "Our AI analyzes your choices and reading style to personalize the narrative experience."
  },
  {
    icon: Users,
    title: "Interactive Learning",
    description: "Engage with the story through choices that impact the narrative and learning outcomes."
  },
  {
    icon: Trophy,
    title: "Track Progress",
    description: "Monitor reading comprehension and earn achievements as you progress through stories."
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-purple-50 dark:bg-purple-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Four simple steps to start your interactive learning journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-purple-300 dark:bg-purple-700"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};