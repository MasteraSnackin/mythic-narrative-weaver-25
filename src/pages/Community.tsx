import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { MessageSquare, Users, BookOpen, GraduationCap } from "lucide-react"

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-50 to-white dark:from-purple-900 dark:via-gray-900 dark:to-black pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
              Community Hub
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Connect with fellow storytellers, educators, and readers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                  Featured Stories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {["The Magic Library", "Space Adventures", "Time Travelers"].map((story) => (
                  <div key={story} className="flex items-center justify-between">
                    <span>{story}</span>
                    <Button variant="outline" size="sm">Read</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                  Discussion Forums
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {["Writing Tips", "Story Ideas", "Technical Help"].map((forum) => (
                  <div key={forum} className="flex items-center justify-between">
                    <span>{forum}</span>
                    <Button variant="outline" size="sm">Join</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-purple-600" />
                  Educational Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {["Lesson Plans", "Writing Guides", "Reading Strategies"].map((resource) => (
                  <div key={resource} className="flex items-center justify-between">
                    <span>{resource}</span>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  Community Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {["Writing Workshop", "Story Reading", "Teacher Training"].map((event) => (
                  <div key={event} className="flex items-center justify-between">
                    <span>{event}</span>
                    <Button variant="outline" size="sm">Register</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Community