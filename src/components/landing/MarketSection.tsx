import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const MarketSection = () => (
  <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 0.1, scale: 1 }}
      transition={{ duration: 1 }}
      className="absolute -top-1/2 -right-1/2 w-full h-full bg-purple-600 rounded-full blur-3xl"
    />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-8"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
          Market Opportunity
        </h2>
        <p className="text-2xl text-gray-600">
          The global interactive fiction market is expected to reach USD 4.1 billion by 2027.
          Join us in shaping the future of storytelling.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          <MarketCard value="4.1B" label="Market Size by 2027" />
          <MarketCard value="5-10%" label="Target Market Share" />
        </div>
      </motion.div>
    </div>
  </section>
);

const MarketCard = ({ value, label }: { value: string; label: string }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.2 }}
  >
    <Card className="w-48 bg-white/80 backdrop-blur-sm hover:bg-purple-50 transition-all duration-300">
      <CardContent className="p-6 text-center">
        <h3 className="text-4xl font-bold text-purple-600">{value}</h3>
        <p className="text-sm text-gray-600">{label}</p>
      </CardContent>
    </Card>
  </motion.div>
);