import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-0 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="text-accent">Joseph</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            Professional Software Developer
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 mb-8">
            I create modern web applications and solve complex problems with code.
            Specializing in full-stack development with expertise in React, Laravel,
            and Python AI integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="button-primary">
              Get in Touch
            </a>
            <a href="#projects" className="button-outline">
              View My Work
            </a>
          </div>
          
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors"
              aria-label="Github"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="relative bg-gray-100 dark:bg-primary-light p-8 rounded-lg shadow-lg border border-gray-200 dark:border-primary backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
                <code>
                  {`import React from 'react';

function Developer() {
  const skills = [
    'React',
    'Laravel',
    'Python',
    'AI',
    'JavaScript'
  ];
  
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Welcome to my portfolio</p>
    </div>
  );
}`}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 text-accent hover:text-accent-dark transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;