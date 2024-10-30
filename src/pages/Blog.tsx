import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const blogPosts = [
  {
    id: 1,
    title: "The Evolution of AI Storytelling",
    excerpt: "Discover how artificial intelligence is revolutionizing the way we create and consume stories.",
    author: "Sarah Johnson",
    date: "2024-03-15",
    category: "Technology"
  },
  {
    id: 2,
    title: "Creating Immersive Learning Experiences",
    excerpt: "Learn how interactive storytelling can enhance educational outcomes for young readers.",
    author: "Michael Chen",
    date: "2024-03-12",
    category: "Education"
  },
  {
    id: 3,
    title: "The Power of Personalized Narratives",
    excerpt: "Understanding the impact of AI-driven story adaptation on reader engagement.",
    author: "Emma Williams",
    date: "2024-03-10",
    category: "Research"
  }
];

const Blog = () => {
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
              Latest Stories & Insights
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore the latest developments in AI storytelling and education
            </p>
          </div>

          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl font-bold hover:text-purple-600">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                      <span className="text-sm px-3 py-1 bg-purple-100 text-purple-600 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-gray-500">
                          <User className="w-4 h-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="flex items-center text-purple-600 hover:text-purple-700"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;