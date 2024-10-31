import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Brain, Sparkles, Target, Zap } from "lucide-react"
import { useTranslation } from "react-i18next"

const AIStoryEngine = () => {
  const { t } = useTranslation()

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
              {t("Our AI Story Engine")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("Discover how our proprietary AI crafts personalized narratives that adapt to your choices")}
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                  <h2 className="text-2xl font-semibold">{t("Proprietary AI Model")}</h2>
                </div>
                <p className="text-gray-600">
                  {t("Our custom-built AI is trained on a massive dataset of creative writing, educational materials, and interactive game design. This unique training allows it to craft stories that are both engaging and informative.")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Target className="w-8 h-8 text-purple-600" />
                  <h2 className="text-2xl font-semibold">{t("Dynamic Adaptation")}</h2>
                </div>
                <p className="text-gray-600">
                  {t("The AI engine analyzes your choices and reading patterns to adjust difficulty, pacing, and narrative complexity in real-time. This creates a truly personalized experience that grows with you.")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                  <h2 className="text-2xl font-semibold">{t("Human Touch & Curation")}</h2>
                </div>
                <p className="text-gray-600">
                  {t("Our AI is guided by experienced storytellers, educators, and game designers. This human touch ensures stories are not only educational but also captivating and tailored to specific age groups and interests.")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                  <h2 className="text-2xl font-semibold">{t("Continuous Learning")}</h2>
                </div>
                <p className="text-gray-600">
                  {t("Our AI constantly learns and improves based on user interaction and feedback. This ongoing loop ensures our stories stay fresh, relevant, and even more effective over time.")}
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AIStoryEngine