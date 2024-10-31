import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { MessageSquare, Users, BookOpen, GraduationCap } from "lucide-react"
import { useTranslation } from "react-i18next"

const Community = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-50 to-white dark:from-purple-900 dark:via-gray-900 dark:to-black pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
              {t("community_hub")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("connect_storytellers")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <BookOpen className="w-12 h-12 text-purple-600" />
                <h3 className="text-xl font-semibold">{t("featured_stories")}</h3>
                {[t("The Magic Library"), t("Space Adventures"), t("Time Travelers")].map((story) => (
                  <div key={story} className="flex items-center justify-between">
                    <span>{story}</span>
                    <Button variant="outline" size="sm">{t("read")}</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <MessageSquare className="w-12 h-12 text-purple-600" />
                <h3 className="text-xl font-semibold">{t("discussion_forums")}</h3>
                {[t("Writing Tips"), t("Story Ideas"), t("Technical Help")].map((forum) => (
                  <div key={forum} className="flex items-center justify-between">
                    <span>{forum}</span>
                    <Button variant="outline" size="sm">{t("join")}</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <GraduationCap className="w-12 h-12 text-purple-600" />
                <h3 className="text-xl font-semibold">{t("educational_resources")}</h3>
                {[t("Lesson Plans"), t("Writing Guides"), t("Reading Strategies")].map((resource) => (
                  <div key={resource} className="flex items-center justify-between">
                    <span>{resource}</span>
                    <Button variant="outline" size="sm">{t("download")}</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <Users className="w-12 h-12 text-purple-600" />
                <h3 className="text-xl font-semibold">{t("community_events")}</h3>
                {[t("Writing Workshop"), t("Story Reading"), t("Teacher Training")].map((event) => (
                  <div key={event} className="flex items-center justify-between">
                    <span>{event}</span>
                    <Button variant="outline" size="sm">{t("register")}</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Community