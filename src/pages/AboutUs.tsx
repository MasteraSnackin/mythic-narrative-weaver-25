import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code, Users, Rocket } from "lucide-react"

const AboutUs = () => {
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
              Our Story
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Born in a 36-hour hackathon, fueled by caffeine and a shared vision for AI-powered storytelling
            </p>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">The Birth of Mythic Mind Labs</h2>
              <p className="text-gray-600">
                Our journey began in the electrifying crucible of a 36-hour hackathon. Three passionate developers, united by a shared vision for the future of storytelling with AI, spent those intense hours coding, strategizing, and problem-solving. This experience forged an unbreakable bond and laid the groundwork for what would become Mythic Mind Labs (MML).
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <Code className="w-12 h-12 text-purple-600" />
                <h3 className="text-xl font-semibold">Technical Excellence</h3>
                <p className="text-gray-600">
                  We started with a rock-solid technical backend, leveraging cutting-edge AI technology to revolutionize storytelling.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <Users className="w-12 h-12 text-purple-600" />
                <h3 className="text-xl font-semibold">Growing Team</h3>
                <p className="text-gray-600">
                  We're actively seeking UI/UX Design Wizards and Marketing Mavericks to join our passionate team.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <Rocket className="w-12 h-12 text-purple-600" />
                <h3 className="text-xl font-semibold">Market Potential</h3>
                <p className="text-gray-600">
                  The global interactive fiction market is projected to reach $4.1B by 2027, with CYOA books having sold over 270M copies.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="text-gray-600">
                We're revolutionizing storytelling with AI-powered narratives that truly adapt to your choices. Every reader becomes the hero of their own epic adventure, with stories that adjust to their skill level and keep them engaged. Our mission is to create personalized, interactive stories that will keep you immersed for hours while fostering learning and creativity.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutUs