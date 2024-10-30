import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Award, BookOpen, Clock, LineChart, Star } from "lucide-react"

const ParentDashboard = () => {
  const stats = [
    {
      title: "Books Read",
      value: "12",
      icon: BookOpen,
      change: "+2 this week"
    },
    {
      title: "Reading Time",
      value: "45h",
      icon: Clock,
      change: "+5h this week"
    },
    {
      title: "Comprehension",
      value: "85%",
      icon: LineChart,
      change: "+3% improvement"
    },
    {
      title: "Achievements",
      value: "8",
      icon: Award,
      change: "Latest: Speed Reader"
    }
  ]

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
              Parent Dashboard
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Track your child's reading progress and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-gray-500">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["The Dragon's Riddle", "Space Explorer Academy", "The Friendly Forest"].map((story) => (
                    <div key={story} className="flex items-center gap-4">
                      <BookOpen className="h-4 w-4 text-purple-600" />
                      <span>{story}</span>
                      <span className="text-sm text-gray-500 ml-auto">2h ago</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Speed Reader", "Story Explorer", "Word Master"].map((achievement) => (
                    <div key={achievement} className="flex items-center gap-4">
                      <Star className="h-4 w-4 text-purple-600" />
                      <span>{achievement}</span>
                      <span className="text-sm text-gray-500 ml-auto">Earned</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ParentDashboard