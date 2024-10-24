import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
              Mythic Mind Labs
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Revolutionizing storytelling with AI-powered narratives.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">About</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">Blog</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">Documentation</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">
                <Facebook className="h-5 w-5" aria-label="Facebook" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">
                <Twitter className="h-5 w-5" aria-label="Twitter" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">
                <Instagram className="h-5 w-5" aria-label="Instagram" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">
                <Linkedin className="h-5 w-5" aria-label="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mythic Mind Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;