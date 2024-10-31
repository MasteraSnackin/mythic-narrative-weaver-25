import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { useTranslation } from "react-i18next"

const FAQ = () => {
  const { t } = useTranslation()

  const faqs = [
    {
      question: "faq_age_group",
      answer: "faq_age_group_answer"
    },
    {
      question: "faq_ai_storytelling",
      answer: "faq_ai_storytelling_answer"
    },
    {
      question: "faq_educational_aspect",
      answer: "faq_educational_aspect_answer"
    },
    {
      question: "faq_parent_monitoring",
      answer: "faq_parent_monitoring_answer"
    },
    {
      question: "faq_new_content",
      answer: "faq_new_content_answer"
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
              {t("frequently_asked_questions")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("find_answers_common_questions")}
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <HelpCircle className="w-8 h-8 text-purple-600" />
                <h2 className="text-2xl font-semibold">{t("common_questions")}</h2>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {t(faq.question)}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {t(faq.answer)}
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