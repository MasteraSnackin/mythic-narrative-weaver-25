import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does the AI storytelling work?",
    answer: "Our AI technology analyzes reader responses and preferences in real-time to create personalized, adaptive narratives that evolve with each interaction."
  },
  {
    question: "Is it suitable for all age groups?",
    answer: "Yes! Our platform is designed for ages 5-14, with content specifically tailored to different reading levels and educational requirements."
  },
  {
    question: "Can teachers track student progress?",
    answer: "Absolutely! Our comprehensive dashboard allows educators to monitor reading progress, comprehension levels, and engagement metrics for each student."
  },
  {
    question: "How often is new content added?",
    answer: "We release new stories weekly, with special themed content during holidays and educational events. All content is reviewed by education experts."
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