import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Users, TrendingUp, Brain } from "lucide-react";
import { Link } from "react-router-dom";

export const StorytellingDashboard = () => {
  return (
    <section className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent"
        >
          Platform Metrics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Link to="/library">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                  Market Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-600">$4.1B</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Expected market size by 2027
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/community">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-600" />
                  User Base
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-600">270M+</p>
                <p className="text-gray-600 dark:text-gray-300">
                  CYOA books sold worldwide
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/parent-dashboard">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                  Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-600">70%</p>
                <p className="text-gray-600 dark:text-gray-300">
                  User retention rate
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/ai-story-engine">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-purple-600" />
                  AI Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-600">∞</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Unique story possibilities
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};