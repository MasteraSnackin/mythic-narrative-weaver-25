import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Scale } from "lucide-react"

const Terms = () => {
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
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Guidelines for using our platform
            </p>
          </div>

          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <Scale className="w-8 h-8 text-purple-600" />
                <h2 className="text-2xl font-semibold">Platform Usage Terms</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <h3 className="text-lg font-semibold">1. Account Usage</h3>
                <p>
                  By creating an account, you agree to provide accurate information and maintain the security of your login credentials. Each account is for individual use only.
                </p>

                <h3 className="text-lg font-semibold">2. Content Guidelines</h3>
                <p>
                  All content generated through our platform must be appropriate for our target age group (5-14 years). Any inappropriate content will result in immediate account suspension.
                </p>

                <h3 className="text-lg font-semibold">3. Intellectual Property</h3>
                <p>
                  The stories, artwork, and AI technology on our platform are protected by copyright. Users retain rights to their created content while granting us license to use it for platform improvement.
                </p>

                <h3 className="text-lg font-semibold">4. Educational Use</h3>
                <p>
                  Educational institutions must obtain appropriate licenses for classroom use. Individual student accounts must be managed in compliance with educational privacy laws.
                </p>

                <h3 className="text-lg font-semibold">5. Termination</h3>
                <p>
                  We reserve the right to terminate accounts that violate these terms or engage in inappropriate behavior. Users may cancel their subscription at any time.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Terms