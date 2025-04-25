import React from 'react';
import { Github, Heart, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 md:px-8 bg-gray-100 dark:bg-primary-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <span className="text-gray-900 dark:text-white">Joseph`s</span>
              <span className="text-accent">Portfolio</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A professional software developer specializing in web development, 
              backend systems, and AI integration.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Machakos, Kenya
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              josephmuema416@gmail.com
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              +(254) 799-704-653
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            © {currentYear} Joseph Makau. Made with 
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;