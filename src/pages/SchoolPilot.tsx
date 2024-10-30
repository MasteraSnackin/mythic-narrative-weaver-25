import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BookOpen, GraduationCap, LineChart, Users } from "lucide-react"
import { Link } from "react-router-dom"

const SchoolPilot = () => {
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
              School Pilot Program
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Partner with us to bring AI-powered interactive learning to your school
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                  <h2 className="text-2xl font-semibold">Educational Innovation</h2>
                </div>
                <p className="text-gray-600">
                  Join our pilot program and be among the first schools to experience the future of interactive learning. Our AI-powered stories adapt to each student's learning pace and style.
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-semibold mb-2">What You Get:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Free access during pilot period</li>
                      <li>• Customized content for your curriculum</li>
                      <li>• Teacher training and support</li>
                      <li>• Regular progress reports</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Program Duration:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 3-month initial pilot</li>
                      <li>• Optional extension</li>
                      <li>• Flexible implementation</li>
                      <li>• Ongoing support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-semibold">Personalized Learning</h3>
                  <p className="text-gray-600">
                    Stories adapt to each student's reading level and learning pace
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <LineChart className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-semibold">Progress Tracking</h3>
                  <p className="text-gray-600">
                    Detailed analytics on student engagement and comprehension
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <Users className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-semibold">Teacher Support</h3>
                  <p className="text-gray-600">
                    Comprehensive training and ongoing technical assistance
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold">Ready to Join?</h2>
                <p className="text-gray-600">
                  Limited spots available for our pilot program. Contact us to learn more about bringing interactive storytelling to your school.
                </p>
                <div className="flex gap-4">
                  <Button asChild className="flex-1">
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link to="/learn-more">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SchoolPilot