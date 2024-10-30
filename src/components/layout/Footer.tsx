import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="block">
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                Mythic Mind Labs
              </h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              Revolutionizing storytelling with AI-powered narratives.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">Contact</Link></li>
              <li><Link to="/pricing" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/library" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">Library</Link></li>
              <li><Link to="/educator-resources" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">For Educators</Link></li>
              <li><Link to="/school-pilot" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">School Pilot</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="h-5 w-5" />
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