import { motion } from "framer-motion";
import { Award, Shield, Star, Users } from "lucide-react";

export const TrustBadgesSection = () => {
  const badges = [
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security"
    },
    {
      icon: Users,
      title: "10k+ Users",
      description: "Trusted by educators"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "EdTech Innovation 2024"
    },
    {
      icon: Star,
      title: "4.9/5 Rating",
      description: "From 1000+ reviews"
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