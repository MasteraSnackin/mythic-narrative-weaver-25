import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const blogPosts = [
  {
    id: 1,
    title: "From Hackathon to Innovation: The Birth of Mythic Mind Labs",
    excerpt: "Our journey began in the electrifying crucible of a 36-hour hackathon. Three passionate developers, united by a shared vision for the future of storytelling with AI, came together to create something revolutionary.",
    author: "MML Team",
    date: "2024-03-15",
    category: "Company Story"
  },
  {
    id: 2,
    title: "The Future of Interactive Fiction: A $4.1B Market Opportunity",
    excerpt: "The global interactive fiction market is expected to reach $4.1B by 2027, driven by a desire for engaging and personalized learning experiences. Discover how AI is revolutionizing storytelling.",
    author: "Market Research Team",
    date: "2024-03-12",
    category: "Market Insights"
  },
  {
    id: 3,
    title: "Revolutionizing Education Through AI-Powered Stories",
    excerpt: "Our AI adapts to each reader's choices, skill level, and pacing, creating truly personalized learning experiences. Learn how we're transforming education through interactive storytelling.",
    author: "Education Team",
    date: "2024-03-10",
    category: "Education"
  },
  {
    id: 4,
    title: "Beyond Traditional CYOA: The Power of AI in Storytelling",
    excerpt: "Traditional Choose Your Own Adventure books offer limited choices. See how our AI technology creates truly dynamic narratives that adapt to your every decision.",
    author: "Tech Team",
    date: "2024-03-08",
    category: "Technology"
  },
  {
    id: 5,
    title: "Targeting the Next Generation of Readers",
    excerpt: "With a focus on young audiences aged 5-14 and educational institutions, we're creating engaging content that combines entertainment with learning.",
    author: "Product Team",
    date: "2024-03-05",
    category: "Product Strategy"
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