import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { navLinks } from '../data';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-primary/80 backdrop-blur-md py-3 shadow-md' : 'py-5'
      }`}
    >
      <div className="px-4 md:px-8 max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          <span className="text-gray-900 dark:text-white">Jose</span>
          <span className="text-accent">Portfolio</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.path}
              className={`navbar-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.title}
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-primary-light hover:bg-gray-200 dark:hover:bg-primary transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>
        
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-3 rounded-full bg-gray-100 dark:bg-primary-light"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-full bg-gray-100 dark:bg-primary-light"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white dark:bg-primary-light py-4 px-4 shadow-lg"
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                className={`navbar-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;