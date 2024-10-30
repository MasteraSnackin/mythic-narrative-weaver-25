import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { motion } from "framer-motion"

export const NewsletterSection = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Success! 🎉",
        description: "You've been subscribed to our newsletter. Welcome aboard!",
      })
      
      setEmail("")
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-purple-50 dark:bg-purple-900/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center space-y-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-purple-900 dark:text-purple-100"
          >
            Stay Updated
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300"
          >
            Subscribe to our newsletter for the latest updates and stories.
          </motion.p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              disabled={isLoading}
              aria-label="Email address"
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="relative min-w-[120px]"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <LoadingSpinner />
                  <span>Subscribing...</span>
                </div>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.section>
  )
}