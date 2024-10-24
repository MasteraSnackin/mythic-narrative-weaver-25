import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const CallToAction = () => (
  <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360]
      }}
      transition={{ duration: 20, repeat: Infinity }}
      className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDAgTDIwMCAxMDAgTDEwMCAyMDAgTDAgMTAwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] opacity-10"
    />
    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8 max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold">Join the Future of Storytelling</h2>
        <p className="text-2xl text-purple-100">
          Be part of the revolution in interactive education and entertainment.
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-100 text-lg px-8 py-6">
            Contact Us
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);