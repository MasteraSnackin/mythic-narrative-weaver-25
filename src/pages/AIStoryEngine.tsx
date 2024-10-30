import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Brain, Sparkles, Target } from "lucide-react"

const AIStoryEngine = () => {
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
              AI Story Engine
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover how our AI crafts personalized narratives
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                  <h2 className="text-2xl font-semibold">Adaptive Learning</h2>
                </div>
                <p className="text-gray-600">
                  Our AI engine learns from every choice, adapting the story's difficulty and pacing to match your preferences and reading level.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Target className="w-8 h-8 text-purple-600" />
                  <h2 className="text-2xl font-semibold">Dynamic Narratives</h2>
                </div>
                <p className="text-gray-600">
                  Experience stories that evolve based on your decisions, creating unique paths and outcomes every time you read.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                  <h2 className="text-2xl font-semibold">Educational Integration</h2>
                </div>
                <p className="text-gray-600">
                  Our AI seamlessly weaves educational content into engaging narratives, making learning a natural part of the adventure.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AIStoryEngine