import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Rocket, Users } from "lucide-react"
import { Link } from "react-router-dom"

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-50 to-white dark:from-purple-900 dark:via-gray-900 dark:to-black pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
            Begin Your Adventure
          </h1>
          
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Rocket className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-semibold">Start Your Journey</h2>
                </div>
                <p className="text-gray-600">Experience AI-powered stories that adapt to your choices and create unique adventures every time.</p>
                <Button className="w-full">Create Your Account</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-semibold">Explore Stories</h2>
                </div>
                <p className="text-gray-600">Dive into our growing library of interactive stories that blend entertainment with educational value.</p>
                <Button variant="outline" className="w-full">Browse Library</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-semibold">Join Community</h2>
                </div>
                <p className="text-gray-600">Connect with other young readers and educators in our growing storytelling community.</p>
                <Button variant="outline" className="w-full">Join Discord</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700">
              <ArrowRight className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default GetStarted