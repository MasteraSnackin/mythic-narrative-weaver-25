import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"

const FAQ = () => {
  const faqs = [
    {
      question: "What age group is this suitable for?",
      answer: "Our interactive stories are designed for readers aged 5-14, with content and difficulty levels that automatically adjust to match each reader's abilities and interests."
    },
    {
      question: "How does the AI storytelling work?",
      answer: "Our AI analyzes your choices and reading patterns to create personalized narratives that adapt to your preferences and learning style. Each decision shapes the story's direction and outcome."
    },
    {
      question: "Is it safe for children?",
      answer: "Yes! We prioritize safety with age-appropriate content, parental controls, and secure data protection. All content is reviewed and monitored for educational value and appropriateness."
    },
    {
      question: "Can teachers use it in classrooms?",
      answer: "Absolutely! We offer special educational licenses with features like progress tracking, classroom management tools, and curriculum integration support."
    },
    {
      question: "How much does it cost?",
      answer: "We offer various subscription plans starting from $9.99/month, with special pricing for educational institutions. A free trial is available to explore our platform."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-50 to-white dark:from-purple-900 dark:via-gray-900 dark:to-black pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find answers to common questions about our platform
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <HelpCircle className="w-8 h-8 text-purple-600" />
                <h2 className="text-2xl font-semibold">Common Questions</h2>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQ