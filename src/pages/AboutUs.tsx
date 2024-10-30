import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code, Coffee, Users } from "lucide-react"

const AboutUs = () => {
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
              Our Story
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Born in a 36-hour hackathon, fueled by passion and caffeine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4 text-center">
                <Coffee className="w-12 h-12 text-purple-600 mx-auto" />
                <h3 className="text-xl font-semibold">The Hackathon</h3>
                <p className="text-gray-600">36 hours of coding, strategizing, and endless coffee</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4 text-center">
                <Code className="w-12 h-12 text-purple-600 mx-auto" />
                <h3 className="text-xl font-semibold">The Tech</h3>
                <p className="text-gray-600">Cutting-edge AI powering personalized storytelling</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4 text-center">
                <Users className="w-12 h-12 text-purple-600 mx-auto" />
                <h3 className="text-xl font-semibold">The Vision</h3>
                <p className="text-gray-600">Revolutionizing interactive fiction for the next generation</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-gray-600">
                At Mythic Mind Labs, we're transforming storytelling through AI-powered narratives that adapt to each reader's choices. Our goal is to create immersive, educational experiences that inspire creativity and foster a love for reading.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutUs