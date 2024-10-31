import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BookOpen, GraduationCap, Users } from "lucide-react"
import { useTranslation } from "react-i18next"

const EducatorResources = () => {
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
              {t("educator_resources")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("tools_enhance")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <BookOpen className="w-12 h-12 text-purple-600" />
                <h3 className="text-xl font-semibold">{t("lesson_plans")}</h3>
                <p className="text-gray-600">{t("ready_to_use")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <GraduationCap className="w-12 h-12 text-purple-600" />
                <h3 className="text-xl font-semibold">{t("teaching_guides")}</h3>
                <p className="text-gray-600">{t("comprehensive_guides")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <Users className="w-12 h-12 text-purple-600" />
                <h3 className="text-xl font-semibold">{t("Community")}</h3>
                <p className="text-gray-600">{t("connect_educators")}</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default EducatorResources