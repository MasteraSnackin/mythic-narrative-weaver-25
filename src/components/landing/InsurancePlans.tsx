import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic Coverage",
    price: "0.5 ETH/season",
    features: [
      "Basic weather protection",
      "Up to 5 ETH coverage",
      "48-hour payout processing",
      "Standard oracle data sources"
    ],
    buttonText: "Get Started",
    link: "/get-started"
  },
  {
    name: "Premium Coverage",
    price: "1.2 ETH/season",
    features: [
      "Advanced weather protection",
      "Up to 15 ETH coverage",
      "24-hour payout processing",
      "Multiple oracle data sources",
      "Customizable thresholds"
    ],
    buttonText: "Get Started",
    link: "/get-started"
  },
  {
    name: "Enterprise Solution",
    price: "Custom Pricing",
    features: [
      "Comprehensive coverage options",
      "Unlimited coverage amount",
      "Instant payout processing",
      "Premium oracle network",
      "Dedicated account manager",
      "Custom risk parameters"
    ],
    buttonText: "Contact Sales",
    link: "/contact"
  }
];

export const InsurancePlans = () => {
  return (
    <section className="py-20 bg-purple-50/50 dark:bg-purple-900/20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent"
        >
          Coverage Plans
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                  <p className="text-xl text-center text-purple-600 font-semibold">{plan.price}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to={plan.link}>{plan.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};