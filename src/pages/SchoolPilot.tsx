import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BookOpen, School, Trophy } from "lucide-react"

const SchoolPilot = () => {
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
              School Pilot Program
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join our innovative program to bring AI-powered storytelling to your school
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <School className="w-12 h-12 text-purple-600" />
                <h3 className="text-xl font-semibold">Free Trial</h3>
                <p className="text-gray-600">Get started with a 3-month free trial for your school</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <BookOpen className="w-12 h-12 text-purple-600" />
                <h3 className="text-xl font-semibold">Custom Content</h3>
                <p className="text-gray-600">Tailored stories aligned with your curriculum</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <Trophy className="w-12 h-12 text-purple-600" />
                <h3 className="text-xl font-semibold">Support</h3>
                <p className="text-gray-600">Dedicated support team for your school</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Ready to Get Started?</h2>
              <p className="text-gray-600">
                Join our pilot program and be among the first schools to experience the future of interactive learning.
              </p>
              <Button size="lg" className="w-full md:w-auto">Apply Now</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default SchoolPilot