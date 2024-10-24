import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="h-full bg-white/70 backdrop-blur-sm hover:bg-purple-50 transition-colors duration-300 border-purple-100">
      <CardContent className="p-6 space-y-4">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-12 h-12 text-purple-600" />
        </motion.div>
        <h3 className="text-xl font-semibold text-purple-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);