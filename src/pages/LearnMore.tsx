import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Lightbulb, Target } from "lucide-react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const LearnMore = () => {
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
              {t("future_storytelling")}
            </h1>
            <p className="text-xl text-gray-600">
              {t("born_in_hackathon")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="p-2 bg-purple-100 rounded-lg w-fit">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold">{t("our_vision")}</h2>
                <p className="text-gray-600">
                  {t("vision_description")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="p-2 bg-purple-100 rounded-lg w-fit">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold">{t("technology_innovation")}</h2>
                <p className="text-gray-600">
                  {t("tech_description")}
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="p-6 space-y-4">
                <div className="p-2 bg-purple-100 rounded-lg w-fit">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold">{t("market_opportunity")}</h2>
                <p className="text-gray-600">
                  {t("market_description")}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">4.1B</div>
                    <div className="text-sm text-gray-600">{t("market_size")}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">270M+</div>
                    <div className="text-sm text-gray-600">{t("books_sold")}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">5-14</div>
                    <div className="text-sm text-gray-600">{t("target_age")}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">36hr</div>
                    <div className="text-sm text-gray-600">{t("hackathon_origin")}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/get-started">{t("get_started")}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/" className="inline-flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                {t("back_to_home")}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LearnMore