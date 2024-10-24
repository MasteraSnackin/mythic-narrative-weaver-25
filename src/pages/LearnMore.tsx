import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Lightbulb, Target } from "lucide-react"
import { Link } from "react-router-dom"

const LearnMore = () => {
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
              Discover Mythic Mind Labs
            </h1>
            <p className="text-xl text-gray-600">
              Learn how our AI-powered platform is revolutionizing interactive storytelling
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="p-2 bg-purple-100 rounded-lg w-fit">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p className="text-gray-600">
                  We\'re on a mission to transform education through engaging, interactive storytelling that adapts to each reader\'s unique journey.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="p-2 bg-purple-100 rounded-lg w-fit">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold">Innovation</h2>
                <p className="text-gray-600">
                  Our AI technology creates personalized narratives that evolve with each choice, making every story unique to the reader.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="p-6 space-y-4">
                <div className="p-2 bg-purple-100 rounded-lg w-fit">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold">Educational Impact</h2>
                <p className="text-gray-600">
                  Our platform has helped thousands of students improve their reading comprehension and critical thinking skills through interactive storytelling.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">10k+</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">500+</div>
                    <div className="text-sm text-gray-600">Stories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">95%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">50+</div>
                    <div className="text-sm text-gray-600">Schools</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/" className="inline-flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LearnMore