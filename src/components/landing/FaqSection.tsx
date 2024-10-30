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
    answer: "Our AI technology analyzes your choices and reading patterns to create personalized narratives that adapt to your preferences. The stories evolve based on your decisions, ensuring each experience is unique and engaging."
  },
  {
    question: "What age group is this suitable for?",
    answer: "Our platform is designed for readers aged 5-14, with content and difficulty levels that automatically adjust to match each reader's abilities and interests."
  },
  {
    question: "How does the educational aspect work?",
    answer: "We seamlessly integrate educational elements into our stories, making learning fun and interactive. The AI adapts the content to reinforce learning while maintaining engagement through exciting narratives."
  },
  {
    question: "Can parents monitor their child's progress?",
    answer: "Yes! Parents have access to a dashboard showing reading progress, comprehension levels, and areas of interest. This helps track educational development while ensuring an enjoyable reading experience."
  },
  {
    question: "How often is new content added?",
    answer: "Our AI continuously generates new story variations, and we regularly add new base stories to our library. Each story can be experienced multiple times with different outcomes based on your choices."
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