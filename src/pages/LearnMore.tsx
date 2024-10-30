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
              The Future of Storytelling
            </h1>
            <p className="text-xl text-gray-600">
              Born in a 36-hour hackathon, we're revolutionizing interactive storytelling with AI-powered narratives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="p-2 bg-purple-100 rounded-lg w-fit">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold">Our Vision</h2>
                <p className="text-gray-600">
                  Every reader becomes the hero of their own epic adventure, with choices that truly matter and shape unique, personalized narratives.
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
                  Our AI technology adapts to your choices, skill level, and reading pace, creating an immersive experience that evolves with you.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="p-6 space-y-4">
                <div className="p-2 bg-purple-100 rounded-lg w-fit">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold">Market Opportunity</h2>
                <p className="text-gray-600">
                  The global interactive fiction market is expected to reach $4.1B by 2027, with CYOA books having sold over 270M copies worldwide.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">4.1B</div>
                    <div className="text-sm text-gray-600">Market Size by 2027</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">270M+</div>
                    <div className="text-sm text-gray-600">CYOA Books Sold</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">5-14</div>
                    <div className="text-sm text-gray-600">Target Age Range</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">36hr</div>
                    <div className="text-sm text-gray-600">Hackathon Origin</div>
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