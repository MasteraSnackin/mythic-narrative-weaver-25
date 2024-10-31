import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Bell, Mail, Star } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { useTranslation } from "react-i18next"

const StayUpdated = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { t } = useTranslation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: t("Successfully subscribed! 🎉"),
        description: t("Welcome to our newsletter community!"),
      })
      
      setEmail("")
    } catch (error) {
      toast({
        title: t("Error"),
        description: t("Something went wrong. Please try again."),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
              {t("Stay Updated")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("Join our newsletter and never miss an update about new stories and features.")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                  <Bell className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">{t("Weekly Updates")}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t("Get notified about new stories and features")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">{t("Exclusive Content")}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t("Access to subscriber-only stories")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">{t("Direct Updates")}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t("Important announcements straight to your inbox")}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t("Subscribe to Our Newsletter")}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">{t("Email Address")}</label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder={t("your@email.com")}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? t("Subscribing...") : t("Subscribe Now")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default StayUpdated