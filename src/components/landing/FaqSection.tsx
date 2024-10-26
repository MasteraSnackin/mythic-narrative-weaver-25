import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does parametric insurance work?",
    answer: "Parametric insurance automatically triggers payouts based on predefined weather conditions, such as rainfall amounts or temperature thresholds. When these conditions are met, as verified by our oracle data sources, smart contracts automatically process the payout without requiring traditional claims filing."
  },
  {
    question: "What types of weather conditions are covered?",
    answer: "Our insurance covers various weather-related risks including excess rainfall, drought conditions, and extreme temperatures. The specific conditions and thresholds are clearly defined in each policy and can be customized based on your farming needs."
  },
  {
    question: "How are payouts calculated and processed?",
    answer: "Payouts are calculated based on the severity of the weather event and your coverage amount. Our smart contracts automatically process payments when triggered by verified weather data, typically within 24-48 hours of the triggering event."
  },
  {
    question: "Is blockchain technology secure for insurance?",
    answer: "Yes! Blockchain technology provides enhanced security and transparency. All policy terms, conditions, and transactions are immutably recorded on the blockchain, ensuring that contract terms cannot be altered and payouts are processed exactly as agreed."
  },
  {
    question: "How do I verify weather data accuracy?",
    answer: "We use multiple trusted oracle sources to gather and verify weather data. This data is pulled from reliable weather stations and meteorological services, and is transparently recorded on the blockchain for verification."
  }
];

export const FaqSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-purple-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};