import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Coffee, Code, Users } from "lucide-react"
import { useTranslation } from "react-i18next"

const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-50 to-white dark:from-purple-900 dark:via-gray-900 dark:to-black pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
              {t("Our Story")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("Born in a 36-hour hackathon, fueled by passion and innovation")}
            </p>
          </div>

          <div className="grid gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Coffee className="w-8 h-8 text-purple-600" />
                  <h2 className="text-2xl font-semibold">{t("The Hackathon Origin")}</h2>
                </div>
                <p className="text-gray-600">
                  {t("Our journey began in the electrifying crucible of a 36-hour hackathon. Three passionate developers, united by a shared vision for the future of storytelling with AI, came together to create something revolutionary.")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                  <h2 className="text-2xl font-semibold">{t("Our Vision")}</h2>
                </div>
                <p className="text-gray-600">
                  {t("We're revolutionizing storytelling with AI-powered narratives that adapt to your choices, creating truly immersive and personalized journeys. Every decision shapes the story, making each experience unique.")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Code className="w-8 h-8 text-purple-600" />
                  <h2 className="text-2xl font-semibold">{t("Technology & Innovation")}</h2>
                </div>
                <p className="text-gray-600">
                  {t("Our proprietary AI model is trained on a massive dataset of creative writing, educational materials, and interactive game design. This unique combination allows us to craft stories that are both engaging and informative.")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-purple-600" />
                  <h2 className="text-2xl font-semibold">{t("Growing Together")}</h2>
                </div>
                <p className="text-gray-600">
                  {t("We're actively seeking collaborators who share our passion for storytelling and education. Join us in shaping the future of interactive fiction and making learning an adventure.")}
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">270M+</div>
                    <div className="text-sm text-gray-600">{t("CYOA Books Sold Worldwide")}</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">$4.1B</div>
                    <div className="text-sm text-gray-600">{t("Market Size by 2027")}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutUs