import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Book, Filter, Search } from "lucide-react"
import { useState } from "react"

const stories = [
  {
    title: "The Dragon's Riddle",
    ageRange: "8-12",
    readingLevel: "Intermediate",
    genre: "Fantasy",
    description: "An interactive tale of wit and wisdom where your choices determine the outcome of a young wizard's journey."
  },
  {
    title: "Space Explorer Academy",
    ageRange: "10-14",
    readingLevel: "Advanced",
    genre: "Science Fiction",
    description: "Navigate through the cosmos and learn about space while making crucial decisions as a cadet at the Space Academy."
  },
  {
    title: "The Friendly Forest",
    ageRange: "5-8",
    readingLevel: "Beginner",
    genre: "Adventure",
    description: "A gentle introduction to reading where young readers help woodland creatures solve simple problems."
  }
];

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
              Story Library
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover interactive stories tailored to your reading level
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <Card key={story.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5 text-purple-600" />
                    {story.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">{story.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 rounded-full text-sm">
                      {story.ageRange}
                    </span>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 rounded-full text-sm">
                      {story.readingLevel}
                    </span>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 rounded-full text-sm">
                      {story.genre}
                    </span>
                  </div>
                  <Button className="w-full">Start Reading</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Library