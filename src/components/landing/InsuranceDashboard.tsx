import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Cloud, Shield, LineChart } from "lucide-react";

export const InsuranceDashboard = () => {
  return (
    <section className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent"
        >
          Insurance Dashboard
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="w-6 h-6 text-purple-600" />
                Weather Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Real-time weather data monitoring and automated trigger conditions
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-purple-600" />
                Active Policies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Track and manage your active insurance policies
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="w-6 h-6 text-purple-600" />
                Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                View historical data and policy performance metrics
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};