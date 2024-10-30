import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { BookOpen, Sparkles, Target } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

const StoryCreator = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const { toast } = useToast()

  const handleSave = () => {
    toast({
      title: "Story saved! 📚",
      description: "Your story has been saved successfully.",
    })
  }

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
              Story Creator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Create interactive stories with AI assistance
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Story Title</label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter your story title..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Story Content</label>
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Start writing your story..."
                    rows={10}
                  />
                </div>
                <div className="flex gap-4">
                  <Button onClick={handleSave} className="flex-1">
                    <BookOpen className="mr-2 h-4 w-4" /> Save Draft
                  </Button>
                  <Button className="flex-1">
                    <Sparkles className="mr-2 h-4 w-4" /> AI Assist
                  </Button>
                  <Button className="flex-1">
                    <Target className="mr-2 h-4 w-4" /> Preview
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

export default StoryCreator