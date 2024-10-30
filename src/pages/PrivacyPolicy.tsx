import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Shield } from "lucide-react"

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              How we protect and handle your data
            </p>
          </div>

          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <Shield className="w-8 h-8 text-purple-600" />
                <h2 className="text-2xl font-semibold">Data Collection & Usage</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  At Mythic Mind Labs, we take your privacy seriously. We collect only essential information needed to provide you with the best interactive storytelling experience.
                </p>
                <h3 className="text-lg font-semibold">Information We Collect:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Basic account information (name, email)</li>
                  <li>Reading preferences and progress</li>
                  <li>Story choices and interactions</li>
                  <li>Learning analytics for educational purposes</li>
                </ul>
                <h3 className="text-lg font-semibold">How We Use Your Data:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personalizing your story experience</li>
                  <li>Improving our AI storytelling engine</li>
                  <li>Providing progress reports for educational accounts</li>
                  <li>Sending relevant updates and recommendations</li>
                </ul>
                <h3 className="text-lg font-semibold">Data Protection:</h3>
                <p>
                  We employ industry-standard security measures to protect your data. All information is encrypted and stored securely. We never share your personal information with third parties without your explicit consent.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy